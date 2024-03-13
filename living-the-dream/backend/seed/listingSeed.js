const db = require('../db');
const Category = require('../models/category')
const Listing = require('../models/listing')

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const main = async () => {
    try {
        await Listing.deleteMany({})
        
        // Fetch categories
        const categories = await Category.find({});

        // Create listings for each category
        for (const category of categories) {
            switch (category.name) {
                case 'Disney':
                    await createDisneyListings(category);
                    break;
                case 'Marvel':
                    await createMarvelListings(category);
                    break;
                case 'Horror':
                    await createHorrorListings(category);
                    break;
                case 'Lord of Rings':
                    await createLOTRListings(category);
                    break;
                default:
                    console.error(`Unknown category: ${category.name}`);
                    break;
            }
        }

        console.log('Listings seeded successfully');
    } catch (error) {
        console.error('Error seeding listings:', error);
    } finally {
        // Update the Horror category with its listings
        db.close();
    }
};


const createDisneyListings = async (category) => {
    await Listing.create([
        {
            listing_id: 'disney001',
            title: 'LE CHATEAU DE LA BELLE AU BOIS DORMANT',
            description: 'This castle is based on Sleeping Beauty(1959) and the Castle of Loire Valley. The castle itself feels like it is carved into the landscape. One of my favorite elements of this castle is the greenery that surrounds it, specifically the trees cut into squares! ',
            rating: 5.0,
            picture: 'https://choicefineart.com/cdn/shop/products/sleeping-beauty-original-concept-painting-the-castle-112867.jpg?v=1688082168',
            category: category._id
        },
        {
            listing_id: 'disney002',
            title: 'CINDERELLA CASTLE',
            description: 'Cinderellas Castle is widely regarded as the most iconic of all the park castles. The stark bright coloring and architectural style has allowed this castle to remain a timeless classic. ',
            rating: 5.0,
            picture: 'https://comicvine.gamespot.com/a/uploads/scale_small/3/33014/644250-disneycastle.jpg',
            category: category._id
        },
        {
            listing_id: 'disney003',
            title: 'The Little Mermaid Castle',
            description: 'The castle itself is beautiful and really calls back to the source material. There are a dozen shops and attractions for guests to enjoy that are targeted at a younger age. ',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/little-mermaid/images/4/49/Littlemermaid_490.jpg/revision/latest?cb=20160203002236',
            category: category._id
        },
        {
            listing_id: 'disney004',
            title: 'The Emperor Palace',
            description: 'Although situated in Imperial City, a real location in China, the Emperor Palace is one of the main things about the setting that was changed to suit the story of Mulan. In the movie, its two large floors are situated on top of a massive platform and, in deep shades of red, it represents the heart of China.',
            rating: 5.0,
            picture: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2022/06/The-Emperors-Palace-in-Mulan.jpg?q=50&fit=crop&w=1500&dpr=1.5',
            category: category._id
        },
        {
            listing_id: 'disney005',
            title: 'Mount Olympus Castle',
            description: 'The Mount Olympus portrayed in Hercules is such a perfect representation of the home of the gods in ancient Greek mythology that for many people its golden waves are the iconic image of the mountain. Even appearing as a location in Kingdom Hearts 3, Mount Olympus is crowned with the meeting place of the Olympian Gods.',
            rating: 5.0,
            picture: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/Olympus.jpg?q=50&fit=crop&w=1500&dpr=1.5',
            category: category._id
        },
        {
            listing_id: 'disney006',
            title: 'Sultan Palace',
            description: 'Loosely based on the Taj Mahal, the Sultan giant palace dominates Agrabah in Aladdin with spires atop massive golden domes that give an idea of the man wealth. Nothing was held back in the design of the palace and the interior is no exception, with a throne room dominated by gold features and an elephant-shaped throne as well as lush gardens.',
            rating: 5.0,
            picture: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/The-Sultans-Palace.jpg?q=50&fit=crop&w=1500&dpr=1.5',
            category: category._id
        },
        {
            listing_id: 'disney007',
            title: 'Beast Castle',
            description: 'Inspired by a real-life French castle called the Chateau De Chambord, the home of the Beast in Beauty and the Beast is a beautiful yet unsteady and aged-looking building. Like the Beast himself, the castle is subject to a curse that makes it a dark, twisted version of its original self before being turned back thanks to the curse being lifted.',
            rating: 5.0,
            picture: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/10/beauty-the-Beast-Castle.jpg?q=50&fit=crop&w=1500&dpr=1.5',
            category: category._id
        },
        {
            listing_id: 'disney008',
            title: 'Corona Castle',
            description: 'Dominating the island kingdom of Corona that Rapunzel originates from in Tangled, Corona Castle is the home of her parents, the king and queen. Its distinctive shape in the skyline of Corona makes it perfect as the subject of Rapunzels longing to see the city and learn who she is.',
            rating: 5.0,
            picture: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/11/Corona-in-Disneys-Tangled.jpg?q=50&fit=crop&w=1500&dpr=1.5',
            category: category._id
        },
        {
            listing_id: 'disney009',
            title: 'Ice Palace',
            description: 'It is rare to see a princess build her own castle but then Frozens Elsa is no ordinary princess. A monument to brutal, cold isolation constructed out of the pure ice that Elsa can create, its appearance has a powerful impact on Anna, who immediately realizes something is seriously wrong with Elsa on seeing the Ice Palace.',
            rating: 5.0,
            picture: 'https://i.pinimg.com/736x/b3/98/38/b39838fad39a88df1c4f91396ac8ff80.jpg',
            category: category._id
        },
        {
            listing_id: 'disney010',
            title: 'Snow White Castle',
            description: 'Snow Whites Castle, an enchanting fortress nestled amidst snow-capped peaks, exudes timeless charm and magical allure, inviting visitors into a fairy tale world of wonder and adventure.',
            rating: 5.0,
            picture: 'https://imgix.ranker.com/user_node_img/9/160283/original/snow-white-and-the-seven-dwarfs-films-photo-u4?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
            category: category._id
        },
        {
            listing_id: 'disney011',
            title: 'Brave Castle',
            description: 'Braves Castle, a majestic stronghold perched atop rugged Scottish cliffs, stands as a symbol of resilience and courage. Explore its ancient halls and unravel tales of bravery in this iconic Disney landmark.',
            rating: 5.0,
            picture: 'https://imgix.ranker.com/user_node_img/549/10972158/original/the-bear-and-the-bow-films-photo-u6?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
            category: category._id
        },
        {
            listing_id: 'disney012',
            title: 'The Emperors New Groove',
            description: 'The Emperors New Groove, a whimsical animated adventure, follows the hilarious journey of Emperor Kuzco as he navigates his comical transformation into a llama. Join him for laughs, lessons, and unexpected friendship in this Disney classic.',
            rating: 5.0,
            picture: 'https://imgix.ranker.com/user_node_img/110/2190007/original/the-emperor-s-new-groove-films-photo-u5?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&w=650',
            category: category._id
        },
    ]);

    console.log('Disney listings seeded successfully');
};

const createMarvelListings = async (category) => {
    await Listing.create([
        {
            listing_id: 'marvel001',
            title: 'The S.H.I.E.L.D Headquarter',
            description: 'The S.H.I.E.L.D. Headquarters, a state-of-the-art facility hidden from plain sight, serves as the nerve center for Earth mightiest heroes. With cutting-edge technology and top-secret operations, it stands as a bastion of protection against global threats.',
            rating: 5.0,
            picture: 'https://i0.wp.com/news.comicui.com/wp-content/uploads/2013/06/triskelion1.jpg?fit=1024%2C614&ssl=1',
            category: category._id
        },
        {
            listing_id: 'marvel002',
            title: 'The Malibu Retreat',
            description: 'Tony Stark Malibu retreat, a luxurious haven perched along California coastline, epitomizes sophistication and innovation. With breathtaking ocean views and high-tech amenities, it is the perfect sanctuary for Iron Man moments of respite and reflection.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/marveldatabase/images/6/65/Retreat_%28Tony_Stark%27s_Malibu_Mansion%29_from_Iron_Man_Vol_1_222_001.jpg/revision/latest?cb=20190522032311',
            category: category._id
        },
        {
            listing_id: 'marvel003',
            title: 'Titan Tower',
            description: 'Built by Cyborgs father, Sylas Stone, the original Titans Tower was a technological masterpiece, serving as both the teams headquarters and its home away from home.',
            rating: 5.0,
            picture: 'https://cdn.mos.cms.futurecdn.net/XXhUmAhGfWj7J9Fr2J3wWB-1200-80.jpg.webp',
            category: category._id
        },
        {
            listing_id: 'marvel004',
            title: 'Xavier School for Gifted Youngsters',
            description: 'While it started out as Xavier School For Gifted Youngsters, the mansion at 1407 Greymalkin Lane in Westchester, New York has served as a number of schools and headquarters for mutants over the years. ',
            rating: 5.0,
            picture: 'https://cdn.mos.cms.futurecdn.net/ubhYR6BBshqNhXFTRyfPsP-1200-80.jpg.webp',
            category: category._id
        },
        {
            listing_id: 'marvel005',
            title: 'The Baxter Building',
            description: 'There is no greater hub of innovation and adventure in the Marvel Universe than the Baxter Building. The home of the Fantastic Four, the Baxter Building houses everything from rocketships to Negative Zone portals, to an entire school dedicated to educating the brightest, most intelligent young minds in all of Marveldom.',
            rating: 5.0,
            picture: 'https://cdn.mos.cms.futurecdn.net/kARhzYYVLqapbwwdF9iFeA-1200-80.jpg.webp',
            category: category._id
        },
        {
            listing_id: 'marvel006',
            title: 'Avenger Mansion',
            description: 'For years, the Avengers lived in a stately mansion at the heart of Manhattan, once owned by Tony Stark family. When Stark helped found the team of Earth Mightiest Heroes, he opened the mansions doors,  and the services of its faithful caretaker, Jarvis, to his teammates.',
            rating: 5.0,
            picture: 'https://cdn.mos.cms.futurecdn.net/x6iRdoHMvWvDEZPGvmFYDo-1200-80.jpg.webp',
            category: category._id
        },
        {
            listing_id: 'marvel007',
            title: 'The S.H.I.E.L.D Helicarrier',
            description: 'The S.H.I.E.L.D. Helicarrier is unique in that it could be considered a vehicle as well as a base. But this mobile headquarters is less about getting from point A to point B, and more about ensuring that the agents of S.H.I.E.L.D. have a nigh-invulnerable platform to arrive wherever they are needed the world over.',
            rating: 5.0,
            picture: 'https://cdn.mos.cms.futurecdn.net/Xn8uSqPxZmPWdfaccwEj5B-1200-80.jpg.webp',
            category: category._id
        },
        {
            listing_id: 'marvel008',
            title: 'Stark Tower',
            description: 'Stark Tower, a gleaming skyscraper towering over New York City skyline, embodies the pinnacle of modernity and innovation. As Tony Stark iconic headquarters, it symbolizes cutting-edge technology and serves as a beacon of hope for humanity.',
            rating: 5.0,
            picture: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Stark_Tower.jpg',
            category: category._id
        },
        {
            listing_id: 'marvel009',
            title: 'Kun Lun',
            description: 'As the mystical birthplace of Iron Fist, it holds the key to unlocking extraordinary powers and defending against dark forces.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/marveldatabase/images/3/37/K%27un-Lun_from_Avengers_Vol_8_33_001.jpg/revision/latest?cb=20210406171910',
            category: category._id
        },
        {
            listing_id: 'marvel010',
            title: 'The Hostel',
            description: 'This is the secret base used by the Runaways, a group of young heroes. Located beneath the La Brea Tar Pits in Los Angeles, it serves as their headquarters and sanctuary, equipped with advanced technology and defenses to protect them from threats.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/marveldatabase/images/8/8a/Hostel_%28Bronson_Canyon%29_from_Runaways_Vol_1_6_001.png/revision/latest?cb=20220222213309',
            category: category._id
        },
        {
            listing_id: 'marvel011',
            title: '4 Freedom Plaza',
            description: 'As the headquarters of the Fantastic Four, it symbolizes unity, innovation, and a steadfast commitment to protecting humanity.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/newsecretwars/images/4/44/406px-FourFreedomPlaza.jpg/revision/latest?cb=20110225184924',
            category: category._id
        },
        {
            listing_id: 'marvel012',
            title: 'Castle Doom',
            description: 'Castle Doom, the imposing fortress dominating the Latverian landscape, serves as the seat of power for Marvel infamous ruler, Doctor Doom. With its dark secrets and formidable defenses, it embodies tyranny and ambition.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/marveldatabase/images/0/09/Castle_Doom_%28Doomstadt%29_from_New_Avengers_Vol_3_7_001.jpg/revision/latest?cb=20130619172925',
            category: category._id
        },
    ]);

    console.log('Marval listings seeded successfully');
};

const createHorrorListings = async (category) => {
    await Listing.create([
        {
            listing_id: 'horror001',
            title: 'Haunted Manor',
            description: 'A decrepit mansion shrouded in darkness, rumored to be haunted by vengeful spirits. Dare to enter its sinister halls and uncover its chilling secrets.',
            rating: 5.0,
            picture: 'https://thumbs.dreamstime.com/b/halloween-graveyard-scene-haunting-nightmare-hallowen-background-cartoon-horror-castle-scenery-scary-ghost-tomb-stones-grave-285914504.jpg',
            category: category._id
        },
        {
            listing_id: 'horror002',
            title: 'Shadow Keep',
            description: 'An ancient fortress consumed by shadows, where eerie whispers echo through its empty corridors. Beware the lurking horrors within this forsaken castle of darkness.',
            rating: 5.0,
            picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTfFEuj51xLQxLJrH7dVMn99Pn0mzW8QuiDw&usqp=CAU',
            category: category._id
        }, 
        {
            listing_id: 'horror003',
            title: 'Ghastly Hall',
            description: 'A cursed castle veiled in mist, where restless souls roam its haunted halls. Venture forth and confront the phantoms that dwell within its sinister embrace.',
            rating: 5.0,
            picture: 'https://img.freepik.com/premium-photo/cemetery-cute-cartoon-mythical-tiny-horror-abandoned-castle-night-scene-cinematic-dark-color-light_647611-1807.jpg',
            category: category._id
        },
        {
            listing_id: 'horror004',
            title: 'Dreadfort Manor',
            description: 'A foreboding manor steeped in dread, where darkness reigns supreme. Explore its macabre chambers and uncover the ghastly truths hidden within its walls.',
            rating: 5.0,
            picture: 'https://slm-assets.secondlife.com/assets/18556836/view_large/Halloween_Castle_with_Moonsmall.jpg?1507373526',
            category: category._id
        },
        {
            listing_id: 'horror005',
            title: 'Wraith Keep',
            description: 'A spectral fortress haunted by vengeful wraiths, their mournful cries piercing the night. Enter if you dare, but beware the wrath of the undead that dwell within.',
            rating: 5.0,
            picture: 'https://cdn.pixabay.com/photo/2020/07/26/13/22/house-5439535_640.png',
            category: category._id
        },
        {
            listing_id: 'horror006',
            title: 'Cursed Citadel',
            description: 'A cursed citadel cloaked in shadow, where ancient curses lurk within its cursed walls. Face the malevolent forces that guard its cursed halls and survive the horrors that await.',
            rating: 5.0,
            picture: 'https://img.freepik.com/premium-photo/cemetery-cute-cartoon-mythical-tiny-horror-abandoned-castle-night-scene-cinematic-dark-color-light_647611-1798.jpg',
            category: category._id
        },
        {
            listing_id: 'horror007',
            title: 'Phantom Keep',
            description: 'A phantom keep haunted by spectral apparitions, their ghostly forms drifting through the mist. Explore its haunted halls and confront the phantoms that haunt its shadowed corridors.',
            rating: 5.0,
            picture: 'https://st5.depositphotos.com/16544128/66894/v/450/depositphotos_668946222-stock-illustration-halloween-graveyard-scene-haunting-nightmare.jpg',
            category: category._id
        },
            
        {
            listing_id: 'horror008',
            title: 'Terror Manor',
            description: 'A terror-filled manor haunted by unspeakable horrors, its walls echoing with the screams of the damned. Brave the darkness and uncover the terrifying secrets that lie within.',
            rating: 5.0,
            picture: 'https://img.goodfon.com/wallpaper/big/3/11/holiday-halloween-scary-house-1901.jpg',
            category: category._id
        },   
        {
            listing_id: 'horror009',
            title: 'Eldritch Castle',
            description: 'An eldritch castle steeped in arcane magic, its ancient stones whispering secrets of forbidden knowledge. Enter its mystic halls and delve into the depths of eldritch horror.',
            rating: 5.0,
            picture: 'https://www.shutterstock.com/shutterstock/videos/1095014731/thumb/1.jpg?ip=x480',
            category: category._id
        },  
        {
            listing_id: 'horror010',
            title: 'Nightmare Keep',
            description: 'A nightmare keep haunted by twisted phantasms, their tormented forms haunting the dreams of the living. Confront the nightmares that dwell within and unravel their dark origins.',
            rating: 5.0,
            picture: 'https://png.pngtree.com/background/20230623/original/pngtree-spooky-3d-animation-of-cartoon-castle-on-halloween-night-picture-image_3989772.jpg',
            category: category._id
        },
        {
            listing_id: 'horror011',
            title: 'Sinister Stronghold',
            description: 'A sinister stronghold ruled by dark powers, its blackened walls a testament to its malevolent nature. Enter its accursed halls and confront the sinister entities that dwell within.',
            rating: 5.0,
            picture: 'https://cdn.pixabay.com/photo/2023/09/10/21/10/ai-generated-8245702_640.png',
            category: category._id
        },
        {
            listing_id: 'horror012',
            title: 'Dread Keep',
            description: 'A dread keep haunted by ancient curses, its foreboding halls echoing with the whispers of the damned. Explore its haunted depths and confront the dread horrors that lurk within.',
            rating: 5.0,
            picture: 'https://www.hdwallpapers.in/download/graveyard_horror_castle_pumpkins_white_moon_blue_sky_hd_halloween-1920x1080.jpg',
            category: category._id
        }
    ]);

    console.log('Horror listings seeded successfully');
};

const createLOTRListings = async (category) => {
    await Listing.create([
        {
            listing_id: 'lors001',
            title: 'Minas Tirith',
            description: 'The majestic white city of Gondor, perched atop seven-tiered walls, serves as a beacon of hope against the darkness of Mordor. Its citadel houses the Seat of Kings and the White Tower of Ecthelion.',
            rating: 5.0,
            picture: 'https://tolkiengateway.net/w/images/thumb/9/93/Ralph_Damiani_-_Across_Middle-earth_-_The_White_City.png/1200px-Ralph_Damiani_-_Across_Middle-earth_-_The_White_City.png',
            category: category._id
        },
        {
            listing_id: 'lors002',
            title: 'Helms Deep',
            description: 'A fortress nestled in the mountains of Rohan, Helms Deep stands as a bastion of defense against the forces of Isengard. Its towering walls and deepening keep offer refuge to the Free Peoples in times of war.',
            rating: 5.0,
            picture: 'https://preview.redd.it/what-makes-the-battle-of-helms-deep-a-cinematic-masterpiece-v0-jvr5uq2ooaub1.jpg?width=640&crop=smart&auto=webp&s=1ca8785bdaaee9c5c5dd6226e856a54ff0a6b836',
            category: category._id
        },
        {
            listing_id: 'lors003',
            title: 'Rivendell',
            description: 'Hidden amidst the misty valleys of the Misty Mountains, Rivendell is an elven refuge of unparalleled beauty and tranquility. Its halls are adorned with ancient lore and timeless wisdom, offering solace to weary travelers.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/lotr/images/7/70/Jerry_Vanderstelt_-_Rivendell.jpg/revision/latest?cb=20180501204919',
            category: category._id
        },
        {
            listing_id: 'lors004',
            title: 'Orthanc',
            description: 'A towering black monolith rising from the heart of Isengard, Orthanc serves as the stronghold of Saruman the White. Its dark spire looms over the land, casting a shadow of fear and treachery.',
            rating: 5.0,
            picture: 'https://www.lotrscenerybuilder.org/images/Orthanc/Orthanc_Isengard_1.jpg',
            category: category._id
        },
        {
            listing_id: 'lors005',
            title: 'Barad-dûr',
            description: 'The dark fortress of Sauron, Barad-dûr, stands as a testament to the Dark Lord power and dominion. Its black walls and fiery spires strike fear into the hearts of all who behold its dread majesty.',
            rating: 5.0,
            picture: 'https://media.wired.com/photos/593294709be5e55af6c26042/master/w_2560%2Cc_limit/5854726106_8612c64462_z.jpg',
            category: category._id
        },    
        {
            listing_id: 'lors006',
            title: 'Edoras',
            description: 'The golden hall of Meduseld, nestled in the rolling plains of Rohan, serves as the seat of Théoden, King of the Mark. Its golden halls echo with the songs of heroes and the clashing of swords.',
            rating: 5.0,
            picture: 'https://pm1.aminoapps.com/6320/3526da4fd2ea930c1fc6c7410a4cf66c320a2b9f_00.jpg',
            category: category._id
        },
        {
            listing_id: 'lors007',
            title: 'Dol Guldur',
            description: 'A fortress of shadow hidden deep within the dark forests of Mirkwood, Dol Guldur is the domain of the Necromancer, Sauron in disguise. Its crumbling towers and haunted halls hold ancient evils that threaten Middle-earth.',
            rating: 5.0,
            picture: 'https://tolkiengateway.net/w/images/thumb/c/c7/Mat%C4%9Bj_%C4%8Cadil_-_Dol_Guldur.jpg/1200px-Mat%C4%9Bj_%C4%8Cadil_-_Dol_Guldur.jpg',
            category: category._id
        }, 
        {
            listing_id: 'lors008',
            title: 'The Argonath',
            description: 'Carved into the rocky cliffs that guard the entrance to Gondor, the Argonath, or Pillars of Kings, stand as silent sentinels of the realm. Their stern visages mark the boundary between the lands of the Free Peoples and the shadow of Mordor.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/lotr/images/7/79/Argonath.png/revision/latest?cb=20210114222756',
            category: category._id
        },
        {
            listing_id: 'lors009',
            title: 'Isengard',
            description: 'Nestled within the valley of Nan Curunír, Isengard serves as the stronghold of Saruman the White. Its ring of stone walls and towering black tower conceal the wizard dark designs and his army of Uruk-hai.',
            rating: 5.0,
            picture: 'https://miro.medium.com/v2/resize:fit:1400/0*FkCuUIsQtwpzYxTV.jpg',
            category: category._id
        },
        {
            listing_id: 'lors010',
            title: 'Moria',
            description: 'The ancient Dwarven city of Khazad-dûm, better known as Moria, lies deep beneath the Misty Mountains. Its vast halls and endless tunnels are haunted by the echoes of a once-great civilization, now overrun by darkness.',
            rating: 5.0,
            picture: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07064f06-a11c-4d2b-af70-31d4abb11a48/d859fti-3642bfc0-98c0-4f2b-b758-7a897f22df5b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3MDY0ZjA2LWExMWMtNGQyYi1hZjcwLTMxZDRhYmIxMWE0OFwvZDg1OWZ0aS0zNjQyYmZjMC05OGMwLTRmMmItYjc1OC03YTg5N2YyMmRmNWIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.HYz6C5FCnrYMnNsR-G427813zt8wzhAS2uVMyFRdZ0I',
            category: category._id
        },
        {
            listing_id: 'lors011',
            title: 'Lothlórien',
            description: 'The enchanted forest of Lothlórien, home to the Galadhrim Elves, is a realm of timeless beauty and ethereal grace. Its golden mallorn trees and shimmering fountains are a sanctuary of light in a world overshadowed by darkness.',
            rating: 5.0,
            picture: 'https://static.wikia.nocookie.net/lotr/images/e/e1/Tara_Rueping_-_Lothlorien.jpg/revision/latest?cb=20160108151538',
            category: category._id
        },
        {
            listing_id: 'lors012',
            title: 'The Black Gate',
            description: 'The great Black Gate of Mordor, guarded by the fearsome armies of Sauron, is the entrance to the realm of darkness. Its iron battlements and towering walls are a barrier to all who would challenge the Dark Lord dominion.',
            rating: 5.0,
            picture: 'https://i.redd.it/1cze75vun2s91.jpg',
            category: category._id
        }
    ]);

    console.log('Lord of Rings listings seeded successfully')
};

main();

