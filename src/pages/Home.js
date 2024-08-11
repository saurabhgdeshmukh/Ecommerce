
import NavBar from '../features/navbar/Navbar'
import ProductList from "../features/product/components/ProductList";
function Home() {
  return (
    <div>
        <NavBar>
        </NavBar>
            <ProductList></ProductList>
    </div>
  )
}

export default Home