import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
    this.counterRef = React.createRef();
    this.checkAllRef = React.createRef();
  }

  componentDidMount() {
    const customers = [
      {
        id: 1,
        name: "01",
      },

      {
        id: 2,
        name: "02",
      },

      {
        id: 3,
        name: "03",
      },
      {
        id: 4,
        name: "04",
      },
      {
        id: 5,
        name: "05",
      },
      {
        id: 7,
        name: "07",
      },
    ];
    toast("Wow so easy!");

    this.checkboxItemRef = [];

    customers.forEach((customer) => {
      this.checkboxItemRef[customer.id] = React.createRef();
    });

    this.setState({
      customers: customers,
    });
  }

  handleCheckAll = () => {
    let checkboxStatus = this.checkAllRef.current.checked;
    if (this.checkAllRef.current.checked === true) {
      this.checkboxItemRef.forEach((checkItem) => {
        checkItem.current.checked = checkboxStatus;
      });
      this.counterRef.current.innerText = this.state.customers.length;
    } else {
      this.counterRef.current.innerText = 0;
      this.checkboxItemRef.forEach((checkItem) => {
        checkItem.current.checked = checkboxStatus;
      });
    }

    console.log(this.checkAllRef.current.checked);
  };
  handleChecked = () => {
    let checkItem = 0;
    this.checkboxItemRef.forEach((checkbox) => {
      if (checkbox.current.checked === true) {
        checkItem++;
      }
    });
    if (checkItem === this.state.customers.length) {
      this.checkAllRef.current.checked = true;
    } else {
      this.checkAllRef.current.checked = false;
    }
    this.counterRef.current.innerText = checkItem;
    // checkItem
    console.log(checkItem);
  };

  render() {
    return (
      <>
        <p>
          <input
            onChange={this.handleCheckAll}
            ref={this.checkAllRef}
            type="checkbox"
            className="check-all"
          />{" "}
          Check All
        </p>
        <hr />
        {this.state.customers.map((customer) => {
          return (
            <React.Fragment key={customer.id}>
              <p>
                <input
                  onChange={this.handleChecked}
                  ref={this.checkboxItemRef[customer.id]}
                  type="checkbox"
                  value={customer.id}
                />{" "}
                {customer.name}
              </p>
            </React.Fragment>
          );
        })}
        <p>
          đã check <span ref={this.counterRef}>0</span>
        </p>
        <ToastContainer />
      </>
    );
  }
}
