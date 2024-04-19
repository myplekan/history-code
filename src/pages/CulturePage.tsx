import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";
import cultureData from "../culture.json";

export const CulturePage = () => {
  const culture = cultureData.culture;

  return (
    <main className="pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[52px] font-medium text-gray-100">Культура</h1>
        {/* <img
          src={process.env.PUBLIC_URL + "/images/svg/search.svg"}
          alt="Search"
        /> */}
      </div>

      <div className="flex flex-wrap gap-16 justify-between pb-44">
        {culture.map((item) => (
          <HistoryCultureCard key={item.id} data={item} />
        ))}
      </div>

      <ArrowUp />
    </main>
  );
};
