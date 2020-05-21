import React from "react";
import { MDBDatePicker } from "mdbreact";
import { DatePicker } from "antd";


class DatePickerPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
    };
  }

  getPickerValue = (value) => {
    console.log("val");
    
  };

  render() {
    const { RangePicker } = DatePicker;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <MDBDatePicker disablePast getValue={this.getPickerValue} />
          <input
            
            style={{ border: "2px solid grey", marginTop: "15px" }}
          />
        </div>
        <RangePicker />
      </div>
    );
  }
}

export default DatePickerPage;
