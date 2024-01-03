import Link from "next/link";

export default function Topo() {
    return (
        //horizontal    //vertical
        <div className="flex flex-col justify-between items-center bg-zinc-300 h-[132px] p-8">
            <div>Logo</div>
            {/*vertical     horizontal*/}
            <div className="flex flex-col justify-between items-center">
                <div className=" text-base">Curso</div>
                <div className="subtituloTopo">Novo curso de React</div>
            </div>
            {/* MENU */}
            <nav>
                <Link href={"/"}>
                    Home
                </Link>
                <Link href={"/produtos/produtos"}>
                    Produtos
                </Link>
                <Link href={"/teste/teste"}>
                    Teste
                </Link>
            </nav>


        </div>

    )
}