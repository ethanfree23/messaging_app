import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import cowInPool1 from '../img/cowInPool1.jpg'
// import cowInPool2 from '../img/cowInPool2.jpg'

function Hero() {

    return (
        <div className="bg-gray-900">
            <div className="relative isolate overflow-hidden pt-14">
                <img
                    src={cowInPool1}
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover"
                />
                <div
                    className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
                <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
                    <div className="backdrop-blur-md bg-opacity-95 p-3 rounded-lg">
                        <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-black ring-1 ring-white/10 hover:ring-white/20"
                                style={{ WebkitTextStroke: '1px black' }}>
                                Announcing our next round of purchases.{' '}
                                <a href="#" className="font-extrabold text-white"
                                    style={{ WebkitTextStroke: '0.25px black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                    <span className="absolute inset-0" aria-hidden="true" />
                                    Sign up <span aria-hidden="true">&rarr;</span>
                                </a>
                            </div>
                        </div>
                        <div className="text-center">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl" style={{ WebkitTextStroke: '1px black' }}>
                                We’re changing the way people order steaks
                            </h1>
                            <p className="mt-6 text-lg leading-8 text-black" style={{ WebkitTextStroke: '0.55px black' }}>
                                Ever see yourself purchasing a whole cow? Cow Pool makes it easy for you to purchase a whole, or half, cow, fully butchured, packaged, and delivered to your door. We also offer storage solutions, in case freezer space is limited.
                            </p>
                            <div className="mt-10 flex items-center justify-center gap-x-6">
                                <a
                                    href="#"
                                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
                                >
                                    Get started
                                </a>
                                <a href="#" className="text-sm font-semibold leading-6 text-white font-extrabold text-white"
                                    style={{ WebkitTextStroke: '0.25px black', textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>
                                    Learn more <span aria-hidden="true">→</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero;