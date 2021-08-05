module.exports = {
    "roots": [
      "<rootDir>/tests",
      "<rootDir>/src"
    ],
    "testMatch": [
      "**/__tests__/**/*.+(ts|tsx|js)",
      "**/?(*.)+(spec|test).+(ts|tsx|js)"
    ],
    "transform": {
      "^.+\\.tsx?$": "ts-jest"
    },
  }
  