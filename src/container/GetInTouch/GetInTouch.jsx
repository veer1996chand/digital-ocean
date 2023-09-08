import React from "react";
import "./GetInTouch.scss";
import { Button } from "antd";
const GetInTouch = ({ className }) => {
  return (
    <div className={`${className}`}>
      <h5>Get in touch</h5>
      <p>
        Website:
        <a target="blank" className=" blue-text pl-8" href="mpekable.com">
          mpekable.com
        </a>
      </p>
      <p>
        Email:
        <a className="blue-text pl-8" href="mailto:support@impekable.com">
          support@impekable.com
        </a>
      </p>
      <p>
        Location:<span className="text16 pl-8">New York, United States</span>
      </p>
      <p>
        Languages:<span className="text16 pl-8">English, French</span>
      </p>
      <Button type="primary">Contact Us</Button>
    </div>
  );
};
export default GetInTouch;
