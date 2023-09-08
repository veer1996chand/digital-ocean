import React from "react";
import { Row, Col } from "antd";
import Banner from "../../components/Banner/Banner";
import Tag from "../../components/Tag/Tag";
import "./Home.scss";
import FilterSidebar from "../../container/FilterSidebar/FilterSidebar";
import ListView from "./ListView";

const Home = () => {
  return (
    <div className="home-page">
      <Banner />

      <div className="container">
        <Row>
          <Col span={4}>
            <FilterSidebar />
          </Col>
          <Col span={20} className="content">
            <Row>
              <Tag
                kay={1}
                closable={true}
                onClose={(e) => console.log(e)}
                value="Blockchain"
                className="ant-tag-light-gray"
              />

              <Tag
                kay={2}
                closable={true}
                onClose={() => {}}
                value="Cloud Aggregator"
                className="ant-tag-light-gray"
              />

              <Tag
                kay={3}
                closable={true}
                onClose={() => {}}
                value="Cloud Management"
                className="ant-tag-light-gray"
              />
            </Row>
            {/* <CardView /> */}
            <ListView />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Home;
