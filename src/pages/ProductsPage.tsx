import {
  Flex,
  Grid,
  GridItem,
  Heading,
  VStack,
  useBreakpointValue,
} from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import FilterProducts from "../components/FilterProducts";
import FilterDrawer from "../components/FilterDrawer";
import SortByMenu from "../components/SortByMenu";
import useStore from "../store";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import CustomBreadcrumb from "../components/CustomBreadcrumb";

const ProductsPage = () => {
  const genders = useStore((s) => s.genders);
  const brands = useStore((s) => s.brands);
  const { data: products, isLoading } = useProducts({ genders, brands });

  const isMobile = useBreakpointValue({ base: true, lg: false });

  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", link: "/" },
    { label: "Products", link: "/products" },
  ];

  return (
    <Grid
      templateColumns={isMobile ? "repeat(1, 1fr)" : "repeat(5, 1fr)"}
      gap={4}
    >
      {!isMobile && (
        <GridItem>
          <FilterProducts />
        </GridItem>
      )}

      <GridItem colSpan={4} mt={5}>
        <CustomBreadcrumb items={breadcrumbItems} />
        <VStack align="flex-start" spacing={4}>
          <Flex
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            py={2}
          >
            {isMobile ? (
              <FilterDrawer />
            ) : (
              <Heading size={["sm", "lg"]}>
                {brands.length || genders.length ? brands.join(", ") : "All"}{" "}
                Shoes
              </Heading>
            )}
            <SortByMenu />
          </Flex>
          <Grid
            w="100%"
            templateColumns={{
              base: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={{ base: 2, lg: 4 }}
          >
            {!isLoading
              ? products?.map((product) => (
                  <GridItem key={product.product_id} minW="auto">
                    <ProductCard product={product} />
                  </GridItem>
                ))
              : [0, 1, 2, 3, 4, 5].map((item) => (
                  <GridItem key={item} w="100%">
                    <ProductCardSkeleton />
                  </GridItem>
                ))}
          </Grid>
        </VStack>
      </GridItem>
    </Grid>
  );
};

export default ProductsPage;
