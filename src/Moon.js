import app from "../main";
import "./Moon.css";
let day = false;

const Moon = () => {
  if (day) {
    return ` <div>
      <svg
        width="150"
        height="150"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
      <circle cx="98" cy="98" r="98" fill="#C5AF23" />
      <ellipse cx="98" cy="98" rx="91" ry="92" fill="#DFC83C" />
      <ellipse cx="98" cy="98" rx="86" ry="87" fill="#E6D466" />
      <ellipse cx="98" cy="98" rx="73" ry="74" fill="#EDE191" />
      <ellipse cx="98" cy="98" rx="62" ry="59" fill="#F5EDB9" />
      <ellipse cx="98" cy="98" rx="51" ry="49" fill="#FCF9E0" />
      </svg>
    </div> 
`;
  } else {
    return ` <div>
      <svg
        width="150"
        height="150"
        viewBox="0 0 196 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="98" cy="98" r="98" fill="#464646" />
        <ellipse cx="98" cy="98" rx="91" ry="92" fill="#5B5B5B" />
        <ellipse cx="98" cy="98" rx="86" ry="87" fill="#727272" />
        <ellipse cx="98" cy="98" rx="73" ry="74" fill="#9D9D9D" />
        <ellipse cx="98" cy="98" rx="62" ry="59" fill="#B7B7B7" />
        <ellipse cx="98" cy="98" rx="51" ry="49" fill="#F5F0F0" />
      </svg>
    </div> 
`;
  }
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
export default Moon;
