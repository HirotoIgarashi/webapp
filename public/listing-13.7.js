this.removeEvent = function (elem, type, fn) {

  var data = getData(elem);

  if (!data.handlers) return;

  var removeType = function(t) {
    data.handlers[t] = [];
    tidyUp(elem, t);
  };

  if (!type) {
    for (var i in data.handlers) removeType(t);
    return;
  }

  var handlers = data.handlers[type];
  if (!handlers) return;

  if (!fn) {
    removeType(type);
    return;
  }

  if (fn.guid) {
    for (var n = 0; n < handlers.length; n++) {
      if (handlers[n].guid === fn.guid) {
        handlers.splice(n--, 1);
      }
    }
  }
  tidyUp(elem, type);
};
