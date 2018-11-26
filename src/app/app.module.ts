import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    
} from '@angular/material';
import { AppComponent } from './app.component';
import { ClientTableComponent } from '../app-shared/components/client-table/client-table.component';
import { NestedTableComponent } from '../app-shared/components/nested-table/nested-table.component';
import { DoubleRowPaginatorComponent } from '../app-shared/components/double-row-paginator/double-row-paginator.component';
import { UtilService } from '../app-shared/services/util.service';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatTableModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatRadioModule,
    AngularFontAwesomeModule
  ],
  declarations: [
    AppComponent,
    ClientTableComponent,
    NestedTableComponent,
    DoubleRowPaginatorComponent,
  ],
  providers: [UtilService],
  exports: [
    ClientTableComponent,
    NestedTableComponent,
    DoubleRowPaginatorComponent,
],
  bootstrap: [AppComponent]
})
export class AppModule { }
