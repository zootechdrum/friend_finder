

$(document).ready(function () {

    var formQuestions = 9;
//data to be send to api end point
    var data = {
        name: '',
        image: '',
        answer: []
    }


    $(".form-button").click(function (e) {
        e.preventDefault()
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
            data.image = $("#imageUrl").val()
            console.log(data)
            // $.post("api/friends", data, function (data) {
            //     console.log(data)
            // })
        }
    })
});




