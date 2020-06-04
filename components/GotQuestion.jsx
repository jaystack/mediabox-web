import React from "react";
import Link from "next/link";
import "./GotQuestion.scss";

function GotQuestion({}) {
  return (
    <div className="gotQuestion">
      <div className="gotQuestion__inner container">
        <h2 className="gotQuestion__title">Got a question?</h2>

        <Link href="contact">
          <a href="contact" className="gotQuestion__contactButton">
            CONTACT US
            <span className="gotQuestion__contactButtonIcon">
              <i className="fa fa-arrow-right"></i>
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default GotQuestion;
