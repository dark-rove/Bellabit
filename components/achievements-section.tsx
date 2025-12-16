"use client"

import { motion } from "framer-motion"

const achievements = [
  { event: "DEF CON CTF", result: "Finalist", year: "2024" },
  { event: "Google CTF", result: "Top 20", year: "2024" },
  { event: "Hack The Box Business CTF", result: "3rd Place", year: "2024" },
  { event: "PlaidCTF", result: "Top 15", year: "2023" },
  { event: "0CTF/TCTF", result: "Top 25", year: "2023" },
  { event: "HITCON CTF", result: "Top 30", year: "2023" },
]

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-24 bg-card">
      {/* التعديل هنا: max-w-7xl عشان المحاذاة */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Track Record</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-xl mb-12">
            Competition results
          </h2>
        </motion.div>

        <div className="border border-border rounded-lg overflow-hidden">
          {achievements.map((item, index) => (
            <motion.div
              key={`${item.event}-${item.year}`}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`flex items-center justify-between p-5 ${
                index !== achievements.length - 1 ? "border-b border-border" : ""
              } hover:bg-background transition-colors`}
            >
              <div className="flex items-center gap-6">
                <span className="text-sm font-mono text-primary w-12">{item.year}</span>
                <span className="font-medium text-foreground">{item.event}</span>
              </div>
              <span className="text-sm text-primary font-medium">{item.result}</span>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-sm text-muted-foreground"
        >
          Full competition history available on{" "}
          <a
            href="https://ctftime.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            CTFtime
          </a>
        </motion.p>
      </div>
    </section>
  )
}