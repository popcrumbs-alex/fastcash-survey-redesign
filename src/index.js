import { privacy, terms } from "./modal_data.js";

const globalState = {
  isModalOpen: false,
};

(function () {
  //load year to html for copyright
  const loadDate = () => {
    const date = new Date();
    const span = document.querySelector('[data-type-date="date"]');
    const currentYear = date.getFullYear();
    span.innerHTML = currentYear + "";
  };

  loadDate();
})();

(function () {
  const foundButtons = [...document.querySelectorAll("*[data-type-modal]")];
  const modal = document.querySelector(".modal--container");

  const processModalContent = (data = []) => {
    const modalBody = document.querySelector(".modal--container--body");
    //reset html on each open
    modalBody.innerHTML = "";
    return data.forEach((obj) => {
      //each tet obj should have a headline or text possibly both
      const headline = document.createElement("h4");
      const par = document.createElement("p");
      headline.textContent = obj.headline;
      par.textContent = obj.text;
      //paragraph styles
      par.style.color = "#999";
      par.style.lineHeight = "1.5";
      par.style.marginBottom = "1rem";
      par.style.marginTop = ".5rem";
      //////////////////////////////
      headline.style.marginTop = "1rem";
      headline.style.marginBottom = "0";
      //Append the elements to the modal container
      if (obj.headline) modalBody.appendChild(headline);
      if (obj.text) modalBody.appendChild(par);
    });
  };

  const handleModalContent = (data = "") => {
    const title = document.querySelector("[data-type-modal-title]");
    console.log("data and title", data, title);
    switch (data) {
      case "terms_cond":
        console.log("Yeet");
        title.textContent = "Terms & Conditions";
        processModalContent(terms);
        break;
      case "privacy_policy":
        title.textContent = "Privacy Policy";
        processModalContent(privacy);
        break;
      default:
        return;
    }
  };

  const handleModalState = (data = "") => {
    globalState.isModalOpen = !globalState.isModalOpen;
    modal.classList.toggle("hidden");
    handleModalContent(data);
  };

  foundButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      if (!btn.dataset) {
        console.error("No modal data provided");
        return;
      }
      handleModalState(btn.dataset.typeModal);
    });
  });
})();
