

document.getElementById('log-in').addEventListener('click', function(event){

  event.preventDefault();
  console.log('Log in Button');

  const phnNumber = document.getElementById('phone-number').value;
  console.log(phnNumber);

})