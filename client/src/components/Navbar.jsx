import { Fragment, useState } from 'react'
import { Dialog, Popover, Tab, Transition } from '@headlessui/react'
import { MenuIcon, SearchIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { useSelector } from "react-redux";

const navigation = {
  categories: [
    {
      id: 'shop',
      name: 'Shop',
      sections: [
        {
          id: 'boards',
          name: 'Boards',
          items: [
            { name: 'All Boards', href: '/products/boards' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', href: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', href: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Vision', href: '#' },
  ],
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  const [open, setOpen] = useState(false);

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className="bg-black">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative md:max-w-xs w-full bg-black shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-4 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-white md:mr-auto md:ml-0 ml-auto mr-0"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as="div" className="mt-2">
                <div className="border-b border-gray-200">
                  <Tab.List className="-mb-px flex  space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-teal border-teal' : 'text-gray-300 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category) => (
                    <Tab.Panel key={category.name} className="pt-10 pb-8 px-4 space-y-10">
                      {category.sections.map((section) => (
                        <div key={section.name}>
                          <p id={`${category.id}-${section.id}-heading-mobile`} className="font-medium text-gray-300">
                            {section.name}
                          </p>
                          <ul
                            role="list"
                            aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                            className="mt-6 flex flex-col space-y-6"
                          >
                            {section.items.map((item) => (
                              <li key={item.name} className="flow-root">
                                <a href={item.href} className="-m-2 p-2 block text-gray-400">
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {navigation.pages.map((page) => (
                  <div key={page.name} className="flow-root">
                    <a href={page.href} className="-m-2 p-2 block font-medium text-gray-300">
                      {page.name}
                    </a>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                <div className="flow-root">
                  <a href="/login" className="-m-2 p-2 block font-medium text-gray-300">
                    Sign in
                  </a>
                </div>
                <div className="flow-root">
                  <a href="/register" className="-m-2 p-2 block font-medium text-gray-300">
                    Create account
                  </a>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-black">

        <nav aria-label="Top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <div className="h-16 flex items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-teal text-teal'
                                  : 'border-transparent text-white hover:text-gray-400',
                                'relative z-10 flex items-center transition-colors ease-out duration-300 text-sm font-medium border-b-2 -mb-px pt-px'
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute top-full inset-x-0 text-sm text-gray-200 transition duration-300 z-20">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-black shadow" aria-hidden="true" />

                              <div className="relative bg-black">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-1 gap-y-10 gap-x-8 py-16 mx-auto">
                                    <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                      {category.sections.map((section) => (
                                        <div key={section.name}>
                                          <p id={`${section.name}-heading`} className="uppercase text-center font-semibold text-teal">
                                            {section.name}
                                          </p>
                                          <ul
                                            role="list"
                                            aria-labelledby={`${section.name}-heading`}
                                            className="mt-6 space-y-6 sm:mt-4 sm:space-y-4 mx-auto w-full"
                                          >
                                            {section.items.map((item) => (
                                              <li key={item.name} className="flex">
                                                <a href={item.href} className="uppercase text-gray-100 hover:text-gray-400 transition duration-300 mx-auto">
                                                  {item.name}
                                                </a>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex duration-300 items-center text-sm font-medium text-white hover:text-gray-400"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  <a href="/login" className="duration-300 text-sm font-medium text-white hover:text-gray-400">
                    Sign in
                  </a>
                  <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                  <a href="/register" className="duration-300 text-sm font-medium text-white hover:text-gray-400">
                    Create account
                  </a>
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <label for="searchModal" className="duration-300 p-2 text-white hover:text-gray-400">
                    <span className="sr-only">Search</span>
                    <SearchIcon className="w-6 h-6 search-icon" aria-hidden="true" id="search-toggle" />
                  </label>
                  <input type='checkbox' id='searchModal' className='hidden' />
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <a href="/cart" className="group -m-2 p-2 flex items-center">
                    <ShoppingBagIcon
                      className="duration-300 flex-shrink-0 h-6 w-6 text-white group-hover:text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="duration-300 ml-2 text-sm font-medium text-white group-hover:text-gray-400">{quantity}</span>
                    <span className="sr-only">items in cart, view bag</span>
                  </a>
                </div>

                <button
                  type="button"
                  className="bg-black p-2 rounded-md text-white lg:hidden float-right ml-6"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}