import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div>
      <aside
        id="logo-sidebar"
        className="z-40 w-56 transition-transform -translate-x-full sm:translate-x-0"
        style={{ backgroundColor: "#00AB7F", color: "#FFFFFF" }}
        aria-label="Sidebar"
      >
        <div className="h-full py-4">
          <div className="flex items-center ps-2.5 mb-5">
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ADMIN PANEL
            </span>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 0 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(0)}
              >
                <img src="./bxs_dashboard.svg" alt="" />
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/user"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 1 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(1)}
              >
                <img src="./mdi_user.svg" alt="" />
                <span className="ms-3">User List</span>
              </Link>
            </li>
            <li>
              <Link
                to="/category"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 2 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(2)}
              >
                <img src="./mdi_cart.svg" alt="" />
                <span className="ms-3">Category</span>
              </Link>
            </li>
            <li>
              <Link
                to="/sub-category"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 3 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(3)}
              >
                <img src="./dashicons_category.svg" alt="" />
                <span className="ms-3">Sub- Category</span>
              </Link>
            </li>
            <li>
              <Link
                to="/product"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 4 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(4)}
              >
                <img src="./mdi_cart.svg" alt="" />
                <span className="ms-3">Product</span>
              </Link>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 5 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(5)}
              >
                <img src="./solar_bag-2-bold.svg" alt="" />
                <span className="ms-3">One Time Order</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 6 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(6)}
              >
                <img src="./solar_bag-check-bold.svg" alt="" />
                <span className="ms-3">Subscribed Order</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 7 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(7)}
              >
                <img src="./bi_bag-x-fill.svg" alt="" />
                <span className="ms-3">Unconfirmed Order</span>
              </a>
            </li>
            <li>
              <a
                href="#"
               className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 8 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(8)}
              >
                <img src="./gridicons_help.svg" alt="" />
                <span className="ms-3">Help</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 9 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(9)}
              >
                <img src="./solar_gallery-bold.svg" alt="" />
                <span className="ms-3">Banner</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 10 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(70)}
              >
                <img src="./mdi_coupon.svg" alt="" />
                <span className="ms-3">Coupon</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 11 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(11)}
              >
                <img src="./fluent_contact-card-16-filled.svg" alt="" />
                <span className="ms-3">About Us</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 12 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(12)}
              >
                <img src="./mdi_contact.svg" alt="" />
                <span className="ms-3">Contact</span>
              </a>
            </li>
            <li>
              <a
                href="#"
               className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 13 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(13)}
              >
                <img src="./mdi_faq.svg" alt="" />
                <span className="ms-3">FAQ</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 14 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(14)}
              >
                <img src="./bxs_bell.svg" alt="" />
                <span className="ms-3">Notifications</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 15 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(15)}
              >
                <img src="./solar_wallet-bold.svg" alt="" />
                <span className="ms-3">Wallet</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 16 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(16)}
              >
                <img src="./iconoir_user-bag.svg" alt="" />
                <span className="ms-3">Delivery Boy</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 17 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(17)}
              >
                <img src="./iconoir_user-bag.svg" alt="" />
                <span className="ms-3">Collection Boy</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 18 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(18)}
              >
                <img src="./ic_baseline-assignment-return.svg" alt="" />
                <span className="ms-3">Returns</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 19 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(19)}
              >
                <img src="./solar_box-bold.svg" alt="" />
                <span className="ms-3">Order Sheets</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 20 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(20)}
              >
                <img src="./fluent-mdl2_permissions-solid.svg" alt="" />
                <span className="ms-3">Permissions</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 21 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(21)}
              >
                <img src="./ep_upload-filled.svg" alt="" />
                <span className="ms-3">Logs</span>
              </a>
            </li>
            <li className="pt-4">
              <a
                href="#"
                className={`flex items-center py-2 px-4 dark:text-white  dark:hover:bg-gray-700 group ${
              activeLink === 22 && 'bg-blue-500'
                  }`}
                onClick={() => handleLinkClick(22)}
              >
                <img src="./ant-design_logout-outlined.svg" alt="" />
                <span className="ms-3">Logout</span>
              </a>
            </li>
            
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default SideBar;
