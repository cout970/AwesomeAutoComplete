package main

import main.util.Dictionary

/**
 * Created by Carlos Couto Cerdeira on 3/10/17.
 */

val dictionary = Dictionary<String>()
val keyword = listOf(
        "abstract", "annotation", "companion", "crossinline", "data", "enum", "external", "final", "in", "infix",
        "inline", "inner", "internal", "lateinit", "noinline", "open", "operator", "out", "override", "private",
        "protected", "public", "reified", "sealed", "tailrec", "vararg", "Int", "String", "var", "val", "fun", "()",
        "{}", "println"
)

fun main(args: Array<String>) {
    println("Start")
    keyword.forEach { a ->
        dictionary.put(a, a)
    }
}

fun processFile() {
    val code = ""
    //TODO
    (getPropertyNames(code) + getFunctionNames(code)).forEach { a ->
        dictionary.put(a, a)
    }
}

@JsName("getAutoCompleteOptions")
fun getAutoCompleteOptions(str: String, cursor: Int): Array<String> {
    val lastWord = getLastWord(str, cursor)
    println(lastWord)
    val complete = dictionary.getCandidates(lastWord)
    return complete.toTypedArray()
}

@JsName("getLastWord")
fun getLastWord(str: String, cursor: Int): String {
    var res = ""
    (0 until cursor)
            .takeWhile { str[cursor - it - 1].toString().matches("""[\w\d_]""") }
            .forEach { res = str[cursor - it - 1] + res }
    return res
}

@JsName("replaceStart")
fun replaceStart(last: String, new: String): String {
    return new.replaceFirst(last, "")
}

fun println(message: String) {
    console.log(message)
}