// Product interface
export interface Product {
    id : string;
    stock: number;
    imageUrl: string;
    _id: string;
    name: string;
    description?: string;
    price: number;
    stockAvailable: number;
    category?: string;
    image?: string;
    gallery?: string[];
    createdAt: string;
    updatedAt?: string;
    
  product?: Product;

  // 
}
 export interface ProductCardProps {

  product?: Product;

  onEdit: (product: Product) => void;

  onDelete: (id: string) => void;

}
  
  // Filter options interface
  export interface FilterOptions {
    name?: string;
    createdBefore?: string;
    createdAfter?: string;
    stockAvailable?: number;
  }
  
  // Create product DTO
  export interface CreateProductDto {
    name: string;
    description?: string;
    price: number;
    stockAvailable: number;
    category?: string;
  }
  
  // Update product DTO
  export interface UpdateProductDto extends Partial<CreateProductDto> {}
  
  // Sort options
  export type SortBy = 'name' | 'price' | 'stock' | 'date';
  export type SortOrder = 'asc' | 'desc';
  
  // Modal state types
  export interface ModalState {
    create: boolean;
    edit: boolean;
    filter: boolean;
  }
  
  // Form state for product creation/editing
  export interface ProductFormState extends CreateProductDto {
    selectedImage: File | null;
    selectedGallery: File[];
    useMultipleImages: boolean;
    imagePreview: string | null;
    galleryPreviews: string[];
  }
  
  // API response types
  export interface ApiResponse<T> {
    data: T;
    message?: string;
    success: boolean;
  }
  
  export interface ApiError {
    message: string;
    status?: number;
  }
  
 