var projectThumb;
var lightbox;

function init() {
  projectThumb      = document.getElementsByClassName('thumbnail');
  lightbox          = document.getElementById('lightbox');

  // addImages();
  addListeners();
}

function addListeners() {
  for(var i=0; i < projectThumb.length; i++) {
    projectThumb[i].addEventListener("click", lightboxHandler, false);
  }
}

function addImages() {
  // add images dynamically
}

function lightboxHandler(event) {
  lightbox.className = '';
  dataThumb = event.target.parentNode.getAttribute('data-thumb');
  dataProject = event.target.parentNode.getAttribute('data-project');

  // if(dataThumb == 02) {
  //   lightbox.className = '';
  //   document.getElementById('inner-project-c-02').className = '';
  //   console.log(dataThumb);
  // }

  console.log(dataThumb);
 }

init();
