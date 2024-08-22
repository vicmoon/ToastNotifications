const button = document.getElementById("button");
const toasts = document.getElementById("toasts");
messages = [
  "You’re like a cloud... a fluffy one that brings sunshine!",
  "You're one in a melon! 🍉 Stay sweet!",
  "Keep shining! The sun’s got nothing on your brightness.",
  "If good vibes were pizza, you'd be an all-you-can-eat buffet!",
  "You're doing great! Even Wi-Fi wishes it had your connection!",
  "You’re a star... just without all the hot gases!",
  "You must be a magician because you just made my day!",
  "Your smile could power a whole city—eco-friendly and fabulous!",
  "You're like a cupcake in a world full of muffins. Stay sweet!",
  "Is your name Google? Because you’ve got everything I’ve been searching for!",
];

button.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notif = document.createElement("div");
  notif.classList.add("toast");

  notif.innerHTML = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 2000);
}

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
