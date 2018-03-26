console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  // code in here
  $.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/albums',
   success: handleSuccess,
   error: handleError
 });

 function handleSuccess(json) {
   console.log(json);
   json.forEach(function(albums){
     $('.container').append(`<p>${albums.title} - ${albums.artist}</p>`);
   })
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }



$.ajax({
   method: 'GET',
   url: 'http://localhost:3000/api/taquerias',
   success: handleTacoSuccess,
   error: handleError
 });

 function handleTacoSuccess(json) {
   console.log(json);
   json.forEach(function(taqueria){
   $('.container').append(`<p>${taqueria.name}</p>`);
   })
 }

 function handleError(xhr, status, errorThrown) {
   console.log('uh oh');
 }

});

