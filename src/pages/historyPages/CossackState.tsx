import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";
import { findDescription } from "../../functions/findDescription";
import { History } from "../../types/history";

export const CossackState = () => {
  const data: History = findDescription("history", 3) as History;

  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/cossack-state.png"}
          alt="Cossack State"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl text-center mb-4">
            Утворення козацької держави
          </h1>
          <span className="text-4xl text-white">(IX-XIII століття)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Початок козацького руху
          </h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Перша в історії офіційна згадка про дії козаків на морі й офіційна
              згадка про запорозьких козаків узагалі — 1489 рік.
            </span>
          </div>

          <div className="mb-8">
            <p>
              У другій половині XVI століття на території Запорізької Січі, що
              знаходилася на південному заході сучасної України, почав
              формуватися козацький рух. Козаки були вільними вояками, які
              боролися з турецько-татарською окупацією та захищали кордони
              українських земель.
            </p>
          </div>

          <div>
            <p>
              Основними джерелами формування нової соціальної верстви в Україні
              були селянство, яке, тікаючи у степ, протестувало проти
              закріпачення та посилення феодальної експлуатації, та міщанство,
              котре йшло на південь спочатку з метою сезонного промислу,
              полювання, рибальства, а потім об’єднувалося й будувало на Дикому
              полі невеличкі захисні містечка — прообрази Січі.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <p>
            Головними справами козаків були організація походів проти татар і
            заготівля дичини та риби. Заможні козаки мали наймитів, у тому числі
            з козацького середовища, які допомагали вести господарство. У 1556
            р. на о.Мала Хортиця черкаський староста Дмитро Вишневецький
            заснував фортецю Хортицю, яка започаткувала Запорізьку Січ.
          </p>

          <p>
            Назва “Січ” походить від слова “сікти” і означає укріплення з
            дерева, хмизу, глини. Крім Хортицької, також відомі січі
            Базавлуцька, Томаківська, Чортомлицька, Каменська тощо. Надзвичайно
            докучало Запоріжжя Польській державі.
          </p>

          <p>
            Адже масові втечі селян позбавляли феодалів робочих рук, а козацькі
            походи на Крим і Стамбул ускладнювали стосунки Польщі з Туреччиною.
            Тому, проводячи політику «поділяй і володарюй», польський уряд брав
            до себе на службу заможну частину козаків, забезпечивши їм привілеї.
            І вже їхніми руками він придушував свавілля запорожців, спрямовуючи
            їх на основне завдання — охороняти південні кордони держави.
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="flex gap-x-16 px-10 mb-[136px]">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Запорозька Січ</h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Унікальне значення козаччини у тому, що це був стихійно створений
              острів демократії, який, мабуть, випередив чимало європейських
              країн.
            </span>
          </div>

          <div>
            <p>
              Близько <strong>1554 року</strong>волинський князь
              українсько-литовського походження Дмитро Вишневецький нижче
              Дніпрових порогів на острові <strong>Мала Хортиця</strong>
              розпочав будівництво форпосту для захисту проти татарської навали.
            </p>

            <p>
              Ця подія ознаменувала <strong>заснування Запорізької Січі</strong>
              – козацької фортеці та бази для походів морем та суходолом. У XVI
              столітті з'являється Дмитро Вишневецький, який зі строкатих
              спільнот пограниччя створює організацію з центром у Запорізькій
              Січі. І козацтво набуває організаційних рис. Згодом з військової
              сили козацтво перетвориться на соціальний стан, який в XVII
              столітті понесе ідею нашої державності.
            </p>
          </div>
        </div>

        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/cossack1.png"}
            staticClass={""}
            animateClass={"animate-move-left"}
          />
        </div>
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Гетьманщина</h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Гетьманщина за правління Богдана Хмельницького охоплювала землі
              площею понад 200 000 км²
            </span>
          </div>

          <div>
            <p>
              Після Переяславської ради 1654 року Україна потрапила під владу
              Російської держави. Утворилася угода між козаками та Московією,
              яка визнавала автономію козацької держави під патронатом царя. Так
              почалася епоха гетьманщини.
            </p>

            <p>
              Очільником виступав виборний гетьман. Протягом другої половини
              XVII — початку XVIII століття, під час громадянської війни — часу
              розколу та правління окремими територіями різних гетьманів,
              останні, у боротьбі за єдиновладдя, визнавали верховенство
              Московського царства, Речі Посполитої (Республіки Обох Націй) та
              Османської імперії.
            </p>

            <p>
              У 1667 році за Андрусівським миром розділена по Дніпру на
              Правобережну  і Лівобережну Україну.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <div>
            <p>
              Після остаточного скасування в Речі Посполитій козацького
              устрою на Правобережжі в 1699 році далі існувала лише на теренах
              Лівобережжя.
            </p>

            <p>
              У <strong>1709</strong> році, під час Великої північної війни,
              невдало намагалася перейти під протекторат Шведської імперії.
              Протягом XVIII століття поступово втратила політичну й економічну
              автономію. 1764 року наказом російської імператриці Катерини
              ІІ титул гетьмана було скасовано, а ще через рік Гетьманщину
              реформовано в Малоросійську губернію.
            </p>
          </div>

          <p>
            Протягом різних історичних періодів російська імперська влада, а
            також режим комуністичного устрою намагались викорінити в
            української нації почуття власної ідентичності та унікальної
            історії. Заміна назви козацької держави «Військо Запорізьке» в
            історіографії на «Малоросія» чи тому подібні, породжувала комплекс
            меншовартості.
          </p>
        </div>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/images/full/full-cossack-state.png"}
        alt="Cossack State"
        className="w-full mb-8"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike data={data} />
      </div>

      <ArrowUp />
    </main>
  );
};
