module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    transformIgnorePatterns: [
        '<rootDir>/node_modules/'
    ],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
        '\\.(jpg|jpeg|png|gif|svg)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    testEnvironment: 'jsdom',
};
