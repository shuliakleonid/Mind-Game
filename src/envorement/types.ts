export type HashtagIDType = string;
export type WordIDType = string;

export type HashTag = {
  id: HashtagIDType
  title: string
  images: {
    small: string
    full: string
  }
}
export type Word = {
  id: WordIDType
  title: string
  images: {
    small: string
    full: string
  }
}

export type HashtagAPI = HashTag & { words: Array<Word> }
export type WordAPI = Word & { hashtagId: Array<Word> }
