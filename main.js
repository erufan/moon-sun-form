import Form from "./src/Form";
import Moon from "./src/Moon";
import Inputs from "./src/Inputs";

const app = () => {
  document.querySelector("#app").innerHTML = `
${Moon()}
${Form(Inputs())}
`;
};

app();
export default app;
