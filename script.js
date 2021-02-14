'use strict'

const productCatalog = {
    catalogCart: null,
    basket: null,
    goods: [
        {
            id_product: 111,
            name: 'Computer',
            price: 1500
        },
        {
            id_product: 112,
            name: 'Mouse',
            price: 100
        },
        {
            id_product: 113,
            name: 'Keyboard',
            price: 300
        },
        {
            id_product: 114,
            name: 'Printer',
            price: 800
        },
        {
            id_product: 115,
            name: 'Scanner',
            price: 600
        }
    ],

    init(catalogCartClass, basket) {
        this.catalogCart = document.querySelector(`.${catalogCartClass}`);
        this.basket = basket;
        this.render();
        this.addEventHandlers();
    },

    render() {
        if (this.goods.length > 0) {
            this.renderCatalogList();
        } else {
            this.renderEmptyCatalog();
        }
    },

    addEventHandlers() {
        this.catalogCart.addEventListener('click', event => this.addToBasket(event));
    },
    addToBasket(event) {
        if (!event.target.classList.contains('productAddToCart')) return;
        const id_product = +event.target.dataset.id_product;
        this.basket.addToBasket(id_product);
    },

    renderCatalogList() {
        this.catalogCart.innerHTML = '';
        this.goods.forEach(item => {
            this.catalogCart.insertAdjacentHTML("beforeend", this.renderCatalogItem(item));
        })
    },

    renderCatalogItem(item) {
        return `<div class='product' style="background-color: darkgrey">
                <h3>Наименование: ${item.name}</h3>
                <p>Цена: ${item.price}</p>
                <button class='productAddToCart' data-id_product="${item.id_product}">В корзину</button>
            </div>`
    },

    renderEmptyCatalog () {
        this.catalogCart.innerHTML = '';
        this.catalogCart.insertAdjacentHTML("beforeend", 'Каталог товаров пуст.');
    },

};

const basket = {
    cartBlock: null,
    clrCarButton: null,
    totals: null,
    catalogList: [],
    goods: [
        {
            id_product: 111,
            name: 'Computer',
            price: 1500,
            quantity: 2,
        },
    ],

    init(cartBlockClass, clrCartButton, catalogList, total) {
        this.cartBlock = document.querySelector(`.${cartBlockClass}`);
        this.clrCartButton = document.querySelector(`.${clrCartButton}`);
        this.totals = document.querySelector(`.${total}`);
        this.catalogList = catalogList;

        this.addEventHandlers();
        this.render();
        },

    totalSum() {
        let countItems = this.goods.length;
        let countSum = 0;
        let countQuantity = 0;
        this.goods.forEach(item => countSum += (item.price * item.quantity));
        this.goods.forEach(item => countQuantity += item.quantity);
        return `<div>
                <p>Количество наименований товаров: ${countItems}</p>
                <p>Количество единиц товаров: ${countQuantity}</p>
                <p>Общая сумма заказа: ${countSum}</p>
             </div>`;

    },

    renderTotal() {
        this.totals.innerHTML = '';
        this.totals.insertAdjacentHTML("beforeend", this.totalSum());
    },

    addEventHandlers() {
        this.clrCartButton.addEventListener('click', this.dropCart.bind(this));
    },

    dropCart() {
        this.goods = [];
        this.render();
        },

    render() {
    if (this.goods.length > 0) {
        this.renderCartList();
    } else {
        this.renderEmptyCart();
        }
    this.renderTotal();
    },

    renderEmptyCart() {
        this.cartBlock.innerHTML = '';
        this.cartBlock.insertAdjacentHTML('beforeend', 'Корзина пуста.');
        this.totals.innerHTML = '';
    },


    findProductInCatalog(id_product){
        return this.catalogList.find(product => product.id_product === id_product);
    },

    addToBasket(id_product) {
        const product = this.findProductInCatalog(id_product);

        if (product) {
            const findInBasket = this.goods.find(({id_product}) => product.id_product === id_product);
            if (findInBasket) {
                findInBasket.quantity++;
            } else {
                this.goods.push({...product, quantity: 1});
            }
            this.render();
        } else {
            alert('Ошибка добавления!');
        }
    },

    renderCartList() {
        this.cartBlock.innerHTML = '';
        this.totals.innerHTML = '';
        this.goods.forEach(item =>
            this.cartBlock.insertAdjacentHTML("beforeend", this.renderCartItem(item)));
            this.totals.innerHTML = this.renderTotal();
    },

    renderCartItem(item) {
        return `<div>
                <h3>Наименование: ${item.name}</h3>
                <p>Цена: ${item.price}</p>
                <p>Количество: ${item.quantity}</p>
                </div>`
      },

};

productCatalog.init('catalog', basket);
basket.init('basket', 'clr-cart', productCatalog.goods, 'total');













