<<<<<<< HEAD
import { Fragment, useState } from "react"
import { Popover, Transition } from "@headlessui/react"
import { MenuIcon, XIcon } from "@heroicons/react/outline"
import { ChevronRightIcon } from "@heroicons/react/solid"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Link from "next/link"
import ProfileButton from "./ProfileButton"

export default function Hero({ categories }) {
	const { user, signoutUser } = useContext(AuthContext)

	return (
		<div className="relative bg-dark overflow-hidden">
			<div className="relative pt-6 pb-16 sm:pb-24">
				<Popover>
					{({ open }) => (
						<>
							<nav
								className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
								aria-label="Global"
							>
								<div className="flex items-center flex-1">
									<div className="flex items-center justify-between w-full md:w-auto">
										<a href="/">
											<span className="sr-only">Gearsbd</span>
											<img
												className="h-8 w-auto sm:h-10"
												src="/logo/logo-orange.svg"
												alt=""
											/>
										</a>
										<div className="-mr-2 flex items-center md:hidden">
											<Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-brand">
												<span className="sr-only">Open main menu</span>
												<MenuIcon className="h-6 w-6" aria-hidden="true" />
											</Popover.Button>
										</div>
									</div>
									<div className="hidden space-x-10 md:flex md:ml-10">
										{categories.map((item) => (
											<a
												key={item.name}
												href={`/categories/${item.slug}`}
												className="font-medium text-white hover:text-gray-300"
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
								<div className="hidden md:flex hover:cursor-pointer">
									{user ? (
										// <p
										// 	onClick={signoutUser}
										// 	className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600"
										// 	disabled
										// >
										// 	{user.email} (Signout)
										// </p>
										<ProfileButton user={user} />
									) : (
										// <DropdownButton />
										<Link href="/auth/signin">
											<p
												className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600"
												disabled
											>
												Signin to your account
											</p>
										</Link>
									)}
								</div>
							</nav>
							<Transition
								show={open}
								as={Fragment}
								enter="duration-150 ease-out"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="duration-100 ease-in"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Popover.Panel
									focus
									static
									className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
								>
									<div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
										<div className="px-5 pt-4 flex items-center justify-between">
											<div>
												<img
													className="h-8 w-auto"
													src="/logo/logo-orange.svg"
													alt=""
												/>
											</div>
											<div className="-mr-2">
												<Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
													<span className="sr-only">Close menu</span>
													<XIcon className="h-6 w-6" aria-hidden="true" />
												</Popover.Button>
											</div>
										</div>
										<div className="px-2 pt-2 pb-3 space-y-1">
											{categories.map((item) => (
												<a
													key={item.name}
													href={`/categories/${item.slug}`}
													className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-700 hover:bg-gray-50"
												>
													{item.name}
												</a>
											))}
										</div>

										<p
											className="block w-full px-5 py-3 text-center font-medium text-brand bg-gray-50"
											disabled
										>
											Not logged in
										</p>
									</div>
								</Popover.Panel>
							</Transition>
						</>
					)}
				</Popover>
				<main className="mt-16 sm:mt-24">
					<div className="mx-auto max-w-7xl">
						<div className="lg:grid lg:grid-cols-12 lg:gap-8">
							<div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
								<div>
									<a
										href="#"
										className="inline-flex items-center text-white bg-gray-700 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
									>
										<span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-brand rounded-full">
											We are hiring
										</span>
										<span className="ml-4 text-sm">Apply here</span>
										<ChevronRightIcon
											className="ml-2 w-5 h-5 text-gray-500"
											aria-hidden="true"
										/>
									</a>
									<h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
										<span className="md:block">
											{user ? `Hey, ${user.username}!` : `Thousands Problem`}
										</span>{" "}
										<span className="text-brand md:block">
											{user ? `Browse all products` : `#1 Solution`}
										</span>
									</h1>
									<p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
										Gearsbd is one of the most renowned Gaming peripherals
										outlet with more than thousand different products.
									</p>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
=======
import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Link from "next/link";

export default function Hero({ categories }) {
  const { user, signoutUser } = useContext(AuthContext);

  return (
    <div className="relative bg-dark overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <Popover>
          {({ open }) => (
            <>
              <nav
                className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
                aria-label="Global"
              >
                <div className="flex items-center flex-1">
                  <div className="flex items-center justify-between w-full md:w-auto">
                    <a href="/">
                      <span className="sr-only">Gearsbd</span>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="/logo/logo-orange.svg"
                        alt=""
                      />
                    </a>
                    <div className="-mr-2 flex items-center md:hidden">
                      <Popover.Button className="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-700 hover:text-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-brand">
                        <span className="sr-only">Open main menu</span>
                        <MenuIcon className="h-6 w-6" aria-hidden="true" />
                      </Popover.Button>
                    </div>
                  </div>
                  <div className="hidden space-x-10 md:flex md:ml-10">
                    {categories.map((item) => (
                      <a
                        key={item.name}
                        href={`/categories/${item.slug}`}
                        className="font-medium text-white hover:text-gray-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="hidden md:flex hover:cursor-pointer">
                  {user ? (
                    <p
                      onClick={signoutUser}
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600"
                      disabled
                    >
                      {user.email} (Signout)
                    </p>
                  ) : (
                    <Link href="/auth/signin">
                      <p
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600"
                        disabled
                      >
                        Signin to your account
                      </p>
                    </Link>
                  )}
                </div>
              </nav>
              <Transition
                show={open}
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="/logo/logo-orange.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3 space-y-1">
                      {categories.map((item) => (
                        <a
                          key={item.name}
                          href={`/categories/${item.slug}`}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-700 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>

                    <p
                      className="block w-full px-5 py-3 text-center font-medium text-brand bg-gray-50"
                      disabled
                    >
                      Not logged in
                    </p>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
        <main className="mt-16 sm:mt-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
                <div>
                  <a
                    href="#"
                    className="inline-flex items-center text-white bg-gray-700 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200"
                  >
                    <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-brand rounded-full">
                      We are hiring
                    </span>
                    <span className="ml-4 text-sm">Apply here</span>
                    <ChevronRightIcon
                      className="ml-2 w-5 h-5 text-gray-500"
                      aria-hidden="true"
                    />
                  </a>
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
                    <span className="md:block">
                      {user ? `Hey, ${user.username}!` : `Thousands Problem`}
                    </span>{" "}
                    <span className="text-brand md:block">
                      {user ? `Browse all products` : `#1 Solution`}
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Gearsbd is one of the most renowned Gaming peripherals
                    outlet with more than thousand different products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
>>>>>>> parent of 5eab0bd (Changes)
