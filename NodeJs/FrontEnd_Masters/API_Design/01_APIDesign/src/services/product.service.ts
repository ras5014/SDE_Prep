import prisma from "../../db";

export const fetchAllProducts = async (userId) => {
  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      products: true,
    },
  });

  if (!user) {
    throw new Error("User not found");
  }

  return user.products;
};

export const fetchProductById = async (productId) => {
  const product = await prisma.product.findFirst({
    where: {
      id: productId,
    },
  });

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
};

export const create = async (data) => {
  const product = await prisma.product.create({
    data: {
      ...data,
    },
  });

  return product;
};

export const update = async (productId, name, userId) => {
  const updatedProduct = await prisma.product.update({
    where: {
      id: productId,
      belongsToId: userId,
    },
    data: {
      name,
    },
  });

  if (!updatedProduct) {
    throw new Error("Product not found");
  }

  return updatedProduct;
};

export const remove = async (productId, userId) => {
  const deletedProduct = await prisma.product.delete({
    where: {
      id: productId,
      belongsToId: userId,
    },
  });

  if (!deletedProduct) {
    throw new Error("Product not found");
  }

  return deletedProduct;
};
