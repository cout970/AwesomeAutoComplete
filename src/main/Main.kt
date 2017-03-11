package main

/**
 * Created by Carlos Couto Cerdeira on 3/10/17.
 */

val dictionary = mutableMapOf<String, List<String>>()
val keyword = listOf("fun", "new", "Int", "String", "public", "private", "internal", "return", "val", "var", "")

fun main(args: Array<String>) {

}

@JsName("getAutoCompleteOptions")
fun getAutoCompleteOptions(str: String, cursor: Int): Array<String> {
    val lastWord = getLastWord(str, cursor)
    println(lastWord)
    val complete = dictionary[lastWord] ?: return arrayOf()
    return complete.toTypedArray()
}

@JsName("getLastWord")
fun getLastWord(str: String, cursor: Int): String {
    var res = ""
    (0 until cursor)
            .takeWhile { str[cursor - it - 1] != ' ' }
            .forEach { res = str[cursor - it - 1] + res }
    return res
}

@JsName("replaceStart")
fun replaceStart(last: String, new: String): String {
    return new.replaceFirst(last, "")
}