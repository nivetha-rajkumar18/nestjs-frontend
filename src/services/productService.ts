import { Product, CreateProductDto, FilterOptions, UpdateProductDto } from '../types/product.types';

class ProductService {
  private baseUrl = 'http://localhost:3000/products';

  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching products:', error);
      throw new Error('Failed to fetch products');
    }
  }

  async getProduct(id: string): Promise<Product> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching product:', error);
      throw new Error('Failed to fetch product');
    }
  }

  async createProductWithSingleImage(product: CreateProductDto, image?: File): Promise<Product> {
    try {
      const formData = new FormData();
      
      // Add product data
      Object.entries(product).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          formData.append(key, value !== null ? value.toString() : '');
        }
      });
      
      // Add image if provided
      if (image) {
        formData.append('image', image);
      }

      const response = await fetch(`${this.baseUrl}/single`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating product:', error);
      throw new Error('Failed to create product');
    }
  }

  async createProductWithMultipleImages(product: CreateProductDto, gallery?: File[]): Promise<Product> {
    try {
      const formData = new FormData();
      
      // Add product data
      Object.entries(product).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          formData.append(key, value !== null ? value.toString() : '');
        }
      });
      
      // Add gallery images if provided
      if (gallery && gallery.length > 0) {
        gallery.forEach((file) => {
          formData.append('gallery', file);
        });
      }

      const response = await fetch(`${this.baseUrl}/multiple`, {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error creating product with gallery:', error);
      throw new Error('Failed to create product');
    }
  }

  async updateProduct(id: string, product: UpdateProductDto, gallery?: File[]): Promise<Product> {
    try {
      const formData = new FormData();
      
      // Add product data
      Object.entries(product).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          formData.append(key, value !== null ? value.toString() : '');
        }
      });
      
      // Add gallery images if provided
      if (gallery && gallery.length > 0) {
        gallery.forEach((file) => {
          formData.append('gallery', file);
        });
      }

      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error updating product:', error);
      throw new Error('Failed to update product');
    }
  }

  async deleteProduct(id: string): Promise<void> {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error deleting product:', error);
      throw new Error('Failed to delete product');
    }
  }

  async filterProducts(filters: FilterOptions): Promise<Product[]> {
    try {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== '') {
          params.append(key, value.toString());
        }
      });
      
      const response = await fetch(`${this.baseUrl}/filter?${params}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error filtering products:', error);
      throw new Error('Failed to filter products');
    }
  }
}

export const productService = new ProductService();