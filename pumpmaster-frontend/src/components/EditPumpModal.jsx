import React from 'react';

const EditPumpModal = ({ pump, onClose, onChange, onSave }) => {
    if (!pump) return null;
    return (
        <div style={{ backdropFilter: 'blur(0.5px)' }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-transparent pointer-events-auto">
            <div className="absolute inset-0 bg-transparent pointer-events-auto"></div>

            {/* Modal content */}
            <div className="relative z-10 bg-white rounded-lg shadow-lg w-[90%] max-w-xl p-6">
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-sm font-bold text-gray-600">{pump.newPump ? "New" : "Edit"} Pump</h3>
                    <button
                        className="text-gray-500 hover:text-red-500 text-xl font-bold"
                        onClick={onClose}
                    >
                        ×
                    </button>
                </div>
                <hr className="mb-10 border-gray-300" />

                {/* Pump name heading and ID */}
                <div className="space-y-2 mb-4 px-10">
                    <h2 className="text-xl font-bold text-gray-800">{pump.name}</h2>
                    <div className="flex justify-between text-sm text-gray-400">
                        <p>Pump ID:</p>
                        <p>{pump.id}</p>
                    </div>
                </div>

                {/* Editable form */}
                <div className="space-y-4 px-10">
                    <div>
                        <label className="block text-sm font-medium mb-1">Pump Name</label>
                        <input
                            type="text"
                            value={pump.name}
                            onChange={(e) => onChange({ ...pump, name: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Pump Type</label>
                        <input
                            type="text"
                            value={pump.type || ''}
                            onChange={(e) => onChange({ ...pump, type: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium mb-1">Area</label>
                        <select
                            value={pump.area || ''}
                            onChange={(e) => onChange({ ...pump, area: e.target.value })}
                            className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                        >
                            <option value="">Select Area</option>
                            <option value="Area A">Area A</option>
                            <option value="Area B">Area B</option>
                            <option value="Area C">Area C</option>
                            <option value="Area D">Area D</option>
                            <option value="Area E">Area E</option>
                            <option value="Area F">Area F</option>
                            <option value="Area G">Area G</option>
                            <option value="Area H">Area H</option>
                        </select>
                    </div>

                    {/* Latitude & Longitude */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Latitude</label>
                            <input
                                type="text"
                                value={pump.latitude || ''}
                                onChange={(e) => onChange({ ...pump, latitude: e.target.value })}
                                className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Longitude</label>
                            <input
                                type="text"
                                value={pump.longitude || ''}
                                onChange={(e) => onChange({ ...pump, longitude: e.target.value })}
                                className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                        </div>
                    </div>

                    {/* Offset */}
                    <div>
                        <label className="block text-sm font-medium mb-1">Offset</label>
                        <div className="relative">
                            <input
                                type="text"
                                value={pump.offset || ''}
                                onChange={(e) => onChange({ ...pump, offset: e.target.value })}
                                className="w-full pr-10 px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            />
                            <span className="absolute inset-y-0 right-3 flex items-center text-sm font-medium pointer-events-none">
                                sec
                            </span>
                        </div>
                    </div>
                    {/* Reassure Min & Max */}
                    <div className="flex space-x-4">
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Reassure Min</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={pump.minPressure || ''}
                                    onChange={(e) => onChange({ ...pump, reassureMin: e.target.value })}
                                    className="w-full pr-10 px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-sm font-medium pointer-events-none">
                                    psi
                                </span>
                            </div>
                        </div>
                        <div className="w-1/2">
                            <label className="block text-sm font-medium mb-1">Reassure Max</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    value={pump.maxPressure || ''}
                                    onChange={(e) => onChange({ ...pump, reassureMax: e.target.value })}
                                    className="w-full px-3 py-2 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                                />
                                <span className="absolute inset-y-0 right-3 flex items-center text-sm font-medium pointer-events-none">
                                    psi
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex justify-end space-x-3 px-10">
                    <button
                        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={onSave}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EditPumpModal;
