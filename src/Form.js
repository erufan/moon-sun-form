import "./Form.css";

const Form = (children, day) => {
  if (!day) {
    return `<div>
      <form class="card">
      ${children}
      </form>
    </div>
`;
  }
  return `<div>
      <form class="cardDay">
      ${children}
      </form>
    </div>`;
};

export default Form;
