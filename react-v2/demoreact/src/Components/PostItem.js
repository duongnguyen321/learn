import React from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Service/Context/GlobalState";

function PostItem() {
  return (
    <GlobalContext.Consumer>
      {(context) => {
        if (context.postSelect !== undefined) {
          return (
            <>
              {context.postSelect.map((postSelect) => {
                return (
                  <div key={postSelect.id}>
                    <div className="post-preview">
                      <NavLink to="/post">
                        <h2 className="post-title">{postSelect.post_title}</h2>
                        <h3 className="post-subtitle">
                          {postSelect.post_subtitle}
                        </h3>
                      </NavLink>
                      <p className="post-meta">
                        Posted by
                        <NavLink to="/post">
                          {postSelect.post_meta.name}
                        </NavLink>
                        on {postSelect.post_meta.time}
                      </p>
                    </div>
                    <hr className="my-4" />
                  </div>
                );
              })}
            </>
          );
        }
      }}
    </GlobalContext.Consumer>
  );
}

export default PostItem;
