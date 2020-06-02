import 'source-map-support/register'
import 'module-alias/register'
import { MultiplyCommand } from './implementations/MultiplyCommand'
import { ICommand } from './interfaces/ICommand'

const multiplier = 5
let value = 10
const commands: ICommand[] = []

console.log('BEFORE', value)

let multiplyCommand = new MultiplyCommand(multiplier)
value = multiplyCommand.execute(value)
commands.unshift(multiplyCommand)

multiplyCommand = new MultiplyCommand(multiplier)
value = multiplyCommand.execute(value)
commands.unshift(multiplyCommand)

console.log('EXECUTED', value)

// value = multiplyCommand.undo(value)
const _commands = [...commands]
for (const command of _commands) {
    value = command.undo()

    commands.splice(0, 1)

    console.log('UNDONE LOOP', value)
}

console.log(commands)
