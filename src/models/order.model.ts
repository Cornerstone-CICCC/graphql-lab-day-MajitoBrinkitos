import mongoose, { Document, Schema } from "mongoose";

interface IOrder extends Document {
    productId: mongoose.Types.ObjectId;
    customerId: mongoose.Types.ObjectId;
}

const OrderSchema: Schema<IOrder> = new Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true},
});

export default mongoose.model<IOrder>('Order', OrderSchema);