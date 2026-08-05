import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowLeftLong,
  faCircleInfo,
  faFolderOpen,
  faMountainSun,
  faNewspaper,
  faPenNib,
  faSliders,
  faSun,
  faUser,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import StatCard from "../../components/StatCard/StatCard";
import TypesCard from "../../components/TypesCard/TypesCard";
import { faClock, faEnvelope } from "@fortawesome/free-regular-svg-icons";
// import avatar3 from "../../assets/avatar-3.jpg";
// import avatar7 from "../../assets/avatar-7.jpg";
// import avatar5 from "../../assets/avatar-5.jpg";
import { NavLink, useNavigate, Link } from "react-router-dom";
export default function Home({ data, category }) {
  const featuredPosts = data?.slice(0, 3) || [];
  const statusCards = [
    { icon: faNewspaper, value: "50+", label: "مقالة" },
    { icon: faUsers, value: "10+ ألف", label: "قارىء" },
    { icon: faFolderOpen, value: "4", label: "تصنيفات" },
    { icon: faPenNib, value: "6", label: "كاتب" },
  ];
  return (
    <div className="relative flex min-h-screen flex-col bg-[#0A0A0A] text-white overflow-hidden">
      {/* Background Grid & Glow */}

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
      <div className="relative z-10 flex flex-col">
        {/* Hero Section */}
        <div className="hero-section mx-auto p-6 mt-30 w-full max-w-3xl text-center">
          <div className="container">
            <span className="rounded-full border border-orange-500 bg-orange-500/20 px-4 py-2 text-xs">
              مرحباً بك في عدسة
            </span>
            <h1 className="mt-8 text-[50px] font-semibold leading-tight text-white sm:text-[70px]">
              اكتشف{" "}
              <span className="bg-linear-to-b from-orange-700 via-[#ffa83e] via-10% to-orange-700 bg-clip-text text-transparent">
                فن
              </span>
              <br />
              التصوير الفوتوغرافي
            </h1>
            <p className="mx-auto mt-7 max-w-140 text-xl  leading-9 text-zinc-400">
              انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to={"/blog"}
                className="group inline-flex items-center gap-2 rounded-[30px] bg-linear-to-r from-orange-500 to-orange-600 px-7 py-4 text-md font-medium text-white shadow-[0_20px_60px_rgba(249,115,22,0.25)] transition duration-200 hover:-translate-y-1"
              >
                استكشف المقالات
                <FontAwesomeIcon
                  icon={faArrowLeftLong}
                  className="duration-200 group-hover:-translate-x-1"
                />
              </Link>
              <Link
                to={"/about"}
                className="inline-flex items-center gap-2 rounded-[30px] border border-zinc-700 bg-none px-7 py-4 text-md font-medium text-white transition duration-300 hover:border-orange-500 hover:bg-orange-400/10 hover:text-orange-400"
              >
                <FontAwesomeIcon icon={faCircleInfo} />
                اعرف المزيد
              </Link>
            </div>
            {/* Dynamic Stat Cards Grid */}
            <div className="my-12 flex items-center justify-between">
              {statusCards.map((card, index) => (
                <StatCard card={card} />
              ))}
            </div>
          </div>
        </div>
        {/* chosen blogs */}
        <section className="bg-[#0A0A0A] py-20 text-white">
          <div className="container mx-auto max-w-6xl">
            {/* title */}
            <div className="flex justify-between items-center">
              <div className="mb-12 flex flex-col items-start gap-4">
                <span className="rounded-full text-orange-500 border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs">
                  مميز
                </span>
                <h2 className="text-5xl font-semibold tracking-tight text-white ">
                  مقالات مختارة
                </h2>
                <p className="text-lg leading-8 text-zinc-400">
                  محتوى منتقى لبدء رحلة تعلمك
                </p>
              </div>
              <div>
                <button className="primary-gardient text-white font-medium rounded-lg group transition duration-200 px-5 py-2 cursor-pointer">
                  <Link to={"/blog"} className="flex items-center gap-2">
                    عرض الكل{" "}
                    <FontAwesomeIcon
                      icon={faAngleLeft}
                      className="group-hover:-translate-x-1 transition-all duration-200"
                    />
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-7">
              {featuredPosts.map((post) => {
                const {
                  id,
                  title,
                  category,
                  image,
                  date,
                  readTime,
                  excerpt,
                  author,
                } = post;
                const { avatar, name, role } = author || {};

                return (
                  <article
                    key={id}
                    className="rounded-[25px] flex border group hover:border-orange-500 border-zinc-800 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden cursor-pointer relative"
                  >
                    <div className="w-1/2 overflow-hidden">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full rounded-tr-[25px] rounded-br-[25px] group-hover:scale-110 transition-all duration-700"
                      />
                    </div>
                    <div className="flex h-full w-1/2 flex-col gap-20 p-7">
                      <div>
                        <div className="flex items-center gap-4">
                          <span className="rounded-full text-orange-500 border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs">
                            {category}
                          </span>
                          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                            <FontAwesomeIcon icon={faClock} className="me-1" />
                            {readTime}
                          </p>
                        </div>
                        <h3 className="text-2xl my-4 font-semibold group-hover:text-orange-500/80 transition-all duration-300 text-white">
                          {title}
                        </h3>
                        <p className="mt-6 max-w-2xl text-md leading-8 text-zinc-400">
                          {excerpt}
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-3 items-center">
                          <div className="relative">
                            <img
                              src={avatar}
                              alt={name || title}
                              className="w-12.5 h-12.5 rounded-full border-2 border-gray-500/30"
                            />
                            <span className="absolute bg-orange-500 w-3 h-3 left-0.5 bottom-0.75 border-2 border-gray-950 rounded-full"></span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="font-semibold text-sm text-white">
                              {name}
                            </p>
                            <span className="text-xs text-zinc-400">
                              {role} • {date}
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="inline-flex items-center justify-center text-orange-500 font-semibold text-xs transition-all duration-300 group-hover:-translate-x-1">
                            اقرأ المقال
                            <FontAwesomeIcon
                              icon={faArrowLeftLong}
                              className="mr-2 text-base"
                            />
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link
                      className="absolute inset-0"
                      to={`/blog/${id}`}
                    ></Link>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        {/* Types Section */}
        <div className="types-section bg-[#111111]">
          <div className="container w-6xl mx-auto ">
            <div className="title text-center py-12">
              <span className="rounded-full border border-orange-500 text-orange-500 bg-orange-500/10 px-4 py-2 text-sm">
                مرحباً بك في عدسة
              </span>
              <h2 className="my-5 text-6xl font-semibold text-white ">
                استكشف حسب الموضوع
              </h2>
              <p className="mx-auto text-lg text-zinc-400 tracking-wider">
                اعثر على محتوى مصمم حسب اهتماماتك
              </p>
            </div>
            <div className="types-cards mb-20 flex flex-row flex-wrap gap-9">
              {category.map((card, index) => (
                <TypesCard card={card} />
              ))}
            </div>
          </div>
        </div>
        {/* newest blogs */}
        <section className="bg-[#0A0A0A] py-20 text-white">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-between items-center">
              <div className="mb-12 flex flex-col items-start gap-4">
                <span className="rounded-full text-orange-500 border border-orange-500 bg-orange-500/20 px-5 py-1 text-xs">
                  الأحدث
                </span>
                <h2 className="text-5xl font-semibold tracking-tight text-white ">
                  أحدث المقالات
                </h2>
                <p className="text-md leading-8 text-zinc-400">
                  محتوى جديد طازج من المطبعة
                </p>
              </div>
              <div>
                <button className="">
                  <Link
                    to={"/blog"}
                    className=" text-orange-500 font-medium text-sm group transition duration-200 cursor-pointer flex items-center gap-2"
                  >
                    عرض جميع المقالات{" "}
                    <FontAwesomeIcon
                      icon={faArrowLeft}
                      className="group-hover:-translate-x-1 transition-all duration-200"
                    />
                  </Link>
                </button>
              </div>
            </div>
            <div className="flex justify-between">
              {data
                ?.filter((post) => post.featured === false)
                .slice(0, 3)
                .map((post, index) => {
                  const {
                    id,
                    title,
                    category,
                    image,
                    date,
                    readTime,
                    excerpt,
                    author,
                  } = post;
                  const { avatar, name, role } = author || {};
                  return (
                    <article
                      key={id}
                      className="rounded-[25px] flex flex-col border group hover:border-orange-500 hover:-translate-y-1 border-zinc-800 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden w-[32%] gap-3 cursor-pointer relative"
                    >
                      <div className="w-full min-h-1/3 overflow-hidden relative">
                        <img
                          src={image}
                          alt={title}
                          className="h-full w-full rounded-tr-[25px] rounded-tl-[25px] group-hover:scale-110 transition-all duration-700"
                        />
                        <span className="absolute top-5 right-5 rounded-full text-white  bg-black/70 px-3 py-1 text-xs font-medium">
                          {category}
                        </span>
                      </div>
                      <div className="flex flex-col px-7 py-5">
                        <div>
                          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                            <span className="">
                              <FontAwesomeIcon
                                icon={faClock}
                                className="me-1"
                              />
                              {readTime}
                            </span>
                            <span>{date}</span>
                          </div>
                          <h3 className="text-xl my-3 font-semibold group-hover:text-orange-500/80 transition-all duration-300 text-white">
                            {title}
                          </h3>
                          <p className=" max-w-2xl text-sm  text-zinc-400">
                            {excerpt}
                          </p>
                        </div>
                        <div className="flex justify-between items-center mt-8 border-t border-zinc-800 pt-5 ">
                          <div className="flex gap-3 items-center">
                            <div className="relative">
                              <img
                                src={avatar}
                                alt={name || title}
                                className="w-12.5 h-12.5 rounded-full border-2 border-gray-500/30"
                              />
                              <span className="absolute bg-orange-500 w-3 h-3 left-0.5 bottom-0.75 border-2 border-gray-950 rounded-full"></span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <p className="font-semibold text-sm text-white">
                                {name}
                              </p>
                              <span className="text-xs text-zinc-400">
                                {role}
                              </span>
                            </div>
                          </div>
                          <div>
                            <FontAwesomeIcon
                              icon={faAngleLeft}
                              className="text-sm text-orange-500 bg-orange-500/20 rounded-full py-2 px-2 group-hover:bg-orange-500 group-hover:text-white"
                            />
                          </div>
                        </div>
                      </div>
                      <Link
                        className="absolute inset-0"
                        to={`/blog/${id}`}
                      ></Link>
                    </article>
                  );
                })}
            </div>
          </div>
        </section>
        {/* contact section */}
        <div className="contact-section bg-[#0B0B0B]">
          <div className="container bg-[#111] my-20 px-20 py-15 w-4xl rounded-4xl mx-auto ">
            <div className="title text-center py-12">
              <span className="rounded-xl text-white py-4 primary-gardient px-4 text-2xl flex justify-center items-center w-fit mx-auto">
                <FontAwesomeIcon icon={faEnvelope} className="" />
              </span>
              <h2 className="my-5 text-4xl font-semibold text-white ">
                اشترك في{" "}
                <span className="bg-linear-to-b from-orange-700 via-[#ffa83e] via-10% to-orange-700 bg-clip-text text-transparent">
                  نشرتنا الإخبارية
                </span>
              </h2>
              <p className="mx-auto text-lg text-zinc-400 tracking-wider">
                احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك
                الإلكتروني
              </p>
              <div className="flex my-8 gap-4 justify-center">
                <form action="" className="w-fit">
                  <input
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    className="bg-[#0B0B0B] border border-zinc-800 placeholder-zinc-500 rounded-lg px-4 py-3 w-87.5 focus:outline-none focus:border-orange-400"
                  />
                </form>
                <button className="primary-gardient text-white rounded-lg hover:-translate-y-1 transition duration-200 py-4 w-37.5 font-semibold cursor-pointer">
                  اشترك الآن
                </button>
              </div>
              <div className="mt-4 flex items-center gap-5 text-sm text-zinc-400 justify-center">
                <div className="flex items-center justify-center gap-1">
                  {data.slice(0, 3).map((post) => {
                    const { author } = post;
                    const { avatar } = author || {};
                    return (
                      <img
                        src={avatar}
                        className="h-8 w-8 rounded-full"
                        alt="img"
                      />
                    );
                  })}
                </div>
                <p className="font-medium">
                  انضم <span className="text-white">10,000+</span> مصور
                </p>
                <p>بدون إزعاج</p>
                <p>إلغاء الاشتراك في أي وقت</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
