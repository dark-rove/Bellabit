"use client"

import { motion } from "framer-motion"

// تم حذف الـ Keyframes الخاصة بالـ Animation لضمان الثبات
const StarMapStyles = `
  .star-map-background {
    background-image: url('/images/star-map-bg.png');
    background-size: cover; /* نجعلها تغطي المساحة بالكامل */
    background-position: center center; /* تثبيت الصورة في المنتصف */
    background-repeat: no-repeat;
    opacity: 0.1; /* الحفاظ على التخفيف لمنع السطوع المفرط */
  }
`

export function AboutSection() {
  return (
    // التعديل 1: فرض الخلفية البيضاء النقية (bg-white)
    <section id="about" className="py-24 bg-white relative overflow-hidden">
        
      <style>{StarMapStyles}</style>

      {/* الخلفية اللي فيها النجوم الحمراء (ثابتة بدون حركة) */}
      <div 
        className="star-map-background absolute inset-0 z-0" 
      />

      {/* المحتوى الأصلي (في z-index أعلى) */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <div className="flex items-center gap-3 mb-6">
            {/* التعديل 2: الأكواد والأقواس باللون الأحمر (Primary) */}
            <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
            <span className="text-sm font-medium text-black tracking-wide">About</span>
          </div>

          {/* التعديل 3: العنوان الرئيسي باللون الأسود النقي */}
          <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight">
            Offensive security specialists based in Sudan
          </h2>

          {/* التعديل 4: النص العادي باللون الرمادي الغامق (أسود هادئ) */}
          <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
            <p>
              Bellabit started in 2019 as a group of security enthusiasts participating in Capture The Flag
              competitions. Over the years, we have grown into a recognized team competing in major international
              events.
            </p>
            <p>
              Our expertise spans binary exploitation, reverse engineering, web application security, cryptography, and
              forensics. We actively share knowledge through writeups and contribute to the security community.
            </p>
            <p>
              Beyond competitions, we offer professional security services including penetration testing, code review,
              and security training for organizations looking to strengthen their security posture.
            </p>
          </div>
        </motion.div>

        {/* سكشن Core Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-16 pt-10 border-t border-gray-300"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
            <span className="text-sm font-medium text-black tracking-wide">Core Expertise</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {/* الأزرار: خلفية بيضاء، حدود حمراء، ونص أحمر */}
            {[
              "Binary Exploitation",
              "Reverse Engineering",
              "Web Security",
              "Cryptography",
              "Forensics",
              "Malware Analysis",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm text-primary bg-white border border-primary/50 rounded-md shadow-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}