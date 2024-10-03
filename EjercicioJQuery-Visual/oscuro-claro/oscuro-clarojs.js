$(document).ready(function () {
    $(document).on("click", "#btn-oscuro", function () {
        $("body").addClass("oscuro");
        $("body").removeClass("claro");

        $("#btn-oscuro").hide();
        $("#btn-claro").show();
    });

    $(document).on("click", "#btn-claro", function () {
        $("body").addClass("claro");
        $("body").removeClass("oscuro");

        $("#btn-claro").hide();
        $("#btn-oscuro").show();
    });

});
