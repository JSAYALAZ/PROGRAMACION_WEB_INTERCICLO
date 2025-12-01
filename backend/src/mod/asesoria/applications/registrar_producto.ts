import { ProductDb } from "../db/ProductDb";

export const getAll = async (req:Request, res:Response) => {
  const result =  ProductDb.getAll();
  return res.json();
};