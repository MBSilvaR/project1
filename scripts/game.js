console.log('game.js is running!');
"use srict";

(function(){

  var colors = {
    1:'rgb(230,37,101)',
    2:'rgb(155,47,174)',
    3:'rgb(253,151,39)',
    4:'rgb(21,149,136)'
  }

  var offColors = {
    1:'rgb(255,51,121)',
    2:'rgb(147,51,255)',
    3:'rgb(255,114,51)',
    4:'rgb(31,165,170)',
  }


var board = []

var boardSize = 2

var startCountdown = 11;

var timerGo = function(){
  var startGame = setInterval(function() {
  startCountdown -= 1;


  $('#timer').html(startCountdown);
  if(startCountdown < 0) {
    startCountdown = 0;
    $('#timer').html(startCountdown);
    alert("Time over! Bye!");
    clearInterval(startGame);
    $('.dot').off()

  }
  }, 1000);
}

  var populate = function(size){
    for(var h = 0; h < size; h++){
      board.push([])
    }
    for(var i = 0; i < board.length; i++) {
      $('#container').append('<div class ="rows" id="row'+ i +'" />');
      for (var j = 0; j < size; j++){
        $('#row' + i).append('<div class = "dot" id="cell'+ i + "a" + j +'" />')
        var randomColor = Math.floor((Math.random() * 4) + 1);
        $('#cell' + i+ "a" + j).css('background-color', colors[randomColor]);
        $('#cell' + i + "a" + j).click(function() {
          console.log('click');
          if($(this).hasClass("winning_Dot")){
            if(boardSize===12){
              boardSize = 12
            }
            else{
              boardSize++;
            }

            $('.dot').remove()
            $('.rows').remove()
            board = []
            populate(boardSize);
            offDot()
            startCountdown = 11;
          }
          else {
            alert("Game over! Restarting!");
            $('.dot').off();
            clearInterval(startGame);
            startCountdown = 0;
            $('#timer').html(startCountdown);
            location.reload()
          }

        })

      }
    }
  }
populate(boardSize)

var offDot = function(){
   var rand_dot = $('.dot')[Math.floor(Math.random()*$('.dot').length)];
   var bg_color = $(rand_dot).css('background-color');
   var randomOffColor = Math.floor((Math.random() * 4) + 1);
   $(rand_dot).css('background-color', offColors[randomOffColor]);
   $(rand_dot).addClass("winning_Dot");
}

offDot()

$('#instructions').click(function(){
  $(this).remove()
  timerGo();
})

})();

