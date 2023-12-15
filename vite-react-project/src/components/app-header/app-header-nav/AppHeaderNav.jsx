import { NavLink } from "react-router-dom";
import FilterInput from "../../../pages/home/filter-input/FilterInput";
import { Badge } from "antd";
import { HeartOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import './AppHeaderNav.css';


const AppHeaderNav = ({searchInputRef,onSearch,user,cartLength,likeLength,navigationsBasedOnAuth}) => {
    return (
      <ul className="header-nav">
        <li>
          <div>
            <FilterInput ref={searchInputRef} onSearch={onSearch} />
          </div>
        </li>
        <li>
          <div>
            <NavLink to="/food">Products</NavLink>
          </div>
        </li>
        {user && user.roles && user.roles.includes("admin") ? (
          <li>
            <div>
              <NavLink to="dashboard">Dashboard</NavLink>
            </div>
          </li>
        ) : (
          <></>
        )}
  
        <li>
          {/* <NavLink to="cart"> */}
          <Badge count={likeLength}>
            <HeartOutlined
              style={{
                fontSize: "20px",
              }}
            />
          </Badge>
          {/* </NavLink>   */}
        </li>
        <li>
          <NavLink to="cart">
            <Badge count={cartLength}>
              <ShoppingCartOutlined
                style={{
                  fontSize: "20px",
                }}
              />
            </Badge>
          </NavLink>
        </li>
        <li>
          <div>{navigationsBasedOnAuth()}</div>
        </li>
      </ul>
    );
  }
  
  export default AppHeaderNav;