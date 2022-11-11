import React, { useState, useEffect } from "react";
import Url from "../../Helper/Url";
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
const url = new Url();
export default function Products() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState();
  const [status, setStatus] = useState();
  const { id } = params;
  const handleSearch = (e) => {
    setSearchParams({
      keywords: e.target.value,
      status: status ? status : "all",
    });
    setQuery(e.target.value);
  };
  const handleOptions = (e) => {
    setSearchParams({ status: e.target.value, keywords: query ? query : "" });
    setStatus(e.target.value);
  };
  const navigate = useNavigate();
  const Autocomplete = () => {
    if (query) {
      return (
        <>
          <div className="col-12">
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate(`${url.filters}/${searchParams}`);
              }}
            >
              Tìm kiếm "{query}" với status = "{status ? status : "all"}"
            </button>
          </div>
        </>
      );
    } else {
      return <></>;
    }
  };
  useEffect(() => {
    setQuery(searchParams.get("keywords"));
    setStatus(searchParams.get("status"));
  }, []);
  return (
    <>
      <h1>Products {id}</h1>
      <Link className="link" to={`${url.products}/add`}>
        Add
      </Link>
      <Link className="link" to={`${url.products}/edit`}>
        Edit
      </Link>
      <Link className="link" to={`${url.products}/delete`}>
        Delete
      </Link>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          navigate(`${url.filters}/${searchParams}`);
        }}
      >
        <select
          className="form-control"
          name="status"
          onChange={handleOptions}
          value={status ? status : "all"}
        >
          <option value="all">All</option>
          <option value="active">Active</option>
          <option value="inactive">In Active</option>
        </select>
        <input
          className="form-control"
          type="search"
          placeholder="Nhập ..."
          value={query ? query : ""}
          onChange={handleSearch}
        />
        {<Autocomplete />}
      </form>
    </>
  );
}
