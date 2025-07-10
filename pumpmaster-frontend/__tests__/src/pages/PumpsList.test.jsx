/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PumpsList from '../../../src/pages/PumpsList';
import * as api from '../../../src/services/api';
import { BrowserRouter } from 'react-router-dom';

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}));

// Mock API call
jest.mock('../../../src/services/api');

describe('PumpsList Component', () => {
    const mockPumps = [
        { id: '1', name: 'Pump1', area: 'Area1', flowRate: 10 },
        { id: '2', name: 'Pump2', area: 'Area2', flowRate: 20 },
    ];

    beforeAll(() => {
        window.matchMedia = window.matchMedia || function () {
            return {
                matches: false,
                media: '',
                onchange: null,
                addListener: jest.fn(),
                removeListener: jest.fn(),
                addEventListener: jest.fn(),
                removeEventListener: jest.fn(),
                dispatchEvent: jest.fn(),
            };
        };
    });

    beforeEach(() => {
        api.getPumps.mockResolvedValue({ data: mockPumps });
        api.updatePump.mockResolvedValue({});
        mockedNavigate.mockClear();
    });

    it('renders heading and new pump button', async () => {
        render(<PumpsList />, { wrapper: BrowserRouter });
        await waitFor(() => {
            expect(screen.getByText(/pumps/i)).toBeInTheDocument();
            expect(screen.getByRole('button', { name: /new pump/i })).toBeInTheDocument();
        });
    });

    it('loads and displays pumps in grid', async () => {
        render(<PumpsList />, { wrapper: BrowserRouter });
        await waitFor(() => {
            expect(screen.getByText('Pump1')).toBeInTheDocument();
            expect(screen.getByText('Pump2')).toBeInTheDocument();
        });
    });

    it('clicking New Pump button opens modal', async () => {
        render(<PumpsList />, { wrapper: BrowserRouter });
        fireEvent.click(screen.getByRole('button', { name: /new pump/i }));
        await waitFor(() => {
            expect(screen.getByText(/pump name/i)).toBeInTheDocument();
        });
    });

    it('clicking a pump row calls navigate', async () => {
        api.getPumps.mockResolvedValueOnce({ data: mockPumps });
        render(<PumpsList />, { wrapper: BrowserRouter });
        await waitFor(() => screen.getByText('Pump1'));
        const rows = screen.getAllByRole('row');
        fireEvent.click(rows[1]);
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('/pump-page', {
                state: { pump: mockPumps[0] },
            });
        });
    });
});
