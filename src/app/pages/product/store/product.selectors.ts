import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductState } from './product.state';

export const selectProductsFeature = createFeatureSelector<ProductState>(
  'productState'
);

export const selectProductsList = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.products
);

export const selectOneProduct = createSelector(
  selectProductsFeature,
  (state: ProductState) => state.selectedProduct
);
