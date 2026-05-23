"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavigationProps {
  activeTab: string
  setActiveTab: (tab: string) => void
}

const navItems = [
  { id: "home", label: "首页" },
  { id: "about", label: "关于我" },
  { id: "projects", label: "我的项目" },
  { id: "contact", label: "联系我" },
]

export function Navigation({ activeTab, setActiveTab }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="font-mono font-bold text-xl tracking-tight">
              {"<AI编导/>"}
            </span>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  "px-4 py-2 font-bold text-sm uppercase tracking-wide transition-all",
                  "border-3 border-foreground",
                  activeTab === item.id
                    ? "bg-[var(--brutal-yellow)] shadow-[4px_4px_0px_0px_var(--foreground)] -translate-x-0.5 -translate-y-0.5"
                    : "bg-background hover:bg-[var(--brutal-lime)] hover:shadow-[4px_4px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 border-3 border-foreground bg-background"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "关闭菜单" : "打开菜单"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t-4 border-foreground bg-background">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleTabClick(item.id)}
                className={cn(
                  "w-full px-4 py-3 font-bold text-sm uppercase tracking-wide transition-all text-left",
                  "border-3 border-foreground",
                  activeTab === item.id
                    ? "bg-[var(--brutal-yellow)] shadow-[4px_4px_0px_0px_var(--foreground)]"
                    : "bg-background hover:bg-[var(--brutal-lime)]"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
