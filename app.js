// Selecting Necessary elements
const btn_start = document.querySelector(".btn-start");
const btn_reset = document.querySelector(".btn-reset");
const btn_stop = document.querySelector(".btn-stop");

let min = document.querySelector(".min");
let sec = document.querySelector(".sec");
let mili = document.querySelector(".mili");

let time = 00;
let sectime = 00;
let mintime = 00;
let interval, timer;
const starttime = function () {
  const tick = function () {
    mili.textContent = `${time}`.padStart(2, 0);
    console.log(time);
    time++;

    if (time === 100) {
      time = 00;
      sectime++;
      sec.textContent = `${sectime}`.padStart(2, 0);
      if (sectime === 60) {
        time = 00;
        mintime++;
        min.textContent = `${mintime}`.padStart(2, 0);
      }
    }
  };
  const timer = setInterval(tick, 10);
  return timer;
};

const toggleclass = function () {
  btn_start.classList.toggle("hidden");
  btn_stop.classList.toggle("hidden");
};
btn_start.addEventListener("click", function () {
  toggleclass();
  timer = starttime();
});

btn_stop.addEventListener("click", function () {
  if (timer) clearInterval(timer);
  toggleclass();
});

btn_reset.addEventListener("click", function () {
  time = 00;
  sectime = 00;
  mintime = 00;

  min.textContent = "00";
  sec.textContent = "00";
  mili.textContent = "00";
  toggleclass();
  if (timer) clearInterval(timer);
});
