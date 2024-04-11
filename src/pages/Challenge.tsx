import classNames from "classnames";
import { useState } from "react";

interface WordMatrix {
  [key: number]: string[];
}

export const Challenge = () => {
  const word = "напис".toUpperCase().split("");
  const wordMatrix: WordMatrix = {};

  for (let i = 0; i < word.length + 1; i++) {
    wordMatrix[i] = Array(word.length).fill("");
  }

  const [turn, setTurn] = useState(0);
  const [wordState, setWordState] = useState(wordMatrix);

  const handleChange = (index: number, value: string) => {
    const newWordState = { ...wordState };
    newWordState[turn][index] = value;
    setWordState(newWordState);
  };

  console.log(
    word,
    wordState,
    wordState[0][0].toUpperCase() === word[0],
    wordState[0][0]
  );

  return (
    <main className="pt-24 pb-[66px]">
      <div className="flex flex-col gap-2 px-10">
        <div className="flex gap-10 items-center">
          <div className="w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-emerald-500">
            T
          </div>

          <span>
            --- Цим кольором показує, якщо буква стоїть на правильному місці в
            слові
          </span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-neutral-400">
            T
          </div>

          <span>
            --- Цим кольором показує, якщо букви не має взагалі в слові
          </span>
        </div>
        <div className="flex gap-10 items-center">
          <div className="w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-neutral-100">
            T
          </div>

          <span>
            --- Цим кольором показує, якщо буква є у слові але не на цьому місці
          </span>
        </div>
        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[0][i].toUpperCase() === word[i] && turn > 0,
                  "bg-neutral-400":
                    wordState[0][i].toUpperCase() !== word[i] && turn > 0,
                  "bg-neutral-100":
                    word.includes(wordState[0][i].toUpperCase()) &&
                    wordState[0][i].toUpperCase() !== word[i] &&
                    turn > 0,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[0][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 0}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(1)}
            disabled={turn > 0}
          >
            Перевірити
          </button>
        </div>
        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[1][i].toUpperCase() === word[i] && turn > 1,
                  "bg-neutral-400":
                    wordState[1][i].toUpperCase() !== word[i] && turn > 1,
                  "bg-neutral-100":
                    word.includes(wordState[1][i].toUpperCase()) &&
                    wordState[1][i].toUpperCase() !== word[i] &&
                    turn > 1,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[1][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 1}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(2)}
            disabled={turn > 1}
          >
            Перевірити
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[2][i].toUpperCase() === word[i] && turn > 2,
                  "bg-neutral-400":
                    wordState[2][i].toUpperCase() !== word[i] && turn > 2,
                  "bg-neutral-100":
                    word.includes(wordState[2][i].toUpperCase()) &&
                    wordState[2][i].toUpperCase() !== word[i] &&
                    turn > 2,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[2][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 2}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(3)}
            disabled={turn > 2}
          >
            Перевірити
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[3][i].toUpperCase() === word[i] && turn > 3,
                  "bg-neutral-400":
                    wordState[3][i].toUpperCase() !== word[i] && turn > 3,
                  "bg-neutral-100":
                    word.includes(wordState[3][i].toUpperCase()) &&
                    wordState[3][i].toUpperCase() !== word[i] &&
                    turn > 3,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[3][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 3}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(4)}
            disabled={turn > 3}
          >
            Перевірити
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[4][i].toUpperCase() === word[i] && turn > 4,
                  "bg-neutral-400":
                    wordState[4][i].toUpperCase() !== word[i] && turn > 4,
                  "bg-neutral-100":
                    word.includes(wordState[4][i].toUpperCase()) &&
                    wordState[4][i].toUpperCase() !== word[i] &&
                    turn > 4,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[4][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 4}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(5)}
            disabled={turn > 4}
          >
            Перевірити
          </button>
        </div>

        <div className="flex justify-center gap-2">
          {word.map((item, i) => (
            <input
              key={item}
              className={classNames(
                "w-10 px-1 py-2 border-2 border-sky-600 rounded-lg outline-0 text-center uppercase font-bold bg-primary",
                {
                  "bg-emerald-500":
                    wordState[5][i].toUpperCase() === word[i] && turn > 5,
                  "bg-neutral-400":
                    wordState[5][i].toUpperCase() !== word[i] && turn > 5,
                  "bg-neutral-100":
                    word.includes(wordState[5][i].toUpperCase()) &&
                    wordState[5][i].toUpperCase() !== word[i] &&
                    turn > 5,
                }
              )}
              type="text"
              maxLength={1}
              value={wordState[5][i]}
              onChange={(event) => handleChange(i, event.target.value)}
              readOnly={turn > 5}
            />
          ))}
          <button
            className="px-1 py-2 border-2 border-sky-600 rounded-lg"
            type="button"
            onClick={() => setTurn(6)}
            disabled={turn > 5}
          >
            Перевірити
          </button>
        </div>
      </div>
    </main>
  );
};
