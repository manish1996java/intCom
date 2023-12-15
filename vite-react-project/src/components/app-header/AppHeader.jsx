import { useDispatch, useSelector } from "react-redux";
import "./AppHeader.css";
import { NavLink, useNavigate } from "react-router-dom";
import { Avatar, Button, Dropdown } from "antd";
import { logout } from "../../store/reducers/auth-reducer";
import { useEffect, useRef } from "react";
import AppHeaderLogo from "./app-header-logo/AppHeaderLogo";
import AppHeaderNav from "./app-header-nav/AppHeaderNav";


const AppHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const { isAuth, user, carts, likes } = useSelector((state) => {
    return {
      ...state.authReducer,
      ...state.cartReducer,
      ...state.likedReducer,
    };
  });

  useEffect(() => {
    console.log("searchInputRef", searchInputRef);
    if (searchInputRef.current) {
      console.log("searchInputRef", searchInputRef.current);
      searchInputRef.current.focus();
    }
  }, []);

  const userLogout = () => {
    dispatch(logout());
  };

  const navigationsBasedOnAuth = () => {
    return isAuth ? (
      <Dropdown
        menu={{
          items,
        }}
        placement="bottomLeft"
        arrow
      >
        <Avatar
          style={{
            cursor: "pointer",
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >
          {user.userId.charAt(0).toUpperCase()}
        </Avatar>
      </Dropdown>
    ) : (
      <NavLink to="/auth/">
        <Button type="primary"> Login </Button>
      </NavLink>
    );
  };

  const items = [
    {
      key: "1",
      label: <a onClick={userLogout}>Logout</a>,
    },
  ];

  const onSearch = (v) => {
    console.log("value----->", v.trim().length);
    if (v && v.trim().length > 0) {
      console.log("inside if");
      navigate(`/search/${v}`);
    }
  };

  return (
    <div className="app-header">
      <div className="app-container">
        <div className="app-header-container">
          <AppHeaderLogo></AppHeaderLogo>
          <div className="space-box"></div>
          <AppHeaderNav
            searchInputRef={searchInputRef}
            user={user}
            cartLength={carts.length}
            likeLength={likes.length}
            navigationsBasedOnAuth={navigationsBasedOnAuth}
            onSearch={onSearch}
          ></AppHeaderNav>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
