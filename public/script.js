$(function(){
    $("#modal-btn").click(function(){
        $("#myModal").css("display", "block");
    })

    $(".close, .modal").click(function(){
        $("#myModal").css("display", "none");
    })
});