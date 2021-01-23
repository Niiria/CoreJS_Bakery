import { generateCard } from "./js/functions.js";

const HEADER_PRICE = document.querySelector("#header-price");
const NAV_INPUT = document.querySelector("#nav-input");

let totalAmount = 0;
let totalItems = 0;

const SHOP_UL = document.querySelector("#shop-ul");
const SHOP_TITLE = document.querySelectorAll(".shop-title");
const SHOP_PRICE = document.querySelectorAll(".shop-price");
const SHOP_COUNT = document.querySelectorAll(".shop-count");



class Shop {
    constructor() {
        this.productList = [];
    }

    createProduct(name, price, count) {
        const product = { name: name, price: price, count: count };
        this.productList.push(product);
        this.id++;
    }

    generateCard(id) {
        generateCard(this.productList[id].name, this.productList[id].price, this.productList[id].count, imgList[id], id, document.querySelector("#shop-ul"));
    }

    getProductList() {
        return this.productList;
    }

    getCount(id) {
        return this.productList[id].count;
    }

    setCount(count, id) {
        this.productList[id].count = count;
        let shopCount = document.querySelectorAll(".shop-count");
        shopCount[id].textContent = count;
    }

    getPrice(id) {
        return this.productList[id].price;
    }

}

const breads = [
    { name: "Chleb", price: 1, count: 1 },
    { name: "Bulka", price: 2, count: 1 },
    { name: "Ciastko", price: 3, count: 1 },
    { name: "Bulka duza", price: 4, count: 1 },
    { name: "Mufinka", price: 5, count: 1 }
]

const imgList = ["../src/img/milk-bread.jpg", "../src/img/Bulka.jpg", "../src/img/milk-bread.jpg", "../src/img/milk-bread.jpg", "../src/img/milk-bread.jpg", "../src/img/milk-bread.jpg"]

const shop = new Shop();

breads.forEach(element => {
    shop.createProduct(element.name, element.price, element.count)
});

shop.getProductList().forEach(element => {
    shop.generateCard(totalItems)
    totalItems++;
});

SHOP_UL.addEventListener("click", function (event) {

    if (event.target.id === "shop-button-up") {
        const ID = event.target.parentElement.parentElement.id;
        let count = shop.getCount(ID);
        count++;
        shop.setCount(count, ID);
    }
    if (event.target.id === "shop-button-down") {
        const ID = event.target.parentElement.parentElement.id;
        let count = shop.getCount(ID);
        if (count > 0) {
            count--;
            shop.setCount(count, ID);
        }
    }
    if (event.target.id === "shop-button-buy") {
        const ID = event.target.parentElement.id;
        totalAmount += shop.getPrice(ID) * shop.getCount(ID);
        shop.setCount(1, ID);
        HEADER_PRICE.textContent = totalAmount;
    }
});

NAV_INPUT.addEventListener("keyup", event => {
    const searchText = event.target.value.toLowerCase();
    const ulArray = document.querySelectorAll(".shop-container")
    shop.getProductList().forEach((element, index) => {
        if (element.name.toLowerCase().indexOf(searchText) != -1) {
            ulArray[index].style.display = 'flex';
        }
        else
            ulArray[index].style.display = 'none';
    });
}
);
