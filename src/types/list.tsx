export type ListElementType = {
  genre: 'M' | 'F';
  creationDate: Date;
  birthDate: Date;
  contributionTime: number;
  beginDate: Date;
  type: 'public' | 'private';
};

export type ListType = ListElementType[];
