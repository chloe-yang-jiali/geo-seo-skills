# geo-seo-skills

Chloe 关于 SEO/GEO 的 AI Skills 合集。在这里分享我自己在用的、经过实践打磨过的一些 Skills。

## Skills

| Skill | 说明 | 讲解文章 |
|-------------|---|-----------------------|
| SEO/GEO Topic Map Generator | 独创"Who × Do What × Where × How × Why"框架法，从「场景/任务」出发，构建 AI 搜索时代的话题框架 | [AI 搜索时代，SEO/GEO Topic Map 怎么规划](https://mp.weixin.qq.com/s/ZFCVCk972eMluEKSfbMVLw) |

## 安装方式

### 方式一：通过 npm/yarn/npx 安装（推荐）

```bash
# 使用 npm
npm install @chloe-yang-jiali/geo-seo-skills

# 使用 yarn
yarn add @chloe-yang-jiali/geo-seo-skills

# 使用 npx（不需要预先安装，直接运行）
npx @chloe-yang-jiali/geo-seo-skills

# 使用 pnpm
pnpm add @chloe-yang-jiali/geo-seo-skills
```

安装完成后，Skill 会自动安装到 `~/.claude/skills/topic-map-generator/` 目录。

### 方式二：通过 GitHub Releases 安装

在本仓库的 Releases 页面下载对应 Skill 的 .skill 安装包，将 .skill 文件拖动到对应工具的 Skills 目录下。

### 手动安装

直接复制 `topic-map-generator/` 目录到目标工具的 Skills 目录：

| 工具 | 路径 |
|-------------|--------------------------------------|
| Claude Code | `~/.claude/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Codex | `~/.agents/skills/` |

## 卸载方式

```bash
# 卸载 npm 包
npm uninstall @chloe-yang-jiali/geo-seo-skills

# 或使用 yarn
yarn remove @chloe-yang-jiali/geo-seo-skills

# 手动删除技能文件
rm -rf ~/.claude/skills/topic-map-generator
```

## 发布到 npm

```bash
# 登录 npm（如果未登录）
npm login

# 发布包
npm publish

# 发布 beta 版本
npm publish --tag beta
```

## License

MIT
