function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="lg:pr-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">Get more</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Support Local Ranchers.<br /> Save Money.<br /> Eat Healthier.</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Instead of going to the supermarket and purchasing some meat from an industrial farm in another state, spend your money on high quality beef, produced by Ranchers in the Huffman area. Now you can enjoy delicious meat, at a fraction of the cost, knowing you are helping your community. 
              </p>
              <div className="mt-8">
                <a
                  href="#"
                  className="inline-flex rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a>
              </div>
              <figure className="mt-16 border-l border-gray-200 pl-8 text-gray-600">
                <blockquote className="text-base leading-7">
                  <p>
                    “We used to go through about $200 a month between ground beef and steaks. Now, we can eat twice as much meat each month, for the same price. It tastes better than H-E-B, delivered when I request, and I feel good knowing I am eating my meat from local business.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 flex gap-x-4 text-sm leading-6">
                  <img
                    src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                    alt=""
                    className="h-6 w-6 flex-none rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-900">Maria Hill</span> – MILF from the Commons
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}

export default Features;