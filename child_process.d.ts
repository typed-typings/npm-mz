
import {ExecFileOptions, ExecOptions} from 'child_process';

export * from 'child_process';

export function exec(command: string): Promise<[string, string]>;
export function exec(command: string, options: ExecOptions & { encoding: 'buffer' }): Promise<[Buffer, Buffer]>;
export function exec(command: string, options: ExecOptions): Promise<[string, string]>;

export function execFile(file: string): Promise<[string, string]>;
export function execFile(file: string, options?: ExecFileOptions & { encoding: 'buffer' }): Promise<[Buffer, Buffer]>;
export function execFile(file: string, options?: ExecFileOptions): Promise<[string, string]>;
export function execFile(file: string, args?: string[]): Promise<[string, string]>;
export function execFile(file: string, args?: string[], options?: ExecFileOptions & { encoding: 'buffer' }): Promise<[Buffer, Buffer]>;
export function execFile(file: string, args?: string[], options?: ExecFileOptions): Promise<[string, string]>;
