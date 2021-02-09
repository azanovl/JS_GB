const productCatalog = [{name: 'Computer', price: 1500},
                        {name: 'Mouse', price: 100},
                        {name: 'Keyboard', price: 300},
                        {name: 'Printer', price: 800},
                        {name: 'Scanner', price: 600}];

const basket = {
    goods: [{name: 'Computer',
        price: 1500,
        quantity: 1},
        {name: 'Mouse',
         price: 100,
         quantity: 2},
        {name:'Keyboard',
         price: 300,
         quantity: 3},
        {name: 'Printer',
         price: 800,
         quantity: 1},
        {name: 'Scanner',
         price: 600,
         quantity: 2}
    ],

    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) =>
            totalPrice += cartItem.price * cartItem.quantity, 0);
    },
    countBasketItem() {
        let el = 0;
        for (el; el < this.goods.length; el++) {}
        return el;
    },
    countBasketQuantity() {
        return this.goods.reduce((totalQuantyti, cartItem) =>
            totalQuantyti += cartItem.quantity, 0);
    }
};

// Динамическая верстка каталог товара
const productCatalogTag = document.getElementById('id-catalog');
const h1Tag = document.createElement('h1');
h1Tag.innerText = 'КАТАЛОГ ТОВАРОВ'
productCatalogTag.appendChild(h1Tag);
for (let el in productCatalog) {
    const newEl = document.createElement('ul');
    newEl.innerText = `Наименование: ${productCatalog[el].name}, Цена: ${productCatalog[el].price}`;
    productCatalogTag.appendChild(newEl);
}
// Динамическая верстка корзины
const basketTag = document.getElementById('id-basket');
const h1Tag1 = document.createElement('h1');
h1Tag1.innerText = 'КОРЗИНА'
basketTag.appendChild(h1Tag1);
for (let el in basket.goods) {
    const newEl = document.createElement('ul');
    newEl.innerText = `Наименование: ${basket.goods[el].name}, 
                       Цена: ${basket.goods[el].price}, 
                       Количество: ${basket.goods[el].quantity}, 
                       Сумма: ${basket.goods[el].price * basket.goods[el].quantity}`;
    basketTag.appendChild(newEl);
}
// Итоги корзины
let totalResults = [`Количество наименований товаров: ${basket.countBasketItem()}`,
    `Количество всех товаров: ${basket.countBasketQuantity()}`,
    `Сумма заказа: ${basket.countBasketPrice()}`];

const h3Tag = document.createElement('h3');
h3Tag.innerText = 'ИТОГО ЗАКАЗ:';
h3Tag.style.fontWeight = 'bold';
basketTag.appendChild(h3Tag);
for (let el = 0; el < 3; el++) {
    const newEl = document.createElement('ul');
    newEl.innerText = totalResults[el];
    newEl.style.fontWeight = 'bold';
    basketTag.appendChild(newEl);
}