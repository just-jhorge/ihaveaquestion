import ky from "ky";

export const kyInstance = ky.create({
  parseJson: (text) =>
    JSON.parse(text, (key, value) => {
      if (key.endsWith("At") || key.endsWith("Date")) {
        return new Date(value);
      }

      return value;
    }),
});
