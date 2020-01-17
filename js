function check() {
    $(".collapse.show").each(function () {
        $(this).prev(".card-header").find(".arrow").addClass("arrow-up").removeClass("arrow-down");
    });

    $(".collapse").on('show.bs.collapse', function () {
        $(this).prev(".card-header").find(".arrow").removeClass("arrow-down").addClass("arrow-up");
    }).on('hide.bs.collapse', function () {
        $(this).prev(".card-header").find(".arrow").removeClass("arrow-up").addClass("arrow-down");
    });
}

function DatePicker() {
    $(function () {
        $("#datepicker").datepicker();
    });
}
