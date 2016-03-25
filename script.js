$("button").click(function(event) {
  var startGame = '<div class="startButton"' + '></div>';
  /* Act on the event */
});

// var winner;
// var hitPoints;

var player1 = $('#player1')
player1.data('x', 0)
player1.data('y', 0)
player1.data('w', 40)
player1.data('h', 25)

var player2 = $('#player2')
player2.data('x2', 0)
player2.data('y2', 0)
player2.data('w2', 40)
player2.data('h2', 25)

//player1 health bar
// var health = document.getElementById("health")
// health.value = health.value()

//player1 moves up
$(document).keypress(function(key) {
  if (key.which === 113 && player1.position().top > 0) {
    player1.css("top", "-=10px");
  }
});
//player 1 moves down
$(document).keypress(function(key) {
  if (key.which === 97 && player1.position().top < 180) {
    player1.css("top", "+=10px");
  }
});
//player1's color change function
$(document).keypress(function(key) {
  if (key.which === 99) {
    player1.toggleClass('red blue');
    console.log("toggle color");
  }
});
//player1's bullet animation
//addclass, removeclass, toggleclass, hasclass
//create div classes and manipulate their css properties for color change functions
$(document).keypress(function(key){
  if (key.which === 120) {
    var bulletDiv;

    if (player1.hasClass('blue')) {
      bulletDiv = '<div class="player1Bullets blue"' + '></div>';
    } else {
      bulletDiv = '<div class="player1Bullets red"' + '></div>';
    }

    var newBullet = $(bulletDiv);
    $('.container').append(newBullet);
    var currentP1Position = player1.css("top");
    newBullet.css("top", currentP1Position);
    newBullet.animate({left: '485px'}, 1200, "linear", function(){
      $( newBullet ).remove();
      clearInterval(checker);
    });
    var checker = setInterval(function() {
      if (collision(newBullet, player2)) {
        clearInterval(checker);
      }
    }
    , 200);

    function collision(newBullet, enemyPlayer) {
      // var newBullet = $('<div class="player1Bullets"></div>')
      var x1 = newBullet.offset().left;
      var y1 = newBullet.offset().top;
      var h1 = newBullet.outerHeight(true);
      var w1 = newBullet.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = enemyPlayer.offset().left;
      var y2 = enemyPlayer.offset().top;
      var h2 = enemyPlayer.outerHeight(true);
      var w2 = enemyPlayer.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        console.log("geometry")
        return false;
        } else if ($(".player1Bullets").hasClass("blue") && $("#player2").hasClass("blue"))
       {
        console.log("blue color match")
       return false;
        }
      else if ($(".player1Bullets").hasClass("red") && $("#player2").hasClass("red"))
       {
        console.log("red color match")
       return false;
      }
       else {
        console.log("hit")
         return true;
      }
    console.log(collision(newBullet, player2));
  }


  // var damage = function(health){
  //   health.value =- 1};

    // if (collision == true && player2.hasClass("blue") && $(".player1Bullets").css("background-color") == "(0, 0, 255)") {
    //   damage = false;
    // } else {
    //   damage = true
    };
  });
  // $(document).keypress(function(key){??
  // $( newBullet ).remove();
  // if(collision(newBullet, player2) === true) {
  //   player2.hitPointBar = (-1);
  //   if (p2HPBar < 0) {
  //     return "player1 " + "wins!"
  //   }
  // }

//   }
// })

//player2 moves up
$(document).keypress(function(key) {
if (key.which === 112 && player2.position().top > 0) {
  player2.css("top", "-=10px");
}
});
//player2 moves down
$(document).keypress(function(key) {
  if (key.which === 108 && player2.position().top < 180) {
    player2.css("top", "+=10px");
  }
});
//player2's color change function
$(document).keypress(function(key) {
  if (key.which === 110) {
    player2.toggleClass('red blue');
      }
    });
//player2's bullet animation
$(document).keypress(function(key) {
  if (key.which === 109) {
    var bulletDiv;

    if (player2.hasClass('red')) {
      bulletDiv = '<div class="player2Bullets red"' + '></div>';
    } else {
      bulletDiv = '<div class="player2Bullets blue"' + '></div>';
    }

    var newBullet = $(bulletDiv)
    $('.container').append(newBullet)
    var currentP2Position = player2.css("top");
    newBullet.css("top", currentP2Position)
    newBullet.animate({left: '-3px'}, 1200, "linear", function(){
      $( newBullet ).remove();
      clearInterval(checker);
    })
    var checker = setInterval(function(){
      if (collision2(newBullet, player1)) {
        clearInterval(checker);
        }
        console.log("collision2?", collision2(newBullet, player1))
      }, 200)

  function collision2(newBullet, enemyPlayer) {
    // var newBullet = $('<div class="player1Bullets"></div>')
      var x1 = newBullet.offset().left;
      var y1 = newBullet.offset().top;
      var h1 = newBullet.outerHeight(true);
      var w1 = newBullet.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = enemyPlayer.offset().left;
      var y2 = enemyPlayer.offset().top;
      var h2 = enemyPlayer.outerHeight(true);
      var w2 = enemyPlayer.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;
      console.log ($(".player2Bullets").hasClass("red"))
      console.log ($("#player1").hasClass("red"))
      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) {
        console.log("geometry")
        return false;
      }
      else if ($(".player2Bullets").hasClass("blue") && $("#player1").hasClass("blue"))
       {

        console.log("blue color match")
       return false;
        }
      else if ($(".player2Bullets").hasClass("red") && $("#player1").hasClass("red"))
       {
        console.log("red color match")
       return false;
      }
       else {
        console.log("hit")
         return true;
      }
    }
    console.log(collision2(newBullet, player1));
  }
});

