const newA = (callback, ...args) => {
  callback(args);
};
newA(
  (prefix) => {
    const [text, number] = prefix;
    console.log(`${text} - render-props1 ${number}`);
    console.log(`${text} - render-props2 ${number}`);
    console.log(`${text} - render-props3 ${number}`);
  },
  "tech2",
  18
);
// tác dụng kế thừa logic tránh lặp code
