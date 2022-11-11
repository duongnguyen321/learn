import React, { useState } from "react";
import withContext from "../../Services/Context/withContext";
import moment from "moment";
function ReplyComments(props) {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const scrollCommentReply = (htmlObj) => {
    const offsetTop = htmlObj.parentElement.parentElement.offsetTop;
    if (offsetTop) {
      window.scroll(0, offsetTop);
    }
  };
  const handleChangeValue = (e) => {
    const data = form;
    data[e.target.name] = e.target.value;
    setForm(data);
  };
  const handleSubmitComment = (e) => {
    e.preventDefault();
    console.log(form);
    const { postComment, setTypeComment } = props.store.action;
    const { id, postId } = props;
    const { name, email, message } = form;
    setTypeComment("reply");
    if (name !== "" && email !== "" && message !== "") {
      const comment = {
        ...form,
        postId: postId,
        status: 1,
        parentId: id,
        created_at: moment().format("YYYY-MM-DD hh:mm:ss"),
      };
      postComment(comment, postId);
    }
  };
  return (
    <>
      <button
        className={"btn my-2"}
        style={{ color: "red", fontStyle: "italic" }}
        onClick={(e) => {
          scrollCommentReply(e.target);
          setShow(show ? false : true);
        }}
      >
        {show ? "Hide" : "Write"} Reply
      </button>
      {show ? (
        <form onSubmit={handleSubmitComment}>
          <div className="row">
            <div className="col-6">
              <label htmlFor="reply-name">Enter your name</label>
              <input
                type={"text"}
                className="form-control"
                placeholder={"name"}
                id={"reply-name"}
                name={"name"}
                onChange={handleChangeValue}
                required
              />
            </div>
            <div className="col-6">
              <label htmlFor="reply-email">Enter your email</label>
              <input
                type={"email"}
                className="form-control"
                placeholder={"email"}
                id={"reply-email"}
                name={"email"}
                onChange={handleChangeValue}
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="reply-message">Enter your message</label>
              <input
                type={"text"}
                className="form-control"
                placeholder={"message"}
                id={"reply-message"}
                name={"message"}
                onChange={handleChangeValue}
                required
              />
            </div>
            <div className="d-none">
              <button type={"submit"}></button>
            </div>
          </div>
        </form>
      ) : null}
    </>
  );
}
export default withContext(ReplyComments);
