import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";

export const HistoryPage = () => {
  return (
    <main className="pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[52px] font-medium">Історія</h1>
        <img src={process.env.PUBLIC_URL + "/images/search.svg"} alt="Search" />
      </div>

      <div className="flex flex-wrap gap-y-16 justify-between pb-44">
        <HistoryCultureCard
          name={"language"}
          photo={"history1.png"}
          title={"Давньоруський період"}
          year={"(IX-XIII століття)"}
          description={
            "Формування Київської Русі, розквіт культури та державотворення."
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"history2.png"}
          title={"Монгольське нашестя та розпад Русі"}
          year={"(XIII століття)"}
          description={"Занепад Київської Русі після монгольського вторгнення."}
        />
        <HistoryCultureCard
          name={"language"}
          photo={"history3.png"}
          title={"Утворення козацької держави"}
          year={"(XVI - XVI століття)"}
          description={
            "Виникнення Козацької держави та епоха Запорозького козацтва."
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"history4.png"}
          title={"Поділ України"}
          year={"(XVIII століття)"}
          description={
            "Розподіл України між Австрійською, Російською та Польською імперіями."
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"history5.png"}
          title={"Незалежність та радянський період"}
          year={"(1917-1991 рр.)"}
          description={
            "Утворення УНР, громадянська війна, включення до складу СРСР, після якого настає радянський період"
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"history6.png"}
          title={"Сучасна незалежна Україна"}
          year={"(1991-до сьогодні)"}
          description={
            "Проголошення незалежності, реформи, включення до міжнародних структур та вирішення складних внутрішньополітичних та зовнішньополітичних питань."
          }
        />
      </div>

      <ArrowUp />
    </main>
  );
};
