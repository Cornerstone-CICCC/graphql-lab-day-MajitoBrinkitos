import mongoose, { Document, Schema } from 'mongoose';

interface IProduct extends Document {
    productName: string;
    productPrice: number;
}

const ProductSchema: Schema<IProduct> = new Schema({
    productName: { type: String, required: true },
    productPrice: { type: Number, required: true},
});

export default mongoose.model<IProduct>('Product', ProductSchema);
