import { Response } from "express";
import { ApiResponse } from "src/shared/ApiResponse";

export async function getAdministratorById(res: Response, id: string) {
  try {
    // const resp = await getInvoiceFromSRI(claveAcceso);
    // const supplier = await getSupplierByRuc(resp.infoTributaria.ruc, tenantId);
    // return ApiResponse.success(res, "Correcto", {
    //   factura: resp,
    //   supplier: supplier,
    // });
  } catch (error: any) {
    return ApiResponse.error(res, error);
  }
}
