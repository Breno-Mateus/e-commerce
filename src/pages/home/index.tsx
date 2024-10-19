import Header from "../../components/header"
import MenuNav from "../../components/menu-nav"
import CardPromo from "../../components/card-promo"
import BoxProduct from "../../components/box-product"
import Footer from "../../components/footer"

const Home = () => {
    return (
        <div>
            <Header />
            <MenuNav />
            <CardPromo />
            <div className="flex p-24 gap-10 flex-wrap">
                <BoxProduct/>
                <BoxProduct/>
                <BoxProduct/>
                <BoxProduct/>
                <BoxProduct/>
                <BoxProduct/>
            </div>
            <Footer />
        </div>
    )
}

export default Home