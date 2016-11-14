
import {Interface, InterfaceOptions, Completer} from 'readline';
export * from 'readline';

export interface ReadLine extends Interface {
    question(query: string): Promise<string>;
}

export function createInterface(input: NodeJS.ReadableStream, output?: NodeJS.WritableStream, completer?: Completer, terminal?: boolean): ReadLine;
export function createInterface(options: InterfaceOptions): ReadLine;
