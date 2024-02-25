import app from "../main";
import "./Object.css";
import Sun from "./Sun";
import Moon from "./Moon";
let day = false;

const Object = () => {
  if (day) return Sun();
  return Moon();
};

window.onload = () => {
  const moon = document.querySelector("div");
  const body = document.getElementById("app");
  moon.onclick = () => {
    moon.classList.add("move");
    body.classList.add("body");
    day = !day;
    setTimeout(() => app(), 4000);
  };
};
export default Object;
