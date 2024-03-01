import Form from "./src/Form";
import Object from "./src/Object";
import Inputs from "./src/Inputs";

const app = (day) => {
  document.querySelector("#app").innerHTML = `
${Object()}
${Form(Inputs(day), day)}
`;
};

app();
export default app;
