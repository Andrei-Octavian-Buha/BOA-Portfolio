export class ContactPerson {
  constructor(
    public text: string,
    public firstName: string,
    public email: string,
    public agree: boolean = false,

  ) {}
}