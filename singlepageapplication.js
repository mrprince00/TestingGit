// //Listen when a button, with a class of "myButton", is clicked
// //You can use any jQuery/JavaScript event that you'd like to trigger the call
// $('.myButton').click(function() {
// //Send the AJAX call to the server
//   $.ajax({
//   //The URL to process the request
//     'url' : 'page.php',
//   //The type of request, also known as the "method" in HTML forms
//   //Can be 'GET' or 'POST'
//     'type' : 'GET',
//   //Any post-data/get-data parameters
//   //This is optional
//     'data' : {
//       'paramater1' : 'value',
//       'parameter2' : 'another value'
//     },
//   //The response from the server
//     'success' : function(data) {
//     //You can use any jQuery/JavaScript here!!!
//       if (data == "success") {
//         alert('request sent!');
//       }
//     }
//   });
// });

var LOADING_GIF = '<center><img src="/wp-content/themes/hatchery_theme/images/loading.gif" alt="Loading..." class="loading-icon"/></center>';

function collection(param){
  if(param=='ut_mail'){
    jQuery('#changer').empty().html(LOADING_GIF);
  jQuery( "#changer" ).empty().load( "/wp-content/themes/hatchery_theme/changer.php", {"ut_mail" : "mr_prince00@hotmail.com"} );
  }
  else if(param=='name'){
    jQuery('#changer').delay(400).empty().html(LOADING_GIF);  
  jQuery( "#changer" ).delay(400).empty().load( "/wp-content/themes/hatchery_theme/changer.php", {"name" : "Byron"} );
  }
}







