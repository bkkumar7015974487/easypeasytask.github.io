const pricingForm = document.getElementById("pricingForm");
const totalPriceEl = document.getElementById("totalPrice");

const prices = {
  1: 10.00,
  2: 18.00,
  3: 24.00
};

pricingForm.unit.forEach = Array.prototype.forEach; // Ensure NodeList gets .forEach

pricingForm.unit.forEach((input) => {
  input.addEventListener("change", () => {
    const selectedValue = pricingForm.unit.value;
    totalPriceEl.textContent = $${prices[selectedValue].toFixed(2)} USD;
  });
});

document.getElementById("addToCart").addEventListener("click", () => {
  alert("Item added to cart!");
});