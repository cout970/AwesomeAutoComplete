package main.structure

/**
 * Created by cout970 on 2017/03/12.
 */
class Class(
        val properties: List<Property>,
        val constructors: List<FunctionBlock>,
        val functions: List<Function>,
        val subClasses: List<Class>,
        val innerClasses: List<Class>
)