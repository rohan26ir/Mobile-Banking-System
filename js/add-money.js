

document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();


  const inputAddMoney = document.getElementById('input-add-money').value;
  const inputAddPin = document.getElementById('input-add-pin').value;
  console.log(inputAddMoney, inputAddPin);

  if(inputAddPin === '123'){

    console.log("Adding Money");
    const acBalance = document.getElementById('account-balance').innerText;
    console.log(acBalance);

    // Step: 5
    const inputAddMoneyInt = parseFloat(inputAddMoney);
    const ABalance = parseFloat(acBalance);
    const newBalance = ABalance + inputAddMoneyInt ;
    console.log(newBalance);

    // Step : 6 (Update balance)
     document.getElementById('account-balance').innerText = newBalance;

  }
  else{
    alert('Try Again')
  }

})