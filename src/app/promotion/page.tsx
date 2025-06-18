import PromotionSection from '@/components/PromotionSection'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: 'https://virintira.com/promotion' },
}

export default function PromotionPage() {
  return (
    <main className="bg-[#FFFEFE]">
      <PromotionSection
        imagePosition="right"
        imageSrc="/promotion/promotion-1.png"
        title="พิเศษสำหรับลูกค้าใหม่ 🔥"
        features={[
          'ฟรี! ค่าธรรมเนียมราชการจดบริษัท มูลค่า 5,200 บาท',
          'ฟรี! ค่าคัดหนังสือรับรองชุดใหญ่ มูลค่า 1,100 บาท',
          'ฟรี! บริการแถมต่างๆ รวมมูลค่ากว่า 7,900 บาท',
        ]}
      />

      <PromotionSection
        imagePosition="left"
        imageSrc="/promotion/promotion-2.png"
        title="พิเศษสำหรับลูกค้าบัญชี 💡"
        features={[
          'ฟรี! บริการบันทึกบัญชี มูลค่ากว่า 3,500 บาท',
          'ฟรี! บริการที่ปรึกษาธุรกิจไม่จำกัดจำนวนครั้ง',
          'ฟรี! บริการวางแผนภาษีที่เหมาะกับธุรกิจของคุณโดยเฉพาะ',
        ]}
      />

    </main>
  )
}
