import { ArrowUp } from "../../components/ArrowUp/ArrowUp";
import { BackArrow } from "../../components/BackArrow/BackArrow";
import { MoreAndLike } from "../../components/MoreAndLike/MoreAndLike";
import { findDescription } from "../../functions/findDescription";
import { Culture } from "../../types/culture";

export const ModernCulture = () => {
  const data: Culture = findDescription("culture", 6) as Culture;

  return (
    <main className="flex flex-col items-center">
      <div className="h-screen bg-black-opacity-60 mb-20 w-full">
        <img
          className="h-screen w-screen absolute -z-10 object-cover"
          src={process.env.PUBLIC_URL + "/images/banners/modernCulture.png"}
          alt="Music And Dancing"
        />
        <div className="flex items-center justify-center h-full text-8xl font-rutenia w-full">
          <h1 className="text-white">Сучасна культура</h1>
        </div>
        <BackArrow path="/culture" />
      </div>

      <div className="max-w-[1440px] flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Проголошення неззалежності
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              24 серпня 1991 року проголоження незалежності України, що сприяло
              розвитрку української культури.
            </span>
          </div>

          <p className="mt-8">
            Проголошення незалежності України призвело до{" "}
            <strong>піднесення</strong>
            національного духу та <strong>відродження</strong> української
            культурної спадщини. У цей період було зроблено великі кроки в
            утвердженні української мови як державної, прийнято важливі закони,
            зокрема <strong>Закон про мову</strong>. Основним змістом оновлення
            та відродження української культури стала самовіддана праця багатьох
            дослідників. В архівах, музеях і бібліотеках були створені
            спеціальні відділи для поширення інформації про українську культуру
            за кордоном.
          </p>

          <p>
            Великого імпульсу розвиток національної культури отримав після
            зняття обмежень на її поширення та дозволу/
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            підприємницької і комерційної діяльності в культурній сфері, зокрема
            розширення видавничої справи, поява нових часописів та інтенсивне
            зростання радіо- і телемовлення, яке стало насичуватися
            конкурентоспроможними програмами національно-культурного змісту.
            Сучасна українська культура перебуває у стані переосмислення
            основних цінностей і принципів, на яких ґрунтується її
            функціонування. Завдання, яке стоїть перед політичними та
            інтелектуальними елітами України, полягає у створенні спільного
            мовного коду, який сприйняли б і зрозуміли члени всього суспільства.
          </p>

          <p>
            Тому в основу ідеї сучасної України має бути покладено процес
            позбавлення від «постколоніального синдрому» та формування
            української культури на основі традицій та установок національної
            культури. Позиція держави з цього приводу має бути сумісною і
            слідувати спільній меті реальної незалежності від тодішнього
            колонізатора.
          </p>
        </div>
      </div>

      <img
        className="mb-24 w-full"
        src={process.env.PUBLIC_URL + "/images/full/full-modernCulture1.png"}
        alt="Art"
      />

      <div className="max-w-[1440px] flex flex-wrap gap-x-16 px-10 mb-16">
        <div className="flex grow basis-50 flex-col text-gray-100">
          <h2 className="font-rutenia text-[52px] mb-4 leading-[62px]">
            Розвиток української культури сьогодні
          </h2>

          <div className="flex items-center gap-4 text-2xl text-gray-100">
            <img
              width={33}
              className="inline-flex"
              src={process.env.PUBLIC_URL + "/images/svg/pattern.svg"}
              alt="Pattern"
            />
            <span>
              Вплив війни, яку Росія веде проти України, на культуру країни є
              значним
            </span>
          </div>

          <p className="mt-8">
            Багато українських письменників, художників та інших творчих
            особистостей звернули свою увагу на теми війни, втрат та боротьби за
            незалежність. Їхні твори відображають події та емоції, пов'язані з
            війною, та стають способом пам'яті та відзначення героїзму
            українського народу. Ось кілька з них:{" "}
            <strong>
              Сергій Жадан, Марія Матіос, Софія Сайко, Олена Приймаченк,
              Олександр Ройтбурд
            </strong>
            .
          </p>

          <p>
            Українські митці створюють різноманітні проекти та ініціативи, які
            висвітлюють війну та її наслідки. Це може бути виставкова
            діяльність, вуличне мистецтво, фільми, театральні постановки та інші
            форми виразності.
          </p>
        </div>

        <div className="grow basis-50">
          <p className="mb-8">
            Україна стає місцем виникнення пам'ятників та меморіалів загиблим
            військовим та цивільним жертвам війни. Ці меморіали відіграють
            важливу роль у вшануванні пам'яті та укріпленні національного
            єднання.
          </p>

          <p>
            Українська культура виявила себе як засіб опору російській агресії.
            Шляхом висловлення себе через мистецтво, літературу та інші
            культурні форми український народ виражає свою вольову рішучість та
            бажання захищати свою країну.
          </p>

          <p className="mb-8">
            Велика частина українських масових медіа, включаючи кіно,
            телебачення та музику, активно звертається до військово-патріотичної
            тематики, що відображає підтримку військових, воїнів-волонтерів та
            їхніх сімей.
          </p>

          <p>
            Ці аспекти демонструють, як <strong>війна</strong> Росії проти
            України вплинула на культуру країни, підсилюючи національну
            самосвідомість, викликаючи культурну резистенцію та виявляючи
            важливість культурних форм для вираження ідеалів та цінностей нації.
          </p>
        </div>
      </div>

      <img
        className="mb-10 w-full"
        src={process.env.PUBLIC_URL + "/images/full/full-modernCulture2.png"}
        alt="Art"
      />

      <div className="flex justify-end gap-4 px-10 mb-32">
        <MoreAndLike data={data} />
      </div>

      <ArrowUp />
    </main>
  );
};
