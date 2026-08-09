import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <nav className="bg-[#111111] border-b border-b-zinc-800 fixed top-0 left-0 right-0 z-50 text-zinc-400 p-4">
        <div className="container w-6xl mx-auto">
          <div className="flex items-center justify-between">
            {/* logo */}
            <div className="flex justify-center items-center gap-3">
              <div>
                <img src="../../assets/logo.png" className="w-12 " alt="عدسة" />
              </div>
              <div>
                <span className="font-semibold text-white text-lg">عدسة</span>
                <p className="text-xs text-[#ED9624]">
                  عالم التصوير الفوتوغرافي
                </p>
              </div>
            </div>
            {/* nav links */}
            <div className="bg-[#161616] border border-zinc-800 rounded-4xl py-4 px-3">
              <ul className="flex gap-7 font-semibold text-xs text-zinc-400">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-orange-500 px-3 py-2 text-white rounded-4xl"
                        : " "
                    }
                    to={"/"}
                  >
                    الرئيسية
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-orange-500 px-3 py-2 text-white rounded-4xl"
                        : " "
                    }
                    to={"/blog"}
                  >
                    المدونة
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive
                        ? "bg-orange-500 px-3 py-2 text-white rounded-4xl"
                        : " "
                    }
                    to={"/about"}
                  >
                    من نحن
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* button */}
            <div className="flex items-center justify-center gap-3">
              <div className="group hover:border p-3 rounded-xl hover:border-zinc-800 transition-colors duration-300 ease-linear cursor-pointer">
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="text-[#c5c4c4] group-hover:text-orange-500 transition-all duration-300 ease-linear"
                />
              </div>
              <NavLink
                to={"/blog"}
                className="primary-gardient text-xs text-white font-semibold rounded-[30px] py-4 px-6 hover:-translate-y-0.5 transition-transform duration-300 cursor-pointer"
              >
                ابدأ القراءة
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
