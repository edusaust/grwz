"use client"

import { useState } from "react"
import { Mail, Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-20 right-[-120px] w-80 h-80 border-[20px] border-[var(--brutal-yellow)] opacity-30 rotate-12" />
      <div className="absolute bottom-20 left-[-80px] w-64 h-64 border-[20px] border-[var(--brutal-cyan)] opacity-20 -rotate-6" />
      <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-[var(--brutal-pink)] border-2 border-foreground rotate-45" />
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[var(--brutal-lime)] border-2 border-foreground rotate-12" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-[var(--brutal-pink)] border-4 border-foreground px-6 py-3 shadow-[6px_6px_0px_0px_var(--foreground)]">
            联系我
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* 直接联系 */}
          <div className="bg-[var(--brutal-yellow)] border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)] relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-foreground rotate-12" />
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-background border-3 border-foreground p-2 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase">邮箱</h3>
            </div>
            <p className="font-mono text-sm">553689754@qq.com</p>
          </div>

          <div className="bg-background border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)] relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--brutal-cyan)] border-2 border-foreground rotate-45" />
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[var(--brutal-lime)] border-3 border-foreground p-2 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase">电话</h3>
            </div>
            <p className="font-mono text-sm">15245338548</p>
          </div>

          <div className="bg-[var(--brutal-cyan)] border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)] relative">
            <div className="absolute -top-3 -right-3 w-8 h-8 bg-[var(--brutal-pink)] border-2 border-foreground -rotate-12" />
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-background border-3 border-foreground p-2 shadow-[3px_3px_0px_0px_var(--foreground)]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold uppercase">坐标</h3>
            </div>
            <p className="font-mono text-sm">杭州</p>
          </div>
        </div>

        {/* Availability */}
        <div className="mt-8 bg-[var(--brutal-lime)] border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)] relative">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 bg-green-500 border-2 border-foreground rounded-full animate-pulse" />
            <span className="font-bold uppercase">正在看机会</span>
          </div>
          <p className="mt-3 text-sm">
            目前在杭州，接受 AI 编导 / AI 内容创作方向的岗位和项目合作，欢迎聊聊
          </p>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t-4 border-foreground text-center relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-[var(--brutal-yellow)] border-2 border-foreground rotate-45" />
          <p className="font-mono text-sm text-muted-foreground">
            © 2025 王增辉 · 用 AI 和热爱构建
          </p>
        </div>
      </div>
    </section>
  )
}
