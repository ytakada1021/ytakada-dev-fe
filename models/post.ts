import Datetime from "../lib/datetime";

class Post {
  constructor(
    public readonly _id: string,
    public readonly _title: string,
    public readonly _content: string,
    private readonly _postedAt: string,
    private readonly _updatedAt: string | undefined
  ) {}

  get postedAt(): Datetime {
    return new Datetime(this._postedAt);
  }

  get updatedAt(): Datetime | undefined {
    if (this._updatedAt === undefined) {
      return undefined;
    } else {
      return new Datetime(this._updatedAt);
    }
  }

  toJSON = () => {
    return {
      id: this._id,
      title: this._title,
      content: this._content,
      posted_at: this.postedAt.format("yyyy.M.d"),
      updated_at: this.updatedAt?.format("yyyy.M.d")
    };
  }
}

export default Post;
