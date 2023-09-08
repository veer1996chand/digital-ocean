import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Col, Row } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import Tag from "../../components/Tag/Tag";
import { images } from "../../config/images";

import "./ProductDetails.scss";
import DetailsRightSide from "../../container/DetailsRightSide/DetailsRightSide";
const ProductDetails = () => {
  return (
    <div className="container">
      <div className="top-header">
        <Link className="back-button">
          <ArrowLeftOutlined />
          Back
        </Link>
      </div>
      <Row>
        <Col span={24} className="product-banner">
          <img src={images.header} alt="Banner" className="w-100" />
        </Col>
      </Row>
      <div className="product-details-content ">
        <Row
          gutter={[10, 0]}
          className="product-info pt-40 pb-40 border-bottom-1-light"
        >
          <Col>
            <Avatar
              icon={<img src={images.productAvatarImg1} />}
              className="product-logo"
              size="large"
            />
          </Col>
          <Col>
            <h2>Impekable</h2>
          </Col>
        </Row>
        <Row>
          {/* 1248/24 = 52 |||| 405/52 =7 |||| left side is 7 */}
          <Col span={17} className="border-right-1-light">
            <Row className="pr-105">
              <Col>
                <h3>Overview</h3>
                <p>
                  Impekable is an award winning UX design and software
                  development agency, born in the San Francisco Bay area. We
                  design and build practical, elegant digital products for
                  innovators and industry leaders.
                </p>
              </Col>
            </Row>
            <Row className="pr-105">
              <Col>
                <h3>Services</h3>
                <p>
                  <span className="br">Product Strategy</span>
                  Everything starts with a vision. We help you crystalize your
                  early concept into a clear product vision. We help you achieve
                  product-market fit via the creation of a minimum viable
                  product. We help you prioritize your product roadmap to help
                  you achieve your goals.
                </p>
                <p>
                  <span className="br">UX Design</span>
                  “Design is how it works.” - Steve Jobs. When we talk about
                  design, we don’t just mean designing the wireframes and user
                  interfaces. We mean addressing the needs of the user, solving
                  pain points, removing friction, making things easier to
                  understand and use.
                </p>
                <p>
                  <span className="br">Software Development</span>
                  We can be your agile engineering partner. Impekable has close
                  to a decade of experience building web-based SaaS solutions
                  and mobile apps for a broad range of businesses, from
                  early-stage startups to multinational enterprises with
                  household names. We have deep experience in the modern web and
                  mobile tech stacks.
                </p>
                <p>
                  <span className="br">Systems Integration</span>
                  Impekable can help you work with the modern web and save you
                  time and money by integrating with the best-of-breed service
                  providers like Salesforce and Hubspot. We have a deep
                  understanding of communications platforms-as-a-service (CPaaS)
                  and integrating services such as SMS, chat, voice into
                  applications using services including Twilio, CM.com,
                  MessageBird, MUX and more.
                </p>{" "}
              </Col>
            </Row>
            <Row gutter={[0, 24]} className="mt-40 pr-73">
              <Col span={24}>
                <img src={images.productSnap4} alt="product snap" />
              </Col>
              <Col span={24}>
                <img src={images.productSnap5} alt="product snap" />
              </Col>
            </Row>
          </Col>
          <Col span={7} className="pt-40 pl-16">
            <Tag
              kay={1}
              value="PaaS Vendor"
              className="ant-tag-small ant-tag-light-gray cylindrical-coordinate-text"
            />
            <DetailsRightSide />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetails;
