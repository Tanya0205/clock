const second = document.querySelector(".sec");
const minute = document.querySelector(".mn");
const hour = document.querySelector(".hr");
const checkbox = document.getElementById("fa");

setInterval(() => {
  const time = new Date();

  const sec = time.getSeconds();
  second.style.transform = `translateY(-50%) rotate(${6 * sec}deg)`;

  const min = time.getMinutes();
  minute.style.transform = `translateY(-50%) rotate(${6 * min}deg)`;

  const hr = time.getHours();
  hour.style.transform = `translateY(-50%) rotate(${30 * hr + 0.5 * min}deg)`;
}, 1000);

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
