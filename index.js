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

        function createMovieData() {
             return [
                 { id: 'm1', title: 'Ne Zha', subtitle: 'Fantasy, Action', img: 'images/nezha.jpg' },
                 { id: 'm2', title: 'White Snake', subtitle: 'Romance, Fantasy', img: 'images/whitesnake.jpg' },
                 { id: 'm3', title: 'Big Fish & Begonia', subtitle: 'Fantasy, Drama', img: 'images/bigfish.jpg' },
             ];
        }

        function createYourDramaData() {
            const dailymotionBaseUrl = "https://www.dailymotion.com/embed/video/";
            const dramaData = [
              {
                  id: 'd1',
                  title: 'Battle Through The Heavens',
                  slug: 'Battle-through-the-heavens',
                  subtitle: 'Action, Fantasy',
                  description: 'A legendary tale of a young man who was once considered a genius, but suddenly loses his powers. He overcomes great challenges to reclaim his honor.',
                  maxEpisodes: 152,
                  latestEpisode: 152,
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
                      { start: 152, end: 152, url: `${dailymotionBaseUrl}x9lolp4` }
                  ],
                  rating: 9.2, status: 'Ongoing', studio: 'Shanghai Motion Magic', duration: '20 min per ep', country: 'China',
                  network: 'Tencent Penguin Pictures', released: '2022-07-31', season: '5', type: 'ONA',
                  fansub: 'Lucifer Donghua', tags: ['Action', 'Adventure', 'Fantasy', 'Martial Art', 'Romance']
              },
              {
                  id: 'd2', title: 'Shrouding The Heavens', slug: 'shrouding-the-heavens',
                  subtitle: 'Xianxia, Comedy', description: 'The hilarious story of a young man who values longevity above all else, leading to comical adventures in a world of cultivation.', maxEpisodes: 52, latestEpisode: 23, releaseTime: '11:00 AM',
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
                            { start: 115, end: 116, url: `${dailymotionBaseUrl}x9ltkeq` }  // 4K Multi-Sub Upload [6, 9];
              ],
                  rating: 9.0, status: 'Ongoing', studio: 'B.CMAY PICTURES', duration: '22 min per ep', country: 'China',
                  network: 'Bilibili', released: '2023-11-18', season: '1', type: 'ONA',
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
                  network: 'Tencent Video', released: '2020-11-29', season: '3', type: 'ONA',
                  fansub: 'Official Sub', tags: ['Sci-Fi', 'Action', 'Adventure', 'Mecha']
              },
              {
                  id: 'd4', title: 'Perfect World', slug: 'perfect-world',
                  subtitle: 'Fantasy, Adventure', description: 'Born for cultivation, a peerless genius, Shi Hao, embarks on a journey to become a legendary figure in a world full of wonders and dangers.', maxEpisodes: 156, latestEpisode: 156,
                  img: 'images/Perfect world.jpg.jpg',
                  episodeLinks: [
                  { start: 9, end: 16, url: 'x8u66va' }, // Part 2 of 17, approx. episodes, ENG SUB [1, 3]
                        { start: 17, end: 24, url: 'x8u66vc' }, // Part 3 of 17, approx. episodes, ENG SUB [1, 4]
                        { start: 25, end: 32, url: 'x8u66v8' }, // Part 4 of 17, approx. episodes, ENG SUB [1, 5]
                        { start: 33, end: 40, url: 'x8u6fqc' }, // Part 5 of 17, approx. episodes, ENG SUB [1, 6]
                        { start: 41, end: 48, url: 'x8u8q78' }, // Part 6 of 17, approx. episodes, ENG SUB [1, 7]
                        { start: 49, end: 56, url: 'x8u6fqe' }, // Part 7 of 17, approx. episodes, ENG SUB [1, 8]
                        { start: 57, end: 64, url: 'x8u6fqe' }, // Part 8 of 17, approx. episodes, ENG SUB (Inferred from Part 7) [1, 8]
                        { start: 65, end: 72, url: 'x8u6fqe' }, // Part 9 of 17, approx. episodes, ENG SUB (Inferred from Part 7) [1, 8]
                        { start: 73, end: 80, url: 'x8u6fqe' }, // Part 10 of 17, approx. episodes, ENG SUB (Inferred from Part 7) [1, 8]
                        { start: 81, end: 88, url: 'x8u9hss' }, // Part 11 of 17, approx. episodes, ENG SUB (Inferred from Part 12) [1, 9]
                        { start: 89, end: 96, url: 'x8u9hss' }, // Part 12 of 17, approx. episodes, ENG SUB [1, 9]
                        { start: 97, end: 104, url: 'x8u9hss' }, // Part 13 of 17, approx. episodes, ENG SUB (Inferred from Part 12) [1, 9]
                        { start: 105, end: 112, url: 'x8ub3b0' }, // Part 14 of 17, approx. episodes, ENG SUB [1, 10]
                        { start: 113, end: 120, url: 'x8u9hss' }, // Part 15 of 17, approx. episodes, ENG SUB (Inferred from Part 12) [1, 9]
                        { start: 121, end: 130, url: 'x8u9hss' }, // Part 17 of 17, approx. episodes, ENG SUB (Inferred from Part 12) [1, 9]

                        // Mid-Series Compilations & Singles
                        { start: 131, end: 140, url: 'x8u66va' }, // Compilation, ENG SUB [1, 3]
                        { start: 141, end: 145, url: 'x83sto' }, // Compilation, ENG SUB (Note: This is a PLAYLIST ID, not a video ID) [1]
                        { start: 146, end: 146, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 147, end: 147, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 148, end: 148, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 149, end: 149, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 150, end: 150, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 151, end: 151, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]
                        { start: 152, end: 152, url: 'x83sto' }, // Single Episode, ENG SUB (Note: This is a PLAYLIST ID) [1]

                        // Episodes 153-204 are not individually cataloged in the report.

                        // Recent Episodes (from various uploaders)
                        { start: 205, end: 205, url: 'x9fnxhg' }, // Single Episode, 4K, ENG/Indo Sub [11]
                        { start: 206, end: 206, url: 'x9fnxhg' }, // Single Episode, ENG SUB (Note: ID may be for Ep 205) [11]
                        { start: 207, end: 207, url: 'x9ggcyc' }, // Single Episode, ENG/Indo Sub [12]
                        { start: 208, end: 208, url: 'x9fnxhg' }, // Single Episode, ENG/Indo Sub (Note: ID may be for Ep 205) [11]
                        { start: 209, end: 209, url: 'x9h8vcu' }, // Single Episode, 4K, ENG/Indo Sub [13]
                        { start: 210, end: 210, url: 'x9hfks' }, // Single Episode, Sub Indo (Note: This is a PLAYLIST ID) [14]
                        { start: 213, end: 213, url: 'x9itcpm' }, // Single Episode, 4K, ENG/Indo Sub [15]
                        { start: 215, end: 215, url: 'x9fnxhg' }, // Single Episode, ENG SUB (Note: ID may be for Ep 205) [11]
                        { start: 218, end: 218, url: 'x9kudhq' }, // Single Episode, 4K, ENG/Indo Sub [16]
                        { start: 219, end: 219, url: 'x9l8xik' }, // Single Episode, 4K, ENG/Indo Sub [17]
                        { start: 220, end: 220, url: 'x9lxjgg' }, // Single Episode, 4K, ENG/Indo Sub (Note: ID may be for Ep 221) [18]
                        { start: 221, end: 221, url: 'x9lxjgg' }, // Single Episode, 4K, ENG/Indo Sub [18]
                        { start: 221, end: 221, url: 'x9lxlnc' }, // Alternative Upload, 4K, Multi-Sub [19]
                        { start: 221, end: 221, url: 'x9l8xik' }, // Alternative Upload, Sub Indo (Note: ID may be for Ep 219) [17]
                        { start: 222, end: 223, url: 'x9lxjgg' }, // Preview for upcoming episodes (Note: ID may be for Ep 221) [18]
                  ],
                  rating: 9.3, status: 'Ongoing', studio: 'Shanghai Foch Film', duration: '20 min per ep', country: 'China',
                  network: 'Tencent Video', released: '2021-04-23', season: '1', type: 'ONA',
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
                  network: 'Tencent Video', released: '2022-04-28', season: '2', type: 'ONA',
                  fansub: '3D Anime Official', tags: ['Fantasy', 'Magic', 'Adventure', 'Action']
              },
              {
                  id: 'd6', title: 'Soul Land 2', slug: 'soul-land-2',
                  subtitle: 'Action, Romance', description: 'The story continues with the next generation of spirit masters from Shrek Academy, facing new challenges and powerful enemies.', maxEpisodes: 250, latestEpisode: 53,
                  img: 'images/soul land 2.jpg.jpg',
                  episodeLinks: [ ],
                  rating: 9.1, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
                  network: 'Tencent Video', released: '2023-06-24', season: '1', type: 'ONA',
                  fansub: 'Official Sub', tags: ['Action', 'Romance', 'Fantasy', 'Adventure']
              },
              {
                  id: 'd7', title: 'Jade Dynasty', slug: 'jade-dynasty',
                  subtitle: 'Xianxia, Romance', description: 'A kind-hearted boy, Zhang Xiaofan, gets caught in a conflict between good and evil, discovering a world of powerful martial arts and romance.', maxEpisodes: 26, latestEpisode: 26,
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
                  network: 'Tencent Video', released: '2022-11-02', season: '1', type: 'ONA',
                  fansub: 'Subber Team', tags: ['Xianxia', 'Romance', 'Action']
              },
              {
                  id: 'd8', title: 'Renegade Immortal', slug: 'renegade-immortal',
                  subtitle: 'Xianxia, Action', description: 'Follow Wang Lin as he defies his humble origins and a lack of talent to walk the path of an immortal, facing betrayal and hardship along the way.', maxEpisodes: 95, latestEpisode: 95,
                  img: 'images/Renegadeimmortal.jpg.jpg',
                  episodeLinks: [ 
                      // Example of adding episode 1 back
                      { start: 1,   end: 1,   url: `${dailymotionBaseUrl}x9mxxxx` }, // Placeholder for Ep 1
                      { start: 2,    end: 2,   url: `${dailymotionBaseUrl}`},
                      { start: 3,    end: 3,   url: `${dailymotionBaseUrl}`},
                      { start: 6,   end: 10,  url: `${dailymotionBaseUrl}x9jvj7q` },   // Episodes 6-10 (4K Multi-Sub) [2]
                      { start: 11,  end: 15,  url: `${dailymotionBaseUrl}x9jvru6` },   // Episodes 11-15 (4K Multi-Sub) [3]
                      { start: 16,  end: 20,  url: `${dailymotionBaseUrl}x9bu166` },   // Episodes 16-20 (4K Multi-Sub) [4]
                      { start: 38,  end: 43,  url: `${dailymotionBaseUrl}x9c02si` },   // Episodes 38-43 (Compilation) [5]
                      { start: 60,  end: 60,  url: `${dailymotionBaseUrl}x9h15x6` },   // Episode 60 [6]
                      { start: 61,  end: 65,  url: `${dailymotionBaseUrl}x9c4jgm` },   // Episodes 61-65 (Compilation) [7]
                      { start: 66,  end: 70,  url: `${dailymotionBaseUrl}x9ca72q` },   // Episodes 66-70 (Compilation) [8]
                      { start: 71,  end: 73,  url: `${dailymotionBaseUrl}x9d1ij6` },   // Episodes 71-73 (Compilation) [9]
                      { start: 74,  end: 74,  url: `${dailymotionBaseUrl}x9dehzu` },   // Episode 74 [10]
                      { start: 81,  end: 85,  url: `${dailymotionBaseUrl}x9jppdm` },   // Episodes 81-85 (Compilation) [11]
                      { start: 91,  end: 91,  url: `${dailymotionBaseUrl}x9klflu` },   // Episode 91 [12]
                      { start: 93,  end: 93,  url: `${dailymotionBaseUrl}x9lehqo` },   // Episode 93 [13]
                      { start: 94,  end: 94,  url: `${dailymotionBaseUrl}x9lpunq` },   // Episode 94 [14]
                      { start: 95,  end: 95,  url: `${dailymotionBaseUrl}x9m2c8y` }    // Episode 95 [15]
                  ],
                  rating: 9.4, status: 'Ongoing', studio: 'Studio DRE', duration: '20 min per ep', country: 'China',
                  network: 'Tencent Video', released: '2023-11-25', season: '1', type: 'ONA',
                  fansub: 'Lucifer Donghua', tags: ['Xianxia', 'Action', 'Cultivation']
              },
              {
                  id: 'd9', title: 'Legend Of Xianwu', slug: 'legend-of-xianwu',
                  subtitle: 'E-Sports, Action', description: 'A top-tier professional e-sports player is unexpectedly reborn and must use his gaming knowledge to navigate a new world of martial arts.', maxEpisodes: 24, latestEpisode: 24,
                  img: 'images/legend of xianwu.jpg.jpg',
                  episodeLinks: [ ],
                  rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '24 min per ep', country: 'China',
                  network: 'Tencent Video', released: '2017-04-27', season: '2', type: 'ONA',
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
                  network: 'Tencent Video', released: '2018-01-20', season: '1', type: 'ONA',
                  fansub: 'Official Sub', tags: ['Fantasy', 'Action', 'Romance', 'Adventure'],
              },
              {
                  id: 'd11', title: 'The Immortal  Doctor in Modern City', slug: 'immortal-doctor',
                  subtitle: 'Modern, Fantasy', description: 'A powerful immortal doctor is reborn in the modern world. He uses his ancient skills to heal the sick, fight injustice, and navigate modern life.', maxEpisodes: 24, latestEpisode: 24,
                  img: 'images/The Immortal  Doctor in Modern City.jpg.jpg',
                  episodeLinks: [ ],
                  rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                  network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                  fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
              },
              {
                  id: 'd12', title: 'Tales Of Herding God', slug: '',
                  subtitle: 'Modern, Fantasy', description: 'A powerful immortal doctor is reborn in the modern world. He uses his ancient skills to heal the sick, fight injustice, and navigate modern life.', maxEpisodes: 24, latestEpisode: 24,
                  img: 'images/tails of herding god.jpg.jpg',
                  episodeLinks: [
                            { start: 2, end: 2, url: 'x983ozs' }, // Single Episode, Eng/Indo Sub [2]
                            { start: 3, end: 3, url: 'x98i2rc' }, // Single Episode, Eng/Indo Sub [3]
                            { start: 4, end: 4, url: 'x98wexy' }, // Single Episode, Eng/Indo Sub [4]
                            { start: 5, end: 5, url: 'x99afgq' }, // Single Episode, 4K, Eng/Indo Sub [5]
                            { start: 6, end: 6, url: 'x9a1coi' }, // Single Episode, 4K, Eng/Indo Sub [6]
                            { start: 7, end: 7, url: 'x9a1ine' }, // Single Episode, Multi-sub [7]
                            { start: 8, end: 8, url: 'x9aggd0' }, // Single Episode, Eng Sub [8]
                            { start: 9, end: 9, url: 'x9atc8m' }, // Single Episode, 4K, Eng/Indo Sub [9]
                            { start: 10, end: 10, url: 'x9b6ihe' }, // Single Episode, 4K, Eng/Indo Sub [10]
                            { start: 11, end: 11, url: 'x9bhnnq' }, // Single Episode, 4K, Eng/Indo Sub [11]
                            { start: 12, end: 12, url: 'x9btbjk' }, // Single Episode, Eng/Indo Sub [12]
                            { start: 13, end: 13, url: 'x9c7gsg' }, // Single Episode, 4K, Eng/Indo Sub [13]
                            { start: 14, end: 14, url: 'x9cm9r6' }, // Single Episode, Eng Sub [14]
                            { start: 15, end: 15, url: 'x9d13x8' }, // Single Episode, 4K, Eng/Indo Sub [15]
                            { start: 16, end: 16, url: 'x9de5oe' }, // Single Episode, Eng/Indo Sub [16]
                            { start: 17, end: 17, url: 'x9ds5j0' }, // Single Episode, 4K, Eng/Indo Sub [17]
                            { start: 18, end: 18, url: 'x9egz74' }, // Single Episode, Eng Sub [18]
                            { start: 19, end: 19, url: 'x9egbno' }, // Single Episode, Multi-sub, Mislabeled as Ep 18 [19]
                            { start: 20, end: 20, url: 'x9g4qh4' }, // Single Episode [20]
                            { start: 21, end: 21, url: 'x9ft2q2' }, // Single Episode, 4K, Eng/Indo Sub [21]
                            { start: 22, end: 22, url: 'x9g6762' }, // Single Episode, 4K, Eng/Indo Sub [22]
                            { start: 23, end: 23, url: 'x9glyiy' }, // Single Episode, 4K, Eng/Indo Sub [23]
                            { start: 24, end: 24, url: 'x9h0nls' }, // Single Episode, 4K, Eng/Indo Sub [24]
                            { start: 25, end: 25, url: 'x9hefcy' }, // Single Episode, Eng/Indo Sub [25]
                            { start: 26, end: 26, url: 'x9hecwy' }, // Preview Only. Full episode links are on this page [26]
                            { start: 27, end: 27, url: 'x9i72ca' }, // Single Episode, Eng Sub [27]
                            { start: 28, end: 28, url: 'x9ikibc' }, // Single Episode, Eng Sub [28]
                            { start: 29, end: 29, url: 'x9ixx9m' }, // Single Episode, 4K, Eng/Indo Sub [29]
                            { start: 30, end: 30, url: 'ID_UNAVAILABLE' }, // Link available on other pages (e.g., x9jpc0q) [30]
                            { start: 31, end: 31, url: 'x9jpc0q' }, // Single Episode, 4K, Eng/Indo Sub [30]
                            { start: 32, end: 32, url: 'ID_UNAVAILABLE' }, // Link available on other pages (e.g., x9jpc0q) [30]
                            { start: 33, end: 33, url: 'ID_UNAVAILABLE' }, // Link available on other pages (e.g., x9jpc0q) [30]
                            { start: 34, end: 34, url: 'x9kzkpq' }, // Single Episode, Eng/Indo Sub [31]
                            { start: 35, end: 35, url: 'x9lemjy' }, // Single Episode, Eng Sub [32]
                            { start: 36, end: 36, url: 'ID_UNAVAILABLE' }, // Link available on other pages (e.g., x9jpc0q) [30]
                            { start: 37, end: 37, url: 'x9m1yhk' }, // Single Episode, Multi-sub [33]
                   ],
                  rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '15 min per ep', country: 'China',
                  network: 'Youku', released: '2023-08-27', season: '1', type: 'ONA',
                  fansub: 'Anime Fans', tags: ['Modern', 'Fantasy', 'Action', 'Comedy'],
              }
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
        }

        function showWatchPage(item) {
            currentDonghua = item;
            libraryView.style.display = 'none';
            searchView.style.display = 'none';
            moviesView.style.display = 'none';
            watchView.style.display = 'block';

            modalEpisodeTitle.textContent = `${item.title} - Episodes`;
            renderEpisodeList();
            
            // Select the first available episode by default
            if (item.episodeLinks && item.episodeLinks.length > 0) {
                const firstEpisode = [...item.episodeLinks].sort((a, b) => a.start - b.start)[0];
                selectEpisode(firstEpisode.start);
            } else {
                // Handle case with no episodes by showing the placeholder
                selectEpisode(1); 
            }
            
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
            document.getElementById('show-more-episodes-container').innerHTML = ''; // Clear show more button

            // Sort links by start episode to ensure correct order
            const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);

            sortedLinks.forEach(link => {
                const epBtn = document.createElement('button');
                epBtn.className = 'episode-btn';
                // If start and end are the same, just show the number. Otherwise, show the range.
                epBtn.textContent = link.start === link.end ? `${link.start}` : `${link.start}-${link.end}`;
                // The episode number to play is the start of the range.
                epBtn.dataset.episodeNumber = link.start;
                episodeGrid.appendChild(epBtn);
            });
        }

        function selectEpisode(episodeNumber) {
            if (!currentDonghua) return;
            currentEpisodeNumber = parseInt(episodeNumber, 10);

            const episodeLinkData = currentDonghua.episodeLinks.find(link =>
                currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
            );

            // Update header and description
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

            // Highlight active episode button
            document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
            // The active button is the one whose data-episode-number matches the start of the current link
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
                prevEpisodeBtn.disabled = true;
                nextEpisodeBtn.disabled = true;
                return;
            }

            const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
            const currentLinkIndex = sortedLinks.findIndex(link =>
                currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
            );

            prevEpisodeBtn.disabled = currentLinkIndex <= 0;
            nextEpisodeBtn.disabled = currentLinkIndex === -1 || currentLinkIndex >= sortedLinks.length - 1;
        }

        function openEpisodeModal() { episodeModal.classList.add('is-open'); }
        function closeEpisodeModal() { episodeModal.classList.remove('is-open'); }

        // --- RENDERING FUNCTIONS (createCard, renderListItem, etc.) ---
        function createCard(item) {
            const card = document.createElement('div');
            card.className = 'donghua-card';
            card.dataset.id = item.id;
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
            let infoHtml = '';
            if(type === 'series') {
                const releaseDate = new Date(item.released).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                infoHtml = `<h4>${item.title}</h4><p>${item.tags.slice(0, 3).join(', ')}</p><p>${releaseDate}</p>`;
            } else if(type === 'episode') {
                infoHtml = `<h4>${item.title}</h4><p>Episode ${item.latestEpisode}</p><p class="release-time"><i class="fa-regular fa-clock"></i> ${item.releaseTime || ''}</p>`;
            } else if(type === 'favorite') {
                infoHtml = `<h4>${item.title}</h4><p>${item.status}</p>`;
            }
            listItem.innerHTML = `
                <img src="${item.img}" alt="${item.title}" class="new-item-img" onerror="this.onerror=null;this.src='https://placehold.co/60x84/14181F/C5C6C7?text=N/A';">
                <div class="new-item-info">${infoHtml}</div>`;
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
                showLibraryPage();
                return;
            }
            const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query));
            showSearchView(query, results);
        }

        // --- INITIALIZATION & EVENT LISTENERS ---
        function initializePage() {
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

            showLibraryPage();
            
            loadingSpinner.style.display = 'none';
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
            document.querySelectorAll('.site-header, .community-cta, .site-footer').forEach(el => {
                el.style.visibility = 'visible';
                el.style.opacity = '1';
            });

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
            homeLink.addEventListener('click', showLibraryPage);
            moviesLink.addEventListener('click', showMoviesPage);
            mobileHomeLink.addEventListener('click', () => {
                showLibraryPage();
                closeMobileMenu();
            });
            mobileMoviesLink.addEventListener('click', () => {
                showMoviesPage();
                closeMobileMenu();
            });


            // Global Event Listener
            document.addEventListener('click', (e) => {
                const card = e.target.closest('.donghua-card, .new-item');
                if(card && card.dataset.id && allDonghuaData.find(d => d.id === card.dataset.id)) {
                    const donghuaData = allDonghuaData.find(d => d.id === card.dataset.id);
                    if (donghuaData) showWatchPage(donghuaData);
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
        }
        
        initializePage();
    };
