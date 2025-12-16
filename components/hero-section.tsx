"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Earth3D } from "@/components/earth-3d"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center pt-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 w-full h-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center h-full">
          
          {/* النص (شمال) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl z-10 py-12"
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
              <span className="text-sm font-medium text-muted-foreground tracking-wide">Security Research & CTF</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight">
              We find vulnerabilities
              <br />
              <span className="text-muted-foreground">before they do</span>
            </h1>

            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              Bellabit is a Sudanese offensive security team. We compete in CTF competitions worldwide and provide
              professional penetration testing and security assessment services
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/#services"
                className="px-7 py-3 text-sm font-medium text-primary-foreground bg-primary rounded-md hover:bg-primary/90 transition-colors"
              >
                View Services
              </Link>
              <Link
                href="/#about"
                className="px-7 py-3 text-sm font-medium text-foreground bg-transparent border border-border rounded-md hover:bg-muted transition-colors"
              >
                About Us
              </Link>
            </div>
          </motion.div>

          {/* الكرة الأرضية (يمين) */}
          <motion.div
             initial={{ opacity: 0, x: 400 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ 
               duration: 1.5, 
               ease: "easeOut", 
               delay: 0.2 
             }}
             className="hidden lg:flex w-full justify-end items-center relative"
          >
              <div className="mr-0 xl:-mr-20 flex flex-col items-center relative cursor-pointer"> 
                <Earth3D />
              </div>
          </motion.div>

        </div>

        {/* الإحصائيات */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 pt-10 border-t border-border"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              {/* 🔥 التعديل هنا: خلينا اللون أحمر */}
              <div className="text-2xl font-bold text-[#FF0033]">2019</div>
              <div className="mt-1 text-sm text-muted-foreground">Founded</div>
            </div>
            <div>
              {/* 🔥 وهنا كمان */}
              <div className="text-2xl font-bold text-[#FF0033]">50+</div>
              <div className="mt-1 text-sm text-muted-foreground">CTF Competitions</div>
            </div>
            <div>
              {/* 🔥 وهنا */}
              <div className="text-2xl font-bold text-[#FF0033]">Top 100</div>
              <div className="mt-1 text-sm text-muted-foreground">CTFtime Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}