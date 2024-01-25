import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { CustompageService } from '../../services/custompage.service';


import { Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-custompage',
  templateUrl: './custompage.component.html',
  styleUrls: ['./custompage.component.scss']
})
export class CustompageComponent implements OnInit {

public columnDefs: ColDef[] = [];
public customNames : any = [];

 public rowData = [
    { id: 1, name: 'Toyota', price: '20000', make: '2020' },
    { id: 2, name: 'Volkswagon', price: '30000', make: '2021' },
    { id: 3, name: 'Hyundai', price: '14000', make: '2021' },
  ];
constructor(private custompageService: CustompageService) { }

  ngOnInit(): void {
    
    this.loadProductList();
    
    this.generateColumnDefs();
  }



public generateColumnDefs()
{
  const propertiesArray = [{
       headerName : "price",
       field : "price" 
      },{
       headerName : "name",
       field : "name" 
      }];
  for (const property of propertiesArray) {
    this.customNames.push(property);
  }
}




  productList: Product[] = [];
  
  loadProductList(): void {
    this.custompageService.getProductList().subscribe(
      (data : Product[]) => {
        this.productList = data;
      },
      (error : unknown) => {
        console.error('Error loading custompage list:', error);
      }
    );
  }


  
}
