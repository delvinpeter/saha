import React from "react";
import "./footer.css"
const Item = ({ Links, title }) => {
  return (
    <ul>
      <h1 className="item-head">{title}</h1>
      {Links.map((link) => (
        <li key={link.name}>
          <a
            className="item-a"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Item;
