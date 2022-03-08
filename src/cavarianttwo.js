import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

window.lpOverride = "cavarianttwo";

//Chat Div Setup

var bodyContent = document.body;
var proactiveChatBtn = `<div id="ca-sales-variant-bottom-right"></div>
<div id="ca-sales-mobile"></div>`;

bodyContent.insertAdjacentHTML("beforeend", proactiveChatBtn);

console.log("From IXP");
