import "./../sass/main.scss";

import * as homeView from "./view/homeView";
import * as walletView from "./view/walletConnView";
import * as walletAPI from "./models/walletConn";

homeView.nav();
homeView.colorChange();
homeView.loadConfirmation();
homeView.formFunctions();
homeView.randomFunc();
homeView.startMobileNav();

//Wallet Functions
homeView.setDefaultUI("failed");
homeView.connectWallet();
walletAPI.signInMetaMask();
