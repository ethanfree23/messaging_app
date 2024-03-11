import React from 'react';

function HowItWorks() {
    return (
        <div className="bg-slate-100 py-12">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">How it Works</h2>
                <div className="flex flex-wrap justify-between items-center">
                    {/* Step 1 */}
                    <div className="flex flex-col items-center justify-center p-10 w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="text-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                                <span className="text-white text-lg">1</span>
                            </div>
                        </div>
                        <div className="text-center mb-4">Setup & Onboard</div>
                        <div className="text-sm text-white-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    </div>
                    {/* Step 2 */}
                    <div className="flex flex-col items-center justify-center p-10 w-full md:w-1/3 mb-8 md:mb-0">
                        <div className="text-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                                <span className="text-white text-lg">2</span>
                            </div>
                        </div>
                        <div className="text-center mb-4">Handle Orders</div>
                        <div className="text-sm text-white-600">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                    {/* Step 3 */}
                    <div className="flex flex-col items-center justify-center p-10 w-full md:w-1/3">
                        <div className="text-center mb-4">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex justify-center items-center">
                                <span className="text-white text-lg">3</span>
                            </div>
                        </div>
                        <div className="text-center mb-4">Analyze Data</div>
                        <div className="text-sm text-white-600">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
