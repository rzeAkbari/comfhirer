export type ErrorType = 'semantic' | 'syntax';

export type ErrorName = 'UnsupportedValue' | 'UnsupportedKey';

export default class ComfhirerError implements Error {
  name: string;
  message: string;
  stack?: string;
  type: ErrorType;

  constructor(name: ErrorName, message: string, type: ErrorType) {
    this.name = name;
    this.message = message;
    this.type = type;
  }
}
