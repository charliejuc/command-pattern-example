export interface ICommand {
    execute(value?: any): any
    undo(): any
}
