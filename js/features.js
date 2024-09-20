
// document.getElementById('btn-show-Add-Money').addEventListener('click', function(){

//   document.getElementById('Add-Money-form').classList.remove('hidden')

//   document.getElementById('Cash-Out-Form').classList.add('hidden')

// })

// document.getElementById('btn-show-Cash-Out').addEventListener('click', function(){

//   document.getElementById('Cash-Out-Form').classList.remove('hidden')

//   document.getElementById('Add-Money-form').classList.add('hidden')


// })


// document.getElementById('btn-refresh').addEventListener('click', function(){

//   document.getElementById('Add-Money-form').classList.add('hidden')

//   document.getElementById('Cash-Out-Form').classList.add('hidden')

// })

document.getElementById('btn-logout').addEventListener('click', function(){

  window.location.href='./index.html';
})


// // 
// document.getElementById('btn-show-transaction').addEventListener('click', function(){
//   document.getElementById('Transaction-field').classList.remove('hidden');
// })

// Main Andf Easy Function

function showSecrionById(id){
  // Hide All Section 
  document.getElementById('Add-Money-form').classList.add('hidden');
  document.getElementById('Cash-Out-Form').classList.add('hidden');
  document.getElementById('Transaction-field').classList.add('hidden');

  // Show the section that provide By id

  document.getElementById(id).classList.remove('hidden');
}


// Add Money Form show

document.getElementById('btn-show-Add-Money').addEventListener('click', function(){

  showSecrionById('Add-Money-form');

})
document.getElementById('btn-show-Cash-Out').addEventListener('click', function(){

  showSecrionById('Cash-Out-Form');

})
document.getElementById('btn-show-transaction').addEventListener('click', function(){

  showSecrionById('Transaction-field');

})
document.getElementById('btn-refresh').addEventListener('click', function(){

  showSecrionById('');

})