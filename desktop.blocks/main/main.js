$(document).ready(function() {

    $("button").click(function(){
        var pos = $("input").val();
        $("<div class='comment'>" +"<div class='name'> Лилия Семеновна " + "</div>" + "<div class='date'>13 октября 2011" + "</div>" + "<div class='comment-wrapper'>" + pos + "</div>" + "</div>").appendTo(".reviews");
        $("input").val('');
    });

    $('input').keydown(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        var pstLength = $(this).val().length;
        var charactersLeft = 140 - pstLength;

        if ((event.ctrlKey && event.keyCode==13)){
            var pos = $("input").val();
            $("<div class='comment'>" +"<div class='name'> Лилия Семеновна " + "</div>" + "<div class='date'>13 октября 2011" + "</div>" + "<div class='comment-wrapper'>" + pos + "</div>" + "</div>").appendTo(".reviews");
            $("input").val('');
        }

    });



});

