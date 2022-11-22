import { Fragment, useState } from "react";
import Menubar from "./Menubar";

export default function Sidebar(onNav) {
  const [isActive, setIsActive] = useState(false);
  const handleClick = (event) => {
    setIsActive((current) => !current);
    console.log("click");
  };

  return (
    <Fragment>
      <div className="col-xl-2 col-lg-3 col-md-4 col-12 p-0 bg-navbar h-screen hide-sidebar ">
        <Menubar onNav={onNav.onNav} />
      </div>
      <div class="col-12 hide-toggle bg-navbar " onClick={handleClick}>
        <div className="d-flex justify-content-end ">
          <i class="d-flex bi bi-list text-light fs-1 p-3"></i>
        </div>
        {isActive ? <Menubar /> : ""}
      </div>
    </Fragment>
  );
}
