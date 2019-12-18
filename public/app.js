$(document).ready(function(){
    $("input[type='button']").click(function(){
        var radioValue = $("input[name='money']:checked").val();
        if(radioValue){
            alert("Your are a - " + radioValue);
        }
    });

    var name = {bam: "cc"} 
    $.post("api/friends",name ,function(data) {
            console.log(data)
        }
    )
});



