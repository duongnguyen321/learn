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
              Trước
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
      errors.name.required = "Vui lòng nhập tên";
    } else if (name.length < 5) {
      errors.name.min = "Tên phải từ 5 ký tự trở lên";
    }
    if (email === "") {
      errors.email.required = "Vui lòng nhập email";
    } else if (!this.isEmail(email)) {
      errors.email.email = "Vui lòng nhập email hợp lệ";
    }
    if (phone === "") {
      errors.phone.required = "Vui lòng nhập số điện thoại";
    } else if (!this.isPhone(phone)) {
      errors.phone.phone = "Vui lòng nhập số điện thoại hợp lệ";
    }
    if (status !== 0 && status !== 1) {
      errors.status.required = "Trạng thái không hợp lệ";
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
              toast.success("Thêm khách hàng thành công");
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
              toast.warning("Sửa khách hàng thành công");
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
        title: "Con phơm tu đe le te?",
        message: "Đu diu woăn tu đu dít",
        buttons: [
          {
            label: "yé",
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
            label: "nô",
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
        Xoá đã chọn (<span ref={this.deleteCountRef}>0</span>)
      </button>
    );
  };
  handleDeleteCustomer = (id) => {
    confirmAlert({
      title: "Con phơm tu đe le te",
      message: "a diu xua tu đu dít ?",
      buttons: [
        {
          label: "Yé",
          onClick: () => {
            this.client
              .delete(this.customerApi, id)
              .then((response) => response.json())
              .then((response) => {
                if (response !== "") {
                  toast.error("Xóa khách hàng thành công");
                  this.getCustomers();
                }
              });
          },
        },
        {
          label: "Nâu",
          onClick: () => {
            toast.warning("Đã hủy xóa khách hàng");
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
          toast.error("Xóa khách hàng thành công");
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
          Kích hoạt
        </button>
      ) : (
        <button type="button" className="btn btn-danger">
          Chưa kích hoạt
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
          Sửa
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
          Xoá
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
        <h1 className="page-title">Danh sách khách hàng</h1>
        <button
          type={"button"}
          className="btn btn-primary"
          onClick={this.openModalAdd}
        >
          Thêm mới
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
                <option value={"all"}>Tất cả trạng thái</option>
                <option value={"active"}>Kích hoạt</option>
                <option value={"inactive"}>Chưa kích hoạt</option>
              </select>
            </div>
            <div className="col-7">
              <input
                type={"search"}
                name="keyword"
                className="form-control"
                placeholder="Từ khoá tìm kiếm..."
                onChange={this.handleChange}
              />
            </div>
            <div className="col-2 d-grid">
              <button type="submit" className="btn btn-primary">
                Tìm kiếm
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
              <th>Tên</th>
              <th>Email</th>
              <th>Điện thoại</th>
              <th>Trạng thái</th>
              <th width="5%">Sửa</th>
              <th width="5%">Xoá</th>
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
              <Modal.Title>Thêm khách hàng</Modal.Title>
              <button
                type="button"
                className="btn-close"
                onClick={this.closeModalAdd}
              ></button>
            </Modal.Header>
            <Modal.Body>
              {this.isErrors(errors) ? (
                <div className="alert alert-danger text-center">
                  Vui lòng kiểm tra dữ liệu bên dưới
                </div>
              ) : null}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  this.handleSubmit();
                }}
              >
                <div className="mb-3">
                  <label>Tên</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.getError("name") ? "is-invalid" : ""
                    }`}
                    name="name"
                    placeholder="Tên... "
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
                  <label>Điện thoại</label>
                  <input
                    type="text"
                    className={`form-control ${
                      this.getError("phone") ? "is-invalid" : ""
                    }`}
                    name="phone"
                    placeholder="Điện thoại... "
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
                  <label>Trạng thái</label>
                  <select
                    name="status"
                    className={`form-select ${
                      this.getError("status") ? "is-invalid" : ""
                    }`}
                    onChange={this.handleChangeFormAdd}
                    value={status}
                  >
                    <option value="0">Chưa kích hoạt</option>
                    <option value="1">Kích hoạt</option>
                  </select>
                  {this.getError("status") ? (
                    <div className="invalid-feedback">
                      {this.getError("status")}
                    </div>
                  ) : null}
                </div>
                <button type="submit" className="btn btn-primary me-3">
                  Lưu
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
                    Lưu & Thêm
                  </button>
                ) : null}
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={this.closeModalAdd}
                >
                  Đóng
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
