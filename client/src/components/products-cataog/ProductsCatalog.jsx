import { Link } from 'react-router';
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import Spiner from '../spiner/Spiner';
import Search from '../search/Search';
import ProductItem from './product-item/ProductItem';
import { UserContext } from '../../contexts/UserContext';

const productsUrl = 'http://localhost:3030/data/products';

export default function ProductsCatalog({ showSearch = true }) {
    const { accessToken } = useContext(UserContext)
    const { pending, state: products } = useFetch(productsUrl, []);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        if (searchQuery.trim()) {
            setFilteredProducts(
                products.filter((product) =>
                    product.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
            );
        } else {
            setFilteredProducts(products);
        }
    }, [searchQuery, products]);

    return (
        <>
            {showSearch && (
                <div className='mb-12'>
                    <Search onSearch={setSearchQuery} />
                </div>
            )}

            {pending ? (
                <Spiner />
            ) : filteredProducts.length > 0 ? (
                <div className='m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {filteredProducts.map((product) => (
                        <ProductItem key={product._id} {...product} />
                    ))}
                </div>
            ) : (
                <div className='flex justify-center items-center h-64 mb-12'>
                    <div className='flex flex-col justify-center items-center h-64 bg-gray-100 rounded-lg shadow-md p-6'>
                        <svg
                            className='w-16 h-16 text-gray-400 mb-4'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 14l6-6m0 0l-6-6m6 6H3'
                            />
                        </svg>
                        <p className='text-gray-600 text-xl font-semibold'>
                            No products available
                        </p>
                        <p className='text-gray-500 text-sm mt-2'>
                            Check back later or explore other categories.
                        </p>
                        {accessToken &&
                            (
                                <Link
                                    to='/products/add'
                                    className='mt-4 px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition'
                                >
                                    Add a Product
                                </Link>
                            )}
                    </div>
                </div>
            )}
        </>
    );
}
