import React from "react";
import "./GotQuestion.scss";

function GotQuestion({}) {
  return (
    <div className="gotQuestion">
      <div className="gotQuestion__inner">
        <h2 className="gotQuestion__title">Got a question?</h2>

        {/* TODO: REACT COMPONENT */}
        <a href="contact" className="gotQuestion__contactButton">
          {/* TODO: HTML SOLUTION */}
          <img src="/images/faq/temp_contactUs.png" />
        </a>
      </div>
    </div>
  );
}

export default GotQuestion;
