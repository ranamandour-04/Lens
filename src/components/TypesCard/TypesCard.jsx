import {
  faAngleLeft,
  faCircleChevronLeft,
  faMountainSun,
  faSliders,
  faSun,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function TypesCard({ card }) {
  const { name, count } = card;
  const iconMap = {
    إضاءة: faSun,
    بورتريه: faUser,
    "مناظر طبيعية": faMountainSun,
    تقنيات: faSliders,
    معدات: faSun,
  };
  const icon = iconMap[name];

  return (
    <>
      <div className="flex items-center justify-between relative w-65 h-45 px-8 rounded-xl border cursor-pointer border-zinc-800 bg-[#161616] group hover:bg-linear-to-br from-orange-600 to-orange-400 ">
        <div className="flex flex-col gap-3 justify-start z-10">
          <div className=" border border-orange-500 w-fit p-3 aspect-square flex justify-center items-center rounded-xl bg-orange-500/10 group-hover:bg-yellow-100/50 transition-all duration-300">
            <FontAwesomeIcon
              icon={icon}
              className=" text-orange-500 text-xl group-hover:text-white transition-all duration-300"
            />
          </div>
          <p className="font-semibold text-xl text-white">{name}</p>
          <p>
            <span className="text-zinc-400 text-sm">{count} مقالة</span>
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 group-hover:bg-yellow-100/50 transition-all  duration-300 rounded-full flex justify-center items-center p-2">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="group-hover:text-white"
          />
        </div>
        <Link
          className="absolute inset-0"
          to={`/blog?category=${encodeURIComponent(name)}`}
        ></Link>
      </div>
    </>
  );
}
