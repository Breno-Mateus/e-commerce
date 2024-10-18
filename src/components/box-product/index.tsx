import Product from "../../assets/product1.png"

const BoxProduct = () => {
    return (
        <div className="bg-colorGray flex justify-around flex-col h-96 w-80 gap-4 rounded-lg shadow-xl">
            <div className="h-1/2 p-6">
                <img src={Product} className=""/>
            </div>

            <div className="p-6">
                <p className="font-bold">Notebook Asus</p>
                <p>R$ 1.699,99</p>
            </div>
        </div>
    )
}

export default BoxProduct