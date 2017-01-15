/**
 * Created by Vladislav on 17.12.2016.
 */

$(document).ready(function () {
    var timePopup = function () {
        if ($("#popup-yes").is(":checked")) {
            $('#time_popup').fadeIn();
        } else {
            $('#time_popup').fadeOut();
        }
    };
    timePopup();
    changeForm();
    $("input:radio").on('click', function () {
        timePopup();
    });
    function changeForm() {
        var type = window.location.hash.substr(1);
        var pageName;
        switch (type) {
            case '1':
                pageName = "Рабочее время";
                $('#popup').css('display', 'block');
                timePopup();
                break;
            case '2':
                pageName = "Нерабочее время";
                $('#popup').css('display', 'block');
                timePopup();
                break;
            case '3':
                pageName = "Неудобно говорить";
                $('#time_popup').css('display', 'none');
                $('#popup').css('display', 'none');
                break;
            case '4':
                pageName = "Уход со страницы";
                $('#time_popup').css('display', 'none');
                $('#popup').css('display', 'none');
                break;
        }
        $('#head_title').html(pageName);
    }

    window.onhashchange = function () {
        changeForm();
    };

    $('#submit').on('click', function () {
        var isShowed = $("#popup-yes").is(":checked");
        var obj = {
            type: window.location.hash.substr(1),
            text: $('#text').val(),
            isShowed: isShowed,
            pause: isShowed ? $('#time').val() : null,
            icon: null
        }
    });
});