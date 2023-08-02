import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    const arrOfObject = [
      {
        id: 1,
        imgURL:
          "https://assets.sangeethamobiles.com/product_img/12398/1676348717_bxy.jpg",
        productName: "Oneplus 7T",
        Price: 28990,
        outOfStock: false,
        ratings: 4.7
      },
      {
        id: 2,
        imgURL:
          "https://assets.sangeethamobiles.com/product_img/6944/1663133831_9ie.jpg",
        productName: "iPhone 14 Pro",
        Price: 129900,
        outOfStock: true,
        ratings: 4.8
      },
      {
        id: 3,
        imgURL:
          "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/8/d/b/-original-imagp9s9wfzp8ghf.jpeg?q=70",
        productName: "realme C55",
        Price: 13999,
        outOfStock: true,
        ratings: 4.4
      },
      {
        id: 4,
        imgURL: "https://assets.sangeethamobiles.com/product_img/3513-2.JPG",
        productName: "Samsung S22 Ultra",
        Price: 64999,
        outOfStock: false,
        ratings: 4.2
      },
      {
        id: 5,
        imgURL: "https://m.media-amazon.com/images/I/61IhQqu+M2L._AC_UY218_.jpg",
        productName: "Nothing",
        Price: 8499,
        outOfStock: true,
        ratings: 3.8
      },
      {
        id: 6,
        imgURL: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/p/s/-original-imaggsuemmztbghp.jpeg?q=70",
        productName: "Google Pixel 7 Pro",
        Price: 70999,
        outOfStock: false,
        ratings: 4.4
      },
      {
        id: 7,
        imgURL: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/k/u/n/-original-imagzjhwtfthcmzz.jpeg?q=70",
        productName: "vivo T2x 5G ",
        Price: 13999,
        outOfStock: true,
        ratings: 4.2
      },
      {
        id: 8,
        imgURL: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/v/c/x/-original-imagqmtffg9sjjp6.jpeg?q=70",
        productName: "Xiaomi 12 Pro 5G ",
        Price: 44999,
        outOfStock: false,
        ratings: 3.2
      },
      {
        id: 9,
        imgURL: "https://rukminim2.flixcart.com/image/312/312/l4ln8nk0/mobile/4/8/h/-original-imagfggrvjdqsrtx.jpeg?q=70",
        productName: "Realme C30 ",
        Price: 6499,
        outOfStock: false,
        ratings: 4.0
      }
    ];
    return (
        <Child sampData={arrOfObject} />
    );
  }
}

export default Parent;
