
import Image from 'next/image'

export default function AuthLayout({ children }: {children: React.ReactNode}) {

  return (
    <div className='grid lg:grid-cols-2 h-full items-center justify-center'>
        <div className='flex items-center justify-center h-full'>{children}</div>
        <div className='hidden h-full lg:flex items-center justify-center lg:shadow-2xl lg:bg-slate-300 lg:flex-col'>
            <Image src='/moshidev-logo.png' width={150} height={150} alt='Mochi logo'/>
            <h1 className='font-bold text-4xl'>
                Mochi<span className='text-blue-800'>Cars</span>
            </h1>
        </div>
    </div>
  )
}
