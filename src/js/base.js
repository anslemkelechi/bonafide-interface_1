export const domElement = {
  body: document.getElementById("body"),
  preloader: document.querySelector(".preloader"),
  alert: document.querySelector(".alert"),
  errorMsg: document.getElementById("message"),
  closeMsg: document.querySelector(".close-msg"),
  dropdownIcon: document.querySelectorAll(".half-gradient"),
  dropdownContent: document.querySelectorAll(".dropdown-content"),
  cryptoImg: document.querySelectorAll(".crypto-img img"),
  cryptoName: document.querySelectorAll(".crypto-icon"),
  dropdownItem: document.querySelectorAll(".dropdown-item"),
  dropdownImg: document.querySelectorAll(".dropdown-img img"),
  dropdownNetwork: document.querySelectorAll(".dropdown-network"),
  convertDropdown: document.querySelector(".crypto-drop"),
  convertDropdownContent: document.querySelector(".crypt-content"),
  cryptImg: document.querySelector(".crypto-logo img"),
  cryptName: document.querySelector(".crypto-name"),
  cryptItem: document.querySelectorAll(".crypt-item"),
  cryptoDropdownImg: document.querySelectorAll(".crypt-img img"),
  cryptoDropdownNetwork: document.querySelectorAll(".crypt-network"),
  fiatdropdown: document.querySelector(".fiat-drop"),
  fiatdropdownContent: document.querySelector(".fiat-content"),
  fiatImg: document.querySelector(".fiat-logo img"),
  fiatName: document.querySelector(".fiat-name"),
  fiatItem: document.querySelectorAll(".fiat-item"),
  fiatDropdownImg: document.querySelectorAll(".fiat-img img"),
  fiatDropdownNetwork: document.querySelectorAll(".fiat-network"),
  fiatAccount: document.querySelectorAll("#fiat-account"),
  continueBtn: document.querySelector("#pop-form span"),
  tranHistoryB: document.querySelector(".tran-history_B"),
  portfolioBox: document.getElementById("portfolio"),
  form: document.getElementById("form"),
  formBox: document.getElementById("sending"),
  goBackBtn: document.getElementById("go-back"),
  goBackBtn2: document.getElementById("go-back2"),
  goBackBtn3: document.getElementById("go-back3"),
  loadConfirmation: document.getElementById("load-confirm"),
  tranHistory: document.querySelector(".tran-history"),
  tranOverlay: document.querySelector(".tran-overlay"),
  tranConfirmBox: document.querySelector(".tran-confirm"),
  tranReceiptBox: document.querySelector(".tran-reciept"),
  loadReceipt: document.querySelector(".load-reciept"),
};

export const formElement = {
  cryptoValue: document.querySelector(".crypto-value"),
  cryptoName: document.querySelector(".crypto-name"),
  fiatValue: document.querySelector(".fiat-value"),
  fiatName: document.querySelector(".fiat-name"),
  senderFirstName: document.getElementById("fName"),
  senderLastName: document.getElementById("lName"),
  senderEmail: document.getElementById("email"),
  deliveryMtd: document.getElementById("dMethod"),
  acctNumber: document.querySelector(".account"),
  recipentFirstName: document.getElementById("RfName"),
  recipentLastName: document.getElementById("RlName"),
  recipentEmail: document.getElementById("Remail"),
  sendCryptoValue: document.querySelectorAll(".send-crypto-value"),
  sendFiatValue: document.querySelectorAll(".send-fiat-value"),
  AmtSent: document.querySelectorAll(".amt-sent"),
  convertRate: document.querySelectorAll(".convert-rate"),
  transFee: document.querySelectorAll(".trans-fee"),
  recieverFN: document.querySelectorAll(".rece-fn"),
  recieverLN: document.querySelectorAll(".rece-ln"),
  recieverEmail: document.querySelectorAll(".rece-email"),
  convertMethod: document.querySelectorAll(".convert-mtd"),
  convertBank: document.querySelectorAll(".convert-bank"),
  recieverAcct: document.querySelectorAll("rece-acct"),
};

export const mobileNav = {
  navBtn: document.querySelector(".mobile-navbtn"),
  open: document.querySelector(".open"),
  close: document.querySelector(".close"),
  mobile_nav: document.querySelector(".mobile-nav"),
};

export const walletElem = {
  connectWrapper: document.querySelector(".connect-wrapper"),
  connectBox: document.querySelector(".connect-box"),
  connectBtn: document.querySelectorAll(".connect"),
  metaMask: document.getElementById("metamask"),
  walletInfo: document.querySelectorAll(".wallet-info"),
};
