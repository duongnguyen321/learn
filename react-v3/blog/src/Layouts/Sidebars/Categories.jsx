import React from "react";
import { Link } from "react-router-dom";

export default function Categories(props) {
  const categories = props.data;

  return (
    <div className="aside-block">
      <h3 className="aside-title">Categories</h3>
      <ul className="aside-links list-unstyled">
        {categories?.length ? (
          <>
            {categories.map((categories) => {
              const { id, name } = categories;
              return (
                <li key={id}>
                  <Link to={id}>
                    <i className="bi bi-chevron-right" /> {name}
                  </Link>
                </li>
              );
            })}
          </>
        ) : null}
      </ul>
    </div>
  );
}
