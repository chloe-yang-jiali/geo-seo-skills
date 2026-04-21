# Topic Map Generation (SEO/GEO)

## 方法论来源

本 Skill 基于「AI 搜索时代 SEO/GEO Topic Map 规划」框架（半颗糖自习室 Chloe），核心原则：

> **Topic Map 要从「场景/任务」出发，而不是从「关键词」出发。**
>
> `Topic Map = Who × Do What × Where × How × Why`

---

## How to Use This Skill

### 输入变量

| 变量 | 是否必填 | 说明 | 示例 |
|------|---------|------|------|
| `{BRAND}` | ✅ 必填 | 品牌/产品名称 | `AllyHub` |
| `{BRAND_INFO}` | ✅ 必填 | 品牌知识库：官网 URL / MD 文件 / 产品描述文字 | `https://allyhub.com` 或粘贴产品介绍 |
| `{PRIMARY_ICP}` | ⬜ 选填 | 优先服务的用户群 | `Marketer` |
| `{COMPETITOR_URLS}` | ⬜ 选填 | 1-3 个主要竞品网站 URL | `https://zapier.com` |
| `{EXISTING_CONTENT}` | ⬜ 选填 | 已有内容列表（用于去重） | 粘贴已有文章标题列表 |
| `{CONTENT_GOAL}` | ⬜ 选填 | 内容目标侧重 | `SEO流量` / `GEO曝光` / `品牌认知` / `转化` / 默认均衡 |
| `{TOPIC_COUNT}` | ⬜ 选填 | 期望输出的执行队列话题数 | `20`（默认） |

### 触发方式

当用户说「为 `{BRAND}` 生成 Topic Map」或「帮我规划内容话题地图」时，激活本 Skill，按以下 Phase 顺序执行。

---

## Phase 0：加载品牌信息（必须最先执行）

**本 Phase 是整个 Topic Map 质量的基础，不可跳过。**

### 0.1 读取品牌知识库

根据 `{BRAND_INFO}` 的格式：
- **URL**：导航到官网，截图 + 提取核心页面内容（首页、功能页、About 页）
- **文件**：读取文件内容
- **文字描述**：直接使用

### 0.2 提取以下字段

| 字段 | 提取内容 |
|------|---------|
| **品牌名称** | 正式产品名，用于文章中的品牌提及 |
| **官网 URL** | 用于 CTA 链接 |
| **核心功能列表** | 产品能做的事（5-10 个，具体而非营销语言） |
| **目标用户群** | 产品面向的用户类型（尽量细化到角色） |
| **差异化优势** | 与竞品相比，真正独特的地方（Why） |
| **典型使用场景** | 用户在什么情况下用这个产品 |
| **定价模式** | 免费 / Freemium / 付费订阅 / 按量计费 |
| **品牌语气** | 产品的沟通风格（专业严肃 / 轻松实用 / 技术向 / 等） |

### 0.3 补充竞品研究（如未提供 `{COMPETITOR_URLS}`）

通过搜索找到 2-3 个主要竞品，分析：
- 竞品的内容策略（他们在写什么话题）
- 竞品覆盖的 Where（平台/工具场景）
- 竞品的内容空白（他们没写但用户需要的）

> **规则**：Phase 0 完成前不得进入 Phase 1。品牌信息不清晰时，主动向用户追问。

---

## Phase 1：定义 Who（ICP 识别与优先级排序）

### 1.1 识别所有潜在 ICP

从 Phase 0 提取的目标用户群出发，列出所有可能的用户类型。每个 ICP 需要：
- 职业/角色描述
- 核心痛点（他们最头疼的事）
- 与 `{BRAND}` 的关联（产品如何解决他们的痛点）

### 1.2 ICP 优先级排序标准

按以下 4 个维度打分（各 1-3 分），总分高者优先：

| 维度 | 说明 |
|------|------|
| **市场规模** | 这类用户群体有多大？ |
| **痛点强度** | 他们的问题有多迫切？ |
| **产品契合度** | `{BRAND}` 解决他们问题的程度有多高？ |
| **内容可写性** | 这个 ICP 的场景能产出多少有搜索量的话题？ |

### 1.3 输出 ICP 优先级表

```
| 优先级 | ICP | 核心痛点 | {BRAND} 核心价值 | 综合得分 |
```

> 如果用户提供了 `{PRIMARY_ICP}`，将其置于 P1，其余按评分排序。

---

## Phase 2：展开 Do What（产品功能映射）

### 2.1 功能 → 任务转化

将 Phase 0 提取的核心功能，转化为「用户视角的任务描述」：

- ❌ 功能视角：「浏览器自动化」
- ✅ 任务视角：「自动抓取竞品网站数据」「批量提取 LinkedIn 联系人」

### 2.2 功能 × ICP 交叉矩阵

对每个 P1/P2 ICP，列出：
- 他们最常用的 3-5 个核心功能
- 每个功能对应的具体任务场景

### 2.3 输出功能-任务映射表

```
| 功能 | 用户任务描述 | 适用 ICP | 优先级 |
```

---

## Phase 3：扩展 Where（场景落脚点挖掘）

**Where 是这个框架最有 SEO 价值的维度**——它将泛泛的「场景」具体化为一个平台或工具名称，直接生成关键词集群。

### 3.1 Where 的两种类型

| 类型 | 说明 | 示例 |
|------|------|------|
| **平台型** | 用户完成任务所在的平台 | YouTube / LinkedIn / Reddit / Amazon / TikTok / Shopify |
| **工具型** | 用户完成任务所用的工具 | Ahrefs / Semrush / Google Sheets / Notion / Salesforce |

### 3.2 Where 挖掘方法

1. **从 ICP 工作流推导**：P1 ICP 在完成「Do What」任务时，会用到哪些平台和工具？
2. **从竞品内容反推**：竞品在写哪些平台/工具相关的内容？（参考 Zapier 大量写 Google Sheets Tutorial 的打法）
3. **用 AI 补充**：基于 ICP 和 Do What，头脑风暴还有哪些遗漏的 Where

### 3.3 Where 优先级评估

| 评估维度 | 说明 |
|---------|------|
| **搜索量潜力** | 「{BRAND} + {Where}」或「{Do What} + {Where}」的关键词是否有搜索量 |
| **竞品覆盖度** | 竞品是否已大量覆盖这个 Where（覆盖少 = 机会大） |
| **ICP 相关性** | P1 ICP 是否真的在这个平台/工具上工作 |

### 3.4 输出 Where 优先级列表

```
| Where | 类型 | 适用 ICP | 适用 Do What | 搜索潜力 | 竞品覆盖 | 优先级 |
```

---

## Phase 4：排列 How（页面类型组合）

### 4.1 标准页面类型库

| 页面类型 | 适用场景 | SEO 特点 | GEO 特点 |
|---------|---------|---------|---------|
| **How-to** | 用户想学会做某件事 | 高搜索量，Featured Snippet 机会 | AI 喜欢引用步骤类内容 |
| **Best List** | 用户在比较工具/方案 | 高商业意图，转化率高 | AI 常用于推荐场景 |
| **vs 对比** | 用户在两个选项间纠结 | 精准长尾，高转化 | AI 回答「A 和 B 哪个好」时引用 |
| **Alternative** | 用户想换掉某个工具 | 高商业意图，竞品流量截取 | AI 回答「X 的替代品」时引用 |
| **Tool Page** | 品牌自身工具的落地页 | 直接转化，品牌词防守 | AI 推荐工具时引用 |
| **Template** | 用户需要可直接使用的模板 | 长尾精准，收藏率高 | AI 友好，天然适合被引用 |
| **Tips/Guide** | 用户想获取最佳实践 | 中等搜索量，权威信号强 | AI 引用率高 |
| **Case Study** | 用户想看真实案例 | 低搜索量但高信任度 | AI 用于佐证观点时引用 |

### 4.2 How 的排列组合逻辑

对每个「Who + Do What + Where」组合，用页面类型矩阵展开：

```
竞品分析（Do What）× Ahrefs（Where）× Marketer（Who）
→ How to do competitor analysis with Ahrefs（How-to）
→ Best Ahrefs alternatives for competitor research（Alternative）
→ Ahrefs vs Semrush for competitor analysis（vs 对比）
→ Competitor analysis template for Ahrefs users（Template）
```

### 4.3 页面类型优先级规则

- **P1 优先**：How-to + Best List（搜索量大，覆盖面广）
- **P2 优先**：vs 对比 + Alternative（商业意图高，转化好）
- **P3 优先**：Template + Tips（GEO 友好，长尾精准）
- **按需**：Tool Page（品牌自身工具）、Case Study（有真实案例时）

---

## Phase 5：提炼 Why（差异化优势植入策略）

### 5.1 Why 的作用

Why 不是一个独立的内容维度，而是**贯穿所有内容的差异化信号**——它决定了在每篇文章中如何自然地植入品牌，让内容不只是通用教程，而是有独特视角的品牌内容。

### 5.2 Why 提炼方法

从 Phase 0 的差异化优势中，提炼出 3-5 个**可在内容中具体展示**的优势点：

| 优势点 | 如何在内容中体现 |
|--------|---------------|
| 持续学习复利效应 | 在 How-to 文章中展示「用 {BRAND} 做这件事，越用越快」的具体场景 |
| 真正执行任务（不只回答问题） | 在 Best List 中作为评测维度，突出「能执行 vs 只能建议」的差异 |
| 隐私安全 | 在涉及数据抓取/自动化的文章中，作为选择 {BRAND} 的理由 |

### 5.3 品牌植入类型判断

对每篇规划中的文章，预判品牌植入类型：

| 类型 | 条件 | 植入方式 |
|------|------|---------|
| **Type A（直接相关）** | {BRAND} 直接解决文章主题的问题 | 作为主要推荐方案之一 |
| **Type B（间接相关）** | {BRAND} 解决文章背后的深层目标 | 在「Beyond X」章节植入 |
| **Type C（不相关）** | {BRAND} 与文章主题无实质关联 | 不植入，保持内容纯粹性 |

---

## Phase 6：生成 Topic Map 矩阵

### 6.1 矩阵结构

按「ICP × Do What」分组，每组展开所有 Where × How 组合：

```markdown
### Who = {ICP} × Do What = {功能/任务}

| Where | How（页面类型） | 话题标题 | 品牌植入类型 | 优先级 |
|-------|--------------|---------|------------|--------|
| LinkedIn | How-to | How to automate LinkedIn lead generation with AI | Type A | ⭐⭐⭐ |
| LinkedIn | Best List | Best AI tools for LinkedIn prospecting | Type A | ⭐⭐⭐ |
| Apollo | Alternative | Best Apollo.io alternatives for lead generation | Type A | ⭐⭐ |
```

### 6.2 话题标题写作规则

- 使用英文（国际 SEO 场景）或中文（中文 SEO 场景），与品牌目标市场一致
- 标题格式参考：
  - How-to：`How to [do something] with/using/for [Where]`
  - Best List：`Best [category] tools for [ICP task]`
  - vs 对比：`[Tool A] vs [Tool B]: Which is better for [task]?`
  - Alternative：`Best [Tool] alternatives for [task]`
  - Template：`[Task] template for [ICP]`
- 标题中自然包含目标关键词，不强行堆砌

### 6.3 优先级评分标准

| 星级 | 条件 |
|------|------|
| ⭐⭐⭐ | 高搜索量潜力 + 高品牌相关度 + 竞争可突破 |
| ⭐⭐ | 中等搜索量 或 高商业意图 或 差异化强 |
| ⭐ | 低搜索量但 GEO 价值高 或 品牌定位重要 |

---

## Phase 7：内容聚合规划

**内容聚合是 Topic Map 中最有杠杆效应的部分。** 单篇内容再好，孤立存在权重有限；聚合做好了，整个内容网络产生 1+1>2 的效果。

### 7.1 四个聚合维度

#### 按 Who 聚合 — 用户中心页
把所有面向同一类用户的内容，汇聚到一个「用户中心页」。
- 作用：向 AI 传递「我们深度服务这类用户」的信号，降低跳出率

#### 按 Where 聚合 — 平台/场景中心页
把所有围绕同一个平台或工具的内容聚合在一起。
- 作用：最容易形成「关键词集群」，是 Zapier 做 Google Sheets 内容矩阵的核心打法

#### 按 Do What 聚合 — 功能中心页
把所有围绕同一个产品功能/任务的内容聚合。
- 作用：覆盖同一任务下的不同搜索意图，形成完整的「任务解决方案网络」

#### 按 How 聚合 — 页面类型资源库
把同类型的页面聚合，形成资源库。
- 作用：资源类页面天然适合被 AI 引用和用户收藏，是 GEO 友好型内容的重要形式

### 7.2 聚合页规划输出格式

```markdown
| 聚合维度 | 聚合页名称 | 收录内容示例 | 建议建立时机 |
|---------|----------|------------|------------|
| 按 Who | Marketer 专题页 | 所有面向 Marketer 的内容 | 积累 5+ 篇后建立 |
| 按 Where | LinkedIn 专题页 | 所有 LinkedIn 相关内容 | 积累 3+ 篇后建立 |
```

### 7.3 每篇内容发布时的聚合 Checklist

每发布一篇新内容，必须回答这 4 个问题：
- [ ] 它属于哪个 **Who 专题**？有没有链接到对应的用户中心页？
- [ ] 它的 **Where** 是什么？同平台下有没有其他内容可以互链？
- [ ] 它解决的 **Do What 任务**，有没有其他页面类型的内容可以补充？
- [ ] 它是否可以被纳入某个 **资源库/Template 页**？

---

## Phase 8：优先级排序 + 执行队列输出

### 8.1 综合优先级评分模型

对 Phase 6 生成的所有话题，按以下 5 个维度综合评分：

| 维度 | 权重 | 说明 |
|------|------|------|
| **搜索量潜力** | 30% | 关键词是否有足够搜索量（可通过关键词工具验证） |
| **竞争可突破性** | 20% | 当前排名前 10 是否有内容质量较低的文章 |
| **品牌相关度** | 25% | {BRAND} 能否在这篇文章中自然植入（Type A > Type B > Type C） |
| **ICP 优先级** | 15% | 文章面向的 ICP 是否是 P1/P2 |
| **GEO 价值** | 10% | 话题是否适合被 AI 引用（Template / How-to / Best List 优先） |

### 8.2 执行队列输出格式

输出前 `{TOPIC_COUNT}`（默认 20）篇，格式如下：

```markdown
| # | 话题标题 | ICP | Where | How | 品牌植入 | 优先理由 |
|---|---------|-----|-------|-----|---------|---------|
| 1 | ... | ... | ... | ... | Type A | 高搜索量 + 直接相关 |
```

### 8.3 去重处理

如果用户提供了 `{EXISTING_CONTENT}`，在输出执行队列前：
1. 对比已有内容，标记重复或高度相似的话题
2. 将重复话题替换为同等优先级的新话题
3. 在输出中注明「已去重 X 个话题」

---

## Phase 9：输出 Topic Map 文件

### 9.1 输出格式

将完整 Topic Map 输出为 Markdown 文件，文件名：`{brand-slug}-topic-map.md`

### 9.2 文件结构

```markdown
# {BRAND} Topic Map（SEO/GEO）

> 生成日期：{DATE}
> 方法论：Who × Do What × Where × How × Why 场景框架

## 一、框架变量定义
（Who / Do What / Where / How / Why 的 {BRAND} 版本填充）

## 二、ICP 优先级排序

## 三、Topic Map 主体矩阵
（按 ICP × Do What 分组展开）

## 四、内容聚合规划

## 五、执行队列（前 {TOPIC_COUNT} 篇）

## 六、发布 Checklist
```

### 9.3 文件交付

- 输出 `.md` 文件并提供下载
- 同时在对话中展示执行队列摘要（前 5 篇 + 聚合规划概览）

---

## 完整工作流总结

```
输入：{BRAND} + {BRAND_INFO} + 选填参数
         ↓
Phase 0：加载品牌信息
         └─ 读取官网/文档 → 提取功能/用户/优势/场景
            → 补充竞品研究（如未提供）
         ↓
Phase 1：定义 Who
         └─ 识别所有 ICP → 4维评分 → 优先级排序
         ↓
Phase 2：展开 Do What
         └─ 功能 → 任务转化 → 功能×ICP 交叉矩阵
         ↓
Phase 3：扩展 Where
         └─ 平台型 + 工具型 → 搜索潜力评估 → 优先级列表
         ↓
Phase 4：排列 How
         └─ 8种页面类型 × (Who+DoWhat+Where) 组合展开
         ↓
Phase 5：提炼 Why
         └─ 差异化优势 → 内容体现方式 → 品牌植入类型预判(A/B/C)
         ↓
Phase 6：生成 Topic Map 矩阵
         └─ 按 ICP×DoWhat 分组 → 话题标题 + 优先级标注
         ↓
Phase 7：内容聚合规划
         └─ 4维聚合页规划（Who/Where/DoWhat/How）
            → 发布 Checklist
         ↓
Phase 8：优先级排序 + 执行队列
         └─ 5维综合评分 → 前N篇执行队列 → 去重处理
         ↓
Phase 9：输出 Topic Map 文件
         └─ {brand-slug}-topic-map.md
```

---

## 参考案例（AllyHub，2026-04-21）

| 变量 | 值 |
|------|---|
| `{BRAND}` | AllyHub |
| `{BRAND_INFO}` | https://allyhub.com |
| `{PRIMARY_ICP}` | Marketer |
| `{CONTENT_GOAL}` | SEO + GEO 均衡 |
| `{TOPIC_COUNT}` | 20 |

**输出摘要**：
- ICP：5 类（Marketer P1 / Sales P2 / Researcher P3 / E-commerce P4 / Developer P5）
- Where：12 个平台/工具场景（LinkedIn / Reddit / YouTube / Google / Ahrefs / Semrush / G2 / Amazon / Etsy / Shopify / Apollo / Similarweb）
- 话题总量：60+ 个
- 执行队列：前 20 篇，含优先理由
- 聚合页：12 个（4 个 Who 中心页 + 5 个 Where 中心页 + 4 个 DoWhat 中心页 + 4 个 How 资源库）

**关键经验**：
- Where 维度是关键词集群的核心来源，挖掘越细越好
- P1 ICP 优先展开，避免一开始就铺太广
- 内容聚合规划要在 Topic Map 生成时同步规划，而不是内容积累后再补
- 搜索量为 0 的话题：GEO 导向可做，纯 SEO 优先有量的
