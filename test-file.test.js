function calculateDiscount(price, discountRate) {
    if (typeof price !== 'number' || typeof discountRate !== 'number') return null;
    if (discountRate < 0 || discountRate > 1) return null;
    let newPrice = price * (1 - discountRate);
product-inventory-function    let roundedPrice = Math.round(newPrice * 100) / 100;
    return roundedPrice;
}

function filterProducts(products, callback) {
    if (!Array.isArray(products) || typeof callback !== 'function') return [];
    return products.filter(callback);
}

function sortInventory(inventory, key) {
    if (!Array.isArray(inventory) || typeof key !== 'string') return [];
    return inventory.sort((a, b) => a[key] - b[key]);
}

test("applies a valid discount rate", () => {
    expect(calculateDiscount(100, 0.1)).toBe(90);
});

test("handles an invalid discount rate gracefully", () => {
    expect(calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(calculateDiscount(0, 0.2)).toBe(0);
});