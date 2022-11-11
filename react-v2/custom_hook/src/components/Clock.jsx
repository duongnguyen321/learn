import React from "react";
import { useClock } from "../hooks/Hook";
export default function Products() {
  const clock = useClock();
  return (
    <>
      <h1 style={{backgroundColor:"red"}}>{clock}</h1>
      <h1 style={{backgroundColor:"green"}}>{clock}</h1>
      <h1 style={{backgroundColor:"yellow"}}>{clock}</h1>
      <h1 style={{backgroundColor:"orange"}}>{clock}</h1>
    </>
  );
}
