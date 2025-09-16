const exampleFunction = () => {
  alert("You clicked a button");
};

const getRefererUrl = () => {
  const referer = document.referrer;
  console.log("Referrer URL:", referer);
  return referer;
};

const actionButton = document.getElementById("action-btn");
const mainContent = document.getElementById("main-content");

document.addEventListener("DOMContentLoaded", getRefererUrl);

actionButton.addEventListener("click", exampleFunction);
// comment