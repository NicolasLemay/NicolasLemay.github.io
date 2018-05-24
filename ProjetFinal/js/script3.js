$(document).ready(function () {
    $('#force').hide();
    var listeDeMessages = $('.message').toArray();
    for(var i = 0; i < listeDeMessages.length; i++){
        $(listeDeMessages[i]).css("background-image", "url(\"" + $(listeDeMessages[i]).find('.message-fond').attr("src") + "\")");
    }
    listeDeMessages = $('.message .message-parole').toArray();
     for(var i = 0; i < listeDeMessages.length; i++){
         var message = $(listeDeMessages[i]).html();
         $(listeDeMessages[i]).html("\" " + message + "\"");
     }
     listeDeMessages = $('.message .message-locuteur').toArray();
     for(var i = 0; i < listeDeMessages.length; i++){
         var locuteur = $(listeDeMessages[i]).html();
         $(listeDeMessages[i]).html("-" + locuteur);
     }
     alert("Cliquez sur les images pour entendre les paroles. En ce moment, les seuls fonctionnels sont Yoda, Dark Vador et Luke. Le reste sont introuvables en français.");
});

$('.message').click(function () {
    $(this).find('.audios').trigger('play');
}).css("cursor", "pointer");

$('#force-activation').click(function () {
    $('#may-the-force-be-with-you').get(0).currentTime = 0;
    $('#may-the-force-be-with-you').get(0).load();
    $('#force').fadeIn(500);
    $('#may-the-force-be-with-you').get(0).play();
});
$("#force").click(function(){
    $('#may-the-force-be-with-you').get(0).pause();
    $(this).fadeOut(500);
}).children().click(function(e) {
    return false;
});