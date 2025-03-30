import ProductsCatalog from "../products-cataog/ProductsCatalog";

export default function ProductsPage() {
    return (
        <section className="bg-gray-300 py-1">
            <div className="container mx-auto px-6">
                {/* Products Catalog Section */}
                <div>
                    <ProductsCatalog />
                </div>
            </div>
        </section>
    );
}
