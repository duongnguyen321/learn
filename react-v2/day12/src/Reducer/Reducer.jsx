import React, { useReducer } from "react";

// export default function Reducer({ start = 0, step = 1 }) {
//   const countReducer = (state, action) => {
//     const { type } = action;
//     switch (type) {
//       case "up":
//         return {
//           ...state,
//           count: state.count + step,
//         };
//       case "down":
//         return {
//           ...state,
//           count: state.count - step,
//         };
//       default:
//         throw new Error(`Type không hợp lệ với ${type}`);
//     }
//   };
//   const [state, dispatch] = useReducer(countReducer, {
//     count: start,
//   });
//   const handleUp = () => {
//     dispatch({ type: "up" });
//   };
//   const handleDown = () => {
//     dispatch({ type: "down" });
//   };
//   const { count } = state;
//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button type={"button"} onClick={handleUp}>
//         +
//       </button>
//       <button type={"button"} onClick={handleDown}>
//         -
//       </button>
//     </>
//   );
// }

export default function Reducer({ start = 0, step = 1 }) {
  const countReducer = (state, action) => {
    const { type } = action;
    switch (type) {
      case "up":
        return {
          ...state,
          count: state.count + step,
        };
      case "down":
        return {
          ...state,
          count: state.count - step,
        };
      default:
        throw new Error(`Type không hợp lệ với ${type}`);
    }
  };
  const [state, dispatch] = useReducer(countReducer, {
    count: start,
  });
  const handleUp = () => {
    dispatch({ type: "up" });
  };
  const handleDown = () => {
    dispatch({ type: "down" });
  };
  const { count } = state;
  return (
    <>
      <h1>Count: {count}</h1>
      <button type={"button"} onClick={handleUp}>
        +
      </button>
      <button type={"button"} onClick={handleDown}>
        -
      </button>
    </>
  );
}
