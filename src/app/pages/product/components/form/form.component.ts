import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from '../../models/product';
import { Store } from '@ngrx/store';
import { addProduct, updateProduct } from '../../store/product.actions';
import { ProductState } from '../../store/product.state';
import { GalleryHttpService } from '../../services/gallery-http.service';

@Component({
  selector: 'ngr-form-product',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() data?: Product;
  @Input() type: string;
  isLoading = false;
  productForm: FormGroup;
  validUrl = '^(http|https)://.*$';

  gallery: [];

  constructor(
    private fb: FormBuilder,
    private store: Store<ProductState>,
    private http: GalleryHttpService
  ) {}

  createForm() {
    this.productForm = this.fb.group({
      id: [''],
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      picture: ['', [Validators.required, Validators.pattern(this.validUrl)]],
    });
  }

  get fc() {
    return this.productForm.controls;
  }

  // Sample code for fake image gallery
  loadGallery() {
    this.isLoading = true;
    this.http.getGalleryImages().subscribe(
      (res) => {
        this.gallery = res;
        this.isLoading = false;
      },
      (error) => {
        alert('Something bad happened, sorry!');
        this.isLoading = false;
      }
    );
  }

  selectImage(url) {
    this.productForm.patchValue({ picture: url });
    alert('Image url changed!');
  }
  // Sample code for fake image gallery

  createProduct(product: Product) {
    this.store.dispatch(addProduct({ product }));
    this.isLoading = false;
  }

  editProduct(product: Product) {
    this.store.dispatch(updateProduct({ product }));
    this.isLoading = false;
  }

  onSubmit() {
    const product = this.productForm.value;
    this.isLoading = true;

    if (this.productForm.invalid) {
      alert('Form invalid');
    }

    if (this.type === 'add') {
      this.createProduct(product);
    } else {
      this.editProduct(product);
    }
  }

  ngOnInit(): void {
    this.createForm();
    if (this.data) {
      this.productForm.patchValue(this.data);
    }
  }
}
