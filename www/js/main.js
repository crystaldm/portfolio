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
  dataThumb = event.target.parentNode.getAttribute('data-thumb');
  dataProject = event.target.parentNode.getAttribute('data-project');
  var projName = "project-item-" + dataThumb;
  var test = document.getElementById(projName);
  lightbox.className = '';
  test.className = 'fadein';

  console.log(dataThumb);
 }

init();
