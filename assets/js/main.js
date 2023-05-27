let container = document.getElementById("container");

toggle = () => {
  container.classList.toggle("sign-in");
  container.classList.toggle("sign-up");
};

setTimeout(() => {
  container.classList.add("sign-in");
}, 200);

const toast = document.getElementById("toast");
setTimeout(function () {
  toast.className = toast.className.replace("toast-active", "");
}, 5000);

document.getElementById("close-button").addEventListener("click", function () {
  toast.classList.remove("toast-active");
});
