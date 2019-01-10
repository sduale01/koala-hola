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
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((result) => {
    let koalas = result;
    for (koala of koalas) {
      $('#viewKoalas').append(`<tr><td>${koala.koala_name}</td><td>${koala.koala_age}</td>
                               <td>${koala.koala_gender}</td><td>${koala.ready_to_transfer}</td>
                               <td>${koala.koala_notes}</td><td>${koala.mark_ready}</td>
                               <td>${koala.remove}</td></tr>`)
    }
}) // end getKoalas
}
function saveKoala(){
  // package the data
  getKoalaInfo = {
    koala_name: $('#koala_name_in').val(),
    koala_age: $('#koala_age_in').val(),
    koala_gender: $('#koala_gender_in').val(),
    ready_to_transfer: $('#ready_to_transfer_in').val(),
    koala_notes: $('#koala_notes_in').val(),
  }
  $.ajax({
    method:'POST',
    url:'/koalas',
    data:getKoalaInfo
  }).then(function(result){
    getKoalas();
  });
}
  
  // ajax call to server to get koalas



function updateKoala() {

}

function deleteKoala() {
  
}