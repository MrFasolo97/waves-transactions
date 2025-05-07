/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': ['ts-jest', { useESM: true }],
  },
  extensionsToTreatAsEsm: ['.ts'],
  transformIgnorePatterns: [
  ],
  moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
    '@waves/ts-lib-crypto': 'ts-lib-crypto-faso2',
  },
  globals: {
    'ts-jest': {
      useESM: true
    }
  }
}
