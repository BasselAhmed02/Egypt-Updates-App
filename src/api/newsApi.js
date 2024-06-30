const API_KEY = "1ae61e3a7c2646a98e98e24445b7c394";
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async () => {
  // try {
  //   const response = await fetch(
  //     `${BASE_URL}/everything?q=latest&sortBy=publishedAt&apiKey=${API_KEY}`
  //   );
  //   if (!response.ok) {
  //     throw new Error(`Error: ${response.status}`);
  //   }
  //   const data = await response.json();
  //   console.log(data.articles);
  //   return data.articles;
  // } catch (error) {
  //   console.error("Failed to fetch news:", error);
  //   return [];
  // }

  // Used for mocking in development
  return [
    // {
    //   source: {
    //     id: null,
    //     name: "Gizmodo.com",
    //   },
    //   author: "Cheryl Eddy",
    //   title: "Apple TV+'s Neuromancer Series Takes Another Step Forward",
    //   description:
    //     "Hollywood has been trying to adapt William Gibson’s groundbreaking 1984 cyberpunk novel Neuromancer for years—and now it really seems the latest attempt, taking the form not of a feature film but a series at sci-fi hub Apple TV+—is truly happening. After a Fe…",
    //   url: "https://gizmodo.com/neuromancer-appletv-series-casts-briana-middleton-scifi-1851567254",
    //   urlToImage:
    //     "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/c9f2dac50362707852d4e567f42b6e58.jpg",
    //   publishedAt: "2024-06-29T14:00:00Z",
    //   content:
    //     "Hollywood has been trying to adaptWilliam Gibsons groundbreaking 1984 cyberpunk novel Neuromancer for yearsand now it really seems the latest attempt, taking the form not of a feature film but a seri… [+1604 chars]",
    // },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "michael.hicks@futurenet.com (Michael L Hicks)",
      title:
        "The Galaxy Watch 7 and Ultra won't be the only watches worth buying in July",
      description:
        "With Prime Day coming up, you may want to skip the newer Galaxy Watches, because Samsung traditionally uses the deal event for an everything-must-go sale on all its old watches, dropping them to lowest-ever prices.",
      url: "https://www.androidcentral.com/wearables/prime-day-could-make-galaxy-watch-6-more-tempting-than-watch-7",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/xW2LVmcVmpS2trBX3dKLtD-1200-80.jpg",
      publishedAt: "2024-06-29T15:00:14Z",
      content:
        "Samsung has confirmed that Galaxy Unpacked starts on July 10, when it'll show off the latest wearables, foldables, and even a smart ring. That means Samsung has a lot of old inventory to clear out, a… [+3729 chars]",
    },
    {
      source: {
        id: null,
        name: "Android Central",
      },
      author: "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
      title: "I used a dozen iPhone 15 Pro Max cases — these are my favorites",
      description:
        "I don't use cases with most of my phones, but that's different with the iPhone 15 Pro Max. I got over a dozen cases to use with the phone, and these are my favorites.",
      url: "https://www.androidcentral.com/accessories/i-used-a-dozen-iphone-15-pro-max-cases-these-are-my-favorites",
      urlToImage:
        "https://cdn.mos.cms.futurecdn.net/ff6NqjjSDps4MGFuLok5eE-1200-80.jpg",
      publishedAt: "2024-06-29T07:29:06Z",
      content:
        "I don't normally use cases with my phones; I just don't like the way they feel, and even thin cases tend to add weight and bulk to a device. Given that I switch phones every two weeks on average, it … [+7584 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "MacRumors Staff",
      title:
        "Top Stories: iOS 18 Beta 2, Apple Vision Pro International Launch, New Beats Speaker, and More",
      description:
        "Apple is moving right along on iOS 18, macOS Sequoia, and other new operating systems that were unveiled at WWDC earlier this month, releasing the second developer betas of the updates this week with a number of new changes and additions. Public betas will fo…",
      url: "https://www.macrumors.com/2024/06/29/top-stories-ios-18-beta-2/",
      urlToImage:
        "https://images.macrumors.com/t/N5i9vKuQqdsq06d1zha0BtCe8EI=/1600x/article-new/2024/06/top-stories-29jun2024.jpg",
      publishedAt: "2024-06-29T13:00:00Z",
      content:
        "Apple is moving right along on iOS 18, macOS Sequoia, and other new operating systems that were unveiled at WWDC earlier this month, releasing the second developer betas of the updates this week with… [+4283 chars]",
    },
    {
      source: {
        id: null,
        name: "Slashdot.org",
      },
      author: "BeauHD",
      title: "Apple Vision Pro Launches In First Countries Outside the US",
      description:
        "After launching in the United States earlier this year, Apple's Vision Pro is now available to buy in China, Japan, and Singapore. \"The Apple Vision Pro will also roll out to Germany, France, Australia, the UK, and Canada on July 12th, with preorders for thos…",
      url: "https://apple.slashdot.org/story/24/06/28/2213220/apple-vision-pro-launches-in-first-countries-outside-the-us",
      urlToImage: "https://a.fsdn.com/sd/topics/apple_64.png",
      publishedAt: "2024-06-29T00:45:00Z",
      content:
        "After launching in the United States earlier this year, Apple's Vision Pro is now available to buy in China, Japan, and Singapore. \"The Apple Vision Pro will also roll out to Germany, France, Austral… [+592 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "James Jones",
      title: "iPhone SE 4: Release date and what we know so far",
      description:
        "If you’re an Apple iPhone fan but not bothered about having all the latest bells and whistles that tend to… Continue reading iPhone SE 4: Release date and what we know so far\nThe post iPhone SE 4: Release date and what we know so far appeared first on ReadWri…",
      url: "https://readwrite.com/iphone-se-4-release-date-and-what-we-know-so-far/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/06/Apple_new-iphone-se-black-camera-and-touch-id_04152020.jpg",
      publishedAt: "2024-06-29T13:56:42Z",
      content:
        "If youre an Apple iPhone fan but not bothered about having all the latest bells and whistles that tend to come with modern smartphones, then the affordable iPhone SE is perfect for you.\r\nWhile Apples… [+5882 chars]",
    },
    {
      source: {
        id: null,
        name: "ReadWrite",
      },
      author: "James Jones",
      title: "Samsung Galaxy Buds 3: Release Date, Features, Rumours and Leaks",
      description:
        "It’s almost two years since we were introduced to the Samsung Galaxy Buds 2, and now we’re hearing more and… Continue reading Samsung Galaxy Buds 3: Release Date, Features, Rumours and Leaks\nThe post Samsung Galaxy Buds 3: Release Date, Features, Rumours and …",
      url: "https://readwrite.com/galaxy-buds-3-release-date-features-rumours-leaks/",
      urlToImage:
        "https://readwrite.com/wp-content/uploads/2024/06/AY6AYweLKHV8TsyLcGHZXZ-970-80.jpg.webp",
      publishedAt: "2024-06-29T08:19:41Z",
      content:
        "Its almost two years since we were introduced to the Samsung Galaxy Buds 2, and now were hearing more and more about plans for the Galaxy Buds 3 and Galaxy Buds 3 Pro.\r\nTo date, Samsung has struggled… [+4508 chars]",
    },
    {
      source: {
        id: null,
        name: "Xataka.com",
      },
      author: "Ricardo Aguilar",
      title:
        "Honor está arrasando en China y ahora va a por Europa: es el fabricante que más crece, con diferencia",
      description:
        "Honor es actualmente uno de los cinco grandes fabricantes a nivel europeo. Pero su intención no es la de quedarse ahí: el sueño es superar a Samsung y Apple. Desde luego, un objetivo ambicioso, pero con el músculo suficiente y los pasos correctos no hay impos…",
      url: "https://www.xataka.com/entrevistas/honor-esta-arrasando-china-ahora-va-a-europa-fabricante-que-crece-diferencia",
      urlToImage: "https://i.blogs.es/ea0b4e/honor/840_560.jpeg",
      publishedAt: "2024-06-29T15:00:58Z",
      content:
        "Honor es actualmente uno de los cinco grandes fabricantes a nivel europeo. Pero su intención no es la de quedarse ahí: el sueño es superar a Samsung y Apple. Desde luego, un objetivo ambicioso, pero … [+4643 chars]",
    },
  ];
};
