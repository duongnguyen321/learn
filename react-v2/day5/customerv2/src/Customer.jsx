import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { confirmAlert } from "react-confirm-alert"; 
import "react-confirm-alert/src/react-confirm-alert.css"; 

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./customer.css";


export default class Customers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      action: "lists",
      form: {
        id: 0,
        name: "",
        email: "",
        phone: "",
      },
      errors: {},
      msg: "",
      msgType: "danger",
      isLoading: true,
      paginate: {
        maxPage: 0,
        currentPage: 1,
      },
      filters: {
        status: "all",
        keywords: "",
      },
      deleteRef: []
    };

    this.customersApi = "https://apiforlearn.herokuapp.com/customers";

    this.perPage = 3;
    
    this.deleteButtonRef = React.createRef();

    this.deleteCountRef = React.createRef();

    this.checkAllRef = React.createRef();

    this.deleteCount = 0;

    this.deleteIds = [];
  }

  getFilterQuery = () => {
    const queryArr = [];
    let queryString = "";

    Object.keys(this.state.filters).forEach((fieldName) => {
      if (fieldName === "status") {
        if (
          this.state.filters.status == "active" ||
          this.state.filters.status == "inactive"
        ) {
          let status = 0;

          if (this.state.filters.status == "active") {
            status = 1;
          }

          queryArr.push(`status=${status}`);
        }
      } else if (this.state.filters.keywords) {
        queryArr.push(`q=${this.state.filters.keywords}`);
      }
    });

    if (queryArr.length) {
      queryString = queryArr.join("&");
    }

    return queryString;
  };

  setMaxPage = () => {
    const queryString = this.getFilterQuery();

    let customerApi = this.customersApi;
    if (customerApi.indexOf("?") === -1) {
      customerApi += "?" + queryString;
    } else {
      customerApi += "&" + queryString;
    }

    fetch(customerApi)
      .then((response) => response.json())
      .then((customers) => {
        const maxPage = Math.ceil(customers.length / this.perPage);

        const paginate = { ...this.state.paginate };

        paginate.maxPage = maxPage;

        this.setState({
          paginate: paginate,
        });
      });
  };

  getUsers = () => {
    const queryString = "&" + this.getFilterQuery();

    fetch(
      this.customersApi +
        `?_page=${this.state.paginate.currentPage}&_limit=${this.perPage}${queryString}`
    )
      .then((response) => response.json())
      .then((customers) => {
        customers.forEach(customer => {
            //Create Ref
            const deleteRef = [];
        
            this.state.customers.forEach(customer => {
              
              deleteRef.push(React.createRef());
              this.setState({
                deleteRef: deleteRef
              });
          });

        
          
        });
        this.setState({
          customers: customers,
          isLoading: false,
        });
      });
  };

  getUser = (userId) => {
    fetch(this.customersApi + "/" + userId)
      .then((response) => response.json())
      .then((customer) => {


        this.setState({
          form: customer,
        });
      });
  };

  deleteUser = (userId) => {
    fetch(this.customersApi + "/" + userId, {
      method: "DELETE",
    });
  };

  componentDidMount() {
    toast("Wow so easy!");
    this.getUsers();
    this.setMaxPage();

  }

  componentDidUpdate() {
    setTimeout(() => {
      this.getUsers();
      
    }, 500);
  }

  paginateRender = () => {
    let paginateItem = [];
    let active;
    const currentPage = this.state.paginate.currentPage;

    for (let page = 1; page <= this.state.paginate.maxPage; page++) {
      active = parseInt(page) === parseInt(currentPage) ? "active" : "";
      paginateItem.push(
        <li
          key={page}
          className={`page-item ${active}`}
          onClick={(e) => {
            e.preventDefault();
            this.goPaginate(page);
          }}
        >
          <a className="page-link" href="#">
            {page}
          </a>
        </li>
      );
    }

    return (
      <nav
        aria-label="Page navigation example"
        className="d-flex justify-content-end"
      >
        <ul className="pagination">
          {this.state.paginate.currentPage > 1 ? (
            <li className="page-item">
              <a className="page-link" href="#" onClick={this.prevPaginate}>
                Tr?????c
              </a>
            </li>
          ) : (
            false
          )}

          {paginateItem}
          {this.state.paginate.currentPage < this.state.paginate.maxPage ? (
            <li className="page-item">
              <a className="page-link" href="#" onClick={this.nextPaginate}>
                Sau
              </a>
            </li>
          ) : (
            false
          )}
        </ul>
      </nav>
    );
  };

  goPaginate = (page) => {
    const paginate = { ...this.state.paginate };

    paginate.currentPage = page;
    this.setState({
      paginate: paginate,
      isLoading: true,
    });

    this.checkAllRef.current.checked = false;
  };

  prevPaginate = (e) => {
    e.preventDefault();
    let page = this.state.paginate.currentPage;
    page = page - 1;
    if (page < 0) {
      page = 1;
    }

    this.goPaginate(page);
  };

  nextPaginate = (e) => {
    e.preventDefault();
    let page = this.state.paginate.currentPage;
    page = page + 1;
    if (page > this.state.paginate.maxPage) {
      page = this.state.paginate.maxPage;
    }

    this.goPaginate(page);
  };

  customersRender = () => {
    let count = 0;
    if (this.state.isLoading) {
      return (
        <tr>
          <td colSpan={6}>
            <div className="alert alert-success text-center">
              ??ang t???i d??? li???u...
            </div>
          </td>
        </tr>
      );
    }
    
    return this.state.customers.map((customer, index) => {
  
      return (
        <tr key={customer.id}>
          <td>
            <input
              type="checkbox"
              className="delete"
              value={customer.id}
              key={this.state.checkAll}
              defaultChecked={this.state.checkAll}
              onChange={this.handleChangeDelete}
              ref={this.state.deleteRef[index]}
            />
          </td>
          <td>{customer.name}</td>
          <td>{customer.email}</td>
          <td>{customer.phone}</td>
          <td>
            {customer.status ? (
              <button className="btn btn-success btn-sm">K??ch ho???t</button>
            ) : (
              <button className="btn btn-danger btn-sm">Ch??a k??ch ho???t</button>
            )}
          </td>
          <td>
            <a
              href="#"
              className="btn btn-warning btn-sm"
              onClick={(e) => {
                e.preventDefault();
                this.handleAction("update", e.target.dataset.id);
              }}
              data-id={customer.id}
            >
              S???a
            </a>
          </td>
          <td>
            <a
              href="#"
              data-id={customer.id}
              onClick={(e) => {
                e.preventDefault();

                this.handleDeleteSubmit(e.target.dataset.id);
              }}
              className="btn btn-danger btn-sm"
            >
              Xo??
            </a>
          </td>
        </tr>
      );
    });
  };

  renderAction = () => {
    let jsx;
    switch (this.state.action) {
      case "add":
        jsx = (
          <>
            <h1>Th??m kh??ch h??ng</h1>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.handleAction("lists");
              }}
            >
              Quay l???i
            </button>
            <hr />
            {this.state.msg !== "" ? (
              <div className={`alert alert-${this.state.msgType} text-center`}>
                {this.state.msg}
              </div>
            ) : (
              false
            )}
            <form onSubmit={this.handleAddSubmit}>
              <div className="mb-3">
                <label>T??n</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="T??n"
                  value={this.state.form.name}
                  onChange={this.changeValue}
                />
                {this.state.errors.name ? (
                  <span style={{ color: "red" }}>{this.state.errors.name}</span>
                ) : (
                  false
                )}
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.form.email}
                  onChange={this.changeValue}
                />
                {this.state.errors.email ? (
                  <span style={{ color: "red" }}>
                    {this.state.errors.email}
                  </span>
                ) : (
                  false
                )}
              </div>

              <div className="mb-3">
                <label>??i???n tho???i</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="??i???n tho???i"
                  value={this.state.form.phone}
                  onChange={this.changeValue}
                />
                {this.state.errors.phone ? (
                  <span style={{ color: "red" }}>
                    {this.state.errors.phone}
                  </span>
                ) : (
                  false
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                Th??m m???i
              </button>
            </form>
          </>
        );
        break;

      case "update":
        jsx = (
          <>
            <h1>C???p nh???t kh??ch h??ng</h1>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.handleAction("lists");
              }}
            >
              Quay l???i
            </button>
            <hr />
            {this.state.msg !== "" ? (
              <div className={`alert alert-${this.state.msgType} text-center`}>
                {this.state.msg}
              </div>
            ) : (
              false
            )}
            <form onSubmit={this.handleUpdateSubmit}>
              <div className="mb-3">
                <label>T??n</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="T??n"
                  value={this.state.form.name}
                  onChange={this.changeValue}
                />
                {this.state.errors.name ? (
                  <span style={{ color: "red" }}>{this.state.errors.name}</span>
                ) : (
                  false
                )}
              </div>

              <div className="mb-3">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.form.email}
                  onChange={this.changeValue}
                />
                {this.state.errors.email ? (
                  <span style={{ color: "red" }}>
                    {this.state.errors.email}
                  </span>
                ) : (
                  false
                )}
              </div>

              <div className="mb-3">
                <label>??i???n tho???i</label>
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="??i???n tho???i"
                  value={this.state.form.phone}
                  onChange={this.changeValue}
                />
                {this.state.errors.phone ? (
                  <span style={{ color: "red" }}>
                    {this.state.errors.phone}
                  </span>
                ) : (
                  false
                )}
              </div>
              <button type="submit" className="btn btn-primary">
                L??u thay ?????i
              </button>
            </form>
          </>
        );

        break;

      default:
        jsx = (
          <>
            <h1>Danh s??ch kh??ch h??ng</h1>

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                this.handleAction("add");
              }}
            >
              Th??m m???i
            </button>
            <hr />
            <form onSubmit={this.handleFilters}>
              <div className="row">
                <div className="col-3">
                  <select
                    name="status"
                    className="form-control"
                    onChange={this.changeValueFilter}
                  >
                    <option value={"all"}>T???t c??? tr???ng th??i</option>
                    <option value={"active"}>K??ch ho???t</option>
                    <option value={"inactive"}>Ch??a k??ch ho???t</option>
                  </select>
                </div>
                <div className="col-7">
                  <input
                    type="search"
                    name="keywords"
                    className="form-control"
                    placeholder="T??? kho?? t??m ki???m..."
                    onChange={this.changeValueFilter}
                  />
                </div>
                <div className="col-2">
                  <button type="submit" className="btn btn-primary">
                    T??m ki???m
                  </button>
                </div>
              </div>
            </form>
            <hr />
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th width="5%">
                    <input
                      type="checkbox"
                      className="checkAll"
                      onChange={this.checkAll}
                      ref = {this.checkAllRef}
                    />
                  </th>
                  <th>T??n</th>
                  <th>Email</th>
                  <th>??i???n tho???i</th>
                  <th>Tr???ng th??i</th>
                  <th width="5%">S???a</th>
                  <th width="5%">Xo??</th>
                </tr>
              </thead>
              <tbody>{this.customersRender()}</tbody>
            </table>
            <button type="button" ref={this.deleteButtonRef} className="btn btn-danger disabled" onClick={this.handleDeleteSelection}>
              Xo?? ???? ch???n (<span ref={this.deleteCountRef}>0</span>)
            </button>
            {this.paginateRender()}
          </>
        );
        break;
    }

    return jsx;
  };

  handleAction = (action, id = 0) => {
    if (id !== 0) {
      this.getUser(id);
    }

    this.setState({
      action: action,
    });
  };

  handleAddSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    let msg = "";

    const { name, email, phone } = this.state.form;

    if (name === "") {
      errors.name = "Vui l??ng nh???p t??n";
    }

    if (email === "") {
      errors.email = "Vui l??ng nh???p email";
    }

    if (phone === "") {
      errors.phone = "Vui l??ng nh???p ??i???n tho???i";
    }

    if (Object.keys(errors).length) {
      msg = "Vui l??ng ki???m tra c??c l???i b??n d?????i";
    } else {
      //post api
      fetch(this.customersApi, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      })
        .then((response) => response.json())
        .then((customer) => {
          if (typeof customer === "object") {
            this.setState({
              form: {
                name: "",
                email: "",
                phone: "",
              },
            });
            this.handleAction("lists");
          }
        });
    }

    this.setState({
      errors: errors,
      msg: msg,
    });
  };

  handleUpdateSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    let msg = "";

    const { name, email, phone } = this.state.form;

    if (name === "") {
      errors.name = "Vui l??ng nh???p t??n";
    }

    if (email === "") {
      errors.email = "Vui l??ng nh???p email";
    }

    if (phone === "") {
      errors.phone = "Vui l??ng nh???p ??i???n tho???i";
    }

    if (Object.keys(errors).length) {
      msg = "Vui l??ng ki???m tra c??c l???i b??n d?????i";
    } else {
      //post api
      fetch(this.customersApi + "/" + this.state.form.id, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.state.form),
      })
        .then((response) => response.json())
        .then((customer) => {
          if (typeof customer === "object") {
            // this.handleAction('lists');
            this.setState({
              msg: "C???p nh???t th??nh c??ng",
              msgType: "success",
            });
          }
        });
    }

    this.setState({
      errors: errors,
      msg: msg,
    });
  };

  handleDeleteSubmit = (id) => {

    confirmAlert({
      title: "B???n c?? ch???c ch???n mu???n xo???",
      message: "N???u xo?? b???n s??? kh??ng th??? kh??i ph???c",
      buttons: [
        {
          label: "C??",
          onClick: () => {
            this.deleteUser(id);
          },
        },
        {
          label: "Kh??ng",
          onClick: () => {},
        },
      ],
    });
  };

  handleFilters = (e) => {
    e.preventDefault();
    //console.log(this.state.filters);
  };

  changeValueFilter = (e) => {
    e.preventDefault();
    const data = { ...this.state.filters };

    data[e.target.name] = e.target.value;

    this.setState({
      filters: data,
    });

    setTimeout(() => {
      this.setMaxPage();
      this.resetCheckboxDelete();
    }, 0);
    
  };

  changeValue = (e) => {
    e.preventDefault();
    const data = { ...this.state.form };

    data[e.target.name] = e.target.value;

    this.setState({
      form: data,
    });
  };

  checkAll = (e) => { 
      const checked = this.checkAllRef.current.checked;

      this.state.deleteRef.forEach(checkbox => {
          checkbox.current.checked = checked;
      });

      this.handleChangeDelete();
  };

  handleChangeDelete = (e) => {
    //console.log(e.target.checked);
    
    let countChecked = 0;

    this.deleteIds = []; //reset

    this.state.deleteRef.forEach(checkbox => {
        if (checkbox.current!==null && checkbox.current.checked){
          countChecked++;
          this.deleteIds.push(checkbox.current.value);
        }
    });

    this.deleteCount = countChecked;

    this.deleteCountRef.current.innerText = countChecked;

    if (countChecked>0){
        this.deleteButtonRef.current.classList.remove('disabled');
    }else{
        this.deleteButtonRef.current.classList.add('disabled');
    }

    //X??? l?? t??? ?????ng check all
    
    if (this.checkAllRef.current!==null){
      if (countChecked==this.state.customers.length){
        this.checkAllRef.current.checked = true;
      }else{
        this.checkAllRef.current.checked = false;
      }
    }
   
  }

  resetCheckboxDelete = () => {
    this.checkAllRef.current.checked = false;
    if (this.checkAllRef.current.length){
      this.state.deleteRef.forEach(checkbox => {
          if (checkbox.current!==null){
            checkbox.current.checked = false;
          }
          
      });
    }
    
    this.handleChangeDelete();
  }

  handleDeleteSelection = () => {

    if (this.deleteCount){

      confirmAlert({
        title: "B???n c?? ch???c ch???n mu???n xo???",
        message: "N???u xo?? b???n s??? kh??ng th??? kh??i ph???c",
        buttons: [
          {
            label: "C??",
            onClick: () => {
                if (this.deleteIds.length){
                  this.deleteIds.forEach(id => {
                      this.deleteUser(id);
                  });

                  this.deleteCountRef.current.innerText = 0;
                  this.deleteButtonRef.current.classList.add('disabled');
                }
            },
          },
          {
            label: "Kh??ng",
            onClick: () => {},
          },
        ],
      });
    }
    
  }

  render() {
    return (
      <>
        <div className="container">{this.renderAction()}</div>
        <ToastContainer />
      </>
    );
  }
}