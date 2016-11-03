console.log('game.js is running!');
"use srict";

(function(){

  var colors = {
    1:'rgb(230,37,101)',
    2:'rgb(155,47,174)',
    3:'rgb(253,151,39)',
    4:'rgb(21,149,136)'
  }

  var board = [
    [],
    [],
    [],
    [],
    [],
    []
  ]



  for(var i = 0; i < board.length; i++) {
    $('#container').append('<div id="div'+ i +'" />');
    for (var j = 0; j < 6; j++){
      $('#div'+i).append('<div class = "dot" id="div'+ i+ j +'" />')
      var randomColor = Math.floor((Math.random() * 4) + 1);
      $('#div'+i+j).css('background-color', colors[randomColor])

      // board[i].push({color:colors[randomColor]})
    }
  }


})();

