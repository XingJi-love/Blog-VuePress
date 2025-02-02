import { defineThemeConfig } from 'vuepress-theme-plume'
import { navbar } from './navbar'
import { notes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: 'https://i.p-i.vip/47/20241024-67192acae3bb8.png',

  appearance: true,

  profile: {
    name: 'XINGJI',
    description: '迄今所有人生都大写着失败，但不妨碍我继续向前✨',
    avatar: 'https://i.p-i.vip/47/20241024-67192acae3bb8.png',
    circle: true, // 是否为圆形头像
    layout: 'right', // 个人信息在左侧还是右侧，'left' | 'right'
  },

  navbar,
  notes,
  social: [
    { icon: 'github', link: 'https://github.com/XingJi-love' },
    {
      icon: {
					svg: '<svg t="1728183147842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2076" data-darkreader-inline-fill="" width="200" height="200"><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#1296db" p-id="2077" data-darkreader-inline-fill="" style="--darkreader-inline-fill:#0e78af;"></path></svg>',
				},
				link: 'https://blog.csdn.net/AcsdnHZB?spm=1011.2648.3001.5343',
      },
    { icon: 'bilibili', link: 'https://space.bilibili.com/1289480756?spm_id_from=333.1007.0.0' },
    { icon: 'steam', link: 'https://steamcommunity.com/profiles/76561199609943905/' },
  ],
})
