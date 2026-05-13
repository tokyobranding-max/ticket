const fields = {
  eventTitle: document.querySelector("#eventTitle"),
  eventDate: document.querySelector("#eventDate"),
  eventTime: document.querySelector("#eventTime"),
  eventPlace: document.querySelector("#eventPlace"),
  ticketName: document.querySelector("#ticketName"),
  ticketPrice: document.querySelector("#ticketPrice"),
  ticketStock: document.querySelector("#ticketStock"),
  paypayToggle: document.querySelector("#paypayToggle")
};

const preview = {
  title: document.querySelector("#previewTitle"),
  date: document.querySelector("#previewDate"),
  place: document.querySelector("#previewPlace"),
  ticket: document.querySelector("#previewTicket"),
  price: document.querySelector("#previewPrice"),
  stock: document.querySelector("#previewStock"),
  payment: document.querySelector("#previewPayment"),
  buyButton: document.querySelector("#buyButton")
};

function syncPreview() {
  preview.title.textContent = fields.eventTitle.value || "イベント名";
  preview.date.textContent = `${fields.eventDate.value || "開催日"} ${fields.eventTime.value || ""}`.trim();
  preview.place.textContent = fields.eventPlace.value || "会場未定";
  preview.ticket.textContent = fields.ticketName.value || "チケット";
  preview.price.textContent = fields.ticketPrice.value || "0円";
  preview.stock.textContent = fields.ticketStock.value || "残席あり";

  const paypayEnabled = fields.paypayToggle.checked;
  preview.payment.textContent = paypayEnabled ? "PayPay" : "Card";
  preview.buyButton.textContent = paypayEnabled ? "PayPayで申し込む" : "チケットを申し込む";
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", syncPreview);
  field.addEventListener("change", syncPreview);
});

document.querySelectorAll(".step").forEach((step) => {
  step.addEventListener("click", () => {
    document.querySelector(".step.is-active").classList.remove("is-active");
    step.classList.add("is-active");
  });
});

syncPreview();
