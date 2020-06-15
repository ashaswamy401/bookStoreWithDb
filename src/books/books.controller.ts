import { Controller, Get, Param, Post, Body, Delete, Query, Put } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDTO } from './dto/create-book.dto';
import { Book } from './book.entity';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }

    @Get()
    getBooks() {
        return this.booksService.getBooks();
    }

    @Get(':id')
    getBook(@Param() params) {
        const book = this.booksService.getBook(params.id);
        return book;
    }

    @Post()
    addBook(@Body() book: Book) {
        return this.booksService.addOrUpdateBook(book);
    }

    @Put()
    updateBook(@Body() book: Book) {
        return this.booksService.addOrUpdateBook(book);
    }

    @Delete(':id')
    deleteBook(@Param() params) {
        return this.booksService.deleteBook(params.id);
    }
}
