import Card from "@/components/Card"
import Topo from "@/components/Topo"

const produtos = [
    {
        produto: 'Mouse',
        valor: 49.9,
        desconto: 0,
        disponivel: true,
    },
    {
        produto: 'Teclado',
        valor: 85.8,
        desconto: 0,
        disponivel: true,
    },
    {
        produto: 'Monitor',
        valor: 455.7,
        desconto: 0,
        disponivel: false,
    },
    {
        produto: 'CPU',
        valor: 730.0,
        desconto: 100.9,
        disponivel: true,
    },
    {
        produto: 'Cx.Som',
        valor: 75.9,
        desconto: 10.5,
        disponivel: true,
    },
    {
        produto: 'WebCam',
        valor: 200.5,
        desconto: 0,
        disponivel: false,
    },
]

const calcDesc = (v: number, d: number) => {
    return v - d;
}

const calcDesc2 = (v: number, d: number) => {
    return v - (d / 2);
}

export default function produtosPagina() {
    return (
        <div>
            <Topo />
            <div className="grid grid-cols-4 justify-center gap-3 mx-2">
                {/* retornando um array de objetos */}
                {
                    produtos.map((e: any) => {
                        if (e.disponivel) {
                            return (
                                <Card
                                    produto={e.produto}
                                    valor={e.valor}
                                    desconto={e.desconto}
                                    funcao={calcDesc}
                                />
                            )
                        }
                    })
                }
            </div>
        </div>

    )
}