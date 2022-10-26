import { domElement } from "../base";

export const nav = () => {
    // domElement.body.addEventListener('click', el => {
    //     domElement.dropdownContent.classList.add('hid-nav')
    // })
    //Event Listerner For Network Change in coversion section.
    domElement.dropdownIcon.addEventListener('click', el => {
        domElement.dropdownContent.classList.toggle('hid-nav')
    })
    //Event Listerner to update network change from list to nav.
    domElement.dropdownItem.forEach(el => {
        el.addEventListener('click', e => {
            domElement.cryptoImg.src = el.childNodes[1].childNodes[0].src
            domElement.cryptoName.textContent = el.childNodes[3].textContent
            domElement.dropdownContent.classList.toggle('hid-nav')
        })
    })

    //Event Listerner For Network Change in convert box.
    domElement.convertDropdown.addEventListener('click', el => {
        domElement.convertDropdownContent.classList.toggle('hid-nav')
    })

    //Event Listerner to update network change from list to nav in convert box.
    domElement.cryptItem.forEach(el => {
        el.addEventListener('click', e => {
            domElement.cryptImg.src = el.childNodes[1].childNodes[0].src
            domElement.cryptName.textContent = el.childNodes[3].textContent
            domElement.convertDropdownContent.classList.toggle('hid-nav')
        })
    })
    //Event Listerner For Network Change in convert box.
    domElement.fiatdropdown.addEventListener('click', el => {
        domElement.fiatdropdownContent.classList.toggle('hid-nav')
    })

    //Event Listerner to update network change from list to nav in convert box.
    domElement.fiatItem.forEach(el => {
        el.addEventListener('click', e => {
            domElement.fiatImg.src = el.childNodes[1].childNodes[0].src
            domElement.fiatName.textContent = el.childNodes[3].textContent
            domElement.fiatdropdownContent.classList.toggle('hid-nav')
        })
    })
}

export const colorChange = () => {
    const colorArr = ['#EFCA09', '#EF1709', '##47A663']

    domElement.fiatAccount.forEach(el => {
        const randomNum = Math.floor(Math.random() * 4)
        el.style.backgroundColor = colorArr[randomNum];
    })
}

export const sectionUpdate = () => {
    domElement.continueBtn.addEventListener('click', e => {
        setTimeout(el => {
            domElement.preloader.classList.toggle('hid-loader')
            domElement.tranHistoryB.classList.remove('hid-section');
            domElement.formBox.classList.remove('hid-section');
            domElement.portfolioBox.classList.add('hid-section');
            domElement.continueBtn.classList.add('hid-nav')
        }, 3000)
        domElement.preloader.classList.toggle('hid-loader')

    })
}

export const loadConfirmation = () => {
    domElement.loadConfirmation.addEventListener('click', e => {
        domElement.tranConfirmBox.classList.toggle('hid-section');
    })
    domElement.goBackBtn.addEventListener('click', e => {
        domElement.tranConfirmBox.classList.toggle('hid-section')
    })
    domElement.goBackBtn2.addEventListener('click', e => {
        domElement.tranReceiptBox.classList.toggle('hid-section')
    })
    domElement.loadReceipt.addEventListener('click', e => {
        domElement.tranReceiptBox.classList.toggle('hid-section')
        domElement.tranConfirmBox.classList.toggle('hid-section')
        domElement.form.submit();
    })
}