import React from "react";
import moment from "moment";
export default function LastedPosts(props) {
  const posts = props.data;
  return (
    <div
      className="tab-pane fade"
      id="pills-latest"
      role="tabpanel"
      aria-labelledby="pills-latest-tab"
    >
      {posts?.length ? (
        <>
          {posts.map((posts) => {
            const { id, created_at, title, user, category } = posts;
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
          })}
        </>
      ) : null}
    </div>
  );
}
