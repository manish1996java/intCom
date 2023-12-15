import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Card } from "antd";

const list = [
  { id: "1", name: "glass", price: 200 },
  { id: "2", name: "Pen", price: 10 },
  { id: "3", name: "Pot", price: 20 },
  { id: "4", name: "bottel", price: 90 },
  { id: "5", name: "bag", price: 40 },
  { id: "6", name: "cup", price: 50 },
  { id: "7", name: "phone", price: 7 },
  { id: "8", name: "copy", price: 5 },
  { id: "9", name: "fridge", price: 6 },
  { id: "10", name: "guitar", price: 8 },
  { id: "11", name: "gun", price: 9 },
  { id: "12", name: "shoe", price: 8 },
  { id: "13", name: "clock", price: 200 },
  { id: "14", name: "bulb", price: 78 },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemList: list,
      filteredDropDown: [],
    };
  }

  onInputChange(e) {
    console.dir(e.target.value);
    let value = e.target.value;

    let filterdList = this.state.itemList.filter((item) => {
      console.log(item);
      let itemValues = Object.values(item);
      let retValue = itemValues.some((v) => {
        if (typeof v === "number") {
          return v.toString().includes(value);
        } else {
          return v.includes(value);
        }
      });
      
      return retValue;
    });

    this.setState({ filteredDropDown: filterdList });
    console.log("filteredList", filterdList);
  }

  render() {
    return (
      <div className="App">
        <input
          className="searchInput"
          onChange={(e) => this.onInputChange(e)}
        />
        <div className="searchDropdown">
          {this.state.filteredDropDown.map((item) => {
            return (
              <Card>
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.price}</div>
              </Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
