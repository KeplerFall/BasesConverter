import Calculator from '@/components/Calculator'
import Image from 'next/image'

export default function Home() {


  return (
    <main className={`bg-white h-[100vh] flex justify-center items-center`}>
      <Calculator />
    </main>
  )
}
