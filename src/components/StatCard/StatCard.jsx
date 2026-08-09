import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function StatCard({ card }) {
  const { icon, value, label } = card;
  return (
    <>
      <div className="flex flex-col w-40 h-35 items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-[#161616]/80 p-0">
        <FontAwesomeIcon icon={icon} className="text-2xl text-orange-600" />
        <p className="text-3xl font-black text-orange-400">{value}</p>
        <p className="text-sm  text-zinc-400">{label}</p>
      </div>
    </>
  );
}
