/**
 * Created by etovladislav on 15.01.17.
 */
$("#phone").mask("+7(999) 999-99-99");
jQuery('#time').datetimepicker({
    datepicker: false,
    format: 'H:i'
});
jQuery.datetimepicker.setLocale('ru');
jQuery('#date').datetimepicker({
    i18n: {
        ru: {
            months: [
                'Январь', 'Февраль', 'Март', 'Апрель',
                'Май', 'Июнь', 'Июль', 'Август',
                'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь',
            ],
            dayOfWeek: [
                "Пн.", "Вт.", "Ср.", "Чт.",
                "Пт.", "Сб.", "Вс.",
            ]
        }
    },
    timepicker: false,
    format: 'd.m.Y'
});

var sPageURL = decodeURIComponent(window.location.search.substring(1)),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;
var utm = [];
for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');
    if (sParameterName[0].indexOf('utm') + 1) {
        utm.push({key: sParameterName[0], value: sParameterName[1]})
    }
    console.log(utm);

}
;


var info = [];
$.getJSON("http://192.168.8.101/admin/info.php", function (data) {
    var d = new Date();
    var h = d.getHours();
    // if (h >= 18 || h <= 8) {
    //     $('#image').html('<img src="http://192.168.8.101/admin/images/' + data[1].icon + '" alt="">');
    //     $('#text').html(data[1].monitor_text);
    //     $('.date').css('display','block');
    //     $('#link').fadeIn();
    // } else {
        $('#image').html('<img src="http://192.168.8.101/admin/images/' + data[0].icon + '" alt="">');
        $('#text').html(data[0].monitor_text);
        $('.date').css('display','none');
        $('#link').css('display', 'block');
    // }
});

$('#link').on('click', function () {
    $('.date').css('display','block');
    $('#link').css('display', 'none');


})
$('#subm-form').on('submit', function () {
    console.log(123123);
    var phone = $('#phone').val();
    var date = $('#date').val();
    var time = $('#time').val();
    if (phone.length != 0 && time.length != 0 && date.length != 0) {
        $.ajax({
            url: "http://192.168.8.101/user/fileForRequest.php",
            type: "POST",
            data: {
                phone: phone,
                date: date + " " + time,
                utm: utm
            },
            success: function () {
                $('#subm-form').html("Спасибо за заявку, ожидайте")
                return false;
            }
        })
        return false;

    } else {
        return false;
    }

})
