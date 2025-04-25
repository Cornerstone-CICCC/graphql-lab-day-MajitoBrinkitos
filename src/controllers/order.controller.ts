import mongoose from 'mongoose';
import Order from '../models/order.model';

export const getOrders = async (): Promise<typeof Order[]> => await Order.find();
export const createOrder = async (productId: mongoose.Types.ObjectId, customerId: mongoose.Types.ObjectId ): Promise<typeof Order> =>
    await Order.create(productId, customerId);

export const updateOrder = async (id: string, data: { productId?: mongoose.Types.ObjectId; customerId?: mongoose.Types.ObjectId }): Promise<typeof Order | null> => await Order.findByIdAndUpdate(id, data, { new: true });

export const deleteOrder = async (id: string): Promise<typeof Order | null> => await Order.findByIdAndDelete(id);