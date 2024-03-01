import "./Inputs.css";

const Inputs = (day) => {
  let element = document.getElementsByClassName("card")[0];
  element && day ? (element.style.color = "#444444") : null;
  return `
        <h1 class="header">Log In</h1>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="city">city</label>
        <input type="text" id="city" />
        <input type="submit" value="Log In" />
`;
};

export default Inputs;
