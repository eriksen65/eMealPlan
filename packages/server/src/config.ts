import { fileURLToPath } from 'node:url';
import path from 'node:path';

const serverRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

export const config = {
    port: Number(process.env.PORT ?? 4000),
    dataDir: path.isAbsolute(process.env.DATA_DIR ?? '') ? (process.env.DATA_DIR as string) : path.join(serverRoot, process.env.DATA_DIR ?? '.data'),
    webOrigin: process.env.WEB_ORIGIN ?? 'http://localhost:3000'
};
