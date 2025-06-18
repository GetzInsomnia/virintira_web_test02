import BorderRevealButton from '@/components/BorderRevealButton'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'

export const metadata: Metadata = {
  title: 'ไม่พบหน้าที่คุณต้องการ | VIRINTIRA',
  description: 'ขออภัย ไม่พบหน้าเว็บที่คุณพยายามเข้าถึง',
}

export default async function NotFound() {
  const t = await getTranslations('notFound')
  return (
    <div className="relative min-h-[100dvh] flex items-center justify-center text-center px-6 bg-white">
      <div className="max-w-xl flex flex-col items-center">
        <div className="text-[80px] sm:text-[100px] leading-none mb-6">😢</div>
        <h1 className="text-2xl sm:text-3xl font-bold text-[#A70909] mb-4 leading-relaxed">
          {t('title')}
        </h1>
        <p className="text-black text-lg sm:text-xl mb-10 leading-relaxed">
          {t('description')}
        </p>
        <BorderRevealButton href="/" className="text-xs py-1 px-3">
          {t('back')}
        </BorderRevealButton>
      </div>
    </div>
  )
}
