var projectThumb;
var closeBtn;
var downloadBtn;
var lightbox;
var headerC;
var thumbnailC;
var footer;

function init() {
  projectThumb        = document.getElementsByClassName('thumbnail');
  closeBtn            = document.getElementById('close');
  downloadBtn         = document.getElementById('download-btn');
  lightbox            = document.getElementById('lightbox');
  headerC             = document.getElementById('header');
  thumbnailC          = document.getElementById('thumbnail-c');
  footer              = document.getElementById('footer');

  addListeners();
}

function addListeners() {
  closeBtn.addEventListener("click", closeLightbox, false);
  downloadBtn.addEventListener("click", downloadFile, false);

  for(var i=0; i < projectThumb.length; i++) {
    projectThumb[i].addEventListener("click", lightboxHandler, false);
  }
}

function lightboxHandler(event) {
  dataThumb = event.target.parentNode.getAttribute('data-thumb');
  dataProject = event.target.parentNode.getAttribute('data-project');
  var projName = "project-item-" + dataThumb;
  var projTarget = document.getElementById(projName);

  //lightbox fadein
  lightbox.className = '';
  projTarget.className = 'fadein';

  //background blur on lightbox
  headerC.className = 'blur-out';
  thumbnailC.className = 'blur-out';
  footer.className = 'blur-out';

  console.log(dataThumb);
 }

function closeLightbox() {
  var projName = "project-item-" + dataThumb;
  var projTarget = document.getElementById(projName);

  //lightbox fadein
  lightbox.className = 'hidden';
  projTarget.className = '';

  //background blur on lightbox
  headerC.className = '';
  thumbnailC.className = '';
  footer.className = '';
}

function downloadFile() {
  window.open('moreno-crystal-resume-2015.pdf', '_blank');
}

init();
