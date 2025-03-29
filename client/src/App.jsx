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
import { useState } from 'react'
import { UserContext } from './contexts/UserContext'
import './App.css'

function App() {
    const [user, setUser] = useState({})

    const userLoginHandler = (authData) => setUser(authData)
    const userLogoutHandler = () => setUser({})

    return (
        <UserContext.Provider value={{ ...user, userLoginHandler, userLogoutHandler }}>
            <Header />

            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/logout' element={<Logout />} />
                <Route path='/products' element={<ProductsPage />} />
                <Route path='/products/add' element={<ProductCreate />} />
                <Route path='/products/edit' element={<ProductEdit />} />
                <Route path='/products/details' element={<ProductDetails />} />
            </Routes>

            <Footer />
        </UserContext.Provider>
    )
}

export default App
