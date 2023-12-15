import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";

const Product = ({
  img = "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
  onRemoveFromCart,
  title = "example",
  price = "200",
  inStock,
  description = "alfjalsdjflksajflkajslkdfjlkasjlkfjalskdfjaskl;jdfl;ajsl",
  onAddToCart,
}) => {
  return (
    <div>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt={title} src={img} />}
        actions={[
          <Button
            type="primary"
            danger={!inStock}
            onClick={inStock ? onAddToCart : onRemoveFromCart}
          >
            {" "}
            {inStock ? "Add to Cart" : "Out of Stock"}{" "}
          </Button>,
        ]}
      >
        <Meta title={title} description={description} />
        <div>{price}</div>
        <div>inStock:{inStock}</div>
      </Card>
    </div>
  );
};

export default Product;