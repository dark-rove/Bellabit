"use client"

import { motion } from "framer-motion"

const services = [
  {
    title: "Penetration Testing",
    description:
      "Comprehensive assessment of your applications and infrastructure to identify security weaknesses before attackers do.",
  },
  {
    title: "Code Review",
    description:
      "Manual review of your source code to find vulnerabilities, logic flaws, and security misconfigurations.",
  },
  {
    title: "Red Team Operations",
    description: "Simulated attacks against your organization to test detection and response capabilities.",
  },
  {
    title: "Security Training",
    description: "Hands-on training for your development and security teams based on real-world scenarios.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24">
      {/* التعديل هنا: max-w-7xl عشان المحاذاة */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
            <span className="text-sm font-medium text-muted-foreground tracking-wide">Services</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-xl">
              Professional security services for your organization
            </h2>
            <p className="text-muted-foreground max-w-md">
              Our services are backed by years of CTF competition experience and real-world security research.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 bg-card border border-border rounded-lg hover:border-primary/40 transition-colors"
            >
              <span className="text-sm font-mono text-primary">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold text-primary">{service.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}