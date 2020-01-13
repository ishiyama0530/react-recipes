export default class Response<TData> {
  private constructor(
    private readonly _data?: TData,
    private readonly _errors?: string | string[]
  ) {}

  get data(): TData {
    if (!this._data) {
      throw new Error('data is undefined. check errors.')
    }
    return this._data
  }

  get ok(): boolean {
    return !this._errors
  }

  get errors(): string[] {
    if (this._errors instanceof Array) {
      return this.errors
    } else if (this._errors) {
      return [this._errors]
    }
    return []
  }

  static createOKResponse<TData>(data: TData) {
    return new Response<TData>(data)
  }

  static createErrorResponse<TData>(errors: string | string[]) {
    return new Response<TData>(undefined, errors)
  }
}
