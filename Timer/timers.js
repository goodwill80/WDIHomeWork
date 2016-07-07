
var stopWatch = {
  start: document.getElementById('start'),
  reset: document.getElementById('reset'),
  pause: document.getElementById('pause'),
  timer: document.getElementById('timer'),
  seconds: 0,
  timerId: 0,

setUpStopWatch: function(){
  this.clickStart();
  this.clickPalse();
  this.clickReset();
},

startEnable: function(){
  this.start.disabled = false;
},

startDisabled: function(){
  this.start.disabled = true;
},

updateTime: function() {
  this.seconds++;
  this.timer.textContent = "Time elapsed: " + seconds;
},

clickStart: function(){
  this.start.addEventListener("click", function(){
  this.timerId = setInterval(this.updateTime.bind(this), 1000);
  this.startDisabled();
}).bind(this);
},


clickPalse: function(){
  this.pause.addEventListener("click", function(){
  clearInterval(this.timerId.bind(this));
  this.startEnable();
}).bind(this);
},

clickReset: function() {
  this.reset.addEventListener('click', function(){
  clearInterval(this.timerId.bind(this));
  this.seconds = 0;
  this.timer.innerHTML = "Stop Watch";
  this.startEnable();
}).bind(this);
}
};

stopWatch.setUpStopWatch();

/*
// your code here:
var start = document.getElementById('start');
var reset = document.getElementById('reset');
var pause = document.getElementById('pause');
var timer = document.getElementById('timer');

var seconds = 0;
var timerId = 0;

function startEnable(){
  start.disabled = false;
}

function startDisabled(){
  start.disabled = true;
}

function updateTime(){
    seconds++;
    timer.textContent = "Time elapsed: " + seconds;
}

start.addEventListener("click", function(){
  timerId = setInterval(updateTime, 1000);
  startDisabled();
});

pause.addEventListener("click", function(){
  clearInterval(timerId);
  startEnable()
});


reset.addEventListener('click', function(){
  clearInterval(timerId);
  seconds = 0;
  timer.innerHTML = "Stop Watch";
  startEnable()
});*/
