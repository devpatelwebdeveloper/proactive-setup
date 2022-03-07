import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello Vanilla!</h1>
// <div>
//   We use the same configuration as Parcel to bundle this sandbox, you can find more
//   info about Parcel
//   <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
// </div>
// `;

window.lpOverride = "cavariant";

//Chat Div Setup

var bodyContent = document.body;
var proactiveChatBtn = `<div id="ca-sales-variant-bottom-right"></div>
<div id="ca-sales-mobile"></div>`;

var newModal = `<style>
  .hide-modal {
    display: none;
  }

  .proactive-chat-modal {
    max-width: 358px;
    height: 380px;
    background: #393a3d;
    border-radius: 4px;
    color: #ffffff;
    font-family: "AvenirNext forINTUIT", "Avenir", "Helvetica", "Arial",
      "sans-serif";
    padding: 0 40px;
    position: fixed;
    bottom: 60px;
    right: 40px;
  }

  .close-btn {
    filter: drop-shadow(0px 2px 8px rgba(0, 0, 0, 0.5));
    border: 1px solid background: #393a3d;
    ;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    align-items: center;
    text-align: center;
    position: absolute;
    right: 20px;
    top: 12px;
  }

  .close-icon {
    margin: auto;
    padding: 8px;
  }

  .proactive-chat-modal-title {
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
    padding-bottom: 24px;
    padding-top: 56px;
  }

  .proactive-chat-modal-subtitle {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }

  .proactive-chat-modal-text {
    font-size: 16px;
    line-height: 24px;
    font-weight: 400;
  }

  .btn {
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    position: relative;
    outline: none;
    border: none;
    border-radius: 9999px;
    position: relative;
    cursor: pointer;
    width: fit-content;
    box-sizing: border-box;
    text-decoration: none;
    min-height: 2.25em;
    max-width: 17.5em;
    padding: 0 20px;
    color: #ffffff;
  }

  .btn::before {
    position: absolute;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    left: -5px;
    top: -5px;
    display: block;
    content: "";
    border-radius: 9999px;
    border-color: transparent;
    transition: border-color 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    box-sizing: border-box;
  }

  .btn::after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    border-radius: 9999px;
    left: 0;
    top: 0;
    right: calc(100% - 3em);
    transition: right 0.3s cubic-bezier(0.35, 0, 0.25, 1),
      opacity 0.3s cubic-bezier(0.35, 0, 0.25, 1);
    opacity: 0;
    box-sizing: border-box;
  }

  .btn:hover:after {
    right: 0;
    opacity: 1;
  }

  .btn-primary {
    background-color: #2ca01c;
  }

  .btn-primary::after {
    background-color: #0d7300;
  }

  .btn-secondary {
    background-color: #393a3d;
  }

  .btn-secondary::after {
    background-color: #000000;
  }

  .btn-tertiary {
    background-color: transparent;
    border: 2px solid #ffffff;
  }

  .btn-tertiary::after {
    background-color: #000000;
  }

  .btn-text {
    z-index: 1;
  }

  .chat-btn {
    margin-top: 12px;
    margin-bottom: 40px;
  }
</style>
<div class="proactive-chat-modal hide-modal" id="proactive-chat-modal">
  <!--   Close btn for modal -->
  <div class="close-btn">
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_198_35742)">
        <circle cx="24" cy="22" r="16" fill="#393A3D" />
        <path d="M25.6132 22.0061L31.6511 15.9898C31.76 15.885 31.847 15.7595 31.9069 15.6207C31.9668 15.4819 31.9984 15.3326 31.9999 15.1814C32.0015 15.0303 31.9729 14.8803 31.9158 14.7404C31.8587 14.6004 31.7743 14.4732 31.6675 14.3661C31.5607 14.2591 31.4336 14.1744 31.2937 14.117C31.1537 14.0595 31.0038 14.0305 30.8525 14.0316C30.7013 14.0327 30.5517 14.0639 30.4126 14.1233C30.2736 14.1828 30.1477 14.2693 30.0425 14.3779L24.0046 20.3942L17.9837 14.3608C17.8794 14.2494 17.7538 14.1601 17.6143 14.0981C17.4749 14.0362 17.3243 14.0029 17.1717 14.0002C17.0191 13.9975 16.8675 14.0255 16.7259 14.0825C16.5843 14.1395 16.4556 14.2243 16.3475 14.332C16.2394 14.4397 16.154 14.5679 16.0964 14.7092C16.0389 14.8505 16.0104 15.0019 16.0125 15.1544C16.0147 15.3069 16.0475 15.4575 16.109 15.5971C16.1705 15.7367 16.2594 15.8625 16.3706 15.9671L22.3914 22.0004L16.3489 28.0178C16.24 28.1227 16.153 28.2482 16.0931 28.3869C16.0332 28.5257 16.0016 28.6751 16.0001 28.8262C15.9985 28.9774 16.0271 29.1273 16.0842 29.2673C16.1413 29.4072 16.2257 29.5345 16.3325 29.6415C16.4393 29.7485 16.5664 29.8332 16.7063 29.8907C16.8463 29.9481 16.9962 29.9771 17.1475 29.976C17.2988 29.9749 17.4483 29.9437 17.5874 29.8843C17.7264 29.8248 17.8523 29.7383 17.9575 29.6297L23.9954 23.6135L30.0197 29.6514C30.1246 29.7602 30.2502 29.8471 30.3891 29.907C30.528 29.9668 30.6775 29.9984 30.8287 29.9999C30.98 30.0015 31.1301 29.9729 31.2701 29.9158C31.4102 29.8588 31.5375 29.7744 31.6446 29.6677C31.7518 29.561 31.8365 29.434 31.894 29.2942C31.9515 29.1544 31.9805 29.0045 31.9794 28.8534C31.9783 28.7022 31.9471 28.5528 31.8876 28.4139C31.8281 28.2749 31.7415 28.1492 31.6329 28.044L25.6132 22.0061Z" fill="white" />
      </g>
      <defs>
        <filter id="filter0_d_198_35742" x="0" y="0" width="48" height="48" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_198_35742" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_198_35742" result="shape" />
        </filter>
      </defs>
    </svg>
  </div>
  <div class="proactive-chat-modal-title">Hi there! 👋 How can we help?</div>
  <div class="proactive-chat-modal-subtitle">Help choosing a product</div>
  <div class="proactive-chat-modal-text">Call our sales team at 1-888-829-8589 or chat live.</div>
  <!--   Start Chat Button -->
  <div class="btn btn-primary chat-btn">
    <span class="btn-text">Start chat</span>
  </div>
  <div class="proactive-chat-modal-subtitle">Product or technical support</div>
  <!--   Support Centre button -->
  <a href="https://quickbooks.intuit.com/ca/support/" data-wa-link="proactive-chat-support" class="btn btn-tertiary chat-btn">
    <span class="btn-text">Go to support centre</span>
  </a>
</div>`;

// document.addEventListener("DOMContentLoaded", () => {
bodyContent.insertAdjacentHTML("beforeend", proactiveChatBtn);
bodyContent.insertAdjacentHTML("beforeend", newModal);
// console.log("DomLoaded");
// });

var proActiveModal = document.getElementById("proactive-chat-modal");

setTimeout(() => {
  proActiveModal.classList.remove("hide-modal");
  console.log("removed class");
}, 5000);
setTimeout(() => {
  proActiveModal.classList.add("hide-modal");
  console.log("added class");
}, 10000);

console.log("From IXP");
