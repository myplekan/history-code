import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const MongolInvasion = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10"
          src={process.env.PUBLIC_URL + "/images/banners/mongol.png"}
          alt="Mongol Invasion"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl text-center mb-4">
            Монгольське нашестя та розпад Русі
          </h1>
          <span className="text-4xl text-white">(IX-XIII століття)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="flex gap-x-16 px-10 mb-8">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Монгольське нашестя</h2>

          <div className="flex items-center gap-4 text-2xl mb-8">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Велике монгольське нашестя на Русь відбулося в 1237-1240 роках,
              під керівництвом великого хана Батия.
            </span>
          </div>

          <div>
            <p>
              Монгольське нашестя та розпад Русі - це ключові події в історії
              Східної Європи, що відбулися в <strong>XIII столітті</strong> і
              мали значний вплив на подальший розвиток регіону.
            </p>

            <p>
              Велике монгольське нашестя на Русь відбулося в{" "}
              <strong>1237-1240 роках</strong>, під керівництвом великого хана
              Батия.
            </p>

            <p>
              Монголи завдали важких поразок руським князівствам, руйнуючи
              міста, зруйнувавши дороги та завдаючи великих людських втрат.
            </p>

            <p>
              Найбільш відоме битва цього періоду - битва на ріці Калка, де
              монголи перемогли війська Київської Русі. Наслідки монгольського
              нашестя мали руйнівний вплив на економіку та культуру Русі.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <p>
            Багато міст були зруйновані, торгівля припинилася, а руська культура
            зазнала великих втрат. Поступове ослаблення князівської влади та
            зростання впливу монгольської орди.
          </p>

          <p>
            Після монгольського нашестя, Русь розпалася на різні князівства, які
            діяли в умовах зміцненого монгольського впливу.Середньовічна
            князівська система втратила свою єдність, і кожне князівство стало
            фактично самостійною.
          </p>

          <p>
            Формування <strong>Галицько-Волинського</strong> князівства та
            Великого князівства Литовського як важливих центрів влади на заході
            та сході відповідно. В цілому, монгольське нашестя та розпад Русі
            мали значний вплив на історію Східної Європи, визначаючи подальший
            хід подій і формування нових державних утворень.
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
