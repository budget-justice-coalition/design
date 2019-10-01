// // js Stuffs

// const toggleClass =  (el, cls) => {
//   if (Array.isArray(cls)) {
//       cls.map((cl) => {
//           el.classList.toggle(cl);
//       });
//   } else {
//       el.classList.toggle(cls);
//   }
// };

// toggleClass(document.getElementsByClassName('glossary-link'), 'active');


var glossaryLink = document.querySelectorAll(".glossary-link");

for (var i = 0; i < glossaryLink.length; ++i) {
  glossaryLink[i].addEventListener('click', toggleClasses);
}

function toggleClasses() {
  var i = 0;
  for (i = 0; i < glossaryLink.length; ++i) {
    glossaryLink[i].classList.toggle('active');
  }
}