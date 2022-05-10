import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';


@Injectable({
    providedIn: 'root'
})
export class CustomPaginatorInt extends MatPaginatorIntl {

    // public lastPageLabel = 'Última página';
    // public nextPageLabel = 'Próxima página';
    // public firstPageLabel = 'Primeira Página';
    // public previousPageLabel = "Página anterior";
    // public itemsPerPageLabel = 'Itens por página';

    // getRangeLabel = (page: number, pageSize: number, length: number) => {
    //     if (length === 0 || pageSize === 0) {
    //         return '0 de ' + length;
    //     }
    // length = Math.max(length, 0);
    // const startIndex = page * pageSize;
    // const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    // return startIndex + 1 + ' - ' + endIndex + ' de ' + length;
    // };

}