var CLOUDINARY_URL = "CLOUDINARY_URL=https://api.cloudinary.com/v1_1/nazik";
var CLOUDINARY_UPLOAD_PRESET = 'ml_default';

var imgPreview = document.getElementById('id-preview');
var fileUpload = document.getElementById('file-upload');

var myWidget = cloudinary.createUploadWidget({
  cloudName: 'nazik', 
  uploadPreset: 'ml_default'}, (error, result) => { 
    if (!error && result && result.event === "success") { 
      console.log('Done! Here is the image info: ', result.info); 
    }
  }
)

fileUpload.addEventListener('change', function(event) {
  var file = event.target.files[0];
  var formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

  axios({
      url: CLOUDINARY_URL,
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-unlearncoded'
      },
      data: formData
    }).then(function(res) {
          console.log(rest);
          imgPreview.src = res.data.secure_url;
    }).catch(function(err) {
         console.error(err);
    });

});
  
