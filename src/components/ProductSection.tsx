import { HStack } from "@chakra-ui/react";
import ProductCard from "./ProductCard";
import Section from "./Section";
import useProducts from "../hooks/useProducts";

const ProductSection = () => {
  const { data: products } = useProducts();
  const slicedProducts = products?.slice(0, 5);

  return (
    <Section header="Popular" link="/products">
      <HStack spacing={2} overflowX="auto" py={2}>
        {slicedProducts?.map((product) => (
          <ProductCard
            product_id={product.product_id}
            image_url={
              "http://localhost/shoeskopo/image.php?url=" + product.image_url
            }
            key={product.product_id}
            brand={product.brand}
            category={product.category}
            name={product.name}
            price={product.price}
            minW="210px"
          />
        ))}
      </HStack>
    </Section>
  );
};

export default ProductSection;
