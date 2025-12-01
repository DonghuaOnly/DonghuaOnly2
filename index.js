window.onload = () => {
                
    // --- Helper utilities ---
    const safe = {
        get: (id) => document.getElementById(id) || null,
        addEvent: (el, ev, fn) => { if (!el) return; el.addEventListener(ev, fn); },
        qsAll: (sel) => Array.from(document.querySelectorAll(sel)),
    };

    // --- Element Selection (use safe.get so missing IDs don't throw) ---
    const loadingSpinner = safe.get('loading-spinner');
    const mainContent = safe.get('main-content');
    const libraryView = safe.get('library-view');
    const watchView = safe.get('watch-view');
    const searchView = safe.get('search-view');
    const tencentView = safe.get('tencent-view');
    const youkuView = safe.get('youku-view');
    const azListView = safe.get('az-list-view');
    const donationView = safe.get('donation-view');
    const contactView = safe.get('contact-view');
    const viewAllView = safe.get('view-all-view');

    const hotSeriesGrid = safe.get('hot-series-grid');
    const latestReleaseGrid = safe.get('latest-release-grid');
    const homeRecommendGrid = safe.get('home-recommend-grid');
    const newEpisodesTodayList = safe.get('new-episodes-today-list');
    const searchResultsGrid = safe.get('search-results-grid');
    const tencentGrid = safe.get('tencent-grid');
    const youkuGrid = safe.get('youku-grid');
    const azListContainer = safe.get('az-list-container');
    const viewAllGrid = safe.get('view-all-grid');
    const newSeriesList = safe.get('new-series-list');
    const favoriteList = safe.get('favorite-list');
    const recommendedGrid = safe.get('recommended-grid');
    const watchPageOngoingList = safe.get('watch-page-ongoing-list');
    const watchPagePopularList = safe.get('watch-page-popular-list');
    const completedSeriesList = safe.get('completed-series-list');
    const searchInput = safe.get('search-input');
    const searchBtn = safe.get('search-btn');
    const searchForm = safe.get('search-form');
    const menuToggle = safe.get('mobile-menu-toggle');
    const mobileNav = safe.get('mobile-nav');
    const mobileNavCloseBtn = safe.get('mobile-nav-close');
    const dailymotionPlayer = safe.get('dailymotion-player');
    const prevEpisodeBtn = safe.get('prev-episode-btn');
    const nextEpisodeBtn = safe.get('next-episode-btn');
    const showAllEpisodesBtn = safe.get('show-all-episodes-btn');
    const episodeModal = safe.get('episode-modal');
    const modalCloseBtn = safe.get('modal-close-btn');
    const episodeGrid = safe.get('episode-grid');
    const modalEpisodeTitle = safe.get('episode-list-title');
    const sitemapList = safe.get('sitemap-list');
    const logoLink = safe.get('logo-link');

    // View All Links
    const viewAllLinks = Array.from(document.querySelectorAll('.view-all-link') || []);

    // Telegram Modal
    const telegramModal = safe.get('telegram-modal');
    const telegramYesBtn = safe.get('telegram-yes-btn');
    const telegramNoBtn = safe.get('telegram-no-btn');

    // Nav Links (filter out any nulls so later code won't try to call classList on null)
    const makeLinks = (ids) => ids.map(id => safe.get(id)).filter(Boolean);
    const navLinks = {
        home: makeLinks(['home-link', 'mobile-home-link', 'footer-home-link']),
        donation: makeLinks(['donation-link', 'mobile-donation-link', 'footer-donation-link']),
        tencent: makeLinks(['tencent-link', 'mobile-tencent-link', 'footer-tencent-link']),
        youku: makeLinks(['youku-link', 'mobile-youku-link', 'footer-youku-link']),
        azList: makeLinks(['az-list-link', 'mobile-az-list-link', 'footer-az-list-link']),
        contact: makeLinks(['contact-link', 'mobile-contact-link', 'footer-contact-link']),
    };

    // --- DATA MANAGEMENT ---
    let allDonghuaData = [];
    let currentDonghua = null;
    let currentEpisodeNumber = 1;

    // A small, valid dataset — the original file had many truncated tokens ("[...]") which caused a syntax error
    // That syntax error prevented the script from running and the loading spinner from being hidden.
    function createYourDramaData() {
        const dailymotionBaseUrl = "https://www.dailymotion.com/embed/video/";
        return [
            {
                id: 'd1',
                title: 'Battle Through The Heavens',
                slug: 'battle-through-the-heavens',
                subtitle: 'Action, Fantasy',
                description: 'A legendary tale of a young man who loses his powers and fights to reclaim his honor.',
                maxEpisodes: 153,
                latestEpisode: 153,
                releaseTime: '10:00 AM',
                img: 'images/Batt.jpg.jpg',
                episodeLinks: [
                    { start: 1, end: 12, url: `${dailymotionBaseUrl}x9hzg4m` },
                    { start: 13, end: 36, url: `${dailymotionBaseUrl}x9i5x32` },
                    { start: 37, end: 153, url: `${dailymotionBaseUrl}x9k2vhc` }
                ],
                rating: 9.2, status: 'Ongoing', studio: 'Shanghai Motion Magic', duration: '20 min per ep', country: 'China',
                network: '', released: '2022-07-31', season: '5', type: 'ONA',
                fansub: 'Lucifer Donghua', tags: ['Action','Adventure','Fantasy']
            },
            {
                id: 'd2',
                title: 'Shrouding The Heavens',
                slug: 'shrouding-the-heavens',
                subtitle: 'Xianxia, Comedy',
                description: 'The humorous story of a young man who values longevity above all else.',
                maxEpisodes: 120,
                latestEpisode: 120,
                img: 'images/Shrouding to the heaven.jpg.jpg',
                episodeLinks: [
                    { start: 1, end: 20, url: `${dailymotionBaseUrl}x9fjsq6` },
                    { start: 21, end: 60, url: `${dailymotionBaseUrl}x9gqzue` }
                ],
                rating: 9.0, status: 'Ongoing', studio: 'B.CMAY PICTURES', duration: '22 min per ep', country: 'China',
                network: 'i', released: '2023-11-18', season: '1', type: 'ONA',
                fansub: 'Anime Official', tags: ['Xianxia','Comedy','Adventure']
            },
            {
                id: 'd3',
                title: 'Swallowed Star',
                slug: 'swallowed-star',
                subtitle: 'Sci-Fi, Action',
                description: 'A young man from a poor background fights to protect his family in a ravaged future world.',
                maxEpisodes: 180,
                latestEpisode: 179,
                img: 'images/Loufeng.jpg.jpg',
                episodeLinks: [
                    { start: 9, end: 77, url: `${dailymotionBaseUrl}x8s0n0m` },
                    { start: 78, end: 179, url: `${dailymotionBaseUrl}x8wxwui` }
                ],
                rating: 9.5, status: 'Ongoing', studio: 'Sparkly Key Animation', duration: '21 min per ep', country: 'China',
                network: '', released: '2020-11-29', season: '3', type: 'ONA',
                fansub: 'Official Sub', tags: ['Sci-Fi','Action','Mecha']
            },
            {
                id: 'd4',
                title: 'Perfect World',
                slug: 'perfect-world',
                subtitle: 'Fantasy, Adventure',
                description: 'Shi Hao embarks on a journey to become a legendary figure.',
                maxEpisodes: 152,
                latestEpisode: 152,
                img: 'images/Perfect world.jpg.jpg',
                episodeLinks: [
                    { start: 9, end: 104, url: `${dailymotionBaseUrl}x8u66va` },
                    { start: 105, end: 152, url: `${dailymotionBaseUrl}x8ub3b0` }
                ],
                rating: 9.3, status: 'Ongoing', studio: 'Shanghai Foch Film', duration: '20 min per ep', country: 'China',
                network: '', released: '2021-04-23', season: '1', type: 'ONA',
                fansub: 'Lucifer Donghua', tags: ['Fantasy','Adventure','Xianxia']
            },
            {
                id: 'd10',
                title: 'Soul Land 1',
                slug: 'soul-land-1',
                subtitle: 'Fantasy, Action',
                description: 'Tang San strives to become a top spirit master in a new world.',
                maxEpisodes: 263,
                latestEpisode: 263,
                img: 'images/Sou land 1.jpg.jpg',
                episodeLinks: [
                    { start: 1, end: 40, url: `${dailymotionBaseUrl}x8rfvh7` },
                    { start: 41, end: 263, url: `${dailymotionBaseUrl}x8rnbn2` }
                ],
                rating: 9.6, status: 'Finished', studio: 'Sparkly Key Animation', duration: '20 min per ep', country: 'China',
                network: '', released: '2018-01-20', season: '1', type: 'ONA',
                fansub: 'Official Sub', tags: ['Fantasy','Action','Romance']
            }
        ].map(d => ({ ...d, type: 'series' }));
    }

    // --- VIEW MANAGEMENT ---
    function safeHide(el) { if (!el) return; el.style.display = 'none'; }
    function safeShowBlock(el) { if (!el) return; el.style.display = 'block'; }
    function hideAllViews() {
        safeHide(libraryView);
        safeHide(watchView);
        safeHide(searchView);
        safeHide(tencentView);
        safeHide(youkuView);
        safeHide(azListView);
        safeHide(donationView);
        safeHide(contactView);
        safeHide(viewAllView);
    }

    function showSearchView(query, results) {
        hideAllViews();
        safeShowBlock(searchView);
        const titleEl = safe.get('search-results-title');
        if (titleEl) titleEl.textContent = `Search Results for "${query}"`;
        if (searchResultsGrid) {
            renderCards(results, searchResultsGrid, true);
            if (results.length === 0) {
                searchResultsGrid.innerHTML = `<p class="no-results-message">No results found.</p>`;
            }
        }
        setActiveNavLink(null); // No nav link is active on search
    }

    function showTencentPage() {
        hideAllViews();
        safeShowBlock(tencentView);
        const tencentItems = allDonghuaData.filter(d => d.network && d.network.toLowerCase().includes('tencent'));
        if (tencentGrid) renderCards(tencentItems, tencentGrid, true);
        setActiveNavLink(navLinks.tencent[0]);
        history.pushState({page: 'tencent'}, 'Tencent', '#tencent');
    }

    function showYoukuPage() {
        hideAllViews();
        safeShowBlock(youkuView);
        const youkuItems = allDonghuaData.filter(d => d.network && d.network.toLowerCase().includes('youku'));
        if (youkuGrid) renderCards(youkuItems, youkuGrid, true);
        setActiveNavLink(navLinks.youku[0]);
        history.pushState({page: 'youku'}, 'YouKu', '#youku');
    }

    function showAZListPage() {
        hideAllViews();
        safeShowBlock(azListView);
        renderAZList();
        setActiveNavLink(navLinks.azList[0]);
        history.pushState({page: 'az-list'}, 'A-Z List', '#az-list');
    }

    function showDonationPage() {
        hideAllViews();
        safeShowBlock(donationView);
        setActiveNavLink(navLinks.donation[0]);
        history.pushState({page: 'donation'}, 'Donation', '#donation');
    }

    function showContactPage() {
        hideAllViews();
        safeShowBlock(contactView);
        setActiveNavLink(navLinks.contact[0]);
        history.pushState({page: 'contact'}, 'Contact Us', '#contact');
    }

    function showLibraryPage() {
        hideAllViews();
        if (libraryView) libraryView.style.display = 'grid';
        if (dailymotionPlayer) dailymotionPlayer.src = ""; // Stop playback
        setActiveNavLink(navLinks.home[0]);
        history.pushState({page: 'home'}, 'Home', '#');
    }

    function showAllContentPage() {
        hideAllViews();
        safeShowBlock(viewAllView);
        const allContent = [...allDonghuaData].sort((a, b) => a.title.localeCompare(b.title));
        if (viewAllGrid) renderCards(allContent, viewAllGrid, true);
        setActiveNavLink(null);
        history.pushState({page: 'all-content'}, 'All Content', '#all-content');
    }

    function showWatchPage(item, episodeNum = null) {
        currentDonghua = item;
        hideAllViews();
        safeShowBlock(watchView);

        if (modalEpisodeTitle) modalEpisodeTitle.textContent = `${item.title} - Episodes`;
        renderEpisodeList();

        let episodeToPlay = episodeNum;
        if (!episodeToPlay && item.episodeLinks && item.episodeLinks.length > 0) {
            const firstEpisode = [...item.episodeLinks].sort((a, b) => a.start - b.start)[0];
            episodeToPlay = firstEpisode.start;
        } else if (!episodeToPlay) {
            episodeToPlay = 1;
        }
        selectEpisode(episodeToPlay);

        if (recommendedGrid) {
            const recommendations = allDonghuaData.filter(d => d.id !== item.id).sort(() => 0.5 - Math.random()).slice(0, 6);
            renderCards(recommendations, recommendedGrid, true);
        }
        if (watchPageOngoingList) {
            const ongoingItems = allDonghuaData.filter(d => d.status === 'Ongoing' && d.id !== item.id).slice(0, 6);
            renderList(ongoingItems, watchPageOngoingList, 'episode', true);
        }
        if (watchPagePopularList) {
            const popularItems = [...allDonghuaData].sort((a, b) => b.rating - a.rating).filter(d => d.id !== item.id).slice(0, 6);
            renderList(popularItems, watchPagePopularList, 'series', true);
        }

        window.scrollTo(0, 0);
        setActiveNavLink(null);
    }

    function setActiveNavLink(activeLink) {
        // remove active from all (guard against nulls)
        Object.values(navLinks).flat().forEach(link => { if (link && link.classList) link.classList.remove('active'); });
        if (!activeLink) return;
        for (const key in navLinks) {
            if (navLinks[key].includes(activeLink)) {
                navLinks[key].forEach(link => { if (link && link.classList) link.classList.add('active'); });
                break;
            }
        }
    }

    // --- VIDEO & EPISODE LOGIC ---
    function renderEpisodeList() {
        if (!currentDonghua || !currentDonghua.episodeLinks || !episodeGrid) return;
        episodeGrid.innerHTML = '';
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
        currentEpisodeNumber = parseInt(episodeNumber, 10) || 1;

        const historyState = { page: 'watch', slug: currentDonghua.slug, episode: currentEpisodeNumber };
        const historyUrl = `#/${currentDonghua.slug}/episode/${currentEpisodeNumber}`;
        history.pushState(historyState, '', historyUrl);

        const episodeLinkData = currentDonghua.episodeLinks && currentDonghua.episodeLinks.find(link =>
            currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
        );

        let episodeTitle = `${currentDonghua.title} Episode ${currentEpisodeNumber}`;
        if (episodeLinkData && episodeLinkData.start !== episodeLinkData.end) {
            episodeTitle = `${currentDonghua.title} Episode ${episodeLinkData.start}-${episodeLinkData.end}`;
        }
        const watchTitleHeader = safe.get('watch-title-header');
        if (watchTitleHeader) watchTitleHeader.textContent = episodeTitle;

        const watchMetadata = safe.get('watch-metadata');
        if (watchMetadata) {
            const releasedDate = currentDonghua.released ? new Date(currentDonghua.released).toLocaleDateString() : '';
            watchMetadata.innerHTML = `
                <span>Released on ${releasedDate}</span>
                <span>Posted by admin</span>
                <span>Series: <a href="#">${currentDonghua.title}</a></span>`;
        }

        const videoDescText = safe.get('video-desc-text');
        let descriptionText = `Watch ${currentDonghua.title} Episode ${currentEpisodeNumber} English Sub.`;
        if (episodeLinkData && episodeLinkData.start !== episodeLinkData.end) {
            descriptionText = `Watch ${currentDonghua.title} Episodes ${episodeLinkData.start}-${episodeLinkData.end} English Sub.`;
        }
        if (videoDescText) videoDescText.textContent = descriptionText;

        const videoUrl = episodeLinkData ? episodeLinkData.url : '';
        const videoPlaceholder = safe.get('video-placeholder-message');

        if (videoUrl && dailymotionPlayer) {
            dailymotionPlayer.style.display = 'block';
            if (videoPlaceholder) videoPlaceholder.style.display = 'none';
            dailymotionPlayer.src = videoUrl;
        } else {
            if (dailymotionPlayer) { dailymotionPlayer.style.display = 'none'; dailymotionPlayer.src = ""; }
            if (videoPlaceholder) {
                videoPlaceholder.textContent = "This episode has not been released yet. Please check back later.";
                videoPlaceholder.style.display = 'block';
            }
        }

        // mark active episode button
        if (document.querySelectorAll) {
            document.querySelectorAll('.episode-btn').forEach(btn => btn.classList.remove('active'));
            const activeEpBtn = document.querySelector(`.episode-btn[data-episode-number="${episodeLinkData ? episodeLinkData.start : ''}"]`);
            if (activeEpBtn) {
                activeEpBtn.classList.add('active');
                activeEpBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
            }
        }

        updateEpisodeNavButtons();
        closeEpisodeModal();
    }

    function updateEpisodeNavButtons() {
        if (!currentDonghua || !currentDonghua.episodeLinks || currentDonghua.episodeLinks.length === 0) {
            if (prevEpisodeBtn) prevEpisodeBtn.style.display = 'none';
            if (nextEpisodeBtn) nextEpisodeBtn.style.display = 'none';
            if (showAllEpisodesBtn) showAllEpisodesBtn.style.display = 'none';
            return;
        }

        if (prevEpisodeBtn) prevEpisodeBtn.style.display = 'inline-flex';
        if (nextEpisodeBtn) nextEpisodeBtn.style.display = 'inline-flex';
        if (showAllEpisodesBtn) showAllEpisodesBtn.style.display = 'inline-flex';

        const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
        const currentLinkIndex = sortedLinks.findIndex(link =>
            currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end
        );

        if (prevEpisodeBtn) prevEpisodeBtn.disabled = currentLinkIndex <= 0;
        if (nextEpisodeBtn) nextEpisodeBtn.disabled = currentLinkIndex === -1 || currentLinkIndex >= sortedLinks.length - 1;
    }

    function openEpisodeModal() { if (episodeModal) episodeModal.classList.add('is-open'); }
    function closeEpisodeModal() { if (episodeModal) episodeModal.classList.remove('is-open'); }

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
            const releaseDate = item.released ? new Date(item.released).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
            infoHtml = `<h4>${item.title}</h4><p>${(item.tags || []).slice(0, 3).join(', ')}</p><p>${releaseDate}</p>`;
        } else if(type === 'episode') {
            infoHtml = `<h4>${item.title}</h4><p>Episode ${item.latestEpisode || 1}</p><p class="release-time"><i class="fa-regular fa-clock"></i> ${item.releaseTime || ''}</p>`;
            link.href = `#/${item.slug}/episode/${item.latestEpisode || 1}`;
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
        if (!gridElement) return;
        if (clear) gridElement.innerHTML = '';
        items.forEach(item => gridElement.appendChild(createCard(item)));
    }

    function renderList(items, listElement, type, clear = false) {
        if (!listElement) return;
        if (clear) listElement.innerHTML = '';
        items.forEach(item => listElement.appendChild(renderListItem(item, type)));
    }

    function renderAZList() {
        if (!azListContainer) return;
        azListContainer.innerHTML = '';
        const sortedData = [...allDonghuaData].sort((a, b) => a.title.localeCompare(b.title));
        const groupedByLetter = sortedData.reduce((acc, item) => {
            const letter = (item.title && item.title[0]) ? item.title[0].toUpperCase() : '#';
            if (!acc[letter]) acc[letter] = [];
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
        if (!searchInput) { showLibraryPage(); return; }
        const query = (searchInput.value || '').toLowerCase().trim();
        if (query.length === 0) {
            showLibraryPage();
            return;
        }
        const results = allDonghuaData.filter(item => item.title.toLowerCase().includes(query));
        showSearchView(query, results);
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

    function handleRouting(hash) {
        try {
            if (!hash) { showLibraryPage(); return; }
            if (hash.startsWith('#/')) {
                const parts = hash.split('/');
                // parts = ['#', 'slug', 'episode', '1']
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
        } catch (err) {
            // if routing fails for any reason, show the library so the user isn't stuck on the loading screen
            console.error('Routing error:', err);
            showLibraryPage();
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

        if (hotSeriesGrid) renderCards(hotItems, hotSeriesGrid, true);
        if (latestReleaseGrid) renderCards(latestItems.slice(0, 18), latestReleaseGrid, true);
        if (homeRecommendGrid) renderCards(recommendItems, homeRecommendGrid, true);
        if (newEpisodesTodayList) renderList(newEpisodesTodayItems, newEpisodesTodayList, 'episode', true);
        if (newSeriesList) renderList(newSeriesItems, newSeriesList, 'series', true);
        if (favoriteList) renderList(favoriteItems, favoriteList, 'favorite', true);
        if (completedSeriesList) renderList(completedItems, completedSeriesList, 'series', true);
        
        generateSitemap();

        handleRouting(window.location.hash);
        
        // Hide loading spinner and show main content (guarded)
        if (loadingSpinner) loadingSpinner.style.display = 'none';
        if (mainContent) {
            mainContent.style.visibility = 'visible';
            mainContent.style.opacity = '1';
        }
        safe.qsAll('.site-header, .community-cta, .site-footer').forEach(el => {
            el.style.visibility = 'visible';
            el.style.opacity = '1';
        });

        // --- MODAL LOGIC ---
        function showTelegramModal() {
            if (!telegramModal) return;
            if (!sessionStorage.getItem('telegramModalShown')) {
                setTimeout(() => {
                    telegramModal.classList.add('is-visible');
                }, 1500); // 1.5-second delay
            }
        }
        function hideTelegramModal() {
            if (!telegramModal) return;
            telegramModal.classList.remove('is-visible');
            sessionStorage.setItem('telegramModalShown', 'true');
        }
        safe.addEvent(telegramYesBtn, 'click', hideTelegramModal);
        safe.addEvent(telegramNoBtn, 'click', hideTelegramModal);
        showTelegramModal();
        // --- END MODAL LOGIC ---


        function closeMobileMenu() {
            if (!mobileNav || !menuToggle) return;
            mobileNav.classList.remove('is-open');
            const icon = menuToggle.querySelector('i');
            if (icon) {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        }

        // Mobile Menu
        safe.addEvent(menuToggle, 'click', () => {
            if (!mobileNav || !menuToggle) return;
            mobileNav.classList.toggle('is-open');
            const icon = menuToggle.querySelector('i');
            if (!icon) return;
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-xmark');
        });
        
        safe.addEvent(mobileNavCloseBtn, 'click', closeMobileMenu);

        // Search
        safe.addEvent(searchInput, 'input', handleSearch);

        // Navigation: logo
        safe.addEvent(logoLink, 'click', (e) => {
            e.preventDefault();
            showLibraryPage();
        });

        // Navigation links
        Object.keys(navLinks).forEach(key => {
            navLinks[key].forEach(link => {
                safe.addEvent(link, 'click', (e) => {
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
            safe.addEvent(link, 'click', (e) => { 
                e.preventDefault(); 
                showAllContentPage(); 
            });
        });

        // Global Event Listener for content cards and buttons (use event delegation)
        document.addEventListener('click', (e) => {
            const cardLink = e.target.closest('.donghua-card, .new-item a, #sitemap-list a');
             if (cardLink) {
                 e.preventDefault();
                 handleRouting(cardLink.hash || cardLink.getAttribute('href') || '');
                 return;
             }
            
            if (e.target.closest('.episode-btn')) {
                selectEpisode(e.target.closest('.episode-btn').dataset.episodeNumber);
                return;
            }
            if (e.target.closest('#show-all-episodes-btn')) openEpisodeModal();
            if (e.target === episodeModal || e.target.closest('#modal-close-btn')) closeEpisodeModal();
            
            if (e.target.closest('#prev-episode-btn')) {
                if (!currentDonghua || !currentDonghua.episodeLinks) return;
                const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
                const currentLinkIndex = sortedLinks.findIndex(link => currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end);
                if (currentLinkIndex > 0) {
                    selectEpisode(sortedLinks[currentLinkIndex - 1].start);
                }
            }
            if (e.target.closest('#next-episode-btn')) {
                if (!currentDonghua || !currentDonghua.episodeLinks) return;
                const sortedLinks = [...currentDonghua.episodeLinks].sort((a, b) => a.start - b.start);
                const currentLinkIndex = sortedLinks.findIndex(link => currentEpisodeNumber >= link.start && currentEpisodeNumber <= link.end);
                if (currentLinkIndex > -1 && currentLinkIndex < sortedLinks.length - 1) {
                    selectEpisode(sortedLinks[currentLinkIndex + 1].start);
                }
            }
            // Search toggle logic
            if (e.target.closest('#search-btn')) {
                e.stopPropagation();
                if (!searchForm) return;
                searchForm.classList.toggle('active');
                if (searchForm.classList.contains('active') && searchInput) {
                    searchInput.focus();
                }
            } else if (searchForm && searchForm.classList.contains('active') && !searchForm.contains(e.target)) {
                searchForm.classList.remove('active');
            }
        });
        
        window.addEventListener('popstate', (event) => {
            handleRouting(window.location.hash);
        });
    }
    
    initializePage();
                
};
