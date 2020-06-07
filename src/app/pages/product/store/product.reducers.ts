import { MetaReducer, createReducer, on } from '@ngrx/store';
import { environment } from '../../../../environments/environment';
import { ProductState, initialProductState } from './product.state';
import * as ProductActions from './product.actions';

export const productStateFeatureKey = 'productState';

export const reducers = createReducer(
  initialProductState,
  on(ProductActions.loadProductsSuccess, (state, action) => {
    return {
      ...state,
      products: action.products,
    };
  }),

  on(ProductActions.loadProductsFailure, (state, action) => {
    return {
      ...state,
      products: state.products,
      error: action.error,
    };
  }),

  on(ProductActions.loadOneProductSuccess, (state, action) => {
    return {
      ...state,
      selectedProduct: action.selectedProduct,
    };
  }),

  on(ProductActions.loadOneProductFailure, (state, action) => {
    return {
      ...state,
      products: null,
      error: action.error,
    };
  }),

  on(ProductActions.addProductSuccess, (state, action) => {
    return Object.assign({}, state, {
      products: [...state.products, action.product],
    });
  }),

  on(ProductActions.addProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  }),

  on(ProductActions.updateProduct, (state, action) => {
    return Object.assign({}, state, {
      products: state.products.map((item) => {
        if (item.id !== action.product.id) {
          return item;
        }
        return {
          ...item,
          ...action.product,
        };
      }),
      selectedProduct: [action.product],
    });
  }),

  on(ProductActions.deleteProductSuccess, (state, action) => {
    return Object.assign({}, state, {
      ...state,
      products: state.products.filter((item) => item.id !== action.id),
    });
  }),

  on(ProductActions.deleteProductFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
    };
  })
);

export const metaReducers: MetaReducer<ProductState>[] = !environment.production
  ? []
  : [];
