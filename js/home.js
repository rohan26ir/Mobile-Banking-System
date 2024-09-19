

document.getElementById('btn-add-money').addEventListener('click', function(event){
  event.preventDefault();


  const inputAddMoney = document.getElementById('input-add-money').value;
  const inputAddPin = document.getElementById('input-add-pin').value;
  console.log(inputAddMoney, inputAddPin);

})