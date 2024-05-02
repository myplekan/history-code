import { AnimateImg } from "../../components/AnimateImg/AnimateImg";
import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";
import { findDescription } from "../../functions/findDescription";
import { Culture } from "../../types/culture";

export const Architecture = () => {
  const data: Culture = findDescription("culture", 5) as Culture;

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen bg-black-opacity-60 mb-20 w-full">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/architecture.png"}
          alt="Architecture"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white text-center">
            <p>Архітектура та</p> <p>історичні пам’ятки</p>
          </h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="max-w-[1440px] grid items-center grid-cols-8 gap-x-5 gap-y-[104px] px-10 mb-10">
        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">Софіївський собор</h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Побудований собор у 11 столітті, він вважається перлиною
                Київської Русі та є символом національної гордості.
              </span>
            </div>
          </div>

          <p>
            Собор святої Софії — Премудрості Божої, Софія Київська або
            Софійський собор — християнський собор в центрі{" "}
            <strong>Києва</strong>, пам’ятка української архітектури та
            монументального живопису другого десятиріччя{" "}
            <strong>11 ст. (1011-1018)</strong>, одна з небагатьох уцілілих
            споруд часів Київської Русі. Одна з <strong>найголовніших</strong>{" "}
            християнських святинь Східної Європи, історичний центр Київської
            митрополії.
          </p>
        </div>

        <AnimateImg
          name={"/culture/architecture1.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />

        <AnimateImg
          name={"/culture/architecture2.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="max-w-[650px] col-start-5 col-end-9">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Львівський оперний театр
            </h2>

            <div className="flex items-center gap-4 text-2xl mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Львівський Оперний театр – архітектурна перлина Львова у стилі
                неоренесансу (1901 рік), один з найгарніших театрів Європи
              </span>
            </div>
          </div>

          <p>
            Заснований в <strong>1900 р.</strong> У 1939 році став називатися
            Львівським державним оперним театром, а до цього носив назву{" "}
            <strong>Великий міський театр</strong>. У 1956 році був названий на
            честь Івана Франка. Сьогодні це Львівський національний академічний
            театр опери та балету ім. С. А. Крушельницької. Сама будівля була
            побудована на
            <strong>річці Полтва</strong>. Це був вимушений захід, оскільки в
            центрі міста практично не залишилося місць для зведення театру.
            Творцем став польський архітектор{" "}
            <strong>Зигмунт Горголевський</strong>.
          </p>
        </div>

        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Кам'янець-Подільська фортеця
            </h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Кам'янець-Подільська фортеця внесена до Списку пам'ятників
                світової спадщини ЮНЕСКО і входить до 7 чудес України.
              </span>
            </div>
          </div>

          <p>
            Фортеця, розташована в місті Кам'янець-Подільському, відома своєю
            мальовничою архітектурою та вражаючими пейзажами. Вона датується
            <strong>XI-XVII століттями</strong> та є однією з найкрасивіших
            фортець в Україні.
          </p>
          <p>
            Історія Кам'янець-Подільської фортеці багата і цікава. Згідно з
            деякими історичними даними, фортеця існувала вже у{" "}
            <strong>10–13 століттях</strong> і на початку була дерев'яною
            фортифікаційною спорудою. У <strong>15 столітті</strong> місто
            ввійшло до складу Речі Посполитої і стало важливим оборонним
            пунктом, що призвело до заміни дерев'яної фортеці кам'яною.
          </p>
        </div>

        <AnimateImg
          name={"/culture/architecture3.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />

        <AnimateImg
          name={"/culture/architecture4.png"}
          staticClass={"col-start-1 col-end-5"}
          animateClass={"animate-move-right"}
        />

        <div className="max-w-[650px] col-start-5 col-end-9">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Спасо-Преображенський собор
            </h2>

            <div className="flex items-center gap-4 text-2xl mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Один з найдавніших храмів Русі. Розташований в історичному
                середовищі Чернігова
              </span>
            </div>
          </div>

          <p>
            Будівництво собору було розпочато приблизно у 1033—1034 роках за
            розпорядженням першого відомого за літописами чернігівського князя
            Мстислава Володимировича. Вперше літописи згадують про «церкву
            святого Спаса» у 1036 році, коли князь Мстислав раптово помирає. На
            цей час стіни собору височіли на рівні вершника, який стоїть в
            стременах, піднявши руку (близько 4-х метрів). Вірогідно,  після
            смерті Мстислава будівництво припинилося, і храм був добудований при
            наступному чернігівському князеві — Святославі Ярославичі.
          </p>
        </div>

        <div className="max-w-[650px] col-start-1 col-end-5">
          <div className="text-gray-100">
            <h2 className="font-rutenia text-[52px] mb-4">
              Церква Пресвятої Євхаристії
            </h2>

            <div className="flex items-center gap-4 text-2xl text-gray-100 mb-8">
              <img
                width={33}
                className="inline-flex"
                src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
                alt="Pattern"
              />
              <span className="text-2xl">
                Церква Пресвятої євхаристії —греко-каталоцька церква в
                центральній частині Львова, у зоні всесвітньої спадщини ЮНЕСКО.
              </span>
            </div>
          </div>

          <p>
            <strong>Монастир домінікані</strong>в на цьому місці заснували ще у{" "}
            <strong>XIII</strong> столітті на прохання дружини українського
            князя Лева Даниловича, угорської принцеси Констанції, яка була
            католичкою і на чужині тужила за своєю вірою. Від XV і до середини
            XVIII століття тут стояв костел, збудований у готичному стилі.
          </p>

          <p>
            У цьому костелі і на площі перед ним <strong>1559 року</strong>{" "}
            розігралася справжня війна за наречену з використанням артилерії і
            всіх тонкощів військової стратегії.
          </p>

          <p>
            Через аварійний стан готичний домініканський костел{" "}
            <strong>розібрали 1748</strong>
            року. Новий храм, який нагадує костел святого Карла у Відні, у
            <strong>1748-1764 роках</strong> спорудили за проектом військового
            інженера, генерала артилерії <strong>Яна де Вітта</strong> у
            пізньобароковому стилі. У ті часи існувала добра традиція зберігати
            від попередньої знищеної споруди усе цінне, що тільки можна було
            зберегти. До наших часів у південній частині храму можна оглянути
            алебастровий надгробок <strong>XVI століття</strong> – пам’ять про
            старовинний готичний костел, який зник ще 260 років тому.
          </p>
        </div>

        <AnimateImg
          name={"/culture/architecture5.png"}
          staticClass={"col-start-5 col-end-9 justify-self-end"}
          animateClass={"animate-move-left"}
        />
      </div>

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike data={data} />
      </div>

      <ArrowUp />
    </main>
  );
};
