interface Product {
    id: number;
    name: string;
    price: number;
  }
  type ShoppingCartItem<T>= {
    product: T;
    quantity: number;
    totalPrice: number;
    currency
  };
function addToCart<T extends Product>(
    productId: number,
    quantity: number,
    currency: Currency = Currency.USD
  ): ShoppingCartItem<T> {
    const product = getProduct<T>(productId);
    const totalPrice = product.price * quantity;
    const currencySymbol = getCurrencySymbol(currency);
    return {
      product,
      quantity,
      totalPrice: parseFloat(totalPrice.toFixed(2)),
      currency: currencySymbol,
    };
  }
  enum Currency {
    USD = "USD",
    EUR = "EUR",
    GBP = "GBP",
  }
  function getProduct<T extends Product>(id: number): T {
    // this is where you would typically retrieve the product from a database or API
    // for the sake of this example, we'll just hardcode the product data
    const productData: Product = {
      id: 1,
      name: "T-shirt",
      price: 20,
    };
    return productData as T;
  }
  
  function getCurrencySymbol(currency: Currency): string {
    if (currency === Currency.USD) {
      return "$";
    } else if (currency === Currency.EUR) {
      return "€";
    } else if (currency === Currency.GBP) {
      return "£";
    }
    throw new Error(`Unsupported currency: ${currency}`);
  }

  const product: Product = {
    id: 1,
    name: "T-shirt",
    price: 20,
  };
  
  const cartItem = addToCart(product.id, 2, Currency.EUR);
  console.log(cartItem);
  // Output: { product: { id: 1, name: 'T-shirt', price: 20 }, quantity: 2, totalPrice: '40.00', currency: '€' }
  
  
