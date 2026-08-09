import React from "react";
import {
  faMagnifyingGlass,
  faFaceSadTear,
  faNewspaper,
} from "@fortawesome/free-solid-svg-icons";
import { faFaceFrown, faHouse } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A] text-white relative">
      {/* 1. The Grid Lines */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* 2. Optional: Subtle Orange Ambient Glow in Center */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
      {/* flex-1 lets middle section fill remaining screen height */}
      <div className="mx-auto flex w-full flex-1 flex-col px-6 py-6">
        <main className="mt-10 flex flex-1 items-center justify-center">
          <div className="w-full max-w-2xl text-center">
            <p className="m-0 bg-linear-to-b from-orange-700 via-[#ffa83e] via-10% to-orange-700 bg-clip-text text-[120px] font-black text-transparent sm:text-[160px]">
              404
            </p>
            <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10">
              <FontAwesomeIcon
                icon={faFaceFrown}
                className="text-4xl text-orange-500/80"
              />
            </div>

            <h1 className="mt-8 text-3xl font-semibold text-white">
              عفواً! الصفحة غير موجودة
            </h1>
            <p className="mx-auto mt-4 text-md font-medium text-zinc-400">
              الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى
              المسار الصحيح.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="/"
                className="inline-flex items-center gap-2 rounded-[30px] bg-linear-to-r from-orange-500 to-orange-600 px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(249,115,22,0.25)] hover:-translate-y-1 transition duration-200"
              >
                <FontAwesomeIcon icon={faHouse} />
                الذهاب للرئيسية
              </a>
              <a
                href="/blog"
                className="inline-flex items-center gap-2 rounded-[30px] border border-zinc-700 bg-none px-7 py-4 text-md font-semibold text-white  hover:border-orange-500 hover:bg-orange-400/10 hover:text-orange-400 transition duration-300"
              >
                <FontAwesomeIcon icon={faNewspaper} />
                تصفح المقالات
              </a>
            </div>

            <div className="mt-8 text-sm text-zinc-400">
              <p className="mb-4">قد تجد هذه مفيدة:</p>
              <div className="flex flex-wrap items-center justify-center gap-6">
                <a
                  href="/blog"
                  className="transition duration-300 hover:text-orange-400"
                >
                  المدونة
                </a>
                <a
                  href="/about"
                  className="transition duration-300 hover:text-orange-400"
                >
                  من نحن
                </a>
                <a
                  href="#"
                  className="transition duration-300 hover:text-orange-400"
                >
                  الخصوصية
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
