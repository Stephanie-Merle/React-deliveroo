import React from "react";

const Card = props => {
  let description = props.description;

  return (
    <div className="card">
      <div>
        <p>{props.title}</p>
        <p>
          {description.length > 60
            ? description.substring(0, 70) + "..."
            : description}
        </p>
        <p id="price">
          {props.price} €{" "}
          {props.popular ? (
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="#F1803A"
                stroke="#F1803A"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>{" "}
              populaire
            </span>
          ) : null}
        </p>
      </div>
      {props.picture ? <img src={props.picture} alt="item preview" /> : null}
    </div>
  );
};

export default Card;
