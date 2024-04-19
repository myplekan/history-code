import cultureData from "../culture.json";
import historyData from "../history.json";

export const findDescription = (name: string, id: number) => {
  if (name === "culture") {
    return cultureData.culture.find((item) => item.id === id);
  }

  return historyData.history.find((item) => item.id === id);
};
