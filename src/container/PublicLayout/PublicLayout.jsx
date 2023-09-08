import React from "react";
import Header from "../../components/Header/Header";

const PublicLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
export default PublicLayout;
