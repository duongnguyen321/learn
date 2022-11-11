import React from "react";
import Navigation from "./Navigation";
import { GlobalContext } from "../Service/Context/GlobalState";
export function Header() {
  return (
    <GlobalContext.Consumer>
      {(context) => {
        return (
          <>
            <Navigation />
            <header
              className="masthead"
              style={{ backgroundImage: `url(${context.urlHeader})` }}
            >
              <div className="container position-relative px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                  <div className="col-md-10 col-lg-8 col-xl-7">
                    <div className="site-heading">
                      <h1>Clean Blog</h1>
                      <span className="subheading">
                        A Blog Theme by Start Bootstrap
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </>
        );
      }}
    </GlobalContext.Consumer>
  );
}

export default Header;
