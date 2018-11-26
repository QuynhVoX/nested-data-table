import { Component,Input, OnInit, SimpleChanges, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { MatTableDataSource,  MatPaginator, MatSort } from '@angular/material';
import {trigger, state, style, transition, animate,} from '@angular/animations';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, fromEvent, of, Subject, Subscription } from 'rxjs';
import { map, filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';

import { UtilService } from '../../services/util.service';
import { DoubleRowPaginatorComponent } from '../double-row-paginator/double-row-paginator.component';

@Component({
  selector: 'nested-table',
  templateUrl: './nested-table.component.html',
  styleUrls: ['./nested-table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state(
        'collapsed',
        style({ height: '0px', minHeight: '0', visibility: 'hidden' })
      ),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ]
})


export class NestedTableComponent implements OnInit {
  @Input() data:  any[] ;
  @Input() columns:  any[] ;
  @Input() header: any[];
  @Output() onHeaderClick = new EventEmitter<any[]>()
  @Output() onRowClick = new EventEmitter<any[]>();
  @ViewChild('searchBox') search: ElementRef;
  //@ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(DoubleRowPaginatorComponent) customPaginator: DoubleRowPaginatorComponent;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  displayedColumns: any[];
  expandedElement: any;
  searchToggle = true;
  tableLength:number;
  unsortedData: any[];
  detailColumns: any[];
  moreDetailColumns: any[];
  isExpansionDetailRow = (i, row) => row.detailRow;
  constructor( private util: UtilService) {   
  }

  ngOnInit() {
    this.displayedColumns = this.columns.map(c => c.columnDef);  
    
    if (this.data.length < 11) this.searchToggle = false;
    var details = this.columns.filter(x => x.columnDef == "details")[0];
    if (details){
      this.detailColumns = details.columns;
      
      var moreDetails = this.detailColumns.filter(x => x.columnDef == "details")[0];
      if (moreDetails){
        this.moreDetailColumns = moreDetails .columns;
      }
      this.columns = this.columns.filter(x => x.columnDef !== "details");
    }
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.paginator = this.customPaginator;
    this.dataSource.sort = this.sort;

    this.setData(this.data);
    this.unsortedData = this.dataSource.filteredData.map(g => Object.assign({}, g));

    this.sort.sortChange.subscribe(() => {
      this.customPaginator.pageIndex = 0;
      this.expandedElement = null;

      let data = this.dataSource.filteredData.map(g => Object.assign({}, g));
      if (this.sort.direction) {
        this.dataSource.data = data.sort(
          this.util.dynamicSort(
            this.sort.active,
            this.sort.direction == 'asc' ? 1 : -1));
      }
      else this.dataSource.data = this.unsortedData;

    });
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
        //this.dataSource.data = this.data;      
      }
    }
    
  }
  searchTextChanged(text){
    this.dataSource.filter = text;
  }   
  setData(input: any) {
   
    const data = [];
    input.forEach(element => {
      if (element.details && element.details.length) {
        let detail = Object.assign({}, element);
        detail.detailRow = true;
        data.push(element, detail)
      }
      else data.push(element)
    });
    this.dataSource.data = data;
  
  }
  toggleRow(row) {
    if (this.expandedElement === row) {
      this.expandedElement = null;
    } else {
      this.expandedElement = row;
      
    }
  }
}
