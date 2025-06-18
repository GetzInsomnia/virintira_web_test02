'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'จดทะเบียนบริษัท',
    slug: 'registration',
    description: 'บริการจดทะเบียนบริษัท และหจก. แบบครบวงจร พร้อมให้คำปรึกษาโดยทีมงานมืออาชีพ',
    image: '/services/registration.png',
  },
  {
    title: 'แก้ไขข้อมูลนิติบุคคล',
    slug: 'edit-info',
    description: 'เปลี่ยนแปลงข้อมูลต่างๆ ของบริษัท',
    image: '/services/edit-info.png',
  },
  {
    title: 'ทำบัญชีรายเดือน',
    slug: 'accounting',
    description: 'ทำบัญชีและยื่นภาษีอย่างถูกต้อง',
    image: '/services/accounting.png',
  },
  {
    title: 'ปิดงบการเงิน',
    slug: 'close-financial',
    description: 'บริการปิดงบโดยผู้สอบบัญชีรับอนุญาต',
    image: '/services/close-financial.png',
  },
  {
    title: 'วางแผนภาษี',
    slug: 'tax',
    description: 'วางแผนภาษีให้ธุรกิจอย่างคุ้มค่า',
    image: '/services/tax.png',
  },
]

export default function PopularServices() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  return (
    <section className="relative min-h-[calc(100vh-var(--header-height))] snap-start px-4 pt-[80px] sm:pt-[80px] lg:pt-25 pb-10 flex items-center justify-center bg-[#FFFEFE]">
      <div className="w-full max-w-7xl mx-auto">
        <h2 className="text-2xl lg:text-4xl font-bold text-center text-[#A70909] mb-10">บริการยอดนิยม</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[340px] sm:auto-rows-[280px] lg:auto-rows-[230px]">
          {services.map((service, index) => {
            const isBlurred = hoverIndex !== null && hoverIndex !== index
            const href = `/under-construction?section=บริการยอดนิยม&item=${encodeURIComponent(service.title)}`

            return (
              <Link href={href} key={index} className="contents">
                <motion.div
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                  className={`relative rounded-xl overflow-hidden bg-white shadow-md group transition-all duration-300
                    ${index === 0
                      ? 'sm:col-span-2 sm:row-span-1 lg:col-span-2 lg:row-span-2'
                      : 'sm:col-span-1 sm:row-span-1 lg:col-span-1 lg:row-span-1'}
                    ${isBlurred ? 'blur-[2px]' : ''}
                  `}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition duration-300"
                    style={{ backgroundImage: `url(${service.image})` }}
                  ></div>

                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-90 px-4 py-3 z-10">
                    <h3 className="text-lg font-semibold text-[#A70909] mb-1 group-hover:translate-y-[-2px] transition duration-300">
                      {service.title}
                    </h3>
                    <p className="text-base text-black/80 leading-relaxed line-clamp-3 group-hover:opacity-100 transition duration-300">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
