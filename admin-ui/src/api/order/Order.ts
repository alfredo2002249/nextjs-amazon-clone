import { Product } from "../product/Product";
import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  paymentStatus: boolean;
  paymenttintent: string;
  price: number;
  products?: Array<Product>;
  status: JsonValue;
  updatedAt: Date;
  user?: User;
};
