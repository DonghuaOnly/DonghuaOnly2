 window.onload = () => {
            // --- Element Selection ---
            const loadingSpinner = document.getElementById('loading-spinner');
            const mainContent = document.getElementById('main-content');

            const libraryView = document.getElementById('library-view');
            const watchView = document.getElementById('watch-view');
            const searchView = document.getElementById('search-view');
            
            const hotSeriesGrid = document.getElementById('hot-series-grid');
            const latestReleaseGrid = document.getElementById('latest-release-grid');
            const newEpisodesTodayList = document.getElementById('new-episodes-today-list');
            const searchResultsGrid = document.getElementById('search-results-grid');
            const newSeriesList = document.getElementById('new-series-list');
            const favoriteList = document.getElementById('favorite-list');
            const recommendedGrid = document.getElementById('recommended-grid');
            const watchPageOngoingList = document.getElementById('watch-page-ongoing-list');
            const watchPagePopularList = document.getElementById('watch-page-popular-list');
            const completedSeriesList = document.getElementById('completed-series-list');


            const backToLibraryBtn = document.getElementById('back-to-library-btn'); // This button is not in HTML, but kept for JS logic
            const searchInput = document.getElementById('search-input');
            const themeToggleBtn = document.getElementById('theme-toggle-btn');
            
            const dailymotionPlayer = document.getElementById('dailymotion-player'); // Changed from videoPlayer
            
            const prevEpisodeBtn = document.getElementById('prev-episode-btn');
            const nextEpisodeBtn = document.getElementById('next-episode-btn');
            const showAllEpisodesBtn = document.getElementById('show-all-episodes-btn');
            
            const episodeModal = document.getElementById('episode-modal');
            const modalCloseBtn = document.getElementById('modal-close-btn');
            const episodeGrid = document.getElementById('episode-grid');
            const modalEpisodeTitle = document.querySelector('#episode-modal h3');


            // --- DATA MANAGEMENT ---
            let allDonghuaData = [];

            function createYourDramaData() {
                // The base URL for embedding Dailymotion videos
                const dailymotionBaseUrl = "https://www.dailymotion.com/embed/video/"; 
                
                const dramaData = [
                    {
                        id: 'd1', 
                        title: 'Battle Through The Heavens', 
                        slug: 'Battle-through-the-heavens',
                        subtitle: 'Action, Fantasy', 
                        description: 'A legendary tale of a young man who was once considered a genius, but suddenly loses his powers. He overcomes great challenges to reclaim his honor.', 
                        maxEpisodes: 96, // Updated to 96 episodes for demonstration
                        latestEpisode: 96, // Assuming all 96 episodes are available
                        releaseTime: '10:00 AM',
                        img: 'images/Batt.jpg.jpg', 
                        episodeLinks: [
                            // *** IMPORTANT: You MUST replace these with your actual Dailymotion Video IDs ***
                            // These are hypothetical IDs for demonstration purposes only.
                            // To find actual IDs, go to the video on Dailymotion.com, and the ID is in the URL after /video/
                            `${dailymotionBaseUrl}x9m3jdq`, // Episode 1
                            `${dailymotionBaseUrl}x1abc002`, // Episode 2
                            `${dailymotionBaseUrl}x1abc003`, // Episode 3
                            `${dailymotionBaseUrl}x1abc004`, // Episode 4
                            `${dailymotionBaseUrl}x1abc005`, // Episode 5
                            `${dailymotionBaseUrl}x1abc006`, // Episode 6
                            `${dailymotionBaseUrl}x1abc007`, // Episode 7
                            `${dailymotionBaseUrl}x1abc008`, // Episode 8
                            `${dailymotionBaseUrl}x1abc009`, // Episode 9
                            `${dailymotionBaseUrl}x1abc010`, // Episode 10
                            `${dailymotionBaseUrl}x1abc011`, // Episode 11
                            `${dailymotionBaseUrl}x1abc012`, // Episode 12
                            `${dailymotionBaseUrl}x1abc013`, // Episode 13
                            `${dailymotionBaseUrl}x1abc014`, // Episode 14
                            `${dailymotionBaseUrl}x1abc015`, // Episode 15
                            `${dailymotionBaseUrl}x1abc016`, // Episode 16
                            `${dailymotionBaseUrl}x1abc017`, // Episode 17
                            `${dailymotionBaseUrl}x1abc018`, // Episode 18
                            `${dailymotionBaseUrl}x1abc019`, // Episode 19
                            `${dailymotionBaseUrl}x1abc020`, // Episode 20
                            `${dailymotionBaseUrl}x1abc021`, // Episode 21
                            `${dailymotionBaseUrl}x1abc022`, // Episode 22
                            `${dailymotionBaseUrl}x1abc023`, // Episode 23
                            `${dailymotionBaseUrl}x1abc024`, // Episode 24
                            `${dailymotionBaseUrl}x1abc025`, // Episode 25
                            `${dailymotionBaseUrl}x1abc026`, // Episode 26
                            `${dailymotionBaseUrl}x1abc027`, // Episode 27
                            `${dailymotionBaseUrl}x1abc028`, // Episode 28
                            `${dailymotionBaseUrl}x1abc029`, // Episode 29
                            `${dailymotionBaseUrl}x1abc030`, // Episode 30
                            `${dailymotionBaseUrl}x1abc031`, // Episode 31
                            `${dailymotionBaseUrl}x1abc032`, // Episode 32
                            `${dailymotionBaseUrl}x1abc033`, // Episode 33
                            `${dailymotionBaseUrl}x1abc034`, // Episode 34
                            `${dailymotionBaseUrl}x1abc035`, // Episode 35
                            `${dailymotionBaseUrl}x8j8m5s`, // Episode 36
                            `${dailymotionBaseUrl}x1abc037`, // Episode 37
                            `${dailymotionBaseUrl}x1abc038`, // Episode 38
                            `${dailymotionBaseUrl}x1abc039`, // Episode 39
                            `${dailymotionBaseUrl}x1abc040`, // Episode 40
                            `${dailymotionBaseUrl}x1abc041`, // Episode 41
                            `${dailymotionBaseUrl}x1abc042`, // Episode 42
                            `${dailymotionBaseUrl}x1abc043`, // Episode 43
                            `${dailymotionBaseUrl}x1abc044`, // Episode 44
                            `${dailymotionBaseUrl}x1abc045`, // Episode 45
                            `${dailymotionBaseUrl}x1abc046`, // Episode 46
                            `${dailymotionBaseUrl}x1abc047`, // Episode 47
                            `${dailymotionBaseUrl}x1abc048`, // Episode 48
                            `${dailymotionBaseUrl}x1abc049`, // Episode 49
                            `${dailymotionBaseUrl}x1abc050`, // Episode 50
                            `${dailymotionBaseUrl}x1abc051`, // Episode 51
                            `${dailymotionBaseUrl}x1abc052`, // Episode 52
                            `${dailymotionBaseUrl}x1abc053`, // Episode 53
                            `${dailymotionBaseUrl}x1abc054`, // Episode 54
                            `${dailymotionBaseUrl}x1abc055`, // Episode 55
                            `${dailymotionBaseUrl}x1abc056`, // Episode 56
                            `${dailymotionBaseUrl}x1abc057`, // Episode 57
                            `${dailymotionBaseUrl}x1abc058`, // Episode 58
                            `${dailymotionBaseUrl}x1abc059`, // Episode 59
                            `${dailymotionBaseUrl}x1abc060`, // Episode 60
                            `${dailymotionBaseUrl}x1abc061`, // Episode 61
                            `${dailymotionBaseUrl}x1abc062`, // Episode 62
                            `${dailymotionBaseUrl}x1abc063`, // Episode 63
                            `${dailymotionBaseUrl}x1abc064`, // Episode 64
                            `${dailymotionBaseUrl}x1abc065`, // Episode 65
                            `${dailymotionBaseUrl}x1abc066`, // Episode 66
                            `${dailymotionBaseUrl}x1abc067`, // Episode 67
                            `${dailymotionBaseUrl}x1abc068`, // Episode 68
                            `${dailymotionBaseUrl}x1abc069`, // Episode 69
                            `${dailymotionBaseUrl}x1abc070`, // Episode 70
                            `${dailymotionBaseUrl}x1abc071`, // Episode 71
                            `${dailymotionBaseUrl}x1abc072`, // Episode 72
                            `${dailymotionBaseUrl}x1abc073`, // Episode 73
                            `${dailymotionBaseUrl}x1abc074`, // Episode 74
                            `${dailymotionBaseUrl}x1abc075`, // Episode 75
                            `${dailymotionBaseUrl}x1abc076`, // Episode 76
                            `${dailymotionBaseUrl}x1abc077`, // Episode 77
                            `${dailymotionBaseUrl}x1abc078`, // Episode 78
                            `${dailymotionBaseUrl}x1abc079`, // Episode 79
                            `${dailymotionBaseUrl}x1abc080`, // Episode 80
                            `${dailymotionBaseUrl}x1abc081`, // Episode 81
                            `${dailymotionBaseUrl}x1abc082`, // Episode 82
                            `${dailymotionBaseUrl}x1abc083`, // Episode 83
                            `${dailymotionBaseUrl}x1abc084`, // Episode 84
                            `${dailymotionBaseUrl}x1abc085`, // Episode 85
                            `${dailymotionBaseUrl}x1abc086`, // Episode 86
                            `${dailymotionBaseUrl}x1abc087`, // Episode 87
                            `${dailymotionBaseUrl}x1abc088`, // Episode 88
                            `${dailymotionBaseUrl}x1abc089`, // Episode 89
                            `${dailymotionBaseUrl}x1abc090`, // Episode 90
                            `${dailymotionBaseUrl}x1abc091`, // Episode 91
                            `${dailymotionBaseUrl}x1abc092`, // Episode 92
                            `${dailymotionBaseUrl}x1abc093`, // Episode 93
                            `${dailymotionBaseUrl}x1abc094`, // Episode 94
                            `${dailymotionBaseUrl}x1abc095`, // Episode 95
                            `${dailymotionBaseUrl}x1abc096`  // Episode 96
                        ],
                        rating: 9.2, status: 'Ongoing', studio: 'Shanghai Motion Magic', duration: '20 min per ep', country: 'China',
                        network: 'Tencent Penguin Pictures', released: 'Jul 31, 2022', season: '5', type: 'ONA',
                        fansub: 'Lucifer Donghua', tags: ['Action', 'Adventure', 'Fantasy', 'Martial Art', 'Romance']
                        
                    },
                    {
                        id: 'd2', title: 'Shrouding To The Heaven', slug: 'Shrouding-to-the-heaven',
                        subtitle: 'Xianxia, Comedy', description: 'The hilarious story of a young man who values longevity above all else, leading to comical adventures in a world of cultivation.', maxEpisodes: 52, latestEpisode: 23, releaseTime: '11:00 AM',
                        img: 'images/Shrouding to the heaven.jpg.jpg', 
                        episodeLinks: [
                        `${dailymotionBaseUrl}x1abc096`,
                        ],
                        
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 52}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_STTH_EP_${j + 1}`),
                        rating: 9.0, status: 'Ongoing', studio: 'B.CMAY PICTURES', duration: '22 min per ep', country: 'China',
                        network: 'Bilibili', released: 'Nov 18, 2023', season: '1', type: 'ONA',
                        fansub: 'Anime Official', tags: ['Xianxia', 'Comedy', 'Adventure']
                        
                    },
                    {
                        id: 'd3', title: 'Swallowed Star', slug: 'swallowed-star',
                        subtitle: 'Sci-Fi, Action', description: 'In a future world ravaged by a virus, humanity finds new strength. A young man from a poor background fights to protect his family and the world.', maxEpisodes: 78, latestEpisode: 78, releaseTime: '12:00 PM',
                        img: 'images/Loufeng.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 78}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_SS_EP_${j + 1}`),
                        rating: 9.5, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '21 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Nov 29, 2020', season: '3', type: 'ONA',
                        fansub: 'Official Sub', tags: ['Sci-Fi', 'Action', 'Adventure', 'Mecha']
                    },
                    {
                        id: 'd4', title: 'Perfect World', slug: 'perfect-world',
                        subtitle: 'Fantasy, Adventure', description: 'Born for cultivation, a peerless genius, Shi Hao, embarks on a journey to become a legendary figure in a world full of wonders and dangers.', maxEpisodes: 156, latestEpisode: 156,
                        img: 'images/Perfect world.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 156}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_PW_EP_${j + 1}`),
                        rating: 9.3, status: 'Ongoing', studio: 'Shanghai Foch Film', duration: '20 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Apr 23, 2021', season: '1', type: 'ONA',
                        fansub: 'Lucifer Donghua', tags: ['Fantasy', 'Adventure', 'Xianxia']
                    },
                    {
                        id: 'd5', title: 'Throne of Seal', slug: 'throne-of-seal',
                        subtitle: 'Fantasy, Magic', description: 'In a world where humanity is on the brink of extinction from demon attacks, a young knight, Long Haochen, rises to become a legendary leader.', maxEpisodes: 104, latestEpisode: 104,
                        img: 'images/throne of seal.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 104}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_TOS_EP_${j + 1}`),
                        rating: 8.9, status: 'Finished', studio: 'Shenman Entertainment', duration: '20 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Apr 28, 2022', season: '2', type: 'ONA',
                        fansub: '3D Anime Official', tags: ['Fantasy', 'Magic', 'Adventure', 'Action']
                    }, 
                    {
                        id: 'd6', title: 'Soul Land 2', slug: 'soul-land-2',
                        subtitle: 'Action, Romance', description: 'The story continues with the next generation of spirit masters from Shrek Academy, facing new challenges and powerful enemies.', maxEpisodes: 250, latestEpisode: 53,
                        img: 'images/soul land 2.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 250}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_SL2_EP_${j + 1}`),
                        rating: 9.1, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Jun 24, 2023', season: '1', type: 'ONA',
                        fansub: 'Official Sub', tags: ['Action', 'Romance', 'Fantasy', 'Adventure']
                    },
                    {
                        id: 'd7', title: 'Jade Dynasty', slug: 'jade-dynasty',
                        subtitle: 'Xianxia, Romance', description: 'A kind-hearted boy, Zhang Xiaofan, gets caught in a conflict between good and evil, discovering a world of powerful martial arts and romance.', maxEpisodes: 26, latestEpisode: 26,
                        img: 'images/Jade dynasty.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 26}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_JD_EP_${j + 1}`),
                        rating: 8.8, status: 'Ongoing', studio: 'Cloud Art', duration: '22 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Nov 02, 2022', season: '1', type: 'ONA',
                        fansub: 'Subber Team', tags: ['Xianxia', 'Romance', 'Action']
                    },
                    {
                        id: 'd8', title: 'Renegade Immortal', slug: 'renegade-immortal',
                        subtitle: 'Xianxia, Action', description: 'Follow Wang Lin as he defies his humble origins and a lack of talent to walk the path of an immortal, facing betrayal and hardship along the way.', maxEpisodes: 95, latestEpisode: 95,
                        img: 'images/Renegadeimmortal.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 95}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_RI_EP_${j + 1}`),
                        rating: 9.4, status: 'Ongoing', studio: 'Studio DRE', duration: '20 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Nov 25, 2023', season: '1', type: 'ONA',
                        fansub: 'Lucifer Donghua', tags: ['Xianxia', 'Action', 'Cultivation']
                    },
                    {
                        id: 'd9', title: 'Legend Of xianwu', slug: 'legend-of-xianwu',
                        subtitle: 'E-Sports, Action', description: 'A top-tier professional e-sports player is unexpectedly reborn and must use his gaming knowledge to navigate a new world of martial arts.', maxEpisodes: 24, latestEpisode: 24,
                        img: 'images/legend of xianwu.jpg.jpg', 
                        // You would replace the placeholder for this series similarly
                        episodeLinks: Array.from({length: 24}, (_, j) => `${dailymotionBaseUrl}YOUR_DAILYMOTION_VIDEO_ID_LOX_EP_${j + 1}`),
                        rating: 8.5, status: 'Ongoing', studio: 'G.CMay Animation & Film', duration: '24 min per ep', country: 'China',
                        network: 'Tencent Video', released: 'Apr 27, 2017', season: '2', type: 'ONA',
                        fansub: 'Anime Fans', tags: ['E-Sports', 'Action', 'Comedy'],
                        
                    },
                ];
                return dramaData;
            }


            // --- STATE & THEME MANAGEMENT ---
            let currentDonghua = null;
            let currentEpisodeNumber = 1;
            let episodesCurrentlyShown = 0;

            const setTheme = (theme) => {
                document.body.classList.toggle('light-theme', theme === 'light');
                themeToggleBtn.innerHTML = theme === 'light' ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
                localStorage.setItem('theme', theme);
            };
            

            // --- VIEW MANAGEMENT ---
            function showSearchView(query, results) {
                libraryView.style.display = 'none';
                watchView.style.display = 'none';
                searchView.style.display = 'block';
                mainContent.classList.add('container');
                document.getElementById('search-results-title').textContent = `Search Results for "${query}"`;
                renderCards(results, searchResultsGrid, true);
                if (results.length === 0) {
                    searchResultsGrid.innerHTML = `<p class="no-results-message">No results found.</p>`;
                }
            }

            function showLibraryPage() {
                watchView.style.display = 'none';
                searchView.style.display = 'none';
                libraryView.style.display = 'grid'; 
                mainContent.classList.add('container');
                // Pause Dailymotion player when leaving watch page
                if (dailymotionPlayer) {
                    dailymotionPlayer.src = ""; // Clear the src to stop playback
                    dailymotionPlayer.style.display = 'none';
                }
            }

            function showWatchPage(item) {
                currentDonghua = item;
                // If episodes array isn't explicitly defined, create it based on maxEpisodes and episodeLinks
                if (!currentDonghua.episodes) {
                    currentDonghua.episodes = Array.from({length: item.maxEpisodes}, (_, j) => ({
                        episode: j + 1,
                        url: item.episodeLinks[j] || '' // Use the provided episodeLink or an empty string if not found
                    }));
                }
                libraryView.style.display = 'none';
                searchView.style.display = 'none';
                watchView.style.display = 'block';
                mainContent.classList.remove('container'); // Remove container class for watch view layout
                modalEpisodeTitle.textContent = `${item.title} - Episodes`;
                episodesCurrentlyShown = 0; // Reset for modal episode list
                episodeGrid.innerHTML = ''; // Clear previous episode buttons
                document.getElementById('show-more-episodes-container').innerHTML = ''; // Clear show more button
                renderEpisodeBatch(); // Render initial batch of episode buttons
                selectEpisode(1); // Load the first episode by default
                
                // --- Populate Watch Page Sidebar ---
                // Filter out the current item and get random recommendations
                const recommendations = allDonghuaData.filter(d => d.id !== item.id).sort(() => 0.5 - Math.random()).slice(0, 6); 
                renderCards(recommendations, recommendedGrid, true); // Render recommended series as cards

                // Filter for ongoing series (excluding current) and popular series (excluding current)
                const ongoingItems = allDonghuaData.filter(d => d.status === 'Ongoing' && d.id !== item.id).slice(0, 5);
                const popularItems = [...allDonghuaData].sort((a,b) => b.rating - a.rating).filter(d => d.id !== item.id).slice(0,5);
                renderList(ongoingItems, watchPageOngoingList, 'episode', true); // Render ongoing series in list format
                renderList(popularItems, watchPagePopularList, 'series', true); // Render popular series in list format

                window.scrollTo(0, 0); // Scroll to top of the page
            }

            // --- VIDEO & EPISODE LOGIC ---
            function renderEpisodeBatch() {
                if (!currentDonghua) return; // Exit if no donghua is selected
                const showMoreContainer = document.getElementById('show-more-episodes-container');
                const episodesToRender = 50; // Number of episodes to show per batch
                const startEpisode = episodesCurrentlyShown + 1;
                const endEpisode = Math.min(startEpisode + episodesToRender - 1, currentDonghua.maxEpisodes);

                // Loop to create episode buttons for the current batch
                for (let i = startEpisode; i <= endEpisode; i++) {
                    const epBtn = document.createElement('button');
                    epBtn.className = 'episode-btn';
                    epBtn.textContent = i;
                    epBtn.dataset.episodeNumber = i; // Store episode number in data attribute
                    episodeGrid.appendChild(epBtn); // Add button to the episode grid
                }
                episodesCurrentlyShown = endEpisode; // Update count of currently shown episodes

                showMoreContainer.innerHTML = ''; // Clear previous "Show More" button
                // If there are more episodes to show, create a "Show More" button
                if (episodesCurrentlyShown < currentDonghua.maxEpisodes) {
                    const showMoreBtn = document.createElement('button');
                    showMoreBtn.innerHTML = `<i class="fa-solid fa-chevron-down"></i> Show More`;
                    showMoreBtn.className = 'show-more-btn';
                    showMoreBtn.onclick = renderEpisodeBatch; // Attach click handler to load next batch
                    showMoreContainer.appendChild(showMoreBtn);
                }
            }

            function selectEpisode(episodeNumber) {
                if (!currentDonghua) return; // Exit if no donghua is selected
                currentEpisodeNumber = parseInt(episodeNumber, 10); // Ensure episodeNumber is an integer
                
                // Update Watch Page Header
                document.getElementById('watch-title-header').textContent = `${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub`;
                document.getElementById('watch-metadata').innerHTML = `
                    <span>Released on ${new Date(currentDonghua.released).toLocaleDateString()}</span>
                    <span>Posted by admin</span>
                    <span>Series: <a href="#">${currentDonghua.title}</a></span>
                `;
                document.getElementById('video-desc-text').textContent = `Download ${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub. Watch ${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub. ${currentDonghua.title} always updated at DonghuaOnly.`;

                // Find the URL for the selected episode
                const episodeData = currentDonghua.episodes.find(ep => ep.episode == currentEpisodeNumber);
                // Use the episode URL if available and not empty, otherwise an empty string
                let videoUrl = (episodeData && episodeData.url && episodeData.url.trim() !== "") ? episodeData.url : '';
                
                const videoPlayerWrapper = document.querySelector('.video-player-wrapper');
                let videoPlaceholder = document.getElementById('video-placeholder-message');
                
                if (videoUrl) {
                    dailymotionPlayer.style.display = 'block'; // Show the iframe
                    if(videoPlaceholder) videoPlaceholder.style.display = 'none'; // Hide placeholder
                    dailymotionPlayer.src = videoUrl; // Set iframe src to load the video
                } else {
                    dailymotionPlayer.style.display = 'none'; // Hide the iframe
                    dailymotionPlayer.src = ""; // Clear the src to prevent loading previous video
                    // Create or show the placeholder message if no video URL is found
                    if(!videoPlaceholder) {
                        const placeholder = document.createElement('p');
                        placeholder.id = 'video-placeholder-message';
                        placeholder.textContent = "PLEASE WAIT UNTIL THE VIDEO IS RELEASED";
                        videoPlayerWrapper.appendChild(placeholder);
                        videoPlaceholder = placeholder; // Assign the newly created element
                    } else {
                        videoPlaceholder.style.display = 'block'; // Show placeholder
                    }
                }
                
                // Remove active class from all episode buttons and add to the current one
                document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
                const activeEpBtn = document.querySelector(`.episode-btn[data-episode-number="${currentEpisodeNumber}"]`);
                if (activeEpBtn) {
                    activeEpBtn.classList.add('active');
                    // Scroll the active button into view within the modal
                    activeEpBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }

                updateEpisodeNavButtons(); // Update previous/next button states
                closeEpisodeModal(); // Close the episode selection modal
            }

            function updateEpisodeNavButtons() {
                if (!currentDonghua) return; // Exit if no donghua is selected
                // Disable previous button if on the first episode
                prevEpisodeBtn.disabled = currentEpisodeNumber <= 1;
                // Disable next button if on the last episode
                nextEpisodeBtn.disabled = currentEpisodeNumber >= currentDonghua.maxEpisodes;
            }

            function openEpisodeModal() { episodeModal.classList.add('is-open'); }
            function closeEpisodeModal() { episodeModal.classList.remove('is-open'); }
            
            // Function to create a donghua card element
            function createCard(item) {
                const card = document.createElement('div');
                card.className = 'donghua-card';
                card.dataset.id = item.id; // Store item ID for later lookup
                card.innerHTML = `
                    <div class="card-poster">
                        <img src="${item.img}" alt="Poster for ${item.title}" onerror="this.onerror=null;this.src='https://placehold.co/400x600/14181F/C5C6C7?text=Image+Not+Found';">
                        <div class="card-details-overlay">
                             <h4>${item.title}</h4>
                            <div class="details-rating">
                                <i class="fa-solid fa-star"></i>
                                <span>${item.rating}</span>
                            </div>
                            <p><strong>Status:</strong> ${item.status}</p>
                            <p><strong>Genres:</strong> ${item.tags.slice(0,2).join(', ')}</p>
                            <p class="details-description">${item.description}</p>
                        </div>
                        <div class="play-overlay"><i class="fa-regular fa-circle-play"></i></div>
                    </div>
                    <div class="card-content">
                        <h3 class="card-title" title="${item.title}">${item.title}</h3>
                        <p class="card-subtitle">${item.subtitle}</p>
                    </div>`;
                return card;
            }
            
            // Function to create a list item for new series/episodes/favorites
            function renderListItem(item, type) {
                const listItem = document.createElement('li');
                listItem.className = 'new-item';
                listItem.dataset.id = item.id; // Store item ID for later lookup
                
                let infoHtml = '';
                if(type === 'series') {
                    const releaseDate = new Date(item.released).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
                    infoHtml = `
                        <h4>${item.title}</h4>
                        <p>${item.tags.slice(0, 3).join(', ')}</p>
                        <p>${releaseDate}</p>`;
                } else if(type === 'episode') {
                     infoHtml = `
                        <h4>${item.title}</h4>
                        <p>Episode ${item.latestEpisode}</p>
                        <p class="release-time"><i class="fa-regular fa-clock"></i> ${item.releaseTime || ''}</p>`;
                } else if(type === 'favorite') {
                     infoHtml = `
                        <h4>${item.title}</h4>
                        <p>${item.status}</p>`;
                }

                listItem.innerHTML = `
                    <img src="${item.img}" alt="${item.title}" class="new-item-img" onerror="this.onerror=null;this.src='https://placehold.co/60x84/14181F/C5C6C7?text=N/A';">
                    <div class="new-item-info">
                        ${infoHtml}
                    </div>`;
                return listItem;
            }

            // Function to render a list of donghua cards into a grid
            function renderCards(items, gridElement, clear = false) {
                if (clear) gridElement.innerHTML = ''; // Clear existing content if requested
                items.forEach(item => gridElement.appendChild(createCard(item)));
            }

            // Function to render a list of donghua items into a ul/ol
            function renderList(items, listElement, type, clear = false) {
                if (clear) listElement.innerHTML = ''; // Clear existing content if requested
                items.forEach(item => listElement.appendChild(renderListItem(item, type)));
            }
            
            // Handle search input
            function handleSearch() {
                const query = searchInput.value.toLowerCase().trim();
                if (query.length === 0) {
                    showLibraryPage(); // If search is empty, go back to library view
                    return;
                }
                // Filter donghua data based on title or ID
                const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query) || item.id.toLowerCase() === query);
                showSearchView(query, results); // Display search results
            }
            
            // Initialize the page on load
            function initializePage() {
                // Set theme based on local storage or default to dark
                const savedTheme = localStorage.getItem('theme') || 'dark';
                setTheme(savedTheme);
                // Load all donghua data
                allDonghuaData = createYourDramaData();

                // Populate various sections with data
                const hotItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).slice(0, 10);
                const latestItems = [...allDonghuaData].sort((a, b) => new Date(b.released) - new Date(a.released));
                
                const newSeriesItems = latestItems.slice(0, 5);
                const newEpisodesTodayItems = allDonghuaData.filter(item => item.status === 'Ongoing' && item.releaseTime).slice(0, 5);
                const favoriteItems = [...allDonghuaData].sort((a,b) => b.rating - a.rating).slice(0, 4);
                const completedItems = allDonghuaData.filter(item => item.status === 'Finished').slice(0, 5);
                
                renderCards(hotItems, hotSeriesGrid, true);
                renderCards(latestItems.slice(0,10), latestReleaseGrid, true);
                renderList(newEpisodesTodayItems, newEpisodesTodayList, 'episode', true);
                renderList(newSeriesItems, newSeriesList, 'series', true);
                renderList(favoriteItems, favoriteList, 'favorite', true);
                renderList(completedItems, completedSeriesList, 'series', true);
                
                showLibraryPage(); // Show the main library view initially
                
                // Hide spinner and show main content with a fade-in effect
                loadingSpinner.style.display = 'none';
                mainContent.style.visibility = 'visible';
                mainContent.style.opacity = '1';
                document.querySelectorAll('.site-header, .community-cta, .site-footer').forEach(el => {
                    el.style.visibility = 'visible';
                    el.style.opacity = '1';
                });

                // --- Global Event Listeners ---
                document.addEventListener('click', (e) => {
                    // Handle clicks on donghua cards or list items to show watch page
                    const card = e.target.closest('.donghua-card, .new-item, .preview-card');
                    if(card) {
                        const donghuaData = allDonghuaData.find(d => d.id === card.dataset.id);
                        if (donghuaData) showWatchPage(donghuaData);
                    }
                    // Handle clicks on episode buttons in the modal
                    const epBtn = e.target.closest('.episode-btn');
                    if (epBtn) selectEpisode(epBtn.dataset.episodeNumber);
                    // Handle clicks on "All Episodes" button to open modal
                    if (e.target.closest('#show-all-episodes-btn')) openEpisodeModal();
                    // Handle clicks to close modal (on close button or outside modal content)
                    if (e.target.closest('#modal-close-btn') || e.target.id === 'episode-modal') closeEpisodeModal();
                    // Handle previous/next episode navigation
                    if (e.target.closest('#prev-episode-btn')) { if (currentEpisodeNumber > 1) selectEpisode(currentEpisodeNumber - 1); }
                    if (e.target.closest('#next-episode-btn')) { if (currentDonghua && currentEpisodeNumber < currentDonghua.maxEpisodes) { selectEpisode(currentEpisodeNumber + 1); } }
                    // Removed backToLibraryBtn listener as the button is not present in the HTML
                });

                // Mobile menu toggle functionality
                const menuToggle = document.getElementById('mobile-menu-toggle');
                const mobileNav = document.getElementById('mobile-nav');
                menuToggle.addEventListener('click', () => {
                    mobileNav.classList.toggle('is-open');
                    menuToggle.querySelector('i').classList.toggle('fa-bars');
                    menuToggle.querySelector('i').classList.toggle('fa-xmark');
                });
                // Close mobile menu when a link is clicked
                document.querySelectorAll('#mobile-nav a').forEach(link => {
                    link.addEventListener('click', () => { if (mobileNav.classList.contains('is-open')) menuToggle.click(); });
                });

                // Search bar toggle and functionality
                const searchBtn = document.getElementById('search-btn');
                const searchForm = document.getElementById('search-form');
                searchBtn.addEventListener('click', (e) => {
                    e.preventDefault(); // Prevent form submission
                    searchForm.classList.toggle('active'); // Toggle active class for search input visibility
                    if (searchForm.classList.contains('active')) searchInput.focus(); // Focus input if active
                });
                searchInput.addEventListener('input', handleSearch); // Live search on input

                // Theme toggle functionality
                themeToggleBtn.addEventListener('click', () => {
                    const newTheme = document.body.classList.contains('light-theme') ? 'dark' : 'light';
                    setTheme(newTheme); // Apply and save new theme
                });
            }
            initializePage(); // Call initialize function when window loads
        };