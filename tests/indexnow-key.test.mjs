import assert from 'node:assert/strict';
import { readdir, readFile } from 'node:fs/promises';
import test from 'node:test';

test('publishes exactly one IndexNow root key with matching UTF-8 content', async () => {
  const publicDir = new URL('../public/', import.meta.url);
  const files = await readdir(publicDir);
  const keys = files.filter((file) => /^[a-f0-9]{32}\.txt$/.test(file));

  assert.equal(keys.length, 1, 'expected one 32-character hexadecimal key file');
  const filename = keys[0];
  const content = await readFile(new URL(filename, publicDir), 'utf8');
  assert.equal(content, filename.slice(0, -4) + '\n');
});
