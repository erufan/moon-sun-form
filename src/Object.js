import app from "../main";
import "./Object.css";
import Sun from "./Sun";
import Moon from "./Moon";

let day = false;
const body = document.getElementById("app");

const Object = () => {
  if (day) return Sun();
  return Moon();
};

document.onclick = (e) => {
  let myObject = e.target.parentNode;
  if (myObject.tagName === "svg") {
    myObject.parentNode.classList.add("move");
    day = !day;
    !day && body.classList.toggle("body");
    setTimeout(() => {
      body.classList.toggle("body");
      !day && body.classList.toggle("body");
      app(day);
    }, 1000);
  }
};
export default Object;
