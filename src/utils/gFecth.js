import { MockData } from "./MockData";

export const gFecth = () => {
  return new Promise((res, rej) => {
    setTimeout(() => res(MockData), 3000);
  });
};
