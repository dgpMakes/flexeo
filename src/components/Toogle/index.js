import React, { Component } from "react";
import Switch from "react-switch";
import { colors } from "../../theme";

class Toogle extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  render() {
    return (
      <label>
        {/*<span>Switch with default style</span>*/}
        <Switch  
            activeBoxShadow="0px 0px 1px 5px hsla(0,0%,0%,.1)"
            width={50}
            height={30}
            onChange={this.handleChange}
            onColor = {colors.prim}
            offColor = {colors.font}
            handleDiameter={22} 
            checkedIcon={
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 12,
                    fontWeight:400,
                    color: colors.white,
                    paddingRight: 2
                }}
                
      >
        SÍ
      </div>
              }
            uncheckedIcon={
                <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                    fontSize: 12,
                    fontWeight:400,
                    color: colors.white,
                    paddingRight: 2
                }}
                
      >
        NO
      </div>
      
    }
    checked={this.state.checked} />
      </label>
    );
  }
}
export default Toogle;
