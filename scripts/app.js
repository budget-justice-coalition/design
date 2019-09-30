// js Stuffs

// Menu

const toggleMenu = document.querySelector("#navigation button");
const menu = document.querySelector("#navigation ul");

toggleMenu.addEventListener("click", function () {
  const open = JSON.parse(toggleMenu.getAttribute("aria-expanded"));
  toggleMenu.setAttribute("aria-expanded", !open);
  menu.hidden = !menu.hidden;
});

// Accordion

// Listen for click on the document
document.addEventListener('click', function (event) {
  
  //Bail if our clicked element doesn't have the class
  if (!event.target.classList.contains('accordion-toggle')) return;
  
  // Get the target content
  var content = document.querySelector(event.target.hash);
  if (!content) return;
  
  // Prevent default link behavior
  event.preventDefault();
  
  // If the content is already expanded, collapse it and quit
  if (content.classList.contains('active')) {
    content.classList.remove('active');
    return;
  }
  
  // Get all open accordion content, loop through it, and close it
  var accordions = document.querySelectorAll('.accordion-content.active');
  for (var i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove('active');
  }
  
  // Toggle our content
  content.classList.toggle('active');
})


// <a href="#content-1" class="accordion-toggle">Show more 1</a>
// <div class="accordion-content" id="content-1">
//   Content goes here...
// </div>
// <a href="#content-2" class="accordion-toggle">Show more 2</a>
// <div class="accordion-content" id="content-2">
//   Content goes here...
// </div>


// .accordion-toggle {
//   display: block;
// }

// .accordion-content {
//   display: none;
// }

// .accordion-content.active {
//   display: block;
// }