import Head from "next/head";
import { useRouter } from "next/router";
import ProductContainer from "../../components/ProductContainer";
import { getCategories, getCategory } from "../../utils/api";
import Hero from "../../components/Hero";
import CTA from "../../components/CTA";
import Footer from "../../components/Footer";

const CategoryPage = ({ category, categories }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading category...</div>;
  }

  return (
    <div>
      <Head>
        <title>All {category.name} products</title>
      </Head>

      <Hero categories={categories} type={category.name} />

      <ProductContainer products={category.products} type={category.name} />

      <CTA />
      <Footer />
    </div>
  );
};

export default CategoryPage;

export async function getServerSideProps({ params }) {
  const category = await getCategory(params.slug);
  const categories = await getCategories();
  return { props: { category, categories } };
}
