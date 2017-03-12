package main.util

/**
 * Created by petrusboniatus on 9/03/17.
 */
data class Node<T>(var key: String) {

    companion object {
        var MAX_ELEM = 20
    }

    val elements = mutableListOf<T>()

    fun push(o: T) {
        elements.add(o)

        if (elements.size > MAX_ELEM) {
            elements.removeAt(0)
        }
    }
    override fun toString(): String {
        return "Node(key='$key', elements=$elements)"
    }
}
