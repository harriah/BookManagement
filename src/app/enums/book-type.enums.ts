import { BaseTypeEnum } from "./base-type.enums";

export class BookTypeEnum extends BaseTypeEnum {
  static ProgrammingBook = new BookTypeEnum("Programing", "Programming");
  static NovelBook = new BookTypeEnum("Novel", "Novel");
  static AnimeBook = new BookTypeEnum("Anime", "Anime");
  static EnglishBook = new BookTypeEnum("English", "English");
  static override All = [
    this.ProgrammingBook,
    this.NovelBook,
    this.AnimeBook,
    this.EnglishBook
  ]

}
