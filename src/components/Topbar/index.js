import React, { useState } from "react";
import { Layout, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import MenuList from "./Menu";

import style from "./style.module.css";

const { Header } = Layout;

const Navbar = () => {
  const [current, setCurrent] = useState("setting:1");
  const [visible, setVisible] = useState(false);

  let handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  let myFunction = () => {
    // if (
    //   document.body.scrollTop > 50 ||
    //   document.documentElement.scrollTop > 50
    // ) {
    //   document.getElementById("header").style = { backgroundColor: "black" };
    // } else {
    //   document.getElementById("header").style = { backgroundColor: "red" };
    // }
  };

  let showDrawer = () => {
    setVisible(true);
  };

  let onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Header
        id="header"
        className={style.header}
        onScroll={myFunction}
        style={{ position: "fixed", zIndex: 100, width: "100%" }}
      >
        <div className="logo">
          <a href="#">
            <img className="sign-logo" src="/photos/MusicSign.svg" />
            <img className="text-logo" src="/photos/VerseNation.svg" />
          </a>
        </div>
        <MenuList classN={style.horizontMenu} />
        <Button
          id="barsMenu"
          className={style.barsMenu}
          type="primary"
          onClick={showDrawer}
          icon={<MenuOutlined />}
        ></Button>
        <Drawer
          title="Menu Bar"
          placement="right"
          closable={true}
          onClose={onClose}
          visible={visible}
        >
          <MenuList />
        </Drawer>
      </Header>
    </>
  );
};

export default Navbar;
