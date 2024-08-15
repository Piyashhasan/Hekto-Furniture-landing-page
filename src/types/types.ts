// --- feature product type ---
export interface FeatureProduct {
  img: string;
  productName: string;
  productCode: string;
  price: number;
}

// --- latest product ---
export interface LatestProduct {
  img: string;
  productName: string;
  price: number;
  discountPrice: number;
  filterKey: string[];
}
