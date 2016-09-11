
export * from 'zlib';

import {ZlibOptions} from 'zlib';

export function deflate(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function deflateRaw(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function gzip(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function gunzip(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function inflate(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function inflateRaw(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
export function unzip(buf: Buffer | string, options?: ZlibOptions): Promise<any>;
