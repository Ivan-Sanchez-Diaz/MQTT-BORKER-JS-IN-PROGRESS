let progressCircle = document.querySelector(".progress");
let radius = progressCircle.r.baseVal.value;
let circumference = radius * 2 * Math.PI;
progressCircle.style.strokeDasharray = circumference;

function setProgress(percent) {
  progressCircle.style.strokeDashoffset = circumference - (percent / 100) * circumference;
}
setProgress(95);