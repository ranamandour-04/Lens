import React from "react";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleLeft,
  faArrowLeft,
  faArrowLeftLong,
  faCamera,
  faEnvelope,
  faHouse,
  faImages,
  faLink,
  faList,
  faShareNodes,
  faTags,
} from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  faLinkedin,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function BlogDetails({ data }) {
  const { id } = useParams();

  // Find target post using id or slug matching
  const details = Array.isArray(data)
    ? data.find((post) => String(post.id) === id)
    : null;

  const navigate = useNavigate();

  if (!details) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] text-white flex items-center justify-center">
        <p className="text-gray-400">المقال غير موجود</p>
      </div>
    );
  }

  // Parse markdown content (splitting by sections starting with ##)
  const parseContent = (contentStr) => {
    if (!contentStr) return { intro: "", sections: [] };

    const parts = contentStr.split(/(?=##\s+)/);
    let intro = parts[0].trim();
    const sections = [];

    parts.slice(1).forEach((part, index) => {
      const lines = part.trim().split("\n");
      const title = lines[0].replace(/^##\s+/, "").trim();
      const body = lines.slice(1).join("\n").trim();
      if (title) {
        sections.push({
          id: `section-${index + 1}`,
          number: index + 1,
          title,
          body,
        });
      }
    });

    return { intro, sections };
  };

  const { intro, sections } = parseContent(details.content);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-orange-500 selection:text-white">
      {/* Hero Section */}
      <header className="relative h-[80vh] w-full flex flex-col overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src={details.image}
            alt={details.title}
            className="w-full h-full object-cover opacity-60 scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent backdrop-brightness-125"></div>
        </div>

        {/* Breadcrumbs */}
        <div className="flex items-center w-fit gap-2 mt-28 ms-8 text-sm text-gray-400 bg-zinc-800/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10 z-10">
          <Link to={"/"} className="hover:text-white transition-colors">
            <FontAwesomeIcon icon={faHouse} />
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <Link to={"/blog"} className="hover:text-white transition-colors">
            المدونة
          </Link>
          <span>
            <FontAwesomeIcon icon={faAngleLeft} />
          </span>
          <span className="text-orange-500">{details.category}</span>
        </div>

        <div className="relative max-w-6xl mx-auto flex flex-col px-4 sm:px-6 lg:px-8 mt-10 z-10 w-full">
          <div className="flex flex-col items-start gap-5">
            <div className="flex gap-3 items-center flex-wrap">
              <span className="inline-block bg-orange-500 text-white font-semibold text-sm px-4 py-1.5 rounded-xl">
                {details.category}
              </span>
              <span className="flex gap-2 items-center text-zinc-400 font-semibold text-sm px-3 py-1 rounded-xl bg-white/5 border border-white/5">
                <FontAwesomeIcon icon={faCalendar} />
                {details.date}
              </span>
              <span className="flex gap-2 items-center text-zinc-400 font-medium text-sm px-3 py-1 rounded-xl bg-white/5 border border-white/5">
                <FontAwesomeIcon icon={faClock} />
                {details.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-[1.3]">
              {details.title}
            </h1>

            {/* Author Small */}
            <div className="flex items-center gap-4 bg-white/5 px-5 py-3 rounded-2xl border border-white/10 backdrop-blur-sm">
              <img
                src={details.author.avatar}
                alt={details.author.name}
                className="w-12 h-12 rounded-full border-2 border-orange-500 object-cover"
              />
              <div>
                <p className="text-md font-bold">{details.author.name}</p>
                <p className="text-xs text-gray-400">{details.author.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Article Content */}
          <div className="lg:col-span-8 space-y-10">
            {/* Intro Quote / Excerpt */}
            {details.excerpt && (
              <div className="bg-orange-500/10 border border-orange-500/30 p-6 rounded-2xl text-lg italic text-gray-200 leading-relaxed">
                "{details.excerpt}"
              </div>
            )}

            {/* Intro Paragraph */}
            {intro && (
              <p className="text-lg text-gray-300 leading-loose">{intro}</p>
            )}

            {/* Dynamic Content Sections */}
            {sections.map((section) => (
              <section
                key={section.id}
                id={section.id}
                className="space-y-4 pt-4"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-orange-500/10 border border-orange-500/40 rounded-xl flex items-center justify-center shrink-0">
                    <FontAwesomeIcon
                      icon={faCamera}
                      className="text-orange-500 text-2xl"
                    />
                  </div>
                  <h2 className="text-3xl font-bold text-white flex items-center gap-3">
                    {section.title}
                  </h2>
                </div>
                <p className="text-gray-400 leading-loose text-lg whitespace-pre-line">
                  {section.body}
                </p>
              </section>
            ))}

            <div className="flex flex-col gap-8 pt-6">
              {/* Tags Section */}
              {details.tags && details.tags.length > 0 && (
                <div className="bg-[#121212] rounded-2xl p-6 border border-white/5 flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/40 rounded-lg flex items-center justify-center">
                      <FontAwesomeIcon
                        icon={faTags}
                        className="text-orange-500 text-sm"
                      />
                    </div>
                    <span className="text-white text-md font-bold">الوسوم</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {details.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-[#161616] border border-zinc-700/50 rounded-full px-4 py-1.5 text-sm text-zinc-400 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Links */}
              <div className="bg-[#121212] rounded-2xl p-6 border border-white/5 flex justify-between items-center flex-wrap gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500/10 border border-orange-500/40 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon
                      icon={faShareNodes}
                      className="text-orange-500 text-sm"
                    />
                  </div>
                  <span className="text-white text-md font-bold">
                    شارك المقال
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="bg-[#161616] border border-zinc-700/50 rounded-lg p-3 text-sm text-zinc-400 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 flex items-center justify-center w-10 h-10"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#161616] border border-zinc-700/50 rounded-lg p-3 text-sm text-zinc-400 hover:bg-[#0077B5] hover:text-white transition-all duration-300 flex items-center justify-center w-10 h-10"
                  >
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#161616] border border-zinc-700/50 rounded-lg p-3 text-sm text-zinc-400 hover:bg-[#25D366] hover:text-white transition-all duration-300 flex items-center justify-center w-10 h-10"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} />
                  </a>
                  <a
                    href="#"
                    className="bg-[#161616] border border-zinc-700/50 rounded-lg p-3 text-sm text-zinc-400 hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center justify-center w-10 h-10"
                  >
                    <FontAwesomeIcon icon={faLink} />
                  </a>
                </div>
              </div>

              {/* Author Details Card */}
              <div className="bg-[#121212] rounded-2xl p-6 border border-white/5 flex gap-5 items-center">
                <img
                  src={details.author.avatar}
                  alt={details.author.name}
                  className="w-24 h-24 rounded-2xl border-2 border-orange-500/30 object-cover shrink-0"
                />
                <div className="flex flex-col gap-2">
                  <div>
                    <span className="text-orange-500 text-xs font-bold block mb-0.5">
                      كاتب المقال
                    </span>
                    <h3 className="text-xl font-bold">{details.author.name}</h3>
                    <p className="text-xs text-gray-500">
                      {details.author.role}
                    </p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير
                    الفوتوغرافي.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sticky Sidebar */}
          <aside className="lg:col-span-4 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {/* Table of Contents Card */}
              <div className="bg-[#121212] border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="w-8 h-8 bg-orange-600/20 text-orange-500 rounded-lg flex items-center justify-center">
                    <FontAwesomeIcon icon={faList} />
                  </div>
                  <h3 className="font-bold text-lg">محتويات المقال</h3>
                </div>

                <ul className="space-y-4">
                  {sections.map((section) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="flex items-center gap-4 group hover:text-orange-500 transition-colors"
                      >
                        <span className="w-6 h-6 rounded-md bg-zinc-800 text-zinc-400 text-xs flex items-center justify-center group-hover:bg-orange-500/20 group-hover:text-orange-500 transition-all font-mono">
                          {section.number}
                        </span>
                        <span className="text-sm text-gray-400 group-hover:text-orange-500 transition-colors">
                          {section.title}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Post Details Card (Read Time & Date) */}
              <div className="bg-[#121212] border border-white/5 rounded-2xl p-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#0A0A0A] flex flex-col gap-2 p-4 items-center justify-center rounded-xl border border-white/5">
                    <FontAwesomeIcon
                      className="text-lg text-orange-500"
                      icon={faClock}
                    />
                    <p className="text-sm font-bold text-center">
                      {details.readTime}
                    </p>
                    <span className="text-zinc-500 text-xs">وقت القراءة</span>
                  </div>
                  <div className="bg-[#0A0A0A] flex flex-col gap-2 p-4 items-center justify-center rounded-xl border border-white/5">
                    <FontAwesomeIcon
                      className="text-lg text-orange-500"
                      icon={faCalendar}
                    />
                    <p className="text-sm font-bold text-center">
                      {details.date}
                    </p>
                    <span className="text-zinc-500 text-xs">تاريخ النشر</span>
                  </div>
                </div>
              </div>

              {/* Newsletter Callout Card */}
              <div className="bg-orange-500/10 border border-orange-500/40 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center text-xl justify-center mx-auto text-orange-500 mb-4">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <h4 className="font-bold mb-1 text-base">لا تفوت جديدنا</h4>
                <p className="text-xs text-gray-400 mb-5">
                  اشترك للحصول على أحدث المقالات
                </p>
                <Link
                  to={"/blog"}
                  className="flex justify-center w-full bg-orange-500 hover:bg-orange-600 transition-colors text-white py-3 rounded-xl text-sm font-bold"
                >
                  تصفح المزيد
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Related Articles Section */}
      <section className="bg-[#080808] py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-10">
            <div className="flex items-center gap-4">
              <FontAwesomeIcon
                icon={faImages}
                className="bg-orange-500/10 border border-orange-500/40 text-orange-500 p-3 text-xl rounded-2xl"
              />
              <div>
                <h2 className="text-white text-2xl md:text-3xl font-bold">
                  مقالات قد تعجبك
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  استكشف المزيد من المحتوى المميز
                </p>
              </div>
            </div>
            <Link
              to={"/blog"}
              className="flex items-center gap-2 text-orange-500 font-medium group text-sm"
            >
              عرض الكل
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="group-hover:-translate-x-1 transition-transform duration-200"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data
              .filter(
                (blog) =>
                  blog.category === details.category && blog.id !== details.id,
              )
              .slice(0, 3)
              .map((post) => {
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
                    className="rounded-3xl flex flex-col border group hover:border-orange-500/60 hover:-translate-y-1 border-zinc-800 bg-[#111111] shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer relative"
                  >
                    <div className="w-full h-48 overflow-hidden relative">
                      <img
                        src={image}
                        alt={title}
                        className="h-full w-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <div className="flex flex-col p-6 grow justify-between gap-4">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 text-xs text-zinc-500">
                          <span className="rounded-full text-orange-500 border border-orange-500/40 bg-orange-500/10 px-3 py-1 font-medium">
                            {category}
                          </span>
                          <span className="flex items-center gap-1">
                            <FontAwesomeIcon icon={faClock} />
                            {readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold group-hover:text-orange-500 transition-colors text-white line-clamp-2">
                          {title}
                        </h3>
                        <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                          {excerpt}
                        </p>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t border-white/5">
                        <div className="flex gap-2.5 items-center">
                          <img
                            src={avatar}
                            alt={name || title}
                            className="w-9 h-9 rounded-full border border-gray-700 object-cover"
                          />
                          <div className="flex flex-col">
                            <p className="font-semibold text-xs text-white">
                              {name}
                            </p>
                            <span className="text-[10px] text-zinc-500">
                              {role}
                            </span>
                          </div>
                        </div>
                        <span className="flex items-center text-orange-500 font-semibold text-xs transition-transform duration-300 group-hover:-translate-x-1">
                          اقرأ المقال
                          <FontAwesomeIcon
                            icon={faArrowLeftLong}
                            className="mr-1.5 text-xs"
                          />
                        </span>
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
    </div>
  );
}
