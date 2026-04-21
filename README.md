# geo-seo-skills

Chloe 关于 SEO/GEO 的 AI Skills 合集。在这里分享我自己在用的、经过实践打磨过的一些 Skills。

## Skills

| Skill | 说明 | 讲解文章 |
|-------------|---|-----------------------|
| [SEO/GEO Topic Map Generator](https://github.com/chloe-yang-jiali/geo-seo-skills/tree/main/topic-map-generator) | 独创"Who × Do What × Where × How × Why"框架法，从「场景/任务」出发，构建 AI 搜索时代的话题框架 | [AI 搜索时代，SEO/GEO Topic Map 怎么规划](https://mp.weixin.qq.com/s/ZFCVCk972eMluEKSfbMVLw) |

## 安装方式

### 一键安装（推荐）

```bash
npx @chloe-yang-jiali/geo-seo-skills
```

这会自动从 GitHub 下载最新版本，无需任何认证。

### 手动安装

直接复制 `topic-map-generator/` 目录到目标工具的 Skills 目录：

| 工具 | 路径 |
|-------------|--------------------------------------|
| Claude Code | `~/.claude/skills/` |
| OpenClaw | `~/.openclaw/skills/` |
| Codex | `~/.agents/skills/` |

## 卸载方式

```bash
# 删除技能文件
rm -rf ~/.claude/skills/topic-map-generator
```

## 发布更新

```bash
# 1. 更新版本号（在 package.json 中修改 version 字段）
# 2. 提交并推送
git add .
git commit -m "描述你的更改"
git push origin main

# 3. 创建 tag
git tag v1.0.2
git push origin v1.0.2

# 4. GitHub Actions 会自动创建 Release
```

## License

MIT
