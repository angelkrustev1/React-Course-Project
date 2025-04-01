import { Route, Routes } from 'react-router'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Logout from './components/logout/Logout'
import Footer from './components/footer/Footer'
import ProductsPage from './components/products-page/ProductsPage'
import ProductCreate from './components/product-create/ProductCreate'
import ProductDetails from './components/product-details/ProductDetails'
import ProductEdit from './components/product-edit/ProductEdit'
import NotFound from './components/not-found/NotFound'
import Profile from './components/profile/Profile'
import UserProvider from './providers/UserProvider'
import './App.css'

function App() {
    return (
        <UserProvider>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/profile' element={<Profile />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/add' element={<ProductCreate />} />
                <Route path='/products/:productId/edit' element={<ProductEdit />} />
                <Route path='/products/:productId/details' element={<ProductDetails />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <Footer />
        </UserProvider>
    )
}

export default App
