import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full py-1 px-3 text-sm leading-6 border border-black dark:border-white">
                It&apos;s never been easier to make music and earn.
                <a href="#" className="font-semibold text-orange-500">
                  <span className="absolute inset-0" aria-hidden="true"></span>
                  &nbsp;Get Started <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
            <div className="text-center">
              <h1 className="flex flex-col gap-2 text-center justify-center text-8xl font-black md:flex-row lg:tracking-tight xl:text-9xl">
                <span
                  className="before:absolute before:-z-10 dark:before:text-white before:text-black before:content-[attr(data-text)]"
                  data-text="Create."
                >
                  <span className="animate-gradient-1 bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">
                    Create.{' '}
                  </span>{' '}
                </span>

                <span
                  className="before:absolute before:-z-10 dark:before:text-white before:text-black before:content-[attr(data-text)]"
                  data-text="Listen."
                >
                  <span className="animate-gradient-2 bg-gradient-to-l from-orange-600 to-orange-600 bg-clip-text text-transparent">
                    {' '}
                    Listen.
                  </span>{' '}
                </span>

                <span
                  className="before:absolute before:-z-10 dark:before:text-white before:text-black before:content-[attr(data-text)]"
                  data-text="Earn."
                >
                  <span className="animate-gradient-3 bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">
                    Earn.
                  </span>{' '}
                </span>
              </h1>
              <p className="mt-6 text-2xl leading-8 ">
                Welcome to <span className="font-bold">Etherwav</span>, the{' '}
                <span className="font-bold">community driven</span> and{' '}
                <span className="font-bold">algorithmically rewarding</span>{' '}
                web(3) radio
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  href="/radio"
                  className="rounded-md bg-orange-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-black dark:text-white shadow-sm hover:bg-orange-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Start Listening
                </Link>
                <Link
                  href="/upload"
                  className="rounded-md bg-black dark:bg-white  px-3.5 py-1.5 text-base font-semibold leading-7 text-white dark:text-black shadow-sm hover:bg-black/80 dark:hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Upload Music &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-24 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-lg font-semibold leading-8 tracking-tight text-orange-500">
                Start earning now
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Everything you need to get started
              </p>
              <p className="mt-6 text-lg leading-8 ">
                Earning on Etherwav is simple. Just upload a song and start
                earning.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                      {/* <!-- Heroicon name: outline/cloud-arrow-up --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15m0-3l-3-3m0 0l-3 3m3-3V15"
                        />
                      </svg>
                    </div>
                    Upload your song
                  </dt>
                  <dd className="mt-2 text-base leading-7 ">
                    Upload your song to the platform, you only pay for gas!
                  </dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 ">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                      {/* <!-- Heroicon name: outline/lock-closed --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z"
                        />
                      </svg>
                    </div>
                    Listen to the radio
                  </dt>
                  <dd className="mt-2 text-base leading-7 ">
                    Discover new music by listening to the radio.
                  </dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 ">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                      {/* <!-- Heroicon name: outline/arrow-path --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                        />
                      </svg>
                    </div>
                    Give heat to your favorite songs
                  </dt>
                  <dd className="mt-2 text-base leading-7 ">
                    More heat = higher position in the queue = more exposure
                  </dd>
                </div>

                <div className="relative pl-16">
                  <dt className="text-base font-semibold leading-7">
                    <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-500">
                      {/* <!-- Heroicon name: outline/finger-print --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    Start earning!
                  </dt>
                  <dd className="mt-2 text-base leading-7 ">
                    Every time someone gives heat to your song, it goes directly
                    to your wallet.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
