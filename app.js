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

    if (time === 99) {
      time = 00;
      sectime++;
      sec.textContent = `${sectime}`.padStart(2, 0); //59

      if (sectime === 60) {
        sectime = 00;
        mintime++;
        min.textContent = `${mintime}`.padStart(2, 0);
        sec.textContent = `${sectime}`.padStart(2, 0);
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
  btn_reset.disabled = true;
  timer = starttime();
});

btn_stop.addEventListener("click", function () {
  if (timer) clearInterval(timer);
  btn_reset.disabled = false;
  toggleclass();
});

btn_reset.addEventListener("click", function () {
  time = 00;
  sectime = 00;
  mintime = 00;

  min.textContent = "00";
  sec.textContent = "00";
  mili.textContent = "00";
  btn_start.classList.remove("hidden");
  btn_stop.classList.add("hidden");
  if (timer) clearInterval(timer);
});
