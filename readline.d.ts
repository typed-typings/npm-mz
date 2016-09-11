
import {ReadLine as NodeReadLine, Completer, ReadLineOptions} from 'readline';
export * from 'readline';

export interface ReadLine extends NodeReadLine {
    question(query: string): Promise<string>;
}

export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
export function createInterface(options: ReadLineOptions): ReadLine;
