import React from "react";
import { Menu, Grid } from "antd";
import { Link } from "react-router-dom";

const { useBreakpoint } = Grid;

const MenuBar = ({ classN }) => {
  const { md } = useBreakpoint();
  return (
    <Menu className={classN} mode={md ? "horizontal" : "inline"}>
      <Menu.Item key="home">
        <Link href="/">
          <a>HOME</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link href="/">
          <a>Home</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link href="/">
          <a>Streaming</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="home">
        <Link href="/">
          <a>Login</a>
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default MenuBar;
