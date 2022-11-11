import React from "react";
import moment from "moment";

export default function Popular(props) {
  const posts = props.data;
  return (
    <div
      className="tab-pane fade show active"
      id="pills-popular"
      role="tabpanel"
      aria-labelledby="pills-popular-tab"
    >
      {posts?.length ? (
        <>
          {posts.map((posts) => {
            const { id, created_at, title, user, category, type } = posts;
            if (type.indexOf("popular") !== -1) {
              return (
                <div className="post-entry-1 border-bottom" key={id}>
                  <div className="post-meta">
                    <span className="date">{category.name}</span>{" "}
                    <span className="mx-1">•</span>{" "}
                    <span>
                      {moment(created_at).format("DD/MM/yyyy HH:mm:ss")}
                    </span>
                  </div>
                  <h2 className="mb-2">
                    <a href="#">{title}</a>
                  </h2>
                  <span className="author mb-3 d-block">{user.name}</span>
                </div>
              );
            }
          })}
        </>
      ) : null}
    </div>
  );
}
