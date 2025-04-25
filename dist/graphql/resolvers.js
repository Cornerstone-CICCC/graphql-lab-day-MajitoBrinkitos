"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
// Finish the resolvers
const product_model_1 = __importDefault(require("../models/product.model"));
exports.resolvers = {
    Query: {
        products: () => { },
        customers: () => { },
        orders: () => { },
        getProductById: () => { },
        getCustomerById: () => { },
    },
    Product: {
        customers: () => { }
    },
    Customer: {
        products: () => { }
    },
    Order: {
        product: () => { },
        customer: () => { }
    },
    Mutation: {
        //add product
        addProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { productName, productPrice }) {
            return yield product_model_1.default.create({ productName, productPrice });
        }),
        //edit product
        editProduct: (_1, _a) => __awaiter(void 0, [_1, _a], void 0, function* (_, { id, productName, productPrice }) {
            try {
                const updatedProduct = yield product_model_1.default.findByIdAndUpdate(id, { productName, productPrice }, { new: true });
                if (!updatedProduct)
                    throw new Error("Product not found");
                return updatedProduct;
            }
            catch (error) {
                console.error("Error updating product:", error);
                return null;
            }
        }),
        //remove product
        removeProduct: () => { },
        addCustomer: () => { },
        editCustomer: () => { },
        removeCustomer: () => { },
        addOrder: () => { },
        editOrder: () => { },
        removeOrder: () => { }
    }
};
