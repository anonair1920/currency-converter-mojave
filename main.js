const currencyRatio = 23400;
let from = document.getElementById("fromList") // tag from HTML
let to = document.getElementById("toList") // tag from HTML
let amount = document.getElementById("amountInput") // tag from HTML
let result = document.getElementById("resultArea") ; // tag from HTML
let convertedAmount  = 0 // use for get converted value from function 
let formatamount ='' // use for get value after formatted 




function vndToUsd (){ 
    return amount.value /  currencyRatio 
}

function usdToVnd (){
    return amount.value * currencyRatio
}

function formatCurrency(type, value) {
    const formatter = new Intl.NumberFormat(type, {
      currency: type,
      style: "currency"
    });
    return formatter.format(value);
  }

function convert () { // fired when user click Convert Button


    if(from.value === "VND" & to.value === 'USD'){ // .value to read the value from tag 
        convertedAmount = vndToUsd() // fired the vndToUsd function and save the return value at converted Amount 
        formatamount = formatCurrency(to.value,convertedAmount) // format the number with currency sign and save into variable
       
        
    }else if(from.value === "USD" && to.value === "VND"){
        convertedAmount = usdToVnd()
        formatamount = formatCurrency(to.value,convertedAmount)
        
    } else {
        alert("you type the wrong currency")
        return;  // when function meet return it will terminate function immediately

    }
    result.innerHTML = `result is ${formatamount}` // pring the final value on the result area on html
}







