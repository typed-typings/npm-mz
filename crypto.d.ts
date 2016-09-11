
export * from 'crypto';

export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number): Promise<Buffer>;
export function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string): Promise<Buffer>;

export function randomBytes(size: number): Promise<Buffer>;

export function pseudoRandomBytes(size: number): Promise<Buffer>;

