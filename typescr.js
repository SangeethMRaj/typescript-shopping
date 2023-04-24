function addToCart(productId, quantity, currency) {
    if (currency === void 0) { currency = Currency.USD; }
    var product = getProduct(productId);
    var totalPrice = product.price * quantity;
    var currencySymbol = getCurrencySymbol(currency);
    return {
        product: product,
        quantity: quantity,
        totalPrice: parseFloat(totalPrice.toFixed(2)),
        currency: currencySymbol,
    };
}
var Currency;
(function (Currency) {
    Currency["USD"] = "USD";
    Currency["EUR"] = "EUR";
    Currency["GBP"] = "GBP";
})(Currency || (Currency = {}));
function getProduct(id) {
    // this is where you would typically retrieve the product from a database or API
    // for the sake of this example, we'll just hardcode the product data
    var productData = {
        id: 1,
        name: "T-shirt",
        price: 20,
    };
    return productData;
}
function getCurrencySymbol(currency) {
    if (currency === Currency.USD) {
        return "$";
    }
    else if (currency === Currency.EUR) {
        return "€";
    }
    else if (currency === Currency.GBP) {
        return "£";
    }
    throw new Error("Unsupported currency: ".concat(currency));
}
var product = {
    id: 1,
    name: "T-shirt",
    price: 20,
};
var cartItem = addToCart(product.id, 2, Currency.EUR);
console.log(cartItem);
// Output: { product: { id: 1, name: 'T-shirt', price: 20 }, quantity: 2, totalPrice: '40.00', currency: '€' }
