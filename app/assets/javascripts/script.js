$(document).ready(function(){

  $(".email-link").on('click', function() {

      var href = $(this).attr('path');

    $.ajax({
      url : href,
      type : 'GET',
      dataType : 'json',
      success : function(json, statut){
        var template = "<h1>" + json.object + "</h1><p>" + json.body + "</p>";
        template += '<button classe="delete">Supprimer cet Email</button>';

        $('#email').html(template);
        $('#email .delete').on('click', function(){

          $.ajax({
            url : href,
            type : 'DELETE',
            dataType : 'json',
            success : function(json, statut){
              $('#email').html("");
              console.log("??");
            }
          });

        })
      }

    });

  });

});

