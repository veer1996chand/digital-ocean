import React from "react";
import { Checkbox, Collapse } from "antd";
import BaseCollapse from "../../components/Collapse/Collapse";
import "./FilterSidebar.scss";
import { Link } from "react-router-dom";
const CheckboxGroup = Checkbox.Group;
const Panel = Collapse?.Panel;
const FilterSidebar = ({ items }) => {
  return (
    <div className="filter-sidebar">
      <div className="filter-head border-bottom-1">
        <div>Filters</div>
        <div>
          <Link>Rest</Link>
        </div>
      </div>
      <div className="filter-elements">
        <BaseCollapse defaultActiveKey={["1"]} onChange={() => {}}>
          <Panel
            header={
              <>
                <span>Partner Profile</span>
                <span className="badge badge-primary">3</span>
              </>
            }
            key="1"
          >
            <CheckboxGroup
              className="filter-checkbox"
              options={[
                {
                  label: "Blockchain",
                  value: "blockchain",
                },
                {
                  label: "Cloud",
                  value: "could",
                },
                {
                  label: "Sass",
                  value: "sass",
                },
              ]}
            />
          </Panel>
          <Panel header="Services" key="2">
            <CheckboxGroup
              className="filter-checkbox"
              options={[
                {
                  label: "Blockchain",
                  value: "blockchain",
                },
                {
                  label: "Cloud",
                  value: "could",
                },
                {
                  label: "Sass",
                  value: "sass",
                },
                {
                  label: "Sass1",
                  value: "sass",
                },
                {
                  label: "Sass2",
                  value: "sass",
                },
                {
                  label: "Sass3",
                  value: "sass",
                },
                {
                  label: "Sass4",
                  value: "sass",
                },
                {
                  label: "Sass5",
                  value: "sass",
                },
                {
                  label: "Sass6",
                  value: "sass",
                },
                {
                  label: "Sass7",
                  value: "sass",
                },
              ]}
            />
          </Panel>
          <Panel header="Regions" key="3">
            <CheckboxGroup
              className="filter-checkbox"
              options={[
                {
                  label: "Blockchain",
                  value: "blockchain",
                },
                {
                  label: "Cloud",
                  value: "could",
                },
                {
                  label: "Sass",
                  value: "sass",
                },
              ]}
            />
          </Panel>
        </BaseCollapse>
      </div>
    </div>
  );
};
export default FilterSidebar;
