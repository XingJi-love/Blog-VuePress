---
title: test
cover: /images/壁纸.jpg
tags:
  - 测试
createTime: 2024/12/02 21:08:51
permalink: /article/40vw3gzd/
---

## 轮番图

<Swiper
  :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png','https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg','https://i.p-i.vip/47/20241109-672f0eba4a535.jpg']"
  mode="carousel"
  :height="200"
  :slides-per-view="3"
  :space-between="20"
  :speed="5500"
/>

<Swiper
  :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png','https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg','https://i.p-i.vip/47/20241109-672f0eba4a535.jpg']"
  mode="broadcast"
  :height="200"
  :slides-per-view="3"
  :space-between="20"
  mousewheel
/>

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png','https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg','https://i.p-i.vip/47/20241109-672f0eba4a535.jpg']" effect="cards" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="cube" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="fade" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="coverflow" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="flip" />

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="creative" :creativeEffect="{
  prev: { shadow: true, translate: [0, 0, -400] },
  next: { translate: ['100%', 0, 0] },
}"
/>

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="creative" :creativeEffect="{
  prev: { shadow: true,  translate: [0, 0, -800], rotate: [180, 0, 0] },
  next: { shadow: true, translate: [0, 0, -800], rotate: [-180, 0, 0] },
}"
/>

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="creative" :creativeEffect="{
  prev: { shadow: true, translate: ['-125%', 0, -800], rotate: [0, 0, -90] },
  next: { shadow: true, translate: ['125%', 0, -800], rotate: [0, 0, 90] },
}"
/>

<Swiper :items="['https://i.p-i.vip/47/20241023-6718a82cbb5e2.png', 'https://i.p-i.vip/47/20241023-6718a8585926b.png']" effect="creative" :creativeEffect="{
  prev: { shadow: true, origin: 'left center', translate: ['-5%', 0, -200], rotate: [0, 100, 0] },
  next: { origin: 'right center', translate: ['5%', 0, -200], rotate: [0, -100, 0] },
}"
/>

## 瀑布流容器 

::: card-masonry cols="4" gap="16"

![](https://i.p-i.vip/47/20241023-6718a82cbb5e2.png)

![](https://i.p-i.vip/47/20241023-6718a82cbb5e2.png)

![](https://i.p-i.vip/47/20241023-6718a8585926b.png)

![](https://i.p-i.vip/47/20241023-6718a8585926b.png)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

![](https://i.p-i.vip/47/20241109-672f0eb9847d7.jpeg)

:::


:::: card-masonry

::: card title="卡片1"
卡片内容
:::

::: card title="卡片2"
卡片内容

卡片内容
:::

::: card title="卡片3"
卡片内容
:::

::: card title="卡片4"
卡片内容
:::

::: card title="卡片5"
卡片内容

卡片内容
:::

::: card title="卡片6"
卡片内容
:::

::::


:::card-masonry

```ts
const a = 1
```

```json
{
  "name": "John"
}
```

```css
p {
  color: red;
}
```

```html
<html>
  <body>
    <h1>Hello world</h1>
  </body>
</html>
```

```ts
const a = 12
const b = 1
```

```rust
fn main() {
    println!("Hello, world!");
}
```

:::



## Repo 卡片

<!-- 导入后，即可在 markdown 中使用 -->
<RepoCard repo="pengzhanbo/vuepress-theme-plume" />

<CardGrid>
  <RepoCard repo="vuepress/core" />
  <RepoCard repo="vuepress/ecosystem" />
</CardGrid>

## Npm 徽章

<!-- 在 markdown 中导入 -->
<script setup>
import NpmBadge from 'vuepress-theme-plume/features/NpmBadge.vue'
import NpmBadgeGroup from 'vuepress-theme-plume/features/NpmBadgeGroup.vue'
</script>

<!-- 导入后，即可在 markdown 中使用 -->
<NpmBadge name="vuepress-theme-plume" type="dm" />

<!-- 并排显示多个 npm badge -->
<NpmBadgeGroup name="vuepress-theme-plume" items="version,dm" />

<NpmBadgeGroup
  repo="pengzhanbo/vuepress-theme-plume"
  items="stars,version,dm,source"
/>

<NpmBadgeGroup repo="pengzhanbo/vuepress-theme-plume">
  <NpmBadge type="stars" />
  <NpmBadge type="version" label="npm" />
  <NpmBadge type="dm" />
  <NpmBadge type="source" />
</NpmBadgeGroup>

## 徽章

- VuePress - <Badge type="info" text="v2" />
- VuePress - <Badge type="tip" text="v2" />
- VuePress - <Badge type="warning" text="v2" />
- VuePress - <Badge type="danger" text="v2" />

## 图标

- home - <Icon name="material-symbols:home" color="currentColor" size="1em" />
- vscode - <Icon name="skill-icons:vscode-dark" size="2em" />
- twitter - <Icon name="skill-icons:twitter" size="2em" />

## 隐藏文本

- 鼠标悬停 - <Plot>悬停时可见</Plot>
- 点击 - <Plot trigger="click">点击时可见</Plot>

## 卡片

<Card title="卡片标题" icon="twemoji:astonished-face">
  这里是卡片内容。
</Card>

<Card>
  <template #title>
    <p style="color: red">卡片标题</p>
  </template>
  这里是卡片内容。
</Card>

## 链接卡片

<LinkCard title="卡片标题" href="/" description="这里是卡片内容" />
<LinkCard icon="twemoji:astonished-face" title="卡片标题" href="/" />

<LinkCard title="卡片标题" href="/">

  - 这里是卡片内容
  - 这里是卡片内容

</LinkCard>

<LinkCard href="/">
  <template #title>
    <span style="color: red" >卡片标题</span>
  </template>

  - 这里是卡片内容
  - 这里是卡片内容

</LinkCard>

## 卡片容器

<CardGrid>
  <Card title="卡片标题" icon="twemoji:astonished-face">
    这里是卡片内容。
  </Card>
  <Card title="卡片标题" icon="twemoji:astonished-face">
    这里是卡片内容。
  </Card>
</CardGrid>

<CardGrid>
  <LinkCard title="卡片标题" href="/" />
  <LinkCard icon="twemoji:astonished-face" title="卡片标题" href="/" />
</CardGrid>


## 图片卡片

<ImageCard
  image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
  title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
  description="今天照片中的灯塔位于葡萄牙南部海岸阿尔加维的卡沃埃罗。阿尔凡齐纳灯塔建于1919年，照耀着大海，帮助船只在该地区周围危险的水域航行。这座灯塔是著名的旅游胜地，同时也是该地区与海洋紧密联系的象征。如果你有幸住在灯塔附近，那么本周末就是拜访灯塔的最佳时机。"
  href="/"
  author="Andreas Kunz"
  date="2024/08/16"
/>

<CardGrid>
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
  <ImageCard
    image="https://cn.bing.com/th?id=OHR.AlfanzinaLighthouse_ZH-CN9704515669_1920x1080.webp"
    title="阿尔凡齐纳灯塔，阿尔加维，葡萄牙"
    description="..."
    href="/"
    author="Andreas Kunz"
    date="2024/08/16"
  />
</CardGrid>

