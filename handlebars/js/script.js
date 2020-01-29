// Esercizio 2
// In una sottocartella handlebars fate una pagina semplice con un input e un pulsante e inviate un messaggio a cui segue una risposta come avete fatto per boolzapp, usando però handlebars.

$(document).ready(
  function() {



  $('#invio').on('click',
  function() {
    var MyText = $('#mymsg').val();
    var source = document.getElementById("entry-template").innerHTML;
    var template = Handlebars.compile(source);
    var context = {
      text: MyText,
      time: '23.00',
      sentreceived: 'sent',
     };
    var html = template(context);
    $('#container').append(html);

    setTimeout(function() {
      var source = document.getElementById("entry-template").innerHTML;
      var template = Handlebars.compile(source);
      var context = {
        text: 'ciao',
        time: '23.00',
        sentreceived: 'received',
       };
      var html = template(context);
      $('#container').append(html);

    }, 1000);


    });


  });
