package main.util

/* Created by petrusboniatus */
/* Modified by cout970 */
interface IDictionary<T> {

    fun put(key: String, value: T)

    fun getCandidates(key: String): List<T>
}
