package main.structure

/**
 * Created by cout970 on 2017/03/12.
 */
data class FunctionBlock(
        val variables: List<Variable>,
        val blocks: List<FunctionBlock>
)