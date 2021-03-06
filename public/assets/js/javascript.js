$(function () {
    $(".btn-warning").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newDevoured");

        var newDevouredState = {
            devoured: newDevoured
        };

        console.log('this is the new devoured state:' + newDevouredState.devoured);
        console.log('this is the type of newdevouredstate variable' + typeof newDevouredState.devoured);
        if (newDevouredState.devoured === 0) {
            newDevouredState = 1;
            console.log('newdevouredstate was = to 0 and was changed to ' + newDevouredState);
        } else {
            newDevouredState = 0;
            console.log('newdevouredstate was = 1 and changed to ' + newDevouredState);
        }
        return newDevouredState;


        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to ", newDevoured);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#name").val().trim(),
            devoured: 0
        };

        console.log("********************************************");

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});