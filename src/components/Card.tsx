interface CardProps {
    produto: string,
    valor: number,
    desconto: number,
    funcao: any,
}

export default function Card(props: CardProps) {
    return (
        //renderização condicional ternária
        <div className={`flex justify-center flex-col border-4 ${props.desconto > 0 ? 'border-red-300' : 'border-blue-300'} rounded-md bg-teal-100 px-8 py-5 my-1 text-start`}>
            <div className="">Produto - {props.produto}</div>
            <div>De R$ {props.valor}</div>

            {/* renderização condicional */}
            {props.desconto > 0 && (
                <div>
                    <div>Desconto R$ {props.desconto}</div>
                    <div>Por R${props.funcao(props.valor, props.desconto)}</div>
                </div>
            )}
        </div>
    )
}