import { useCallback, useEffect, useState } from "react";
import { ArrowUp } from "../components/ArrowUp/ArrowUp";
import { HistoryCultureCard } from "../components/HistoryCultureCard/HistoryCultureCard";
import cultureData from "../culture.json";
import { Culture } from "../types/culture";
import { useLocation, useSearchParams } from "react-router-dom";
import debounce from "lodash.debounce";
import { getSearchWith } from "../utils/searchHelper";

export const CulturePage = () => {
  const culture = cultureData.culture;
  const [cultureItems, setСultureItems] = useState<Culture[]>([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("query") || "");
  const [isFocused, setIsFocused] = useState(false);

  const { pathname } = useLocation();

  const applyQuery = useCallback(
    debounce((params) => setSearchParams(params), 1000),
    [pathname]
  );

  const handleQuery = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;

    if (!newQuery) {
      setQuery("");
    } else {
      setQuery(newQuery);
    }

    const finalQuery = newQuery || null;
    applyQuery(getSearchWith(searchParams, { query: finalQuery }));
  };

  const sortCulture = (item: Culture[]) => {
    const newSortCulture = [...item];

    if (query) {
      return newSortCulture.filter((story) =>
        story.title.toLowerCase().includes(query.toLowerCase())
      );
    }

    return newSortCulture;
  };

  useEffect(() => {
    setСultureItems(sortCulture(culture));
  }, [searchParams]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setIsFocused(false);
    }, 100);
  };

  const handleRemoveQuery = () => {
    setQuery("");
    applyQuery(getSearchWith(searchParams, { query: null }));
  };

  return (
    <main className="max-w-[1440px] mx-auto min-h-min pt-[102px] px-10">
      <div className="flex justify-between border-b-2 border-gray-40 mb-16">
        <h1 className="text-[40px] font-medium text-gray-100">Культура</h1>

        <div className="relative pr-2 flex items-center gap-4 basis-input">
          <input
            className="h-12 w-full p-4 border-2 border-gray-50 rounded-lg outline-0 hover:border-primary duration-300 focus:border-primary text-xl text-gray-100"
            type="text"
            placeholder="Тема..."
            value={query}
            onChange={handleQuery}
            onBlur={handleBlur}
            onFocus={handleFocus}
          />

          {query || (isFocused && query) ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 16 16"
              fill="none"
              className="absolute right-5 fill-gray-100 hover:fill-primary duration-300 cursor-pointer z-10"
              onClick={handleRemoveQuery}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.4716 4.47138C12.7319 4.21103 12.7319 3.78892 12.4716 3.52858C12.2112 3.26823 11.7891 3.26823 11.5288 3.52858L8.00016 7.05717L4.47157 3.52858C4.21122 3.26823 3.78911 3.26823 3.52876 3.52858C3.26841 3.78892 3.26841 4.21103 3.52876 4.47138L7.05735 7.99998L3.52876 11.5286C3.26841 11.7889 3.26841 12.211 3.52876 12.4714C3.78911 12.7317 4.21122 12.7317 4.47157 12.4714L8.00016 8.94279L11.5288 12.4714C11.7891 12.7317 12.2112 12.7317 12.4716 12.4714C12.7319 12.211 12.7319 11.7889 12.4716 11.5286L8.94297 7.99998L12.4716 4.47138Z"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-5 stroke-gray-100 hover:stroke-primary duration-300 cursor-pointer"
            >
              <path
                d="M26.75 26.75L20.5974 20.5975M20.5974 20.5975C21.6498 19.545 22.4847 18.2956 23.0542 16.9206C23.6238 15.5455 23.9169 14.0717 23.9169 12.5834C23.9169 11.095 23.6238 9.62125 23.0542 8.24619C22.4847 6.87113 21.6498 5.62172 20.5974 4.5693C19.545 3.51687 18.2956 2.68204 16.9205 2.11248C15.5455 1.54291 14.0717 1.24976 12.5833 1.24976C11.095 1.24976 9.62119 1.54291 8.24613 2.11248C6.87107 2.68204 5.62166 3.51687 4.56924 4.5693C2.44377 6.69476 1.24969 9.57752 1.24969 12.5834C1.24969 15.5892 2.44377 18.472 4.56924 20.5975C6.6947 22.7229 9.57746 23.917 12.5833 23.917C15.5892 23.917 18.4719 22.7229 20.5974 20.5975Z"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      <div className="flex flex-wrap gap-16 justify-between pb-44">
        {cultureItems.length ? (
          cultureItems.map((item) => (
            <HistoryCultureCard key={item.id} data={item} />
          ))
        ) : (
          <h2 className="mx-auto text-2xl font-semibold leading-5 text-center">
            Нічого не знайдено. Спробуйте ввести іншу тему
          </h2>
        )}
      </div>

      <ArrowUp />
    </main>
  );
};
