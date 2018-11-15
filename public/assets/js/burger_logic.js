$(function() {
    $(".change-status").on("click", function() {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newState = {
            devoured: newDevoured
        };
        
    })
});