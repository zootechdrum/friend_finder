

$(document).ready(function () {

    var formQuestions = $(".formQ").length;
//data to be send to api end point


    $(".form-button").click(function (e) {
        e.preventDefault()
        var data = {
            name: '',
            image: '',
            answer: []
        }
        $("form :input[type=radio]:checked").each(function () {
            var value = $(this).val();
            data.answer.push(parseInt(this.value))
        });
        //Removes any child elements
        $("#alert").empty();

        if (data.answer.length < formQuestions) {
            $("#alert").append("<p class='alert alert-danger'>Please answer every question</p>")
        } else if ($("#fName").val() === '') {
            $("#alert").append("<p class='alert alert-danger'>Please Enter your name</p>")
        } else if ($("#imageUrl").val() === '') {
            $("#alert").append("<p class='alert alert-danger'>Please Enter your ImageUrl</p>")
        } else {
            data.name = $("#fName").val()
            data.image = $("#imageUrl").val();

            $.post( "/api/friends", data , function( resFromEnd ) {
                toggle(resFromEnd)
              });
              //resets the data object.
              data = {
                name: '',
                image: '',
                answer: []           
            }
            //Clears all inputs after submission
            restart()

        }
    })

    function toggle(info) {
        $("#friendName").append(info.name);
        $("#friendImg").attr('src', info.image);
        $('#myModal').modal('toggle');
    }

    function restart() {
        $("#fName").val('');
        $("#imageUrl").val('');
        $(".form-check-input").prop('checked', false);
    }
});




