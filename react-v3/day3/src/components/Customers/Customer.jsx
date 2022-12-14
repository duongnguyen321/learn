import React, { Component } from "react";
import config from "../config.json";
import HttpClient from "../HttpClient";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
export class Customer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      filters: {
        status: "all",
        keyword: "",
      },
      paginate: {
        currentPage: 1,
        totalPage: 0,
      },
      modal: {
        isShow: false,
      },
      form: {
        name: "",
        email: "",
        phone: "",
        status: 0,
      },
      errors: {
        name: {},
        email: {},
        phone: {},
        status: {},
      },
      currentId: 0,
      deleteRef: [],
    };
    this.customerApi = config.SERVER_API + "/customers";
    this.perPage = config.PER_PAGE;
    this.client = new HttpClient();
    this.deleteButtonRef = React.createRef();
    this.deleteCountRef = React.createRef();
    this.checkAllRef = React.createRef();
    this.deleteCount = 0;
    this.deleteIds = [];
  }
  componentDidMount = () => {
    const filtersObj = this.getFilterObj();
    this.getCustomers(filtersObj);
  };
  componentDidUpdate = (prevProps, prevState) => {
    const { currentPage: prevCurrentPage } = prevState.paginate;
    const { currentPage } = this.state.paginate;
    if (currentPage !== prevCurrentPage) {
      const filtersObj = this.getFilterObj();
      this.getCustomers(filtersObj);
    }
  };
  getCustomers = async (filters = {}) => {
    const { currentPage } = this.state.paginate;
    let searchApi = `${this.customerApi}?_page=${currentPage}&_limit=${this.perPage}&_sort=id&_order=desc`;
    if (Object.keys(filters).length) {
      const params = new URLSearchParams(filters).toString();
      searchApi = `${this.customerApi}?_page=${currentPage}&_limit=${this.perPage}&${params}&_sort=id&_order=desc`;
    }
    const clientResult = await this.client.get(searchApi);
    const totalCount = clientResult.headers.get("x-total-count");
    const totalPage = Math.ceil(totalCount / this.perPage);
    const paginate = { ...this.state.paginate };
    paginate.totalPage = totalPage;
    clientResult.json().then((customers) => {
      const deleteRef = [];
      this.state.customers.forEach((customers) => {
        deleteRef.push(React.createRef());
        this.setState({
          deleteRef: deleteRef,
        });
      });
      this.setState({
        customers: customers,
        paginate: paginate,
      });
    });
  };
  renderPaginate = () => {
    const { totalPage, currentPage } = this.state.paginate;
    let pageItemJsx = [];
    for (let i = 1; i <= totalPage; i++) {
      pageItemJsx.push(
        <li
          key={i}
          className={`page-item${currentPage === i ? " active" : null}`}
        >
          <button
            type={"button"}
            className="page-link"
            onClick={(e) => {
              e.preventDefault();
              this.goPaginate(i);
            }}
          >
            {i}
          </button>
        </li>
      );
    }
    const prevPageDisable = { disabled: currentPage > 1 ? false : true };
    const nextPageDisable = {
      disabled: currentPage < totalPage ? false : true,
    };
    const jsx = (
      <nav className="d-flex justify-content-end">
        <ul className="pagination">
          <li className="page-item">
            <button
              type={"button"}
              className="btn btn-primary"
              {...prevPageDisable}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage > 1) {
                  this.goPaginate(currentPage - 1);
                }
              }}
            >
              Tr?????c
            </button>
          </li>
          {pageItemJsx}
          <li className="page-item">
            <button
              type={"button"}
              className="btn btn-primary"
              {...nextPageDisable}
              onClick={(e) => {
                e.preventDefault();
                if (currentPage < totalPage) {
                  this.goPaginate(currentPage + 1);
                }
              }}
            >
              Sau
            </button>
          </li>
        </ul>
      </nav>
    );
    return jsx;
  };
  updateCurrentPage = (paginate) => {
    this.setState({
      paginate: paginate,
    });
  };
  goPaginate = (page) => {
    const paginate = { ...this.state.paginate };
    paginate.currentPage = page;
    this.setState({
      paginate: paginate,
    });
    this.checkAllRef.current.checked = false;
    this.deleteCountRef.current.innerText = 0;
    this.deleteButtonRef.current.classList.add("disabled");
  };
  getFilterObj = () => {
    const { filters } = this.state;
    let { status, keyword } = filters;
    const filtersObj = {};
    if (status === "active" || status === "inactive") {
      status = status === "active" ? 1 : 0;
      filtersObj.status = status;
    }
    if (keyword !== "") {
      filtersObj.q = keyword;
    }
    return filtersObj;
  };
  isEmail = (email) => {
    const pattern = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
    return pattern.test(email);
  };
  isPhone = (phone) => {
    const pattern = /^(0|\+84)\d{9}$/;
    return pattern.test(phone);
  };
  handleFilter = (e) => {
    e.preventDefault();
    const filtersObj = this.getFilterObj();
    this.getCustomers(filtersObj);
  };
  handleChange = (e) => {
    const filters = { ...this.state.filters };
    filters[e.target.name] = e.target.value;
    this.setState({
      filters: filters,
    });
  };
  openModalAdd = () => {
    const modal = { ...this.state.modal };
    modal.isShow = true;
    this.resetForm();
    this.setState({ modal: modal, currentId: 0 });
  };
  closeModalAdd = () => {
    const modal = { ...this.state.modal };
    modal.isShow = false;
    this.setState({ modal: modal });
  };
  handleSubmit = (isAdd = false) => {
    let { name, email, phone, status } = this.state.form;
    status = parseInt(status);
    const errors = {
      name: {},
      email: {},
      phone: {},
      status: {},
    };
    if (name === "") {
      errors.name.required = "Vui l??ng nh???p t??n";
    } else if (name.length < 5) {
      errors.name.min = "T??n ph???i t??? 5 k?? t??? tr??? l??n";
    }
    if (email === "") {
      errors.email.required = "Vui l??ng nh???p email";
    } else if (!this.isEmail(email)) {
      errors.email.email = "Vui l??ng nh???p email h???p l???";
    }
    if (phone === "") {
      errors.phone.required = "Vui l??ng nh???p s??? ??i???n tho???i";
    } else if (!this.isPhone(phone)) {
      errors.phone.phone = "Vui l??ng nh???p s??? ??i???n tho???i h???p l???";
    }
    if (status !== 0 && status !== 1) {
      errors.status.required = "Tr???ng th??i kh??ng h???p l???";
    }
    this.setState({
      errors: errors,
    });
    if (!this.isErrors(errors)) {
      if (this.state.currentId === 0) {
        this.client
          .post(this.customerApi, {
            name,
            email,
            phone,
            status,
          })
          .then((response) => response.json())
          .then((response) => {
            if (response !== "") {
              toast.success("Th??m kh??ch h??ng th??nh c??ng");
              const filtersObj = this.getFilterObj();
              this.getCustomers(filtersObj);
              if (!isAdd) {
                this.closeModalAdd();
              }
            }
          });
      } else {
        this.client
          .put(
            this.customerApi,
            {
              name,
              email,
              phone,
              status,
            },
            this.state.currentId
          )
          .then((response) => response.json())
          .then((response) => {
            if (response !== "") {
              toast.warning("S???a kh??ch h??ng th??nh c??ng");
              this.resetForm();
              this.getCustomers();
              this.closeModalAdd();
            }
          });
      }
    }
  };
  getError = (fieldName) => {
    const { errors } = this.state;
    const error = errors[fieldName];
    const keys = Object.keys(error);
    return error[keys[0]];
  };
  isErrors = (errors) => {
    const keys = Object.keys(errors);
    if (keys.length) {
      const check = keys.some((key) => {
        return Object.keys(errors[key]).length > 0;
      });
      return check;
    }
    return false;
  };
  resetForm = () => {
    this.setState({
      form: {
        name: "",
        email: "",
        phone: "",
        status: 0,
      },
    });
  };
  handleChangeFormAdd = (e) => {
    const data = { ...this.state.form };
    data[e.target.name] = e.target.value;
    this.setState({
      form: data,
    });
  };
  handleKeyboardSave = (e) => {
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 114:
        this.handleSubmit();
        break;
      case 115:
        this.handleSubmit(true);
        break;
      default:
        break;
    }
  };
  handleGetCustomer = (customerId) => {
    const customerDetailApi = this.customerApi + "/" + customerId;
    this.client
      .get(customerDetailApi)
      .then((response) => response.json())
      .then((customer) => {
        this.openModalAdd();
        this.setState({
          form: customer,
          currentId: customerId,
        });
      });
  };
  checkAll = () => {
    const checked = this.checkAllRef.current.checked;
    this.state.deleteRef.forEach((checkbox) => {
      checkbox.current.checked = checked;
    });
    this.handleChangeDelete();
  };
  handleChangeDelete = () => {
    let countChecked = 0;
    this.deleteIds = [];
    this.state.deleteRef.forEach((checkbox) => {
      if (checkbox.current !== null && checkbox.current.checked) {
        countChecked++;
        this.deleteIds.push(checkbox.current.value);
      }
    });
    this.deleteCount = countChecked;
    this.deleteCountRef.current.innerText = countChecked;
    if (countChecked > 0) {
      this.deleteButtonRef.current.classList.remove("disabled");
    } else {
      this.deleteButtonRef.current.classList.add("disabled");
    }
    if (this.checkAllRef.current !== null) {
      if (countChecked === this.state.customers.length) {
        this.checkAllRef.current.checked = true;
      } else {
        this.checkAllRef.current.checked = false;
      }
    }
  };
  resetCheckboxDelete = () => {
    this.checkAllRef.current.checked = false;
    if (this.checkAllRef.current.length) {
      this.state.deleteRef.forEach((checkbox) => {
        if (checkbox.current !== null) {
          checkbox.current.checked = false;
        }
      });
    }

    this.handleChangeDelete();
  };
  handleDeleteSelection = () => {
    if (this.deleteCount) {
      confirmAlert({
        title: "Con ph??m tu ??e le te?",
        message: "??u diu wo??n tu ??u d??t",
        buttons: [
          {
            label: "y??",
            onClick: () => {
              if (this.deleteIds.length) {
                this.deleteIds.forEach((id) => {
                  this.handleDeleteAllCustomer(id);
                });
                this.checkAllRef.current.checked = false;
                this.deleteCountRef.current.innerText = 0;
                this.deleteButtonRef.current.classList.add("disabled");
              }
            },
          },
          {
            label: "n??",
            onClick: () => {},
          },
        ],
      });
    }
  };
  deleteAllBtn = () => {
    return (
      <button
        type="button"
        ref={this.deleteButtonRef}
        className="btn btn-danger disabled"
        onClick={this.handleDeleteSelection}
      >
        Xo?? ???? ch???n (<span ref={this.deleteCountRef}>0</span>)
      </button>
    );
  };
  handleDeleteCustomer = (id) => {
    confirmAlert({
      title: "Con ph??m tu ??e le te",
      message: "a diu xua tu ??u d??t ?",
      buttons: [
        {
          label: "Y??",
          onClick: () => {
            this.client
              .delete(this.customerApi, id)
              .then((response) => response.json())
              .then((response) => {
                if (response !== "") {
                  toast.error("X??a kh??ch h??ng th??nh c??ng");
                  this.getCustomers();
                }
              });
          },
        },
        {
          label: "N??u",
          onClick: () => {
            toast.warning("???? h???y x??a kh??ch h??ng");
          },
        },
      ],
    });
  };
  handleDeleteAllCustomer = (id) => {
    this.client
      .delete(this.customerApi, id)
      .then((response) => response.json())
      .then((response) => {
        if (response !== "") {
          toast.error("X??a kh??ch h??ng th??nh c??ng");
          this.getCustomers();
        }
      });
  };
  render() {
    const { customers, modal, form, errors, currentId } = this.state;
    const { name, email, phone, status } = form;
    const jsx = customers.map(({ id, name, email, phone, status }, index) => {
      const statusBtn = status ? (
        <button type="button" className="btn btn-success">
          K??ch ho???t
        </button>
      ) : (
        <button type="button" className="btn btn-danger">
          Ch??a k??ch ho???t
        </button>
      );
      const editBtn = (
        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            this.handleGetCustomer(id);
          }}
          className="btn btn-warning"
        >
          S???a
        </button>
      );
      const deleteBtn = (
        <button
          type={"button"}
          onClick={(e) => {
            e.preventDefault();
            this.handleDeleteCustomer(id);
          }}
          className="btn btn-danger"
        >
          Xo??
        </button>
      );
      return (
        <tr key={id}>
          <td>
            <input
              type="checkbox"
              className="form-check-input"
              value={id}
              key={this.state.checkAll}
              defaultChecked={this.state.checkAll}
              onClick={this.handleChangeDelete}
              ref={this.state.deleteRef[index]}
            />
          </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phone}</td>
          <td>{statusBtn}</td>
          <td>{editBtn}</td>
          <td>{deleteBtn}</td>
        </tr>
      );
    });
    return (
      <div className="container">
        <h1 className="page-title">Danh s??ch kh??ch h??ng</h1>
        <button
          type={"button"}
          className="btn btn-primary"
          onClick={this.openModalAdd}
        >
          Th??m m???i
        </button>
        <hr />
        <form onSubmit={this.handleFilter}>
          <div className="row">
            <div className="col-3">
              <select
                name="status"
                onChange={this.handleChange}
                className="form-select"
              >
                <option value={"all"}>T???t c??? tr???ng th??i</option>
                <option value={"active"}>K??ch ho???t</option>
                <option value={"inactive"}>Ch??a k??ch ho???t</option>
              </select>
            </div>
            <div className="col-7">
              <input
                type={"search"}
                name="keyword"
                className="form-control"
                placeholder="T??? kho?? t??m ki???m..."
                onChange={this.handleChange}
              />
            </div>
            <div className="col-2 d-grid">
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
                  className="form-check-input"
                  onChange={this.checkAll}
                  ref={this.checkAllRef}
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

          <tbody>{jsx}</tbody>
        </table>
        {this.deleteAllBtn()}
        {this.renderPaginate()}
        <div onKeyUp={this.handleKeyboardSave}>
          <Modal
            show={modal.isShow}
            animation={true}
            onEscapeKeyDown={this.closeModalAdd}
          >
            <Modal.Header>
              <Modal.Title>Th??m kh??ch h??ng</Modal.Title>
              <button
                type="button"
                className="btn-close"
                onClick={this.closeModalAdd}
              ></button>
            </Modal.Header>
            <Modal.Body>
              {this.isErrors(errors) ? (
                <div className="alert alert-danger text-center">
                  Vui l??ng ki???m tra d??? li???u b??n d?????i
                </div>
              ) : null}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.handleSubmit();
                }}
              >
                <div className="mb-3">
                  <label>T??n</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.getError("name") ? "is-invalid" : ""
                    }`}
                    name="name"
                    placeholder="T??n... "
                    onChange={this.handleChangeFormAdd}
                    value={name}
                  />
                  {this.getError("name") ? (
                    <div className="invalid-feedback">
                      {this.getError("name")}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>Email</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.getError("email") ? "is-invalid" : ""
                    }`}
                    name="email"
                    placeholder="Email... "
                    onChange={this.handleChangeFormAdd}
                    value={email}
                  />
                  {this.getError("email") ? (
                    <div className="invalid-feedback">
                      {this.getError("email")}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>??i???n tho???i</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.getError("phone") ? "is-invalid" : ""
                    }`}
                    name="phone"
                    placeholder="??i???n tho???i... "
                    onChange={this.handleChangeFormAdd}
                    value={phone}
                  />
                  {this.getError("phone") ? (
                    <div className="invalid-feedback">
                      {this.getError("phone")}
                    </div>
                  ) : null}
                </div>
                <div className="mb-3">
                  <label>Tr???ng th??i</label>
                  <select
                    name="status"
                    className={`form-select ${
                      this.getError("status") ? "is-invalid" : ""
                    }`}
                    onChange={this.handleChangeFormAdd}
                    value={status}
                  >
                    <option value="0">Ch??a k??ch ho???t</option>
                    <option value="1">K??ch ho???t</option>
                  </select>
                  {this.getError("status") ? (
                    <div className="invalid-feedback">
                      {this.getError("status")}
                    </div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-primary me-3">
                  L??u
                </button>
                {currentId === 0 ? (
                  <button
                    type="submit"
                    className="btn btn-primary me-3"
                    onClick={(e) => {
                      e.preventDefault();
                      this.handleSubmit(true);
                    }}
                  >
                    L??u & Th??m
                  </button>
                ) : null}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.closeModalAdd}
                >
                  ????ng
                </button>
              </form>
            </Modal.Body>
          </Modal>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default Customer;
