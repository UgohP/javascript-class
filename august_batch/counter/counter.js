let count = 0;

document.getElementById("increase").onclick = function () {
  count++;
  document.getElementById("value").textContent = count;
};

document.getElementById('reset').onclick = function(){
    document.getElementById("value").textContent = 0
}

