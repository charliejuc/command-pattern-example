import { ICommand } from '@/interfaces/ICommand'

export class MultiplyCommand implements ICommand {
    private readonly multiplier: number
    private result: number = 0

    constructor(multiplier: number) {
        this.multiplier = multiplier
    }

    execute(number: number): number {
        this.result = number * this.multiplier

        return this.result
    }

    undo(): number {
        return this.result / this.multiplier
    }
}
