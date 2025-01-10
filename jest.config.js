module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    "@src/(.*)": "<rootDir>/src/$1",
    "@assets/(.*)": "<rootDir>/assets/$1",
    "@components/(.*)": "<rootDir>/src/components/$1",
  },
  roots: ["<rootDir>/src"],
};
