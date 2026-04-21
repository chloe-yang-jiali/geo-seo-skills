# geo-seo-skills

Chloe 关于 SEO/GEO 的 AI Skills 合集。在这里分享我自己在用的、经过实践打磨过的一些 Skills。

## Skills

| Skill | 说明 | 讲解文章 |
|-------------|---|-----------------------|
| [SEO/GEO Topic Map Generator](https://github.com/chloe-yang-jiali/geo-seo-skills/tree/main/topic-map-generator) | 独创"Who × Do What × Where × How × Why"框架法，从「场景/任务」出发，构建 AI 搜索时代的话题框架 | [AI 搜索时代，SEO/GEO Topic Map 怎么规划](https://mp.weixin.qq.com/s/ZFCVCk972eMluEKSfbMVLw) |

## 安装方式

### 方式一：通过 npm 安装（推荐）

```bash
npm install -g @chloe-yang-jiali/geo-seo-skills
```

安装完成后，运行安装脚本：
```bash
install-geo-seo-skill
```

### 方式二：通过 GitHub Releases 安装

直接运行安装命令（自动从最新 Release 下载）：

```bash
npx @chloe-yang-jiali/geo-seo-skills
```

### 方式三：手动安装

直接复制 `topic-map-generator/` 目录到目标工具的 Skills 目录：

| 工具 | 路径 |
|-------------|--------------------------------------|
| Claude Code | `~/.claude/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Codex | `~/.agents/skills/` |

## 卸载方式

```bash
# 卸载 npm 包
npm uninstall -g @chloe-yang-jiali/geo-seo-skills

# 手动删除技能文件
rm -rf ~/.claude/skills/topic-map-generator
```

## 发布到 GitHub Releases

```bash
# 1. 创建 tag
git tag v1.0.0
git push origin v1.0.0

# 2. GitHub Actions 会自动创建 Release 并打包上传
```

## License

MIT
