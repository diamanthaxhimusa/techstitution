$(document).ready(function() {

    $('[data-click]').on('click', function(e) {
        $($(this).attr('dest')).trigger('click');
    });
    $("#forma").submit(function(e) {
        alert(
            "!!! Autoriteti do te procedoj me shqyrtimin e Formularit te Njoftimit vetem pas kompletimit te Dosjes dhe do ta njoftoj ndermarresin per vendosjen ne Regjistrin e Njoftimit brenda 5 (pese) diteve te punes nga ta data e kompletimit te Njoftimit"
        );
    });
    $(".etc_check").on('click', function() {
        if ($(this).attr('checked', 'checked')) {
            $('.specify').toggleClass("specify-input");
        }
    });
    $(".etc_check_2").on('click', function() {
        if ($(this).attr('checked', 'checked')) {
            $('.specify-2').toggleClass("specify-input");
        }
    });
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});
