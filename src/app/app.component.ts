import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isLoading: boolean = false;
  title = 'Nested Table Example';
  
  data :any[] = [];
  columns = [
    { columnDef: 'name', header: 'Name', dataType: 'string' },
    { columnDef: 'address', header: 'Address', dataType: 'string' },
    { columnDef: 'dateHired', header: 'Date Hired', dataType: 'date' },
    { columnDef: 'paid', header: 'Check Amount', dataType: 'money' },
    { columnDef: 'details', header: 'Details', dataType: 'icon', class: 'fa fa-angle-right', color: 'primary' },
  ];
  commentColumns = [
    { columnDef: 'comments', header: 'Comments', dataType: 'string' },
  ];
  weeklyColumns =[  
    { columnDef: 'week', header: 'Week', dataType: 'number' },
    { columnDef: 'dateFrom', header: 'From', dataType: 'date' },
    { columnDef: 'dateTo', header: 'To', dataType: 'date' },
    { columnDef: 'regular', header: 'Regular (hour)', dataType: 'number' },
    { columnDef: 'overtime', header: 'Overtime (hour)', dataType: 'number' },
    { columnDef: 'paid', header: 'Amount', dataType: 'money' },
    { columnDef: 'details', header: 'Details', columns: this.commentColumns},
  ];
  nestedColumns = [
    { columnDef: 'name', header: 'Name', dataType: 'string' },
    { columnDef: 'address', header: 'Address', dataType: 'string' },
    { columnDef: 'dateHired', header: 'Date Hired', dataType: 'date' },
    { columnDef: 'paid', header: 'Check Amount', dataType: 'money' },
    { columnDef: 'details', header: 'Details', columns: this.weeklyColumns},
  ];
  header: any = { header: 'Simple Table', export: false };
  nestedHeader: any = { header: 'Nested Table', export: false };
  
  
  ngOnInit() {
   
  

    this.data = [
      {
        name: 'Isidro Jen', address: '487 Sunbeam Ave.', dateHired: '1999-12-10', paid: 8701, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[
              {comments:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.`
              },
              {
                comments:`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.`
              }
            ]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Florencio Mullin', address: '9080 Newcastle Court', dateHired: '2000-05-29', paid: 5237, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 1237, details:[
              {comments:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.`
              },
              {
                comments:`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.`
              }
            ]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 1000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 1000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 1000, details:[]
          }
        ]
      },
      {
        name: 'Ahmed Taveras', address: '7930 Bowman St.', dateHired: '2000-08-25', paid: 7543, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 5, overtime: 0, paid: 1534, details:[
              {comments:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.`
              },
              {
                comments:`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.`
              }
            ]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Jenni Whiteley', address: '42 Santa Clara Street', dateHired: '2002-08-16', paid: 7575, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 6, overtime: 0, paid: 1575, details:[
              {comments:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.
              Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.`
              },
              {
                comments:`Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.
                Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.
                Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.`
              }
            ]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Rashad Tidd', address: '829 E. Cardinal St.', dateHired: '2003-12-10', paid: 6483, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 4, paid: 1983, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 1500, details:[]
          }
        ]
      },
      {
        name: 'Katrice Chrisman', address: '692 Lakewood Drive', dateHired: '2003-12-30', paid: 7954, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 7.5, overtime: 0, paid: 1954, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Irving Maugeri', address: '96 3rd Ave.', dateHired: '2004-05-12', paid: 9281, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2281, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 4, paid: 2500, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 4, paid: 2500, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000 , details:[]
          }
        ]
      },
      {
        name: 'Felisha Cashwell', address: '8 Front Drive', dateHired: '2004-10-29', paid: 6306, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 1806, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 1500, details:[]
          }
        ]
      },
      {
        name: 'Viola Rubalcaba', address: '8298 Glenholme Ave.', dateHired: '2005-01-27', paid: 7043, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 4, overtime: 0, paid: 1043 , details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Reena Harjo', address: '672 Church St.', dateHired: '2005-02-16', paid: 6618, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 4, paid: 2118, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 1500, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 1500, details:[]
          }
        ]
      },
      {
        name: 'Walker Thode', address: '9582 West Tunnel Street', dateHired: '2006-02-01', paid: 9078, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Kristy Vanwinkle', address: '19 Dunbar Drive', dateHired: '2007-03-28', paid: 5439, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Wendell Kiernan', address: '194 Sheffield Road', dateHired: '2010-10-08', paid: 5453, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Gladis Arocho', address: '99 Foster St.', dateHired: '2014-11-27', paid: 6114, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Vito Trostle', address: '310 Rosewood Ave.', dateHired: '2015-04-02', paid: 6509, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Stephaine William', address: '26 Oak Lane', dateHired: '2016-09-08', paid: 8055, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Ethelene Krishnan', address: '99 Foster St.', dateHired: '2017-04-21', paid: 5604, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Domonique Stjames', address: '82 Roehampton St.', dateHired: '2018-01-15', paid: 5972, details: [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
      {
        name: 'Cythia Whipple', address: '82 Glen Eagles St. ', dateHired: '2018-11-20', paid: 5149, details:  [
          {
            week: 1, dateFrom: '2018-10-28', dateTo: '2018-11-03', regular: 8, overtime: 2, paid: 2701, details:[]
          },
          {
            week: 2, dateFrom: '2018-11-04', dateTo: '2018-11-10', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 3, dateFrom: '2018-11-11', dateTo: '2018-11-17', regular: 8, overtime: 0, paid: 2000, details:[]
          },
          {
            week: 4, dateFrom: '2018-11-18', dateTo: '2018-11-23', regular: 8, overtime: 0, paid: 2000, details:[]
          }
        ]
      },
    ];
  }
  rowSelected(row){
    console.log(row);
  }
}

