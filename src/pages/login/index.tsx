import { Link } from "react-router-dom"
import Logo from "../../assets/logo-white.svg"
import Footer from "../../components/footer"


const Login = () => {
    return (
        <div>
            <header className="bg-colorPrimary flex items-center justify-center p-2">
                <Link to="/"><img src={Logo} className="h-12"/></Link>
            </header>
        
            <div className="flex justify-center items-center h-screen">
                <form className="bg-colorGray p-4 flex flex-col justify-center rounded-lg shadow-lg gap-8 w-1/3">
                    <h2 className="font-extrabold text-xl">Login</h2>
                    
                    <p className="text-sm">Digite seus dados de acesso no campo abaixo.</p>
                    
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col">
                            <label htmlFor="email">E-mail</label>
                            <input type="email" id="email" className="bg-colorSecondary rounded-md p-2" placeholder="Digite seu e-mail"/>
                        </div>

                        <div className="flex flex-col">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" id="senha" className="bg-colorSecondary rounded-md p-2" placeholder="Digite sua senha"/>
                            <a className="text-xs mt-2 underline cursor-pointer">Equeci a senha</a>
                        </div>
                    </div>

                    <button className="bg-colorPrimary rounded-md text-colorSecondary p-2 hover:bg-opacity-90">Entrar</button>

                    <a className="text-sm text-center cursor-pointer">Criar conta</a>
                </form>
            </div>

            <Footer />
        </div>
    )
}

export default Login