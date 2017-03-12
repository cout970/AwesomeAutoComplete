if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'AwesomeAutoComplete'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'AwesomeAutoComplete'.");
}
var AwesomeAutoComplete = function (_, Kotlin) {
  'use strict';
  var map = Kotlin.kotlin.sequences.map_z5avom$;
  var toList = Kotlin.kotlin.sequences.toList_veqyi0$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var replaceFirst = Kotlin.kotlin.text.replaceFirst_680rmw$;
  var List = Kotlin.kotlin.collections.List;
  function getFunctionNames$lambda(it) {
    var $receiver = it.groupValues.get_za3lpa$(2);
    var tmp$;
    return Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : Kotlin.throwCCE()).toString();
  }
  function getFunctionNames(code) {
    var regex = 'fun\\ *(\\<\\w+\\>)?\\ *(\\w+)';
    var results = Kotlin.kotlin.text.Regex_61zpoe$(regex).findAll_905azu$(code);
    return toList(map(results, getFunctionNames$lambda));
  }
  function getPropertyNames$lambda(it) {
    var $receiver = it.groupValues.get_za3lpa$(1);
    var tmp$;
    return Kotlin.kotlin.text.trim_gw00vp$(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : Kotlin.throwCCE()).toString();
  }
  function getPropertyNames(code) {
    var regex = 'va[rl]\\ *(\\w+)';
    var results = Kotlin.kotlin.text.Regex_61zpoe$(regex).findAll_905azu$(code);
    return toList(map(results, getPropertyNames$lambda));
  }
  var dictionary;
  var keyword;
  function main(args) {
    println('Start');
    var tmp$;
    tmp$ = keyword.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      dictionary.put_yuqcw7$(element, element);
    }
    println(getPropertyNames('\nvar list: List<T> = listOf()\nval list2: List<T> = listOf()\n}\n').toString());
  }
  function getAutoCompleteOptions(str, cursor) {
    var lastWord = getLastWord(str, cursor);
    println(lastWord);
    var complete = dictionary.getCandidates_61zpoe$(lastWord);
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
      var $receiver_0 = String.fromCharCode(Kotlin.toBoxedChar(str.charCodeAt(cursor - item - 1 | 0)));
      var regex = '[\\w\\d_]';
      var result = $receiver_0.match(regex);
      if (!(result != null && result.length > 0)) {
        break;
      }
      list.add_11rb$(item);
    }
    var tmp$_0;
    tmp$_0 = list.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      var $receiver_1 = Kotlin.unboxChar(str.charCodeAt(cursor - element - 1 | 0));
      res.v = String.fromCharCode(Kotlin.toBoxedChar($receiver_1)) + res.v;
    }
    return res.v;
  }
  function replaceStart(last, new_0) {
    return replaceFirst(new_0, last, '');
  }
  function println(message) {
    console.log(message);
  }
  function Dictionary() {
    Dictionary$Companion_getInstance();
    this.nodes = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$();
  }
  function Dictionary$Companion() {
    Dictionary$Companion_instance = this;
    this.S_SEPARACION_NIVELES = 1;
    this.N_MAX_CANDIDATES = 20;
  }
  Dictionary$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Dictionary$Companion_instance = null;
  function Dictionary$Companion_getInstance() {
    if (Dictionary$Companion_instance === null) {
      new Dictionary$Companion();
    }
    return Dictionary$Companion_instance;
  }
  Dictionary.prototype.getLevelKey_0 = function (clave, nivel) {
    var endIndex = Kotlin.imul(nivel, Dictionary$Companion_getInstance().S_SEPARACION_NIVELES);
    return clave.substring(0, endIndex);
  };
  Dictionary.prototype.put_yuqcw7$ = function (key, value) {
    var tmp$;
    var i = key.length / Dictionary$Companion_getInstance().S_SEPARACION_NIVELES | 0;
    while (i > 0) {
      var levelKey = this.getLevelKey_0(key, i);
      var tmp$_0;
      if ((tmp$ = this.nodes.get_11rb$(levelKey)) != null)
        tmp$_0 = tmp$;
      else {
        var $receiver = new Node(levelKey);
        this.nodes.put_xwzc9p$(levelKey, $receiver);
        tmp$_0 = $receiver;
      }
      var node = tmp$_0;
      node.push_11rb$(value);
      i = i - 1 | 0;
    }
  };
  Dictionary.prototype.getCandidates_61zpoe$ = function (key) {
    var tmp$, tmp$_0;
    var node = this.nodes.get_11rb$(this.getLevelKey_0(key, key.length / Dictionary$Companion_getInstance().S_SEPARACION_NIVELES | 0));
    return (tmp$_0 = Kotlin.isType(tmp$ = node != null ? node.elements : null, List) ? tmp$ : null) != null ? tmp$_0 : Kotlin.kotlin.collections.emptyList_287e2$();
  };
  Dictionary.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Dictionary',
    interfaces: [IDictionary]
  };
  function IDictionary() {
  }
  IDictionary.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IDictionary',
    interfaces: []
  };
  function Node(key) {
    Node$Companion_getInstance();
    this.key = key;
    this.elements = Kotlin.kotlin.collections.ArrayList_init_ww73n8$();
  }
  function Node$Companion() {
    Node$Companion_instance = this;
    this.MAX_ELEM = 20;
  }
  Node$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Node$Companion_instance = null;
  function Node$Companion_getInstance() {
    if (Node$Companion_instance === null) {
      new Node$Companion();
    }
    return Node$Companion_instance;
  }
  Node.prototype.push_11rb$ = function (o) {
    this.elements.add_11rb$(o);
    if (this.elements.size > Node$Companion_getInstance().MAX_ELEM) {
      this.elements.removeAt_za3lpa$(0);
    }
  };
  Node.prototype.toString = function () {
    return "Node(key='" + this.key + "', elements=" + this.elements + ')';
  };
  Node.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  Node.prototype.component1 = function () {
    return this.key;
  };
  Node.prototype.copy_61zpoe$ = function (key) {
    return new Node(key === void 0 ? this.key : key);
  };
  Node.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    return result;
  };
  Node.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.key, other.key))));
  };
  var package$main = _.main || (_.main = {});
  package$main.getFunctionNames_61zpoe$ = getFunctionNames;
  package$main.getPropertyNames_61zpoe$ = getPropertyNames;
  Object.defineProperty(package$main, 'dictionary', {
    get: function () {
      return dictionary;
    }
  });
  Object.defineProperty(package$main, 'keyword', {
    get: function () {
      return keyword;
    }
  });
  package$main.main_kand9s$ = main;
  package$main.getAutoCompleteOptions = getAutoCompleteOptions;
  package$main.getLastWord = getLastWord;
  package$main.replaceStart = replaceStart;
  package$main.println_61zpoe$ = println;
  Object.defineProperty(Dictionary, 'Companion', {
    get: Dictionary$Companion_getInstance
  });
  var package$util = package$main.util || (package$main.util = {});
  package$util.Dictionary = Dictionary;
  package$util.IDictionary = IDictionary;
  Object.defineProperty(Node, 'Companion', {
    get: Node$Companion_getInstance
  });
  package$util.Node = Node;
  dictionary = new Dictionary();
  keyword = listOf(['abstract', 'annotation', 'companion', 'crossinline', 'data', 'enum', 'external', 'final', 'in', 'infix', 'inline', 'inner', 'internal', 'lateinit', 'noinline', 'open', 'operator', 'out', 'override', 'private', 'protected', 'public', 'reified', 'sealed', 'tailrec', 'vararg', 'Int', 'String', 'var', 'val', 'fun', '()', '{}', 'println']);
  Kotlin.defineModule('AwesomeAutoComplete', _);
  main([]);
  return _;
}(typeof AwesomeAutoComplete === 'undefined' ? {} : AwesomeAutoComplete, kotlin);
