  var pingPonged = [];
  //backend
  function game(number, pingPonged) {
    for (var index = 1; index <= number; index++) {
      if (index % 15 === 0) {
        pingPonged.push("ping pong");
      } else if (index % 5 === 0) {
        pingPonged.push("pong");
      } else if (index % 3 === 0) {
        pingPonged.push("ping");
      } else {
        pingPonged.push(index);
      }
    }
  }
  //frontend
  $(document).ready(function() {
    $("#btn").click(function(event) {
      event.preventDefault();
      //$("#output ul").empty();
      var number = parseInt($("input#pong").val());
      var ping = game(number, pingPonged);
      pingPonged.forEach(function(ping) {
        $("#output1").append("<li>" + ping + "</li>");
      });

      //$("form.ping")[0].reset();
    });
  });
