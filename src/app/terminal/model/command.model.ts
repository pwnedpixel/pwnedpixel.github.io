export interface Command {
    input: string;
    output: Array<OutputLine>;
}

export interface OutputLine {
    text: string;
    style?: string;
}
