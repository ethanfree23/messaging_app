import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Facts = () => {
    const [facts, setFacts] = useState([]);
    const [formData, setFormData] = useState({
        label: '',
        text: '',
        location: '',
    });
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:3000/api/v1/facts');
                setFacts(response.data);
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
            await axios.post('http://127.0.0.1:3000/api/v1/facts', formData);
            // Reload the page after successful submission
            window.location.reload();
        } catch (error) {
            console.error('Error creating fact:', error);
        }
    };

    const handleDelete = async factId => {
        try {
            await axios.delete(`http://127.0.0.1:3000/api/v1/facts/${factId}`);
            window.location.reload();
        } catch (error) {
            console.error('Error deleting fact:', error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold mb-4">Facts</h1>
            <button onClick={() => setShowModal(true)} className="mb-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md">+ New Fact</button>

            {/* Modal for creating a new fact */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-3xl md:max-w-none mx-auto md:mx-0 md:w-400">
                        <h2 className="text-xl font-bold mb-4">Create New Fact</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="label" className="block text-sm font-medium text-gray-700">Label</label>
                                <input type="text" id="label" name="label" value={formData.label} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="text" className="block text-sm font-medium text-gray-700">Text</label>
                                <input type="text" id="text" name="text" value={formData.text} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
                                <input type="location" id="location" name="location" value={formData.location_id} onChange={handleChange} required className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
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
                {/* Render each fact */}
                {facts.map(fact => (
                    <div key={fact.id} className="border p-4 overflow-hidden relative">
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p className="font-bold">{fact.label}</p>
                        </div>
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p className="">{fact.text}</p>
                        </div>
                        <div className="whitespace-nowrap" style={{ overflowX: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}>
                            <p>{fact.location_id}</p>
                        </div>
                        <button
                            onClick={() => handleDelete(fact.id)}
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
export default Facts;
