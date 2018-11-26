import { FormControl, FormGroup } from '@angular/forms';
import { Component, Input, AfterViewInit } from "@angular/core";
import { MatTableDataSource, MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSort, MatPaginator } from '@angular/material';
@Component({
  selector: 'double-row-paginator',
  templateUrl: './double-row-paginator.component.html',
  styleUrls: ['./double-row-paginator.component.scss']
})

export class DoubleRowPaginatorComponent extends MatPaginator implements AfterViewInit {

  ngAfterViewInit(): void {
    this.setInitialValues(this.pageSize);
  }

  lastIndex: number;
  initialPageSize = this.pageSize;

  setInitialValues(value) {

    setTimeout(() => {
      if (this.length !== 0) {
        this.changePageSize(value);
      } else {
        this.changePageSize(value);
      }
    }, 100);
  }

  changePageSize(value) {
      const startIndex = this.pageIndex * this.pageSize;
      this.pageSize = value * 2;
      this.pageIndex = Math.floor(startIndex / this.pageSize);
      this.lastIndex = Math.ceil((this.length / this.pageSize));
      this.fireEvent();
  }

  getRangeLabel (page: number, pageSize: number, length: number){ 
    if (length == 0 || pageSize == 0) { 
      return `0 of ${length}`; 
    } 
    length = Math.max(length, 0); 
    const startIndex = page * pageSize; 
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize; 
    return `${startIndex/2 + 1} - ${endIndex/2} of ${length/2}`; 
  }
 
  firstPage(){
    if (!this.hasPreviousPage()) { return; }
    this.pageIndex = 0;
    this.fireEvent();
  }
  previousPage() {
    if (!this.hasPreviousPage()) { return; }
    --this.pageIndex;
    this.fireEvent();

  }
  nextPage() {
    if (!this.hasNextPage()) { return; }
    ++this.pageIndex;
    this.fireEvent();

  }
  lastPage(){
    if (!this.hasNextPage()) { return; }
    this.pageIndex = this.getNumberOfPages();
    this.fireEvent();
  }
  previousButtonsDisabled()
  {
    if (!this.hasPreviousPage()) { return true; }
    if (this.pageIndex > 0) return false
    return true;
  }
  nextButtonsDisabled()
  {
    if (!this.hasNextPage()) { return true; }
    if (this.pageIndex === this.lastIndex-1) return true
    return false;
  }
  hasPreviousPage(): boolean {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  hasNextPage(): boolean {
    const numberOfPages = this.getNumberOfPages();
    return this.pageIndex < numberOfPages && this.pageSize != 0;
  }
  getNumberOfPages(): number {
    return Math.ceil(this.length / this.pageSize) - 1;
  }
  fireEvent() {
    this.page.emit({ pageIndex: this.pageIndex, pageSize: this.pageSize, length: this.length });
  }
}