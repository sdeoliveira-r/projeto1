// import Image from 'next/image'
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

import Topo from "@/components/Topo"
import Card from "@/components/Card"

const nome = 'Rafael Oliveira'
let canal = 'Developer'

const calcDesc = (v: number, d: number) => {
  return v - d;
}

const calcDesc2 = (v: number, d: number) => {
  return v - (d / 2);
}

export default function Home() {
  return (
    <div>
      <Topo />
      <div style={testecss}>
        <div>Curso NextJs</div>
        <div>Typescript</div>
        <div style={{ color: "#f00", backgroundColor: "#bbb" }}>React</div>
      </div>
      <div className="grid grid-cols-4 justify-center gap-3 mx-2">
        <Card produto={'Status Info Card'} valor={18.90} desconto={0.5} funcao={calcDesc} />
        <Card produto={'Status Info Card'} valor={78.50} desconto={0} funcao={calcDesc} />
        <Card produto={'Status Info Card'} valor={158.90} desconto={2.5} funcao={calcDesc} />
        <Card produto={'Status Info Card'} valor={457.80} desconto={0} funcao={calcDesc} />
        <Card produto={'Status Info Card'} valor={128.40} desconto={5.5} funcao={calcDesc2} />
        <Card produto={'Status Info Card'} valor={569.30} desconto={0} funcao={calcDesc2} />
        <Card produto={'Status Info Card'} valor={10.90} desconto={1.5} funcao={calcDesc2} />
        <Card produto={'Status Info Card'} valor={35.90} desconto={0} funcao={calcDesc2} />


      </div>
    </div>
  )
}

const testecss = {
  display: 'flex',
  justifyContent: 'center',
  alignItens: 'center',
  color: '#00f',
  backgroundColor: '#eee',
  fontSize: '20px'
}
