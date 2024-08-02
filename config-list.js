const ItemFiltersPreset = require('./app/config/ItemFiltersPreset.js')

let feedList = [
  {
    title: '阿哲[哲週來尬電]',
    feedID: 'linzin-news2',
    thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC0oosHZ4k1o-zNT21gg5O7A',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC0oosHZ4k1o-zNT21gg5O7A',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('[哲週來尬電') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '斐姨所思【阿姨想知道】',
    feedID: 'fanamericantime-interview',
    thumbnailBorderColor: true,
    homepageURL: 'https://www.youtube.com/channel/UC2VKL-DkRvXtWkfjMzkYvmw',
    feedURL: 'https://www.youtube.com/feeds/videos.xml?channel_id=UC2VKL-DkRvXtWkfjMzkYvmw',
    itemFilters: [
      ItemFiltersPreset.between10minTo60Min,
      (item) => { return (item.title.indexOf('斐姨所思【阿姨想知道】') > -1) },
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '淇食很科學',
    feedID: 'HiThisIsAchi',
    homepageURL: 'https://www.youtube.com/channel/UCyYGbBvicdjDvNEehOMEy4A',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '叉雞說故事',
    feedID: 'bbqporkchicken',
    homepageURL: 'https://www.youtube.com/channel/UCB3pBfnruGVgbP1r5Ya2CEg',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '異色檔案說故事',
    feedID: 'mystery2018',
    homepageURL: 'https://www.youtube.com/channel/UCVwlKAna1gU30r3s9je06lA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '井川一聊動畫',
    feedID: 'InokawaHajime',
    homepageURL: 'https://www.youtube.com/channel/UCcHVKeT_5Ta-gTa-sgooQxQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '蒼藍鴿聊醫學',
    feedID: 'bluepigeon0810',
    homepageURL: 'https://www.youtube.com/channel/UCUn77_F5A65HViL9OEvIpLw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '萊斯 新Game報',
    feedID: 'LiceMoo-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('《新Game報') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '大閒者 偷閒加油站',
    feedID: 'Idlers-GameNews',
    homepageURL: 'https://www.youtube.com/channel/UCU6nhA37pbvzw-JXhAB87Mg',
    thumbnailBorderColor: true,
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return (item.title.indexOf('偷閒加油站') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '肥宅MS',
    feedID: 'otakumsvideo',
    homepageURL: 'https://www.youtube.com/channel/UCBOBS5RdHd2Owytoj4PqPqA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '四處觀察',
    feedID: 'sichuguancha',
    homepageURL: 'https://www.youtube.com/channel/UC6OeJCR9gHsJPVyNhXfK4tA',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: 'Emmy追劇時間 看財經',
    feedID: 'emmytw',
    homepageURL: 'https://www.youtube.com/channel/UCUkwvRrpvWkocNdk9qIpRSw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '好味營養師品瑄',
    feedID: 'dietitian_pink',
    homepageURL: 'https://www.youtube.com/channel/UCLwFOT4tHGaK9kqXXExhPFQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '瑩真律師',
    feedID: 'LawyerAngela',
    homepageURL: 'https://www.youtube.com/channel/UCLzWMcpNlhHo0c0yOyWksvQ',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '關鍵評論網：國際話題',
    feedID: 'TheNewsLens',
    homepageURL: 'https://www.youtube.com/channel/UC4bokYuSrVGpI6_WYv7Gdbw',
    itemFilters: [
      ItemFiltersPreset.between3minTo30Min,
      (item) => { return ((item.title.indexOf('｜國際大風吹') > -1) || (item.title.indexOf('｜國際值日生') > -1)) }
    ]
  },
  // {
  //   title: '迷走大學 時事評論',
  //   feedID: 'meisouniv-news',
  //   homepageURL: 'https://www.youtube.com/channel/UCiCOKR_WkqZuYN9fpjWqnzg',
  //   itemFilters: [
  //     ItemFiltersPreset.between6minTo60Min,
  //     (item) => { return ((item.title.indexOf('【走漏消息') > -1) || (item.title.indexOf('【迷大Jo報】') > -1) || (item.title.indexOf('【這個不能講') > -1)) }
  //   ],
  //   options: {
  //     maxItems: 5
  //   }
  // },
  {
    title: '迷走大學 迷大Jo報',
    feedID: 'meisouniv-weekly-news',
    homepageURL: 'https://www.youtube.com/channel/UCiCOKR_WkqZuYN9fpjWqnzg',
    itemFilters: [
      ItemFiltersPreset.between30minTo180Min,
      (item) => { return (item.title.indexOf('【迷大Jo報】') > -1 || item.title.indexOf('【時事閒聊】') > -1 || item.title.indexOf('【走漏消息') > -1) }
    ],
    options: {
      maxItems: 3
    }
  },
  {
    title: '我的學習筆記',
    feedID: 'mynotebooks',
    homepageURL: 'https://www.youtube.com/channel/UCAS8QqEyGGH71xYgFzNSbuw',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '卡提諾狂新聞',
    feedID: 'CrazyNews9487',
    homepageURL: 'https://www.youtube.com/playlist?list=PLH2b4YnNI7j13eD1KdpEV3t7VEWtRQlYY',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
  {
    title: '公視P#新聞實驗室',
    feedID: 'Ppsharp_newslab',
    homepageURL: 'https://www.youtube.com/channel/UCMDcOT4z7GS1SRGG2g7z43g',
    itemFilters: ItemFiltersPreset.between3minTo30Min,
  },
]

// ---------------------------------------

// 測試用
// feedList = [
//   {
//     title: '萊斯 新Game報',
//     feedID: 'LiceMoo-GameNews',
//     homepageURL: 'https://www.youtube.com/channel/UC9WiXJEyHMGRqL-__3FIBEw',
//     thumbnailBorderColor: true,
//     itemFilters: [
//       ItemFiltersPreset.between3minTo30Min,
//       // (item) => { return (item.title.indexOf('《新Game報') > -1) }
//     ],
//     options: {
//       maxItems: 3
//     }
//   },
// ]

module.exports = feedList
