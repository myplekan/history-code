import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";
import { findDescription } from "../../functions/findDescription";
import { History } from "../../types/history";

export const Independence = () => {
  const data: History = findDescription("history", 5) as History;

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen bg-black-opacity-60 mb-20 w-full">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/independence.png"}
          alt="Cossack State"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl text-center mb-4">
            Незалежність та радянський період
          </h1>
          <span className="text-4xl text-white">(1917-1991 рр.)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="max-w-[1440px] flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Радянський період</h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              5 серпня 1772 року на основі секретних конвенцій відбувся поділ
              Речі Посполитої.
            </span>
          </div>

          <div>
            <p>
              <strong>Утворення СРСР:</strong> Після Лютневої та Жовтневої
              революцій 1917 року в Росії виникла Радянська Росія, яка згодом
              об'єдналася з іншими радянськими республіками, утворивши Союз
              Радянських Соціалістичних Республік (СРСР). Україна стала однією з
              цих республік.
            </p>

            <p>
              <strong>Політика примусової колективізації:</strong> В 1920-1930-х
              роках радянський режим здійснював примусову колективізацію
              сільськогосподарських угідь, що призвело до голодомору 1932-1933
              років, який забрав мільйони людських життів в Україні.
            </p>

            <p>
              <strong>Тоталітарний режим:</strong> Під керівництвом Сталіна в
              Україні існував тоталітарний режим, який призвів до масових
              репресій, політичних переслідувань та масових депортацій.
            </p>
          </div>
        </div>

        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/independence1.png"}
            staticClass={""}
            animateClass={"animate-move-left"}
          />
        </div>
      </div>

      <AnimatePrint />

      <div className="max-w-[1440px] flex gap-x-16 px-10 mb-8">
        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/independence2.png"}
            staticClass={""}
            animateClass={"animate-move-right"}
          />
        </div>

        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Незалежність України
          </h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              24 серпня 1991 року Верховна Рада України проголосила Незалежність
              України.
            </span>
          </div>

          <div>
            <p>
              <strong>Референдум про незалежність:</strong> У 1991 році в
              Україні відбувся референдум про незалежність, на якому більшість
              голосувачів підтримала створення незалежної держави.{" "}
              <strong>24 серпня 1991 року </strong>
              Верховна Рада України проголосила Незалежність України.
            </p>

            <p>
              <strong>Перехід до ринкової економіки:</strong> Після отримання
              незалежності Україна пережила складний період переходу від
              планової до ринкової економіки, що супроводжувалося економічними
              труднощами та соціальними змінами.
            </p>

            <p>
              <strong>Розвиток демократії та культури:</strong> У цей період
              Україна зазнала значних змін у політичній системі, зростанні
              громадянського суспільства та розвитку культурної сфери. Країна
              активно співпрацює зі світовими партнерами у сфері культури, науки
              та освіти.
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4 px-10 mb-8">
        <MoreAndLike data={data} />
      </div>

      <ArrowUp />
    </main>
  );
};
