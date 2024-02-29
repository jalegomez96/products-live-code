import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Product } from 'src/app/shared/interfaces/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  public form = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required, Validators.min]],
  }
  )



  constructor(private fb: FormBuilder, private productService: ProductService) { }

  ngOnInit() {
  }

  submit() {

    console.log(this.form.value)

    if (this.form.valid) {

      const { title, description, price } = this.form.value
      const product: Partial<Product> = {
        title,
        description,
        price: price ? +price : 0
      }

      console.log({product})
      this.productService.createProduct(product).subscribe(res=>{
        console.log(res)
      })
    }
  }

}
