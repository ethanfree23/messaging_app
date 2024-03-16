import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "Do I need to pay in full before my order is placed?",
        answer:
            "Yes, we need to receive the money before the end of the month for your order to be placed. If you pay half the total, we can have your name of the list to ensure a spot, given you pay the rest on time.",
    },
    {
        question: "I want to do this, but I do not have the freezer space. Do you have a solution?",
        answer:
            "Yes, Cow Pool has the abiltiy to store your ",
    },
    {
        question: "If I purchase more than one cow, is there an additional discount?",
        answer:
            "As for now, we do not offer discounts for purchasing more than one whole cow. However, we do offer a discount if you refer someone who ends up purchasing from us.",
    },
    {
        question: "Do you have other types of meat?",
        answer:
            'Currently, the pool is strictly "Cows only". Soon we will offer poultry.',
    },
]

function FAQ() {
    return (
        <div className="bg-white">
            <main>
                <div className="relative isolate">
                    <div
                        className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                        aria-hidden="true"
                    >
                        <div
                            className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
                            style={{
                                clipPath:
                                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                            }}
                        />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-14 lg:px-8 lg:py-16">
                        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Frequently asked questions</h2>
                            <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default FAQ;