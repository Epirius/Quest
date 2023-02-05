import { Menu, Transition } from "@headlessui/react";
import { useSession, signOut } from "next-auth/react";
import { useState, Fragment } from "react";
import { AuthLogin } from "./AuthButtons";

const AccountDropdown = () => {
  const { data: sessionData } = useSession();
  if (!sessionData) {
    return <div className="h-10 w-10 rounded-full bg-gray-200" />;
  }

  const profilePic = sessionData.user.image;

  return (
    <Menu>
      <div className="relative">
        <Menu.Button className="">
          {profilePic && (
            <img className="h-10 w-10 rounded-full" src={profilePic} />
          )}
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item as="div" disabled>
                <div className={"block px-4 py-2 text-sm text-gray-400"}>
                  {sessionData.user.email || "Name@email.com"}
                </div>
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    href="/account-quizes"
                  >
                    Your quizes
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                    href="/account-settings"
                  >
                    Settings
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    onClick={() => {
                      signOut();
                    }}
                    className={`${
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700"
                    } block px-4 py-2 text-sm`}
                  >
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};

export default AccountDropdown;
