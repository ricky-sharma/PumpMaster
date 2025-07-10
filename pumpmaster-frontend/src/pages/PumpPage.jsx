import React from 'react';
import { useLocation } from 'react-router-dom';
import mapImage from '../assets/map-test-image.jpg';
import pressureImage from '../assets/pressure-test-image.jpg';

const PumpPage = () => {
    const location = useLocation();
    const pump = location.state?.pump;
    if (!pump) return <div>No pump data provided.</div>;

    return (
        <div className="p-8 py-15 max-w-4xl min-h-screen mx-auto bg-white rounded shadow">
            {/* Header Row */}
            <div className="flex justify-between items-start flex-wrap gap-4 mb-20">
                <h1 className="text-2xl font-bold text-gray-800">{pump.name}</h1>

                <div className="space-y-1 text-sm text-gray-600">
                    <div><strong>Pump ID:</strong> {pump.id}</div>
                    <div><strong>Status:</strong> {pump.status || 'Operational'}</div>
                    <div><strong>Last Updated:</strong> {pump.lastUpdated || '2025-07-10'}</div>
                </div>
            </div>

            {/* Attributes */}
            <h2 className="text-lg font-bold text-gray-700 mb-8">Attributes</h2>
            <div className="grid grid-cols-1 gap-y-4 text-sm text-gray-800 mb-6">
                <div className="flex justify-between">
                    <span className="font-medium">Type:</span>
                    <span>{pump.type}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Area/Block:</span>
                    <span>{pump.area}</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Location:</span>
                    <span>{pump.latitude}&deg; N, {pump.longitude}&deg; W</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Flow Rate:</span>
                    <span>{pump.flowRate} GPM</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Offset:</span>
                    <span>{pump.offset} sec</span>
                </div>
                <div className="flex justify-between">
                    <span className="font-medium">Pressure:</span>
                    <span>{pump.currentPressure} psi | {pump.minPressure} psi | {pump.maxPressure} psi</span>
                </div>
            </div>

            {/* Map Placeholder */}
            <h2 className="text-lg font-bold text-gray-600 mb-6">Map</h2>
            <div className="mb-15">
                <img
                    src={mapImage}
                    alt="Map showing pump location"
                    className="w-full rounded"
                />
            </div>

            {/* Graph Placeholder */}
            <div className="text-lg font-bold text-gray-600 mb-4">
                <img
                    src={pressureImage}
                    alt="Pressure graph"
                    className="w-full rounded"
                />
            </div>
        </div>
    );
};

export default PumpPage;