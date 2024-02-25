const Form = () => {
  return `<div>
      <form class="card">
        <h1 class="header">Log In</h1>
        <label for="name">Name</label>
        <input type="text" id="name" />
        <label for="age">Age</label>
        <input type="number" id="age" />
        <input type="submit" value="Log In" />
      </form>
    </div>
`;
};

export default Form;
