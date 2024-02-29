import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit , AfterViewInit  {
  displayedColumns: string[] = ['title', 'description', 'price', 'price'];
  dataSource = new MatTableDataSource<Product>([]);
  @ViewChild(MatPaginator) paginator: MatPaginator | undefined

  constructor(private productService: ProductService) { }

  ngAfterViewInit() {
    if(this.paginator) {
      this.dataSource.paginator = this.paginator
    }
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(res=>{
      this.dataSource = new MatTableDataSource(res.products)
    })
  }

}