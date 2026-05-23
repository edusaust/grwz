import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "浙江文旅破圈运营",
    category: "政务文旅",
    year: "2021-2026",
    color: "var(--brutal-yellow)",
    description: "操盘浙江文旅官方号矩阵，15 天涨粉 17.1w，话题阅读量 10.1 亿。用年轻化情绪内容打破官号严肃刻板壁垒，让官方账号也能亲和力拉满。",
    tags: ["政务文旅", "涨粉17w+", "话题10亿+"],
    links: [
      { name: "浙江文旅资讯", url: "https://www.douyin.com/user/MS4wLjABAAAAo6vovYHdqb44iU9uQwX6f0rv2OpwQbl13mZ6zVtLu40?from_tab_name=main" },
      { name: "衢州文旅", url: "https://www.douyin.com/user/MS4wLjABAAAArOAWWCr7HSokpagobcm_fbDS7ExYF3OOXr-sU5-UVoA?from_tab_name=main" },
      { name: "浙江文旅", url: "https://www.douyin.com/user/MS4wLjABAAAAAkNF6JQwFSg6XZH9si6KIVk-vrtTw2RIUKJbjAEKOrw?from_tab_name=main" },
    ],
  },
  {
    id: 2,
    title: "「漫游边界」城市人文纪录片",
    category: "城市人文",
    year: "2025-2026",
    color: "var(--brutal-lime)",
    description: "主导系列中长视频创作，深挖地域文脉，打造高传播爆款。走心共情的短视频到有深度的精品中长视频，长短双线通吃。",
    tags: ["纪录片", "城市人文", "深度内容"],
    links: [
      { name: "漫游边界", url: "https://www.douyin.com/user/MS4wLjABAAAAISsUSSFYIw0AInz7CMKN7Loxep3kqc5CiuA2Z560Fko?from_tab_name=main" },
    ],
  },
  {
    id: 3,
    title: "「百县千碗」美食内容体系",
    category: "美食内容",
    year: "2021-2025",
    color: "var(--brutal-cyan)",
    description: "全权负责省文旅厅项目，从零搭建全省美食内容体系，用烟火气戳中大众味蕾。",
    tags: ["美食叙事", "政务项目", "0-1搭建"],
    links: [],
  },
  {
    id: 4,
    title: "IP 孵化项目合集",
    category: "IP孵化",
    year: "2021-2024",
    color: "var(--brutal-pink)",
    description: "水稻品牌号 0-1 冷启动起号，靠农人故事狠狠共情；摄影师 IP 从打造到变现一手包办，商单接不停、知识付费高转化。",
    tags: ["起号", "IP打造", "商业变现"],
    links: [
      { name: "快门先生", url: "https://www.douyin.com/user/MS4wLjABAAAAY1K4icyNC8CPn4IhIVDtkgJO9e1t4YiIdto300Mw4rY?from_tab_name=main" },
    ],
  },
  {
    id: 5,
    title: "AI 全链路内容创作实验",
    category: "AI探索",
    year: "2026",
    color: "var(--brutal-yellow)",
    description: "熟练运用主流 AIGC 工具：MJ、nanobanana、IMage2、seedance2.0、VEO3.1、主流LLM，深耕 AI 内容制作，持续探索 AI + 内容的创作边界。",
    tags: ["AIGC", "工具链", "SOP"],
    links: [
      { name: "作品集", url: "https://pan.baidu.com/s/157dtjAI3WiNmTYauykKU6Q" },
      { name: "提取码: bcx8", url: "https://pan.baidu.com/s/157dtjAI3WiNmTYauykKU6Q" },
    ],
  },
]

export function ProjectsSection() {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-10 right-[-100px] w-72 h-72 border-[24px] border-[var(--brutal-orange)] opacity-15 rotate-12" />
      <div className="absolute bottom-40 left-[-60px] w-48 h-48 border-[16px] border-[var(--brutal-cyan)] opacity-20 -rotate-6" />
      <div className="absolute top-1/3 left-1/3 w-5 h-5 bg-[var(--brutal-yellow)] border-2 border-foreground rotate-45" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="inline-block text-4xl md:text-5xl font-bold bg-[var(--brutal-lime)] border-4 border-foreground px-6 py-3 shadow-[6px_6px_0px_0px_var(--foreground)]">
            项目作品
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            从政务文旅破圈到 AI 内容前沿探索，用作品说话
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-background border-4 border-foreground shadow-[6px_6px_0px_0px_var(--foreground)] hover:shadow-[8px_8px_0px_0px_var(--foreground)] hover:-translate-x-0.5 hover:-translate-y-0.5 transition-all cursor-pointer"
            >
              {/* Card Header */}
              <div
                className="p-4 border-b-4 border-foreground"
                style={{ backgroundColor: project.color }}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-xs bg-foreground text-background px-2 py-1">
                    {project.year}
                  </span>
                  <span className="font-bold text-sm uppercase">{project.category}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold leading-tight">{project.title}</h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono bg-muted border-2 border-foreground px-2 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links (可跳转账号标签) */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t-2 border-foreground">
                    {project.links.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono bg-muted border-2 border-foreground px-2 py-1 hover:bg-[var(--brutal-lime)] transition-colors"
                      >
                        {link.name}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
