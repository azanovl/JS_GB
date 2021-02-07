const basket = {
    goods: [{
        name: 'computer',
        price: 1500,
        quantity: 1
    },
        {name: 'mouse',
        price: 100,
        quantity: 2
    },
        {name:'keyboard',
        price: 300,
        quantity: 3
    },
        {name: 'printer',
        price: 800,
        quantity: 1
    },
        {name: 'scanner',
        price: 600,
        quantity: 2
    }
    ],
    countBasketPrice() {
        return this.goods.reduce((totalPrice, cartItem) =>
            totalPrice += cartItem.price * cartItem.quantity, 0);
    }
};
console.log(basket.countBasketPrice());
