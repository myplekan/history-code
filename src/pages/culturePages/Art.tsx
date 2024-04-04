import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const Art = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/art.png"}
          alt="Art"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white">Мистецтво</h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="grid items-center grid-cols-8 gap-x-5 px-10 mb-8">
        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Українське мистецтво
            </h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Українське мистецтво має свої коріння в давньоруських традиціях.
              </span>
            </div>
          </div>

          <p>
            Українське мистецтво має свої коріння в давньоруських традиціях, які
            проявлялися в архітектурі церков, іконописі, різьбленні по дереву,
            мозаїці тощо.
          </p>

          <p>
            Київська Русь славилася своїми величними <strong>церквами</strong>{" "}
            та монастирями. Найвідоміші з них – Софійський Собор та
            Києво-Печерська Лавра. Архітектура цих споруд поєднувала елементи
            візантійського, скіфського та східнослов'янського стилів.
          </p>

          <p>
            Важливим напрямком мистецтва в цей період був{" "}
            <strong>іконопис</strong>. Ікони були важливими предметами для
            релігійної практики та мали великий духовний і символічний зміст.
            Вони мали свої стилістичні особливості, відображаючи вплив
            візантійської та місцевої традицій.
          </p>
        </div>

        <AnimateImg
          name={"/culture/art1.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <p className="grow basis-50">
          <strong>Мозаїка</strong> була часто використовуваною технікою при
          оздобленні церковних споруд. Вона дозволяла створювати складні та
          красиві композиції з різноманітних матеріалів, таких як камінь, скло
          та кераміка.
        </p>

        <p className="grow basis-50">
          У Київській Русі розвивалося <strong>книжкове мистецтво</strong>,
          зокрема манускриптна культура. Записи та ілюстрації в рукописних
          книгах були важливим способом збереження знань та культурних
          цінностей.
        </p>
      </div>

      <img
        className="mb-24"
        src={process.env.PUBLIC_URL + "/images/full/full-art1.png"}
        alt="Art"
      />

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Барокко та ранній класицизм в Україні
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Період бароко та раннього класицизму в Україні припадає на 17-18
              століття.
            </span>
          </div>

          <p className="mt-8">
            Період бароко та раннього класицизму в Україні припадає на{" "}
            <strong>17-18 століття</strong> та характеризується значним
            розвитком мистецтва, архітектури та культури в цілому.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            <strong>Українське бароко</strong> позначено
            сполученням аскетичності та гедонізму, символічності та натуралізму,
            сповнено драматизму, театральності,
            ілюзіонізму, насичено емблематикою й алегоризмом, складними
            метафорами та ін. У художніх творах поєднуються язичницькі символи з
            християнськими, риторичний раціоналізм із надмірною
            екзальтацією тощо.
          </p>

          <p>
            До Українського барокко відносять такі храми:, Софійського собору,
            Видубецького та Михайлівського золотоверхого монастиря в Києві.
            Покровський собор у Харкові. Троїцький собор у Чернігові.
          </p>
        </div>
      </div>

      <img
        className="mb-24"
        src={process.env.PUBLIC_URL + "/images/full/full-art2.png"}
        alt="Art"
      />

      <div className="grid items-center grid-cols-8 gap-x-5 gap-y-[104px] px-10 mb-36">
        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Мистецтво ХІХ століття
            </h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                У 19 столітті українське мистецтво пережило ряд значних
                здобутків та впливових подій, які визначили його розвиток.
              </span>
            </div>
          </div>

          <p>
            В <strong>XIX столітті</strong> під впливом національного
            пробудження та романтизму розвивалися українська література,
            живопис, музика. Творчість художників, таких як Тарас Шевченко, Іван
            Айвазовський, Михайло Пимоненко, мала велике значення для формування
            української національної ідентичності.
          </p>

          <p>
            <strong>Михайло Коцюбинський</strong>, український письменник 19
            століття, відомий своєю прозою та публіцистикою. Український театр у
            19 столітті почав активно розвиватися.
          </p>

          <p>
            <strong>Театральні колективи</strong> створювали вистави на основі
            українських тематик, що сприяло популяризації української культури
            серед населення.
          </p>

          <p>
            Ці здобутки українського мистецтва в 19 столітті відіграли важливу
            роль у формуванні національної ідентичності та культурного обличчя
            України.
          </p>
        </div>

        <AnimateImg
          name={"/culture/art2.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />
      </div>

      <div className="flex justify-between px-10 mb-24">
        <div className="max-w-[650px]">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Модернізм</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Розвиток українського модернізму відбувався на початку 20
                століття.
              </span>
            </div>
          </div>

          <p>
            У початку <strong>ХХ століття</strong> в Україні почало формуватися
            мистецьке середовище, що активно віддавало перевагу модерністським
            течіям, особливо у живописі, скульптурі та архітектурі.
          </p>
        </div>

        <div className="max-w-[650px]">
          <p>
            Музична та театральна сцена також відчула вплив модернізму. Нові
            музичні напрямки, експерименти зі звуком та ритмом відображали
            турбулентні зміни у суспільстві. Театральні вистави теж стали більш
            експериментальними, звертаючись до нових тем та образів.
          </p>
          <p>
            У цей період розвивалася також літературна критика та{" "}
            <strong>журналістика</strong>. Журнали та газети публікували нові
            ідеї, критичні огляди та дебати, що сприяло формуванню культурної
            дискусії та розмірковування над майбутнім українського суспільства.
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="flex justify-between px-10 mb-24">
        <div className="max-w-[650px]">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Сучасність</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Сучасна українська мистецька сцена різноманітна і динамічна.,
                вона включає в себе різні стил
              </span>
            </div>
          </div>

          <p>
            Сучасні українські художники активно використовують різноманітні
            медіа для вираження своїх ідей та концепцій, включаючи живопис,
            скульптуру, інсталяції, відео-мистецтво, арт-об'єкти, цифрове
            мистецтво та інше.
          </p>
          <p>
            Українські художники займаються різноманітними темами, від особистих
            переживань та внутрішнього світу до соціальних, політичних та
            екологічних проблем.{" "}
          </p>
        </div>

        <div className="max-w-[650px]">
          <p className="mb-8">
            Одні з навідоміших сучасних українських митців: Іван Марчук, Борис
            Михайлов, Олександр Ройтбурд, Олександр Ройтбурд. Україна має
            активну та різноманітну художню спільноту, яка включає художників,
            кураторів, критиків, галереї та арт-простори.
          </p>
          <p>
            Ця спільнота активно співпрацює, організовує виставки, проекти та
            резиденції для розвитку та підтримки мистецтва. Багато українських
            художників використовують свою творчість для висвітлення соціальних
            проблем, підтримки громадських рухів та відстоювання прав людини.
            Розвиток сучасного українського мистецтва свідчить про
            багатогранність та творчість української культури.
          </p>
        </div>
      </div>

      <img
        className="mb-24"
        src={process.env.PUBLIC_URL + "/images/full/full-art3.png"}
        alt="Art"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike />
      </div>

      <ArrowUp />
    </main>
  );
};
