import React from "react";
import Animate from "react-smooth";
import * as ANIMATIONS from "../../constants/animations";

import "./page.css";

const Page = ({ bordered, children }) => {
  return (
    <Animate steps={ANIMATIONS.DEFAULT} attributeName="opacity">
      <div className={bordered ? "page" : "page-noborder"}>{children}</div>
    </Animate>
  );
};

export default Page;
