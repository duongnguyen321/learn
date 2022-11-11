import React, { Component, createRef } from "react";
import withRouter from "../../Services/Routes/withRouter";
import withContext from "../../Services/Context/withContext";
import moment from "moment";
import ReplyComments from "./ReplyComments";

const md5 = require("md5");

export class Comments extends Component {
  constructor(props) {
    super(props);
    this.commentsRef = createRef();

    this.state = {
      typeComment: "comment",
    };
  }

  makeTreeComments = (comments, parentId = 0) => {
    let tree = [];
    if (comments.length) {
      comments.forEach((comment, index) => {
        if (comment.parentId == parentId) {
          tree[index] = comment;
          if (tree[index] !== undefined) {
            tree[index].reply = this.makeTreeComments(
              comments,
              comment.id
            ).reverse();
          }
          tree = tree.filter(() => true);
        }
      });
    }

    return tree;
  };

  componentDidMount = () => {
    const { id } = this.props.params;
    const { getComments } = this.props.store.action;
    getComments(id);
  };
  componentDidUpdate = () => {
    const { typeComment } = this.props.store.data;
    if (typeComment === "comment") {
      const offsetTop = this.commentsRef.current.offsetTop;
      window.scroll(0, offsetTop);
    }
  };

  getGravatarURL = (email) => {
    const address = String(email).trim().toLowerCase();
    const hash = md5(address);
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  render() {
    let { comments } = this.props.store.data;
    comments = this.makeTreeComments(comments);

    return (
      <div className="comments" ref={this.commentsRef}>
        <h5 className="comment-title py-4">{comments.length} Comments</h5>
        {comments.length > 0 &&
          comments.map(
            ({ id, name, email, message, created_at, reply, postId }) => {
              return (
                <div className="comment d-flex mb-3" key={id}>
                  <div className="flex-shrink-0">
                    <div className="avatar avatar-sm rounded-circle">
                      <img
                        className="avatar-img"
                        src={this.getGravatarURL(email)}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="flex-shrink-1 ms-2 ms-sm-3">
                    <div className="comment-meta d-flex">
                      <h6 className="me-2">{name}</h6>
                      <span className="text-muted">
                        {moment(created_at).format("DD/MM/YYYY hh:mm:ss")}
                      </span>
                    </div>
                    <div className="comment-body">{message}</div>
                    <ReplyComments id={id} postId={postId} />
                    {reply?.length > 0 && (
                      <div className="comment-replies bg-light p-3 mt-3 rounded">
                        <h6 className="comment-replies-title mb-4 text-muted text-uppercase">
                          {reply.length} replies
                        </h6>
                        {reply.map(
                          ({ id, name, email, message, created_at }) => {
                            return (
                              <div className="reply d-flex mb-4" key={id}>
                                <div className="flex-shrink-0">
                                  <div className="avatar avatar-sm rounded-circle">
                                    <img
                                      className="avatar-img"
                                      src={this.getGravatarURL(email)}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="flex-grow-1 ms-2 ms-sm-3">
                                  <div className="reply-meta d-flex align-items-baseline">
                                    <h6 className="mb-0 me-2">{name}</h6>
                                    <span className="text-muted">
                                      {moment(created_at).format(
                                        "DD/MM/YYYY hh:mm:ss"
                                      )}
                                    </span>
                                  </div>
                                  <div className="reply-body">{message}</div>
                                </div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            }
          )}
      </div>
    );
  }
}

export default withContext(withRouter(Comments));
