import {NavLink} from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { FaBook } from "react-icons/fa6";
const AdminNavbar=()=>{
    return (
      <>
        <nav className="flex justify-between p-4 border border-blue-400 rounded-md">
          <div className="flex gap-2 p-1 text-blue-400">
            <div className="flex items-center text-4xl">
              <FaBook />
            </div>
            <p className="p-1 text-2xl font-bold box-sizing-content-box italic">
              BOOKIFY
            </p>
          </div>
          <ul className="hidden lg:flex gap-3 items-center rounded-4xl px-4 py-2 bg-blue-200">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `ml-2 p-1 rounded-4xl py-1 px-2 ${
                  isActive ? "text-white bg-black" : "text-black bg-white"
                }`
              }
            >
              Analytical Dashboard
            </NavLink>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                `ml-2 p-1 rounded-4xl py-1 px-2 ${
                  isActive ? "text-white bg-black" : "text-black bg-white"
                }`
              }
            >
              User Management
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `ml-2 p-1 rounded-4xl py-1 px-2 ${
                  isActive ? "text-white bg-black" : "text-black bg-white"
                }`
              }
            >
              Product Management
            </NavLink>
          </ul>
          <div className="flex items-center text-4xl font-bold lg:hidden">
            <CiMenuFries />
          </div>
          <div className="hidden lg:flex lg:block lg:items-center">
            <p className="py-2 px-4 rounded-4xl bg-black text-white">
              Get started
            </p>
          </div>
        </nav>
      </>
    );
}
export default AdminNavbar;