import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
// const Api = "https://apiforlearn.herokuapp.com/demopage";
const Api = "http://localhost:3004/demopage";
export const GlobalContext = React.createContext();
function GlobalState(props) {
  let [responseData, setResponseData] = React.useState({});
  const [urlHeader, setUrlHeader] = useState("");
  const [postSelect, setPostSelect] = useState([]);
  const [postContent, setPostContent] = useState({});
  const location = useLocation();
  useEffect(() => {
    axios({
      method: "GET",
      url: Api,
      headers: {
        "content-type": "application/octet-stream",
      },
    })
      .then((response) => {
        setResponseData(response.data);
        setPostSelect(responseData.postSelect);
        setPostContent(responseData.postContent);
        SetUrlHeader();
      })
      .catch((error) => {
        console.log(error);
      });
  },[responseData]);
  function SetUrlHeader() {
    if (location.pathname === "/") {
      setUrlHeader(responseData.url_home);
    }
    if (location.pathname === "/about") {
      setUrlHeader(responseData.url_about);
    }
    if (location.pathname === "/post") {
      setUrlHeader(responseData.url_post);
    }
    if (location.pathname === "/contact") {
      setUrlHeader(responseData.url_contact);
    }
  }
  const { children } = props;
  return (
    <GlobalContext.Provider
      value={{
        urlHeader: urlHeader,
        postSelect: postSelect,
        postContent:postContent
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
export default GlobalState;
