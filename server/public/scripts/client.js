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
  $('#viewKoalas').on('click', '.delete-button', deleteKoala);
  $('#viewKoalas').on('click', '.transfer-ready-button', updateKoala);
}



function getKoalas(){
  console.log( 'in getKoalas' );
  // ajax call to server to get koalasn then append to the DOM
  $.ajax({
    method: 'GET',
    url: '/koalas'
  }).then((result) => {
    $('#viewKoalas').empty();
    let koalas = result;
    for (koala of koalas) {
      if (koala.ready_to_transfer == true) {
        $('#viewKoalas').append(`<tr><td>${koala.koala_name}</td><td>${koala.koala_age}</td>
                               <td>${koala.koala_gender}</td><td>${koala.ready_to_transfer}</td>
                               <td>${koala.koala_notes}</td>
                               <td><div></div></td>
                               <td><button class="delete-button" data-koalaid=${koala.id}>Delete</button></td>
                               </tr>`)
      } else {
        $('#viewKoalas').append(`<tr><td>${koala.koala_name}</td><td>${koala.koala_age}</td>
                               <td>${koala.koala_gender}</td><td>${koala.ready_to_transfer}</td>
                               <td>${koala.koala_notes}</td>
                               <td><button class="transfer-ready-button" data-transferid="${koala.id}">Ready for Transfer</button></td>
                               <td><button class="delete-button" data-koalaid="${koala.id}">Delete</button></td>
                               </tr>`)
      }
      
    }
}) // end getKoalas
}

// Post to the database
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

// Updates ready_to_transfer from false to true
function updateKoala() {
  const koalaId = $(this).data('transferid');
  console.log(koalaId);
  
  console.log( 'in updateKoalas ');
  $.ajax({
    method: 'PUT',
    url: `koalas/update/${koalaId}`
  }).then(function(response) {
    getKoalas();
  }).catch(function(error) {
    alert(`Something went wrong. Unable to get Koala ready.`)
    console.log('Error in PUT', error)
  });
}

// Delete a row from the table
function deleteKoala() {
  console.log('delete pressed');
  const koalaId = $(this).data('koalaid')

  $.ajax({
    method: 'DELETE',
    url: `/koalas/${koalaId}`
  }).then((response) => {
    getKoalas();
  })
  
}