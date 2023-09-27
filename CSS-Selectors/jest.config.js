module.exports = {
    preset: 'ts-jest',
    transform: {
        '\\.(css|less|sass|scss)$': 'jest-transform-stub',
    },
    testEnvironment: 'jsdom',
};
