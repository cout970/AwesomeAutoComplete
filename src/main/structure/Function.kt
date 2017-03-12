package main.structure

/**
 * Created by cout970 on 2017/03/12.
 */
data class Function(
        val name: String,
        val outputType: String,
        val input: List<Variable>,
        val blocks: List<FunctionBlock>
)