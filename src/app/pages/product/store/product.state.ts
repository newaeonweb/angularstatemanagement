import { Product } from '../models/product';

export interface ProductState {
  products: Product[];
  selectedProduct: Product;
  error: string | null;
}

export const initialProductState: ProductState = {
  products: null,
  selectedProduct: null,
  error: null,
};
