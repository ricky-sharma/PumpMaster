import React, { useEffect, useState } from 'react';
import DataGrid, { trackPromise } from 'react-data-grid-lite';
import { getPumps, updatePump } from '../services/api';
import EditPumpModal from '../components/EditPumpModal';
import { useNavigate } from 'react-router-dom';

const PumpsList = () => {
    const [columns, setColumns] = useState([]);
    const [selectedPump, setSelectedPump] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [pumps, setPumps] = useState([]);
    const navigate = useNavigate();

    const options = {
        enableColumnSearch: false,
        actionColumnAlign: 'right',
        enableDownload: false,
        enableColumnResize: true,
        deleteButton: {
            event: (e, row) => {
                const confirmed = window.confirm(`Are you sure you want to delete pump "${row.name}"?`);
                if (confirmed) {
                    setPumps(prev =>
                        prev.filter(p => p.id !== row.id)
                    );
                }
            }
        },
        editButton: {
            event: (e, row) => {
                setSelectedPump(row);
                setIsModalOpen(true);
            }
        }
    };

    useEffect(() => {
        fetchPumps();
    }, []);

    const fetchPumps = async () => {
        const res = await getPumps();
        trackPromise(res);
        setPumps(res.data);

        if (res.data.length > 0) {
            const cols = Object.keys(res.data[0]).map((key) => ({
                name: key,
                alias:
                    key === 'name' ? "Pump Name" :
                        key == 'area' ? 'Area/Block' :
                            key == 'flowRate' ? 'Flow Rate' :
                                key == 'currentPressure' ? 'Current Pressure' :
                                    key == 'minPressure' ? 'Min Pressure' :
                                        key == 'maxPressure' ? 'Max Pressure' : key,
                width: key === 'name' ? '100px' : '125px',
                hidden: key === 'id' ? true : false,
                class: key !== 'name' ? 'custom-column': ''
            }));
            setColumns(cols);
        }
    };

    const handleSave = async () => {
        await updatePump(selectedPump.id, selectedPump);
        setIsModalOpen(false);
        fetchPumps();
    };

    const handleNewPump = () => {
        setSelectedPump({
            id: '',
            name: '',
            type: '',
            area: '',
            latitude: '',
            longitude: '',
            offset: '',
            reassureMin: '',
            reassureMax: '',
            newPump: true
        });
        setIsModalOpen(true);
    };

    return (
        <div className="flex flex-col items-center p-10 min-h-screen bg-gray-50">
            <div className="w-full max-w-7xl flex justify-between items-center mb-8">
                <h2 className="text-3xl font-semibold text-gray-800">Pumps</h2>
                <button
                    className="px-4 py-2 bg-gray-200 text-gray-800 text-sm font-medium rounded hover:bg-gray-300 transition"
                    onClick={handleNewPump}
                >
                    New Pump
                </button>
            </div>


            <div className="w-full max-w-7xl py-6">
                <DataGrid
                    id="pumps-grid"
                    columns={columns}
                    data={pumps}
                    options={options}
                    width="100%"
                    height="60vh"
                    theme="blue-core"
                    pageSize="15"
                    onRowClick={(e, row) => {
                        navigate('/pump-page', { state: { pump: row } });
                    }}
                />
            </div>

            {isModalOpen && (
                <EditPumpModal
                    pump={selectedPump}
                    onClose={() => setIsModalOpen(false)}
                    onChange={setSelectedPump}
                    onSave={handleSave}
                />
            )}
        </div>
    );
};

export default PumpsList;
