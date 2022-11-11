import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function FindProducts() {
  const params = useParams();
  const [keyword, setKeyword] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const slug = params.slug;
  const slugObj = (Object.fromEntries(new URLSearchParams(slug.toString())));
  console.log(slugObj);
  useEffect(() => {
    if (slug) {
      const { keywords, status } = slugObj;
      setKeyword(keywords);
      setNewStatus(status);
    }
  });
  return (
    <div>
      Tìm kiếm "{keyword}" với status = "{newStatus}"
    </div>
  );
}
