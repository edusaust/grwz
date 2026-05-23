import { User } from "lucide-react"
import Image from "next/image"

interface HeroSectionProps {
  setActiveTab?: (tab: string) => void
}

export function HeroSection({ setActiveTab }: HeroSectionProps) {
  return (
    <section className="min-h-[calc(100vh-5rem)] flex items-center relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-10 right-[-60px] w-48 h-48 border-[16px] border-[var(--brutal-yellow)] opacity-25 rotate-12" />
      <div className="absolute bottom-20 left-[-40px] w-36 h-36 border-[16px] border-[var(--brutal-cyan)] opacity-20 -rotate-6" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-[var(--brutal-pink)] border-2 border-foreground rotate-45" />
      <div className="absolute bottom-1/4 left-1/4 w-4 h-4 bg-[var(--brutal-lime)] border-2 border-foreground rotate-12" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Name Tag */}
            <div className="inline-block">
              <div className="bg-[var(--brutal-yellow)] border-4 border-foreground px-6 py-3 shadow-[6px_6px_0px_0px_var(--foreground)]">
                <span className="font-mono text-sm uppercase tracking-widest">你好，我是</span>
              </div>
            </div>
            
            {/* Name */}
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight text-balance">
              王增辉
            </h1>
            
            {/* Title */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-[var(--brutal-lime)] border-3 border-foreground px-4 py-2 font-bold shadow-[4px_4px_0px_0px_var(--foreground)]">
                AI 编导
              </span>
              <span className="bg-[var(--brutal-cyan)] border-3 border-foreground px-4 py-2 font-bold shadow-[4px_4px_0px_0px_var(--foreground)]">
                AI 内容创作者
              </span>
            </div>
            
            {/* Statement */}
            <div className="bg-background border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <p className="text-lg md:text-xl leading-relaxed font-medium">
                5年短视频编导老炮丨只做有情绪、能传播、带转化的内容！深耕主流新媒体平台，网感在线、懂情绪、抓痛点、爆点频出；精精通AI全链路内容创作，深度理解LLM(大语言模型)、AIAgent工作流、RAG检索增强生成、模型微调四大核心能力，懂AI边界；能带团队稳定输出高质量作品，0-1起号孵化、从冷启到变现全流程在线，带队操盘浙江文旅账号运营，15天猛涨17.1w粉丝，相关话题总阅读量突破10.1亿，流量密码狠狠掐住。
              </p>
            </div>
            
            {/* CTA Button */}
            <button
              onClick={() => setActiveTab?.("projects")}
              className="group bg-foreground text-background border-4 border-foreground px-8 py-4 font-bold text-lg uppercase tracking-wide hover:bg-[var(--brutal-pink)] hover:text-foreground transition-colors shadow-[6px_6px_0px_0px_var(--foreground)] hover:shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5"
            >
              查看我的作品 →
            </button>
          </div>
          
          {/* Right - Avatar */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-[var(--brutal-yellow)] border-4 border-foreground" />
              <div className="absolute -top-8 -left-8 w-full h-full bg-[var(--brutal-lime)] border-4 border-foreground" />
              
              {/* Avatar Container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-foreground bg-muted flex items-center justify-center overflow-hidden shadow-[8px_8px_0px_0px_var(--foreground)]">
                <Image
                  src="/avatar.png"
                  alt="头像"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <button
            onClick={() => setActiveTab?.("about")}
            className="animate-bounce bg-[var(--brutal-orange)] border-3 border-foreground p-3 shadow-[4px_4px_0px_0px_var(--foreground)] cursor-pointer hover:bg-[var(--brutal-pink)] transition-colors"
          >
            <span className="font-mono text-sm">↓ 了解我</span>
          </button>
        </div>
      </div>
    </section>
  )
}
