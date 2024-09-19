

document.getElementById('btn-cash-out').addEventListener('click', function(event){
  event.preventDefault();


  const inputCashOut = document.getElementById('input-cash-out').value;
  const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
  console.log(inputCashOut, inputCashOutPin);

  if(inputCashOutPin === '123'){

    console.log("Adding Money");
    const acBalance = document.getElementById('account-balance').innerText;
    console.log(acBalance);

    // Step: 5
    const inputAddMoneyInt = parseFloat(inputCashOut);
    const CBalance = parseFloat(acBalance);
    const newBalance = CBalance - inputAddMoneyInt ;
    console.log(newBalance);

    // Step : 6 (Update balance)
     document.getElementById('account-balance').innerText = newBalance;

  }
  else{
    alert('Try Again')
  }

})