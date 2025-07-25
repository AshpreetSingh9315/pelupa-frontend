import Cart from "../components/Cart";
import Category from "../components/Category";
import EmblaCarousel from "../components/EmblaCarousel";
import ProductCards from "../components/ProductCards";
 

export default function Home({ products = [] }) {
  console.log(products);

  const slides = [
    "/banners/1d.webp",
    "/banners/2d.webp",
    "/banners/3d.webp",
    "/banners/4d.webp",
  ];

  const mobileSlides = [
    "/mobile_banner/1.png",
    "/mobile_banner/2.png",
    "/mobile_banner/3.png",
    "/mobile_banner/4.png",
    "/mobile_banner/5.png",
    "/mobile_banner/6.png",
    "/mobile_banner/7.png",
    "/mobile_banner/8.png",
    "/mobile_banner/9.png",
  ];

  const OPTIONS = { containScroll: false };

  return (
    <>
      <div className="relative">
        <div className="mx-auto lg:block md:block sm:hidden hidden">
          <EmblaCarousel slides={slides} options={OPTIONS} />
        </div>
        <div className="mx-auto lg:hidden md:hidden sm:block block">
          <EmblaCarousel slides={mobileSlides} options={OPTIONS} />
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
