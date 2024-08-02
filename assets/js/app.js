
imageOne = {
    image: {
        thumbnail: "./assets/assets/images/image-waffle-thumbnail.jpg",
        mobile: "./assets/images/image-waffle-mobile.jpg",
        tablet: "./assets/images/image-waffle-tablet.jpg",
        desktop: "./assets/images/image-waffle-desktop.jpg"
    },
    name: "Waffle with Berries",
    category: "Waffle",
    price: 6.50,
},
    imageTwo = {
        image: {
            thumbnail: "./assets/images/image-creme-brulee-thumbnail.jpg",
            mobile: "./assets/images/image-creme-brulee-mobile.jpg",
            tablet: "./assets/images/image-creme-brulee-tablet.jpg",
            desktop: "./assets/images/image-creme-brulee-desktop.jpg"
        },
        name: "Vanilla Bean Crème Brûlée",
        category: "Crème Brûlée",
        price: 7.00,
    },
    imageThree = {
        image: {
            thumbnail: "./assets/images/image-macaron-thumbnail.jpg",
            mobile: "./assets/images/image-macaron-mobile.jpg",
            tablet: "./assets/images/image-macaron-tablet.jpg",
            desktop: "./assets/images/image-macaron-desktop.jpg"
        },
        name: "Macaron Mix of Five",
        category: "Macaron",
        price: 8.00,
    },
    imageFour = {
        image: {
            thumbnail: "./assets/images/image-tiramisu-thumbnail.jpg",
            mobile: "./assets/images/image-tiramisu-mobile.jpg",
            tablet: "./assets/images/image-tiramisu-tablet.jpg",
            desktop: "./assets/images/image-tiramisu-desktop.jpg"
        },
        name: "Classic Tiramisu",
        category: "Tiramisu",
        price: 5.50,
    },
    imageFive = {
        image: {
            thumbnail: "./assets/images/image-baklava-thumbnail.jpg",
            mobile: "./assets/images/image-baklava-mobile.jpg",
            tablet: "./assets/images/image-baklava-tablet.jpg",
            desktop: "./assets/images/image-baklava-desktop.jpg"
        },
        name: "Pistachio Baklava",
        category: "Baklava",
        price: 4.00,
    },
    imageSix = {
        image: {
            thumbnail: "./assets/images/image-meringue-thumbnail.jpg",
            mobile: "./assets/images/image-meringue-mobile.jpg",
            tablet: "./assets/images/image-meringue-tablet.jpg",
            desktop: "./assets/images/image-meringue-desktop.jpg"
        },
        name: "Lemon Meringue Pie",
        category: "Pie",
        price: 5.00,
    },
    imageSeven = {
        image: {
            thumbnail: "./assets/images/image-cake-thumbnail.jpg",
            mobile: "./assets/images/image-cake-mobile.jpg",
            tablet: "./assets/images/image-cake-tablet.jpg",
            desktop: "./assets/images/image-cake-desktop.jpg"
        },
        name: "Red Velvet Cake",
        category: "Cake",
        price: 4.50,
    },
    imageEight = {
        image: {
            thumbnail: "./assets/images/image-brownie-thumbnail.jpg",
            mobile: "./assets/images/image-brownie-mobile.jpg",
            tablet: "./assets/images/image-brownie-tablet.jpg",
            desktop: "./assets/images/image-brownie-desktop.jpg"
        },
        name: "Salted Caramel Brownie",
        category: "Brownie",
        price: 4.50,
    },
    imageNine = {
        image: {
            thumbnail: "./assets/images/image-panna-cotta-thumbnail.jpg",
            mobile: "./assets/images/image-panna-cotta-mobile.jpg",
            tablet: "./assets/images/image-panna-cotta-tablet.jpg",
            desktop: "./assets/images/image-panna-cotta-desktop.jpg"
        },
        name: "Vanilla Panna Cotta",
        category: "Panna Cotta",
        price: 6.50,
    }

let cartBtn = document.querySelectorAll('.add');
let incrim = document.querySelectorAll('.incrim');
let imageMob = document.querySelectorAll('.image-for-mob');
imageMob.forEach((dta) => {
    console.log(dta)
})
// 
function addCart() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[0].classList.add('none')
    incrim[0].classList.remove('none')
    imageMob[0].style.border = '3px solid hsl(14, 86%, 42%)'


}
function addCart1() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[1].classList.add('none')
    incrim[1].classList.remove('none')
    imageMob[1].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart2() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[2].classList.add('none')
    incrim[2].classList.remove('none')
    imageMob[2].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart3() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[3].classList.add('none')
    incrim[3].classList.remove('none')
    imageMob[3].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart4() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[4].classList.add('none')
    incrim[4].classList.remove('none')
    imageMob[4].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart4() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[4].classList.add('none')
    incrim[4].classList.remove('none')
}
function addCart5() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[5].classList.add('none')
    incrim[5].classList.remove('none')
    imageMob[5].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart6() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[6].classList.add('none')
    incrim[6].classList.remove('none')
    imageMob[6].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart7() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[7].classList.add('none')
    incrim[7].classList.remove('none')
    imageMob[7].style.border = '3px solid hsl(14, 86%, 42%)'
}
function addCart8() {
    // cartBtn.forEach(btn => {
    //     btn[0].classList.add('none')
    cartBtn[8].classList.add('none')
    incrim[8].classList.remove('none')
    imageMob[8].style.border = '3px solid hsl(14, 86%, 42%)'
}


let itemQty = {
    itemQty1: document.querySelector('#item-qty1'),
    itemQty2: document.querySelector('#item-qty2'),
    itemQty3: document.querySelector('#item-qty3'),
    itemQty4: document.querySelector('#item-qty4'),
    itemQty5: document.querySelector('#item-qty5'),
    itemQty6: document.querySelector('#item-qty6'),
    itemQty7: document.querySelector('#item-qty7'),
    itemQty8: document.querySelector('#item-qty8'),
    itemQty9: document.querySelector('#item-qty9')
}
// console.log(itemQty.itemQty2.innerHTML)
let selectedQty = document.querySelector('#select-qty');
let minus = document.querySelectorAll('.plus');
let plus = document.querySelectorAll('.minus');
let totalQty = document.querySelector('#total-qty')
let secondTwo = document.querySelector('.second-two');
// let secondiTwo = document.querySelector('.secondi-two');
let secondThree = document.querySelector('.second-three');
let secondFive = document.querySelector('.second-five');
let secondSix = document.querySelector('.second-six');
let overlayChild = document.querySelector('.slayer');
let over = document.querySelector('.overlay');
let overlays = document.createElement('div');
let conP = document.createElement('div');
let body = document.querySelector('body');
let mainChild = document.querySelector('.main-child');
let isUpdate = +totalQty.innerText;

plus.forEach(function (button) {
    console.log(button)
})

minus.forEach(function (minusB) {
    console.log(minusB)
})

let h2 = document.querySelectorAll('#h2');
h2.forEach(head => {
    console.log(head)
})


let totalPrice = document.querySelectorAll('#total_price');
totalPrice.forEach(total => {
    console.log(total)

})

// console.log(totalPrice)

let rateAmountSpan = document.querySelectorAll('#rate_amount_span');
rateAmountSpan.forEach(rate => {
    console.log(rate)

})
let secondi = document.querySelectorAll('.secondi');
secondi.forEach(secon => {
    console.log(secon)

})
let qtyItems = document.querySelectorAll('#qty_items');
qtyItems.forEach(qty => {
    console.log(qty)
})
let first = document.querySelectorAll('.firsti');
first.forEach(fir => {
    console.log(fir)
})
let secondThreeChild = document.querySelectorAll('.second-three-childs')
secondThreeChild.forEach(sec => {
    console.log(sec)
})
let variable = 0;

let secondFour = document.querySelector('.second-four');

function checking(Num) {
    Num = 1
    variable++
    // plusIng = variable + Num
    // variable = plusIng;
    console.log(variable, 'variable')
    if (variable >= 1) {
        secondTwo.classList.add('none')
        secondFour.classList.remove('none')

    }
}
function forMinuss() {
    variable--
    if (variable <= 0) {
        secondTwo.classList.remove('none')
        secondFour.classList.add('none')
    }
    console.log(variable, 'variable--')
}

let zeroo = 0

function handler() {

    zeroo++

    totalPayment.innerText = imageOne.price * zeroo;

}


let fooPlus = plus[0].addEventListener('click', function () {
    let update = +itemQty.itemQty1.innerText;


    if (update < 20) {
        update++;
        isUpdate++
        itemQty.itemQty1.innerText = update
        totalQty.innerText = isUpdate
    }

    qtyItems[0].innerText = update;
    rateAmountSpan[0].innerText = imageOne.price;
    h2[0].innerText = imageOne.name

    totalPrice[0].innerText = imageOne.price * qtyItems[0].innerText;
    console.log(totalPrice[0].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[0].innerText)

    secondi[0].classList.remove('none')
    first[0].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[0].classList.remove('none');
    secondTwo.classList.add('none')
    overlays.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-waffle-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageOne.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[0].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageOne.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[0].innerText}</div>`
    overlays.classList = 'first-overlay'

    overlayChild.appendChild(overlays)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)
    checking()
})

let totalPayment = document.querySelector('.total-payment');

// let checking = isUpdate;
// console.log('checking ' , checking)
// let firsti = document.querySelector('.firsti');
let fooMinus = minus[0].addEventListener('click', function () {
    let update = +itemQty.itemQty1.innerText;
    if (update > 0) {
        update--
        isUpdate--

        itemQty.itemQty1.innerText = update;
        totalQty.innerText = isUpdate
    }
    let awi = update;
    if (awi == '0') {
        // secondTwo.classList.remove('none')
        secondi[0].classList.add('none')
        first[0].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[0].classList.add('none');
    }
    qtyItems[0].innerText = update;
    rateAmountSpan[0].innerText = imageOne.price;
    totalPrice[0].innerText = parseInt(imageOne.price * update);
    forMinuss()
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) - parseFloat(rateAmountSpan[0].innerText)
    console.log(totalPayment.innerText, 'ee')

}
)

let overlayTwo = document.createElement('div');
let tryIng = true;

let fooPlus1 = plus[1].addEventListener('click', function () {
    let update2 = +itemQty.itemQty2.innerText;
    if (update2 < 20) {
        update2++;
        isUpdate++
        itemQty.itemQty2.innerText = update2
        totalQty.innerText = isUpdate
        // tryIng = false
    }

    qtyItems[1].innerText = update2;
    rateAmountSpan[1].innerText = imageTwo.price;
    h2[1].innerText = imageTwo.name

    totalPrice[1].innerText = imageTwo.price * qtyItems[1].innerText;
    console.log(totalPrice[1].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[1].innerText)

    secondi[1].classList.remove('none')
    first[1].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[1].classList.remove('none');
    overlayTwo.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-creme-brulee-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageTwo.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[1].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageTwo.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[1].innerText}</div>`
    overlayTwo.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlayTwo)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)
    checking()

    console.log(update2, 'update')
})
let fooMinus1 = minus[1].addEventListener('click', function () {
    let update2 = +itemQty.itemQty2.innerText;
    if (update2 > 0) {
        update2--
        isUpdate--

        itemQty.itemQty2.innerText = update2;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update
        // isUpdate = update2

    }
    if (update2 == '0') {
        secondi[1].classList.add('none');
        first[1].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[1].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[1].innerText = update2;
    rateAmountSpan[1].innerText = imageTwo.price;
    totalPrice[1].innerText = imageTwo.price * update2;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[1].innerText)
}
)

let overlayThree = document.createElement('div');
let tryIng2 = true;
let fooPlus2 = plus[2].addEventListener('click', function () {
    let update3 = +itemQty.itemQty3.innerText;
    if (update3 < 20) {
        update3++;
        isUpdate++
        itemQty.itemQty3.innerText = update3
        totalQty.innerText = isUpdate
    }
    qtyItems[2].innerText = update3;
    rateAmountSpan[2].innerText = imageThree.price;
    h2[2].innerText = imageThree.name

    totalPrice[2].innerText = imageThree.price * qtyItems[2].innerText;
    console.log(totalPrice[2].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[2].innerText)

    secondi[2].classList.remove('none')
    first[2].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[2].classList.remove('none');
    overlayThree.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src= "./assets/assets/images/image-macaron-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageThree.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[2].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageThree.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[2].innerText}</div>`
    overlayThree.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlayThree)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)
    checking()

})

let fooMinus2 = minus[2].addEventListener('click', function () {
    let update3 = +itemQty.itemQty3.innerText;
    if (update3 > 0) {
        update3--
        isUpdate--

        itemQty.itemQty3.innerText = update3;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update3
        // isUpdate = update3

    }
    if (update3 == '0') {
        secondi[2].classList.add('none');
        first[2].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')
        secondThreeChild[2].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[2].innerText = update3;
    rateAmountSpan[2].innerText = imageThree.price;
    totalPrice[2].innerText = imageThree.price * update3;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[2].innerText)

}
)
let overlayFour = document.createElement('div');
let fooPlus3 = plus[3].addEventListener('click', function () {
    let update4 = +itemQty.itemQty4.innerText;
    if (update4 < 20) {
        update4++;
        isUpdate++
        itemQty.itemQty4.innerText = update4
        totalQty.innerText = isUpdate
    }
    qtyItems[3].innerText = update4;
    rateAmountSpan[3].innerText = imageFour.price;
    h2[3].innerText = imageFour.name

    totalPrice[3].innerText = imageFour.price * qtyItems[3].innerText;
    console.log(totalPrice[3].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[3].innerText)

    secondi[3].classList.remove('none')
    first[3].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[3].classList.remove('none');
    overlayFour.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-tiramisu-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageFour.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[3].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageFour.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[3].innerText}</div>`
    overlayFour.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlayFour)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)
    checking()


})

let fooMinus3 = minus[3].addEventListener('click', function () {
    let update4 = +itemQty.itemQty4.innerText;
    if (update4 > 0) {
        update4--
        isUpdate--

        itemQty.itemQty4.innerText = update4;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update4
        // isUpdate = update4
    }
    if (update4 == '0') {
        secondi[3].classList.add('none');
        first[3].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[3].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[3].innerText = update4;
    rateAmountSpan[3].innerText = imageFour.price;
    totalPrice[3].innerText = imageFour.price * update4;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[3].innerText)

}
)
let overlayFive = document.createElement('div');

let fooPlus4 = plus[4].addEventListener('click', function () {
    let update5 = +itemQty.itemQty5.innerText;
    if (update5 < 20) {
        update5++;
        isUpdate++
        itemQty.itemQty5.innerText = update5
        totalQty.innerText = isUpdate
    }
    qtyItems[4].innerText = update5;
    rateAmountSpan[4].innerText = imageFive.price;
    h2[4].innerText = imageFive.name

    totalPrice[4].innerText = imageFive.price * qtyItems[4].innerText;
    console.log(totalPrice[4].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[4].innerText)

    secondi[4].classList.remove('none')
    first[4].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[4].classList.remove('none');
    overlayFive.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-baklava-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageFive.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[4].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageFive.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[4].innerText}</div>`
    overlayFive.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlayFive)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)

    checking()
})

let fooMinus4 = minus[4].addEventListener('click', function () {
    let update5 = +itemQty.itemQty5.innerText;
    if (update5 > 0) {
        update5--
        isUpdate--

        itemQty.itemQty5.innerText = update5;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update5
        // isUpdate = update5
    }
    if (update5 == '0') {
        secondi[4].classList.add('none');
        first[4].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[4].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[4].innerText = update5;
    rateAmountSpan[4].innerText = imageFive.price;
    totalPrice[4].innerText = imageFive.price * update5;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[4].innerText)

}
)
let overlaySix = document.createElement('div');

let fooPlus5 = plus[5].addEventListener('click', function () {
    let update6 = +itemQty.itemQty6.innerText;
    if (update6 < 20) {
        update6++;
        isUpdate++
        itemQty.itemQty6.innerText = update6
        totalQty.innerText = isUpdate
    }
    qtyItems[5].innerText = update6;
    rateAmountSpan[5].innerText = imageSix.price;
    h2[5].innerText = imageSix.name

    totalPrice[5].innerText = imageSix.price * qtyItems[5].innerText;
    console.log(totalPrice[5].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[5].innerText)

    secondi[5].classList.remove('none')
    first[5].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[5].classList.remove('none');
    overlaySix.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-meringue-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageSix.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[5].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageSix.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[5].innerText}</div>`
    overlaySix.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlaySix)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)

    checking()
})

let fooMinus5 = minus[5].addEventListener('click', function () {
    let update6 = +itemQty.itemQty6.innerText;
    if (update6 > 0) {
        update6--
        isUpdate--

        itemQty.itemQty6.innerText = update6;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update6
        // isUpdate = update6
    }
    if (update6 == '0') {
        secondi[5].classList.add('none');
        first[5].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[5].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[5].innerText = update6;
    rateAmountSpan[5].innerText = imageSix.price;
    totalPrice[5].innerText = imageSix.price * update6;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[5].innerText)

}
)
let overlaySeven = document.createElement('div');

let fooPlus6 = plus[6].addEventListener('click', function () {
    let update7 = +itemQty.itemQty7.innerText;
    if (update7 < 20) {
        update7++;
        isUpdate++
        itemQty.itemQty7.innerText = update7
        totalQty.innerText = isUpdate
    }
    qtyItems[6].innerText = update7;
    rateAmountSpan[6].innerText = imageSeven.price;
    h2[6].innerText = imageSeven.name

    totalPrice[6].innerText = imageSeven.price * qtyItems[6].innerText;
    console.log(totalPrice[6].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[6].innerText)

    secondi[6].classList.remove('none')
    first[6].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[6].classList.remove('none');
    overlaySeven.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-cake-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageSeven.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[6].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageSeven.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[6].innerText}</div>`
    overlaySeven.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlaySeven)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)

    checking()
})

let fooMinus6 = minus[6].addEventListener('click', function () {
    let update7 = +itemQty.itemQty7.innerText;
    if (update7 > 0) {
        update7--
        isUpdate--

        itemQty.itemQty7.innerText = update7;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update7
        // isUpdate = update7
    }
    if (update7 == '0') {
        secondi[6].classList.add('none');
        first[6].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[6].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[6].innerText = update7;
    rateAmountSpan[6].innerText = imageSeven.price;
    totalPrice[6].innerText = imageSeven.price * update7;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[6].innerText)

}
)
let overlayEight = document.createElement('div');

let fooPlus7 = plus[7].addEventListener('click', function () {
    let update8 = +itemQty.itemQty8.innerText;
    if (update8 < 20) {
        update8++;
        isUpdate++;
        itemQty.itemQty8.innerText = update8
        totalQty.innerText = isUpdate
    }
    qtyItems[7].innerText = update8;
    rateAmountSpan[7].innerText = imageEight.price;
    h2[7].innerText = imageEight.name

    totalPrice[7].innerText = imageEight.price * qtyItems[7].innerText;
    console.log(totalPrice[7].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[7].innerText)

    secondi[7].classList.remove('none')
    first[7].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[7].classList.remove('none');
    overlayEight.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-brownie-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageEight.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[7].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageEight.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[7].innerText}</div>`
    overlayEight.classList = 'first-overlay for-radius'
    overlayChild.appendChild(overlayEight)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)

    checking()
})

let fooMinus7 = minus[7].addEventListener('click', function () {
    let update8 = +itemQty.itemQty8.innerText;
    if (update8 > 0) {
        update8--
        isUpdate--

        itemQty.itemQty8.innerText = update8;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update8
        // isUpdate = update8
    }
    if (update8 == '0') {
        secondi[7].classList.add('none');
        first[7].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[7].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[7].innerText = update8;
    rateAmountSpan[7].innerText = imageEight.price;
    totalPrice[7].innerText = imageEight.price * update8;
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[7].innerText)

}
)
let overlayNine = document.createElement('div');

let fooPlus8 = plus[8].addEventListener('click', function () {
    let update9 = +itemQty.itemQty9.innerText;
    if (update9 < 20) {
        update9++;
        isUpdate++
        itemQty.itemQty9.innerText = update9
        totalQty.innerText = isUpdate
    }
    qtyItems[8].innerText = update9;
    rateAmountSpan[8].innerText = imageNine.price;
    h2[8].innerText = imageNine.name

    totalPrice[8].innerText = imageNine.price * qtyItems[8].innerText;
    console.log(totalPrice[8].innerText, 'TOTAL PRICE')
    totalPayment.innerHTML = parseFloat(totalPayment.innerHTML) + parseFloat(rateAmountSpan[8].innerText)

    secondi[8].classList.remove('none')
    first[8].classList.remove('none')
    secondFive.classList.remove('none')
    secondSix.classList.remove('none')
    secondThreeChild[8].classList.remove('none');
    overlayNine.innerHTML =
        `<div class="for-flex">
    <div class="inner-img"><img src="./assets/assets/images/image-panna-cotta-thumbnail.jpg"  alt=""></div>
    <div class="name-price">
      <div class="name">${imageNine.name}</div>
      <div class="amounting">
        <div class="qtyy"><span class="qtyies">${qtyItems[8].innerText}</span>x</div>
        <div class="amounti">@ $ <span class="amounties">${imageNine.price}</span>
        </div>
      </div>
    </div>
  </div>
    <div class="totalies">$${totalPrice[8].innerText}</div>`
    overlayNine.classList = 'first-overlay for-radiusTwo'
    overlayChild.appendChild(overlayNine)
    conP.innerHTML =
        `<div class="texti">Order Total</div>
<div class="total-print-con">$<span class="print-con">${totalPayment.innerText}</span></div>`;
    conP.classList = 'order-con-total'
    overlayChild.appendChild(conP)
    checking()
})

let fooMinus8 = minus[8].addEventListener('click', function () {
    let update9 = +itemQty.itemQty9.innerText;
    if (update9 > 0) {
        update9--
        isUpdate--

        itemQty.itemQty9.innerText = update9;
        totalQty.innerText = isUpdate
        // isUpdate.innerText= update9
        // isUpdate = update9
    }
    if (update9 == '0') {
        secondi[8].classList.add('none');
        first[8].classList.add('none')
        secondFive.classList.add('none')
        secondSix.classList.add('none')

        secondThreeChild[8].classList.add('none');
        // secondTwo.classList.remove('none')
    }
    qtyItems[8].innerText = update9;
    rateAmountSpan[8].innerText = imageNine.price;
    totalPrice[8].innerText = parseInt(imageNine.price * update9);
    forMinuss()
    totalPayment.innerText = parseInt(totalPayment.innerText) - parseFloat(rateAmountSpan[8].innerText)
    console.log(totalPayment.innerText, ' dd')

}
)
let hashes = document.getElementById('hash_node');
// hashes.href = '#hash';
hashes.addEventListener('click', (e) => {
    // e.preventDefault();
    // hashes.href = '#hash';
    setTimeout(() => {
        function handling() {
            // hashes.href = '#hash'
            setTimeout(() => {

                over.classList.remove('none')
            }, 0)

            let bodyWidth = document.body.offsetWidth;
            // mainChild.scrollTo({
            //     top : 0,
            //     // behavior:"smooth"

            // })
            //   body.style.overflowY = 'hidden'

            body.style.height = 'fit-content'
            if (bodyWidth === 1024 || bodyWidth === 768 || bodyWidth === 820) {
                body.style.height = '100vh'
                setTimeout(() => {
                    body.style.overflowY = 'hidden'
                }, 0)
            } else if (bodyWidth === 375 || bodyWidth === 414 || bodyWidth === 390 || bodyWidth === 393 || bodyWidth === 360 || bodyWidth === 412 || bodyWidth === 912 || bodyWidth === 540 || bodyWidth === 280) {

                // body.style.overflowY = 'hidden'
                body.style.height = 'auto'
            }
            console.log(over.classList)
        }
        handling();
    }, 0)
})
// hash_node.href = '#hash'z

function newl() {
    // 
    location.reload()
}


// if(bodyWidth === 1024 || bodyWidth === 768 || bodyWidth === 820){
//   body.style.height = '100vh'

// }