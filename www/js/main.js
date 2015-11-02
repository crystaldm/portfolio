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

  if(dataThumb == 01) {
    lightbox.className = '';
    var test = document.getElementById('project-item-01');
    test.className = 'fadein';
  } else if(dataThumb == 02) {
    lightbox.className = '';
    var test = document.getElementById('project-item-02');
    test.className = 'fadein';
  }

  console.log(dataThumb);
 }

init();
