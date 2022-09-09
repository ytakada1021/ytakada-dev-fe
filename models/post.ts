export default class Post {
  constructor(
    public id: string,
    public title: string,
    public content: string,
    public postedAt: Date,
    public updatedAt: Date
  ) {}
}
