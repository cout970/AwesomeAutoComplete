if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'AwesomeAutoComplete'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AwesomeAutoComplete'.");
}
var AwesomeAutoComplete = function (_, Kotlin) {
  'use strict';
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var dictionary;
  function main(args) {
    dictionary.put_xwzc9p$('f', listOf('fun'));
    dictionary.put_xwzc9p$('p', listOf_0(['public', 'private']));
    dictionary.put_xwzc9p$('m', listOf_0(['kotlin.main', 'Map']));
    dictionary.put_xwzc9p$('g', listOf('get'));
    dictionary.put_xwzc9p$('r', listOf('return'));
    dictionary.put_xwzc9p$('S', listOf('String'));
    dictionary.put_xwzc9p$('I', listOf('Int'));
    dictionary.put_xwzc9p$('v', listOf_0(['val', 'var']));
  }
  function getAutoCompleteOptions(str, cursor) {
    var tmp$;
    var lastWord = getLastWord(str, cursor);
    tmp$ = dictionary.get_11rb$(lastWord);
    if (tmp$ == null) {
      return [];
    }
    var complete = tmp$;
    return Kotlin.kotlin.collections.copyToArray(complete);
  }
  function getLastWord(str, cursor) {
    var res = {v: ''};
    var $receiver = until(0, cursor);
    var tmp$;
    var list = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      if (!(Kotlin.unboxChar(str.charCodeAt(cursor - item - 1 | 0)) !== 32)) {
        break;
      }
      list.add_11rb$(item);
    }
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var $receiver_0 = Kotlin.unboxChar(str.charCodeAt(cursor - element - 1 | 0));
      res.v = String.fromCharCode(Kotlin.toBoxedChar($receiver_0)) + res.v;
    }
    return res.v;
  }
  function replaceStart(last, new_0) {
    return replaceFirst(new_0, last, '');
  }
  var package$main = _.main || (_.main = {});
  Object.defineProperty(package$main, 'dictionary', {
    get: function () {
      return dictionary;
    }
  });
  package$main.main_kand9s$ = main;
  package$main.getAutoCompleteOptions = getAutoCompleteOptions;
  package$main.getLastWord = getLastWord;
  package$main.replaceStart = replaceStart;
  dictionary = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
  Kotlin.defineModule('AwesomeAutoComplete', _);
  main([]);
  return _;
}(typeof AwesomeAutoComplete === 'undefined' ? {} : AwesomeAutoComplete, kotlin);
