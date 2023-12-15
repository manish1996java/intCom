import { ShoppingCartOutlined } from "@ant-design/icons";
import { Badge, Button, Dropdown, Menu } from "antd";
import React from "react";

const CartDropDown = ({ cartItem }) => {
  console.log(cartItem);
  const dropDownMenu = cartItem.map((c, i) => {
    return {
      key: `key-${i}`,
      label: (
        <div>
          <div>{c.title}</div>
        </div>
      ),
    };
  });

  const items = [
    {
      key: "1",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.antgroup.com"
        >
          1st menu item
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.aliyun.com"
        >
          2nd menu item
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.luohanacademy.com"
        >
          3rd menu item
        </a>
      ),
    },
  ];
  console.log("items", items);
  console.log("dromDownMenu", dropDownMenu);
  return (
    // <Dropdown menu={dropDownMenu} placement="bottomRight">
        <Badge count={cartItem.length}>
          <ShoppingCartOutlined style={{ fontSize: "18px" }} />
        </Badge>
    // {/* </Dropdown> */}
  );
};

export default CartDropDown;
