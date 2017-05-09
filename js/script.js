$(document).ready(function() {
    $('.checkbox').click(function(event) {

        var checked = $("input:checkbox:checked");
        $(checked).next().addClass('ckecked__item').html("<i class=\"fa fa-check\" aria-hidden=\"true\"></i>");

        var heightItem = $(checked).closest('.course__item').innerHeight();
        var colorBox = $(checked).parents('.course__item').find(".color__box");
        $(colorBox).innerHeight(heightItem).slideDown("slow", function() {
            $(colorBox).addClass('display-block');
        });
        setTimeout(function() {
            $(checked).parents('.course__item').remove();
        }, 1000);

        if ($("input:checkbox").length === 1) {

            $('.course__list').remove();
            $('.course-header').remove();
            $('.complete__header').css({ "display": "block" });
        }

    });




});