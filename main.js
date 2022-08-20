// let firstname = "Someone" 

// let text = `

// ${firstname}

// `

// 
// let number1 = 12;
// let number2 = 23;


// let number1 = "12";
// let number2 = "23";

// console.log(number2 + number1);
// console.log(number1 - number2);
// console.log(number2/number1);

// let a = 14;

// console.log(a++);
// console.log(++a);
            // 14 - 14
// console.log(a++ + --a);
// console.log(a++ - ++a);

// console.log(a+"" + ++a);

// console.log(a-- - "" + a);

// console.log(String(a));
// console.log(a-0)

// if( true && false){
//     console.log("Fizz")
// }else{
//     console.log("Buzz")
// }


// let result =!(true && false) 
// result = !true || !false
// console.log(result);
// let text1 = "Alisher";
// let text2 = "abdumajid";

// let result = true > false;

// console.log(result);

// let result = '0' != 0;
// console.log(result);

// var childEl = document.querySelector("#lorem")


// const USD_TO_UZS = 9433.34;
// const EUR_TO_UZS = 10354.03;

// var resultEl = document.querySelector(".result");
// var balance = prompt("Qancha miqdorda mablag'ingiz bor?", 0);

// var planeTicket = 500;
// var hotel = 250;
// var museum = 120;



// if(balance < (hotel+planeTicket)*USD_TO_UZS + museum*EUR_TO_UZS){
//     resultEl.textConteultEl.textContent = "Hali yana ozgina sabr qilishingiz kerak ekan";
// }else{
//     resultEl.textContent = "Oq yo'l Alisher";
// }


// let number2 = 13;
// 
// var number1
// console.log(number1);
// let number1 = 14;

// console.log(number1)
// var number1 = 13;


// window.number1
// if(true){
//     let number1 = 14;
// }

// console.log(number1)
// var number1
//  number1 = 15;

// if(true){
//      number1 = 13;
// }

// console.log(number1)


// let number1;
// let number1;


// var textEl = document.querySelectorAll(".list-link")

// console.log(textEl)

// var textEls = document.getElementsByClassName("list-link")
// var textEls = document.d('a')
// console.log(textEls)



var myFormEl = document.querySelector(".myForm");

var emailInputEl = document.querySelector(".myForm__email");
var passwordInputEl = document.querySelector(".myForm__password");

// emailInputEl.setAttribute('required', "")



// emailInputEl.addEventListener('click', )

// emailInputEl.addEventListener('click', () => {
//     console.log("Bu ikkinchi listener")
// })

// emailInputEl.onclick = () => {
//     console.log("Bu birinchi listener")
// }

// emailInputEl.onclick = () => {
//     console.log("Bu ikkinchi listener")
// }

// document.addEventListener('keydown', (event) => {
//     console.log(event)
//     if(event.ctrlKey && event.code === "KeyC"){
//         console.log("Copy paste qilma");
//         event.preventDefault();
//     }
// })
// document.addEventListener("contextmenu", (event) => {
//     event.preventDefault()
// })

// emailInputEl.addEventListener('mouseover', () => {
//     emailInputEl.value = "Xavf ostidaman";
// })

// emailInputEl.addEventListener('mouseout', () => {
//     emailInputEl.value = "";
// })



myFormEl.addEventListener('submit', (event) => {
    event.preventDefault();
    // console.log(event);

    const data = {
        login:emailInputEl.value,
        password:passwordInputEl.value
    }


    const pattern = /^[A-Za-z0-9]{0,}\@[A-Za-z]{3,5}\.[A-Za-z]{3,4}$/
    console.log(pattern.test(data.login))
    if(!pattern.test(data.login)){
        alert("Email field must be email");
        emailInputEl.style.border='1px solid red';
    }
    else{
        console.log(data);
    }
})


navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos)
}, (err) => {
    console.log(err)
})