import Customer from '../models/customer.model';

export const getCustomers = async (): Promise<typeof Customer[]> => await Customer.find();
export const getCustomerById = async (id: string): Promise<typeof Customer | null> => await Customer.findById(id);

//add customer
export const createCustomer = async (data: { firstName: string; lastName: string; email: string }): Promise<typeof Customer> => await Customer.create(data);
export const updateCustomer = async (id: string, data: { firstName?: string; lastName?: string; email?: string }): Promise<typeof Customer | null> => await Customer.findByIdAndUpdate(id, data, { new: true });
export const deleteCustomer = async (id: string): Promise<typeof Customer | null> => await Customer.findByIdAndDelete(id);