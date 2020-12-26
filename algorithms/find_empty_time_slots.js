var events = [{
    start: "2020-11-11T12:00",
    end: "2020-11-11T13:00"
  }, {
    start: "2020-11-11T13:00",
    end: "2020-11-11T13:30"
  }, {
    start: "2020-11-11T13:30",
    end: "2020-11-11T14:00"
  }, {
    start: "2020-11-11T15:15",
    end: "2020-11-11T15:45"
  }, {
    start: "2020-11-11T15:45",
    end: "2020-11-11T16:45"
  }];
  
  var dateEvents = events.map(function(event) {
    return {
      start: new Date(event.start),
      end: new Date(event.end)
    };
  });
  
  var requiredGap = 15 * 60 * 1000;
  var prev = dateEvents[0];
  var firstGap = null;
  
  for (var i = 1; i < dateEvents.length; i += 1) {
    var current = dateEvents[i];
    var diff = current.start - prev.end;
    
    if (diff >= requiredGap) {
      firstGap = {
        start: prev.end,
        end: current.start
      };
      break;
    }
    
    prev = current;
  }
  
  if (firstGap != null) {
    console.log("First gap starts at: " + firstGap.start); 
  } else {
    console.log("No gaps available");
  }