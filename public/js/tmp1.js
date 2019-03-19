// Turn on Bootstrap
$('.sticky').hide()
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 4 * 1000);
}
var $clock = $('.sticky');
$('#alert-show1').hide()
$('.banner').hide()
$('.intro').hide()

function shake(){
  setTimeout(function(){
    $("#alert-show1").hide();
  } , 3000);
}



$('#go').click(function() {

    var items = Array('https://www.surveycake.com/s/KLb3v' , 'https://www.surveycake.com/s/11WXl');
    var item = items[Math.floor(Math.random()*items.length)];
    $('.sticky').show()
    $('.page1').hide()
    document.getElementById('surveycake').innerHTML = "<iframe width='100%' height='800' src='"+item+"'style='overflow:hidden;border:#ddd 1px solid;' allowTransparency='true' frameborder='0'> </iframe>"
    setTimeout(function(){

        $clock.countdown(get15dayFromNow(), function(event) {
          //$(this).html(event.strftime('%D days %H:%M:%S'));
          $(this).html(event.strftime('%M:%S'));
          
          //console.log(event.offset.minutes , event.offset.seconds)
      
          alert_reminder(event.offset.minutes , event.offset.seconds)
          $('.banner').hide()
          $('.intro').hide()
    
      
        });
    
       }, 5000);
})

document.getElementById('blink').innerText=""


function alert_reminder(minutes , seconds){
    if (minutes==3 && seconds==50){
        document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分50秒快快快快</p>"
        $('#alert-show1').show()
        shake()
    }
    if (minutes==3 && seconds==40){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分40秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==3 && seconds==30){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分30秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==3 && seconds==20){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分20秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==3 && seconds==10){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分10秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }

    if (minutes==3 && seconds==00){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下3分00秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }

    if (minutes==2 && seconds==50){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分50秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }

    if (minutes==2 && seconds==40){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分40秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==2 && seconds==30){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分30秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }if (minutes==2 && seconds==20){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分20秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }if (minutes==2 && seconds==10){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分10秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }if (minutes==2 && seconds==00){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下2分00秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==1 && seconds==50){
    document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分50秒快快快快</p>"
    $('#alert-show1').show()
    shake()
    }
    if (minutes==1 && seconds==40){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分40秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==1 && seconds==30){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分30秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }
    if (minutes==1 && seconds==20){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分20秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }

    if (minutes==1 && seconds==10){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分10秒快快快快</p>"
      $('#alert-show1').show()
      shake()
    }

    if (minutes==1 && seconds==00){
      document.getElementById('blink').innerHTML = "<p class='rr'>剩下1分00秒快快快快</p>"
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

      $('#blink').css('animation-iteration-count',10)
      $('#alert-show1').show()
      $('.sticky').hide()      
    }

  }
  





