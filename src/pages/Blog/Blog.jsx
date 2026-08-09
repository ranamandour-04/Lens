import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { faNewspaper } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faArrowLeftLong,
  faBars,
  faBorderAll,
  faChevronLeft,
  faChevronRight,
  faClock,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useSearchParams } from "react-router-dom";
export default function Blog({ data, category }) {
  const featuredPosts = data || [];
  const categories = category || [];
  const [view, setView] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState("");
  const baseFiltered =
    activeCategory === "all"
      ? featuredPosts
      : featuredPosts.filter((post) => post.category === activeCategory);

  const term = searchTerm;
  const filteredPosts = term
    ? baseFiltered.filter((post) => {
        const title = post.title || "";
        const categoryField = post.category || "";
        const author = (
          post.author && post.author.name ? post.author.name : ""
        ).toLowerCase();
        return (
          title.includes(term) ||
          categoryField.includes(term) ||
          author.includes(term)
        );
      })
    : baseFiltered;

  useEffect(() => {
    // keep activeCategory in sync when query param changes (e.g., link from TypesCard)
    const q = searchParams.get("category") || "all";
    setActiveCategory(q);
  }, [searchParams]);

  return (
    <>
      <div className="flex flex-col bg-[#0A0A0A] text-white relative">
        {/* 1. The Grid Lines */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
        {/* 2. Optional: Subtle Orange Ambient Glow in Center */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(249,115,22,0.12)_0%,transparent_60%)]" />
        {/* flex-1 lets middle section fill remaining screen height */}
        <div className="flex w-full flex-1 flex-col py-12">
          <main className="mt-30 mx-auto flex flex-1 items-center justify-center">
            <div className="max-w-3xl w-full text-center">
              <span className="text-orange-500 border border-orange-500/70 bg-orange-500/10 rounded-full py-2 px-5 text-sm">
                <FontAwesomeIcon icon={faNewspaper} className="me-2" />
                مدونتنا
              </span>
              <h1 className="mt-8 text-[70px] leading-20 font-semibold text-white ">
                استكشف{" "}
                <span className="bg-linear-to-b from-orange-700 via-[#ffa83e] via-10% to-orange-700 bg-clip-text text-transparent">
                  مقالاتنا
                </span>
              </h1>
              <p className="mx-auto mt-5 leading-8 max-w-130 text-lg font-medium text-zinc-400">
                اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
              </p>
            </div>
          </main>
        </div>
      </div>
      <section className=" text-white bg-[#0A0A0A] border-b border-zinc-800">
        <div className="container w-6xl mx-auto">
          <div className="border-b flex justify-between items-center border-zinc-800 py-5">
            <form
              className="relative w-fit"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="ابحث في المقالات ...."
                className="bg-[#111] border border-zinc-800 placeholder-zinc-500 rounded-lg w-xs py-3 px-5 placeholder:text-sm focus:outline-none focus:border-orange-400"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="text-zinc-500 text-sm absolute top-1/2 left-5 -translate-y-1/2"
              />
            </form>
            <div className="flex gap-5">
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchParams({});
                }}
                className={`bg-[#161616] border cursor-pointer border-zinc-800 text-sm font-medium py-2 px-3 rounded-lg hover:border-orange-500/80 transition-all duration-200 ${
                  activeCategory === "all"
                    ? "text-white primary-gardient"
                    : "text-zinc-500"
                }`}
              >
                جميع المقالات
              </button>
              {categories.map((categories) => {
                const { name } = categories;
                const isActive = activeCategory === name;
                return (
                  <button
                    key={name}
                    onClick={() => {
                      setActiveCategory(name);
                      setSearchParams({ category: name });
                    }}
                    className={`bg-[#161616] border cursor-pointer border-zinc-800 text-sm font-medium py-2 px-3 rounded-lg hover:border-orange-500/80 transition-all duration-200 ${
                      isActive ? "text-white primary-gardient" : "text-zinc-500"
                    }`}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="py-7">
            <header className="flex justify-between items-center text-zinc-500 text-sm">
              <p>
                عرض <span className="text-white">{filteredPosts.length} </span>
                مقالات
              </p>
              <div className="border border-zinc-800 p-1 flex gap-2 rounded-xl text-md bg-[#161616]">
                <button onClick={() => setView("")}>
                  <FontAwesomeIcon
                    icon={faBorderAll}
                    className={
                      !view
                        ? "primary-gardient text-white flex justify-center items-center p-2 rounded-md cursor-pointer"
                        : "flex justify-center items-center p-2 rounded-md cursor-pointer"
                    }
                  />
                </button>
                <button onClick={() => setView("list")}>
                  <FontAwesomeIcon
                    icon={faBars}
                    className={
                      view
                        ? "primary-gardient text-white flex justify-center items-center p-2 rounded-md cursor-pointer"
                        : "flex justify-center items-center p-2 rounded-md cursor-pointer"
                    }
                  />
                </button>
              </div>
            </header>
            <div
              className={
                !view
                  ? "flex flex-wrap justify-between gap-y-5 my-8"
                  : "flex flex-col gap-y-5 my-8"
              }
            >
              {filteredPosts.map((post, index) => {
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
                    className={
                      !view
                        ? "rounded-[25px] flex flex-col border group hover:border-orange-500 hover:-translate-y-1 border-zinc-800 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden w-[32%] gap-3 cursor-pointer relative"
                        : "rounded-[25px] flex border group hover:border-orange-500 hover:-translate-y-1 border-zinc-800 bg-[#111111] shadow-[0_30px_80px_rgba(0,0,0,0.35)] transition-all duration-300 overflow-hidden w-full gap-3 cursor-pointer relative"
                    }
                  >
                    <div
                      className={
                        !view
                          ? "w-full min-h-1/3 overflow-hidden relative"
                          : "max-w-1/3 min-h-1/3 overflow-hidden relative"
                      }
                    >
                      <img
                        src={image}
                        alt={title}
                        className={
                          !view
                            ? "h-full w-full rounded-tr-[25px] rounded-tl-[25px] group-hover:scale-110 transition-all duration-700"
                            : "h-full w-full rounded-tr-[25px] group-hover:scale-110 transition-all duration-700"
                        }
                      />
                      {!view ? (
                        <span className="absolute top-5 right-5 rounded-full text-white bg-black/70 px-3 py-1 text-xs font-medium">
                          {category}
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                    <div className="flex flex-col px-7 py-5">
                      <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                          {view ? (
                            <span className=" rounded-full text-orange-500 border border-orange-500/70 bg-orange-500/10 px-3 py-1 text-xs font-medium">
                              {category}
                            </span>
                          ) : (
                            ""
                          )}
                          <span className="">
                            <FontAwesomeIcon icon={faClock} className="me-1" />
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
                      <div
                        className={
                          view
                            ? "flex justify-between items-center mt-3 pt-5 "
                            : "flex justify-between items-center mt-8 border-t border-zinc-800 pt-5 "
                        }
                      >
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
                          {view ? (
                            <span className="flex items-center justify-center text-orange-500 font-semibold text-xs transition-all duration-300 group-hover:-translate-x-1">
                              اقرأ المقال
                              <FontAwesomeIcon
                                icon={faArrowLeftLong}
                                className="mr-2 text-base"
                              />
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center font-semibold text-xs transition-all duration-300 group-hover:-translate-x-1">
                              <FontAwesomeIcon
                                icon={faAngleLeft}
                                className="text-sm text-orange-500 bg-orange-500/20 rounded-full py-2 px-2 group-hover:bg-orange-500 group-hover:text-white"
                              />
                            </span>
                          )}
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
            <div className="flex justify-center items-center gap-2">
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                1
              </button>
              <button
                className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer"
                onClick={() => {
                  setNum(6);
                }}
              >
                2
              </button>
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                3
              </button>
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                4
              </button>
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                5
              </button>
              <button className="bg-[#161616] border border-zinc-800 text-xs font-medium py-3 px-4  rounded-lg hover:border-orange-500/80 transition-all duration-200 text-white cursor-pointer">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
            <p className="text-center mt-4 text-xs text-zinc-500">
              صفحة <span>1</span> من 5
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
