// types/express.d.ts
import { Prisma } from "../prisma/generated/client";

type UserWithRoles = Prisma.UserGetPayload<{
  include: {
    roles: {
      include: {
        role: true;
      };
    };
  };
}>;

declare global {
  namespace Express {
    interface Request {
      user?: UserWithRoles;
    }
  }
}

export {};
