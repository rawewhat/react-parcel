const ENV = process.env.NODE_ENV;
const dev = "development";

export const log = msg => {
  return ENV === dev && console.log(msg);
};
