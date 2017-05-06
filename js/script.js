$(document).ready(function() {
    $('.checkbox').click(function(event) {

        var checked = $("input:checkbox:checked");
        $(checked).next().css({
            "border": "none",
            "background-image": "url(img/icons/check_bg.png)",
            "color": "#f6f7f2",
            "padding": "2px"
        }).html("<i class=\"fa fa-check\" aria-hidden=\"true\"></i>");

        var heightItem = $(checked).closest('.course__item').innerHeight();
        $(checked).parents('.course__item').find(".color__box").innerHeight(heightItem).slideDown("slow", function() {
            css("display", "block")
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

/*   chekeds = $(this).checked;

         console.log(checked);
         console.log(chekeds);


         $(chekeds).next().css({
             "border": "none",
             "background-image": "url(img/icons/check_bg.png)",
             "color": "#f6f7f2",
             "padding": "2px"
         }).html("<i class=\"fa fa-check\" aria-hidden=\"true\"></i>");

         var heightItem = $(chekeds).closest('.course__item').innerHeight();
         $(chekeds).closest('.course__item').find(".color__box").innerHeight(heightItem).css("display", "block");


     });*/