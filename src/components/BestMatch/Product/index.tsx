import productMobile from "assets/product-mobile.jpeg";
import productTablet from "assets/product-tablet.jpeg";
import productDesktop from "assets/product-desktop.jpeg";
import tailwindConfig from "tailwindConfig";

type CustomScreens = {
  [Property in keyof "sm" | "md" | "lg" | "xl" | "2xl"]: string;
};

function Product() {
  const { md, xl } = tailwindConfig.theme?.screens as CustomScreens;
  return (
    <div className="py-7 text-center xl:flex-shrink-0 xl:py-6 xl:px-8">
      <h3 className="mb-2 font-condensed text-4lg uppercase leading-7 tracking-4 text-green-200">
        Best Match
      </h3>
      <picture>
        <source media={`(min-width:${xl})`} srcSet={productDesktop} />
        <source media={`(min-width:${md})`} srcSet={productTablet} />
        <img className="mx-auto mb-5" src={productMobile} alt="Product" />
      </picture>
      <h4 className="mb-4 font-condensed text-2lg uppercase leading-6 tracking-4">
        Guatemala Coffee
      </h4>
      <strong className="mb-2 font-condensed text-[1.125rem] leading-4 tracking-4">
        $20.50
      </strong>
    </div>
  );
}

export default Product;
