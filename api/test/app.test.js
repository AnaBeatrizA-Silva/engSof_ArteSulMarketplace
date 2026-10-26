const assert = require('node:assert');
const test = require('node:test');
const app = require('../src/app');

test('Deve importar o app com sucesso', () => {
  assert.ok(app);
});