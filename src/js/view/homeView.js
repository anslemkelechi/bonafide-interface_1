import { domElement, formElement, mobileNav, walletElem } from "../base";
import { value } from "../models/walletConn";

const formValueArr = [];

const grabFormValue = () => {
  formValueArr.push({
    cryptoValue: formElement.cryptoValue.value,
    cryptoName: formElement.cryptoName.textContent,
    fiatValue: formElement.fiatValue.value,
    fiatName: formElement.fiatName.textContent,
    senderFirstName: formElement.senderFirstName.value,
    senderLastName: formElement.senderLastName.value,
    senderEmail: formElement.senderEmail.value,
    recipentFirstName: formElement.recipentFirstName.value,
    recipentLastName: formElement.recipentLastName.value,
    recipentEmail: formElement.recipentEmail.value,
    deliveryMtd: formElement.deliveryMtd.value,
    acctNumber: formElement.acctNumber.value,
  });

  return formValueArr;
};
const loadFormValue = (data) => {
  formElement.sendCryptoValue.forEach((el) => {
    el.textContent = `${data[0].cryptoValue}${data[0].cryptoName}`;
  });
  formElement.sendFiatValue.forEach((el) => {
    el.textContent = `NGN ${data[0].fiatValue}`;
  });
  formElement.AmtSent.forEach((el) => {
    el.textContent = `NGN ${data[0].fiatValue}`;
  });
  formElement.convertRate.forEach((el) => {
    el.textContent = `1 ${data[0].cryptoName} = NGN 250,000`;
  });
  formElement.transFee.forEach((el) => {
    el.textContent = `0.88809${data[0].cryptoName}`;
  });
  formElement.recieverFN.forEach((el) => {
    el.textContent = `${data[0].recipentFirstName}`;
  });
  formElement.recieverLN.forEach((el) => {
    el.textContent = `${data[0].recipentLastName}`;
  });
  formElement.recieverEmail.forEach((el) => {
    el.textContent = `${data[0].recipentEmail}`;
  });
  formElement.convertMethod.forEach((el) => {
    el.textContent = `${data[0].deliveryMtd}`;
  });
  formElement.recieverAcct.forEach((el) => {
    el.textContent = `${data[0].acctNumber}`;
  });

  console.log(data);
};

export const nav = () => {
  // domElement.body.addEventListener('click', el => {
  //     domElement.dropdownContent.classList.add('hid-nav')
  // })
  //Event Listerner For Network Change in coversion section.
  domElement.dropdownIcon.forEach((el) => {
    el.addEventListener("click", (el) => {
      domElement.dropdownContent.forEach((index) => {
        index.classList.toggle("hid-nav");
      });
    });
  });

  //Event Listerner to update network change from list to nav.
  domElement.dropdownItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      domElement.cryptoImg.forEach((item) => {
        item.src = el.children[0].children[0].src;
      });
      domElement.cryptoName.forEach((item) => {
        item.textContent = el.children[1].textContent;
      });
      domElement.dropdownContent.forEach((index) => {
        index.classList.toggle("hid-nav");
      });
      //domElement.dropdownContent.classList.toggle("hid-nav");
    });
  });
  ``;

  //Event Listerner For Network Change in convert box.
  domElement.convertDropdown.addEventListener("click", (el) => {
    domElement.convertDropdownContent.classList.toggle("hid-nav");
  });

  //Event Listerner to update network change from list to nav in convert box.
  domElement.cryptItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      domElement.cryptImg.src = el.children[0].children[0].src;
      domElement.cryptName.textContent = el.children[1].textContent;
      domElement.convertDropdownContent.classList.toggle("hid-nav");
    });
  });
  //Event Listerner For Network Change in convert box.
  domElement.fiatdropdown.addEventListener("click", (el) => {
    domElement.fiatdropdownContent.classList.toggle("hid-nav");
  });

  //Event Listerner to update network change from list to nav in convert box.
  domElement.fiatItem.forEach((el) => {
    el.addEventListener("click", (e) => {
      domElement.fiatImg.src = el.children[0].children[0].src;
      domElement.fiatName.textContent = el.children[1].textContent;
      domElement.fiatdropdownContent.classList.toggle("hid-nav");
    });
  });
};

export const randomFunc = () => {
  domElement.closeMsg.addEventListener("click", (e) => {
    domElement.alert.classList.remove("u-alert");
  });
};
export const colorChange = () => {
  const colorArr = ["#EFCA09", "#EF1709", "##47A663"];

  domElement.fiatAccount.forEach((el) => {
    const randomNum = Math.floor(Math.random() * 4);
    el.style.backgroundColor = colorArr[randomNum];
  });
};

export const sectionUpdate = () => {
  setTimeout((el) => {
    domElement.preloader.classList.toggle("hid-loader");
    domElement.tranHistoryB.classList.remove("hid-section");
    domElement.formBox.classList.remove("hid-section");
    domElement.portfolioBox.classList.add("hid-section");
    domElement.continueBtn.classList.add("hid-nav");
  }, 3000);
  domElement.preloader.classList.toggle("hid-loader");
};

export const loadConfirmation = () => {
  domElement.loadConfirmation.addEventListener("click", (e) => {
    domElement.tranConfirmBox.classList.toggle("hid-section");
    let arr = grabFormValue();
    console.log(arr);
    loadFormValue(arr);
  });
  domElement.goBackBtn.addEventListener("click", (e) => {
    domElement.tranConfirmBox.classList.toggle("hid-section");
  });
  domElement.goBackBtn2.addEventListener("click", (e) => {
    domElement.tranReceiptBox.classList.toggle("hid-section");
  });
  domElement.loadReceipt.addEventListener("click", (e) => {
    domElement.tranReceiptBox.classList.toggle("hid-section");
    domElement.tranConfirmBox.classList.toggle("hid-section");
    domElement.form.submit();
  });
};

export const formFunctions = () => {
  domElement.continueBtn.addEventListener("click", (e) => {
    if (
      formElement.cryptoValue.value != "" &&
      formElement.fiatValue.value != ""
    ) {
      sectionUpdate();
    } else {
      domElement.errorMsg.textContent = "Please Complete Form!👍";
      domElement.alert.classList.add("u-alert");
    }
  });
};

export const startMobileNav = () => {
  mobileNav.navBtn.addEventListener("click", (el) => {
    mobileNav.mobile_nav.classList.toggle("mobile-active");
    mobileNav.open.classList.toggle("hid");
    mobileNav.close.classList.toggle("hid");

    walletElem.connectBtn.forEach((el) => {
      el.addEventListener("click", (e) => {
        mobileNav.mobile_nav.classList.toggle("mobile-active");
      });
    });
  });

  //   w    indow.onscroll = () => {
  //     if (
  //       document.body.scrollTop > 80 ||
  //       document.documentElement.scrollTop > 80
  //     ) {
  //       mobileNav.mobBack.style.height = "10%";
  //       mobileNav.mobBack.style.transition = "all 0.5s";
  //     } else {
  //       mobileNav.mobBack.style.height = "0%";
  //       mobileNav.mobBack.style.transition = "all 0.5s";
  //     }
  //   };
};

//Restore Webpage to Default start if user is not authenticated
export const setDefaultUI = (text) => {
  console.log(text);
  if (text == "success") {
    walletElem.connectWrapper.classList.toggle("hid-section");
    walletElem.connectBox.classList.toggle("hid-section");
    domElement.tranOverlay.style.visibility = "hidden";
  }
};

export const connectWallet = () => {
  walletElem.connectBtn.forEach((el) => {
    el.addEventListener("click", (e) => {
      walletElem.connectBox.classList.toggle("hid-section");
    });
  });
  domElement.goBackBtn3.addEventListener("click", (e) => {
    walletElem.connectBox.classList.toggle("hid-section");
  });
};
