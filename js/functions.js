
export function generateCard(name, price, count, img, id, append) {
    const li = document.createElement("li");
    const elementImg = document.createElement("img");
    const divID = document.createElement("div");
    const pTitle = document.createElement("p");
    const pPrice = document.createElement("p");
    const divShopCountContainer = document.createElement("div");
    const buttonUp = document.createElement("button");
    const pCount = document.createElement("p");
    const buttonDown = document.createElement("button");
    const buttonBuy = document.createElement("button");

    elementImg.src = img;
    pTitle.textContent = name;
    pPrice.textContent = price + '$';
    pCount.textContent = count;

    li.classList.add("shop-container");
    divID.id = id;
    pTitle.classList.add("shop-title");
    pPrice.classList.add("shop-price");
    pCount.classList.add("shop-count");

    divID.id = id;
    id++;

    buttonBuy.id = "shop-button-buy";
    buttonBuy.classList.add("shop-button");
    buttonBuy.textContent = "Buy";
    buttonDown.id = "shop-button-down";
    buttonDown.classList.add("shop-button");
    buttonDown.textContent = "-";
    buttonUp.id = "shop-button-up"
    buttonUp.classList.add("shop-button");;
    buttonUp.textContent = "+";

    divID.appendChild(pTitle);
    divID.appendChild(pPrice);
    divShopCountContainer.appendChild(buttonUp);
    divShopCountContainer.appendChild(pCount);
    divShopCountContainer.appendChild(buttonDown);
    divID.appendChild(divShopCountContainer);
    divID.appendChild(buttonBuy);

    li.appendChild(elementImg);
    li.appendChild(divID);
    append.appendChild(li);
}