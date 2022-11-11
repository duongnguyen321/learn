import React, { useState, useTransition } from "react";
import Student from "./Student"
export default function Search() {
  const [keyword, setKeyworld] = useState("");
  const [isPending,startTransition] = useTransition()
  const handleSearch = (e)=> {
    const keyword = e.target.value

    startTransition(()=> {
        setKeyworld(keyword)
    })
  }
  return <>
<input onChange={handleSearch} type={"search"} name={"keywords"} placeholder={"từ khóa.."}/>
<hr />
<h2>Danh sách</h2>
{isPending ?<p>Loading...</p>:<Student keyword={keyword}/>} 
  </>;
}
