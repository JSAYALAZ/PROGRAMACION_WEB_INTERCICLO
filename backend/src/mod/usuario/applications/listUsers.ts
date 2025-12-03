import { AppError } from "src/shared/AppError";
import { UserDb } from "../db/UserDb";
import { db } from "src/shared/prisma";

export const listUsers = async () => {
  try {
    const result = await UserDb.list();
    return result;
  } catch (error) {
    if (error instanceof AppError) throw error;
    throw AppError.internal();
  }
};

// export const listUsers = async () => {
//   try {
    
//     console.log("Aqui");
//     await db.project.deleteMany()
//     console.log("Aqui2");
//     await db.portfolio.deleteMany()
//     console.log("Aqui3");
//     await db.programmerProfile.deleteMany()
//     console.log("Aqui4");
//     await db.user.deleteMany()
//     console.log("Aqui5");
//     // const result = await UserDb.list();
//     return "Listo";
//     // return result;
//   } catch (error) {
//     console.log(error);
    
//     if (error instanceof AppError) throw error;
//     throw AppError.internal();
//   }
// };
