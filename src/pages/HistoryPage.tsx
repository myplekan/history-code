import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";
import historyData from "../history.json";

export const HistoryPage = () => {
  const history = historyData.history;

  return (
    <main className="pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[40px] font-medium text-gray-100">Історія</h1>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/svg/search.svg"}
          alt="Search"
        /> */}
      </div>

      <div className="flex flex-wrap gap-16 justify-between pb-44">
      {history.map((item) => (
          <HistoryCultureCard key={item.id} data={item} />
        ))}
      </div>

      <ArrowUp />
    </main>
  );
};
