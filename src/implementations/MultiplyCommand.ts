import { ICommand } from '@/interfaces/ICommand'

export class MultiplyCommand implements ICommand {
    private readonly multiplier: number
    private result: number | null = null

    constructor(multiplier: number) {
        this.multiplier = multiplier
    }

    execute(number: number): number {
        this.canBeExecuted()

        this.result = number * this.multiplier

        return this.result
    }

    undo(): number {
        this.canBeUndo()

        return this.result ?? 0 / this.multiplier
    }

    private canBeExecuted(): void {
        if (this.isExecuted()) {
            throw new Error('Command can be executed only once')
        }
    }

    private canBeUndo(): void {
        if (!this.isExecuted()) {
            throw new Error('Command must be executed before undo')
        }
    }

    private isExecuted(): boolean {
        return this.result !== null
    }
}
