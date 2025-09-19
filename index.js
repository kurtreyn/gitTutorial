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

const setCookie = (key, value) => {
  document.cookie = `${key}=${value}; path=/; max-age=3600`;
};

setCookie("userSession", "abc123");

const getCookie = (key) => {
  const cookies = document.cookie.split("; ");
  console.log("All Cookies:", cookies);
  for (let cookie of cookies) {
    const [cookieKey, cookieValue] = cookie.split("=");
    if (cookieKey === key) {
      return cookieValue;
    }
  }
  return null;
};

console.log("User Session Cookie:", getCookie("userSession"));
