import React from 'react';

const steps = [
    {
        id: 1,
        number: "1",
        title: "Create an Account",
        description: "Access discounts on high quality, local beef, and share with friends for more discounts."
    },
    {
        id: 2,
        number: "2",
        title: "Pay for half or whole cow",
        description: "Orders placed by end of month, every month. Split a cow or go all the way."
    },
    {
        id: 3,
        number: "3",
        title: "Enjoy",
        description: "Your meat will be delivered directly to your front door. We also provide storage options."
    },
]

function HowItWorks() {
    return (
        <div className="py-12" style={{ backgroundColor: '#2ac1a2' }}>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-semibold text-center mb-8">How It Works</h2>
                <div className="flex flex-wrap justify-between items-center">
                    {/* { Steps } */}
                    {steps.map((item) => (
                        <div className="flex flex-col items-center justify-center p-10 w-full md:w-1/3 mb-8 md:mb-0">
                            <div className="text-center mb-4">
                                <div className="w-12 h-12 rounded-full bg-green-400 flex justify-center items-center">
                                    <span className="text-white text-lg">{item.number}</span>
                                </div>
                            </div>
                            <div className="text-center mb-4">{item.title}</div>
                            <div className="text-sm text-center text-white-600">{item.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
