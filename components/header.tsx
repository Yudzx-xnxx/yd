import Image from "next/image"
import Link from "next/link"

export function Header() {
  return (
    <header className="bg-black py-6 portrait:block landscape:hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-yellow-400 text-xl font-semibold">
            AwangXoffc ID
          </h1>

          <Link 
            href="https://produk.awangoffc.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <Image
              src="https://files.catbox.moe/1q5j3y.png"
              width={26}
              height={26}
              alt="Store Icon"
              className="w-6 h-6 object-contain opacity-90 hover:opacity-100 transition"
            />
            <span className="sr-only">Store</span>
          </Link>

        </div>
      </div>
    </header>
  )
}
