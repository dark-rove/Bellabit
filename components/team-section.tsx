"use client"

import { motion } from "framer-motion"
import { Github, Twitter, Linkedin } from "lucide-react"

const teamMembers = [
  {
    name: "Member Name",
    role: "Team Leader / Pwn",
    bio: "Specializes in binary exploitation and kernel hacking.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Member Name",
    role: "Web Security",
    bio: "Bug bounty hunter and web application security researcher.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Member Name",
    role: "Reverse Engineering",
    bio: "Malware analyst and reverse engineering enthusiast.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Member Name",
    role: "Cryptography",
    bio: "Mathematics wizard and crypto challenge solver.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Member Name",
    role: "Digital Forensics",
    bio: "Expert in analyzing digital evidence and recovering data.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Member Name",
    role: "Red Teaming",
    bio: "Simulating adversary attacks and physical security assessments.",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
]

export function TeamSection() {
  return (
    <section id="team" className="py-24">
      {/* التعديل هنا: max-w-7xl عشان المحاذاة */}
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="text-primary font-mono text-sm">bellabit@root:~$</span>
            <span className="text-sm font-medium text-muted-foreground tracking-wide">The Crew</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight max-w-xl">
            Meet the minds behind Bellabit
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 border border-border bg-card hover:border-primary/50 transition-colors"
            >
              <div className="absolute top-0 right-0 p-3 opacity-20 group-hover:opacity-100 transition-opacity">
                <div className="w-2 h-2 bg-primary"></div>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-mono text-primary mt-1">{member.role}</p>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6 h-12 md:h-16 overflow-hidden">
                {member.bio}
              </p>

              <div className="flex gap-4 pt-4 border-t border-border/50">
                {Object.entries(member.socials).map(([platform, link]) => (
                  <a
                    key={platform}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {platform === 'github' && <Github className="w-4 h-4" />}
                    {platform === 'twitter' && <Twitter className="w-4 h-4" />}
                    {platform === 'linkedin' && <Linkedin className="w-4 h-4" />}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}