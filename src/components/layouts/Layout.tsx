import React, { PropsWithChildren } from "react";
import Sidebar from "../sidebar";
const Layout = (props: PropsWithChildren) => {
  return (
    <div className="flex bg-gray-50 w-full">
      <Sidebar />
      <div className="p-8 max-h-screen overflow-auto w-full">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
