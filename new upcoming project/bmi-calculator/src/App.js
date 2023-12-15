import React, { Component } from "react";
import "./App.css";
import { Slider, Card, Col, Row, InputNumber } from "antd";
import Title from "antd/es/typography/Title";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      age: 0,
      weight: 0,
      height: 0,
      calculatedValue: null,
      weightType: "",
      textColor: "#616161",
    };
  }

  calculate = function (event) {
    console.log("calculate");
    console.log(this._bmiCalculator(this.state.weight, this.state.height));
    if (this.state.weight && this.state.height) {
      let heightInMeters = this.state.height * 0.01;
      let calculateBmi = this._bmiCalculator(
        this.state.weight,
        heightInMeters,
        2
      );
      let weightType = this._weightType(calculateBmi);
      console.log("weight", weightType);
      this.setState({
        calculatedValue: calculateBmi,
      });
      this.setState({ weightType });
    }
  };

  onChangeAge = function (event) {

    let age = event;
    this.setState({ age });
    this.calculate();
  };

  onChangeHeight = function (event) {
    let height = event;
    this.setState({ height });
    this.calculate();
  };

  onChangeWeight = function (event) {
    let weight = event;
    this.setState({ weight });
    this.calculate();
  };

  _weightType(value) {
    console.log("value", value);
    if (value <= 18.5) {
      this.setState({ textColor: "#616161" });
      return "underweight";
    } else if (value > 18.5 && value <= 24.9) {
      this.setState({ textColor: "#1DE9B6" });
      return "normal";
    } else if (value > 24.9 && value <= 29.9) {
      this.setState({ textColor: "#FFFF00" });
      return "overweight";
    } else {
      this.setState({ textColor: "#FF3D00" });
      return "obese";
    }
  }

  _bmiCalculator = function (weightInKg, heightInMeters, decimalCount = 2) {
    let bmi = weightInKg / heightInMeters ** 2;
    return bmi.toFixed(decimalCount);
  };

  render() {
    console.log("public_url", process.env.PUBLIC_URL + "/bmi-meter.png");
    return (
      <div className="container">
        <div className="background-display">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: "1rem",
            }}
          >
            <Title style={{ margin: "0", padding: "0", fontWeight: "bold" }}>
              {" "}
              BMI
            </Title>
            <Title
              style={{ margin: "0", padding: "0", letterSpacing: "0.2rem" }}
              level={4}
            >
              Calculator
            </Title>
          </div>
        </div>
        <div className="calculator-container">
          <div>
            <Card
              title="CALCULATE YOUR BODY MASS INDEX"
              style={{
                minWidth: "360px",
                marginTop: "8rem",
                boxShadow:
                  "0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)",
              }}
            >
              <Row justify={"space-between"}>
                <Col span={15}>
                  <div className="font-weight-bold">
                    Age
                    <Slider
                      min={0}
                      max={120}
                      value={this.state.age}
                      onChange={this.onChangeAge.bind(this)}
                    />
                  </div>
                </Col>
                <Col span={7}>
                  <InputNumber
                    min={0}
                    max={120}
                    value={this.state.age}
                    addonAfter="Year"
                    onChange={(event) => this.onChangeAge(event)}
                  />
                </Col>
              </Row>
              <Row justify={"space-between"}>
                <Col span={15}>
                  <div className="font-weight-bold">
                    Height
                    <Slider
                      min={0}
                      max={300}
                      value={this.state.height}
                      onChange={(event) => this.onChangeHeight(event)}
                    />
                  </div>
                </Col>
                <Col span={7}>
                  <InputNumber
                    min={0}
                    max={300}
                    value={this.state.height}
                    addonAfter="CM"
                    onChange={(event) => this.onChangeHeight(event)}
                  />
                </Col>
              </Row>
              <Row justify={"space-between"}>
                <Col span={15}>
                  <div className="font-weight-bold">
                    Weight
                    <Slider
                      min={0}
                      max={100}
                      value={this.state.weight}
                      onChange={(event) => this.onChangeWeight(event)}
                    />
                  </div>
                </Col>
                <Col span={7}>
                  <InputNumber
                    min={0}
                    max={100}
                    value={this.state.weight}
                    addonAfter="KG"
                    onChange={(event) => this.onChangeWeight(event)}
                  />
                </Col>
              </Row>
            <div style={{textAlign:"center"}}>
              <div
                className="font-weight-bold"
                style={{
                  fontSize: "1rem",
                  marginTop: "1rem",
                  color: "#424242",
                }}
              >
                Your BMI is: {this.state.calculatedValue}
              </div>
              <div
                className="font-weight-bold"
                style={{
                  color: this.state.textColor,
                  fontSize: "1.5rem",
                  marginTop: "1rem",
                }}
              >
                {this.state.weightType}
              </div>
              <meter
                style={{ width: "100%" }}
                id="weight-meter"
                low="18.5"
                min="0"
                max="40"
                optimum="24.9"
                high={40}
                value={this.state.calculatedValue}
              >
                {(100 * this.state.calculatedValue) / 40}
              </meter>
            </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
