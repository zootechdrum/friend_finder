var data = {};

$(document).ready(function(){
    $(".form-button").click(function(){
        var radioValue = $("input:checked").each(function() {
            console.log(this.value)
        });

    });

    var name = {bam: "cc"} 
    $.post("api/friends",name ,function(data) {
            console.log(data)
        }
    )
});



