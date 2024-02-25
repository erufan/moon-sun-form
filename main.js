import Form from "./src/Form";
import Moon from "./src/Moon";
import Inputs from "./src/Inputs";

document.querySelector("#app").innerHTML = `
${Moon()}
${Form(Inputs())}
`;
