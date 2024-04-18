import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  return (
    <div>
      <h1>Product Details</h1>
      <p>{productId}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </div>
  );
};

export default ProductDetailPage;
