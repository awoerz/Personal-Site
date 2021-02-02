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