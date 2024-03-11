import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Locations = () => {
    const [locations, setLocations] = useState([]);
    const [formData, setFormData] = useState({
        latitude: '',
        longitude: '',
        label: '',
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/v1/locations');
                setLocations(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleChange = event => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            await axios.post('http://127.0.0.1:3000/api/v1/locations', formData);
            // Reload the page after successful submission
            window.location.reload();
        } catch (error) {
            console.error('Error creating location:', error);
        }
    };

    const handleDelete = async locationId => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/v1/locations/${locationId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting location:', error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Locations</h1>
            <button onClick={() => setShowModal(true)} className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">+ New Location</button>

            {/* Modal for creating a new location */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-3xl md:max-w-none mx-auto md:mx-0 md:w-400">
                        <h2 className="text-xl font-bold mb-4">Create New Loaciton</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Latitude</label>
                                <input type="text" id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Longitude</label>
                                <input type="text" id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Label</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="flex justify-between">
                                <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md">Submit</button>
                                <button onClick={() => setShowModal(false)} className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded-md">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Render each location */}
                {locations.map(location => (
                    <div key={location.id} className="border p-4 overflow-hidden relative">
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p className="font-bold">{location.label}</p>
                        </div>
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p className="font-thin">{location.latitude}</p>
                        </div>
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p className="font-thin">{location.longitude}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(location.id)}
                            className="absolute top-0 right-0 mx-1 bg-blue-300 text-black transition-colors duration-300 hover:bg-red-600"
                        >
                            &#10005;
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Locations;
