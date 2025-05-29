export class HeaderColumn {
  public field: string // for access
  public header: string // for show

  constructor(field: string, header: string) {
    this.field = field;
    this.header = header;
  }
}
