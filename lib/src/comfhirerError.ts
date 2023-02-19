export type ErrorType = 'semantic' | 'syntax';

export type ErrorName =
  | 'UnsupportedValue'
  | 'UnsupportedKey'
  | 'UnsupportedResource';

export default class ComfhirerError implements Error {
  name: string;
  message: string;
  stack?: string;
  type: ErrorType;
  keyName: string;
  keyLevel: number;

  constructor(
    name: ErrorName,
    message: string,
    type: ErrorType,
    keyName: string,
    keyLevel?: number
  ) {
    this.name = name;
    this.message = message;
    this.type = type;
    this.keyName = keyName;
    this.keyLevel = keyLevel;
  }
}
