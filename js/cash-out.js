

document.getElementById('btn-cash-out').addEventListener('click', function(event){
  event.preventDefault();


  const inputCashOut = document.getElementById('input-cash-out').value;
  const inputCashOutPin = document.getElementById('input-cash-out-pin').value;
  console.log(inputCashOut, inputCashOutPin);

  if(inputCashOutPin === '1234'){

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

     //  Add to Transaction section
    const li = document.createElement('li');
    li.innerText = `
       Cash Out ${inputAddMoneyInt} tk.
       New Balence: ${newBalance} tk.
    ` 
    console.log(li);

    // Show this Transaction Section
    document.getElementById('Transaction-list').appendChild(li)


  }
  else{
    alert('Try Again')
  }

})