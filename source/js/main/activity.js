"use strict";
(function () {
  const container = document.querySelector(".js-activity");
  if (!container) return;

  const togglers = container.querySelectorAll(".js-activity-button");
  const content = container.querySelectorAll(".js-activity-item");

  if (!togglers.length | !content.length) return;

  togglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      hideContent();
      const { id } = target.dataset;
      target.classList.add("active");
      container
        .querySelector(`.js-activity-item[data-item="${id}"]`)
        .classList.add("active");
    });
  });

  function hideContent() {
    container.querySelectorAll(".active").forEach((activeEl) => {
      activeEl.classList.remove("active");
    });
  }

  // Accordeon
  const accordeonTogglers = document.querySelectorAll(".js-activity-toggler");
  if (!accordeonTogglers.length) return;

  accordeonTogglers.forEach((toggler) => {
    toggler.addEventListener("click", (event) => {
      const target = event.currentTarget;
      if (!target) return;
      const content = target.nextElementSibling;
      if (!content) return;
      target.classList.toggle("active");
      content.classList.toggle("active");
    });
  });
})();
