function add_score(pseudo, score) {
  if ($.jStorage.get("scores") == null) {
    $.jStorage.set('scores',[{"pseudo": pseudo, "score": score}]);
  }
  else {
    var temp = $.jStorage.get("scores");
    temp = JSON.stringify(temp);
    temp = temp.replace('[','');
    temp = temp.replace(']','');
    var temp = "[" + temp + ', {"pseudo": "' + pseudo + '", "score": ' + score + '}' + "]";
    var json = JSON.parse(temp);
    $.jStorage.set('scores',json);
  }
}
