import Form from "./src/Form";
import Moon from "./src/Moon";

document.querySelector("#app").innerHTML = `
${Moon()}
${Form()}
`;
