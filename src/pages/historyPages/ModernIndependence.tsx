import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const ModernIndependence = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={
            process.env.PUBLIC_URL + "/images/banners/modern-independence.png"
          }
          alt="Cossack State"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl text-center mb-4">
            Сучасна незалежна Україна
          </h1>
          <span className="text-4xl text-white">(1991 р. - до сьогодні)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Живий ланцюг єдності
          </h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Акція відбулася у неділю, 21 січня 1990 року, довжина «Живого
              ланцюга» перевищувала 770 кілометрів
            </span>
          </div>

          <div className="mb-8">
            <p>
              <strong>З4 роки</strong> тому українці вийшли на вулиці, взялися
              за руки, і зв'язали «живим ланцюгом» («Українська хвиля») Київ з
              Львовом і далі – з Івано-Франківським із нагоди 71-річчя
              проголошення Акту Злуки УНР і ЗУНР{" "}
              <strong>22 січня 1919 року</strong>. Ця акція, яка відбулася у
              неділю, <strong>21 січня 1990 року</strong>, в переддень свята
              Злуки, – одна із наймасштабніших такого роду у світовій історії.
            </p>
          </div>

          <div>
            <p>
              <strong>«Живий ланцюг»</strong> став одним із важливих кроків до
              відновлення Української держави. Люди взялися за руки, щоб
              продемонструвати <strong>Соборність України</strong> на шляху до
              незалежності.
            </p>
          </div>
        </div>

        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/modern-independence1.png"}
            staticClass={""}
            animateClass={"animate-move-left"}
          />
        </div>
      </div>

      <AnimatePrint />

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/modern-independence2.png"}
            staticClass={""}
            animateClass={"animate-move-right"}
          />
        </div>

        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Проголошення незалежності України
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
              <strong>24 серпня 1991 року</strong> Верховна Рада тогочасної УРСР
              переважною більшістю голосів ухвалила Акт про проголошення
              незалежності України.
            </p>

            <p>
              Виходячи із смертельної небезпеки, яка нависла була над Україною у
              зв'язку з державним переворотом в СРСРС 19 серпня 1991 року ,
              виходячи з права на самовизначення, передбаченого{" "}
              <strong>Статутом OOH</strong> та іншими міжнародно-правовими
              документами, здійснюючи Декларацію про Державний суверенітет
              України, Верховна Рада Української Радянської Соціалістичної
              Республіки урочисто проголошує{" "}
              <strong>незалежність України</strong> та створення самостійної
              Української держави – України.
            </p>
          </div>
        </div>
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Біловезька угода</h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Акція відбулася у неділю, 21 січня 1990 року, довжина «Живого
              ланцюга» перевищувала 770 кілометрів
            </span>
          </div>

          <div className="mb-8">
            <p>
              <strong>8 грудня 1991 року</strong> (через тиждень після
              Всеукраїнського референдуму)очільники України, Білорусі і Росії –
              Леонід Кравчук, Станіслав Шушкевич і Борис Єльцин у Біловезькій
              Пущі поблизу Берестя (Білорусь) підписали документ (Біловезьку
              угоду), що констатував припинення існування СРСР.
            </p>

            <p>
              Створена насильницьким шляхом більшовиками на чолі з Леніним і
              Сталіним тоталітарна держава юридично перестала існувати. За час
              її існування каральними органами ЧК- ОГПУ- МГБ-НКВД-КГБ були
              фізично знищені мільйони людей.
            </p>
          </div>
        </div>

        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/modern-independence3.png"}
            staticClass={""}
            animateClass={"animate-move-left"}
          />
        </div>
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="w-6/12 flex flex-col justify-center">
          <AnimateImg
            name={"history/modern-independence4.png"}
            staticClass={""}
            animateClass={"animate-move-right"}
          />
        </div>

        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Ухвалення конституції України
          </h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Ухвалення Конституції закріпило правові основи незалежної України,
              її суверенітет і територіальну цілісність
            </span>
          </div>

          <div>
            <p>
              <strong>28 червня 1996 року</strong> о 9-й годині 20 хвилин після
              доби безперервної роботи Верховна Рада ухвалила Конституцію
              України («за» проголосували <strong>315</strong> народних
              депутатів). Ухвалення Конституції, яка проголошувала Україну
              суверенною, демократичною і правовою державою і закріплювала
              головні права та свободи людей, закріпило юридичний фундамент
              молодої держави.У період <strong>2–16 вересня 1996 року</strong>,
              відповідно до статей 99 і 102 Конституції України і указу
              тогочасного президента України Леоніда Кучми, в Україні була
              проведена грошова реформа. Національною грошовою одиницею та
              валютою України стала <strong>гривня</strong>.
            </p>

            <p>
              Запровадження гривні відбувалося під керівництвом тогочасного
              голови Національного банку України <strong>Віктора Ющенка</strong>
              .
            </p>
          </div>
        </div>
      </div>

      <AnimatePrint />

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">Революція гідності</h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              політичні та суспільні зміни в Україні з 21 листопада 2013 до
              лютого 2014 року
            </span>
          </div>

          <div className="mb-8">
            <p>
              Тодішній президент <strong>Віктор Янукович</strong> та його уряд
              декларували, що ведуть Україну до підписання Угоди про асоціацію з
              ЄС. Але під тиском Кремля, 21 листопада 2013 року, тодішній
              прем'єр-міністр Микола Азаров заявив, що уряд призупиняє
              підготовку до підписання угоди з ЄС на невизначений термін. Це
              викликало різку негативну реакцію суспільства.
            </p>
          </div>

          <div>
            <p>
              Вже цього дня на майдані Незалежності у Києві почали збиратися
              люди із прапорами Євросоюзу і державними прапорами, демонструючи
              свою підтримку євроінтеграції України.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <p>
            Майдани за євроінтеграцію (Євромайдани) збираються у низці
            українських міст – від Донецька до Львова. Попри це,{" "}
            <strong>29 листопада 2013 року</strong> Віктор Янукович не підписав
            у Вільнюсі на саміті «Східного партнерства» Угоду про асоціацію та
            зону вільної торгівлі з Європейським союзом. Це викликало обурення
            учасників акцій. На майдані Незалежності в Києві студенти не
            розходяться до пізньої ночі, а невелика кількість людей залишається
            під стелою до ранку.
          </p>

          <p>
            На світанку <strong>30 листопада 2013 року</strong> «Беркут» раптово
            жорстоко атакує протестувальників. Оточивши людей, їх просто
            жорстоко б'ють. Спочатку акції протесту носили мирний характер. Але
            поступово силовики почали застосовувати травматичну зброю проти
            мітингувальників: стріляли по ногах, а потім кілька учасників
            Майдану отримали травми очей. У січні з'явилися перші убиті. Убитих
            учасників Революції гідності (понад сто людей, найбільше 20 лютого)
            почали називати
          </p>
        </div>
      </div>

      <img
        src={
          process.env.PUBLIC_URL + "/images/full/full-modern-independence1.png"
        }
        alt="Modern Independence"
        className="w-full mb-16"
      />

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="flex w-6/12 flex-col">
          <h2 className="font-rutenia text-[52px] mb-4">
            Війна Росії проти України
          </h2>

          <div className="flex items-center gap-4 text-2xl mb-8 text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              дата початку збройної агресії Росії проти України 20 лютого 2014
              року
            </span>
          </div>

          <div className="mb-8">
            <p>
              <strong>Лютень-березень 2014:</strong> Після Майдану та відступу
              президента Януковича, на Кримському півострові розгорнулися
              військові дії. Збройні сили Росії окупували стратегічно важливі
              об'єкти та здійснили "референдум" про приєднання до Росії, який
              був визнаний багатьма країнами як незаконний.
            </p>
          </div>

          <div>
            <p>
              <strong>У Квітні 2014</strong> почалась війна Росії проти України
              у східних областях України, Луганській і Донецькій. У результаті
              утворилися так звані "ДНР" та "ЛНР". 24 лютого 2022 року Росія
              розпочавши широкомасштабну війну проти України. І ця війна є зараз
              найбільшим випробуванням здатності українців захищати свою
              незалежність. За планом путінського режиму, російська армія мала
              захопити Київ за 2-3 дні, скинути законну владу і поставити
              обраного Кремлем маріонеткового керівника.
            </p>
          </div>
        </div>

        <div className="flex w-6/12 flex-col gap-8">
          <p>
            Головне ж, що творить і зміцнює{" "}
            <strong>незалежність України:</strong> це прагнення і дії небайдужих
            людей. Людей, які захищають Україну на фронті, людей, які
            підтримують армію і розбудовують країну в тилу.
          </p>

          <p>
            Російські війська руйнують не лише аеродроми, військові частини,
            нафтобази, але й житлові будинки, пологові, лікарні, дитячі садки,
            школи тощо. Житлові райони обстрілюють з артилерії, реактивних
            систем залпового вогню, балістичними ракетами, зафіксовані факти
            застосування заборонених міжнародними конвенціями касетних та
            фосфорних бомб. <strong>Найганебніший</strong> воєнний злочин –
            обстріл будинків, позначених червоним хрестом.
          </p>

          <p>
            9 років в Україні триває російсько-українська війна. Проблема
            збереження матеріальної культурної спадщини загострилася після
            повномасштабного вторгнення. За рік агресії ракетно-бомбовими
            ударами російських військ були знищені, частково зруйновані або
            пошкоджені майже 600 об’єктів матеріальної культурної спадщини
            України.
          </p>
        </div>
      </div>

      <img
        src={
          process.env.PUBLIC_URL + "/images/full/full-modern-independence2.png"
        }
        alt="Modern Independence"
        className="w-full mb-8"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike />
      </div>

      <ArrowUp />
    </main>
  );
};
