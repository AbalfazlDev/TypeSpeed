let txtarea = document.getElementById("inp_txt");
let model_txt = document.getElementsByClassName("model_txt")[0];
const theTimer = document.getElementById("lbl_type_speed");
let section_type = document.getElementsByClassName("section_type")[0];
txtarea.addEventListener("change", change_txt());

var timer = [0, 0, 0, 0];
var timer_runing = false;
let interval_timer;
var origion_txt = model_txt.textContent;

function leading_ziro(time) {
  if (time <= 9) {
    return "0" + time;
  }
  return time;
}

function change_txt() {
  console.log(txtarea.innerText + "tt\n");
}

function func_timer() {
  timer[3]++;

  theTimer.innerText = `${leading_ziro(timer[2])}:${leading_ziro(
    timer[1]
  )}:${leading_ziro(timer[0])}`;
  timer[0] = Math.floor(timer[3] - timer[1] * 100 - timer[2] * 60 * 100);
  timer[1] = Math.floor(timer[3] / 100 - timer[2] * 60);
  timer[2] = Math.floor(timer[3] / 100 / 60);
}

function start() {
  let txt_length = txtarea.value.length;

  if (!timer_runing) {
   interval_timer= setInterval(func_timer, 10);
    timer_runing = true;
  }
}

function spell_check() {
  let txt_inp = txtarea.value;
  let txt_match = origion_txt.substring(0, txt_inp.length);

  if (origion_txt == txt_inp) {
    section_type.style.outline = "3px solid green";
    clearInterval(interval_timer);
  } else if (txt_inp == txt_match) {
    section_type.style.outline = "3px solid yellow";
    console.log("1");
  } else {
    section_type.style.outline = "3px solid red";
  }
}

txtarea.addEventListener("keypress", start);
txtarea.addEventListener('keyup',spell_check);
