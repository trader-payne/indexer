const bail = s => {
  throw new Error(s)
}

module.exports = {
  collectCoverage: true,
  forceExit: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '.yalc'],
  transform: {
    '^.+\\.tsx?$': ['ts-jest', {
      isolatedModules: true,
      tsconfig: 'tsconfig.json'
    }],
  },
  globals: {
    __DATABASE__: {
      host: process.env.POSTGRES_TEST_HOST || bail('POSTGRES_TEST_HOST is not defined'),
      port: parseInt(process.env.POSTGRES_TEST_PORT || '5432'),
      username:
        process.env.POSTGRES_TEST_USERNAME ||
        bail('POSTGRES_TEST_USERNAME is not defined'),
      password:
        process.env.POSTGRES_TEST_PASSWORD ||
        bail('POSTGRES_TEST_PASSWORD is not defined'),
      database:
        process.env.POSTGRES_TEST_DATABASE ||
        bail('POSTGRES_TEST_DATABASE is not defined'),
    },
    __LOG_LEVEL__: process.env.LOG_LEVEL || 'info',
  },
}
