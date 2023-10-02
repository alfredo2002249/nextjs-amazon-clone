import { ProductCreateNestedManyWithoutOrdersInput } from "./ProductCreateNestedManyWithoutOrdersInput";
import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  paymentStatus: boolean;
  paymenttintent: string;
  price: number;
  products?: ProductCreateNestedManyWithoutOrdersInput;
  status: InputJsonValue;
  user: UserWhereUniqueInput;
};
