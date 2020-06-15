import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';

@Injectable()
export class BooksService {

    constructor(@InjectRepository(Book) private bookRepo: Repository<Book>) { }

    async getBooks(): Promise<Book[]> {
        return await this.bookRepo.find();
    }

    async getBook(bookid: number): Promise<Book[]> {
        return await this.bookRepo.find({
            select: ["title", "description", "author"],
            where: [{ "id": bookid }]
        });
    }

    async addOrUpdateBook(book: Book) {
        return this.bookRepo.save(book);
    }
    
    async deleteBook(book: Book) {
        return this.bookRepo.delete(book);
    }
}
