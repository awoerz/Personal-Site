/*
  Form submission Scripts:
*/
var form = document.getElementById('contact-form');

var postFormData = (data) => {
  fetch("https://api.staticforms.xyz/submit", {
    method: 'POST',
    body: data,
    headers: {'Content-Type': '3eaf6f38-7d05-467e-9142-3aeb031b5538'}
  })
  .then(response => {
    response.json()
    console.log(response)
  })
  .then(result => {
    console.log('Success ' + result)
    alert('Success, see console.')
  })
  .catch(error => {
    console.error('Error ' + error)
  })
}

form.addEventListener('submit', e => {
  e.preventDefault()
  //var formData = JSON.stringify(Object.fromEntries(new FormData(document.getElementById('contact-form')).entries()))
  var formData = Object.fromEntries(new FormData(document.getElementById('contact-form')).entries())  
  var postString = `accessKey=3eaf6f38-7d05-467e-9142-3aeb031b5538&name=${formData.name}&email=${formData.email}&message=${formData.message}`
  alert(postString)
  //postFormData(postString)
  form.reset()
})

/*
  Donut Chart Scripts:
*/
var chartOne = document.getElementById('firstChart');
var chartTwo = document.getElementById('secondChart');
var chartThree = document.getElementById('thirdChart');

var green = '#4ad295';
var red = '#ff5d6a';

var programmingLove = new Chart(chartOne, {
  type: 'doughnut',
  data: {
    labels: ['Love For Programming'],
    datasets:[{
      data: [100],
      backgroundColor: [
        green,
      ],
      borderColor: [
        '#707070',
      ]
    }],
  },
  options: {
    legend: {
      display: false,
    }
  }
})

var learningDesire = new Chart(chartTwo, {
  type: 'doughnut',
  data: {
    labels: ['Desire To Learn'],
    datasets: [{
      label: 'Desire To Learn',
      data: [100],
      backgroundColor: [
        green,
      ],
      borderColor: [
        '#707070',
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    }
  }
})

var passionProblemSovling = new Chart(chartThree, {
  type: 'doughnut',
  data: {
    labels: ['Passion For Problem Solving'],
    datasets: [{
      label: 'Passion For Poblem Solving',
      data: [100],
      backgroundColor: [
        green,
      ],
      borderColor: [
        '#707070',
      ]
    }]
  },
  options: {
    legend: {
      display: false,
    }
  }
})