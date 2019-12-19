

$(document).ready(function(){

    var data = {
        name :'',
        image : '',
        answer: []
    }


    $(".form-button").click(function(e){
        e.preventDefault()
        $("form :input[type=radio]:checked").each(function() {
            var value = $(this).val();
            data.answer.push(this.value)
        });
        if(data.answer.length < 2){
            console.log("not all boxes have been checked")
        }else if( $("#fName").val() === ''){
            console.log("First name is wrong")
        }else if($("#imageUrl").val() === ''){
            console.log("Missing iamge url")
        }
        
        })

    $.post("api/friends",name ,function(data) {
            console.log(data)
        }
    )
});




