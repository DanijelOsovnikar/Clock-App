export class Qoute {
  _id: string;
  content: string;
  author: string;
  tags: [];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;

  constructor(obj?: any) {
    this._id = (obj && obj._id) || '';
    this.content = (obj && obj.content) || '';
    this.author = (obj && obj.author) || '';
    this.tags = (obj && obj.tags) || [];
    this.authorSlug = (obj && obj.authorSlug) || '';
    this.length = (obj && obj.length) || 0;
    this.dateAdded = (obj && obj.dateAdded) || '';
    this.dateModified = (obj && obj.dateModified) || '';
  }
}
