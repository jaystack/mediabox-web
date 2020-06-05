import React from "react";
import Link from "next/link";
import "./GotQuestion.scss";

import Button from "../components/Button";

function GotQuestion({}) {
  return (
    <div className="gotQuestion">
      <div className="gotQuestion__inner container">
        <h2 className="gotQuestion__title">Got a question?</h2>
        <Button url="contact" text="CONTACT US" variant={["-buttonMd"]} />
      </div>
    </div>
  );
}

export default GotQuestion;
