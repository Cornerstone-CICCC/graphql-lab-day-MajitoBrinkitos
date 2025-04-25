import Product from '../models/product.model';

export const getProducts = async (): Promise<typeof Product[]> => await Product.find();

export const getProductById = async (id: string): Promise<typeof Product | null> => await Product.findById(id);

export const createProduct = async (data: { productName: string; productPrice: number }): Promise<typeof Product> => await Product.create(data);

export const updateProduct = async (id: string, data: { productName?: string; productPrice?: number }): Promise<typeof Product | null> => await Product.findByIdAndUpdate(id, data, { new: true });

export const deleteProduct = async (id: string): Promise<typeof Product | null> => await Product.findByIdAndDelete(id);