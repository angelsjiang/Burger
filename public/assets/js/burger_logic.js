$(function() {
    $(".change-status").on("click", function() {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log(id, newDevoured);

        var newState = {
            devoured: newDevoured
        };
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newState
        }).then(function() {
            console.log("Changed burger state to ", newState);
            location.reload();
        });
    });

    $("")
});