import { buildApp } from './app';
import { config } from './config';

async function main() {
    const app = await buildApp();
    await app.listen({ port: config.port, host: '0.0.0.0' });
    console.log(`eMealPlan API listening on http://localhost:${config.port}`);
}

main().catch((error: unknown) => {
    console.error('Failed to start server', error);
    process.exitCode = 1;
});
