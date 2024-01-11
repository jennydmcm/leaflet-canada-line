import dynamic from "next/dynamic"
import Image from "next/image";

const DynamicMap = dynamic(() => import('../../components/Map'), { ssr: false });

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          className="icon"
          src="/images/icon.svg"
          width={100}
          height={100}
          alt="icon"
        />
        Skytrain Map
      </div>
      <DynamicMap />
    </main>
  )
}
