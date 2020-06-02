import 'source-map-support/register'
import 'module-alias/register'
import { MultiplyCommand } from './implementations/MultiplyCommand'
import { ICommand } from './interfaces/ICommand'

const multiplyCommand = new MultiplyCommand(5)
let value = 10
const commands: Array<ICommand> = []

console.log('BEFORE', value)

value = multiplyCommand.execute(value)
commands.push(multiplyCommand)

console.log('EXECUTED', value)

// value = multiplyCommand.undo(value)
for (let command of commands) {
    value = command.undo()
}

console.log('UNDONE', value)
