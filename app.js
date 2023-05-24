var billamount=document.getElementById("billamount")
var cashgiven=document.getElementById("cashgiven")
var check=document.querySelector("#check")
var hidden=document.getElementById("hidden")
var return1 = document.getElementById("return")
var twoThousand=document.getElementById("2000")
var fiveHundred=document.getElementById("500")
var oneHundred=document.getElementById("100")
var twenty=document.getElementById("20")
var ten=document.getElementById("10")
var five=document.getElementById("5")
var one=document.getElementById("1")
// var displaydiv=document.getElementById("show")

check.addEventListener("click",clickHandler)

var notes = [2000, 500,  100, 20, 10, 5, 1]
var noteCounter = Array(9).fill(0);

// billamount.addEventListener("keypress", function(event){
//     if(event.key=="Enter"){
//         show()
//     }
// })

// function show(){
//     displaydiv.style.display="block"

// }

cashgiven.addEventListener("keypress" , function(event){
    if(event.key=="Enter"){
        check.click()
    }
})

function clickHandler(){
    var bill_amount=Number(billamount.value)
    var cash_amount=Number(cashgiven.value)
    if(bill_amount>cash_amount){
        hidden.innerHTML="Do you want to wash plates"
        twoThousand.innerHTML=0
        fiveHundred.innerHTML=0
        oneHundred.innerHTML=0
        twenty.innerHTML=0
        ten.innerHTML=0
        five.innerHTML=0
        one.innerHTML=0
    }
    else{
        var amount = cash_amount-bill_amount
        hidden.innerHTML=""
        for (let i = 0; i < 7; i++) {
            if (amount >= notes[i]) {
                noteCounter[i] = Math.floor(amount / notes[i]);
                amount = amount % notes[i];
            }
        }
        twoThousand.innerHTML=noteCounter[0]
        fiveHundred.innerHTML=noteCounter[1]
        oneHundred.innerHTML=noteCounter[2]
        twenty.innerHTML=noteCounter[3]
        ten.innerHTML=noteCounter[4]
        five.innerHTML=noteCounter[5]
        one.innerHTML=noteCounter[6]
        

    }
    
}



