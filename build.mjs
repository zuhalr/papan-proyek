// Membundel src/ menjadi public/app.js (+ potongan jsPDF yang dimuat saat dibutuhkan)
import { build } from 'esbuild';
import { rmSync, mkdirSync } from 'node:fs';

rmSync('docs/chunks', { recursive: true, force: true });
mkdirSync('docs/chunks', { recursive: true });
await build({
  entryPoints: { app: 'src/app.js' },
  outdir: 'docs',
  chunkNames: 'chunks/[name]-[hash]',
  bundle: true,
  splitting: true,
  format: 'esm',
  minify: true,
  target: ['es2020'],
  legalComments: 'none',
  logLevel: 'info',
});
