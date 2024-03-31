import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const Division = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10"
          src={process.env.PUBLIC_URL + "/images/banners/division.png"}
          alt="Division"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl text-center mb-4">
            Поділ України
          </h1>
          <span className="text-4xl text-white">(XVIII століття)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="flex gap-x-16 px-10 mb-8">
        <div className="flex w-6/12 flex-col gap-8">
          <h2 className="font-rutenia text-[52px]">Поділ Українських земель</h2>

          <div className="flex items-center gap-4 text-2xl mb-4">
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
              У другій половині <strong>XVIII ст.</strong> Польща переживала
              період занепаду. Феодально-кріпосницький лад, феодальні чвари,
              міжусобиці гальмували розвиток господарства країни. Ослабленням
              Польщі скористалися сусідні Пруссія та Австрія. Вони виношували
              плани роздробити Польщу, прагнули розширити свої володіння за
              рахунок її території. До Пруссії та Австрії приєдналася Росія. .
            </p>
          </div>

          <div>
            <p>
              Внаслідок першого поділу Польщі <strong>(1772 р.)</strong> майже
              всю <strong>Східну Галичину</strong> захопила Австрійська
              імперія. Невдовзі був узаконений перехід до неї також Північної
              Буковини. Таким чином, <strong>західноукраїнські землі</strong>{" "}
              опинилися під владою австрійських та угорських поміщиків. Другий
              <strong>(1793 р.)</strong> і третій <strong>(1795 р.)</strong>{" "}
              поділи Польщі призвели до значних змін політичного устрою
              українських земель.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <p>
            До Росії відійшла Правобережна Україна (Київщина, Брацлавщина,
            Волинь). Звичайно поділи Польщі були реакційним явищем. За те, що
            польський народ на багато десятиліть втратив державну незалежність,
            відповідальність несуть Росія, Пруссія і Австрія Однак возз'єднання
            Правобережжя з Росією було явищем прогресивним. Воно означало
            відновлення історичної справедливості.
          </p>

          <p>
            Протягом 90-х років XVIII ст. на територію Правобережжя було
            поширено загальноросійські адміністративні органи та установи. У
            краї почали діяти намісництво, а згодом губернські управління,
            царські судові органи.
          </p>

          <p>
            У другій половині <strong>XVIII ст.</strong> у результаті тривалих і
            виснажливих російсько-турецьких воєн Російська держава дістала вихід
            до Чорного моря. Північне Причорномор'я і Крим у 1783 р. увійшли до
            складу Росії. Було покладено край спустошливим турецьким і
            татарським набігам на українські землі. Завоювання південних степів,
            Північного Причорномор'я і Криму мало велике значення для
            політичного і господарського розвитку Російської імперії.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4 px-10 mb-16">
        <MoreAndLike />
      </div>

      <AnimatePrint />

      <div className="pb-24"></div>

      <ArrowUp />
    </main>
  );
};
