
document.getElementById('btn-show-Add-Money').addEventListener('click', function(){

  document.getElementById('Add-Money-form').classList.remove('hidden')

  document.getElementById('Cash-Out-Form').classList.add('hidden')

})

document.getElementById('btn-show-Cash-Out').addEventListener('click', function(){

  document.getElementById('Cash-Out-Form').classList.remove('hidden')

  document.getElementById('Add-Money-form').classList.add('hidden')


})


document.getElementById('btn-refresh').addEventListener('click', function(){

  document.getElementById('Add-Money-form').classList.add('hidden')

  document.getElementById('Cash-Out-Form').classList.add('hidden')

})