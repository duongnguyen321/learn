import React, { useState } from "react";
import Form from "../Components/Form/Form";
import Todolists from "../Components/TodoLists/Todolists";
export default function Main() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="container">
      <div className={`main ${isOpen ? "open" : "close"}`}>
        <Form setOpen={setOpen} isOpen={isOpen}/>
        <Todolists setOpen={setOpen} isOpen={isOpen}/>
      </div>
      <i
        className="icon"
        onClick={() => {
          setOpen(isOpen ? false : true);
        }}
      >
        📒
      </i>
    </div>
  );
}
