import React from "react";
import { GlobalContext } from "../../Service/Context/GlobalState";

export default function PostDetail() {
  function First_content(context) {
    if (context.postContent.firts_content !== undefined) {
      return context.postContent.firts_content.map((firts_content) => {
        return <p key={firts_content.id}>{firts_content.content}</p>;
      });
    }
  }
  function Seccond_content(context) {
    if (context.postContent.seccond_content !== undefined) {
      return context.postContent.seccond_content.map((seccond_content) => {
        return <p key={seccond_content.id}>{seccond_content.content}</p>;
      });
    }
  }
  function Thirt_content(context) {
    if (context.postContent.thirt_content !== undefined) {
      return context.postContent.thirt_content.map((thirt_content) => {
        return <p key={thirt_content.id}>{thirt_content.content}</p>;
      });
    }
  }
  return (
    <GlobalContext.Consumer>
      {(context) => {
        if (context.postContent !== undefined) {
          return (
            <>
              <article className="mb-4">
                <div className="container px-4 px-lg-5">
                  <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                      {First_content(context)}
                      <h2 className="section-heading">{context.postContent.section_heading}</h2>
                      {Seccond_content(context)}
                      <blockquote className="blockquote">
                      {context.postContent.blockquote}
                      </blockquote>
                      <p>
                      {context.postContent.after_blockquote}
                      </p>
                      <h2 className="section-heading">
                      {context.postContent.section_heading2}
                      </h2>
                      <p>
                      {context.postContent.after_section_heading2}
                      </p>
                      <a href="#!">
                        <img
                          className="img-fluid"
                          src="https://apiforlearn.herokuapp.com/images/post-sample-image.jpg"
                          alt="..."
                        />
                      </a>
                      <span className="caption text-muted">
                      {context.postContent.caption}
                      </span>
                      {Thirt_content(context)}
                      <p>
                        Placeholder text by
                        <a href="http://spaceipsum.com/">Space Ipsum</a>· Images
                        by
                        <a href="https://www.flickr.com/photos/nasacommons/">
                          NASA on The Commons
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            </>
          );
        }
      }}
    </GlobalContext.Consumer>
  );
}
