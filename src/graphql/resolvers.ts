// Finish the resolvers
import Product from '../models/product.model'
import Customer from '../models/customer.model'
import Order from '../models/order.model'

export const resolvers = {
  Query: {
    products: () => {},
    customers: () => {},
    orders: () => {},
    getProductById: () => {},
    getCustomerById: () => {},
  },
  Product: {
    customers: () => {}
  },
  Customer: {
    products: () => {}
  },
  Order: {
    product: () => {},
    customer: () => {}
  },
  Mutation: {
    //add product
    addProduct: async (_: any, { productName, productPrice }: { productName: string; productPrice: number }) => {
      return await Product.create({ productName, productPrice });
    },
    //edit product
    editProduct: async (_: any, { id, productName, productPrice }: { id: string; productName?: string; productPrice?: number }) => {
      try {
        const updatedProduct = await Product.findByIdAndUpdate(
          id, 
          { productName, productPrice }, 
          { new: true } 
        );
    
        if (!updatedProduct) throw new Error("Product not found");
        
        return updatedProduct;
      } catch (error) {
        console.error("Error updating product:", error);
        return null;
      }
    },    
    //remove product
    removeProduct: () => {},

    addCustomer: () => {},
    editCustomer: () => {},
    removeCustomer: () => {},

    addOrder: () => {},
    editOrder: () => {},
    removeOrder: () => {}
  }
}
