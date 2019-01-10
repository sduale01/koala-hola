console.log( 'js' );

$( document ).ready( function(){
  console.log( 'JQ' );
  // Establish Click Listeners
  setupClickListeners()
  // load existing koalas on page load
  getKoalas();

}); // end doc ready

function setupClickListeners() {
  $( '#addButton' ).on( 'click', saveKoala);
}



function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalas
  
} // end getKoalas

function saveKoala(){
  // package the data
  getKoalaInfo = {
    koala_name: $('#koala_name_in').val(),
    koala_age: $('#koala_age_in').val(),
    koala_gender: $('#koala_gender_in').val(),
    ready_to_transfer: $('#ready_to_transfer_in').val(),
    koala_notes: $('#koala_notes_in').val(),
  }
  // ajax call to server to get koalas
 
}

function updateKoala() {
  const koalaId = $(this).data('koalaid');
  console.log( 'in updateKoalas ');
  $.ajax({
    method: 'PUT',
    url: `koalas/update/${koalaId}`
  }).then(function(response) {
    saveKoala();
  }).catch(function(error) {
    alert(`Something went wrong. Unable to get Koala ready.`)
    console.log('Error in PUT', error)
  });
}

function deleteKoala() {
  
}