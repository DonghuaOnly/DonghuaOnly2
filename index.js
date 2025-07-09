window.onload = () => {
    // --- Element Selection ---
    const loadingSpinner = document.getElementById('loading-spinner');
    const mainContent = document.getElementById('main-content');
    const libraryView = document.getElementById('library-view');
    const watchView = document.getElementById('watch-view');
    const searchView = document.getElementById('search-view');
    const moviesView = document.getElementById('movies-view');
    const hotSeriesGrid = document.getElementById('hot-series-grid');
    const latestReleaseGrid = document.getElementById('latest-release-grid');
    const homeRecommendGrid = document.getElementById('home-recommend-grid');
    const newEpisodesTodayList = document.getElementById('new-episodes-today-list');
    const searchResultsGrid = document.getElementById('search-results-grid');
    const moviesGrid = document.getElementById('movies-grid');
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

    // Nav Links
    const homeLink = document.getElementById('home-link');
    const moviesLink = document.getElementById('movies-link');
    const mobileHomeLink = document.getElementById('mobile-home-link');
    const mobileMoviesLink = document.getElementById('mobile-movies-link');


    // --- DATA MANAGEMENT ---
    let allDonghuaData = [];
    let allMovieData = [];
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
             maxEpisodes: 154, // Corrected max episodes
             latestEpisode: 154, // Corrected latest episode
             releaseTime: '6:00 PM',
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
                 { start: 153, end: 153, url: `${dailymotionBaseUrl}x9mdak8` },
                 { start: 154, end: 154, url: `${dailymotionBaseUrl}x9mf7vi` },
             ],
             rating: 9.2, status: 'Ongoing', studio: 'Shanghai Motion Magic', duration: '20 min per ep', country: 'China',
             network: 'Tencent Penguin Pictures', released: '2022-07-31', season: '5', type: 'ONA',
             fansub: 'Lucifer Donghua', tags: ['Action', 'Adventure', 'Fantasy', 'Martial Art', 'Romance']
           },
           {
             id: 'd2', title: 'Shrouding The Heavens', slug: 'shrouding-the-heavens',
             subtitle: 'Xianxia, Comedy', description: 'The hilarious story of a young man who values longevity above all else, leading to comical adventures in a world of cultivation.', maxEpisodes: 116, latestEpisode: 116, releaseTime: '11:00 AM',
             releaseTime: '6:00 PM',
             img: 'images/Shrouding to the heaven.jpg.jpg',
             episodeLinks: [
                 { start: 1,   end: 5,   url: `${dailymotionBaseUrl}x9fjsq6` }, // Placeholder for missing episodes
                 { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 11,  end: 15,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Placeholder for missing episodes
                 { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 21,  end: 25,  url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 26,  end: 29,  url: `${dailymotionBaseUrl}x9by0ts` }, // Placeholder for missing episodes
                 { start: 30,  end: 30,  url: `${dailymotionBaseUrl}x9by0ts` },
                 { start: 31,  end: 63,  url: `${dailymotionBaseUrl}x9fjsq6` }, // Placeholder for missing episodes
                 { start: 64,  end: 64,  url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 65,  end: 74,  url: `${dailymotionBaseUrl}x966a1y` }, // Placeholder for missing episodes
                 { start: 75,  end: 75,  url: `${dailymotionBaseUrl}x966a1y` },
                 { start: 76,  end: 76,  url: `${dailymotionBaseUrl}x966a1y` },
                 { start: 77,  end: 77,  url: `${dailymotionBaseUrl}x966a1y` }, // Placeholder for missing episodes
                 { start: 78,  end: 78,  url: `${dailymotionBaseUrl}x966a1y` },
                 { start: 79,  end: 79,  url: `${dailymotionBaseUrl}x97dl0i` }, // Placeholder for missing episodes
                 { start: 80,  end: 82,  url: `${dailymotionBaseUrl}x97dl0i` },
                 { start: 83,  end: 83,  url: `${dailymotionBaseUrl}x9f58f6` }, // Placeholder for missing episodes
                 { start: 84,  end: 89,  url: `${dailymotionBaseUrl}x9f58f6` },
                 { start: 90,  end: 94,  url: `${dailymotionBaseUrl}x9by0ts` },
                 { start: 95,  end: 95,  url: `${dailymotionBaseUrl}x9f58f6` },
                 { start: 96,  end: 96,  url: `${dailymotionBaseUrl}x9f58f6` },
                 { start: 97,  end: 98,  url: `${dailymotionBaseUrl}x9f58f6` },
                 { start: 99,  end: 99,  url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 100, end: 101, url: `${dailymotionBaseUrl}x9fjsq6` },
                 { start: 102, end: 104, url: `${dailymotionBaseUrl}x9gqzue` },
                 { start: 105, end: 108, url: `${dailymotionBaseUrl}x9gqzue` },
                 { start: 109, end: 111, url: `${dailymotionBaseUrl}x9kppwk` },
                 { start: 112, end: 114, url: `${dailymotionBaseUrl}x9kppwk` },
                 { start: 115, end: 115, url: `${dailymotionBaseUrl}x9ltkeq` },
                 { start: 116, end: 116, url: `${dailymotionBaseUrl}x9mkpak` },
                 
             ],
             rating: 9.0, status: 'Ongoing', studio: 'B.CMAY PICTURES', duration: '22 min per ep', country: 'China',
             network: 'Bilibili', released: '2023-11-18', season: '1', type: 'ONA',
             fansub: 'Anime Official', tags: ['Xianxia', 'Comedy', 'Adventure']
           },
           {
             id: 'd3', title: 'Swallowed Star', slug: 'swallowed-star',
             subtitle: 'Sci-Fi, Action', description: 'In a future world ravaged by a virus, humanity finds new strength. A young man from a poor background fights to protect his family and the world.', maxEpisodes: 179, latestEpisode: 179, 
             releaseTime: '6:00 PM',            
             img: 'images/Loufeng.jpg.jpg',
             episodeLinks: [
                 { start: 1,   end: 8,   url: `${dailymotionBaseUrl}x8rzfpl` }, // Placeholder
                 { start: 9,   end: 15,  url: `${dailymotionBaseUrl}x8rzfpl` },
                 { start: 16,  end: 22,  url: `${dailymotionBaseUrl}x8s0n0m` },
                 { start: 23,  end: 26,  url: `${dailymotionBaseUrl}x8s0pxa` },
                 { start: 27,  end: 34,  url: `${dailymotionBaseUrl}x8s0xh0` },
                 { start: 35,  end: 41,  url: `${dailymotionBaseUrl}x8s10yo` },
                 { start: 42,  end: 48,  url: `${dailymotionBaseUrl}x8s11t0` },
                 { start: 49,  end: 55,  url: `${dailymotionBaseUrl}x8s334s` },
                 { start: 56,  end: 62,  url: `${dailymotionBaseUrl}x8s334u` },
                 { start: 63,  end: 69,  url: `${dailymotionBaseUrl}x8s34ew` },
                 { start: 70,  end: 77,  url: `${dailymotionBaseUrl}x8s38ig` },
                 { start: 78,  end: 84,  url: `${dailymotionBaseUrl}x8s38s4` },
                 { start: 85,  end: 91,  url: `${dailymotionBaseUrl}x8s3j7g` },
                 { start: 92,  end: 98,  url: `${dailymotionBaseUrl}x8s3j7i` },
                 { start: 99,  end: 101, url: `${dailymotionBaseUrl}x8s4gr6` },
                 { start: 102, end: 102, url: `${dailymotionBaseUrl}x8rp4kf` },
                 { start: 103, end: 103, url: `${dailymotionBaseUrl}x8rwn3g` },
                 { start: 104, end: 104, url: `${dailymotionBaseUrl}x8s0x86` },
                 { start: 105, end: 105, url: `${dailymotionBaseUrl}x8sil1k` },
                 { start: 106, end: 106, url: `${dailymotionBaseUrl}x8sm2z8` },
                 { start: 107, end: 107, url: `${dailymotionBaseUrl}x8tankk` },
                 { start: 108, end: 115, url: `${dailymotionBaseUrl}x8wxwui` },
                 { start: 116, end: 116, url: `${dailymotionBaseUrl}x8xqu9s` },
                 { start: 117, end: 120, url: `${dailymotionBaseUrl}x8yy616` },
                 { start: 121, end: 127, url: `${dailymotionBaseUrl}x9i3qw0` },
                 { start: 128, end: 133, url: `${dailymotionBaseUrl}x99kme8` },
                 { start: 134, end: 140, url: `${dailymotionBaseUrl}x99mn6y` },
                 { start: 141, end: 146, url: `${dailymotionBaseUrl}x99mo4a` },
                 { start: 147, end: 153, url: `${dailymotionBaseUrl}x9i3vrk` },
                 { start: 154, end: 160, url: `${dailymotionBaseUrl}x9i3vro` },
                 { start: 161, end: 167, url: `${dailymotionBaseUrl}x9i3vrm` },
                 { start: 168, end: 168, url: `${dailymotionBaseUrl}x9ihtp6` },
                 { start: 169, end: 169, url: `${dailymotionBaseUrl}x9imsoy` },
                 { start: 170, end: 170, url: `${dailymotionBaseUrl}x9j05vo` },
                 { start: 171, end: 171, url: `${dailymotionBaseUrl}x9jdk9s` },
                 { start: 172, end: 172, url: `${dailymotionBaseUrl}x9jrs8g` },
                 { start: 173, end: 173, url: `${dailymotionBaseUrl}x9k7n36` },
                 { start: 174, end: 174, url: `${dailymotionBaseUrl}x9knaq0` },
                 { start: 175, end: 175, url: `${dailymotionBaseUrl}x9l1z10` },
                 { start: 176, end: 176, url: `${dailymotionBaseUrl}x9lg4m4` },
                 { start: 177, end: 177, url: `${dailymotionBaseUrl}x9lro1c` },
                 { start: 178, end: 178, url: `${dailymotionBaseUrl}x9m3z5q` },
                 { start: 179, end: 179, url: `${dailymotionBaseUrl}x9m3q08` },
             ],
             rating: 9.5, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '21 min per ep', country: 'China',
             network: 'Tencent Video', released: '2020-11-29', season: '3', type: 'ONA',
             fansub: 'Official Sub', tags: ['Sci-Fi', 'Action', 'Adventure', 'Mecha']
           },
           {
             id: 'd4', title: 'Perfect World', slug: 'perfect-world',
             subtitle: 'Fantasy, Adventure', description: 'Born for cultivation, a peerless genius, Shi Hao, embarks on a journey to become a legendary figure in a world full of wonders and dangers.', maxEpisodes: 152, latestEpisode: 152,
             img: 'images/Perfect world.jpg.jpg',
             releaseTime: '6:00 PM',
             episodeLinks: [
                 { start: 1, end: 8, url: `${dailymotionBaseUrl}x8u66va` }, // Placeholder
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
             ],
             rating: 9.3, status: 'Ongoing', studio: 'Shanghai Foch Film', duration: '20 min per ep', country: 'China',
             network: 'Tencent Video', released: '2021-04-23', season: '1', type: 'ONA',
             fansub: 'Lucifer Donghua', tags: ['Fantasy', 'Adventure', 'Xianxia']
           },
           {
             id: 'd5', title: 'Throne of Seal', slug: 'throne-of-seal',
             subtitle: 'Fantasy, Magic', description: 'In a world where humanity is on the brink of extinction from demon attacks, a young knight, Long Haochen, rises to become a legendary leader.', maxEpisodes: 166, latestEpisode: 166,
             releaseTime: '6:00 PM',
             img: 'images/throne of seal.jpg.jpg',
             episodeLinks: [
                 { start: 1,   end: 55,  url: `${dailymotionBaseUrl}x9myyyy` }, // Placeholder
                 { start: 56,  end: 60,  url: `${dailymotionBaseUrl}x9kalb0` },
                 { start: 61,  end: 70,  url: `${dailymotionBaseUrl}x9kfp9o` }, // Placeholder
                 { start: 71,  end: 75,  url: `${dailymotionBaseUrl}x9kfp9o` },
                 { start: 76,  end: 80,  url: `${dailymotionBaseUrl}x9khb3m` }, // Placeholder
                 { start: 81,  end: 85,  url: `${dailymotionBaseUrl}x9khb3m` },
                 { start: 86,  end: 90,  url: `${dailymotionBaseUrl}x9kjva0` }, // Placeholder
                 { start: 91,  end: 95,  url: `${dailymotionBaseUrl}x9kjva0` },
                 { start: 96,  end: 100, url: `${dailymotionBaseUrl}x9kjva2` },
                 { start: 101, end: 115, url: `${dailymotionBaseUrl}x9lanj4` }, // Placeholder
                 { start: 116, end: 120, url: `${dailymotionBaseUrl}x9lanj4` },
                 { start: 121, end: 125, url: `${dailymotionBaseUrl}x9ljvlo` },
                 { start: 126, end: 130, url: `${dailymotionBaseUrl}x9ljvwo` },
                 { start: 131, end: 135, url: `${dailymotionBaseUrl}x9lk40k` },
                 { start: 136, end: 140, url: `${dailymotionBaseUrl}x9lk51k` }, // Placeholder
                 { start: 141, end: 145, url: `${dailymotionBaseUrl}x9lk51k` },
                 { start: 146, end: 146, url: `${dailymotionBaseUrl}x9e2fgu` },
                 { start: 147, end: 147, url: `${dailymotionBaseUrl}x9eolxm` },
                 { start: 148, end: 148, url: `${dailymotionBaseUrl}x9fm0ye` }, // Placeholder
                 { start: 149, end: 149, url: `${dailymotionBaseUrl}x9fm0ye` },
                 { start: 150, end: 150, url: `${dailymotionBaseUrl}x9fzabm` },
                 { start: 151, end: 151, url: `${dailymotionBaseUrl}x9gdrg0` },
                 { start: 152, end: 156, url: `${dailymotionBaseUrl}x9is4wc` }, // Placeholder
                 { start: 157, end: 157, url: `${dailymotionBaseUrl}x9is4wc` },
                 { start: 158, end: 159, url: `${dailymotionBaseUrl}x9jw2a0` }, // Placeholder
                 { start: 160, end: 160, url: `${dailymotionBaseUrl}x9jw2a0` },
                 { start: 161, end: 161, url: `${dailymotionBaseUrl}x9kctxq` },
                 { start: 162, end: 162, url: `${dailymotionBaseUrl}x9ks0z0` },
                 { start: 163, end: 163, url: `${dailymotionBaseUrl}x9l6gsa` },
                 { start: 164, end: 164, url: `${dailymotionBaseUrl}x9ljqwu` },
                 { start: 165, end: 165, url: `${dailymotionBaseUrl}x9lv9l4` },
                 { start: 166, end: 166, url: `${dailymotionBaseUrl}x9m7m5a` }
               ],
             rating: 8.9, status: 'Finished', studio: 'Shenman Entertainment', duration: '20 min per ep', country: 'China',
             network: 'Tencent Video', released: '2022-04-28', season: '2', type: 'ONA',
             fansub: '3D Anime Official', tags: ['Fantasy', 'Magic', 'Adventure', 'Action']
           },
           {
             id: 'd6', title: 'Soul Land 2', slug: 'soul-land-2',
             subtitle: 'Action, Romance', description: 'The story continues with the next generation of spirit masters from Shrek Academy, facing new challenges and powerful enemies.', maxEpisodes: 107, latestEpisode: 107,
             releaseTime: '6:00 PM',
             img: 'images/Soul land 2.jpg.jpg',
             episodeLinks: [
                 { start: 1, end: 1, url: `${dailymotionBaseUrl}x9j06dk` }, // Placeholder
                 { start: 2, end: 2, url: `${dailymotionBaseUrl}x9j06dk` },
                 { start: 3, end: 3, url: `${dailymotionBaseUrl}x9j2hsu` },
                 { start: 4, end: 9, url: `${dailymotionBaseUrl}x91nrgs` }, // Placeholder
                 { start: 10, end: 10, url: `${dailymotionBaseUrl}x91nrgs` },
                 { start: 11, end: 14, url: `${dailymotionBaseUrl}x8roaqq` },// Placeholder
                 { start: 15, end: 21, url: `${dailymotionBaseUrl}x8roaqq` },
                 { start: 22, end: 43, url: `${dailymotionBaseUrl}x8wpbuk` },// Placeholder
                 { start: 44, end: 44, url: `${dailymotionBaseUrl}x8wpbuk` },
                 { start: 45, end: 59, url: `${dailymotionBaseUrl}x99ev2c` },// Placeholder
                 { start: 60, end: 65, url: `${dailymotionBaseUrl}x99ev2c` },
                 { start: 66, end: 77, url: `${dailymotionBaseUrl}x9ac0n6` },// Placeholder
                 { start: 78, end: 78, url: `${dailymotionBaseUrl}x9ac0n6` },
                 { start: 79, end: 83, url: `${dailymotionBaseUrl}x9ciy4s` },// Placeholder
                 { start: 84, end: 84, url: `${dailymotionBaseUrl}x9ciy4s` },
                 { start: 85, end: 89, url: `${dailymotionBaseUrl}x9g3bww` },// Placeholder
                 { start: 90, end: 90, url: `${dailymotionBaseUrl}x9g3bww` },
                 { start: 91, end: 91, url: `${dailymotionBaseUrl}x9fpvk0` },
                 { start: 92, end: 93, url: `${dailymotionBaseUrl}x9gxww8` },// Placeholder
                 { start: 94, end: 94, url: `${dailymotionBaseUrl}x9gxww8` },
                 { start: 95, end: 95, url: `${dailymotionBaseUrl}x9hbcu6` },
                 { start: 96, end: 96, url: `${dailymotionBaseUrl}x9hpz6k` },
                 { start: 97, end: 98, url: `${dailymotionBaseUrl}x9ihcd8` },// Placeholder
                 { start: 99, end: 99, url: `${dailymotionBaseUrl}x9ihcd8` },
                 { start: 100, end: 100, url: `${dailymotionBaseUrl}x9j7yn2` },
                 { start: 101, end: 101, url: `${dailymotionBaseUrl}x9jm3g0` },// Placeholder
                 { start: 102, end: 102, url: `${dailymotionBaseUrl}x9jm3g0` },
                 { start: 103, end: 103, url: `${dailymotionBaseUrl}x9kwqtm` },// Placeholder
                 { start: 104, end: 104, url: `${dailymotionBaseUrl}x9kwqtm` },
                 { start: 105, end: 105, url: `${dailymotionBaseUrl}x9laue0` },
                 { start: 106, end: 106, url: `${dailymotionBaseUrl}x9ln4ns` },
                 { start: 107, end: 107, url: `${dailymotionBaseUrl}x9lzh7c` }
             ],
             rating: 9.1, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
             network: 'Tencent Video', released: '2023-06-24', season: '1', type: 'ONA',
             fansub: 'Official Sub', tags: ['Action', 'Romance', 'Fantasy', 'Adventure']
           },
           {
             id: 'd7', title: 'Jade Dynasty', slug: 'jade-dynasty',
             subtitle: 'Xianxia, Romance', description: 'A kind-hearted boy, Zhang Xiaofan, gets caught in a conflict between good and evil, discovering a world of powerful martial arts and romance.', maxEpisodes: 90, latestEpisode: 78,
             releaseTime: '6:00 PM',
             img: 'images/Jade dynasty.jpg.jpg',
             episodeLinks: [
                 { start: 1,   end: 1,   url: `${dailymotionBaseUrl}x95710a` }, // Placeholder
                 { start: 2,   end: 2,   url: `${dailymotionBaseUrl}x95710a` },
                 { start: 3,   end: 3,   url: `${dailymotionBaseUrl}x95710c` },
                 { start: 4,   end: 4,   url: `${dailymotionBaseUrl}x95iohi` },
                 { start: 5,   end: 5,   url: `${dailymotionBaseUrl}x95iohj` },
                 { start: 6,   end: 6,   url: `${dailymotionBaseUrl}x95ipx8` },
                 { start: 7,   end: 7,   url: `${dailymotionBaseUrl}x95ipx9` },
                 { start: 8,   end: 8,   url: `${dailymotionBaseUrl}x95ipxa` },
                 { start: 9,   end: 9,   url: `${dailymotionBaseUrl}x95ipxb` },
                 { start: 10,  end: 10,  url: `${dailymotionBaseUrl}x95xpag` },
                 { start: 11,  end: 11,  url: `${dailymotionBaseUrl}x95ipxc` },
                 { start: 12,  end: 12,  url: `${dailymotionBaseUrl}x95ipxd` },
                 { start: 13,  end: 13,  url: `${dailymotionBaseUrl}x95ipxe` },
                 { start: 14,  end: 14,  url: `${dailymotionBaseUrl}x95ipxf` },
                 { start: 15,  end: 15,  url: `${dailymotionBaseUrl}x95ipxg` },
                 { start: 16,  end: 16,  url: `${dailymotionBaseUrl}x95ipxh` },
                 { start: 17,  end: 17,  url: `${dailymotionBaseUrl}x95ipxi` },
                 { start: 18,  end: 18,  url: `${dailymotionBaseUrl}x95ipxj` },
                 { start: 19,  end: 19,  url: `${dailymotionBaseUrl}x95mt2y` },
                 { start: 20,  end: 20,  url: `${dailymotionBaseUrl}x95mt2z` },
                 { start: 21,  end: 21,  url: `${dailymotionBaseUrl}x95xpag` },
                 { start: 22,  end: 22,  url: `${dailymotionBaseUrl}x95xpah` },
                 { start: 23,  end: 23,  url: `${dailymotionBaseUrl}x95xpai` },
                 { start: 24,  end: 24,  url: `${dailymotionBaseUrl}x95xpaj` },
                 { start: 25,  end: 25,  url: `${dailymotionBaseUrl}x95xpak` },
                 { start: 26,  end: 26,  url: `${dailymotionBaseUrl}x95xpal` },
                 { start: 27,  end: 27,  url: `${dailymotionBaseUrl}x8vzqh8` },
                 { start: 28,  end: 28,  url: `${dailymotionBaseUrl}x8vxbhe` },
                 { start: 29,  end: 29,  url: `${dailymotionBaseUrl}x8hczdm` },
                 { start: 30,  end: 30,  url: `${dailymotionBaseUrl}x9l8fkm` },
                 { start: 31,  end: 31,  url: `${dailymotionBaseUrl}x9l87yy` },
                 { start: 32,  end: 32,  url: `${dailymotionBaseUrl}x9l899a` },
                 { start: 33,  end: 33,  url: `${dailymotionBaseUrl}x9l89e2` },
                 { start: 34,  end: 34,  url: `${dailymotionBaseUrl}x92xw90` },
                 { start: 35,  end: 35,  url: `${dailymotionBaseUrl}x8yb8w0` },
                 { start: 36,  end: 36,  url: `${dailymotionBaseUrl}x9bv3ie` },
                 { start: 37,  end: 37,  url: `${dailymotionBaseUrl}x8z045q` },
                 { start: 38,  end: 38,  url: `${dailymotionBaseUrl}x9bv4p4` },
                 { start: 39,  end: 39,  url: `${dailymotionBaseUrl}x8zufmw` },
                 { start: 40,  end: 40,  url: `${dailymotionBaseUrl}x90cvx8` },
                 { start: 41,  end: 41,  url: `${dailymotionBaseUrl}x95swbu` },
                 { start: 42,  end: 42,  url: `${dailymotionBaseUrl}x95swl4` },
                 { start: 43,  end: 43,  url: `${dailymotionBaseUrl}x92xw90` },
                 { start: 44,  end: 44,  url: `${dailymotionBaseUrl}x92xw90` },
                 { start: 45,  end: 45,  url: `${dailymotionBaseUrl}x92xw90` },
                 { start: 46,  end: 46,  url: `${dailymotionBaseUrl}x92xw90` },
                 { start: 47,  end: 47,  url: `${dailymotionBaseUrl}x93e2jg` },
                 { start: 48,  end: 48,  url: `${dailymotionBaseUrl}x93duuo` },
                 { start: 49,  end: 49,  url: `${dailymotionBaseUrl}x93duuo` },
                 { start: 50,  end: 50,  url: `${dailymotionBaseUrl}x93swbu` },
                 { start: 51,  end: 51,  url: `${dailymotionBaseUrl}x93swl4` },
                 { start: 52,  end: 52,  url: `${dailymotionBaseUrl}x93duuo` },
                 { start: 53,  end: 53,  url: `${dailymotionBaseUrl}x9l891e` },
                 { start: 54,  end: 54,  url: `${dailymotionBaseUrl}` },
                 { start: 55,  end: 55,  url: `${dailymotionBaseUrl}` },
                 { start: 56,  end: 60,  url: `${dailymotionBaseUrl}` },
                 { start: 61,  end: 65,  url: `${dailymotionBaseUrl}` },
                 { start: 66,  end: 70,  url: `${dailymotionBaseUrl}` },
                 { start: 71,  end: 75,  url: `${dailymotionBaseUrl}` },
                 { start: 76,  end: 78,  url: `${dailymotionBaseUrl}x9mkote` },
             ],
             rating: 8.8, status: 'Ongoing', studio: 'Cloud Art', duration: '22 min per ep', country: 'China',
             network: 'Tencent Video', released: '2022-11-02', season: '1', type: 'ONA',
             fansub: 'Subber Team', tags: ['Xianxia', 'Romance', 'Action']
           },
           {
             id: 'd8', title: 'Renegade Immortal', slug: 'renegade-immortal',
             subtitle: 'Xianxia, Action', description: 'Follow Wang Lin as he defies his humble origins and a lack of talent to walk the path of an immortal, facing betrayal and hardship along the way.', maxEpisodes: 96, latestEpisode: 96,
             img: 'images/Renegadeimmortal.jpg.jpg',
             releaseTime: '6:00 PM',
             episodeLinks: [
                 { start: 1,   end: 1,   url: `${dailymotionBaseUrl}x9mxxxx` }, // Placeholder for Ep 1
                 { start: 2,   end: 5,   url: `${dailymotionBaseUrl}x9jvj7q`}, // Placeholder
                 { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x9jvj7q` },
                 { start: 11,  end: 15,  url: `${dailymotionBaseUrl}x9jvru6` },
                 { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x9bu166` },
                 { start: 21,  end: 37,  url: `${dailymotionBaseUrl}x9c02si` }, // Placeholder
                 { start: 38,  end: 43,  url: `${dailymotionBaseUrl}x9c02si` },
                 { start: 44,  end: 59,  url: `${dailymotionBaseUrl}x9h15x6` }, // Placeholder
                 { start: 60,  end: 60,  url: `${dailymotionBaseUrl}x9h15x6` },
                 { start: 61,  end: 65,  url: `${dailymotionBaseUrl}x9c4jgm` },
                 { start: 66,  end: 70,  url: `${dailymotionBaseUrl}x9ca72q` },
                 { start: 71,  end: 73,  url: `${dailymotionBaseUrl}x9d1ij6` },
                 { start: 74,  end: 74,  url: `${dailymotionBaseUrl}x9dehzu` },
                 { start: 75,  end: 80,  url: `${dailymotionBaseUrl}x9jppdm` }, // Placeholder
                 { start: 81,  end: 85,  url: `${dailymotionBaseUrl}x9jppdm` },
                 { start: 86,  end: 90,  url: `${dailymotionBaseUrl}x9klflu` }, // Placeholder
                 { start: 91,  end: 91,  url: `${dailymotionBaseUrl}x9klflu` },
                 { start: 92,  end: 92,  url: `${dailymotionBaseUrl}x9lehqo` }, // Placeholder
                 { start: 93,  end: 93,  url: `${dailymotionBaseUrl}x9lehqo` },
                 { start: 94,  end: 94,  url: `${dailymotionBaseUrl}x9lpunq` },
                 { start: 95,  end: 95,  url: `${dailymotionBaseUrl}x9m2c8y` },
                 { start: 96,  end: 96,  url: `${dailymotionBaseUrl}x9mf9e6` }
             ],
             rating: 9.4, status: 'Ongoing', studio: 'Studio DRE', duration: '20 min per ep', country: 'China',
             network: 'Tencent Video', released: '2023-11-25', season: '1', type: 'ONA',
             fansub: 'Lucifer Donghua', tags: ['Xianxia', 'Action', 'Cultivation']
           },
           {
             id: 'd9', title: 'Legend Of Xianwu', slug: 'legend-of-xianwu',
             subtitle: 'E-Sports, Action', description: 'A top-tier professional e-sports player is unexpectedly reborn and must use his gaming knowledge to navigate a new world of martial arts.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/legend of xianwu.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '24 min per ep', country: 'China',
             network: 'Tencent Video', released: '2017-04-27', season: '2', type: 'ONA',
             fansub: 'Anime Fans', tags: ['E-Sports', 'Action', 'Comedy'],
           },
           {
             id: 'd10', title: 'Soul Land 1', slug: 'soul-land-1',
             subtitle: 'Fantasy, Action', description: 'Tang San, a disciple of the Tang Sect, is reborn into a world of spirit masters. With memories of his past life, he strives to become the strongest.', maxEpisodes: 263, latestEpisode: 263,
             img: 'images/Sou land 1.jpg.jpg',
             episodeLinks: [
                 { start: 1,   end: 5,   url: `${dailymotionBaseUrl}x8rfvh7` },
                 { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x8rfz8c` },
                 { start: 11,  end: 15,  url: `${dailymotionBaseUrl}x8rg21d` },
                 { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x8rg8br` },
                 { start: 21,  end: 26,  url: `${dailymotionBaseUrl}x8rgeqf` },
                 { start: 27,  end: 31,  url: `${dailymotionBaseUrl}x8rgjmu` },
                 { start: 32,  end: 36,  url: `${dailymotionBaseUrl}x8rgqj2` },
                 { start: 37,  end: 41,  url: `${dailymotionBaseUrl}x8rgw9q` },
                 { start: 42,  end: 46,  url: `${dailymotionBaseUrl}x8rh29s` },
                 { start: 47,  end: 51,  url: `${dailymotionBaseUrl}x8rh7zu` },
                 { start: 52,  end: 56,  url: `${dailymotionBaseUrl}x8rhf5r` },
                 { start: 57,  end: 61,  url: `${dailymotionBaseUrl}x8rhn3h` },
                 { start: 62,  end: 66,  url: `${dailymotionBaseUrl}x8rhw2l` },
                 { start: 67,  end: 71,  url: `${dailymotionBaseUrl}x8ri80q` },
                 { start: 72,  end: 76,  url: `${dailymotionBaseUrl}x8rifwe` },
                 { start: 77,  end: 81,  url: `${dailymotionBaseUrl}x8rin84` },
                 { start: 82,  end: 87,  url: `${dailymotionBaseUrl}x8rivtk` },
                 { start: 88,  end: 93,  url: `${dailymotionBaseUrl}x8rj3y9` },
                 { start: 94,  end: 99,  url: `${dailymotionBaseUrl}x8rjc56` },
                 { start: 100, end: 105, url: `${dailymotionBaseUrl}x8rjjv6` },
                 { start: 106, end: 111, url: `${dailymotionBaseUrl}x8rjs7s` },
                 { start: 112, end: 117, url: `${dailymotionBaseUrl}x8rk03c` },
                 { start: 118, end: 123, url: `${dailymotionBaseUrl}x8rk7ac` },
                 { start: 124, end: 129, url: `${dailymotionBaseUrl}x8rkf5a` },
                 { start: 130, end: 135, url: `${dailymotionBaseUrl}x8rknex` },
                 { start: 136, end: 141, url: `${dailymotionBaseUrl}x8rkw6r` },
                 { start: 142, end: 147, url: `${dailymotionBaseUrl}x8rl3r2` },
                 { start: 148, end: 153, url: `${dailymotionBaseUrl}x8rlbca` },
                 { start: 154, end: 159, url: `${dailymotionBaseUrl}x8rliqn` },
                 { start: 160, end: 165, url: `${dailymotionBaseUrl}x8rlqdq` },
                 { start: 166, end: 171, url: `${dailymotionBaseUrl}x8rm0w4` },
                 { start: 172, end: 177, url: `${dailymotionBaseUrl}x8rm8s4` },
                 { start: 178, end: 183, url: `${dailymotionBaseUrl}x8rmg3o` },
                 { start: 184, end: 189, url: `${dailymotionBaseUrl}x8rmo74` },
                 { start: 190, end: 197, url: `${dailymotionBaseUrl}x8rmw7l` },
                 { start: 198, end: 204, url: `${dailymotionBaseUrl}x8rn3vo` },
                 { start: 205, end: 214, url: `${dailymotionBaseUrl}x8rnbn2` },
                 { start: 215, end: 222, url: `${dailymotionBaseUrl}x8rnj7n` },
                 { start: 223, end: 229, url: `${dailymotionBaseUrl}x8rnr2g` },
                 { start: 230, end: 236, url: `${dailymotionBaseUrl}x8ro00w` },
                 { start: 237, end: 242, url: `${dailymotionBaseUrl}x8ro7np` },
                 { start: 243, end: 248, url: `${dailymotionBaseUrl}x8rof6p` },
                 { start: 249, end: 254, url: `${dailymotionBaseUrl}x8romw8` },
                 { start: 255, end: 260, url: `${dailymotionBaseUrl}x8roux7` },
                 { start: 261, end: 263, url: `${dailymotionBaseUrl}x8rp1hp` },
             ],
             rating: 0, status: 'Finished', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
             network: 'Tencent Video', released: '2018-01-20', season: '1', type: 'ONA',
             fansub: 'Official Sub', tags: ['Fantasy', 'Action', 'Romance', 'Adventure'],
           },
           {
             id: 'd11', title: 'The Immortal Doctor in Modern City', slug: 'immortal-doctor-in-modern-city',
             subtitle: 'Modern, Fantasy', description: 'A powerful immortal doctor is reborn in the modern world. He uses his ancient skills to heal the sick, fight injustice, and navigate modern life.', maxEpisodes: 84, latestEpisode: 84,
             img: 'images/The Immortal  Doctor in Modern City.jpg.jpg',
             episodeLinks: [
                 { start: 1, end: 14, url: `${dailymotionBaseUrl}x98ik0e` },// Placeholder
                 { start: 15, end: 15, url: `${dailymotionBaseUrl}x98ik0e` },
                 { start: 16, end: 43, url: `${dailymotionBaseUrl}x9e230e` },// Placeholder
                 { start: 44, end: 44, url: `${dailymotionBaseUrl}x9e230e` },
                 { start: 45, end: 77, url: `${dailymotionBaseUrl}x9ljvvo` },// Placeholder
                 { start: 78, end: 78, url: `${dailymotionBaseUrl}x9ljvvo` },
                 { start: 79, end: 83, url: `${dailymotionBaseUrl}x9m7fau` },// Placeholder
                 { start: 84, end: 84, url: `${dailymotionBaseUrl}x9m7fau` },
             ],
             rating: 0, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
           },
           {
             id: 'd12', title: 'Tales Of Herding God', slug: 'tales-of-herding-god',
             subtitle: 'Fantasy, Adventure', description: 'Watch Tales Of Herding God, a popular donghua series. More details coming soon.', maxEpisodes: 37, latestEpisode: 37,
             img: 'images/Tails of herding god.jpg.jpg',
             episodeLinks: [
                 { start: 1, end: 1, url: `${dailymotionBaseUrl}x983ozs` }, // Placeholder
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
               ],
             rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
           },
           {
             id: 'd13', title: 'Sword Of Coming', slug: 'sword-of-coming',
             subtitle: 'Xianxia, Adventure', description: 'Watch Sword Of Coming, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/Sword of coming.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.7, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Xianxia', 'Adventure', 'Action', 'Fantasy'],
           },
           {
             id: 'd14', title: 'Ten Thousand World ( Wan Jie Du Zun ) Season-3', slug: 'ten-thousand-world-s3',
             subtitle: 'Fantasy, Martial Arts', description: 'Watch Ten Thousand World ( Wan Jie Du Zun ) Season-3, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/Ten Thousand World ( Wan Jie Du Zun ) Season-3.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '3', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Fantasy', 'Martial Arts', 'Action', 'Comedy'],
           },
           {
             id: 'd15', title: 'Swallowing the Heavens', slug: 'swallowing-the-heavens',
             subtitle: 'Xianxia, Fantasy', description: 'Watch Swallowing the Heavens, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/Swallowing the Heavens.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.6, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Xianxia', 'Fantasy', 'Action', 'Adventure'],
           },
           {
             id: 'd16', title: 'My Senior Brother Is Too Strong', slug: 'my-senior-brother-is-too-strong',
             subtitle: 'Comedy, Fantasy', description: 'Watch My Senior Brother Is Too Strong, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/My Senior Brother Is Too Strong.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.4, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Comedy', 'Fantasy', 'Action', 'Cultivation'],
           },
           {
             id: 'd17', title: 'Big Brother', slug: 'big-brother',
             subtitle: 'Comedy, Xianxia', description: 'Watch Big Brother, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/Big brother.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
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
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 9.0, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Xianxia', 'Cultivation', 'Action', 'Drama'],
           },
           {
             id: 'd19', title: 'Ancient War Soul', slug: 'ancient-war-soul',
             subtitle: 'Action, Fantasy', description: 'Watch Ancient War Soul, a popular donghua series. More details coming soon.', maxEpisodes: 27, latestEpisode: 27,
             img: 'images/ancient War Soul.jpg.jpg',
             episodeLinks: [
                { start: 1,  end: 14, url: `${dailymotionBaseUrl}x9k2r0u`  }, // Example placeholder
                { start: 15, end: 22, url:`${dailymotionBaseUrl}x9lrmn2`  },
                { start: 23, end: 23, url: `${dailymotionBaseUrl}x9lrsv0` },
                { start: 24, end: 24, url: `${dailymotionBaseUrl}x9lzg7w` },
                { start: 25, end: 25, url: `${dailymotionBaseUrl}x9m3g9g` },
                { start: 26, end: 26, url: `${dailymotionBaseUrl}x9mb8ju` },
                { start: 27, end: 27, url: `${dailymotionBaseUrl}x9mg4rm` },
                 
             ],
             rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Action', 'Fantasy', 'Adventure'],
           },
           {
             id: 'd20', title: 'Dragon Prince Yuan', slug: 'dragon-prince-yuan',
             subtitle: 'Fantasy, Action', description: 'Watch Dragon Prince Yuan, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/Dragon prince yuan.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 8.9, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Fantasy', 'Action', 'Adventure', 'Xianxia'],
           },
           {
             id: 'd21', title: 'A Record Of Mortal’s Journey To Immortality', slug: 'a-record-of-mortals-journey-to-immortality',
             subtitle: 'Xianxia, Cultivation', description: 'Watch A Record Of Mortal’s Journey To Immortality, a popular donghua series. More details coming soon.', maxEpisodes: 24, latestEpisode: 24,
             img: 'images/A Record Of Mortal’s Journey To Immortality.jpg.jpg',
             episodeLinks: [
                { start: 1, end: 24, url: `${dailymotionBaseUrl}x8placeholder` }, // Example placeholder
             ],
             rating: 9.3, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Xianxia', 'Cultivation', 'Action', 'Adventure'],
           },
           {
             id: 'd22', title: 'Spirit Sword Sovereign (Ling Jian Zun)', slug: 'spirit-sword-sovereign',
             subtitle: 'Martial Arts, Fantasy', description: 'Watch Spirit Sword Sovereign (Ling Jian Zun), a popular donghua series. More details coming soon.', maxEpisodes: 586, latestEpisode: 586,
             img: 'images/Spirit Sword Sovereign (Ling Jian Zun).jpg.jpg',
             episodeLinks: [
                { start: 1, end: 67, url: `${dailymotionBaseUrl}x8visji` }, // Placeholder
                { start: 68, end: 68, url: `${dailymotionBaseUrl}x8e2ks0` },
                { start: 69, end: 85, url: `${dailymotionBaseUrl}x8lcld2` }, // Placeholder
                { start: 86, end: 88, url: `${dailymotionBaseUrl}x8lcld2` },
                { start: 89, end: 110, url: `${dailymotionBaseUrl}x8vje8i` }, // Placeholder
                { start: 111, end: 120, url: `${dailymotionBaseUrl}x8vje8i` },
                { start: 121, end: 206, url: `${dailymotionBaseUrl}x91hvje` }, // Placeholder
                { start: 207, end: 207, url: `${dailymotionBaseUrl}x91hvje` },
                { start: 208, end: 284, url: `${dailymotionBaseUrl}x8y3vxo` }, // Placeholder
                { start: 285, end: 300, url: `${dailymotionBaseUrl}x8y3vxo` },
                { start: 301, end: 332, url: `${dailymotionBaseUrl}x8y4n0c` }, // Placeholder
                { start: 333, end: 348, url: `${dailymotionBaseUrl}x8y4n0c` },
                { start: 349, end: 364, url: `${dailymotionBaseUrl}x8y4s62` },
                { start: 365, end: 497, url: `${dailymotionBaseUrl}x9h6q1o` }, // Placeholder
                { start: 498, end: 514, url: `${dailymotionBaseUrl}x9h6q1o` },
                { start: 515, end: 532, url: `${dailymotionBaseUrl}x97w1ys` }, // Placeholder
                { start: 533, end: 533, url: `${dailymotionBaseUrl}x97w1ys` },
                { start: 534, end: 540, url: `${dailymotionBaseUrl}x99emxm` }, // Placeholder
                { start: 541, end: 541, url: `${dailymotionBaseUrl}x99emxm` },
                { start: 542, end: 548, url: `${dailymotionBaseUrl}x9h6srg` }, // Placeholder
                { start: 549, end: 565, url: `${dailymotionBaseUrl}x9h6srg` },
                { start: 550, end: 554, url: `${dailymotionBaseUrl}x9cc74k` }, // Placeholder
                { start: 555, end: 555, url: `${dailymotionBaseUrl}x9cc74k` },
                { start: 556, end: 559, url: `${dailymotionBaseUrl}x9cxz1a` }, // Placeholder
                { start: 560, end: 560, url: `${dailymotionBaseUrl}x9cxz1a` },
                { start: 561, end: 561, url: `${dailymotionBaseUrl}x9db60k` }, // Placeholder
                { start: 562, end: 562, url: `${dailymotionBaseUrl}x9db60k` },
                { start: 563, end: 565, url: `${dailymotionBaseUrl}x9h8qsw` }, // Placeholder
                { start: 566, end: 578, url: `${dailymotionBaseUrl}x9h8qsw` },
                { start: 579, end: 585, url: `${dailymotionBaseUrl}x9hpryw` }, // Placeholder
                { start: 586, end: 586, url: `${dailymotionBaseUrl}x9hpryw` }
             ],
             rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
             network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
             fansub: 'Anime Fans', tags: ['Martial Arts', 'Fantasy', 'Action', 'Comedy'],
           },
         ];
        return dramaData;
    }

    // --- VIEW MANAGEMENT ---
    function showSearchView(query, results) {
        libraryView.style.display = 'none';
        watchView.style.display = 'none';
        moviesView.style.display = 'none';
        searchView.style.display = 'block';
        document.getElementById('search-results-title').textContent = `Search Results for "${query}"`;
        renderCards(results, searchResultsGrid, true);
        if (results.length === 0) {
            searchResultsGrid.innerHTML = `<p class="no-results-message">No results found.</p>`;
        }
    }

    function showMoviesPage() {
        libraryView.style.display = 'none';
        watchView.style.display = 'none';
        searchView.style.display = 'none';
        moviesView.style.display = 'block';
        renderCards(allMovieData, moviesGrid, true);
        setActiveNavLink(moviesLink);
        history.pushState({ page: 'movies' }, 'Movies', '#/movies');
    }

    function showLibraryPage() {
        watchView.style.display = 'none';
        searchView.style.display = 'none';
        moviesView.style.display = 'none';
        libraryView.style.display = 'grid';
        if (dailymotionPlayer) {
            dailymotionPlayer.src = ""; // Stop playback
        }
        setActiveNavLink(homeLink);
        history.pushState({ page: 'home' }, 'Home', '#');
    }

    function showWatchPage(item, episodeNum = null) {
        if (!item) {
            console.error("showWatchPage called with invalid item.");
            showLibraryPage();
            return;
        }
        currentDonghua = item;
        libraryView.style.display = 'none';
        searchView.style.display = 'none';
        moviesView.style.display = 'none';
        watchView.style.display = 'block';

        modalEpisodeTitle.textContent = `${item.title} - Episodes`;
        renderEpisodeList();
        
        // Select the first available episode by default or the one from the URL
        let episodeToPlay = episodeNum;
        if (!episodeToPlay && item.episodeLinks && item.episodeLinks.length > 0) {
            const firstEpisode = [...item.episodeLinks].sort((a, b) => a.start - b.start)[0];
            episodeToPlay = firstEpisode.start;
        } else if (!episodeToPlay) {
            episodeToPlay = 1;
        }
        selectEpisode(episodeToPlay);
        
        // Populate sidebar recommendations, etc.
        const recommendations = allDonghuaData.filter(d => d.id !== item.id).sort(() => 0.5 - Math.random()).slice(0, 6);
        renderCards(recommendations, recommendedGrid, true);
        const ongoingItems = allDonghuaData.filter(d => d.status === 'Ongoing' && d.id !== item.id).slice(0, 6);
        renderList(ongoingItems, watchPageOngoingList, 'episode', true);
        const popularItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).filter(d => d.id !== item.id).slice(0, 6);
        renderList(popularItems, watchPagePopularList, 'series', true);

        window.scrollTo(0, 0);
    }

    function setActiveNavLink(activeLink) {
        [homeLink, moviesLink, mobileHomeLink, mobileMoviesLink].forEach(link => link.classList.remove('active'));
        if(activeLink === homeLink || activeLink === mobileHomeLink) {
            homeLink.classList.add('active');
            mobileHomeLink.classList.add('active');
        } else if (activeLink === moviesLink || activeLink === mobileMoviesLink) {
            moviesLink.classList.add('active');
            mobileMoviesLink.classList.add('active');
        }
    }

    // --- VIDEO & EPISODE LOGIC ---
    function renderEpisodeList() {
        if (!currentDonghua || !currentDonghua.episodeLinks) return;

        episodeGrid.innerHTML = ''; // Clear existing buttons
        
        // Create a full list of all possible episodes
        const allEpisodes = [];
        for(let i = 1; i <= currentDonghua.maxEpisodes; i++) {
            allEpisodes.push(i);
        }

        allEpisodes.forEach(epNum => {
            const epBtn = document.createElement('button');
            epBtn.className = 'episode-btn';
            epBtn.textContent = epNum;
            epBtn.dataset.episodeNumber = epNum;

            // Check if this episode number has a valid link
            const linkData = currentDonghua.episodeLinks.find(link => epNum >= link.start && epNum <= link.end);
            if (!linkData || !linkData.url || linkData.url.endsWith('ID_UNAVAILABLE')) {
                epBtn.disabled = true;
                epBtn.classList.add('disabled');
            }
            episodeGrid.appendChild(epBtn);
        });
    }

    function selectEpisode(episodeNumber) {
        if (!currentDonghua) return;
        currentEpisodeNumber = parseInt(episodeNumber, 10);
        
        // Update URL
        history.pushState({ page: 'watch', slug: currentDonghua.slug, episode: currentEpisodeNumber }, `${currentDonghua.title} - Ep ${currentEpisodeNumber}`, `#/${currentDonghua.slug}/episode/${currentEpisodeNumber}`);

        const episodeLinkData = currentDonghua.episodeLinks.find(link =>
            currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
        );

        // Update header and description
        document.getElementById('watch-title-header').textContent = `${currentDonghua.title} Episode ${currentEpisodeNumber}`;
        document.getElementById('watch-metadata').innerHTML = `
            <span>Released on ${new Date(currentDonghua.released).toLocaleDateString()}</span>
            <span>Posted by admin</span>
            <span>Series: <a href="#/${currentDonghua.slug}/episode/1">${currentDonghua.title}</a></span>`;
        document.getElementById('video-desc-text').textContent = `Watch ${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub.`;

        const videoUrl = episodeLinkData ? episodeLinkData.url : '';
        const videoPlaceholder = document.getElementById('video-placeholder-message');

        if (videoUrl && !videoUrl.endsWith('ID_UNAVAILABLE')) {
            dailymotionPlayer.style.display = 'block';
            videoPlaceholder.style.display = 'none';
            dailymotionPlayer.src = videoUrl;
        } else {
            dailymotionPlayer.style.display = 'none';
            dailymotionPlayer.src = "";
            videoPlaceholder.textContent = "This episode has not been released yet or the link is unavailable. Please check back later.";
            videoPlaceholder.style.display = 'block';
        }

        // Highlight active episode button
        document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
        const activeEpBtn = document.querySelector(`.episode-btn[data-episode-number="${currentEpisodeNumber}"]`);
        if (activeEpBtn) {
            activeEpBtn.classList.add('active');
            activeEpBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        updateEpisodeNavButtons();
        closeEpisodeModal();
    }

    function updateEpisodeNavButtons() {
        if (!currentDonghua) {
            prevEpisodeBtn.disabled = true;
            nextEpisodeBtn.disabled = true;
            return;
        }
        prevEpisodeBtn.disabled = currentEpisodeNumber <= 1;
        nextEpisodeBtn.disabled = currentEpisodeNumber >= currentDonghua.maxEpisodes;
    }


    function openEpisodeModal() { episodeModal.classList.add('is-open'); }
    function closeEpisodeModal() { episodeModal.classList.remove('is-open'); }

    // --- RENDERING FUNCTIONS (createCard, renderListItem, etc.) ---
    function createCard(item) {
        const card = document.createElement('a'); // Changed to an anchor tag
        card.className = 'donghua-card';
        card.dataset.id = item.id;
        card.href = `#/${item.slug}/episode/1`; // Default to episode 1
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
    
    function handleSearch() {
        const query = searchInput.value.toLowerCase().trim();
        if (query.length === 0) {
            // If search is cleared, go back to the previous state or home
            history.back();
            return;
        }
        const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query));
        showSearchView(query, results);
        history.pushState({ page: 'search', query: query }, `Search: ${query}`, `#/search/${encodeURIComponent(query)}`);
    }
    
    function generateSitemap() {
        if (!sitemapList) return;
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

    function handleNavigation(hash) {
        if (hash.startsWith('#/search/')) {
            const query = decodeURIComponent(hash.split('/')[2] || '');
            searchInput.value = query;
            const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query));
            showSearchView(query, results);
        } else if (hash === '#/movies') {
            showMoviesPage();
        } else if (hash.startsWith('#/')) {
            const parts = hash.split('/');
            if (parts.length >= 4 && parts[2] === 'episode') {
                const slug = parts[1];
                const episodeNum = parseInt(parts[3], 10);
                const donghua = allDonghuaData.find(d => d.slug === slug);
                if (donghua) {
                    showWatchPage(donghua, episodeNum);
                } else {
                    showLibraryPage();
                }
            } else {
                // Handle case for just slug e.g. #/battle-through-the-heavens
                const slug = parts[1];
                 const donghua = allDonghuaData.find(d => d.slug === slug);
                 if (donghua) {
                    showWatchPage(donghua, 1); // Default to episode 1
                } else {
                    showLibraryPage();
                }
            }
        } else {
            showLibraryPage();
        }
    }


    // --- INITIALIZATION & EVENT LISTENERS ---
    function initializePage() {
        try {
            allDonghuaData = createYourDramaData();
            allMovieData = createMovieData();

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

            // Handle deep linking on page load
            handleNavigation(window.location.hash);

        } catch (error) {
            console.error("Initialization failed:", error);
            // Show an error message to the user on the page itself
            mainContent.innerHTML = `<div style="color: white; text-align: center; padding: 50px;">
                                        <h2>Oops! Something went wrong.</h2>
                                        <p>We couldn't load the content. Please try refreshing the page.</p>
                                        <p>Error: ${error.message}</p>
                                     </div>`;
        } finally {
            // GUARANTEE that the spinner is hidden
            loadingSpinner.style.display = 'none';
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            document.querySelectorAll('.site-header, .community-cta, .site-footer').forEach(el => {
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            });
        }

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
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            handleSearch();
        });
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                handleSearch();
            }
        });


        // Navigation
        homeLink.addEventListener('click', (e) => { e.preventDefault(); showLibraryPage(); });
        moviesLink.addEventListener('click', (e) => { e.preventDefault(); showMoviesPage(); });
        mobileHomeLink.addEventListener('click', (e) => {
            e.preventDefault();
            showLibraryPage();
            closeMobileMenu();
        });
        mobileMoviesLink.addEventListener('click', (e) => {
            e.preventDefault();
            showMoviesPage();
            closeMobileMenu();
        });


        // Global Event Listener for dynamically created content
        document.addEventListener('click', (e) => {
            const cardLink = e.target.closest('.donghua-card, .new-item a');
             if (cardLink) {
                 e.preventDefault();
                 handleNavigation(cardLink.hash);
                 return; // Stop further execution
             }
            
            const episodeBtn = e.target.closest('.episode-btn:not(:disabled)');
            if (episodeBtn) {
                selectEpisode(episodeBtn.dataset.episodeNumber);
                return;
            }

            if (e.target.closest('#show-all-episodes-btn')) {
                 openEpisodeModal();
                 return;
            }
            if (e.target === episodeModal || e.target.closest('#modal-close-btn')) {
                 closeEpisodeModal();
                 return;
            }
            
            if (e.target.closest('#prev-episode-btn')) {
                const prevEp = currentEpisodeNumber - 1;
                if (prevEp > 0) selectEpisode(prevEp);
                return;
            }
            if (e.target.closest('#next-episode-btn')) {
                const nextEp = currentEpisodeNumber + 1;
                if(nextEp <= currentDonghua.maxEpisodes) selectEpisode(nextEp);
                return;
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
            handleNavigation(window.location.hash);
        });
    }
    
    initializePage();
};
