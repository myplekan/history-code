import { Link } from "react-router-dom";
import { AnimatePrint } from "../../components/AnimatePrint/AnimatePrint";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";

export const OldRus = () => {
  return (
    <main>
      <div className="h-screen bg-black-opacity-60 mb-20">
        <img
          className="h-screen w-screen absolute -z-10"
          src={process.env.PUBLIC_URL + "/images/banners/oldrus.png"}
          alt="Old Rus"
        />
        <div className="flex flex-col gap-4 items-center justify-center h-full w-full">
          <h1 className="font-rutenia text-white text-8xl mb-4">
            Давньоруський період
          </h1>
          <span className="text-4xl text-white">(IX-XIII століття)</span>
        </div>

        <BackArrow path="/history" />
      </div>

      <div className="flex gap-x-16 px-10 mb-16">
        <div className="w-6/12">
          <h2 className="font-rutenia text-[52px] mb-6">Русь</h2>

          <div className="flex items-center gap-4 text-2xl mb-8">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Ще однією важливою подією було хрещення Русі у 988 році.
            </span>
          </div>

          <p className="mb-8">
            Одним із ключових подій у формуванні Русі було об'єднання різних
            слов'янських племен на території сучасної України під владою князя
            Олега. Він прийшов до влади в Києві в кінці IX століття та утвердив
            свою владу, здійснивши ряд мілітаристичних та дипломатичних кроків.
          </p>

          <p>
            <strong>Давньоруський період</strong> - це історичний період, що
            охоплює час від заснування давньоруських держав до кінця XII
            століття. Цей період включає в себе становлення та розвиток Русі,
            яка була однією з найвпливовіших держав Східної Європи у
            середньовіччі.
          </p>

          <p>
            Заснування <strong>Русі</strong> - це складний та динамічний процес,
            який включав в себе міжетнічні, політичні та культурні взаємодії.
          </p>
        </div>

        <div className="w-6/12">
          <p>
            Точна дата заснування держави не може бути однозначно визначена, але
            період, який відносять до заснування Русі, припадає на середину IX
            століття. Олег встановив Київ як політичний та культурний центр
            держави, що послужило початком формування Русі як держави.
          </p>

          <p className="mb-8">
            Ще однією важливою подією було хрещення Русі у 988 році князем
            Володимиром Великим. Це було ключовим кроком у формуванні
            ідентичності держави та впливу на її культурний, політичний та
            релігійний розвиток. Хрещення також відкрило нові можливості для
            держави у сфері міжнародних відносин та торгівлі.
          </p>

          <p>
            Протягом Давньоруського періоду, князі та їхні васали здійснювали
            ряд політичних та територіальних розширень, в результаті чого
            Київська Русь стала однією з найвпливовіших держав у Східній Європі.
            Культурний та економічний розвиток також відзначився під час цього
            періоду, що визначило подальший шлях розвитку української держави.
          </p>
        </div>
      </div>

      <AnimatePrint />

      <div className="px-10 flex gap-x-16 mb-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4 text-2xl">
            <img
              width={33}
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Особливий інтерес становить "софійська абетка", виявлена С.
              Висоцьким на стіні Михайлівського вівтаря.
            </span>
          </div>

          <p>
            На етапі завершення формування державності Київської Русі її
            культура збагатилась на нові елементи. Найважливішим з них стала
            писемність, яка поширилась у східнослов'янському світі значно раніше
            від офіційного введення християнства. Певне уявлення про слов'янське
            письмо язичницького часу дають відкриття ряду глеків і мисок
            черняхівської культури <strong>(II-V ст.)</strong>.
          </p>

          <p>
            Нині відомо близько десятка посудин з досить цікавими графічними
            орнаментами. Аналіз їх, здійснений Б.Рибаковим, показав, що перед
            нами добре розроблена календарна система, за допомогою якої слов'яни
            рахували й ворожили. Ці ритуальні посудини з календарними знаками
            доносять до нас схему річного циклу язичницько-магічної обрядовості
            і засвідчують досить високий рівень культури наших пращурів. Уже в
            IV ст. вони знали річний календар, який складався з{" "}
            <strong>чотирьох сонячних фаз і 12 місяців</strong>.
          </p>

          <p>
            Раннє ознайомлення на Русі з писемністю засвідчує літописне
            повідомлення про знахідку в Корсуні (Херсонесі) слов'янським
            просвітителем Кирилом Євангелія і Псалтиря.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          <p>
            Підтвердженням цього є договори Русі з греками. З договору Ігоря з
            греками 944 р. відомо, що повноваження руських і купців
            підтверджували письмові грамоти, а не золоті й срібні печатки, як
            було раніше. Імператор Візантії Костянтин VII Багрянородний
            <strong> (905-959)</strong> у своєму творі "Про церемонії
            візантійського двору" повідомляє, що княгиню Ольгу під час її
            перебування на чолі посольства Русі в Константинополі супроводжували
            12 перекладачів.
          </p>

          <p>
            Абетка написана на фресковій штукатурці, містить 27 букв, з яких 23
            відповідають грецькому алфавіту, а чотири - Б, Ж, Ш, ІД -
            слов'янському мовленню. На думку С. Висоцького, "софійська" абетка
            відбиває один з перехідних етапів східнослов'янської писемності,
            коли до грецького алфавіту почали додавати букви, щоб передати
            фонетичні особливості слов'янської мови1. Не виключено, що перед
            дослідником відкрився алфавіт, яким користувалися на Русі ще за
            часів Аскольда та Діра.
          </p>

          <p>
            Культурна спадщина <strong>ІХ-ХШ ст.</strong>стала тією плідною
            основою, на якій склалася національна культурна традиція в добу
            пізнього Середньовіччя.
          </p>
        </div>
      </div>

      <img
        src={process.env.PUBLIC_URL + "/images/full/full-oldRus.png"}
        alt="oldRus"
        className="w-full mb-8"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike />
      </div>

      <ArrowUp />
    </main>
  );
};
