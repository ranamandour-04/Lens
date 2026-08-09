import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faNewspaper,
  faPenNib,
  faListUl,
  faCircleInfo,
  faArrowLeftLong,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import StatCard from "../../components/StatCard/StatCard";

export default function About() {
  const aboutStatus = [
    { icon: faUsers, value: "2+ مليون", label: "قارىء شهير" },
    { icon: faNewspaper, value: "500+ ", label: "مقالة منشورة" },
    { icon: faPenNib, value: "50+", label: "كاتب خبير" },
    { icon: faListUl, value: "15+", label: "تصنيف" },
  ];
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0A0A0A] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
      <div className="relative z-10 w-6xl mx-auto flex min-h-screen flex-col px-6 py-24 ">
        <div className="mx-auto w-full mt-10 text-center">
          <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-semibold text-orange-300">
            من نحن
          </span>
          <h1 className="mt-8 text-[50px] font-semibold leading-tight text-white sm:text-[70px]">
            مهمتنا هي{" "}
            <span className="bg-linear-to-b from-orange-700 via-[#ffa83e] via-10% to-orange-700 bg-clip-text text-transparent">
              الإعلام والإلهام
            </span>
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-xl leading-9 text-zinc-400">
            مدونة متخصصة في فن التصوير الفوتوغرافي. نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم، ونساعد المصورين على بناء محتوى عالي
            الجودة.
          </p>
        </div>
        <div className="my-12 flex items-center justify-center gap-10">
          {aboutStatus.map((card, index) => (
            <StatCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
}
