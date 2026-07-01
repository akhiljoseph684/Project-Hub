import prisma from "../../config/prisma.js";

export const searchUsersService = async (search) => {
  const users = await prisma.user.findMany({
    where: {
      isVerified: true,
      isActive: true,

      OR: [
        {
          firstName: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          lastName: {
            contains: search,
            mode: "insensitive",
          },
        },
        {
          email: {
            contains: search,
            mode: "insensitive",
          },
        },
      ],
    },

    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
      avatar: true,
    },

    take: 10,
  });

  return users;
};
