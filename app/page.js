import Cart from "./components/Cart";
import Category from "./components/Category";
import EmblaCarousel from "./components/EmblaCarousel";
import ProductCards from "./components/ProductCards";

async function getServerSideProps() {
  const res = await fetch("http://127.0.0.1:8000/api/category");
  const products = await res.json();
  console.log(products);
  return {
    props: { products },
  };
}

export default function Home({ products = [] }) {
  console.log(products);

  const slides = [
    "/banners/1d.webp",
    "/banners/2d.webp",
    "/banners/3d.webp",
    "/banners/4d.webp",
  ];

  return (
    <>
      <div className="relative">
        <div className="mx-auto">
          <EmblaCarousel slides={slides} />
        </div>
        <div>
          <ProductCards title={"Sale is Live"} />
          <Category />
          <ProductCards title={"Top Picks For you"} />
        </div>
      </div>
    </>
  );
}
