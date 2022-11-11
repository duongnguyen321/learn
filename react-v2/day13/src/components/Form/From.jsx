import React from "react";
import Input from "./Input";
// import Sellect from "./Sellect";

export default function From() {
  // const statusData = [
  //   {
  //     value: 0,
  //     name: "chưa kích hoạt",
  //     isSelected: false,
  //   },
  //   {
  //     value: 1,
  //     name: "kích hoạt",
  //     isSelected: true,
  //   },
  // ];
  return (

    <form>
      <Input name={"name"} placeholder={"name"} type={"text"} />
      <Input name={"email"} placeholder={"email"} type={"email"} />
      {/* <Sellect name={"status"} label={"Trạng thái"} data={statusData} /> */}
    </form>
  );
}
