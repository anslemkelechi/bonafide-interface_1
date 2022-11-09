import { walletElem, domElement } from "../base";
import { setDefaultUI } from "../view/homeView";

const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

const MetaConnect = async () => {
  try {
    // Will open the MetaMask UI
    await ethereum.request({ method: "eth_requestAccounts" });
    setDefaultUI("success");
  } catch (error) {
    domElement.errorMsg.textContent = `${error}`;
    domElement.alert.classList.add("u-alert");
  }
};

const grabEthAcct = async () => {
  const accounts = await ethereum.request({ method: "eth_accounts" });
  walletElem.walletInfo.forEach((el) => {
    let text = accounts[0];
    text = text.slice(0, 12);
    el.textContent = text;
  });
  console.log(accounts);
};

export const signInMetaMask = async () => {
  walletElem.metaMask.addEventListener("click", (e) => {
    //1. Check if user has meta mask installed.
    if (!isMetaMaskInstalled()) {
      domElement.errorMsg.textContent = `Please install metamask here https://metamask.com`;
      domElement.alert.classList.add("u-alert");
    } else {
      MetaConnect();
      grabEthAcct();
    }
  });
};
