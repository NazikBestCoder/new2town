var CLOUDINARY_URL = "https://res.cloudinary.com/nazik/image/upload/v1634746241/Screen_Shot_2021-09-02_at_11.32.19_PM_hs3p8p.png";
var imgPreview = document.getElimentById('id-preview');
var fileUpload = document.getElementById("file-upload");

fileUpload.addEventListener("change", function(event) {
  var file = event.target.files[0];

});