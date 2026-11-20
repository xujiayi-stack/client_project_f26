/* Client Project Deliverable #3 - JavaScript
   Written by me for this class. */

// 1. Footer: show the current year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// 2. Challenging element: "Find Your Stage" guide on index.html
//    Called by onsubmit="return findStage()" on the form with id="stage-form"
function findStage() {
  let result = document.getElementById("stage-result");
  let choice = document.querySelector('input[name="stage"]:checked');

  let pageUrl = "";
  let pageName = "";

  if (choice == null) {
    // Nothing selected: ask the user to pick an option
    result.textContent = "Please choose the option that best describes where you are.";
    return false;
  } else if (choice.value == "prep") {
    pageUrl = "prep.html";
    pageName = "Preparing Your Experience";
  } else if (choice.value == "start") {
    pageUrl = "start.html";
    pageName = "Starting Your Experience";
  } else {
    pageUrl = "during.html";
    pageName = "During Your Experience";
  }

  // Show a link to the recommended page (the screen reader announces it because of aria-live)
  let link = document.createElement("a");
  link.href = pageUrl;
  link.textContent = pageName;

  result.textContent = "Start here: ";
  result.appendChild(link);

  return false; // stay on this page instead of submitting the form
}
