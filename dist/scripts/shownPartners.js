//Funny actors
var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);
ы;
function picLink() {
  var allImages = document.querySelectorAll(".partnerSection img");

  for (var i = 0; i < allImages.length; i++) {
    allImages[i].className = "hide";
  }

  var picId = this.attributes["data-img"].value;
  var pic = document.getElementById(picId);
  if (pic.className) {
    pic.className = pic.className == "hide" ? "" : "hide";
    event.preventDefault();
  }
}
