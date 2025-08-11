let subscribeBtn = document.getElementById("subscribeBtn");
let visaBtn = document.getElementById("visaBtn");
let masterBtn = document.getElementById("masterBtn");
let verveBtn = document.getElementById("verveBtn");
let submitBtn = document.getElementById("submitBtn");
let subscribeTxt = document.getElementById("subscribeTxt");
let paymentTxt = document.getElementById("paymentTxt");

submitBtn.onclick = function () {
  if (subscribeBtn.checked) {
    subscribeTxt.textContent = `You have subscribed succesfully`;
  } else {
    subscribeTxt.textContent = `You have NOT subscribed`;
  }
  if (visaBtn.checked) {
    paymentTxt.textContent = `You are paying with visa`;
  } else if (masterBtn.checked) {
    paymentTxt.textContent = `You are paying with MasterCard`;
  } else if (verveBtn.checked) {
    paymentTxt.textContent = `You are paying with verve card`;
  } else {
    paymentTxt.textContent = `No payment option selected`;
  }
};
