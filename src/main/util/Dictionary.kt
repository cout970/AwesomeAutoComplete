package main.util

/**
 * Created by petrusboniatus on 9/03/17.
 */
class Dictionary<T> : IDictionary<T> {

    companion object {
        var S_SEPARACION_NIVELES = 1
        var N_MAX_CANDIDATES = 20
    }

    val nodes: MutableMap<String, Node<T>> = mutableMapOf()

    private fun getLevelKey(clave: String, nivel: Int): String {
        return clave.substring(0, nivel * S_SEPARACION_NIVELES)
    }

    override fun put(key: String, value: T) {
        var i = key.length / S_SEPARACION_NIVELES
        while (i > 0) {
            val levelKey = getLevelKey(key, i)
            val node = nodes[levelKey] ?: Node<T>(levelKey).apply {
                nodes.put(levelKey, this)
            }
            node.push(value)
            i -= 1
        }
    }

    override fun getCandidates(key: String): List<T> {
        val node = nodes[getLevelKey(key, key.length / S_SEPARACION_NIVELES)]
        return (node?.elements as? List<T>) ?: listOf<T>()
    }
}
