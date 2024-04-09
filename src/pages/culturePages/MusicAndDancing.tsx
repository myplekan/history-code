import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const MusicAndDancing = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/musicAndDancing.png"}
          alt="Music And Dancing"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white">Музика та танці</h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Фолькльорна музика
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Народні пісні, мелодії та інструментальна музика відображають
              культурне багатство та регіональні особливості України.
            </span>
          </div>

          <p className="mt-8">
            Фольк завжди був важливою частиною української ідентичності.
          </p>

          <p>
            Українські пісні передавали через покоління, їх співали дідусі й
            бабусі дітям і онукам.
          </p>

          <p>
            Українські <strong>колядки</strong> з християнсько-моральним
            змістом: "Бог предвічний народився", "Ходить звізда краєм світу", "А
            в пастеречку, на подвір’ячку" інколи нагадують духовні мантри, довгі
            й повільні.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            Ще однією важливою рисою для українського фольку були{" "}
            <strong>народні інструменти</strong>, зокрема трембіти, окарини та
            сопілки. Секрети їхнього виробництва майстри передавали з покоління
            у покоління.
          </p>

          <p>
            Фольклор не просто культурна пам’ятка минулого українців, він несе в
            собі цінності, що далеко виходять за рамки часу, відображеного в
            піснях чи казках. Фольклор є джерелом наших національних традицій,
            виразником народної свідомості та ідентичності.
          </p>
        </div>
      </div>

      <img
        className="mb-24"
        src={process.env.PUBLIC_URL + "/images/full/full-musicAndDancing1.png"}
        alt="Art"
      />

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Класична музика
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Відомі композитори, такі як Микола Лисенко, Сергій Прокоф'єв,
              Дмитро Бортнянський та інші.
            </span>
          </div>

          <p className="mt-8">
            Академічна музика в сучасному трактуванні бере початок у ХІХ ст.
            1862 року <strong>Семен Гулак-Артемовський</strong> завершує одну із
            найпопулярніших українських опер – «Запорожець за Дунаєм». У Києві
            та інших містах відкриваються консерваторії.{" "}
            <strong>Микола Лисенко</strong> започатковує національну академічну
            школу. Паралельно українська музика розвивається на західних теренах
            у межах Австро-Угорської імперії.
          </p>
          <p>
            Міжвоєнний період (ще досить вільні 1920-ті рр.) був часом
            блискучого розвитку музичної культури в підрадянській Україні.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            Випускники Київської консерваторії Борис Лятошинський і Левко
            Ревуцький створюють новий потужний канон в українській класичній
            музиці.
          </p>

          <p>
            Основними героями музичного життя Галичини на початку ХХ ст. були
            композитори <strong>Станіслав Людкевич</strong> і{" "}
            <strong>Василь Барвінський</strong>. На основі створеної ними школи
            вже у міжвоєнний період з’явилась нова ґенерація молодих митців -{" "}
            <strong>
              Стефанія Туркевич, Микола Колесса, Анатолій Кос-Анатольський
            </strong>
            . У царині церковної музики важливим був т. зв. Перемиський музичний
            осередок. Із нього вийшов, до прикладу,{" "}
            <strong>Михайло Вербицький</strong>, автор симфонічних увертюр і
            музики до гімну України.  Також важливий внесок української музики
            зробив
            <strong>М.Скорик</strong>, на запрошення Сергія Параджанова, написав
            музику до культового фільму «Тіні забутих предків».  
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Народні та етнічні танці
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Україна має різноманітні народні та етнічні групи, кожна з яких
              має власні традиційні танці та обряди.
            </span>
          </div>

          <p className="mt-8">
            <strong>Гопак</strong> є улюбленим танцем українських чоловіків.
            Спочатку гопак був своєрідною розминкою, під час якої козаки
            відточували свою бойову майстерність. Згодом цей танець поширився
            далеко з межі Запорізької Січі і набув популярності серед різних
            верств населення.
          </p>
          <p>
            Рухи не є простими, вимагають хорошої фізичної підготовки, але все ж
            виконуються з усмішкою та натхненням.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            Дівчата танцюють заграючи та поступово змінюють веселий настрій. Для
            постановки танцю потрібно5 хлопців та 2 дівчини. Цікавою особливістю
            є те, що інколи хлопці танцюють з козацькими шаблями. Другим з
            популярністю в Україні є козачок - танець названий на честь козаків.
            Виконується попарно без зайвих трюків. Він характеризуються
            легкістю, ніжністю та ліричністю. Часто використовується
            імпровізація та гумористичні моменти.
          </p>

          <p>
            <strong>Коломийка</strong> – різновид карпатського танцю. Назва
            походить від коротких народних пісень. Танець виконується попарно
            або з парною кількістю учасників, які танцюють у колі. Найпростішим
            танцем є <strong>хоровод</strong>. Це обрядово-ігровий танок
            синкретичного типу. Цей вид танцю був популярним у період різдвяних
            та весняних свят. Метою танцю було при ворожіння щастя в любові та в
            подружньому житті.
          </p>
        </div>
      </div>

      <img
        className="mb-10"
        src={process.env.PUBLIC_URL + "/images/full/full-musicAndDancing2.png"}
        alt="Art"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike />
      </div>

      <ArrowUp />
    </main>
  );
};
