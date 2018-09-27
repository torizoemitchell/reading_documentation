//var faker = require('faker');

var cardTemplate = function (name, email, city, state) {
  return `
    <div class="col">
      <div class="card">
        <div class="card-body">
          <h4 class="card-title">${name}</h4>
          <p class="card-text">${email}</p>
          <p class="card-text">${city}, ${state}</p>
        </div>
      </div>
    </div>
  `
}

document.addEventListener('DOMContentLoaded', function () {
	var btn = document.querySelector('button')
  btn.addEventListener('click', function () {
    console.log("click")
  	var cards = document.querySelector('#cards')
    // Instead of hardcoding the values, randomly generate them using faker.js!
    var name = faker.name.findName();
    var email = 'example@example.com'
    var city = 'Example'
    var state = 'EX'

		cards.innerHTML = cardTemplate(name, email, city, state)
  })
})
