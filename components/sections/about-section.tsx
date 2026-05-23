import { Mail, MapPin, Briefcase, Phone } from "lucide-react"

const skills = [
  { name: "AI 全流程创作", level: 92, color: "var(--brutal-yellow)" },
  { name: "短视频编导", level: 95, color: "var(--brutal-lime)" },
  { name: "0-1 起号孵化", level: 90, color: "var(--brutal-cyan)" },
  { name: "AI 动画 / 视觉", level: 85, color: "var(--brutal-pink)" },
  { name: "内容策划 / IP 打造", level: 88, color: "var(--brutal-orange)" },
]

const mainQuests = [
  {
    year: "2021.09-2026.01",
    title: "资深编导 / 创作组长",
    company: "杭州边界文化",
    description: [
      "操盘浙江文旅 / 浙江文旅资讯 / 衢州文旅等官方号运营，打破官号严肃刻板壁垒，用年轻化情绪内容表达互动，15 天涨粉 17.1w，相关话题总阅读量突破 10.1 亿",
      "主导「漫游边界」系列中长视频，深挖地域文脉，打造高传播爆款，助力城市文旅品牌强势破圈。走心共情的短视频到有深度的精品中长视频，长短双线通吃",
      "全权负责省文旅厅「百县千碗」项目，从零搭建全省美食内容体系，用烟火气戳中大众味蕾",
      "水稻品牌号从 0 冷启动起号，靠农人故事狠狠共情",
      "摄影师 IP 从打造到变现一手包办，商单接不停、知识付费高转化",
      "4 人创作小组带队管理，标准化 SOP 落地，爆款批量复刻，内容产出效率提升 30%",
    ],
    type: "main",
  },
  {
    year: "2021.01-2021.09",
    title: "短视频编导",
    company: "天津鑫谷文化传媒",
    description: [
      "知识付费 & 情感书单号双赛道精准拿捏，句句戳中用户情绪痛点，强共鸣拉满直接引爆下单欲，带货转化信手捏来",
    ],
    type: "main",
  },
]

export function AboutSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-40 left-[-80px] w-56 h-56 border-[20px] border-[var(--brutal-lime)] opacity-20 -rotate-12" />
      <div className="absolute bottom-10 right-[-60px] w-40 h-40 border-[16px] border-[var(--brutal-pink)] opacity-25 rotate-6" />
      <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-[var(--brutal-orange)] border-2 border-foreground rotate-45" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-[var(--brutal-yellow)] border-4 border-foreground px-6 py-3 shadow-[6px_6px_0px_0px_var(--foreground)]">
            关于我
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-background border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <div className="space-y-4">
                <div className="w-24 h-24 mx-auto rounded-full border-4 border-foreground bg-[var(--brutal-lime)] flex items-center justify-center overflow-hidden">
                  <span className="text-3xl font-bold">王</span>
                </div>
                <h3 className="text-2xl font-bold text-center">王增辉</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 bg-muted border-2 border-foreground p-2">
                    <Briefcase className="w-4 h-4" />
                    <span className="text-sm">AI 编导 · 5 年短视频经验</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted border-2 border-foreground p-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">杭州</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted border-2 border-foreground p-2">
                    <Phone className="w-4 h-4" />
                    <span className="text-sm">15245338548</span>
                  </div>
                  <div className="flex items-center gap-2 bg-muted border-2 border-foreground p-2">
                    <Mail className="w-4 h-4" />
                    <span className="text-sm">553689754@qq.com</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed border-t-2 border-foreground pt-4">
                  五年短视频老炮，从政务文旅卷到AI编导——没那么玄乎，就是个会写脚本也会用AI的创作者。
                </p>
              </div>
            </div>
          </div>

          {/* Skills & Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <div className="bg-background border-4 border-foreground p-5 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <h3 className="text-base font-bold mb-3 uppercase tracking-wide">技能树</h3>
              <div className="space-y-2">
                {skills.map((skill) => (
                  <div key={skill.name} className="grid grid-cols-[7rem_1fr] items-center gap-3">
                    <span className="font-bold text-sm text-right">{skill.name}</span>
                    <div className="h-3.5 border-2 border-foreground bg-muted">
                      <div
                        className="h-full"
                        style={{
                          width: `${skill.level}%`,
                          backgroundColor: skill.color,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-background border-4 border-foreground p-6 shadow-[8px_8px_0px_0px_var(--foreground)]">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wide">工作经历</h3>
              
              <div className="space-y-6">
                {mainQuests.map((quest, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-foreground pl-4 py-2 hover:bg-muted transition-colors"
                  >
                    <span className="font-mono text-xs bg-foreground text-background px-2 py-1">
                      {quest.year}
                    </span>
                    <h4 className="font-bold mt-2">{quest.title}</h4>
                    <p className="text-sm text-muted-foreground">{quest.company}</p>
                    <ul className="mt-2 space-y-1">
                      {quest.description.map((item, i) => (
                        <li key={i} className="text-sm leading-relaxed flex items-start gap-2">
                          <span className="text-foreground mt-1">·</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
