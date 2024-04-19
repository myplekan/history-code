import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";
import { useAppSelector } from "../hooks/hooks";
import { Culture } from "../types/culture";
import { History } from "../types/history";

export const LikePage = () => {
  const liked: (History | Culture)[] = useAppSelector(
    (state) => state.liked.liked
  );

  return (
    <main className="min-h-min pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[52px] font-medium text-gray-100">Вподобане</h1>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/svg/search.svg"}
          alt="Search"
        /> */}
      </div>

      {liked.length ? (
        <div className="flex flex-wrap gap-16 justify-between pb-44">
          {liked.map((item) => (
            <HistoryCultureCard key={item.name} data={item} />
          ))}
        </div>
      ) : (
        <h2 className="text-2xl font-semibold leading-5 text-center">Ви ще нічого не вподобали</h2>
      )}

      <ArrowUp />
    </main>
  );
};
