
export * from 'dns';

export function lookup(domain: string, family: number): Promise<[string, number]>;
export function lookup(domain: string): Promise<[string, number]>;
export function resolve(domain: string, rrtype: string): Promise<string[]>;
export function resolve(domain: string): Promise<string[]>;
export function resolve4(domain: string): Promise<string[]>;
export function resolve6(domain: string): Promise<string[]>;
export function resolveMx(domain: string): Promise<string[]>;
export function resolveTxt(domain: string): Promise<string[]>;
export function resolveSrv(domain: string): Promise<string[]>;
export function resolveNs(domain: string): Promise<string[]>;
export function resolveCname(domain: string): Promise<string[]>;
export function reverse(ip: string): Promise<string[]>;
