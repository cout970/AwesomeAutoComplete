package main.structure

/**
 * Created by cout970 on 2017/03/12.
 */
data class File(
        val globalProperties: List<Property>,
        val globalFunctions: List<Function>,
        val classes: List<Class>
)