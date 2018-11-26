import { Component,Input, OnInit, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource,  MatPaginator, MatSort } from '@angular/material';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, fromEvent, of, Subject, Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { UtilService } from '../../../app-shared/services/util.service';

@Component({
  selector: 'client-table',
  templateUrl: './client-table.component.html',
  styleUrls: ['./client-table.component.scss']
})


export class ClientTableComponent implements OnInit {
  @Input() header: any ;
  @Input() data:  any[] ;
  @Input() columns:  any[] ;
  @Output() onHeaderClick = new EventEmitter<any[]>()
  @Output() onRowClick = new EventEmitter<any[]>();
  @ViewChild('searchBox') search: ElementRef;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: any[];
  
  searchToggle = false;
  tableLength:number;
  constructor(private util: UtilService) {   
  }

  ngOnInit() { 
    //console.log('client', this.outputHeaderClicked);
    this.displayedColumns = this.columns.map(c => c.columnDef);   
    //console.log('initial',this.data);
    if (!this.header) this.searchToggle = true;
    if (this.data.length < 11) this.searchToggle = false;
  }
 
  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.sort.sortChange.subscribe(() => {
      this.paginator.pageIndex = 0;
    });
    
    /* Observable.fromEvent(this.search.nativeElement, 'keyup')
      .map((evt: any) => evt.target.value)
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe((text: string) => {
        this.searchTextChanged(text)
      }); */
      const obs = fromEvent(this.search.nativeElement, 'keyup')
      .pipe(
        map((evt: any) => evt.target.value),
        debounceTime(500),
        distinctUntilChanged())
      .subscribe((text: string) => {
        this.searchTextChanged(text)
      });

  }
  ngOnChanges(changes: SimpleChanges) {
    
    for (let propName in changes) {
      if (propName ==="data") {
        //console.log('change',this.data);
        this.dataSource.data = this.data;      
      }
    }
    
  }
  searchTextChanged(text){
    this.dataSource.filter = text;
  }   
  headerClick(event){
    this.onHeaderClick.emit(event);
  }
  rowClick(item){
    this.onRowClick.emit(item);
  }
  export() {
    
  }
}
