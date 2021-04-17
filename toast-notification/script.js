const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  notification.innerText = "This challenge is crazy!";
  notification.classList.add("toast");

  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
