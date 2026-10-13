(function () {
  "use strict";

  var button = document.getElementById("projects-button");
  var dialog = document.getElementById("projects-dialog");
  var close = document.getElementById("projects-close");

  function openProjects() {
    if (!dialog) return;
    // showModal() gives the native backdrop, focus trap and Escape handling.
    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      dialog.setAttribute("open", "");
    }
  }

  function closeProjects() {
    if (!dialog) return;
    if (typeof dialog.close === "function") {
      dialog.close();
    } else {
      dialog.removeAttribute("open");
    }
  }

  if (button) button.addEventListener("click", openProjects);
  if (close) close.addEventListener("click", closeProjects);

  // Clicking the backdrop closes the dialog.
  if (dialog) {
    dialog.addEventListener("click", function (event) {
      if (event.target === dialog) closeProjects();
    });
  }
})();
