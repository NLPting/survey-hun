<<<<<<< HEAD
// Turn on Bootstrap
$('[data-toggle="tooltip"]').tooltip();
$('#survery').hide()
    
// 15 days from now!
function get15dayFromNow() {
  return new Date(new Date().valueOf() + 60 * 1100);
=======
const send = $("#send");
const aes_content = $("#write-aes");
var word_number = 0;
$('#score-feeback').hide();
$("#try-aes").hide()
document.getElementById('send-aes').disabled=true;
document.getElementById('try-aes').disabled=true;


API_URL = "http://thor.nlplab.cc:7777/aes"
API_URL_d = "http://thor.nlplab.cc:7777/aes_dect"
API_URL_d_sen = "http://thor.nlplab.cc:7777/dect_sen"







function score_it_post(query){
    
    $.ajax({
        type: "POST",
        url: API_URL,
        data: JSON.stringify({courpus: query}),
        dataType: 'json',
        success: function (data) {
            cerf_show(data)
        }, 
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            
            console.log("Status: " + textStatus); 
            console.log("Error: " + errorThrown); 
        } 
    })
}

function dect_it_post(query){
    
    $.ajax({
        type: "POST",
        url: API_URL_d,
        data: JSON.stringify({courpus: query}),
        dataType: 'json',
        success: function (data) {
            revise_content(data.sen_arry , data.score_arry)
            console.log(data)
        }, 
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            
            console.log("Status: " + textStatus); 
            console.log("Error: " + errorThrown); 
        } 
    })
}


function sen_dect(query){
    
    $.ajax({
        type: "POST",
        url: API_URL_d_sen,
        data: JSON.stringify({courpus: query}),
        dataType: 'json',
        success: function (data) {
            revise_sentence(data.sen_arry , data.tag_arry)
            console.log(data)
        }, 
        error: function(XMLHttpRequest, textStatus, errorThrown) { 
            
            console.log("Status: " + textStatus); 
            console.log("Error: " + errorThrown); 
        } 
    })
}

function revise_content(data , score){
    var content = ''
    for(i=0;i<data.length;i++){
        s = data[i].join(' ').replace(' ,',',').replace(' .','.').replace(' ?','?')
        
        grade = score[i]
        if (grade > 0.0 && grade < 0.15){
            content += '<span class="sen-notok"'+'id='+i +'>'+' '+s+'</span>'
        }
        else if(grade >= 0.15){
            content += '<span class="sen-bad"'+'id='+i+'>'+' '+s+'</span>'
        }
        else {
            content += ' '+s
        }
        
    }
    document.getElementById('feedback-dectect').innerHTML =content;
    $('#feedback-dectect').show();
}





function cerf_show(data){
    document.getElementById("cerf-leve").innerHTML = data['cerf'];
    document.getElementById("cerf-score").innerHTML = data['score'];
    document.getElementById("score-bar").innerHTML = data['score']+'%';
    $('#score-bar').outerWidth(data['score']+'%')
    

    if (data['cerf'] == 'A1'){
        
        $('#a2').css("background-color",'#e9ecef');
        $('#b1').css("background-color",'#e9ecef');
        $('#b2').css("background-color",'#e9ecef');
        $('#c1').css("background-color",'#e9ecef');
        $('#c2').css("background-color",'#e9ecef');

    }
    else if(data['cerf'] == 'A2'){
        
        $('#b1').css("background-color",'#e9ecef');
        $('#b2').css("background-color",'#e9ecef');
        $('#c1').css("background-color",'#e9ecef');
        $('#c2').css("background-color",'#e9ecef');
    
    }
    else if(data['cerf'] == 'B1'){
        
        $('#b2').css("background-color",'#e9ecef');
        $('#c1').css("background-color",'#e9ecef');
        $('#c2').css("background-color",'#e9ecef');
    }
    else if(data['cerf'] == 'B2'){
        
        $('#c1').css("background-color",'#e9ecef');
        $('#c2').css("background-color",'#e9ecef');

    }
    else if(data['cerf'] == 'C1'){
        $('#c2').css("background-color",'#e9ecef');
    }
    $('#score-feeback').show();

>>>>>>> 1e28fbf4f9ee9735820b666358a9ebd8268ea45b
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
<<<<<<< HEAD
$('.alert_row').hide()
function alert_reminder(minutes , seconds){
    if (minutes==1 && seconds==0){
        $('.alert_row').show();
=======

$(document).on('click','.B-II',function(){
    
    $('.linggle.search-result').hide()
    index = $(this).attr('id')
    console.log(sen , tag)
    var query = ''
    var tmp = []
    index_arry = [parseInt(index)-1 , parseInt(index) , parseInt(index)+1,parseInt(index)+2]
    console.log(index_arry)
    
    for(i=0;i<index_arry.length;i++){
        if (index_arry[i] > 0 && index_arry[i] < tag.length+1){
            tmp.push(index_arry[i])
        }
    }
    for(i=0;i<tmp.length;i++){
        console.log(sen[5])
        if (tmp[i] == index){
            query+='_ '+ sen[[tmp[i]]]+' '
        }else{
            query+= sen[[tmp[i]]]+' '
        }
>>>>>>> 1e28fbf4f9ee9735820b666358a9ebd8268ea45b
    }

}




