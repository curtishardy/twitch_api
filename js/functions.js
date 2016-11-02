// Client ID
// nee3a2hfocljtftsntybyb12nm2p0cb

$(document).ready(function() {
  // Yogscast
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/yogscast",
    headers:{
      'Client-ID': 'nee3a2hfocljtftsntybyb12nm2p0cb'
    },
    success: function(data){
      console.log(data)
      if (data.stream === null){
        $("#yogscast--state").append("Offline");
        $("#yogscast--state").addClass("offline");
        $("#yogscast--viewers").append("-");
        $("#yogscast--game").append("-");
      }
      else {
        $("#yogscast--state").append("Live");
        $("#yogscast--state-indicator").addClass("state-indicator");
        $("#yogscast--viewers").append('<span class="glyphicon glyphicon-user" aria-hidden="true" style="margin-right: 10px;"></span>' + data.stream.viewers);
        $("#yogscast--game").append(data.stream.game);
        $("#yogscast--container").append('<div class="col-xs-12 grey"> <div id="yogscast--title" class="stream-state">' + data.stream.channel.status + '</div> </div>');
        $("#yogscast--container").append('<div class="col-xs-12 grey"> <a href="' + data.stream.channel.url + '"> <img class="img-responsive preview-image" src="' + data.stream.preview.large + '"> </a> </div>')
      }
    }
  });

  // EdbergTV
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/edbergtv",
    headers:{
      'Client-ID': 'nee3a2hfocljtftsntybyb12nm2p0cb'
    },
    success: function(data){
      console.log(data)
      if (data.stream === null){
        $("#edberg--state").append("Offline");
        $("#edberg--state").addClass("offline");
        $("#edberg--viewers").append("-");
        $("#edberg--game").append("-");
      }
      else {
        $("#edberg--state").append("Live");
        $("#edberg--state-indicator").addClass("state-indicator");
        $("#edberg--viewers").append('<span class="glyphicon glyphicon-user" aria-hidden="true" style="margin-right: 10px;"></span>' + data.stream.viewers);
        $("#edberg--game").append(data.stream.game);
        $("#edberg--container").append('<div class="col-xs-12 grey"> <div id="edberg--title" class="stream-state">' + data.stream.channel.status + '</div> </div>');
        $("#edberg--container").append('<div class="col-xs-12 grey"> <a href="' + data.stream.channel.url + '"> <img class="img-responsive preview-image" src="' + data.stream.preview.large + '"> </a> </div>')
      }
    }
  });

  // FisiFan91
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/fisifan91",
    headers:{
      'Client-ID': 'nee3a2hfocljtftsntybyb12nm2p0cb'
    },
    success: function(data){
      console.log(data)
      if (data.stream === null){
        $("#fisi--state").append("Offline");
        $("#fisi--state").addClass("offline");
        $("#fisi--viewers").append("-");
        $("#fisi--game").append("-");
      }
      else {
        $("#fisi--state").append("Live");
        $("#fisi--state-indicator").addClass("state-indicator");
        $("#fisi--viewers").append('<span class="glyphicon glyphicon-user" aria-hidden="true" style="margin-right: 10px;"></span>' + data.stream.viewers);
        $("#fisi--game").append(data.stream.game);
        $("#fisi--container").append('<div class="col-xs-12 grey"> <div id="fisi--title" class="stream-state">' + data.stream.channel.status + '</div> </div>');
        $("#fisi--container").append('<div class="col-xs-12 grey"> <a href="' + data.stream.channel.url + '"> <img class="img-responsive preview-image" src="' + data.stream.preview.large + '"> </a> </div>')
      }
    }
  });

  // Hat Films
  $.ajax({
    type: "GET",
    url: "https://api.twitch.tv/kraken/streams/hatfilms",
    headers:{
      'Client-ID': 'nee3a2hfocljtftsntybyb12nm2p0cb'
    },
    success: function(data){
      console.log(data)
      if (data.stream === null){
        $("#hatfilms--state").append("Offline");
        $("#hatfilms--state").addClass("offline");
        $("#hatfilms--viewers").append("-");
        $("#hatfilms--game").append("-");
      }
      else {
        $("#hatfilms--state").append("Live");
        $("#hatfilms--state-indicator").addClass("state-indicator");
        $("#hatfilms--viewers").append('<span class="glyphicon glyphicon-user" aria-hidden="true" style="margin-right: 10px;"></span>' + data.stream.viewers);
        $("#hatfilms--game").append(data.stream.game);
        $("#hatfilms--container").append('<div class="col-xs-12 grey"> <div id="hatfilms--title" class="stream-state">' + data.stream.channel.status + '</div> </div>');
        $("#hatfilms--container").append('<div class="col-xs-12 grey"> <a href="' + data.stream.channel.url + '"> <img class="img-responsive preview-image" src="' + data.stream.preview.large + '"> </a> </div>')
      }
    }
  });

});
