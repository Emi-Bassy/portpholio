import { Award } from "@/data/award";

export function AwardSection({ award }: { award: Award }) {
  return (
    <div className="grid grid-cols-4 gap-x-2">
      <span className="text-xs text-zinc-500 mt-1">{award.date}</span>
      <div className="col-span-3 flex flex-col">
        <h3 className="text-base font-serif">
          {award.title} {" "}
        </h3>
      </div>
    </div>
  );
}
