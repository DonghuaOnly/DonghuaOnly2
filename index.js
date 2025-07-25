        window.onload = () => {
                
    // --- Element Selection ---
    const loadingSpinner = document.getElementById('loading-spinner');
    const mainContent = document.getElementById('main-content');
    const libraryView = document.getElementById('library-view');
    const watchView = document.getElementById('watch-view');
    const searchView = document.getElementById('search-view');
    const tencentView = document.getElementById('tencent-view');
    const youkuView = document.getElementById('youku-view');
    const azListView = document.getElementById('az-list-view');
    const donationView = document.getElementById('donation-view');
    const contactView = document.getElementById('contact-view');
    const viewAllView = document.getElementById('view-all-view');

    const hotSeriesGrid = document.getElementById('hot-series-grid');
    const latestReleaseGrid = document.getElementById('latest-release-grid');
    const homeRecommendGrid = document.getElementById('home-recommend-grid');
    const newEpisodesTodayList = document.getElementById('new-episodes-today-list');
    const searchResultsGrid = document.getElementById('search-results-grid');
    const tencentGrid = document.getElementById('tencent-grid');
    const youkuGrid = document.getElementById('youku-grid');
    const azListContainer = document.getElementById('az-list-container');
    const viewAllGrid = document.getElementById('view-all-grid');
    const newSeriesList = document.getElementById('new-series-list');
    const favoriteList = document.getElementById('favorite-list');
    const recommendedGrid = document.getElementById('recommended-grid');
    const watchPageOngoingList = document.getElementById('watch-page-ongoing-list');
    const watchPagePopularList = document.getElementById('watch-page-popular-list');
    const completedSeriesList = document.getElementById('completed-series-list');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchForm = document.getElementById('search-form');
    const menuToggle = document.getElementById('mobile-menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    const mobileNavCloseBtn = document.getElementById('mobile-nav-close');
    const dailymotionPlayer = document.getElementById('dailymotion-player');
    const prevEpisodeBtn = document.getElementById('prev-episode-btn');
    const nextEpisodeBtn = document.getElementById('next-episode-btn');
    const showAllEpisodesBtn = document.getElementById('show-all-episodes-btn');
    const episodeModal = document.getElementById('episode-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const episodeGrid = document.getElementById('episode-grid');
    const modalEpisodeTitle = document.getElementById('episode-list-title');
    const sitemapList = document.getElementById('sitemap-list');
    const logoLink = document.getElementById('logo-link');

    // View All Links
    const viewAllLinks = document.querySelectorAll('.view-all-link');

    // Telegram Modal
    const telegramModal = document.getElementById('telegram-modal');
    const telegramYesBtn = document.getElementById('telegram-yes-btn');
    const telegramNoBtn = document.getElementById('telegram-no-btn');

    // Nav Links
    const navLinks = {
        home: [document.getElementById('home-link'), document.getElementById('mobile-home-link'), document.getElementById('footer-home-link')],
        donation: [document.getElementById('donation-link'), document.getElementById('mobile-donation-link'), document.getElementById('footer-donation-link')],
        tencent: [document.getElementById('tencent-link'), document.getElementById('mobile-tencent-link'), document.getElementById('footer-tencent-link')],
        youku: [document.getElementById('youku-link'), document.getElementById('mobile-youku-link'), document.getElementById('footer-youku-link')],
        azList: [document.getElementById('az-list-link'), document.getElementById('mobile-az-list-link'), document.getElementById('footer-az-list-link')],
        contact: [document.getElementById('contact-link'), document.getElementById('mobile-contact-link'), document.getElementById('footer-contact-link')],
    };

    // --- DATA MANAGEMENT ---
    let allDonghuaData = [];
    let currentDonghua = null;
    let currentEpisodeNumber = 1;

    function createYourDramaData() {
        const dailymotionBaseUrl = "https://www.dailymotion.com/embed/video/";
        const dramaData = [
             {
                 id: 'd1',
                 title: 'Battle Through The Heavens',
                 slug: 'battle-through-the-heavens',
                 subtitle: 'Action, Fantasy',
                 description: 'A legendary tale of a young man who was once considered a genius, but suddenly loses his powers. He overcomes great challenges to reclaim his honor.',
                 maxEpisodes: 153,
                 latestEpisode: 153,
                 releaseTime: '10:00 AM',
                 img: 'images/Batt.jpg.jpg',
                 episodeLinks: [
                     { start: 1,   end: 12,  url: `${dailymotionBaseUrl}x9hzg4m` },  // S1
                     { start: 13,  end: 17,  url: `${dailymotionBaseUrl}x9i0c3o` }, // S2 P1 + Special 1
                     { start: 18,  end: 24,  url: `${dailymotionBaseUrl}x9i14di` }, // S2 P2 + Special 2
                     { start: 25,  end: 36,  url: `${dailymotionBaseUrl}x9i5x32` }, // S3
                     { start: 37,  end: 60,  url: `${dailymotionBaseUrl}x9j9ymg` }, // S4
                     { start: 61,  end: 73,  url: `${dailymotionBaseUrl}x9j9ymg` }, // Three Year Agreement
                     { start: 74,  end: 147, url: `${dailymotionBaseUrl}x9k2vhc` }, 
                     { start: 148, end: 149, url: `${dailymotionBaseUrl}x9k2vhc` },
                     { start: 150, end: 150, url: `${dailymotionBaseUrl}x9kyf98` },
                     { start: 151, end: 151, url: `${dailymotionBaseUrl}x9lcuba` },
                     { start: 152, end: 152, url: `${dailymotionBaseUrl}x9lolp4` },
                     { start: 153, end: 153, url:''}
                 ],
                 rating: 9.2, status: 'Ongoing', studio: 'Shanghai Motion Magic', duration: '20 min per ep', country: 'China',
                 network: '', released: '2022-07-31', season: '5', type: 'ONA',
                 fansub: 'Lucifer Donghua', tags: ['Action', 'Adventure', 'Fantasy', 'Martial Art', 'Romance']
             },
             {
                 id: 'd2', title: 'Shrouding The Heavens', slug: 'shrouding-the-heavens',
                 subtitle: 'Xianxia, Comedy', description: 'The hilarious story of a young man who values longevity above all else, leading to comical adventures in a world of cultivation.', maxEpisodes: 119, latestEpisode: 119, releaseTime: '11:00 AM',
                 img: 'images/Shrouding to the heaven.jpg.jpg',
                 episodeLinks: [
                         { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Compilation Video [1]
                         { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Compilation Video [1]
                         { start: 21,  end: 25,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Compilation Video [1]
                         { start: 30,  end: 30,  url: `${dailymotionBaseUrl}x9by0ts` }, // Single Episode [2]
                         { start: 64,  end: 64,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Single Episode [1]
                         { start: 75,  end: 75,  url: `${dailymotionBaseUrl}x966a1y` }, // Single Episode [3]
                         { start: 76,  end: 76,  url: `${dailymotionBaseUrl}x966a1y` }, // Single Episode [3]
                         { start: 78,  end: 78,  url: `${dailymotionBaseUrl}x966a1y` }, // Single Episode [3]
                         { start: 80,  end: 82,  url: `${dailymotionBaseUrl}x97dl0i` }, // Compilation Video [4]
                         { start: 84,  end: 89,  url: `${dailymotionBaseUrl}x9f58f6` }, // Compilation Video [5]
                         { start: 90,  end: 94,  url: `${dailymotionBaseUrl}x9by0ts` }, // Compilation Video [2]
                         { start: 95,  end: 95,  url: `${dailymotionBaseUrl}x9f58f6` }, // Single Episode [5, 6]
                         { start: 96,  end: 96,  url: `${dailymotionBaseUrl}x9f58f6` }, // Single Episode [5, 6]
                         { start: 97,  end: 98,  url: `${dailymotionBaseUrl}x9f58f6` }, // 4K Upload [5, 6]
                         { start: 99,  end: 99,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Single Episode [1, 6]
                         { start: 100, end: 101, url: `${dailymotionBaseUrl}x9fjsq6` }, // Compilation Video [1]
                         { start: 102, end: 104, url: `${dailymotionBaseUrl}x9gqzue` }, // 4K Upload [6, 7]
                         { start: 105, end: 108, url: `${dailymotionBaseUrl}x9gqzue` }, // Compilation Video [7]
                         { start: 109, end: 111, url: `${dailymotionBaseUrl}x9kppwk` }, // Compilation Video [8, 6]
                         { start: 112, end: 114, url: `${dailymotionBaseUrl}x9kppwk` }, // Compilation Video [8, 6]
                         { start: 115, end: 116, url: `${dailymotionBaseUrl}x9ltkeq` },  // 4K Multi-Sub Upload [6, 9];
                         { start: 117,  end: 119, url:  "https://www.youtube.com/embed/SliV5I_fOro?si=mWdAn7PYhUJWEdwn"},
                 ],
                 rating: 9.0, status: 'Ongoing', studio: 'B.CMAY PICTURES', duration: '22 min per ep', country: 'China',
                 network: 'i', released: '2023-11-18', season: '1', type: 'ONA',
                 fansub: 'Anime Official', tags: ['Xianxia', 'Comedy', 'Adventure']
             },
             {
                 id: 'd3', title: 'Swallowed Star', slug: 'swallowed-star',
                 subtitle: 'Sci-Fi, Action', description: 'In a future world ravaged by a virus, humanity finds new strength. A young man from a poor background fights to protect his family and the world.', maxEpisodes: 78, latestEpisode: 78, releaseTime: '12:00 PM',
                 img: 'images/Loufeng.jpg.jpg',
                 episodeLinks: [
                      
                         { start: 9,   end: 15,  url: `${dailymotionBaseUrl}x8rzfpl` }, // Compilation Video [2]
                         { start: 16,  end: 22,  url: `${dailymotionBaseUrl}x8s0n0m` }, // Compilation Video [3]
                         { start: 23,  end: 26,  url: `${dailymotionBaseUrl}x8s0pxa` }, // Compilation Video [4]
                         { start: 27,  end: 34,  url: `${dailymotionBaseUrl}x8s0xh0` }, // Compilation Video [5]
                         { start: 35,  end: 41,  url: `${dailymotionBaseUrl}x8s10yo` }, // Compilation Video [6]
                         { start: 42,  end: 48,  url: `${dailymotionBaseUrl}x8s11t0` }, // Compilation Video [7]
                         { start: 49,  end: 55,  url: `${dailymotionBaseUrl}x8s334s` }, // Compilation Video [8]
                         { start: 56,  end: 62,  url: `${dailymotionBaseUrl}x8s334u` }, // Compilation Video [9]
                         { start: 63,  end: 69,  url: `${dailymotionBaseUrl}x8s34ew` }, // Compilation Video [6]
                         { start: 70,  end: 77,  url: `${dailymotionBaseUrl}x8s38ig` }, // Compilation Video [10]
                         { start: 78,  end: 84,  url: `${dailymotionBaseUrl}x8s38s4` }, // Compilation Video [11]
                         { start: 85,  end: 91,  url: `${dailymotionBaseUrl}x8s3j7g` }, // Compilation Video [6]
                         { start: 92,  end: 98,  url: `${dailymotionBaseUrl}x8s3j7i` }, // Compilation Video [12]
                         { start: 99,  end: 101, url: `${dailymotionBaseUrl}x8s4gr6` }, // Compilation Video [13]
                         { start: 102, end: 102, url: `${dailymotionBaseUrl}x8rp4kf` }, // Single Episode [14]
                         { start: 103, end: 103, url: `${dailymotionBaseUrl}x8rwn3g` }, // Single Episode [15]
                         { start: 104, end: 104, url: `${dailymotionBaseUrl}x8s0x86` }, // Single Episode [16]
                         { start: 105, end: 105, url: `${dailymotionBaseUrl}x8sil1k` }, // Single Episode [17]
                         { start: 106, end: 106, url: `${dailymotionBaseUrl}x8sm2z8` }, // Single Episode [17]
                         { start: 107, end: 107, url: `${dailymotionBaseUrl}x8tankk` }, // Single Episode [18]
                         { start: 108, end: 115, url: `${dailymotionBaseUrl}x8wxwui` }, // Compilation Video [19]
                         { start: 116, end: 116, url: `${dailymotionBaseUrl}x8xqu9s` }, // Single Episode [20]
                         { start: 117, end: 120, url: `${dailymotionBaseUrl}x8yy616` }, // Compilation Video [21]
                         { start: 121, end: 127, url: `${dailymotionBaseUrl}x9i3qw0` }, // Compilation Video [22]
                         { start: 128, end: 133, url: `${dailymotionBaseUrl}x99kme8` }, // Compilation Video [23]
                         { start: 134, end: 140, url: `${dailymotionBaseUrl}x99mn6y` }, // Compilation Video [24]
                         { start: 141, end: 146, url: `${dailymotionBaseUrl}x99mo4a` }, // Compilation Video [25]
                         { start: 147, end: 153, url: `${dailymotionBaseUrl}x9i3vrk` }, // Compilation Video [26]
                         { start: 154, end: 160, url: `${dailymotionBaseUrl}x9i3vro` }, // Compilation Video [27]
                         { start: 161, end: 167, url: `${dailymotionBaseUrl}x9i3vrm` }, // Compilation Video [28]
                         { start: 168, end: 168, url: `${dailymotionBaseUrl}x9ihtp6` }, // Single Episode [29]
                         { start: 169, end: 169, url: `${dailymotionBaseUrl}x9imsoy` }, // Single Episode, 4K [30]
                         { start: 170, end: 170, url: `${dailymotionBaseUrl}x9j05vo` }, // Single Episode, 4K [31]
                         { start: 171, end: 171, url: `${dailymotionBaseUrl}x9jdk9s` }, // Single Episode, 4K [32]
                         { start: 172, end: 172, url: `${dailymotionBaseUrl}x9jrs8g` }, // Single Episode, 4K [33]
                         { start: 173, end: 173, url: `${dailymotionBaseUrl}x9k7n36` }, // Single Episode, 4K [34]
                         { start: 174, end: 174, url: `${dailymotionBaseUrl}x9knaq0` }, // Single Episode, 4K [35]
                         { start: 175, end: 175, url: `${dailymotionBaseUrl}x9l1z10` }, // Single Episode, 4K [36]
                         { start: 176, end: 176, url: `${dailymotionBaseUrl}x9lg4m4` }, // Single Episode, Multi-Sub [37]
                         { start: 177, end: 177, url: `${dailymotionBaseUrl}x9lro1c` }, // Single Episode, 4K Multi-Sub [38]
                         { start: 178, end: 178, url: `${dailymotionBaseUrl}x9m3z5q` }, // Single Episode, 4K Multi-Sub [39]
                         { start: 179, end: 179, url: `${dailymotionBaseUrl}x9m3q08` }, // Preview only [40];
                 ],
                 rating: 9.5, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '21 min per ep', country: 'China',
                 network: '', released: '2020-11-29', season: '3', type: 'ONA',
                 fansub: 'Official Sub', tags: ['Sci-Fi', 'Action', 'Adventure', 'Mecha']
             },
             {
                 id: 'd4', title: 'Perfect World', slug: 'perfect-world',
                 subtitle: 'Fantasy, Adventure', description: 'Born for cultivation, a peerless genius, Shi Hao, embarks on a journey to become a legendary figure in a world of wonders and dangers.', maxEpisodes: 156, latestEpisode: 156,
                 img: 'images/Perfect world.jpg.jpg',
                 episodeLinks: [
                     { start: 9, end: 16, url: `${dailymotionBaseUrl}x8u66va` },
                     { start: 17, end: 24, url: `${dailymotionBaseUrl}x8u66vc` },
                     { start: 25, end: 32, url: `${dailymotionBaseUrl}x8u66v8` },
                     { start: 33, end: 40, url: `${dailymotionBaseUrl}x8u6fqc` },
                     { start: 41, end: 48, url: `${dailymotionBaseUrl}x8u8q78` },
                     { start: 49, end: 56, url: `${dailymotionBaseUrl}x8u6fqe` },
                     { start: 57, end: 64, url: `${dailymotionBaseUrl}x8u6fqe` },
                     { start: 65, end: 72, url: `${dailymotionBaseUrl}x8u6fqe` },
                     { start: 73, end: 80, url: `${dailymotionBaseUrl}x8u6fqe` },
                     { start: 81, end: 88, url: `${dailymotionBaseUrl}x8u9hss` },
                     { start: 89, end: 96, url: `${dailymotionBaseUrl}x8u9hss` },
                     { start: 97, end: 104, url: `${dailymotionBaseUrl}x8u9hss` },
                     { start: 105, end: 112, url: `${dailymotionBaseUrl}x8ub3b0` },
                     { start: 113, end: 120, url: `${dailymotionBaseUrl}x8u9hss` },
                     { start: 121, end: 130, url: `${dailymotionBaseUrl}x8u9hss` },
                     { start: 131, end: 140, url: `${dailymotionBaseUrl}x8u66va` },
                     { start: 141, end: 145, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 146, end: 146, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 147, end: 147, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 148, end: 148, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 149, end: 149, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 150, end: 150, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 151, end: 151, url: `${dailymotionBaseUrl}x83sto` },
                     { start: 152, end: 152, url: `${dailymotionBaseUrl}x83sto` },
// Preview for upcoming episodes (Note: ID may be for Ep 221) [18]
                 ],
                 rating: 9.3, status: 'Ongoing', studio: 'Shanghai Foch Film', duration: '20 min per ep', country: 'China',
                 network: '', released: '2021-04-23', season: '1', type: 'ONA',
                 fansub: 'Lucifer Donghua', tags: ['Fantasy', 'Adventure', 'Xianxia']
             },
             {
                 id: 'd5', title: 'Throne of Seal', slug: 'throne-of-seal',
                 subtitle: 'Fantasy, Magic', description: 'In a world where humanity is on the brink of extinction from demon attacks, a young knight, Long Haochen, rises to become a legendary leader.', maxEpisodes: 104, latestEpisode: 104,
                 img: 'images/throne of seal.jpg.jpg',
                 episodeLinks: [
                         // Example of adding episode 1 back
                         { start: 1,   end: 1,   url: `${dailymotionBaseUrl}x9myyyy` }, // Placeholder for Ep 1
                         { start: 56,  end: 60,  url: `${dailymotionBaseUrl}x9kalb0` },   // Part 12 - Ep 56 to 60 [2]
                         { start: 71,  end: 75,  url: `${dailymotionBaseUrl}x9kfp9o` },   // Part 15 - Ep 71 to 75 [3]
                         { start: 81,  end: 85,  url: `${dailymotionBaseUrl}x9khb3m` },   // Part 17 - Ep 81 to 85 [4]
                         { start: 91,  end: 95,  url: `${dailymotionBaseUrl}x9kjva0` },   // Part 19 - Ep 91 to 95
                         { start: 96,  end: 100, url: `${dailymotionBaseUrl}x9kjva2` },   // Part 20 - Ep 96 to 100 [5]
                         { start: 116, end: 120, url: `${dailymotionBaseUrl}x9lanj4` },   // Part 24 - Ep 116 to 120 [6]
                         { start: 121, end: 125, url: `${dailymotionBaseUrl}x9ljvlo` },   // Part 25 - Ep 121 to 125 [7]
                         { start: 126, end: 130, url: `${dailymotionBaseUrl}x9ljvwo` },   // Part 26 - Ep 126 to 130 [8]
                         { start: 131, end: 135, url: `${dailymotionBaseUrl}x9lk40k` },   // Part 27 - Ep 131 to 135 [9]
                         { start: 141, end: 145, url: `${dailymotionBaseUrl}x9lk51k` },   // Part 29 - Ep 141 to 145 [10]
                         { start: 146, end: 146, url: `${dailymotionBaseUrl}x9e2fgu` },    // Episode 146 [11]
                         { start: 147, end: 147, url: `${dailymotionBaseUrl}x9eolxm` },    // Episode 147 [12]
                         { start: 149, end: 149, url: `${dailymotionBaseUrl}x9fm0ye` },    // Episode 149 [13]
                         { start: 150, end: 150, url: `${dailymotionBaseUrl}x9fzabm` },    // Episode 150 [14]
                         { start: 151, end: 151, url: `${dailymotionBaseUrl}x9gdrg0` },    // Episode 151 [15]
                         { start: 157, end: 157, url: `${dailymotionBaseUrl}x9is4wc` },    // Episode 157 [16]
                         { start: 160, end: 160, url: `${dailymotionBaseUrl}x9jw2a0` },    // Episode 160 [17]
                         { start: 161, end: 161, url: `${dailymotionBaseUrl}x9kctxq` },    // Episode 161 [18]
                         { start: 162, end: 162, url: `${dailymotionBaseUrl}x9ks0z0` },    // Episode 162 [19]
                         { start: 163, end: 163, url: `${dailymotionBaseUrl}x9l6gsa` },    // Episode 163
                         { start: 164, end: 164, url: `${dailymotionBaseUrl}x9ljqwu` },    // Episode 164 [20]
                         { start: 165, end: 165, url: `${dailymotionBaseUrl}x9lv9l4` },    // Episode 165 [21]
                         { start: 166, end: 166, url: `${dailymotionBaseUrl}x9m7m5a` }     // Episode 166 [22]
                       ],
                 rating: 8.9, status: 'Finished', studio: 'Shenman Entertainment', duration: '20 min per ep', country: 'China',
                 network: '', released: '2022-04-28', season: '2', type: 'ONA',
                 fansub: '3D Anime Official', tags: ['Fantasy', 'Magic', 'Adventure', 'Action']
             },
             {
                 id: 'd6', title: 'Soul Land 2', slug: 'soul-land-2',
                 subtitle: 'Action, Romance', description: 'The story continues with the next generation of spirit masters from Shrek Academy, facing new challenges and powerful enemies.', maxEpisodes: 250, latestEpisode: 53,
                 releaseTime: '6:00 PM',
                 img: 'images/Soul land 2.jpg.jpg',
                 episodeLinks: [
                     { start: 2, end: 2, url: `${dailymotionBaseUrl}x9j06dk` }, /* [2] */
                         { start: 3, end: 3, url: `${dailymotionBaseUrl}x9j2hsu` }, /* [3] */
                         { start: 10, end: 10, url: `${dailymotionBaseUrl}x91nrgs` }, /* [4] */
                         { start: 15, end: 21, url: `${dailymotionBaseUrl}x8roaqq` }, /* [5] */
                         { start: 44, end: 44, url: `${dailymotionBaseUrl}x8wpbuk` }, /* [6] */
                         { start: 60, end: 65, url: `${dailymotionBaseUrl}x99ev2c` }, /* [7] */
                         { start: 78, end: 78, url: `${dailymotionBaseUrl}x9ac0n6` }, /* [8] */
                         { start: 84, end: 84, url: `${dailymotionBaseUrl}x9ciy4s` }, /* [9] */
                         { start: 90, end: 90, url: `${dailymotionBaseUrl}x9g3bww` }, /* [10] */
                         { start: 91, end: 91, url: `${dailymotionBaseUrl}x9fpvk0` }, /* [11] */
                         { start: 94, end: 94, url: `${dailymotionBaseUrl}x9gxww8` }, /* [12] */
                         { start: 95, end: 95, url: `${dailymotionBaseUrl}x9hbcu6` }, /* [13] */
                         { start: 96, end: 96, url: `${dailymotionBaseUrl}x9hpz6k` }, /* [14] */
                         { start: 99, end: 99, url: `${dailymotionBaseUrl}x9ihcd8` }, /* [15] */
                         { start: 100, end: 100, url: `${dailymotionBaseUrl}x9j7yn2` }, /* [16] */
                         { start: 102, end: 102, url: `${dailymotionBaseUrl}x9jm3g0` }, /* [17] */
                         { start: 104, end: 104, url: `${dailymotionBaseUrl}x9kwqtm` }, /* [18] */
                         { start: 105, end: 105, url: `${dailymotionBaseUrl}x9laue0` }, /* [19] */
                         { start: 106, end: 106, url: `${dailymotionBaseUrl}x9ln4ns` }, /* [20] */
                         { start: 107, end: 107, url: `${dailymotionBaseUrl}x9lzh7c` } /* [21] */
                         
                 ],
                 rating: 9.1, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
                 network: '', released: '2023-06-24', season: '1', type: 'ONA',
                 fansub: 'Official Sub', tags: ['Action', 'Romance', 'Fantasy', 'Adventure']
             },
             {
                 id: 'd7', title: 'Jade Dynasty', slug: 'jade-dynasty',
                 subtitle: 'Xianxia, Romance', description: 'A kind-hearted boy, Zhang Xiaofan, gets caught in a conflict between good and evil, discovering a world of powerful martial arts and romance.', maxEpisodes: 26, latestEpisode: 26,
                 releaseTime: '6:00 PM',
                 img: 'images/Jade dynasty.jpg.jpg',
                 episodeLinks: [
                     { start: 2,   end: 2,   url: `${dailymotionBaseUrl}x95710a` }, // Single Episode [3]
                     { start: 3,   end: 3,   url: `${dailymotionBaseUrl}x95710c` }, // Single Episode [3]
                     { start: 4,   end: 4,   url: `${dailymotionBaseUrl}x95iohi` }, // Single Episode [2]
                     { start: 5,   end: 5,   url: `${dailymotionBaseUrl}x95iohj` }, // Single Episode [3]
                     { start: 6,   end: 6,   url: `${dailymotionBaseUrl}x95ipx8` }, // Single Episode [3]
                     { start: 7,   end: 7,   url: `${dailymotionBaseUrl}x95ipx9` }, // Single Episode
                     { start: 8,   end: 8,   url: `${dailymotionBaseUrl}x95ipxa` }, // Single Episode [1, 2]
                     { start: 9,   end: 9,   url: `${dailymotionBaseUrl}x95ipxb` }, // Single Episode [1]
                     { start: 10,  end: 10,  url: `${dailymotionBaseUrl}x95xpag` }, // Single Episode [3, 4]
                     { start: 11,  end: 11,  url: `${dailymotionBaseUrl}x95ipxc` }, // Single Episode [1]
                     { start: 12,  end: 12,  url: `${dailymotionBaseUrl}x95ipxd` }, // Single Episode [3, 5]
                     { start: 13,  end: 13,  url: `${dailymotionBaseUrl}x95ipxe` }, // Single Episode [1, 3, 5]
                     { start: 14,  end: 14,  url: `${dailymotionBaseUrl}x95ipxf` }, // Single Episode [1, 3, 5]
                     { start: 15,  end: 15,  url: `${dailymotionBaseUrl}x95ipxg` }, // Single Episode [5, 6]
                     { start: 16,  end: 16,  url: `${dailymotionBaseUrl}x95ipxh` }, // Single Episode [1, 3, 5, 6]
                     { start: 17,  end: 17,  url: `${dailymotionBaseUrl}x95ipxi` }, // Single Episode [1, 3, 5, 6]
                     { start: 18,  end: 18,  url: `${dailymotionBaseUrl}x95ipxj` }, // Single Episode [3, 5, 6]
                     { start: 19,  end: 19,  url: `${dailymotionBaseUrl}x95mt2y` }, // Single Episode [1, 6, 7]
                     { start: 20,  end: 20,  url: `${dailymotionBaseUrl}x95mt2z` }, // Single Episode [3, 5, 6, 7]
                     { start: 21,  end: 21,  url: `${dailymotionBaseUrl}x95xpag` }, // Single Episode [3, 4, 5, 6]
                     { start: 22,  end: 22,  url: `${dailymotionBaseUrl}x95xpah` }, // Single Episode [5, 6]
                     { start: 23,  end: 23,  url: `${dailymotionBaseUrl}x95xpai` }, // Single Episode [5, 6]
                     { start: 24,  end: 24,  url: `${dailymotionBaseUrl}x95xpaj` }, // Single Episode [6, 8, 9]
                     { start: 25,  end: 25,  url: `${dailymotionBaseUrl}x95xpak` }, // Single Episode [4, 5, 6, 9]
                     { start: 26,  end: 26,  url: `${dailymotionBaseUrl}x95xpal` }, // Single Episode [5, 6, 9, 10]
                     { start: 27,  end: 27,  url: `${dailymotionBaseUrl}x8vzqh8` }, // Single Episode [6, 9, 11, 12, 13]
                     { start: 28,  end: 28,  url: `${dailymotionBaseUrl}x8vxbhe` }, // Single Episode [3, 6, 11, 12, 14, 15]
                     { start: 29,  end: 29,  url: `${dailymotionBaseUrl}x8hczdm` }, // Single Episode [6, 9, 11, 12, 14, 16]
                     { start: 30,  end: 30,  url: `${dailymotionBaseUrl}x9l8fkm` }, // Single Episode [6, 11, 12, 16, 17]
                     { start: 31,  end: 31,  url: `${dailymotionBaseUrl}x9l87yy` }, // Single Episode [6, 8, 12, 14, 18]
                     { start: 32,  end: 32,  url: `${dailymotionBaseUrl}x9l899a` }, // Single Episode [6, 8, 11, 12, 14, 19]
                     { start: 33,  end: 33,  url: `${dailymotionBaseUrl}x9l89e2` }, // Single Episode [6, 8, 11, 12, 20, 21]
                     { start: 34,  end: 34,  url: `${dailymotionBaseUrl}x92xw90` }, // Single Episode [6, 8, 11, 12, 14, 16, 22]
                     { start: 35,  end: 35,  url: `${dailymotionBaseUrl}x8yb8w0` }, // Single Episode [6, 8, 11, 12, 14, 23]
                     { start: 36,  end: 36,  url: `${dailymotionBaseUrl}x9bv3ie` }, // Single Episode [5, 6, 8, 12, 20]
                     { start: 37,  end: 37,  url: `${dailymotionBaseUrl}x8z045q` }, // Single Episode [6, 8, 11, 12, 14, 20]
                     { start: 38,  end: 38,  url: `${dailymotionBaseUrl}x9bv4p4` }, // Single Episode [8, 12, 20]
                     { start: 39,  end: 39,  url: `${dailymotionBaseUrl}x8zufmw` }, // Single Episode [8, 12, 14, 20]
                     { start: 40,  end: 40,  url: `${dailymotionBaseUrl}x90cvx8` }, // Single Episode [16, 20]
                     { start: 41,  end: 41,  url: `${dailymotionBaseUrl}x95swbu` }, // Single Episode [13, 22, 24, 25]
                     { start: 42,  end: 42,  url: `${dailymotionBaseUrl}x95swl4` }, // Single Episode [8, 13, 15, 22, 24, 25]
                     { start: 43,  end: 43,  url: `${dailymotionBaseUrl}x92xw90` }, // Single Episode [13, 22, 24, 25]
                     { start: 44,  end: 44,  url: `${dailymotionBaseUrl}x92xw90` }, // Single Episode [8, 13, 22]
                     { start: 45,  end: 45,  url: `${dailymotionBaseUrl}x92xw90` }, // Single Episode [8, 13, 22]
                     { start: 46,  end: 46,  url: `${dailymotionBaseUrl}x92xw90` }, // Single Episode [13, 15, 16, 22]
                     { start: 47,  end: 47,  url: `${dailymotionBaseUrl}x93e2jg` }, // Single Episode [3, 13, 24, 25, 26]
                     { start: 48,  end: 48,  url: `${dailymotionBaseUrl}x93duuo` }, // Single Episode [13, 15, 27, 28]
                     { start: 49,  end: 49,  url: `${dailymotionBaseUrl}x93duuo` }, // Single Episode [13, 15, 24, 25, 27, 28]
                     { start: 50,  end: 50,  url: `${dailymotionBaseUrl}x93swbu` }, // Single Episode [13, 15, 24, 25]
                     { start: 51,  end: 51,  url: `${dailymotionBaseUrl}x93swl4` }, // Single Episode [13, 15, 24, 25, 29]
                     { start: 52,  end: 52,  url: `${dailymotionBaseUrl}x93duuo` }, // Single Episode [3, 13, 15, 24, 25, 30, 31]
                     { start: 53,  end: 53,  url: `${dailymotionBaseUrl}x9l891e` }, // Single Episode [21, 32, 33]
                     { start: 54,  end: 54,  url: `${dailymotionBaseUrl}x9l89e2` }, // Single Episode [21, 32]
                     { start: 55,  end: 55,  url: `${dailymotionBaseUrl}x9l8fkm` }, // Single Episode [17, 21, 32]
                     { start: 56,  end: 60,  url: `${dailymotionBaseUrl}x9kalb0` }, // Compilation Video
                     { start: 61,  end: 65,  url: `${dailymotionBaseUrl}x9kfp9o` }, // Compilation Video
                     { start: 66,  end: 70,  url: `${dailymotionBaseUrl}x9khb3m` }, // Compilation Video
                     { start: 71,  end: 75,  url: `${dailymotionBaseUrl}x9kjva0` }, // Compilation Video
                     { start: 76,  end: 78,  url: `${dailymotionBaseUrl}x9kjva2` }, // Compilation Video
                 ],
                 rating: 8.8, status: 'Ongoing', studio: 'Cloud Art', duration: '22 min per ep', country: 'China',
                 network: '', released: '2022-11-02', season: '1', type: 'ONA',
                 fansub: 'Subber Team', tags: ['Xianxia', 'Romance', 'Action']
             },
             {
                 id: 'd8', title: 'Renegade Immortal', slug: 'renegade-immortal',
                 subtitle: 'Xianxia, Action', description: 'Follow Wang Lin as he defies his humble origins and a lack of talent to walk the path of an immortal, facing betrayal and hardship along the way.', maxEpisodes: 98, latestEpisode: 98,
                 releaseTime: '6:00 PM',
                 img: 'images/Renegadeimmortal.jpg.jpg',
                 episodeLinks: [ 
                     // Example of adding episode 1 back
                     { start: 1,   end: 1,   url: `${dailymotionBaseUrl}x9mrp52` }, // Placeholder for Ep 1
                     { start: 2,   end: 2,   url: `${dailymotionBaseUrl}x9mrp4w`},
                     { start: 3,   end: 3,   url: `${dailymotionBaseUrl}x9mrp4y`},
                     { start: 4,   end: 4,  url: `${dailymotionBaseUrl}x9mrp4u` },   // Episodes 6-10 (4K Multi-Sub) [2]
                     { start: 5,  end: 5,  url: `${dailymotionBaseUrl}x9mrp50` },   // Episodes 11-15 (4K Multi-Sub) [3]
                     { start: 6,  end: 6,  url: `${dailymotionBaseUrl}x9mt6fa` },   // Episodes 16-20 (4K Multi-Sub) [4]
                     { start: 7,  end: 7,  url: `${dailymotionBaseUrl}x9mt6fc` },   // Episodes 38-43 (Compilation) [5]
                     { start: 8,  end: 8,  url: `${dailymotionBaseUrl}x9h15x6` },   // Episode 60 [6]
                     { start: 9,  end: 9,  url: `${dailymotionBaseUrl}x9c4jgm` },   // Episodes 61-65 (Compilation) [7]
                     { start: 10,  end: 10,  url: `${dailymotionBaseUrl}x9c4jgm` },
                     { start: 11,  end: 11,  url: `${dailymotionBaseUrl}x9n0500` },   // Episodes 66-70 (Compilation) [8]
                     { start: 12, end: 12, url: `${dailymotionBaseUrl}x9n0mu4` },
                        { start: 13, end: 13, url: `${dailymotionBaseUrl}` },
                        { start: 14, end: 14, url: `${dailymotionBaseUrl}` },
                        { start: 15, end: 15, url: `${dailymotionBaseUrl}` },
                        { start: 16, end: 16, url: `${dailymotionBaseUrl}` },
                        { start: 17, end: 17, url: `${dailymotionBaseUrl}` },
                        { start: 18, end: 18, url: `${dailymotionBaseUrl}` },
                        { start: 19, end: 19, url: `${dailymotionBaseUrl}` },
                        { start: 20, end: 20, url: `${dailymotionBaseUrl}` },
                        { start: 21, end: 21, url: `${dailymotionBaseUrl}` },
                        { start: 22, end: 22, url: `${dailymotionBaseUrl}` },
                        { start: 23, end: 23, url: `${dailymotionBaseUrl}` },
                        { start: 24, end: 24, url: `${dailymotionBaseUrl}` },
                        { start: 25, end: 25, url: `${dailymotionBaseUrl}` },
                        { start: 26, end: 26, url: `${dailymotionBaseUrl}` },
                        { start: 27, end: 27, url: `${dailymotionBaseUrl}` },
                        { start: 28, end: 28, url: `${dailymotionBaseUrl}` },
                        { start: 29, end: 29, url: `${dailymotionBaseUrl}` },
                        { start: 30, end: 30, url: `${dailymotionBaseUrl}` },
                        { start: 31, end: 31, url: `${dailymotionBaseUrl}` },
                        { start: 32, end: 32, url: `${dailymotionBaseUrl}` },
                        { start: 33, end: 33, url: `${dailymotionBaseUrl}` },
                        { start: 34, end: 34, url: `${dailymotionBaseUrl}` },
                        { start: 35, end: 35, url: `${dailymotionBaseUrl}` },
                        { start: 36, end: 36, url: `${dailymotionBaseUrl}` },
                        { start: 37, end: 37, url: `${dailymotionBaseUrl}` },
                        { start: 38, end: 38, url: `${dailymotionBaseUrl}` },
                        { start: 39, end: 39, url: `${dailymotionBaseUrl}` },
                        { start: 40, end: 40, url: `${dailymotionBaseUrl}` },
                        { start: 41, end: 41, url: `${dailymotionBaseUrl}` },
                        { start: 42, end: 42, url: `${dailymotionBaseUrl}` },
                        { start: 43, end: 43, url: `${dailymotionBaseUrl}` },
                        { start: 44, end: 44, url: `${dailymotionBaseUrl}` },
                        { start: 45, end: 45, url: `${dailymotionBaseUrl}` },
                        { start: 46, end: 46, url: `${dailymotionBaseUrl}` },
                        { start: 47, end: 47, url: `${dailymotionBaseUrl}` },
                        { start: 48, end: 48, url: `${dailymotionBaseUrl}` },
                        { start: 49, end: 49, url: `${dailymotionBaseUrl}` },
                        { start: 50, end: 50, url: `${dailymotionBaseUrl}` },
                        { start: 51, end: 51, url: `${dailymotionBaseUrl}` },
                        { start: 52, end: 52, url: `${dailymotionBaseUrl}` },
                        { start: 53, end: 53, url: `${dailymotionBaseUrl}` },
                        { start: 54, end: 54, url: `${dailymotionBaseUrl}` },
                        { start: 55, end: 55, url: `${dailymotionBaseUrl}` },
                        { start: 56, end: 56, url: `${dailymotionBaseUrl}` },
                        { start: 57, end: 57, url: `${dailymotionBaseUrl}` },
                        { start: 58, end: 58, url: `${dailymotionBaseUrl}` },
                        { start: 59, end: 59, url: `${dailymotionBaseUrl}` },
                        { start: 60, end: 60, url: `${dailymotionBaseUrl}` },
                        { start: 61, end: 61, url: `${dailymotionBaseUrl}` },
                        { start: 62, end: 62, url: `${dailymotionBaseUrl}` },
                        { start: 63, end: 63, url: `${dailymotionBaseUrl}` },
                        { start: 64, end: 64, url: `${dailymotionBaseUrl}` },
                        { start: 65, end: 65, url: `${dailymotionBaseUrl}` },
                        { start: 66, end: 66, url: `${dailymotionBaseUrl}` },
                        { start: 67, end: 67, url: `${dailymotionBaseUrl}` },
                        { start: 68, end: 68, url: `${dailymotionBaseUrl}` },
                        { start: 69, end: 69, url: `${dailymotionBaseUrl}` },
                        { start: 70, end: 70, url: `${dailymotionBaseUrl}` },
                        { start: 71, end: 71, url: `${dailymotionBaseUrl}` },
                        { start: 72, end: 72, url: `${dailymotionBaseUrl}` },
                        { start: 73, end: 73, url: `${dailymotionBaseUrl}` },
                        { start: 74, end: 74, url: `${dailymotionBaseUrl}` },
                        { start: 75, end: 75, url: `${dailymotionBaseUrl}` },
                        { start: 76, end: 76, url: `${dailymotionBaseUrl}` },
                        { start: 77, end: 77, url: `${dailymotionBaseUrl}` },
                        { start: 78, end: 78, url: `${dailymotionBaseUrl}` },
                        { start: 79, end: 79, url: `${dailymotionBaseUrl}` },
                        { start: 80, end: 80, url: `${dailymotionBaseUrl}` },
                        { start: 81, end: 81, url: `${dailymotionBaseUrl}` },
                        { start: 82, end: 82, url: `${dailymotionBaseUrl}` },
                        { start: 83, end: 83, url: `${dailymotionBaseUrl}` },
                        { start: 84, end: 84, url: `${dailymotionBaseUrl}` },
                        { start: 85, end: 85, url: `${dailymotionBaseUrl}` },
                        { start: 86, end: 86, url: `${dailymotionBaseUrl}` },
                        { start: 87, end: 87, url: `${dailymotionBaseUrl}` },
                        { start: 88, end: 88, url: `${dailymotionBaseUrl}` },
                        { start: 89, end: 89, url: `${dailymotionBaseUrl}` },
                        { start: 90, end: 90, url: `${dailymotionBaseUrl}` },
                        { start: 91, end: 91, url: `${dailymotionBaseUrl}` },
                        { start: 92, end: 92, url: `${dailymotionBaseUrl}` },
                        { start: 93, end: 93, url: `${dailymotionBaseUrl}` },
                        { start: 94, end: 94, url: `${dailymotionBaseUrl}` },
                        { start: 95, end: 95, url: `${dailymotionBaseUrl}` },
                        { start: 96, end: 96, url: `${dailymotionBaseUrl}` },
                        { start: 97, end: 97, url: `${dailymotionBaseUrl}` },
                        { start: 98, end: 98, url: `${dailymotionBaseUrl}` },

                            // Episode 95 [15]
                 ],
                 rating: 9.4, status: 'Ongoing', studio: 'Studio DRE', duration: '20 min per ep', country: 'China',
                 network: '', released: '2023-11-25', season: '1', type: 'ONA',
                 fansub: 'Lucifer Donghua', tags: ['Xianxia', 'Action', 'Cultivation']
             },
             {
                 id: 'd9', title: 'Legend Of Xianwu', slug: 'legend-of-xianwu',
                 subtitle: 'E-Sports, Action', description: 'A top-tier professional e-sports player is unexpectedly reborn and must use his gaming knowledge to navigate a new world of martial arts.', maxEpisodes: 121, latestEpisode: 121,
                 img: 'images/Legend of xianwu.jpg.jpg',
                 episodeLinks: [
                         {start: 1, end: 100, url: "https://www.youtube.com/embed/jVRUxwn5mFM?si=pOs8-qaaHfEcK7Yn"},
                         {start: 101, end: 115, url: "https://www.youtube.com/embed/LSJo_I6QrVE?si=mYJBWC02_R8Vvs4O"},
                         {start: 116, end: 116, url: "https://www.youtube.com/embed/3HveTMvo3dU?si=UYaRH4cH0kaIBOhH"},
                         {start: 117, end: 117, url: "https://www.youtube.com/embed/5T5wigSdQAM?si=4opCifh9vyIh-7AL"},
                         {start: 118, end: 118, url: "https://www.youtube.com/embed/y8K5mStTAUM?si=c6v8Oyp5A4m84_Ow"},
                         {start: 119, end: 119, url: "https://www.youtube.com/embed/RdOcWeWMSNE?si=-TltTO0fol2kSoXQ"},
                         {start: 120, end: 120, url: "https://www.youtube.com/embed/Vv2uo_pPQ9g?si=qoHwgVuLRsdFtat6"},
                         {start: 121, end: 121, url: "https://www.youtube.com/embed/Rr5Pfm4MYQ8?si=62dixCj7nsRb77Um"},
                          {start: 122, end: 122, url: ""},
                          {start: 123, end: 123, url: ""},
                          {start: 124, end: 124, url: ""},
                         
                 ],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '24 min per ep', country: 'China',
                 network: '', released: '2017-04-27', season: '2', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['E-Sports', 'Action', 'Comedy'],
             },
             {
                 id: 'd10', title: 'Soul Land 1', slug: 'soul-land-1',
                 subtitle: 'Fantasy, Action', description: 'Tang San, a disciple of the Tang Sect, is reborn into a world of spirit masters. With memories of his past life, he strives to become the strongest.', maxEpisodes: 263, latestEpisode: 263,
                 img: 'images/Sou land 1.jpg.jpg',
                 episodeLinks: [
                     { start: 1,   end: 5,   url: `${dailymotionBaseUrl}x8rfvh7` }, // Uploader: Donghua Addict
                         { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x8rfz8c` }, // Uploader: Donghua & Anime World
                         { start: 11,  end: 15,  url: `${dailymotionBaseUrl}x8rg21d` }, // Uploader: Donghua Addict
                         { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x8rg8br` }, // Uploader: Donghua Addict
                         { start: 21,  end: 26,  url: `${dailymotionBaseUrl}x8rgeqf` }, // Uploader: Donghua Addict
                         { start: 27,  end: 31,  url: `${dailymotionBaseUrl}x8rgjmu` }, // Uploader: Donghua Addict
                         { start: 32,  end: 36,  url: `${dailymotionBaseUrl}x8rgqj2` }, // Uploader: Donghua Addict
                         { start: 37,  end: 41,  url: `${dailymotionBaseUrl}x8rgw9q` }, // Uploader: Donghua Addict
                         { start: 42,  end: 46,  url: `${dailymotionBaseUrl}x8rh29s` }, // Uploader: Donghua Addict
                         { start: 47,  end: 51,  url: `${dailymotionBaseUrl}x8rh7zu` }, // Uploader: Donghua Addict
                         { start: 52,  end: 56,  url: `${dailymotionBaseUrl}x8rhf5r` }, // Uploader: Donghua Addict
                         { start: 57,  end: 61,  url: `${dailymotionBaseUrl}x8rhn3h` }, // Uploader: Donghua Addict
                         { start: 62,  end: 66,  url: `${dailymotionBaseUrl}x8rhw2l` }, // Uploader: Donghua Addict
                         { start: 67,  end: 71,  url: `${dailymotionBaseUrl}x8ri80q` }, // Uploader: Donghua Addict
                         { start: 72,  end: 76,  url: `${dailymotionBaseUrl}x8rifwe` }, // Uploader: Donghua Addict
                         { start: 77,  end: 81,  url: `${dailymotionBaseUrl}x8rin84` }, // Uploader: Donghua Addict
                         { start: 82,  end: 87,  url: `${dailymotionBaseUrl}x8rivtk` }, // Uploader: Donghua Addict
                         { start: 88,  end: 93,  url: `${dailymotionBaseUrl}x8rj3y9` }, // Uploader: Donghua Addict
                         { start: 94,  end: 99,  url: `${dailymotionBaseUrl}x8rjc56` }, // Uploader: Donghua Addict
                         { start: 100, end: 105, url: `${dailymotionBaseUrl}x8rjjv6` }, // Uploader: Donghua Addict
                         { start: 106, end: 111, url: `${dailymotionBaseUrl}x8rjs7s` }, // Uploader: Donghua Addict
                         { start: 112, end: 117, url: `${dailymotionBaseUrl}x8rk03c` }, // Uploader: Donghua Addict
                         { start: 118, end: 123, url: `${dailymotionBaseUrl}x8rk7ac` }, // Uploader: Donghua Addict
                         { start: 124, end: 129, url: `${dailymotionBaseUrl}x8rkf5a` }, // Uploader: Donghua Addict
                         { start: 130, end: 135, url: `${dailymotionBaseUrl}x8rknex` }, // Uploader: Donghua Addict
                         { start: 136, end: 141, url: `${dailymotionBaseUrl}x8rkw6r` }, // Uploader: Donghua Addict
                         { start: 142, end: 147, url: `${dailymotionBaseUrl}x8rl3r2` }, // Uploader: Donghua Addict
                         { start: 148, end: 153, url: `${dailymotionBaseUrl}x8rlbca` }, // Uploader: Donghua Addict
                         { start: 154, end: 159, url: `${dailymotionBaseUrl}x8rliqn` }, // Uploader: Donghua Addict
                         { start: 160, end: 165, url: `${dailymotionBaseUrl}x8rlqdq` }, // Uploader: Donghua Addict
                         { start: 166, end: 171, url: `${dailymotionBaseUrl}x8rm0w4` }, // Uploader: Donghua Addict
                         { start: 172, end: 177, url: `${dailymotionBaseUrl}x8rm8s4` }, // Uploader: Donghua Addict
                         { start: 178, end: 183, url: `${dailymotionBaseUrl}x8rmg3o` }, // Uploader: Donghua Addict
                         { start: 184, end: 189, url: `${dailymotionBaseUrl}x8rmo74` }, // Uploader: Donghua Addict
                         { start: 190, end: 197, url: `${dailymotionBaseUrl}x8rmw7l` }, // Uploader: Donghua Addict (8 episodes)
                         { start: 198, end: 204, url: `${dailymotionBaseUrl}x8rn3vo` }, // Uploader: Donghua Addict (7 episodes)
                         { start: 205, end: 214, url: `${dailymotionBaseUrl}x8rnbn2` }, // Uploader: Donghua Addict (10 episodes)
                         { start: 215, end: 222, url: `${dailymotionBaseUrl}x8rnj7n` }, // Uploader: Donghua Addict (8 episodes)
                         { start: 223, end: 229, url: `${dailymotionBaseUrl}x8rnr2g` }, // Uploader: Donghua Addict (7 episodes)
                         { start: 230, end: 236, url: `${dailymotionBaseUrl}x8ro00w` }, // Uploader: Donghua Addict (7 episodes)
                         { start: 237, end: 242, url: `${dailymotionBaseUrl}x8ro7np` }, // Uploader: Donghua Addict (6 episodes)
                         { start: 243, end: 248, url: `${dailymotionBaseUrl}x8rof6p` }, // Uploader: Donghua Addict (6 episodes)
                         { start: 249, end: 254, url: `${dailymotionBaseUrl}x8romw8` }, // Uploader: Donghua Addict (6 episodes)
                         { start: 255, end: 260, url: `${dailymotionBaseUrl}x8roux7` }, // Uploader: Donghua Addict (6 episodes)
                         { start: 261, end: 263, url: `${dailymotionBaseUrl}x8rp1hp` }, // Uploader: Donghua Addict (Final 3 episodes)
                 ],
                 rating: 9.6, status: 'Finished', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
                 network: '', released: '2018-01-20', season: '1', type: 'ONA',
                 fansub: 'Official Sub', tags: ['Fantasy', 'Action', 'Romance', 'Adventure'],
             },
             {
                 id: 'd11', title: 'The Immortal Doctor in Modern City', slug: 'immortal-doctor-in-modern-city',
                 subtitle: 'Modern, Fantasy', description: 'A powerful immortal doctor is reborn in the modern world. He uses his ancient skills to heal the sick, fight injustice, and navigate modern life.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/The Immortal  Doctor in Modern City.jpg.jpg',
                 episodeLinks: [
                     { start: 84, end: 84, url: `${dailymotionBaseUrl}x9m7fau` },
                     { start: 78, end: 78, url: `${dailymotionBaseUrl}x9ljvvo` },
                     { start: 44, end: 44, url: `${dailymotionBaseUrl}x9e230e` },
                     { start: 15, end: 15, url: `${dailymotionBaseUrl}x98ik0e` },
                 ],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
             },
             {
                 id: 'd12', title: 'Tales Of Herding God', slug: 'tales-of-herding-god',
                 subtitle: 'Fantasy, Adventure', description: 'Watch Tales Of Herding God, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Tale of herding God.jpg',
                 episodeLinks: [
                         { start: 2, end: 2, url: `${dailymotionBaseUrl}x983ozs` },
                         { start: 3, end: 3, url: `${dailymotionBaseUrl}x98i2rc` },
                         { start: 4, end: 4, url: `${dailymotionBaseUrl}x98wexy` },
                         { start: 5, end: 5, url: `${dailymotionBaseUrl}x99afgq` },
                         { start: 6, end: 6, url: `${dailymotionBaseUrl}x9a1coi` },
                         { start: 7, end: 7, url: `${dailymotionBaseUrl}x9a1ine` },
                         { start: 8, end: 8, url: `${dailymotionBaseUrl}x9aggd0` },
                         { start: 9, end: 9, url: `${dailymotionBaseUrl}x9atc8m` },
                         { start: 10, end: 10, url: `${dailymotionBaseUrl}x9b6ihe` },
                         { start: 11, end: 11, url: `${dailymotionBaseUrl}x9bhnnq` },
                         { start: 12, end: 12, url: `${dailymotionBaseUrl}x9btbjk` },
                         { start: 13, end: 13, url: `${dailymotionBaseUrl}x9c7gsg` },
                         { start: 14, end: 14, url: `${dailymotionBaseUrl}x9cm9r6` },
                         { start: 15, end: 15, url: `${dailymotionBaseUrl}x9d13x8` },
                         { start: 16, end: 16, url: `${dailymotionBaseUrl}x9de5oe` },
                         { start: 17, end: 17, url: `${dailymotionBaseUrl}x9ds5j0` },
                         { start: 18, end: 18, url: `${dailymotionBaseUrl}x9egz74` },
                         { start: 19, end: 19, url: `${dailymotionBaseUrl}x9egbno` },
                         { start: 20, end: 20, url: `${dailymotionBaseUrl}x9g4qh4` },
                         { start: 21, end: 21, url: `${dailymotionBaseUrl}x9ft2q2` },
                         { start: 22, end: 22, url: `${dailymotionBaseUrl}x9g6762` },
                         { start: 23, end: 23, url: `${dailymotionBaseUrl}x9glyiy` },
                         { start: 24, end: 24, url: `${dailymotionBaseUrl}x9h0nls` },
                         { start: 25, end: 25, url: `${dailymotionBaseUrl}x9hefcy` },
                         { start: 26, end: 26, url: `${dailymotionBaseUrl}x9hecwy` },
                         { start: 27, end: 27, url: `${dailymotionBaseUrl}x9i72ca` },
                         { start: 28, end: 28, url: `${dailymotionBaseUrl}x9ikibc` },
                         { start: 29, end: 29, url: `${dailymotionBaseUrl}x9ixx9m` },
                         { start: 30, end: 30, url: `${dailymotionBaseUrl}ID_UNAVAILABLE` },
                         { start: 31, end: 31, url: `${dailymotionBaseUrl}x9jpc0q` },
                         { start: 32, end: 32, url: `${dailymotionBaseUrl}ID_UNAVAILABLE` },
                         { start: 33, end: 33, url: `${dailymotionBaseUrl}ID_UNAVAILABLE` },
                         { start: 34, end: 34, url: `${dailymotionBaseUrl}x9kzkpq` },
                         { start: 35, end: 35, url: `${dailymotionBaseUrl}x9lemjy` },
                         { start: 36, end: 36, url: `${dailymotionBaseUrl}ID_UNAVAILABLE` },
                         { start: 37, end: 37, url: `${dailymotionBaseUrl}x9m1yhk` },
                         // Single Episode, Multi-sub [33]
                       ],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
             },
             {
                 id: 'd13', title: 'Sword Of Coming', slug: 'sword-of-coming',
                 subtitle: 'Xianxia, Adventure', description: 'Watch Sword Of Coming, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Sword of coming.jpg.jpg',
                 episodeLinks: [],
                 rating: 8.7, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Xianxia', 'Adventure', 'Action', 'Fantasy'],
             },
             {
                 id: 'd14', title: 'Ten Thousand World ( Wan Jie Du Zun ) Season-3', slug: 'ten-thousand-world-s3',
                 subtitle: 'Fantasy, Martial Arts', description: 'Watch Ten Thousand World ( Wan Jie Du Zun ) Season-3, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Ten Thousand World ( Wan Jie Du Zun ) Season-3.jpg.jpg',
                 episodeLinks: [],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '3', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Fantasy', 'Martial Arts', 'Action', 'Comedy'],
             },
             {
                 id: 'd15', title: 'Swallowing the Heavens', slug: 'swallowing-the-heavens',
                 subtitle: 'Xianxia, Fantasy', description: 'Watch Swallowing the Heavens, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Swallowing the Heavens.jpg.jpg',
                 episodeLinks: [],
                 rating: 8.6, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Xianxia', 'Fantasy', 'Action', 'Adventure'],
             },
             {
                 id: 'd16', title: 'My Senior Brother Is Too Strong', slug: 'my-senior-brother-is-too-strong',
                 subtitle: 'Comedy, Fantasy', description: 'Watch My Senior Brother Is Too Strong, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/My Senior Brother Is Too Strong.jpg.jpg',
                 episodeLinks: [],
                 rating: 8.4, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Comedy', 'Fantasy', 'Action', 'Cultivation'],
             },
             {
                 id: 'd17', title: 'Big Brother', slug: 'big-brother',
                 subtitle: 'Comedy, Xianxia', description: 'Watch Big Brother, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Big brother.jpg.jpg',
                 episodeLinks: [

                         { start: 1, end: 90, url: "https://www.youtube.com/embed/-CCwYkvb9xU?si=mmXBodQGp2KOyFwX"},
                 ],
                 rating: 8.8, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Comedy', 'Xianxia', 'Action', 'Fantasy'],
             },
               {
                 id: 'd18', title: 'Immortality', slug: 'immortality',
                 subtitle: 'Xianxia, Cultivation', description: 'Watch Immortality, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/immortality.jpg.jpg',
                 episodeLinks: [
                         {start: 1, end: 56, url : "https://www.youtube.com/embed/3rASPYMtXAM?si=KQNf-IT6AkcUHSoN"},
                 ],
                 rating: 9.0, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Xianxia', 'Cultivation', 'Action', 'Drama'],
             },
               {
                 id: 'd19', title: 'Ancient War Soul', slug: 'ancient-war-soul',
                 subtitle: 'Action, Fantasy', description: 'Watch Ancient War Soul, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/ancient War Soul.jpg.jpg',
                 episodeLinks: [],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Action', 'Fantasy', 'Adventure'],
             },
             {
                 id: 'd20', title: 'Dragon Prince Yuan', slug: 'dragon-prince-yuan',
                 subtitle: 'Fantasy, Action', description: 'Watch Dragon Prince Yuan, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Dragon prince yuan.jpg.jpg',
                 episodeLinks: [
                         { start: 1, end: 26, url: "https://www.youtube.com/embed/Juwq_9LHEDM?si=sD9x0Z4yvaLgDUsi"},
                 ],
                 rating: 8.9, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Fantasy', 'Action', 'Adventure', 'Xianxia'],
             },
             {
                 id: 'd21', title: 'A Record Of Mortal’s Journey To Immortality', slug: 'a-record-of-mortals-journey-to-immortality',
                 subtitle: 'Xianxia, Cultivation', description: 'Watch A Record Of Mortal’s Journey To Immortality, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/A Record Of Mortal’s Journey To Immortality.jpg.jpg',
                 episodeLinks: [],
                 rating: 9.3, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Xianxia', 'Cultivation', 'Action', 'Adventure'],
             },
               {
                 id: 'd22', title: 'Spirit Sword Sovereign (Ling Jian Zun)', slug: 'spirit-sword-sovereign',
                 subtitle: 'Martial Arts, Fantasy', description: 'Watch Spirit Sword Sovereign (Ling Jian Zun), a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
                 img: 'images/Spirit Sword Sovereign (Ling Jian Zun).jpg.jpg',
                 episodeLinks: [
                       { start: 1, end: 100, url: `${dailymotionBaseUrl}x8visji` }, // Part 4 of a multi-part compilation [4]
                       { start: 68, end: 68, url: `${dailymotionBaseUrl}x8e2ks0` }, // Standalone upload [5]
                       { start: 86, end: 88, url: `${dailymotionBaseUrl}x8lcld2` }, // Compilation of 3 episodes [6]
                       { start: 111, end: 120, url: `${dailymotionBaseUrl}x8vje8i` }, // Compilation of 10 episodes [7]
                       { start: 207, end: 207, url: `${dailymotionBaseUrl}x91hvje` }, // Titled with dual numbering: Season 4 Episode 107 (Overall Episode 207) [8]
                       { start: 285, end: 300, url: `${dailymotionBaseUrl}x8y3vxo` }, // Compilation of 16 episodes [9]
                       { start: 333, end: 348, url: `${dailymotionBaseUrl}x8y4n0c` }, // Compilation of 16 episodes [10]
                       { start: 349, end: 364, url: `${dailymotionBaseUrl}x8y4s62` }, // Compilation of 16 episodes [11]
                       { start: 498, end: 514, url: `${dailymotionBaseUrl}x9h6q1o` }, // Compilation of 17 episodes [12]
                       { start: 533, end: 533, url: `${dailymotionBaseUrl}x97w1ys` }, // Titled with dual numbering: S4 EP 433 (533) [13]
                       { start: 541, end: 541, url: `${dailymotionBaseUrl}x99emxm` }, // Titled with dual numbering: S4 EP 441 (541) [14]
                       { start: 549, end: 565, url: `${dailymotionBaseUrl}x9h6srg` }, // Compilation of 17 episodes [15]
                       { start: 555, end: 555, url: `${dailymotionBaseUrl}x9cc74k` }, // Titled with dual numbering: S4 EP 455 (555) [16]
                       { start: 560, end: 560, url: `${dailymotionBaseUrl}x9cxz1a` }, // Titled with dual numbering: S4 EP 460 (560) [17]
                       { start: 562, end: 562, url: `${dailymotionBaseUrl}x9db60k` }, // Titled with dual numbering: S4 EP 462 (562) [18]
                       { start: 566, end: 578, url: `${dailymotionBaseUrl}x9h8qsw` }, // Compilation of 13 episodes [19]
                       { start: 586, end: 586, url: `${dailymotionBaseUrl}x9hpryw` } // Standalone upload [20];
                 ],
                 rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                 network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                 fansub: 'Anime Fans', tags: ['Martial Arts', 'Fantasy', 'Action', 'Comedy'],
             },
               {
                          id: 'd23',
                          title: 'Wealth and Wonder',
                          slug: 'wealth-and-wonder',
                          subtitle: 'Xianxia, Cultivation',
                          description: 'Enter the world of Wealth and Wonder, where a humble cultivator dares to challenge fate and ascend the heavens. A thrilling Xianxia journey filled with power, destiny, and mystic adventure.',
                          maxEpisodes: 24,
                          latestEpisode: 24,
                          img: 'images/wealth and wonder.jpg',
                          episodeLinks: [
                            { start: 1, end: 1, url: `${dailymotionBaseUrl}x9mmv10` },
                            {start: 2, end: 2 , url: `${dailymotionBaseUrl}x9mn0t4` },
                            {start: 3, end: 3 , url: `${dailymotionBaseUrl}x9mn4gc` },
                            {start: 4, end: 4 , url: `${dailymotionBaseUrl}x9mn0sy` },
                            {start: 5, end: 5 , url: `${dailymotionBaseUrl}x9mn0t0` },
                                  
                          ],
                          rating: 9.3,
                          status: 'Ongoing',
                          studio: 'G.CMay Animation & Film',
                          duration: '26 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2025',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Xianxia', 'Cultivation', 'Action', 'Adventure']
                     },
                {
                          id: 'd24',
                          title: 'Ten Thousand Years of Refining Qi',
                          slug: 'ten-thousand-years-of-refining-qi',
                          subtitle: 'Fantasy, Cultivation',
                          description: 'Su Yu has cultivated in solitude for ten thousand years. When he finally steps into the world, his power shocks all realms. Witness the birth of a legend in this epic tale of dominance and destiny.',
                          maxEpisodes: 40,
                          latestEpisode: 40,
                          img: 'images/Ten thousand year of refining qi.jpg',
                          episodeLinks: [
                            // Add episode links here
                          ],
                          rating: 9.0,
                          status: 'Ongoing',
                          studio: 'G.CMay Animation & Film',
                          duration: '18 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2024-12-01',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Fantasy', 'Cultivation', 'Action', 'Drama']
                        },
                          {
                          id: 'd25',
                          title: 'Against the Gods',
                          slug: 'against-the-gods',
                          subtitle: 'Action, Fantasy',
                          description: 'Yun Che, armed with a forbidden treasure, defies fate and overturns the heavens. A story of revenge, romance, and unimaginable power.',
                          maxEpisodes: 60,
                          latestEpisode: 60,
                          img: 'images/Against the Gods.jpg',
                          episodeLinks: [],
                          rating: 9.2,
                          status: 'Ongoing',
                          studio: 'Foch Film',
                          duration: '20 min per ep',
                          country: 'China',
                          network: '',
                          released: '2024',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Action', 'Fantasy', 'Revenge', 'Romance']
                        },
                           {
                          id: 'd26',
                          title: 'Buliang',
                          slug: 'buliang',
                          subtitle: 'Supernatural, Action',
                          description: 'In a world of secrets and clans, an ordinary student becomes entangled in mystical powers and ancient rivalries. Buliang blends modern life with the supernatural.',
                          maxEpisodes: 26,
                          latestEpisode: 26,
                          img: 'images/Bu liang.jpg',
                          episodeLinks: [],
                          rating: 8.4,
                          status: 'Completed',
                          studio: 'BeDream Studio',
                          duration: '20 min per ep',
                          country: 'China',
                          network: '',
                          released: '2022',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Supernatural', 'Modern Cultivation', 'Mystery']
                        },
                       {
                          id: 'd27',
                          title: 'Apotheosis',
                          slug: 'apotheosis',
                          subtitle: 'Cultivation, Fantasy',
                          description: 'Once a noble, Luo Zheng is reduced to slavery. Through a mysterious book, he embarks on a path to ultimate power and divine ascension.',
                          maxEpisodes: 80,
                          latestEpisode: 80,
                          img: 'images/apotheosis.jpg',
                          episodeLinks: [
                                 { start: 1, end: 104, url: 'https://www.youtube.com/embed/N5qdNftWvBs?si=k2-0TCwRr5G_TzKM' },

                          ],
                          rating: 9.1,
                          status: 'Ongoing',
                          studio: 'Foch Film',
                          duration: '18 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2023',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Cultivation', 'Action', 'Adventure', 'Revenge']
                        }, 
                        {
                          id: 'd28',
                          title: 'Glorious Revenge of Ye Feng',
                          slug: 'glorious-revenge-of-ye-feng',
                          subtitle: 'Cultivation, Revenge',
                          description: 'Ye Feng was betrayed and left for dead. But fate grants him another chance. Watch him rise and exact revenge on those who wronged him.',
                          maxEpisodes: 36,
                          latestEpisode: 36,
                          img: 'images/Glorious Revenge of Ye Feng.jpg',
                          episodeLinks: [],
                          rating: 8.8,
                          status: 'Ongoing',
                          studio: 'Ruo Hong Culture',
                          duration: '22 min per ep',
                          country: 'China',
                          network: 'iQIYI',
                          released: '2025',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Revenge', 'Cultivation', 'Action', 'Drama']
                        }, 
                         {
                          id: 'd29',
                          title: 'Peerless Battle Spirit',
                          slug: 'peerless-battle-spirit',
                          subtitle: 'Action, Cultivation',
                          description: 'Qin Nan awakens a low-level martial spirit, only to break all cultivation rules. Watch his fierce rise as he becomes a peerless powerhouse.',
                          maxEpisodes: 52,
                          latestEpisode: 52,
                          img: 'images/Peerless Battle Spirit (Jueshi Zhan Hun).jpg',
                          episodeLinks: [],
                          rating: 9.0,
                          status: 'Ongoing',
                          studio: 'Ruo Hong Culture',
                          duration: '20 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2023',
                          season: '2',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Cultivation', 'Action', 'Martial Arts']
                        },
                        {
                          id: 'd30',
                          title: 'Martial Universe',
                          slug: 'martial-universe',
                          subtitle: 'Fantasy, Action',
                          description: 'Lin Dong discovers a mysterious talisman and enters a world of cultivation, where battles and ancient forces shape destiny itself.',
                          maxEpisodes: 64,
                          latestEpisode: 64,
                          img: 'images/Martial Universe.jpg',
                          episodeLinks: [],
                          rating: 8.9,
                          status: 'Completed',
                          studio: 'Shanghai Motion Magic',
                          duration: '22 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2022',
                          season: '2',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Fantasy', 'Action', 'Adventure', 'Cultivation']
                        },
                          {
                          id: 'd31',
                          title: 'Nezha Reborn',
                          slug: 'nezha-reborn',
                          subtitle: 'Action, Mythology',
                          description: 'In a cyberpunk future, Nezha is reborn into a new world full of conspiracies and ancient enemies. Can he awaken his true power in time?',
                          maxEpisodes: 1,
                          latestEpisode: 1,
                          img: 'images/nezha reborn.jpg',
                          episodeLinks: [
                                  {start: 1, end: 1, url: `${dailymotionBaseUrl}x9mpdi0`},
                                  
                          ],
                          rating: 8.7,
                          status: 'Completed',
                          studio: 'Light Chaser Animation',
                          duration: '1 hr 57 min',
                          country: 'China',
                          network: 'Netflix',
                          released: '2021',
                          season: 'Movie',
                          type: 'Movie',
                          fansub: 'Netflix Subteam',
                          tags: ['Mythology', 'Action', 'Reincarnation', 'Sci-Fi']
                        },
                       {
                          id: 'd32',
                          title: 'World of Immortal',
                          slug: 'world-of-immortal',
                          subtitle: 'Fantasy, Cultivation',
                          description: 'Step into a mystical world where ancient clans, celestial secrets, and fierce martial paths intertwine. Only the strongest can claim immortality.',
                          maxEpisodes: 30,
                          latestEpisode: 30,
                          img: 'images/World of immortal.jpg',
                          episodeLinks: [

                                  {start: 1, end: 20, url: "https://www.youtube.com/embed/rTGTV1xMLY0?si=5QyZdBb-8jjFs2gf"},
                          ],
                          rating: 8.6,
                          status: 'Ongoing',
                          studio: 'Youku Originals',
                          duration: '20 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2024',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Cultivation', 'Fantasy', 'Clans', 'Immortality']
                        },
                {
                          id: 'd33',
                          title: 'The Island of Jiliang',
                          slug: 'the-island-of-jiliang',
                          subtitle: 'Survival, Fantasy',
                          description: 'Trapped on a mystical island, strangers must survive ancient creatures and unravel the dark secrets hidden within Jiliang.',
                          maxEpisodes: 12,
                          latestEpisode: 12,
                          img: 'images/the island of jiliang.jpg',
                          episodeLinks: [
                                  {start: 1, end: 30, url: "https://www.youtube.com/embed/DKzYGrr2V6w?si=7I2We8eVfA-huhMy" },
                          ],
                          rating: 8.3,
                          status: 'Completed',
                          studio: '',
                          duration: '24 min per ep',
                          country: 'China',
                          network: 'Tencent',
                          released: '2022',
                          season: '1',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Fantasy', 'Survival', 'Mystery', 'Adventure']
                        },
                {
                          id: 'd34',
                          title: 'The Legend of Sword Domain Season 3',
                          slug: 'legend-of-sword-domain-s3',
                          subtitle: 'Action, Cultivation',
                          description: 'Season 3 continues the journey of Ye Xuan, whose sword path cuts through heavens and hell. Battles intensify as the sword domain unravels its true secrets.',
                          maxEpisodes: 48,
                          latestEpisode: 48,
                          img: 'images/The Legend of Sword Domain Season 3(2023).jpg',
                          episodeLinks: [],
                          rating: 8.9,
                          status: 'Completed',
                          studio: 'Soyep Studio',
                          duration: '20 min per ep',
                          country: 'China',
                          network: 'Youku',
                          released: '2023',
                          season: '3',
                          type: 'ONA',
                          fansub: 'Anime Fans',
                          tags: ['Action', 'Cultivation', 'Swordplay', 'Fantasy']
                        }, 







                         




        ];
        return dramaData.map(d => ({...d, type: 'series'}));
    }

    // --- VIEW MANAGEMENT ---
    function hideAllViews() {
        libraryView.style.display = 'none';
        watchView.style.display = 'none';
        searchView.style.display = 'none';
        tencentView.style.display = 'none';
        youkuView.style.display = 'none';
        azListView.style.display = 'none';
        donationView.style.display = 'none';
        contactView.style.display = 'none';
        viewAllView.style.display = 'none';
    }

    function showSearchView(query, results) {
        hideAllViews();
        searchView.style.display = 'block';
        document.getElementById('search-results-title').textContent = `Search Results for "${query}"`;
        renderCards(results, searchResultsGrid, true);
        if (results.length === 0) {
            searchResultsGrid.innerHTML = `<p class="no-results-message">No results found.</p>`;
        }
        setActiveNavLink(null); // No nav link is active on search
    }
    
    function showTencentPage() {
        hideAllViews();
        tencentView.style.display = 'block';
        const tencentItems = allDonghuaData.filter(d => d.network && d.network.toLowerCase().includes('tencent'));
        renderCards(tencentItems, tencentGrid, true);
        setActiveNavLink(navLinks.tencent[0]);
        history.pushState({page: 'tencent'}, 'Japenese Anime', '#tencent');
    }

    function showYoukuPage() {
        hideAllViews();
        youkuView.style.display = 'block';
        const youkuItems = allDonghuaData.filter(d => d.network && d.network.toLowerCase().includes('youku'));
        renderCards(youkuItems, youkuGrid, true);
        setActiveNavLink(navLinks.youku[0]);
        history.pushState({page: 'youku'}, 'YouKu Anime', '#youku');
    }
    
    function showAZListPage() {
        hideAllViews();
        azListView.style.display = 'block';
        renderAZList();
        setActiveNavLink(navLinks.azList[0]);
        history.pushState({page: 'az-list'}, 'A-Z List', '#az-list');
    }

    function showDonationPage() {
        hideAllViews();
        donationView.style.display = 'block';
        setActiveNavLink(navLinks.donation[0]);
        history.pushState({page: 'donation'}, 'Donation', '#donation');
    }

    function showContactPage() {
        hideAllViews();
        contactView.style.display = 'block';
        setActiveNavLink(navLinks.contact[0]);
        history.pushState({page: 'contact'}, 'Contact Us', '#contact');
    }

    function showLibraryPage() {
        hideAllViews();
        libraryView.style.display = 'grid';
        if (dailymotionPlayer) {
            dailymotionPlayer.src = ""; // Stop playback
        }
        setActiveNavLink(navLinks.home[0]);
        history.pushState({page: 'home'}, 'Home', '#');
    }

    function showAllContentPage() {
        hideAllViews();
        viewAllView.style.display = 'block';
        const allContent = [...allDonghuaData].sort((a, b) => a.title.localeCompare(b.title));
        renderCards(allContent, viewAllGrid, true);
        setActiveNavLink(null);
        history.pushState({page: 'all-content'}, 'All Content', '#all-content');
    }

    function showWatchPage(item, episodeNum = null) {
        currentDonghua = item;
        hideAllViews();
        watchView.style.display = 'block';

        modalEpisodeTitle.textContent = `${item.title} - Episodes`;
        renderEpisodeList();
        
        let episodeToPlay = episodeNum;
        if (!episodeToPlay && item.episodeLinks && item.episodeLinks.length > 0) {
            const firstEpisode = [...item.episodeLinks].sort((a, b) => a.start - b.start)[0];
            episodeToPlay = firstEpisode.start;
        } else if (!episodeToPlay) {
            episodeToPlay = 1;
        }
        selectEpisode(episodeToPlay);
        
        const recommendations = allDonghuaData.filter(d => d.id !== item.id).sort(() => 0.5 - Math.random()).slice(0, 6);
        renderCards(recommendations, recommendedGrid, true);
        const ongoingItems = allDonghuaData.filter(d => d.status === 'Ongoing' && d.id !== item.id).slice(0, 6);
        renderList(ongoingItems, watchPageOngoingList, 'episode', true);
        const popularItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).filter(d => d.id !== item.id).slice(0, 6);
        renderList(popularItems, watchPagePopularList, 'series', true);

        window.scrollTo(0, 0);
        setActiveNavLink(null);
    }

    function setActiveNavLink(activeLink) {
        Object.values(navLinks).flat().forEach(link => link.classList.remove('active'));
        if (!activeLink) return;
        for (const key in navLinks) {
            if (navLinks[key].includes(activeLink)) {
                navLinks[key].forEach(link => link.classList.add('active'));
                break;
            }
        }
    }

    // --- VIDEO & EPISODE LOGIC ---
    function renderEpisodeList() {
        if (!currentDonghua || !currentDonghua.episodeLinks) return;
        episodeGrid.innerHTML = '';
        document.getElementById('show-more-episodes-container').innerHTML = '';
        const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
        sortedLinks.forEach(link => {
            const epBtn = document.createElement('button');
            epBtn.className = 'episode-btn';
            epBtn.textContent = link.start === link.end ? `${link.start}` : `${link.start}-${link.end}`;
            epBtn.dataset.episodeNumber = link.start;
            episodeGrid.appendChild(epBtn);
        });
    }

    function selectEpisode(episodeNumber) {
        if (!currentDonghua) return;
        currentEpisodeNumber = parseInt(episodeNumber, 10);
        
        const historyState = { page: 'watch', slug: currentDonghua.slug, episode: currentEpisodeNumber };
        const historyUrl = `#/${currentDonghua.slug}/episode/${currentEpisodeNumber}`;
        history.pushState(historyState, '', historyUrl);

        const episodeLinkData = currentDonghua.episodeLinks.find(link =>
            currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
        );

        let episodeTitle = `${currentDonghua.title} Episode ${currentEpisodeNumber}`;
        if (episodeLinkData && episodeLinkData.start !== episodeLinkData.end) {
            episodeTitle = `${currentDonghua.title} Episode ${episodeLinkData.start}-${episodeLinkData.end}`;
        }
        document.getElementById('watch-title-header').textContent = episodeTitle;

        document.getElementById('watch-metadata').innerHTML = `
            <span>Released on ${new Date(currentDonghua.released).toLocaleDateString()}</span>
            <span>Posted by admin</span>
            <span>Series: <a href="#">${currentDonghua.title}</a></span>`;

        let descriptionText = `Watch ${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub.`;
        if (episodeLinkData && episodeLinkData.start !== episodeLinkData.end) {
            descriptionText = `Watch ${currentDonghua.title} Episodes ${episodeLinkData.start}-${episodeLinkData.end} English Sub.`;
        }
        document.getElementById('video-desc-text').textContent = descriptionText;

        const videoUrl = episodeLinkData ? episodeLinkData.url : '';
        const videoPlaceholder = document.getElementById('video-placeholder-message');

        if (videoUrl) {
            dailymotionPlayer.style.display = 'block';
            videoPlaceholder.style.display = 'none';
            dailymotionPlayer.src = videoUrl;
        } else {
            dailymotionPlayer.style.display = 'none';
            dailymotionPlayer.src = "";
            videoPlaceholder.textContent = "This episode has not been released yet. Please check back later.";
            videoPlaceholder.style.display = 'block';
        }

        document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
        const activeEpBtn = document.querySelector(`.episode-btn[data-episode-number="${episodeLinkData ? episodeLinkData.start : ''}"]`);
        if (activeEpBtn) {
            activeEpBtn.classList.add('active');
            activeEpBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        updateEpisodeNavButtons();
        closeEpisodeModal();
    }

    function updateEpisodeNavButtons() {
        if (!currentDonghua || !currentDonghua.episodeLinks || currentDonghua.episodeLinks.length === 0) {
            prevEpisodeBtn.style.display = 'none';
            nextEpisodeBtn.style.display = 'none';
            showAllEpisodesBtn.style.display = 'none';
            return;
        }

        prevEpisodeBtn.style.display = 'inline-flex';
        nextEpisodeBtn.style.display = 'inline-flex';
        showAllEpisodesBtn.style.display = 'inline-flex';

        const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
        const currentLinkIndex = sortedLinks.findIndex(link =>
            currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
        );

        prevEpisodeBtn.disabled = currentLinkIndex <= 0;
        nextEpisodeBtn.disabled = currentLinkIndex === -1 || currentLinkIndex >= sortedLinks.length - 1;
    }

    function openEpisodeModal() { episodeModal.classList.add('is-open'); }
    function closeEpisodeModal() { episodeModal.classList.remove('is-open'); }

    // --- RENDERING FUNCTIONS ---
    function createCard(item) {
        const card = document.createElement('a');
        card.className = 'donghua-card';
        card.dataset.id = item.id;
        card.href = `#/${item.slug}/episode/1`;
        card.innerHTML = `
            <div class="card-poster">
                <img src="${item.img}" alt="Poster for ${item.title}" onerror="this.onerror=null;this.src='https://placehold.co/400x600/14181F/C5C6C7?text=Image+Not+Found';">
                <div class="play-overlay"><i class="fa-regular fa-circle-play"></i></div>
            </div>
            <div class="card-content">
                <h3 class="card-title" title="${item.title}">${item.title}</h3>
                <p class="card-subtitle">${item.subtitle}</p>
            </div>`;
        return card;
    }

    function renderListItem(item, type) {
        const listItem = document.createElement('li');
        listItem.className = 'new-item';
        listItem.dataset.id = item.id;
        const link = document.createElement('a');
        link.href = `#/${item.slug}/episode/1`;

        let infoHtml = '';
        if(type === 'series') {
            const releaseDate = new Date(item.released).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
            infoHtml = `<h4>${item.title}</h4><p>${item.tags.slice(0, 3).join(', ')}</p><p>${releaseDate}</p>`;
        } else if(type === 'episode') {
            infoHtml = `<h4>${item.title}</h4><p>Episode ${item.latestEpisode}</p><p class="release-time"><i class="fa-regular fa-clock"></i> ${item.releaseTime || ''}</p>`;
             link.href = `#/${item.slug}/episode/${item.latestEpisode}`;
        } else if(type === 'favorite') {
            infoHtml = `<h4>${item.title}</h4><p>${item.status}</p>`;
        }
        link.innerHTML = `
            <img src="${item.img}" alt="${item.title}" class="new-item-img" onerror="this.onerror=null;this.src='https://placehold.co/60x84/14181F/C5C6C7?text=N/A';">
            <div class="new-item-info">${infoHtml}</div>`;
        
        listItem.appendChild(link);
        return listItem;
    }
    
    function renderCards(items, gridElement, clear = false) {
        if (clear) gridElement.innerHTML = '';
        items.forEach(item => gridElement.appendChild(createCard(item)));
    }

    function renderList(items, listElement, type, clear = false) {
        if (clear) listElement.innerHTML = '';
        items.forEach(item => listElement.appendChild(renderListItem(item, type)));
    }

    function renderAZList() {
        azListContainer.innerHTML = '';
        const sortedData = [...allDonghuaData].sort((a, b) => a.title.localeCompare(b.title));
        const groupedByLetter = sortedData.reduce((acc, item) => {
            const letter = item.title[0].toUpperCase();
            if (!acc[letter]) {
                acc[letter] = [];
            }
            acc[letter].push(item);
            return acc;
        }, {});

        for (const letter in groupedByLetter) {
            const groupDiv = document.createElement('div');
            groupDiv.className = 'az-group';
            
            const letterHeading = document.createElement('h2');
            letterHeading.className = 'az-letter';
            letterHeading.textContent = letter;
            groupDiv.appendChild(letterHeading);

            const grid = document.createElement('div');
            grid.className = 'content-grid';
            renderCards(groupedByLetter[letter], grid);
            groupDiv.appendChild(grid);

            azListContainer.appendChild(groupDiv);
        }
    }
    
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length === 0) {
            showLibraryPage();
            return;
        }
        const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query));
        showSearchView(query, results);
    }
    
    function generateSitemap() {
        sitemapList.innerHTML = '';
        allDonghuaData.forEach(item => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#/${item.slug}/episode/1`;
            a.textContent = item.title;
            li.appendChild(a);
            sitemapList.appendChild(li);
        });
    }

    function handleRouting(hash) {
        if (hash.startsWith('#/')) {
            const parts = hash.split('/');
            const slug = parts[1];
            const action = parts[2];
            const item = allDonghuaData.find(d => d.slug === slug);

            if (item && action === 'episode' && parts.length >= 4) {
                const episodeNum = parseInt(parts[3], 10);
                showWatchPage(item, episodeNum);
            } else {
                showLibraryPage();
            }
        } else {
            switch(hash) {
                case '#all-content': showAllContentPage(); break;
                case '#tencent': showTencentPage(); break;
                case '#youku': showYoukuPage(); break;
                case '#az-list': showAZListPage(); break;
                case '#donation': showDonationPage(); break;
                case '#contact': showContactPage(); break;
                default: showLibraryPage();
            }
        }
    }

    // --- INITIALIZATION & EVENT LISTENERS ---
    function initializePage() {
        allDonghuaData = createYourDramaData();

        // Populate homepage
        const hotItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).slice(0, 12);
        const latestItems = [...allDonghuaData].sort((a, b) => new Date(b.released) - new Date(a.released));
        const recommendItems = [...allDonghuaData].sort(() => 0.5 - Math.random()).slice(0, 12);
        const newSeriesItems = latestItems.slice(0, 6);
        const newEpisodesTodayItems = allDonghuaData.filter(item => item.status === 'Ongoing' && item.releaseTime).slice(0, 6);
        const favoriteItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).slice(0, 5);
        const completedItems = allDonghuaData.filter(item => item.status === 'Finished').slice(0, 5);

        renderCards(hotItems, hotSeriesGrid, true);
        renderCards(latestItems.slice(0, 18), latestReleaseGrid, true);
        renderCards(recommendItems, homeRecommendGrid, true);
        renderList(newEpisodesTodayItems, newEpisodesTodayList, 'episode', true);
        renderList(newSeriesItems, newSeriesList, 'series', true);
        renderList(favoriteItems, favoriteList, 'favorite', true);
        renderList(completedItems, completedSeriesList, 'series', true);
        
        generateSitemap();

        handleRouting(window.location.hash);
        
        loadingSpinner.style.display = 'none';
        mainContent.style.visibility = 'visible';
        mainContent.style.opacity = '1';
        document.querySelectorAll('.site-header, .community-cta, .site-footer').forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });

        // --- MODAL LOGIC ---
        function showTelegramModal() {
            if (!sessionStorage.getItem('telegramModalShown')) {
                setTimeout(() => {
                    telegramModal.classList.add('is-visible');
                }, 1500); // 1.5-second delay
            }
        }
        function hideTelegramModal() {
            telegramModal.classList.remove('is-visible');
            sessionStorage.setItem('telegramModalShown', 'true');
        }
        telegramYesBtn.addEventListener('click', hideTelegramModal);
        telegramNoBtn.addEventListener('click', hideTelegramModal);
        showTelegramModal();
        // --- END MODAL LOGIC ---


        function closeMobileMenu() {
            mobileNav.classList.remove('is-open');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }

        // Mobile Menu
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('is-open');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
        
        mobileNavCloseBtn.addEventListener('click', closeMobileMenu);

        // Search
        searchInput.addEventListener('input', handleSearch);

        // Navigation
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLibraryPage();
        });

        Object.keys(navLinks).forEach(key => {
            navLinks[key].forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    switch (key) {
                        case 'home': showLibraryPage(); break;
                        case 'donation': showDonationPage(); break;
                        case 'tencent': showTencentPage(); break;
                        case 'youku': showYoukuPage(); break;
                        case 'azList': showAZListPage(); break;
                        case 'contact': showContactPage(); break;
                    }
                    closeMobileMenu();
                });
            });
        });

        // View All Links
        viewAllLinks.forEach(link => {
            link.addEventListener('click', (e) => { 
                e.preventDefault(); 
                showAllContentPage(); 
            });
        });


        // Global Event Listener for content cards
        document.addEventListener('click', (e) => {
            const cardLink = e.target.closest('.donghua-card, .new-item a, #sitemap-list a');
             if (cardLink) {
                 e.preventDefault();
                 handleRouting(cardLink.hash);
             }
            
            if (e.target.closest('.episode-btn')) {
                selectEpisode(e.target.closest('.episode-btn').dataset.episodeNumber);
            }
            if (e.target.closest('#show-all-episodes-btn')) openEpisodeModal();
            if (e.target === episodeModal || e.target.closest('#modal-close-btn')) closeEpisodeModal();
            
            if (e.target.closest('#prev-episode-btn')) {
                const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
                const currentLinkIndex = sortedLinks.findIndex(link => currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end);
                if (currentLinkIndex > 0) {
                    selectEpisode(sortedLinks[currentLinkIndex - 1].start);
                }
            }
            if (e.target.closest('#next-episode-btn')) {
                const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
                const currentLinkIndex = sortedLinks.findIndex(link => currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end);
                if (currentLinkIndex > -1 && currentLinkIndex < sortedLinks.length - 1) {
                    selectEpisode(sortedLinks[currentLinkIndex + 1].start);
                }
            }
            // Search toggle logic
            if (e.target.closest('#search-btn')) {
                e.stopPropagation();
                searchForm.classList.toggle('active');
                if (searchForm.classList.contains('active')) {
                    searchInput.focus();
                }
            } else if (searchForm.classList.contains('active') && !searchForm.contains(e.target)) {
                searchForm.classList.remove('active');
            }
        });
        
        window.addEventListener('popstate', (event) => {
            handleRouting(window.location.hash);
        });
    }
    
    initializePage();
                
};
