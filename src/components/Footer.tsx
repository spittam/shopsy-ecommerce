import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
        <div className="sm:flex sm:items-end sm:justify-end">
         <ul className="flex flex-wrap items-end mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/about">
                <a className="mr-4 hover:text-logogreen md:mr-6 ">About</a>
              </Link>
            </li>
            <li>
              <a href="https://plexusworldwide.com/experience-plexus/your-opportunities/compensation" className="mr-4 hover:text-logogreen md:mr-6">
                Compensation
              </a>
            </li>
            <li>
              <a href="https://helpcenter.plexusworldwide.com/hc/en-us" className="mr-4 hover:text-logogreen md:mr-6 ">
                Help Center
              </a>
            </li>
            <li>
               <a href="https://helpcenter.plexusworldwide.com/hc/en-us/articles/360018292211-Plexus-Worldwide-Contact-Information" className="hover:text-logogreen">Contact</a>
             </li>
          </ul>
        </div>
        <hr className="my-6 sm:mx-auto border-logogreen lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link to="/">
            <a className="hover:text-logogreen">Plexus™</a>
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
