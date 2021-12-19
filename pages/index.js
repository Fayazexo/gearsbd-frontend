import Head from "next/head";
import React, { Fragment } from "react";
import Hero from "../components/Hero";
import ProductContainer from "../components/ProductContainer";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { getProducts, getCategories } from "../utils/api";

export default function Home({ products, categories }) {
  return (
    <Fragment>
      <Head>
        <title>Gearsbd.com</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero categories={categories} />
      <ProductContainer products={products} type="All" />
      <CTA />
      <Footer />
    </Fragment>
  );
}

export async function getServerSideProps() {
  const products = await getProducts();
  const categories = await getCategories();
  return { props: { products, categories } };
}
