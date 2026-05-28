module.exports = {
    testEnvironment: 'jsdom',
    // testEnvironment: 'node',

    setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],

    transform: {
        '^.+\\.(js|jsx)$': 'babel-jest',
    },

    moduleNameMapper: {
        '\\.(css|scss|sass)$': 'identity-obj-proxy',
    },
};
