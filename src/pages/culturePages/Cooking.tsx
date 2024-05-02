import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";
import { findDescription } from "../../functions/findDescription";
import { Culture } from "../../types/culture";

export const Cooking = () => {
  const data: Culture = findDescription("culture", 4) as Culture;

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen bg-black-opacity-60 mb-20 w-full">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/cooking.png"}
          alt="Cooking"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white">Кулінарія</h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="max-w-[1440px] flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Українська кухня
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Українська народна кухня належить до сукупності європейської
              системи харчування
            </span>
          </div>

          <p className="mt-8">
            Українська кухня — звичний українському народу спосіб приготування
            їжі, досвід і звичаї, які пов'язані з українською культурою,
            кулінарне мистецтво українців.
          </p>

          <p>
            Українські страви відомі своїм різноманіттям і високими смаковими
            якостями. Українська кухня нараховує <strong>сотні</strong>{" "}
            рецептів: борщі й пампушки, паляниці й галушки, грибна юшка, бануш,
            вареники й ковбаси, напої з фруктів і меду відомі далеко за межами
            України. <strong>Культурний туризм</strong> посідає перше місце
            серед намірів, заради яких Україну відвідують іноземні туристи.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            Багато особливостей української кухні обумовлені способом життя
            українського народу, переважна більшість якого заробляла на прожиток
            важкою хліборобською працею.
          </p>

          <p>
            Щоби виконувати таку виснажливу роботу, людям була потрібна ситна,
            калорійна їжа. Тому для української кухні властиві страви, що багаті
            і на білки, і на жири, і на вуглеводи. Кожному з етнографічних
            регіонів України властиві свої відмінності кухні, зумовлені
            історичними особливостями та звичаями, а деякі страви української
            кухні, наприклад борщі й вареники, увійшли до меню міжнародної
            кухні. Борщ, вареники, куліш — не тільки смачні та поживні страви, а
            й яскраві кулінарні бренди України, які мають власну глибоку і
            захопливу історію
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="max-w-[1440px] grid items-center grid-cols-8 gap-x-5 gap-y-[104px] px-10 mb-10">
        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Борщ</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                У 2022 році борщ увійшов до списку нематеріальної культурної
                спадщини людства ЮНЕСКО.
              </span>
            </div>
          </div>

          <p>
            <strong>Борщ</strong> – це одна з найвідоміших страв української
            кухні. Він готується на основі буряка, картоплі, моркви, капусти та
            м'яса (зазвичай свинини чи говядини) і має характерний червоний
            колір. Борщ має багатовікове минуле і у <strong>2022 році</strong>{" "}
            увійшов до Репрезентативного списку нематеріальної культурної
            спадщини людства <strong>ЮНЕСКО</strong>.
          </p>
        </div>

        <AnimateImg
          name={"/culture/cooking1.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />

        <AnimateImg
          name={"/culture/cooking2.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="max-w-[650px] col-start-5 col-end-9">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Вареники</h2>

            <div className="flex items-center gap-4 text-2xl mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Вареники – це традиційні українська страва, яку можна начиняти
                різноманітними начинками
              </span>
            </div>
          </div>

          <p>
            <strong>Вареники</strong>, зокрема зроблені на пару, страва
            переважно святкова, бо сам хід приготування вимагає неабиякої
            кулінарної вправності. Особливої слави зажили вареники з сиром у
            сметані, вареники з маком, вишнями та чорницями, политі медом.
            Простіший різновид називається <strong>лінивими варениками</strong>.
            Вони робляться з тіста, перемішаного разом з начинкою і варяться у
            казані (каструлі).
          </p>

          <p>
            Вареники вважаються, нарівні з борщем. І так уже вони полюбились
            народу, що не лише оспівав він їх у власних піснях і прислів'ях, а й
            відвів почесне місце у значних обрядах.
          </p>
        </div>

        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Голубці</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Голубці названі на честь голубів — птахів, котрі уособлюють
                творчу силу вогню.
              </span>
            </div>
          </div>

          <p>
            Голубці названі на честь голубів — птахів, котрі уособлюють творчу
            силу вогню. Без голубців важко було уявити святковий стіл в
            українській родині. Голубці <strong>готуються</strong> із
            капустяного листя, що начиняється сумішшю із пшона (пізніше — рису),
            м'яса, подрібненої моркви, цибулі та прянощів. Найбільше смакують зі
            сметаною або поливкою з грибами.
          </p>
        </div>

        <AnimateImg
          name={"/culture/cooking3.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />

        <AnimateImg
          name={"/culture/cooking4.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="max-w-[650px] col-start-5 col-end-9">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Український хліб</h2>

            <div className="flex items-center gap-4 text-2xl mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Український хліб – це не лише страва, а й символ національної
                ідентичності та культурної спадщини.
              </span>
            </div>
          </div>

          <p>
            Традиційний житній хліб називають{" "}
            <strong>об'єктом нематеріальної</strong> спадщини України.
          </p>

          <p>
            Житнє та пшеничне борошно, рідше — ячмінне та кукурудзяне, були
            основними складовими для приготування українського хліба. У часи
            неврожаїв зерна, в тісто для хліба нерідко підмішували моркву,
            буряк, згодом — картоплю, а також жолоді, кору дуба або берези,
            кропиву та лободу. Цікаво, що відомі в сучасності дріжді,, ніколи не
            входили до складу повсякденного українського хліба, а
            використовувалися хіба що для здоби. В давнину українці
            послуговувалися <strong>заквасками</strong>: солодова, хмільна,
            ягідна, вівсяна, з родзинок тощо.
          </p>
        </div>
      </div>

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike data={data} />
      </div>

      <ArrowUp />
    </main>
  );
};
