function increment() {
  let count = parseInt(document.getElementById("personas").value);
  count++;
  document.getElementById("personas").value = count;
}

function decrement() {
  let count = parseInt(document.getElementById("personas").value);
  if (count > 0) {
    count--;
    document.getElementById("personas").value = count;
  }
}