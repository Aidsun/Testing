var tabList = document.getElementById('tab-list');
var imageList = document.getElementById('image-list');

tabList.addEventListener('click', function(event) {
  if (event.target.tagName === 'LI') {
    var index = Array.prototype.indexOf.call(tabList.children, event.target);
    var images = imageList.getElementsByTagName('img');
    
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = 'none';
    }
    
    images[index].style.display = 'block';
  }
});