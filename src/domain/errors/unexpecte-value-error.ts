export class UnexpectedValueError extends Error {
  constructor(message = 'Valor inesperado') {
    super(message);
    this.name = 'UnexpectedValueError';
  }
}
