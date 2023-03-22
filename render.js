import { getFeedHtml } from "./getFeedHtml.js"

export const render = () => {
  document.getElementById("feed").innerHTML = getFeedHtml();
};
