import { Product } from '../models/product';

export interface ProductState {
  products: Product[];
  selectedProduct: Product;
  error?: any;
}

export const initialProductState: ProductState = {
  products: null,
  selectedProduct: null,
  error: null,
};
