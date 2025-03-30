import Header from '@/components/Header/Header'
import Link from 'next/link'
 
export default function NotFound({innerpage}: {innerpage: boolean}) {
  return (
    <>
        {innerpage ? null : <Header />}
        <main>
            <h1 className='font-grotesk text-8xl text-center mt-6'>Page not found</h1>
            <div className='w-full flex justify-center mt-4'>
                <Link href='/' className='uppercase'>
                    back to home
                </Link>
            </div>
        </main>
    </>
  )
}