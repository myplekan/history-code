import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";

export const CulturePage = () => {
  return (
    <main className="pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[52px] font-medium">Культура</h1>
        <img
          src={process.env.PUBLIC_URL + "/images/svg/search.svg"}
          alt="Search"
        />
      </div>

      <div className="flex flex-wrap gap-16 justify-between pb-44">
        <HistoryCultureCard
          name={"language"}
          photo={"culture/culture1.png"}
          title={"Мова та література"}
          description={
            "Українська мова є державною мовою країни і використовується в основному в усіх сферах суспільного життя. Українська література має багату історію, знамениті письменники."
          }
        />
        <HistoryCultureCard
          name={"art"}
          photo={"culture/culture2.png"}
          title={"Мистецтво"}
          description={
            "Україна славиться своєю народною та сучасною художньою творчістю. Фольклорна традиція, українське вишивання, різноманітні народні музичні інструменти, як от бандура та кобза, і мальовничий розпис гончарних виробів є важливими елементами українського мистецтва."
          }
        />
        <HistoryCultureCard
          name={"music-and-dancing"}
          photo={"culture/culture3.png"}
          title={"Музика та танці"}
          description={
            "Українська музика та танці мають глибокі корені в історії країни. Фольклорні та народні мелодії часто використовуються як важливий елемент української культури. Традиційні українські танці, такі як гопак, гуцулка, аркан, також є невід'ємною частиною національної культури."
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"culture/culture4.png"}
          title={"Кулінарія"}
          description={
            "Українська кухня відома своєю смачною та поживною їжею. Борщ, вареники, голубці, сало з часником та інші страви є популярними та символічними для української кухні."
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"culture/culture5.png"}
          title={"Незалежність та радянський період"}
          year={"(1917-1991 рр.)"}
          description={
            "Утворення УНР, громадянська війна, включення до складу СРСР, після якого настає радянський період"
          }
        />
        <HistoryCultureCard
          name={"language"}
          photo={"culture/culture6.png"}
          title={"Архітектура та історичні пам'ятки"}
          description={
            "Україна має багато вражаючих історичних пам'яток та архітектурних шедеврів, які свідчать про багату культурну спадщину країни. Наприклад, Львів, Київ, Одеса та інші міста відомі своїми старовинними будівлями, церквами та замками."
          }
        />
      </div>

      <ArrowUp />
    </main>
  );
};
