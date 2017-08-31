$(document).ready(function(){

  $(".email-link").on('click', function() {

      var href = $(this).attr('path');

    $.ajax({
      url : href,
      type : 'GET',
      dataType : 'json',
      success : function(json, statut){
        $('#email').html("<h1>" + json.object + "</h1><p>" + json.body + "</p>");
      }

    });

  });



});

