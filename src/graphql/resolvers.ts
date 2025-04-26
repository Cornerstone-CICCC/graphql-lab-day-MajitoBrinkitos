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
    //PRODUCT
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
    removeProduct: async(_: any, {id}:{ id: string }) => {
      try {
        const deleteProduct = await Product.findByIdAndDelete(
          id
        );
        if (!deleteProduct) throw new Error("Product not found");
        
        return deleteProduct;
      } catch (error) {
        console.error("Error deleting product:", error);
        return null;
      }
    },

    //CUSTOMER
    //add customer
    addCustomer: async (_: any, { firstName, lastName, email}: { firstName: string; lastName: string; email: string }) => {
      return await Customer.create({ firstName, lastName, email });
    },
    editCustomer: () => {},
    removeCustomer:() => {},

    addOrder: () => {},
    editOrder: () => {},
    removeOrder: () => {}
  }
}
