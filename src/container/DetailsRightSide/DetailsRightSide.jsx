import React from "react";
import "./DetailsRightSide.scss";
import GetInTouch from "../GetInTouch/GetInTouch";
import Tags from "../../components/Tags/Tags";
const DetailsRightSide = () => {
  return (
    <div className="">
      <GetInTouch className={"border-bottom-1-light pb-24"} />
      <div>
        <Tags
          title={"Business Type"}
          className={"border-bottom-1-light pb-24"}
          tags={["Startup"]}
          tagClassName={
            "ant-tag-small ant-tag-light-gray cylindrical-coordinate-text mb-8"
          }
        />
        <Tags
          title={"Services we provide"}
          className={"border-bottom-1-light pb-24"}
          tags={[
            "Managed Web/App Hosting",
            "Wordpress",
            "E-Commerce",
            "Digital Marketing",
            "Migration Services",
          ]}
          tagClassName={
            "ant-tag-small ant-tag-light-gray cylindrical-coordinate-text mb-8"
          }
        />
        <Tags
          title={"Business Type"}
          className={"border-bottom-1-light pb-24"}
          tags={["Startup"]}
          tagClassName={
            "ant-tag-small ant-tag-light-gray cylindrical-coordinate-text mb-8"
          }
        />
      </div>
    </div>
  );
};
export default DetailsRightSide;
