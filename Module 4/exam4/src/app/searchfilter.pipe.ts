import { Book } from './shared/model/book.model';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(books: Book[],searchValue:string): Book[] {
    if(!books || !searchValue){
      return books;
    }
    return books.filter(book=>book.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()));
  }

}
