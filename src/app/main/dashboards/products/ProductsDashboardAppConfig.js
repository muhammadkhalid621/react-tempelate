import { lazy } from 'react';
const ProductsDashboardApp = lazy(() => import('./ProductsDashboardApp'));

const ProductsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/products',
      element: <ProductsDashboardApp />,
    },
  ],
};

export default ProductsDashboardAppConfig;
