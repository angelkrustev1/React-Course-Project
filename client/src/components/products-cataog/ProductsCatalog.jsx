import ProductItem from "./product-item/ProductItem";

export default function ProductsCatalog() {
    return (
        <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <ProductItem />
        </div>
    );
}