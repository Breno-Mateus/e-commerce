import BoxProduct from "../../../components/box-product"
import Footer from "../../../components/footer"
import Header from "../../../components/header"
import MenuNav from "../../../components/menu-nav"

const EqupamentosAudio = () => {
    return (
        <div className="">
            <Header />
            <MenuNav />
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

export default EqupamentosAudio