import mongoose, { Document, Schema } from 'mongoose';

interface ICustomer extends Document {
    firstName: string;
    lastName: string;
    email: string;
}

const CustomerSchema: Schema<ICustomer> = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true }
});

export default mongoose.model<ICustomer>('Customer', CustomerSchema);