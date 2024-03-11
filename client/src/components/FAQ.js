import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
    {
        question: "What size company is best for this application?",
        answer:
            "We work with a wide variety of OEMs from startups putting their first handful of machines into the field to established industry leaders with thousands of machines in their install base.",
    },
    {
        question: "What if we already have a store on our website?",
        answer:
            "We aren’t afraid of a little competition! Your website store probably did not completely eliminate orders by phone and email, HubOEM is intended to work in concert with your other sales channels to drive after sales revenue growth.",
    },
    {
        question: "Our machines are all custom built, will this solution still work for us?",
        answer:
            "Yes! This is exactly the problem HubOEM was designed to solve. Parts lists and manuals can be tracked at the machine specific/serial number level and tailored to each individual install. In fact, we now offer an integration that allows your to export your assembly drawings right from SolidWorks or other design software and we can pull all your individual parts directly into our system.",
    },
    {
        question: "We like to be the main point of contact with our customers. Will this application facilitate direct communication?",
        answer:
            "If you are already using email and social media to interact with your customers, then this is really just another tool in that toolbox. Your machine’s view will still show your logo and all POs and messages go right to you.",
    },
    {
        question: "We already have a CRM, how is this any different?",
        answer:
            "HubOEM is NOT a CRM. It is a customer service platform to better support your existing install base. In fact, we offer easy integration with many of the leading CRM providers to easily and seamlessly manage your customer data.",
    },
    {
        question: "We sell plenty of parts already, why should we change what works?",
        answer:
            "Horses could get you from one place to another, but cars made it faster, easier and more reliable. HubOEM clients consistently sell more parts with less effort on the part of their aftersale team.",
    },
    {
        question: "Our customers are large public companies. How do I know they will be open to using your product?",
        answer:
            "HubOEM is already working with large consumer-facing brands.",
    },
    {
        question: "Our machines have been in the field forever?",
        answer:
            "No Problem! Implementing HubOEM provides a great opportunity to connect with your install base, provide needed parts and services and assess opportunities for new equipment sales!",
    },
    {
        question: "Our machines do not require any wear part replacements. How does HubOEM add value?",
        answer:
            "No Problem! Implementing HubOEM provides a great opportunity to connect with your install base, provide needed parts and services and assess opportunities for new equipment sales!",
    },
    {
        question: "Does HubOEM have API capabilities?",
        answer:
            "Yes, HubOEM has API integrations for easy connection to many common enterprise applications.",
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