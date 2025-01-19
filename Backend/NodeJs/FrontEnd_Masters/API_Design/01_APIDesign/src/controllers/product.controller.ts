import {
  fetchAllProducts,
  fetchProductById,
  create,
  update,
  remove,
} from "../services/product.service";

export const getProducts = async (req, res, next) => {
  try {
    const products = await fetchAllProducts(req.user.id);
    res.status(200).json({ data: products });
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await fetchProductById(req.params.id);
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const name = req.body.name;
    const data = { name, belongsToId: req.user.id };
    const product = await create(data);
    res.status(201).json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const updateProduct = async (req, res, next) => {
  try {
    const name = req.body.name;
    const product = await update(req.params.id, name, req.user.id);
    res.status(200).json({ data: product });
  } catch (error) {
    next(error);
  }
};

export const deleteProduct = async (req, res, next) => {
  try {
    const deleted = await remove(req.params.id, req.user.id);
    res.status(200).json({ data: deleted });
  } catch (error) {
    next(error);
  }
};
