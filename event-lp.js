const paymentButtons = document.querySelectorAll("[data-payment]");
const heroPayLabel = document.querySelector("#heroPayLabel");
const heroPayButton = document.querySelector("#heroPayButton");

paymentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    paymentButtons.forEach((item) => item.classList.remove("is-active"));
    button.classList.add("is-active");

    const payment = button.dataset.payment;
    heroPayLabel.textContent = payment;
    heroPayButton.textContent = payment === "PayPay" ? "PayPayで申し込む" : `${payment}で申し込む`;
  });
});
