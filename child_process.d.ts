
import {
    ExecFileOptions,
    ExecFileOptionsWithBufferEncoding,
    ExecFileOptionsWithStringEncoding,
    ExecOptions,
    ExecOptionsWithBufferEncoding,
    ExecOptionsWithStringEncoding,
    ChildProcess
} from 'child_process';

export * from 'child_process';

export function exec(command: string): Promise<[string, string]>;
export function exec(command: string, options: ExecOptionsWithStringEncoding): Promise<[string, string]>;
export function exec(command: string, options: ExecOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function exec(command: string, options: ExecOptions): Promise<[string, string]>;

export function execFile(file: string): Promise<[string, string]>;
export function execFile(file: string, options?: ExecFileOptionsWithStringEncoding): Promise<[string, string]>;
export function execFile(file: string, options?: ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(file: string, options?: ExecFileOptions): Promise<[string, string]>;
export function execFile(file: string, args?: string[]): Promise<[string, string]>;
export function execFile(file: string, args?: string[], options?: ExecFileOptionsWithStringEncoding): Promise<[string, string]>;
export function execFile(file: string, args?: string[], options?: ExecFileOptionsWithBufferEncoding): Promise<[Buffer, Buffer]>;
export function execFile(file: string, args?: string[], options?: ExecFileOptions): Promise<[string, string]>;
