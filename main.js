import Form from "./src/Form";
import Object from "./src/Object";
import Inputs from "./src/Inputs";

const app = () => {
  document.querySelector("#app").innerHTML = `
${Object()}
${Form(Inputs())}
`;
};

app();
export default app;
