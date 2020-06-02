import 'source-map-support/register'
import 'module-alias/register'
import { MultiplyCommand } from './implementations/MultiplyCommand'
import { ICommand } from './interfaces/ICommand'

const multiplyCommand = new MultiplyCommand(5)
let value = 10
const commands: ICommand[] = []

console.log('BEFORE', value)

value = multiplyCommand.execute(value)
commands.push(multiplyCommand)

console.log('EXECUTED', value)

// value = multiplyCommand.undo(value)
for (const command of commands) {
    value = command.undo()
}

console.log('UNDONE', value)
