// Turn on Bootstrap
$('[data-toggle="tooltip"]').tooltip();
$('#survery').hide()
    
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1100);
}

var $clock = $('#clock');





$('#btn-reset').click(function() {
  //$clock.countdown(get15dayFromNow());
  $clock.countdown(get15dayFromNow(), function(event) {
    //$(this).html(event.strftime('%D days %H:%M:%S'));
    $(this).html(event.strftime('%M:%S'));
    $('#btn-reset').hide()
    $('.content').hide()
    $('#survery').show()
    console.log(event.offset.minutes , event.offset.seconds)

    alert_reminder(event.offset.minutes , event.offset.seconds)

  });
});
$('.alert_row').hide()
function alert_reminder(minutes , seconds){
    if (minutes==1 && seconds==0){
        $('.alert_row').show();
    }

}




