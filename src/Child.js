import React, { Component } from "react";
import "./img/download.png";
import "./Child.css";

export class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sampData: this.props.sampData,
    };
    // console.log(this.state.sampData)
  }

  updateData(e, index) {
    // console.log(id);
    let value = Math.floor(e.Price / 2); //4=2
    // console.log(value);
    let rateDivideTemp = [...this.state.sampData];
    // console.log(rateDivideTemp);
    // let rateDivideFilter = rateDivideTemp.filter((e)=> e.id == id)
    let tempindex = index;
    //  console.log(tempindex);
    let tempData = rateDivideTemp[tempindex];
    tempData.Price = value;
    // console.log(tempData);
    // console.log(rateDivideTemp);
    this.setState({
      sampData: rateDivideTemp,
    });
  }

  // Remove Details Function

  removeDetails = (id) => {
    // console.log(i)
    // console.log(id)
    let temmp = [...this.state.sampData];
    // console.log(temmp)
    let filterr = temmp.filter((e) => e.id !== id);
    // console.log(filterr)
    this.setState({
      sampData: filterr,
    });
  };

  priceHtL = () => {
    const sortPrice = this.state.sampData
      .slice()
      .sort((a, b) => b.Price - a.Price);
    this.setState({
      sampData: sortPrice,
    });
  };
  priceLtH = () => {
    const sortPrice = this.state.sampData
      .slice()
      .sort((a, b) => a.Price - b.Price);
    this.setState({
      sampData: sortPrice,
    });
  };
  ratingsHtL = () => {
    const sortratings = this.state.sampData
      .slice()
      .sort((a, b) => b.ratings - a.ratings);
    this.setState({
      sampData: sortratings,
    });
  };
  ratingsLtH = () => {
    const sortratings = this.state.sampData.sort(
      (a, b) => a.ratings - b.ratings
    );
    this.setState({
      sampData: sortratings,
    });
  };

  // Handle Stock Filter
  handleStockFilter = (e) => {
    console.log(e);
    const inStockFilter = this.state.sampData.filter(
      (sampDataItems) => sampDataItems.outOfStock === e
    );
    console.log(inStockFilter);
    this.setState({
      sampData: e ? inStockFilter : this.props.sampData,
    });
    console.log(this.state.sampData);
  };
  // Handle out of Stock Filter
  handleoutofStockFilter = (e) => { 
    const outofStockFilter = this.state.sampData.filter(
      (sampDataItems) => sampDataItems.outOfStock !== e
    );
    this.setState({
      sampData: e ? outofStockFilter : this.props.sampData ,
    });
  };
  render() {
    const img =
      "https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg";
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-success">
          <div className="container">
            <a className="navbar-brand" href="#">
              <i class="bi bi-apple"></i>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search Your Products"
                  aria-label="Search"
                />
                <button className="btn btn-outline-warning" type="submit">
                  Search
                </button>
              </form>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      this.priceHtL();
                    }}
                  >
                    Price: High-Low
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      this.priceLtH();
                    }}
                  >
                    Price: Low-High
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      this.ratingsHtL();
                    }}
                  >
                    Ratings: High-Low
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="#"
                    onClick={() => {
                      this.ratingsLtH();
                    }}
                  >
                    Ratings: Low-High
                  </a>
                </li>
                <li className="nav-item">
                  <form>
                    <a href="#" className="nav-link">
                      <input
                        type="checkbox"
                        className="checkbox"
                        name=""
                        id="instock"
                        onChange={(e) =>
                          this.handleStockFilter(e.target.checked)
                        }
                      />
                      <label htmlFor="instock">in Stock</label>
                      <input
                        type="checkbox"
                        className="checkbox"
                        name=""
                        id="outofstock"
                        onClick={(e) => this.handleoutofStockFilter(e.target.checked)}
                      />
                      <label htmlFor="outofstock">Out of Stock</label>
                    </a>
                  </form>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="App">
          {this.state.sampData.map((e, index) => {
            return (
              <div className="card" key={index}>
                <img src={e.imgURL} alt="" />
                <div className="Content">
                  <p>
                    <b>Product Name: </b>
                    {e.productName}
                  </p>
                  <p>
                    <b>Product Price: </b> {e.Price}
                  </p>
                  <div className="card-update-btn">
                    <button onClick={() => this.updateData(e, index)}>
                      Update Price
                    </button>
                  </div>
                  <p>
                    <b>Product Stock: </b>{" "}
                    <span className="stockColor">
                      {e.outOfStock ? "in Stock" : "Out of Stock"}
                    </span>
                  </p>
                  <p>
                    <b>Ratings:</b>
                    <span className="rateColor">
                      <i className="bi bi-star-fill"></i> {e.ratings}
                    </span>
                  </p>
                  <div className="card-update-btn1">
                    <button onClick={() => this.removeDetails(e.id)}>
                      Remove Details
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Child;
