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
    1:'rgb(255,51,141)',
    2:'rgb(147,51,255)',
    3:'rgb(255,114,51)',
    4:'rgb(31,180,190)',
  }


var board = []

var boardSize = 12

  var populate = function(size){
    for(var h = 0; h < size; h++){
      board.push([])
    }
    for(var i = 0; i < board.length; i++) {
      $('#container').append('<div id="row'+ i +'" />');
      for (var j = 0; j < size; j++){
        $('#row' + i).append('<div class = "dot" id="cell'+ i + "a" + j +'" />')
        var randomColor = Math.floor((Math.random() * 4) + 1);
        $('#cell' + i+ "a" + j).css('background-color', colors[randomColor])
        $('#cell' + i + "a" + j).click(function() {
          console.log('click');
          if($(this).hasClass("winningDot")){
            alert("Good job! Are you ready for next level?");
            boardSize++;
            populate(boardSize)
            // debugger
            document.location.reload();
            // size++
            // //clear the board
            // populate(size)

          }


        })

      }
    }
  }
populate(boardSize)


   var rand_dot = $('.dot')[Math.floor(Math.random()*$('.dot').length)];
   var bg_color = $(rand_dot).css('background-color');
   var randomOffColor = Math.floor((Math.random() * 4) + 1);
   $(rand_dot).css('background-color', offColors[randomOffColor]);
   $(rand_dot).addClass("winningDot");




       // 1. make function populate / at end of populate do color modify function and start timer
       // 2. good click = increment size of board --> recall populate w/new size
       // 3. bad click / timer = 0 --> reset variables --> alert "game over!"
       //
       // CHECK TIME RESTART



      // board[i].push({color:colors[randomColor]})





})();

