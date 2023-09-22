module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ["@testing-library/jest-dom", '<rootDir>/.jest/setup-tests.js'],
    moduleNameMapper: {
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/.jest/mocks/fileMock.js',
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
}