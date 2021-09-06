import { Component } from "react";
import "./Navbar.scss";

class Navbar extends Component {
  state = {
    open: false,
  };

  handleClick = async () => {
    this.state.open
      ? this.setState({ open: false })
      : this.setState({ open: true });
    console.log("clicked!!");
  };
  render() {
    const open = this.state.open;
    const handleClick = this.handleClick;
    return (
      <div className="navbar">
        <div
          className={open ? "open oppenned" : "open"}
          onClick={function () {
            if (!open) {
              handleClick();
            }
          }}
        >
          <span
            className="cls"
            onClick={function () {
              if (open) {
                handleClick();
              }
            }}
          ></span>
          <span>
            <ul className="sub-menu ">
              <li>
                <a href="#whatisit" title="about">
                  WHAT IS IT
                </a>
              </li>
              <li>
                <a href="#perks" title="skills">
                  PERKS
                </a>
              </li>
              <li>
                <a href="#pricing" title="jobs">
                  PRICING
                </a>
              </li>
            </ul>
          </span>
          <span
            className="cls"
            onClick={function () {
              if (open) {
                handleClick();
              }
            }}
          ></span>
          <p className="nav-tittle">EXP|CON</p>
        </div>
      </div>
    );
  }
}

export default Navbar;
