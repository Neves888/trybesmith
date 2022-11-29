export default class HttpException extends Error {
  type: number;

  constructor(type: number, message: string) {
    super(message);
    this.type = type;
  }
}
