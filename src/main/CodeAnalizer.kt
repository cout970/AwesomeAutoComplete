package main

/**
 * Created by cout970 on 2017/03/12.
 */

fun getFunctionNames(code: String): List<String>{
    val regex = """fun\ *(\<\w+\>)?\ *(\w+)"""
    val results = regex.toRegex().findAll(code)

    return results.map { it.groupValues[2].trim() }.toList()
}

fun getPropertyNames(code: String): List<String>{
    val regex = """va[rl]\ +(\w+)"""
    val results = regex.toRegex().findAll(code)

    return results.map { it.groupValues[1].trim() }.toList()
}