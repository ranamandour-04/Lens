import React from "react";
import {
  faYoutube,
  faLinkedin,
  faGithub,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faAngleLeft, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function Footer({ social }) {
  return (
    <>
      <footer className="relative overflow-hidden bg-[#0b0b0b] text-[#c5c4c4] ">
        <div className="container w-6xl mx-auto py-12">
          <div className="flex flex-col">
            <div className="flex justify-between">
              {/* Brand + social */}
              <div className="flex  flex-col gap-5">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <img src="/public/logo.png" className="w-10" alt="عدسة" />
                    <div>
                      <span className="font-semibold text-xl text-white">
                        عدسة
                      </span>
                    </div>
                  </div>
                  <p className="text-sm w-xs text-zinc-400 mb-4">
                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار
                    المصورين ونصائح عملية لتطوير مهاراتكم.
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={social.twitter}
                    target="blank"
                    className="icon group"
                  >
                    <FontAwesomeIcon
                      icon={faXTwitter}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                  <a href={social.github} target="blank" className="icon group">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>

                  <a
                    href={social.linkedin}
                    target="blank"
                    className="icon group"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                  <a
                    href={social.youtube}
                    target="blank"
                    className="icon group"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      className="text-gray-400 group-hover:text-white"
                    />
                  </a>
                </div>
              </div>
              {/* Links column 1 */}
              <div className="w-fit relative">
                <h3 className="text-lg text-white font-semibold mb-3 before:content-[''] before:bg-linear-to-r before:from-[#f5850e] before:to-[#f4aa33] before:w-8 before:h-0.5 before:absolute before:top-3.5 before:-right-10">
                  استكشف
                </h3>
                <ul className="text-sm text-zinc-400 space-y-4">
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-200">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      الرئيسية
                    </a>
                  </li>
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-200">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      المدونة
                    </a>
                  </li>{" "}
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-200">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      من نحن
                    </a>
                  </li>
                </ul>
              </div>

              {/* Links column 2 */}
              <div className="relative w-fit">
                <h3 className="text-lg text-white font-semibold mb-3 before:content-[''] before:bg-linear-to-r before:from-[#f5850e] before:to-[#f4aa33] before:w-8 before:h-0.5 before:absolute before:top-3.5 before:-right-10">
                  التصنيفات
                </h3>
                <ul className="text-sm text-zinc-400 space-y-4">
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      إضاءة
                    </a>
                  </li>
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      بورتريه
                    </a>
                  </li>
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      مناظر طبيعية
                    </a>
                  </li>
                  <li className="flex items-center hover:text-[#ef5a1a] group cursor-pointer transition-all duration-300">
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="translate-x-3 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-xs"
                    />
                    <a
                      href="#"
                      className="transition-transform duration-300 group-hover:-translate-x-2"
                    >
                      تقنيات
                    </a>
                  </li>
                </ul>
              </div>
              {/* Subscription column */}
              <div className="w-fit relative">
                <h3 className="text-lg text-white font-semibold mb-3 before:content-[''] before:bg-linear-to-r before:from-[#f5850e] before:to-[#f4aa33] before:w-8 before:h-0.5 before:absolute before:top-3.5 before:-right-10">
                  ابقى على اطلاع
                </h3>
                <p className="text-sm text-zinc-400 mb-4">
                  اشترك للحصول على أحدث المقالات والتحديثات.
                </p>
                <div className="flex flex-col gap-4">
                  <form>
                    <input
                      type="email"
                      placeholder="أدخل بريدك الإلكتروني"
                      className="bg-[#111] border border-zinc-800 placeholder-zinc-500 rounded-lg px-4 py-3 w-full focus:outline-none focus:border-orange-400"
                    />
                  </form>
                  <button className="primary-gardient text-white rounded-full text-sm hover:-translate-y-1 transition duration-200 w-full py-3 font-semibold cursor-pointer">
                    <Link to={"/"}>اشترك</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-800">
          <div className="container w-6xl mx-auto py-6 text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center">
            <div>© 2026 عدسة. صنع بكل جميع الحقوق محفوظة.</div>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#ef5a1a]">
                سياسة الخصوصية
              </a>
              <a href="#" className="hover:text-[#ef5a1a]">
                شروط الخدمة
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
