

document.getElementById('log-in').addEventListener('click', function(event){

  event.preventDefault();
  console.log('Log in Button');

  const phnNumber = document.getElementById('phone-number').value;
  const pinNumber = document.getElementById('pin-number').value;
  console.log(phnNumber ,pinNumber);

  if(phnNumber === '017' && pinNumber === '123'){
    console.log("you Are login");
    window.location.href = './home.html';
  }
  else{
    alert('Wrong, Try Agin')
  }

})