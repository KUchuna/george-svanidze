import Image from "next/image"

export default function Cardinal() {
    return (
        <main className="flex flex-col p-2 gap-3">
            <Image src='/pictures/projects/cardinal/1.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>
            <div className="flex gap-3 w-full">
                <Image src='/pictures/projects/cardinal/2.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
                <Image src='/pictures/projects/cardinal/3.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
            </div>
            <Image src='/pictures/projects/cardinal/4.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>
            <div className="flex gap-3 w-full">
                <Image src='/pictures/projects/cardinal/5.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
                <Image src='/pictures/projects/cardinal/6.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
                <Image src='/pictures/projects/cardinal/7.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
            </div>
            <Image src='/pictures/projects/cardinal/8.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>
            <Image src='/pictures/projects/cardinal/9.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>
            <div className="flex gap-3 w-full">
                <Image src='/pictures/projects/cardinal/10.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
                <Image src='/pictures/projects/cardinal/11.png' alt="" width={100} height={100} className="flex-1 basis-0 h-full" unoptimized/>
            </div>
            <Image src='/pictures/projects/cardinal/12.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>
            <Image src='/pictures/projects/cardinal/13.png' alt="" width={100} height={100} className="w-full h-full" unoptimized/>

        </main>
    )
}