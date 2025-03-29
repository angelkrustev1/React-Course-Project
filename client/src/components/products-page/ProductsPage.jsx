import ProductsCatalog from "../products-cataog/ProductsCatalog";
import Search from "../search/Search";

export default function ProductsPage() {
    return (
        <section className="bg-gray-300 py-16">
            <div className="container mx-auto px-6">
                {/* Search Section */}
                <div className="mb-12">
                    <Search />
                </div>

                {/* Products Catalog Section */}
                <div className="mt-8">
                    <ProductsCatalog />
                </div>
            </div>
        </section>
    );
}
