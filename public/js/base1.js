// Turn on Bootstrap
$('.sticky').hide()


// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1160);
}

var $clock = $('.sticky');


$('#alert-show1').hide()



$('.banner').hide()
$('.intro').hide()



$('#go').click(function() {
  //$clock.countdown(get15dayFromNow());
  $('.sticky').show()
  $('.page1').hide()
  document.getElementById('surveycake').innerHTML = "<iframe width='100%' height='800' src='https://www.surveycake.com/s/9k4O7' style='overflow:hidden;border:#ddd 1px solid;' allowTransparency='true' frameborder='0'> </iframe>"
  
  setTimeout(function(){

    $clock.countdown(get15dayFromNow(), function(event) {
      //$(this).html(event.strftime('%D days %H:%M:%S'));
      $(this).html(event.strftime('%M:%S'));
      
      console.log(event.offset.minutes , event.offset.seconds)
  
      //alert_reminder(event.offset.minutes , event.offset.seconds)
      $('.banner').hide()
      $('.intro').hide()
    });

   }, 5000);
});

document.getElementById('blink').innerText=""


function alert_reminder(minutes , seconds){
    if (minutes==1 && seconds==0){
        //$('#alert-show').show()
        //$('#alert-show1').css('top',15);
        document.getElementById('blink').innerHTML = "<p class='rr'>剩下60秒快快快快</p>"
        $('#alert-show1').show()
        shake()
    }
    if (minutes==0 && seconds==50){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下50秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==0 && seconds==40){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下40秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==0 && seconds==30){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下30秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==0 && seconds==20){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下20秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==0 && seconds==10){
      document.getElementById('blink').innerHTML = "<p class='rr'>沒有時間了！快交出問卷！</p>"
      $('#alert-show1').show()
      $('.sticky').hide()      
    }

}

function shake(){
    setTimeout(function(){
      $("#alert-show1").hide();
    } , 3000);
}


