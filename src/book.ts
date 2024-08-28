import { BookTypeEnum } from "./app/enums/book-type.enums"

export interface book {
    id : number,
    name : string,
    type : string,
    author : string,
    locked : boolean
}

export const lstBooks : book[] = [
    {
        id: 1,
        name: "Book 1",
        type: BookTypeEnum.ProgrammingBook.name,
        author: "Author 1",
        locked: false
    },
    {
        id: 2,
        name: "Book 2",
        type: BookTypeEnum.NovelBook.name,
        author: "Author 2",
        locked: true
    },
    {
        id: 3,
        name: "Book 3",
        type: BookTypeEnum.AnimeBook.name,
        author: "Author 3",
        locked: false
    }
]
