import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const Language = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10"
          src={process.env.PUBLIC_URL + "/images/banners/language.png"}
          alt="Language"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white">Мова та література</h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100 mb-12">
          <h2 className="font-rutenia text-[52px] mb-4">Українська мова</h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>Українська мова – одна з найдавніших мов світу.</span>
          </div>
        </div>

        <p className="grow basis-50">
          Українська мова походить від праслов’янської – спільної мови всіх
          слов’янських племен, що проіснувала до VIIст. У розвитку української
          мови виділяються періоди:
        </p>

        <div className="flex w-full justify-between text-gray-100 mb-12">
          <div className="flex flex-col items-center gap-y-2">
            <span className="text-2xl">Протоукраїнський</span>
            <span className="text-gray-50">(VII— XI ст.)</span>
          </div>

          <img
            width={33}
            className="inline-flex"
            src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
            alt="Pattern"
          />

          <div className="flex flex-col items-center gap-y-2">
            <span className="text-2xl">Староукраїнський</span>
            <span className="text-gray-50">(XI — XIV ст.)</span>
          </div>

          <img
            width={33}
            className="inline-flex"
            src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
            alt="Pattern"
          />

          <div className="flex flex-col items-center gap-y-2">
            <span className="text-2xl">Середньоукраїнський</span>
            <span className="text-gray-50">(XIV — XIX ст.)</span>
          </div>

          <img
            width={33}
            className="inline-flex"
            src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
            alt="Pattern"
          />

          <div className="flex flex-col items-center gap-y-2">
            <span className="text-2xl">Новий</span>
            <span className="text-gray-50">(XIX — до сьогодні)</span>
          </div>
        </div>

        <div className="grow basis-50">
          <p>
            Із прийняттям християнства створюються школи, закладаються
            бібліотеки, перекладається численна кількість творів грецьких
            авторів; пишуться й оригінальні філософські, історичні і літературні
            твори. При цьому літературна мова зазнала впливу живої розмовної
            мови. Цей вплив відчутний в літописах, „Слові о полку Ігоревім” та
            інших творах.
          </p>
          <p className="mb-8">
            У <strong>козацьку добу</strong> (XVI — початок XVIII ст.) бурхливо
            розвиваються українська наука, шкільництво, література,
            книгодрукування. Літературна мова сягає апогею свого розвитку.
            Мелетій Смотрицький створює славнозвісну{" "}
            <strong>„Граматику словесну”</strong> старослов’янською мовою.{" "}
          </p>
          <p>
            Внаслідок цілковитої втрати Україною політичної незалежності в кінці
            XVII — XVIIIст. українська літературна мова і культура в цілому
            зазнають переслідувань з боку російського уряду і церкви,
            закривається мережа українських братських шкіл
          </p>
        </div>
        <div className="grow basis-50">
          <p className="mb-8">
            Натомість відкриваються російські школи й університети. Кращі вчені,
            митці переманюються в Росію. Проте в час, здавалось би, найбільшого
            культурного занепаду з виходом <strong>„Енеїди”</strong> І.
            Котляревського в 1798 році, написаної живою розмовною мовою,
            починається новий етап у розвитку української літературної мови,
            мистецтва і науки.
          </p>
          <p>
            Тотальне переслідування української культури, русифікація України
            впродовж XIX — початку XX ст. завдають великої шкоди, але не
            зупиняють українського культурного відродження.
          </p>
        </div>
      </div>

      <img
        className="mb-24"
        src={process.env.PUBLIC_URL + "/images/full/full-language.png"}
        alt="Field"
      />

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col gap-y-8">
          <p>
            У період визвольних змагань <strong>(1917 – 1920рр.)</strong>{" "}
            українська мова знову стає державною і усуваються всі перешкоди на
            шляху її розвитку, але ненадовго. З{" "}
            <strong>початку 30–х рр.</strong> розпочинається новий тотальний
            наступ на українство, набагато підступніший і жорстокіший, ніж до
            того.
          </p>

          <p>
            Фізично знищуються не лише діячі науки і культури, а й основний
            носій української мови, споконвічних традицій українського народу –
            селянство: мільйони селян розкуркулено і заслано до Сибіру. Крім
            того, <strong>понад 7 млн.</strong> чоловік виморено голодом,
            <strong> 10 млн. українців</strong> гине під час Другої світової
            війни.
          </p>
        </div>
        <div className="flex grow basis-50 flex-col gap-y-8">
          <p>
            Вимерлі або знищені українські села заселяються переселенцями з
            Росії. Планомірно русифікується словниковий склад української мови,
            звужується сфера вживання української мови. З проголошенням
            незалежності України <strong>24 серпня 1991 року</strong> в котрий
            раз розпочинається болісне, але повне надій і сподівань відродження
            української державної мови, науки, культури. І хочеться вірити, що
            цього разу воно буде неперервним і остаточним.
          </p>
          <p>
            Українська мова – одна з{" "}
            <strong className="">найдавніших мов світу</strong>. Її розвиток
            почався щонайменше <strong>три тисячі років тому</strong>.
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="flex flex-wrap gap-x-16 px-10 mb-24">
        <div className="grow basis-50">
          <p>
            Українська література є однією з <strong>найбагатших</strong> і
            найцінніших складових української культури. Вона має довгу історію
            та відображає багатошарову природу українського народу, його
            історію, традиції, віру, болі та радості.
          </p>
        </div>
        <div className="grow basis-50">
          <p>
            Серед найпопулярніших літературних діячів можна виділити кілька
            ключових осіб, які відіграли значну роль у розвитку української
            літератури і культури в цілому.
          </p>
        </div>
      </div>

      <div className="grid items-center grid-cols-8 gap-x-5 gap-y-[104px] px-10 mb-10">
        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Тарас Шевченко</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Вважається батьком української літератури та національним героєм
                України.
              </span>
            </div>
          </div>

          <p>Тара́с Григо́рович Шевче́нко (9 березня 1814 - 10 березня 1961).</p>

          <p>
            <strong>9 березня 1814 року</strong> у невеликому селі Моринці
            Черкаської області народився хлопчик, який став Пророком для
            українців. Йому було призначено долею розбудити нас від національної
            сплячки. А його послання нащадкам у наш час під час війни з Росією
            залишаються надзвичайно актуальними.
          </p>

          <p className="mb-8">
            <strong>Основні творчі надбання:</strong> збірка - Кобзар, поема -
            Заповіт, поема - Гайдамаки, поема - Марія, поема - Сон.
          </p>

          <p>
            Ці твори Тараса Шевченка відображають його глибокий патріотизм,
            соціальну чутливість та незламну віру у свободу та гідність
            українського народу. Вони є важливим джерелом інформації про
            історію, культуру та духовність України.
          </p>
        </div>

        <AnimateImg
          name={"/culture/portret1.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />

        <AnimateImg
          name={"/culture/portret2.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="max-w-[650px] col-start-5 col-end-9">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Леся Українка</h2>

            <div className="flex items-center gap-4 text-2xl mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Видатна українська поетеса, драматургиня, перекладачка та
                громадська діячка,
              </span>
            </div>
          </div>

          <p>
            Справжнє ім'я Лесі Українки – Лариса Петрівна Косач-Квітка. Вона
            народилася <strong>25 лютого 1871 року</strong> в родині дворян у
            Новограді-Волинському Житомирської області.
          </p>

          <p className="mb-8">
            <strong>Основні творчі надбання:</strong> збірка поезії - Літні
            твори, поема - Давня казка, поема - Лісова пісня, поема - Бояриня,
            поема - Смерть Каїна.
          </p>

          <p>
            Ці твори Лесі Українки відображають її талант, глибоку любов до
            України, патріотизм та соціальну активність. Вони залишаються
            важливими в українській літературі і досі викликають зацікавленість
            та захоплення читачів.
          </p>
        </div>

        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Іван Франко</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Видатний український поет, прозаїк, драматург, літературний
                критик, публіцист, перекладач, науковець, громадський і
                політичний діяч, доктор філософії
              </span>
            </div>
          </div>

          <p>
            Народився <strong>27 серпня 1856 року</strong> в селі Нагуєвичі
            (тепер Львівська область, Україна) в сім'ї священика. Отримав
            традиційну освіту в духовній семінарії та університетську освіту у
            Львівському університеті.
          </p>

          <p>
            <strong>Найвідоміші твори</strong> Франка: повість - Захар беркут,
            п’єса - Украдене щастя, повість - Перехресні стежки, поема - Мойсей,
            казка - Лис Микитa.
          </p>
        </div>

        <AnimateImg
          name={"/culture/portret3.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />
      </div>

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike />
      </div>

      <ArrowUp />
    </main>
  );
};
