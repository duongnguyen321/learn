import { useEffect, useState } from "react";
export default function Userinfo(props) {
  const [data, setData] = useState("");
  useEffect(() => {
    var user_id = sessionStorage.getItem("user_id");
    if (user_id !== "") {
      getUser();
    }
  }, []);
  const getUser = () => {
    let data = {
      userId: sessionStorage.getItem("user_id"),
    };
    fetch(`https://unicode.vn/api/get_user.php`, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(data).toString(),
    })
      .then((response) => response.json())
      .then((json) => setData(json.data));
  };
  return (
    <>
      {props.render({
        name: data.name,
        email: data.email,
      })}
    </>
  );
}
