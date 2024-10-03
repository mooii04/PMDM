$(document).ready(function () {

    var i = 1;

    $(document).on("click", "#btn-add-paragraph", function () {
        $("#content").append("<p>" + i + " - Lorem ipsum <button id='btn-clear'>Clear</button></p>");
        i++;
    });

    $(document).on("click", "#btn-clear", function () {
        $(this).parent().remove();
    });
});