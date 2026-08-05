/* ==========================================================================
   LWK LEARNING MATRIX TERMINAL ENGINE (V3)
   ========================================================================== */

(function() {
  'use strict';

  const ALL_GAMES = [
  {
    "title": "Applications",
    "cat": "Apps & Tools",
    "img": "https://github.com/LWKlearning/LWKlearning.github.io/blob/main/New%20Project%20(25).png?raw=true",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/applications@main/index.html"
  },
  {
    "title": "join the discord",
    "cat": "Apps & Tools",
    "img": "https://assets-global.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png",
    "url": "https://discord.com/invite/JTw32axbFz"
  },
  {
    "title": "Devblog",
    "cat": "Apps & Tools",
    "img": "https://raw.githubusercontent.com/LWKlearning/blog/refs/heads/main/epikrender.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/blog@main/index.html"
  },
  {
    "title": "Chat",
    "cat": "Apps & Tools",
    "img": "https://github.com/LWKlearning/chat/blob/main/New%20Project%20(7).png?raw=true",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/chat@main/index.html"
  },
  {
    "title": "Sector V",
    "cat": "Action",
    "img": "https://raw.githubusercontent.com/LWKlearning/LWKlearning.github.io/e5ff157f686227b523cc730b0abf1df2b8d7398a/download%20(1).svg",
    "url": "https://cdn.jsdelivr.net/gh/maxhax123/sectorv@main/index.html"
  },
  {
    "title": "Aeroberry Code",
    "cat": "Apps & Tools",
    "img": "https://github.com/LWKlearning/aeroberry/blob/main/icon.png?raw=true",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/aeroberry@main/index.html"
  },
  {
    "title": "johntool",
    "cat": "Apps & Tools",
    "img": "https://github.com/LWKlearning/johntool/blob/main/image%20(22).png?raw=true",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/johntool@main/index.html"
  },
  {
    "title": "backup links",
    "cat": "Apps & Tools",
    "img": "https://github.com/LWKlearning/LWKlearning.github.io/blob/main/New%20Project%20(23).png?raw=true",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/backups@main/index.html"
  },
  {
    "title": "Roblox",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/28ab48fcd5d5b19b03c126d2b6aef4b8.jpg",
    "url": "https://nowgg.fun/apps/a/19900/b.html"
  },
  {
    "title": "Fortnite",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/maxresdefault.jpg",
    "url": "https://98.ip.nowgg.fun/apps/aptoide/5874/aptoide.html"
  },
  {
    "title": "FNAF World",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/FNAFWorldlogo.jpg",
    "url": "https://korona.lat/flashcard/fnafw/index.html"
  },
  {
    "title": "Five Nights At Candy's",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/fnac.webp",
    "url": "https://korona.lat/flashcard/fnac1/index.html"
  },
  {
    "title": "Five Nights At Candy's 2",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/fnac2.webp",
    "url": "https://korona.lat/flashcard/fnac2/index.html"
  },
  {
    "title": "Five Nights at Epstein's",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/maxzxczxczxcresdefault.jpg",
    "url": "https://korona.lat/flashcard/fnae/index.html"
  },
  {
    "title": "Five Nights at Freddy's",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/FNaF1.webp",
    "url": "https://korona.lat/flashcard/fnaf1/index.html"
  },
  {
    "title": "Five Nights at Freddy's 2",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/fnaf-2-banner-fnaf2io.jpg",
    "url": "https://korona.lat/flashcard/fnaf2/index.html"
  },
  {
    "title": "Five Nights at Freddy's 3",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/71Pib7x9NbL.jpg",
    "url": "https://korona.lat/flashcard/fnaf3/index.html"
  },
  {
    "title": "Five Nights at Freddy's 4",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/baf1a457fbdeb042db36a38d16ffb7c67866736bb4795905be133826ed8b4fa7.avif",
    "url": "https://korona.lat/flashcard/fnaf4/index.html"
  },
  {
    "title": "Five Nights at Freddy's 5: Sister Location",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/afb4fd16215e81ad263af66ffa6c3e384092bef0d3742b2f227b35bc60fa189b.avif",
    "url": "https://korona.lat/flashcard/fnafsl/index.html"
  },
  {
    "title": "Five Nights at Freddy's: Pizzaria Simulator",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/zczxczxczxczxczxc.jpg",
    "url": "https://korona.lat/flashcard/fnafps/index.html"
  },
  {
    "title": "Five Nights at Freddy's: Ultimate Custom Night",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/06710fa7c3370a536005813c75f650148b38bb419f8dfd5b7f6e9712ec50196f.avif",
    "url": "https://korona.lat/flashcard/fnafucn/index.html"
  },
  {
    "title": "Baldi's Basics Plus",
    "cat": "Horror",
    "img": "https://images.gamebanana.com/img/ss/mods/6664f1a170ae0.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/baldiplus@main/index.html"
  },
  {
    "title": "Baldi's Birthday Bash",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/BaldiBirthdayBash.png",
    "url": "https://korona.lat/flashcard/BaldiBirthdayBash.html"
  },
  {
    "title": "Baldis Basics Classic Remasterd",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/aisiodjakjxncjnasbdfhjags.jpg",
    "url": "https://korona.lat/flashcard/baldis-basics/index.html"
  },
  {
    "title": "Fears to Fathom: Home Alone",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/capsule_616x353.jpg",
    "url": "https://korona.lat/flashcard/fears-to-fathom/home-alone/index.html"
  },
  {
    "title": "Duck Life",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/dl.webp",
    "url": "https://korona.lat/flashcard/dl/dl.html"
  },
  {
    "title": "Duck Life 2",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/dl2.jpg",
    "url": "https://korona.lat/flashcard/dl/dl2.html"
  },
  {
    "title": "Duck Life 3",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/DuckLife3_OG-logo.jpg",
    "url": "https://korona.lat/flashcard/dl/dl3.html"
  },
  {
    "title": "Duck Life 4",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/DuckLife4_OG-logo.jpg",
    "url": "https://korona.lat/flashcard/dl/dl4.html"
  },
  {
    "title": "FNF",
    "cat": "Rhythm",
    "img": "https://store-images.s-microsoft.com/image/apps.10036.13739416744854706.a91340d7-9996-4620-b612-86ba5b6f7bb0.cd990980-16d8-4508-99ab-e1e9410f2c8f",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/fnf@main/index.html"
  },
  {
    "title": "Moto X3M",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/MotoX3M_OG-logo.jpg",
    "url": "https://korona.lat/flashcard/motox3m/index.html"
  },
  {
    "title": "Drift Boss",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/drift-boss-game.png",
    "url": "https://korona.lat/flashcard//drift-boss/index.html"
  },
  {
    "title": "Jelly Drift",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/5e798B.png",
    "url": "https://korona.lat/flashcard/jelly-drift/index.html"
  },
  {
    "title": "Bullet Force Online",
    "cat": "FPS",
    "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3624370/645b091701cb7b43de8ddee234db3a3f7327693c/ss_645b091701cb7b43de8ddee234db3a3f7327693c.1920x1080.jpg?t=1761682964",
    "url": "https://games.crazygames.com/en_US/bullet-force-multiplayer/index.html?v=1.292"
  },
  {
    "title": "Karlson",
    "cat": "FPS",
    "img": "https://imgcdn1.nexarda.com/uploads/-/2022/1648233516-c59e1ca3e7bb010746e3f4733e30cb1d9dc8db71d221be34e67f8ee928066e87.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/karlson@main/index.html"
  },
  {
    "title": "Bendy And The Ink Machine",
    "cat": "Horror",
    "img": "https://cdn1.epicgames.com/spt-assets/0b1283e5bfa64ad48f3862b79abc20b9/bendy-and-the-ink-machine-1e8cj.png",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/bendy@main/index.html"
  },
  {
    "title": "Granny",
    "cat": "Horror",
    "img": "https://play-lh.googleusercontent.com/yT_LBq_tyKeIDohKDsqN_Qt18jGIPUYIxY2C-1-E2YA9Qd60uZW08pua17qBmIiDPA=w240-h480-rw",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/granny@main/index.html"
  },
  {
    "title": "A Difficult Game About Climbing",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/m12123axresdefault.jpg",
    "url": "https://korona.lat/flashcard/adgac/index.html"
  },
  {
    "title": "Ages Of Conflict",
    "cat": "Puzzle / Strategy",
    "img": "https://www.allkeyshop.com/blog/wp-content/uploads/Ages-of-Conflict-World-War-Simulator.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/conflict@main/index.html"
  },
  {
    "title": "Amanda the Adventurer",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/capsule_616x353.png",
    "url": "https://korona.lat/flashcard/amanda-the-adventurer/index.html"
  },
  {
    "title": "Andy's Apple Farm",
    "cat": "Apps & Tools",
    "img": "https://korona.lat/assets/images/flashcards/ne3tan.webp",
    "url": "https://korona.lat/flashcard/andys-apple-farm/index.html"
  },
  {
    "title": "Assassin's Creed: Bloodlines",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/ac-title.png",
    "url": "https://korona.lat/flashcard/assassin-creed-bloodline/index.html"
  },
  {
    "title": "BLOODMONEY!",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/bloodmoney-main.jpg",
    "url": "https://korona.lat/flashcard/bloodmoney/index.html"
  },
  {
    "title": "Backrooms",
    "cat": "Horror",
    "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/HobbyTown_USA_Oshkosh_interior_under_construction_2002_%28The_Backrooms%29.jpg/250px-HobbyTown_USA_Oshkosh_interior_under_construction_2002_%28The_Backrooms%29.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/backrooms@main/index.html"
  },
  {
    "title": "Bad Parenting 1",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/Bad_parenting_1.webp",
    "url": "https://korona.lat/flashcard/bad-parenting/index.html"
  },
  {
    "title": "Balatro",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/asdasdasdasder.jpg",
    "url": "https://korona.lat/flashcard/balatro/index.html"
  },
  {
    "title": "Blockblast",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/block-blast-online1.webp",
    "url": "https://korona.lat/flashcard/BlockBlast/index.html"
  },
  {
    "title": "Bloons Tower Defense",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Bloons_TD_iOS_Logo.jpg",
    "url": "https://korona.lat/flashcard//btd/btd.html"
  },
  {
    "title": "Bloons Tower Defense 2",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/cover-1638358840555.png",
    "url": "https://korona.lat/flashcard//btd/btd2.html"
  },
  {
    "title": "Bloons Tower Defense 3",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/bloonstd3.webp",
    "url": "https://korona.lat/flashcard//btd/btd3.html"
  },
  {
    "title": "Brotato",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/imcrine.jpeg",
    "url": "https://korona.lat/flashcard/brotato/index.html"
  },
  {
    "title": "Buckshot Roulette",
    "cat": "Horror",
    "img": "https://assets-prd.ignimgs.com/2024/02/20/buckshot-roulette-button-1708449366682.jpg?crop=1%3A1%2Csmart&format=jpg&auto=webp&quality=80",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/shot@main/index.html"
  },
  {
    "title": "Call of Duty: Mobile",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/call-of-duty-mobile-made-more-money-in-a-month-than-warzone-mobile-did-in-a-year-cover682f42117bccc.jpg",
    "url": "https://nowgg.fun/apps/a/10008/b.html"
  },
  {
    "title": "Celeste",
    "cat": "Platformer",
    "img": "https://korona.lat/assets/images/flashcards/691ba3e0801180a9864cc8a7694b6f98097f9d9799bc7e3dc6db92f086759252.avif",
    "url": "https://korona.lat/flashcard/celeste/index.html"
  },
  {
    "title": "Class of '09",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/class-of-09-1hav5.webp",
    "url": "https://korona.lat/flashcard/class-of-09/index.html"
  },
  {
    "title": "CookieRun: Kingdom",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/og-en.jpg",
    "url": "https://nowgg.fun/apps/a/10019/b.html"
  },
  {
    "title": "Cuphead",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/d94d2186ef03c930392253c83c84af0c73b7e57cd902a526b09b4155a25930fe.avif",
    "url": "https://korona.lat/flashcard/cuphead/index.html"
  },
  {
    "title": "DOOM",
    "cat": "FPS",
    "img": "https://korona.lat/assets/images/flashcards/1200.webp",
    "url": "https://korona.lat/flashcard/doom/index.html"
  },
  {
    "title": "Danganronpa: Trigger Happy Havoc",
    "cat": "Apps & Tools",
    "img": "https://korona.lat/assets/images/flashcards/6a84ae122ee090fb34e921775ed4c8d3f29fece6ba746c9b557202a62f10b542.avif",
    "url": "https://korona.lat/flashcard/danganronpa/index.html"
  },
  {
    "title": "Deltarune",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/deltarune.webp",
    "url": "https://korona.lat/flashcard/deltarune/index.html"
  },
  {
    "title": "Doki Doki Literature Club+",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/cfef7634adfd013fc6429f00e0284ddef85c0f857ed5da8d319710cbc249cac3.avif",
    "url": "https://korona.lat/flashcard/ddlcplus/index.html"
  },
  {
    "title": "Dumb Ways To Die",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/1_Al_9A_Usj2VY15kRVNdmKg.jpg",
    "url": "https://korona.lat/flashcard/dumb-ways-to-die/index.html"
  },
  {
    "title": "God of War: Chains of Olympus",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/102504-1.jpg",
    "url": "https://korona.lat/flashcard/god-of-war-chains-of-olympus"
  },
  {
    "title": "God of War: Ghost of Sparta",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Kratos-Ghost-of-Sparta-God-of-War.avif",
    "url": "https://korona.lat/flashcard/god-of-war-ghost-of-sparta/index.html"
  },
  {
    "title": "Gorilla Tag",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/4744c1ac34e78d50f9ecfbc9958ca6375a2011b1bcf9b9b6.avif",
    "url": "https://korona.lat/flashcard/gorilla-tag/index.html"
  },
  {
    "title": "HexGL",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/U1_bAe.jpg",
    "url": "https://korona.lat/flashcard/HexGL/index.html"
  },
  {
    "title": "Hollow Knight: Silksong",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/silky.avif",
    "url": "https://korona.lat/flashcard/silksong/index.html"
  },
  {
    "title": "Hotline Miami",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/124e6f1066799ec18bb6722d4e312773ec9570b16ce450736cd64ba9730c91e0.jpg",
    "url": "https://korona.lat/flashcard/hotline-miami/index.html"
  },
  {
    "title": "Infinite Craft",
    "cat": "Puzzle / Strategy",
    "img": "https://cdn.prod.website-files.com/65e7db4e2f26f492c41dc356/65e7de4c7d10d92bb5c28319_Thi%E1%BA%BFt%20k%E1%BA%BF%20ch%C6%B0a%20c%C3%B3%20t%C3%AAn%20(18).png",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/infinitecraft@main/index.html"
  },
  {
    "title": "Iron Lung",
    "cat": "Horror",
    "img": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1846170/page_bg_raw.jpg?t=1770061280",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/iron-lung@main/index.html"
  },
  {
    "title": "Kindergarten 1",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Wiki-background.webp",
    "url": "https://korona.lat/flashcard/kindergarten/1/index.html"
  },
  {
    "title": "Kindergarten 2",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/aasdasdasdasdasdasd.jpg",
    "url": "https://korona.lat/flashcard/kindergarten/2/index.html"
  },
  {
    "title": "Kindergarten 3",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/caasdasdsule_616x353.jpg",
    "url": "https://korona.lat/flashcard/kindergarten3/index.html"
  },
  {
    "title": "Klifur",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/prmajD.png",
    "url": "https://korona.lat/flashcard/klifur/index.html"
  },
  {
    "title": "Lego Batman: The Videogame",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/lego-batman-the-videogame-ds.webp",
    "url": "https://korona.lat/flashcard/lego-batman/index.html"
  },
  {
    "title": "Little Big Planet",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/dtrbirjxbmwjymd-800x450-nopad.jpg",
    "url": "https://korona.lat/flashcard/lbp/index.html"
  },
  {
    "title": "Look Outside",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/lookoutside.jpg",
    "url": "https://korona.lat/flashcard/look-outside/index.html"
  },
  {
    "title": "Meatboy",
    "cat": "Platformer",
    "img": "https://cdn.mobygames.com/covers/6546285-super-meat-boy-ultra-rare-edition-windows-front-cover.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/meatboy@main/index.html"
  },
  {
    "title": "Metal Gear Solid",
    "cat": "Action",
    "img": "https://gaming-cdn.com/images/news/articles/1556/cover/1000x563/konami-doesn-t-rule-out-further-metal-gear-solid-remakes-cover647709c9b6371.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/mgs@main/index.html"
  },
  {
    "title": "Minecraft",
    "cat": "Sandbox / Sports",
    "img": "https://filterforge.com/filters/11635.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/MC@main/index.html"
  },
  {
    "title": "Minesweeper",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/minesweeper-logo.png",
    "url": "https://korona.lat/flashcard/minesweeper/index.html"
  },
  {
    "title": "NBA 2K13",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/NBA-2k13.jpeg",
    "url": "https://korona.lat/flashcard/nba2k13/index.html"
  },
  {
    "title": "Needy Streamer Overload",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/product_img_624afa2401fc34d1dd73e94189379d44.png",
    "url": "https://korona.lat/flashcard/nso/index.html"
  },
  {
    "title": "OMORI",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/capsuxasdle_616x353.jpg",
    "url": "https://korona.lat/flashcard/omori/index.html"
  },
  {
    "title": "Orange Roulette",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/header.jpg",
    "url": "https://korona.lat/flashcard/orange-roulette/index.html"
  },
  {
    "title": "Peggle",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/maxzxczxczxczxczxcresdefault.jpg",
    "url": "https://korona.lat/flashcard/peggle/index.html"
  },
  {
    "title": "People Playground",
    "cat": "Sandbox / Sports",
    "img": "https://images.gog-statics.com/5ffaf8774afa96332c101594d9046271d002b90bc1e2ba1fd1ed3d4da2f8d8df.jpg",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/PPG@main/index.html"
  },
  {
    "title": "Pokemon Blue",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/H2x1_GB_PokemonBlue_enGB.jpg",
    "url": "https://korona.lat/flashcard/pokemon-blue-version/index.html"
  },
  {
    "title": "Pokemon Crystal",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/H2x1_GBC_PokemonCrystal_enGB.jpg",
    "url": "https://korona.lat/flashcard/pokemon-crystal-version/index.html"
  },
  {
    "title": "Pokemon Emerald",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/emerald.png",
    "url": "https://korona.lat/flashcard/pokemon-emerald-version/index.html"
  },
  {
    "title": "Pokemon Fire Red",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/16x9_NSwitch_PokemonFireRed_UK_cover1600w.jpg",
    "url": "https://korona.lat/flashcard/pokemon-fire-red-version/index.html"
  },
  {
    "title": "Pokemon Gold",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/H2x1_GBC_PokemonGold_enGB.jpg",
    "url": "https://korona.lat/flashcard/pokemon-gold-version/index.html"
  },
  {
    "title": "Pokemon Leaf Green",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/16x9_NSwitch_PokemonLeafGreen_UK.jpg",
    "url": "https://korona.lat/flashcard/pokemon-leaf-green-version/index.html"
  },
  {
    "title": "Pokemon Red",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/H2x1_GB_PokemonRed_enGB_cover1280w.jpg",
    "url": "https://korona.lat/flashcard/pokemon-red-version/index.html"
  },
  {
    "title": "Pokemon Ruby",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/SI_GBA_PokemonRuby_enGB_cover1280w.jpg",
    "url": "https://korona.lat/flashcard/pokemon-ruby-version/index.html"
  },
  {
    "title": "Pokemon Sapphire",
    "cat": "Apps & Tools",
    "img": "https://korona.lat/assets/images/flashcards/SI_GBA_PokemonSapphire_enGB_cover1600w.jpg",
    "url": "https://korona.lat/flashcard/pokemon-sapphire-version/index.html"
  },
  {
    "title": "Pokemon Silver",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/pokemon-silver.jpg",
    "url": "https://korona.lat/flashcard/pokemon-silver-version/index.html"
  },
  {
    "title": "Pokemon Yellow",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/H2x1_GB_PokemonYellow_enGB_cover1600w.jpg",
    "url": "https://korona.lat/flashcard/pokemon-yellow-version/index.html"
  },
  {
    "title": "Polytrack",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/maxresdezxczxczxczxcfault.jpg",
    "url": "https://korona.lat/flashcard/polytrack/index.html"
  },
  {
    "title": "Project Diva Extended",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/artworks-000287662511-lm5vi5-t500x500.jpg",
    "url": "https://korona.lat/flashcard/divaextend/index.html"
  },
  {
    "title": "QWOP",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/qwop.webp",
    "url": "https://korona.lat/flashcard/qwop/index.html"
  },
  {
    "title": "R.E.P.O",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Repo-Titulo.jpg.webp",
    "url": "https://korona.lat/flashcard/repo/index.html"
  },
  {
    "title": "RE:RUN",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/8XI5Ic.png",
    "url": "https://korona.lat/flashcard/rerun/index.html"
  },
  {
    "title": "Raft",
    "cat": "Sandbox / Sports",
    "img": "https://store-images.s-microsoft.com/image/apps.17462.14102062639781722.573266e7-686b-44fb-9e48-a2585bc2170f.951859b9-7b83-401e-8a0b-a6626a3679ac?q=90&w=480&h=270",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/raft@main/index.html"
  },
  {
    "title": "Raldi's Crackhouse",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/65862c6feaf80.webp",
    "url": "https://korona.lat/flashcard/raldi/index.html"
  },
  {
    "title": "Rise Higher",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/maxrezxczxczczxcsdefault.jpg",
    "url": "https://korona.lat/flashcard//rise-higher/index.html"
  },
  {
    "title": "Road of the Dead",
    "cat": "Action",
    "img": "https://korona.lat/assets/rotd.webp",
    "url": "https://korona.lat/flashcard/rotd/index.html"
  },
  {
    "title": "Road of the Dead 2",
    "cat": "Action",
    "img": "https://korona.lat/assets/rotd2.png",
    "url": "https://korona.lat/flashcard/rotd2/index.html"
  },
  {
    "title": "Schoolboy Runaway",
    "cat": "Runner / Racing",
    "img": "https://korona.lat/assets/images/flashcards/schoolboyrunaway.webp",
    "url": "https://korona.lat/flashcard/schoolboy-runaway/index.html"
  },
  {
    "title": "Silent Hill",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/hq720.jpg",
    "url": "https://korona.lat/flashcard/silent-hill/index.html"
  },
  {
    "title": "SilkSong",
    "cat": "Action",
    "img": "https://static0.thegamerimages.com/wordpress/wp-content/uploads/2025/09/official-silksong-promo-art-with-hornet-standing-on-a-spiked-platform-with-her-needle.jpg?w=1600&h=1600&fit=crop",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/silksong@main/index.html"
  },
  {
    "title": "Slender: The 8 Pages",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Slender_Logo.jpg",
    "url": "https://korona.lat/flashcard/slender/index.html"
  },
  {
    "title": "Sonic CD",
    "cat": "Platformer",
    "img": "https://korona.lat/assets/images/flashcards/8793_Sonic_CD.webp",
    "url": "https://korona.lat/flashcard/sonic-cd/index.html"
  },
  {
    "title": "Sonic Mania",
    "cat": "Platformer",
    "img": "https://korona.lat/assets/images/flashcards/capsule_6zxzxzx16x353.jpg",
    "url": "https://korona.lat/flashcard/sonicmania/index.html"
  },
  {
    "title": "Sonic.EXE",
    "cat": "Platformer",
    "img": "https://korona.lat/assets/images/flashcards/1311560123.jc-the-hyena_soniccreepy1.webp",
    "url": "https://korona.lat/flashcard/sonicexe/index.html"
  },
  {
    "title": "Stumble Guys",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/45dc1c4949a8a343f123a3eef6c5ba8aade31d8ad4f945706a4f4745e74d8573.avif",
    "url": "https://nowgg.fun/apps/a/10011/b.html"
  },
  {
    "title": "Subway Surfers",
    "cat": "Runner / Racing",
    "img": "https://www.techspot.com/images2/downloads/topdownload/2018/03/Subway-Surfers-Android-T.png",
    "url": "https://html-classic.itch.zone/html/15665336/index.html"
  },
  {
    "title": "Tanuki Sunset",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/40b2e5a70c32922326de3732b6b2f17f7773e14caa70296ff43379e6ca92676e.avif",
    "url": "https://korona.lat/flashcard/tanuki-sunset/index.html"
  },
  {
    "title": "Tattletail",
    "cat": "Horror",
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVLfgGq_X4NDjtdY1U3AM5nmJonWcfG8PC5w&s",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/tattletail@main/index.html"
  },
  {
    "title": "Terraria",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/heaasdasdasdasdder.jpg",
    "url": "https://korona.lat/flashcard/Terraria.html"
  },
  {
    "title": "That's Not My Neighbor",
    "cat": "Horror",
    "img": "https://korona.lat/assets/images/flashcards/thatsnotmyneighbor.jpg",
    "url": "https://korona.lat/flashcard/thats-not-my-neighbor/index.html"
  },
  {
    "title": "The Man from the Window",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/the-man-from-the-window.avif",
    "url": "https://korona.lat/flashcard/the-man-in-the-window/index.html"
  },
  {
    "title": "The Powder Toy",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/tpt.jpg",
    "url": "https://korona.lat/flashcard/tpt/index.html"
  },
  {
    "title": "Trees Hate you",
    "cat": "Action",
    "img": "https://snowrider3d.com/data/image/game/trees-hate-you/trees-hate-you.png",
    "url": "https://cdn.jsdelivr.net/gh/lwklearning/treeshateyou@main/index.html"
  },
  {
    "title": "Undertale",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/44bea8c565db26c0c470a6325a47c9ea031633945cb91e4b5e1b1a39b01a2cdb.avif",
    "url": "https://korona.lat/flashcard/undertale/index.html"
  },
  {
    "title": "Undertale Yellow",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/136925-ee65ajxb-v4.webp",
    "url": "https://korona.lat/flashcard/undertale-yellow/index.html"
  },
  {
    "title": "Untitled Goose Game",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/e3549b645ea3dc77411280ba4a83f018235bbdb6f0b32039a5519cee985f0f4f.avif",
    "url": "https://korona.lat/flashcard/untitled-goose-game/index.html"
  },
  {
    "title": "WebFishing",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/capsule_6zxczxczxc16x353.jpg",
    "url": "https://korona.lat/flashcard/web-fishing/index.html"
  },
  {
    "title": "Yandere Simulator",
    "cat": "Action",
    "img": "https://korona.lat/assets/images/flashcards/Logo_Yandere_Simulator.svg.png",
    "url": "https://korona.lat/flashcard/yandere-simulator/index.html"
  },
  {
    "title": "a date with death",
    "cat": "Action",
    "img": "https://korona.lat/assets/adatewithdeath.jpg",
    "url": "https://korona.lat/flashcard/adatewithdeath/index.html"
  },
  {
    "title": "agafabh",
    "cat": "Action",
    "img": "https://korona.lat/assets/agafabh.jpg",
    "url": "https://korona.lat/flashcard/agafabh/index.html"
  },
  {
    "title": "approaches",
    "cat": "Apps & Tools",
    "img": "https://korona.lat/assets/approaches.gif",
    "url": "https://korona.lat/flashcard/approaches/index.html"
  },
  {
    "title": "class of '09: the flipside",
    "cat": "Action",
    "img": "https://korona.lat/assets/co09tfs.jpg",
    "url": "https://korona.lat/flashcard/co09tfs/index.html"
  },
  {
    "title": "class of '09: the reup",
    "cat": "Action",
    "img": "https://korona.lat/assets/co09tru.jpg",
    "url": "https://korona.lat/flashcard/co09tru/index.html"
  },
  {
    "title": "cloverpit",
    "cat": "Action",
    "img": "https://korona.lat/assets/cloverpit.jpeg",
    "url": "https://korona.lat/flashcard/cloverpit/index.html"
  },
  {
    "title": "cruelty squad",
    "cat": "Action",
    "img": "https://korona.lat/assets/crueltysquad.jpeg",
    "url": "https://korona.lat/flashcard/crueltysquad/index.html"
  },
  {
    "title": "dictators: no peace countryballs",
    "cat": "Action",
    "img": "https://korona.lat/assets/npc.jpg",
    "url": "https://korona.lat/flashcard/npc/index.html"
  },
  {
    "title": "do not take this cat home",
    "cat": "Action",
    "img": "https://korona.lat/assets/dnttch.png",
    "url": "https://korona.lat/flashcard/donottakethiscathome/index.html"
  },
  {
    "title": "fear and hunger",
    "cat": "Action",
    "img": "https://korona.lat/assets/fah.jpeg",
    "url": "https://korona.lat/flashcard/fah/index.html"
  },
  {
    "title": "fear and hunger 2: termina",
    "cat": "Action",
    "img": "https://korona.lat/assets/fah2.jpg",
    "url": "https://korona.lat/flashcard/fah2/index.html"
  },
  {
    "title": "gabriels awesome schoolhouse",
    "cat": "Action",
    "img": "https://korona.lat/assets/gash.jpg",
    "url": "https://korona.lat/flashcard/gash/index.html"
  },
  {
    "title": "in stars and time",
    "cat": "Action",
    "img": "https://korona.lat/assets/isat.png",
    "url": "https://korona.lat/flashcard/isat/index.html"
  },
  {
    "title": "inscryption",
    "cat": "Action",
    "img": "https://korona.lat/assets/inscryption.jpg",
    "url": "https://korona.lat/flashcard/inscryption/index.html"
  },
  {
    "title": "killer chat",
    "cat": "Apps & Tools",
    "img": "https://korona.lat/assets/killerchat.webp",
    "url": "https://korona.lat/flashcard/killerchat/index.html"
  },
  {
    "title": "peaks of yore",
    "cat": "Action",
    "img": "https://korona.lat/assets/peaksofyore.png",
    "url": "https://korona.lat/flashcard/peaksofyore/index.html"
  },
  {
    "title": "plague inc: evolved",
    "cat": "Action",
    "img": "https://korona.lat/assets/plagueinc.png",
    "url": "https://korona.lat/flashcard/plagueinc/index.html"
  },
  {
    "title": "power hover",
    "cat": "Action",
    "img": "https://korona.lat/assets/powerhover.webp",
    "url": "https://korona.lat/flashcard/powerhover/index.html"
  },
  {
    "title": "purrgatory",
    "cat": "Action",
    "img": "https://korona.lat/assets/purrgatory.jpg",
    "url": "https://korona.lat/flashcard/purrgatory/index.html"
  },
  {
    "title": "saihate station",
    "cat": "Action",
    "img": "https://korona.lat/assets/saihate.webp",
    "url": "https://korona.lat/flashcard/saihate/index.html"
  },
  {
    "title": "shift at midnight",
    "cat": "Action",
    "img": "https://korona.lat/assets/shiftatmidnight.jpg",
    "url": "https://korona.lat/flashcard/shift-at-midnight/index.html"
  },
  {
    "title": "stardew valley",
    "cat": "Action",
    "img": "https://korona.lat/assets/stardew.avif",
    "url": "https://korona.lat/flashcard/stardew/index.html"
  },
  {
    "title": "whos your daddy",
    "cat": "Action",
    "img": "https://korona.lat/assets/wyd.jpg",
    "url": "https://korona.lat/flashcard/whosyourdaddy/index.html"
  },
  {
    "title": "windowkill",
    "cat": "Action",
    "img": "https://korona.lat/assets/windowkill.jpeg",
    "url": "https://korona.lat/flashcard/windowkill/index.html"
  },
  {
    "title": "youtubers life",
    "cat": "Action",
    "img": "https://korona.lat/assets/ytlife.jpeg",
    "url": "https://korona.lat/flashcard/ytlife/index.html"
  }
];

  const CLOAK_PRESETS = {
    classroom: { title: "Classes", icon: "https://www.gstatic.com/classroom/logo_square_rounded.svg" },
    ixl: { title: "IXL | Math, Language Arts, Science, Social Studies, and Spanish", icon: "https://www.ixl.com/favicon.ico" },
    drive: { title: "My Drive - Google Drive", icon: "https://ssl.gstatic.com/images/branding/product/1x/drive_2020q4_32dp.png" },
    docs: { title: "Google Docs", icon: "https://ssl.gstatic.com/docs/documents/images/kix-favicon7.ico" },
    canvas: { title: "Dashboard", icon: "https://du11hjcvx0uqb.cloudfront.net/dist/images/favicon-e10d657a73.ico" }
  };

  
  // --- ARCTIC WISP PROXY ENGINE (arctic.svg transport) ---
  const ARCTIC_WISP_ENDPOINTS = [
    "wss://arctic.lat/wisp/",
    "wss://fern.best/wisp/",
    "wss://v2.quest/cdn-cgi/p/",
    "wss://math.luminalos.com/cdn-cgi/p/"
  ];
  
  const ARCTIC_PROXY_HOST = "https://korona.lat";
  // Client-side HTML loader for jsDelivr-hosted apps (jsDelivr serves .html as text/plain).
  function addBaseHref(html, targetUrl) {
    if (/<base\b/i.test(html)) return html;
    const base = targetUrl.slice(0, targetUrl.lastIndexOf("/") + 1);
    return html.replace(/<head([^>]*)>/i, '<head$1><base href="' + base + '">');
  }
  async function fetchHtmlApp(targetUrl) {
    const res = await fetch(targetUrl, { cache: "no-store" });
    if (!res.ok) throw new Error("HTTP " + res.status);
    return addBaseHref(await res.text(), targetUrl);
  }
  async function loadHtmlApp(frame, targetUrl) {
    try {
      frame.srcdoc = await fetchHtmlApp(targetUrl);
    } catch (err) {
      frame.src = targetUrl;
    }
  }

  function getArcticProxyUrl(targetUrl) {
    if (!targetUrl) return "about:blank";
    // If it's already a relative / flashcard URL on korona.lat or absolute korona.lat URL, keep direct
    if (targetUrl.startsWith("/flashcard/") || targetUrl.startsWith("https://korona.lat/")) {
      return targetUrl.startsWith("/") ? ARCTIC_PROXY_HOST + targetUrl : targetUrl;
    }
    // Discord external link handling
    if (targetUrl.includes("discord.com") || targetUrl.includes("discord.gg")) {
      return targetUrl;
    }
    // Scramjet / Wisp proxy routing for external URLs
    return ARCTIC_PROXY_HOST + "/?url=" + encodeURIComponent(targetUrl);
  }

  let activeCategory = "All";
  let currentGameUrl = "";

  // DOM Elements
  const gameGrid = document.getElementById("game-grid");
  const gameCount = document.getElementById("game-count");
  const searchInput = document.getElementById("search-input");
  const playerModal = document.getElementById("player-modal");
  const playerFrame = document.getElementById("player-frame");
  const playerInput = document.getElementById("player-input");
  const feedbackModal = document.getElementById("lwk-feedback-modal");

  function init() {
    renderGames(ALL_GAMES);
    setupEventListeners();
    setupClientUplink();
    setupBartUnrestrictor();
    setupIntroVideo();
  }

  function renderGames(items) {
    if (!gameGrid) return;
    gameGrid.innerHTML = "";

    if (items.length === 0) {
      gameGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #22aa22;">
          <h3>> NO MATCHING ENTRIES FOUND IN DATABASE</h3>
        </div>
      `;
      if (gameCount) gameCount.textContent = "0 items";
      return;
    }

    if (gameCount) gameCount.textContent = `${items.length} ${items.length === 1 ? 'item' : 'items'}`;

    items.forEach(game => {
      const card = document.createElement("a");
      card.className = "game-card";
      card.href = "javascript:void(0)";
      card.setAttribute("data-url", game.url);
      card.innerHTML = `
        <img src="${game.img}" alt="${game.title}" loading="lazy" onerror="this.src='https://via.placeholder.com/200x200?text=LWK'" />
        <span class="game-cat-badge">${game.cat}</span>
        <div class="game-title">${game.title}</div>
      `;
      card.addEventListener("click", () => launchGame(game));
      gameGrid.appendChild(card);
    });
  }

  function launchGame(game) {
    if (game.url.includes("discord.com") || game.url.includes("discord.gg") || game.isExternal || game.target === "_blank") {
      window.open(game.url, "_blank");
      return;
    }
    currentGameUrl = game.url;
    if (playerInput) playerInput.value = game.url;
    if (playerFrame) {
      if (game.url.startsWith("https://cdn.jsdelivr.net/gh/")) {
        loadHtmlApp(playerFrame, game.url);
      } else {
        playerFrame.src = game.url;
      }
    }
    if (playerModal) playerModal.classList.add("is-open");
  }

  function closePlayer() {
    if (playerModal) playerModal.classList.remove("is-open");
    if (playerFrame) playerFrame.src = "about:blank";
  }

  async function openStealthTab() {
    if (!currentGameUrl) return;
    const win = window.open("about:blank", "_blank");
    if (!win) return;
    let srcdoc = "";
    if (currentGameUrl.startsWith("https://cdn.jsdelivr.net/gh/")) {
      try { srcdoc = await fetchHtmlApp(currentGameUrl); } catch (err) {}
    }
    win.document.write(`
      <!DOCTYPE html>
      <html>
      <head><title>${document.title}</title><style>html,body{margin:0;height:100%;overflow:hidden;background:#000;}iframe{width:100%;height:100%;border:none;}</style></head>
      <body><iframe id="lwk-stealth-frame" ${srcdoc ? "" : 'src="' + currentGameUrl + '"'}></iframe></body>
      </html>
    `);
    win.document.close();
    if (srcdoc) {
      const f = win.document.getElementById("lwk-stealth-frame");
      if (f) f.srcdoc = srcdoc;
    }
  }

  function filterGames() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    const filtered = ALL_GAMES.filter(g => {
      const matchesCat = activeCategory === "All" || g.cat === activeCategory;
      const matchesSearch = g.title.toLowerCase().includes(query) || g.cat.toLowerCase().includes(query);
      return matchesCat && matchesSearch;
    });
    renderGames(filtered);
  }

  function setupEventListeners() {
    if (searchInput) searchInput.addEventListener("input", filterGames);

    document.querySelectorAll(".lwk-cat-pill").forEach(pill => {
      pill.addEventListener("click", () => {
        document.querySelectorAll(".lwk-cat-pill").forEach(p => p.classList.remove("is-active"));
        pill.classList.add("is-active");
        activeCategory = pill.getAttribute("data-cat") || "All";
        filterGames();
      });
    });

    const cloakSelect = document.getElementById("cloak-select");
    if (cloakSelect) {
      cloakSelect.addEventListener("change", (e) => {
        const p = CLOAK_PRESETS[e.target.value];
        if (p) {
          document.title = p.title;
          let link = document.querySelector("link[rel*='icon']");
          if (!link) {
            link = document.createElement("link");
            link.rel = "icon";
            document.head.appendChild(link);
          }
          link.href = p.icon;
        }
      });
    }

    const closePlayerBtn = document.getElementById("close-player-btn");
    const openStealthBtn = document.getElementById("open-stealth-btn");
    const fullPlayerBtn = document.getElementById("full-player-btn");

    if (closePlayerBtn) closePlayerBtn.addEventListener("click", closePlayer);
    if (openStealthBtn) openStealthBtn.addEventListener("click", openStealthTab);
    if (fullPlayerBtn && playerFrame) {
      fullPlayerBtn.addEventListener("click", () => {
        if (playerFrame.requestFullscreen) playerFrame.requestFullscreen();
      });
    }

    const feedbackBtn = document.getElementById("lwk-feedback-btn");
    const closeFeedbackBtn = document.getElementById("lwk-feedback-close");
    const submitFeedbackBtn = document.getElementById("lwk-feedback-submit");

    if (feedbackBtn) feedbackBtn.addEventListener("click", () => feedbackModal.style.display = "flex");
    if (closeFeedbackBtn) closeFeedbackBtn.addEventListener("click", () => feedbackModal.style.display = "none");
    if (submitFeedbackBtn) {
      submitFeedbackBtn.addEventListener("click", () => {
        const txt = document.getElementById("lwk-feedback-input");
        if (txt && txt.value.trim()) {
          alert("[ TERMINAL ] Feedback submitted. Thank you.");
          txt.value = "";
          feedbackModal.style.display = "none";
        }
      });
    }

    // Keydown shortcuts
    document.addEventListener("keydown", (e) => {
      if (e.key === "`") {
        document.title = CLOAK_PRESETS.ixl.title;
        window.location.href = "https://www.ixl.com/";
      }
    });
  }

  // --- INTRO VIDEO PLAYER ---
  function setupIntroVideo() {
    const overlay = document.getElementById("intro-video-overlay");
    const btn = document.getElementById("intro-video-btn");
    const player = document.getElementById("intro-video-player");

    if (btn && player && overlay) {
      btn.onclick = () => {
        btn.remove();
        player.style.display = "block";
        player.play().catch(() => overlay.remove());
      };

      player.onended = () => {
        overlay.style.opacity = "0";
        setTimeout(() => overlay.remove(), 800);
      };
    }
  }



// --- BART UNRESTRICTOR ENGINE (ARCTIC WISP TRANSPORT) ---
  function setupBartUnrestrictor() {
    if (window.__LWK_UNRESTRICTOR_LOADED__) return;
    window.__LWK_UNRESTRICTOR_LOADED__ = true;

    const btn = document.createElement("button");
    btn.id = "lwk-unrestrictor-btn";
    btn.title = "BART Unrestrictor";
    btn.innerHTML = `<img src="https://github.com/LWKlearning/bart/blob/main/image%20(15).png?raw=true">`;

    const overlay = document.createElement("div");
    overlay.id = "lwk-unrestrictor-overlay";
    overlay.innerHTML = `
      <div id="lwk-unrestrictor-window">
        <div id="lwk-unrestrictor-bar">
          <button id="lwk-unrestrictor-fullscreen">⛶</button>
          <button id="lwk-unrestrictor-newtab">↗</button>
          <input id="lwk-unrestrictor-input" placeholder="Search Google or enter URL...">
          <button id="lwk-unrestrictor-go">Go</button>
          <button id="lwk-unrestrictor-close">✕</button>
        </div>
        <div id="lwk-dev-hint">Hint: typing D-E-V in any page unlocks developer tools on any page related to lwklearning!</div>
        <iframe id="lwk-unrestrictor-frame"></iframe>
      </div>
    `;

    document.body.appendChild(btn);
    document.body.appendChild(overlay);

    let frame = overlay.querySelector("#lwk-unrestrictor-frame");

    function formatTarget(input) {
      const trimmed = input.trim();
      if (/^https?:\/\//i.test(trimmed)) return trimmed;
      if (/^[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)+/i.test(trimmed) && !trimmed.includes(' ')) return "https://" + trimmed;
      return "https://www.google.com/search?q=" + encodeURIComponent(trimmed);
    }

    function resetFrame() {
      const f = document.createElement("iframe");
      f.id = "lwk-unrestrictor-frame";
      f.style.flex = "1";
      f.style.border = "none";
      f.style.background = "black";
      frame.replaceWith(f);
      frame = f;
    }

    function showBartPlaceholder() {
      const doc = frame.contentDocument || frame.contentWindow.document;
      doc.open();
      doc.write(`
        <html style="background:black;">
        <body style="margin:0; display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; color:#00aaff; font-family:Courier New, monospace; text-align:center;">
          <img src="https://github.com/LWKlearning/bart/blob/main/image%20(15).png?raw=true" style="max-width:180px; margin-bottom:15px;">
          <div style="font-size:16px; padding: 0 20px;">Search Google or type a URL, Press Go, and BART will load it!</div>
        </body>
        </html>
      `);
      doc.close();
    }

    btn.onclick = () => {
      overlay.style.display = "block";
      resetFrame();
      showBartPlaceholder();
    };

    overlay.querySelector("#lwk-unrestrictor-close").onclick = () => {
      overlay.style.display = "none";
      overlay.querySelector("#lwk-unrestrictor-input").value = "";
      resetFrame();
    };

    overlay.querySelector("#lwk-unrestrictor-go").onclick = () => {
      const input = overlay.querySelector("#lwk-unrestrictor-input").value.trim();
      if (!input) return;
      resetFrame();
      const targetUrl = getArcticProxyUrl(formatTarget(input));
      frame.src = targetUrl;
    };

    overlay.querySelector("#lwk-unrestrictor-input").onkeydown = (e) => {
      if (e.key === "Enter") {
        overlay.querySelector("#lwk-unrestrictor-go").click();
      }
    };

    overlay.querySelector("#lwk-unrestrictor-newtab").onclick = () => {
      const input = overlay.querySelector("#lwk-unrestrictor-input").value.trim();
      if (!input) return;
      const targetUrl = getArcticProxyUrl(formatTarget(input));
      const win = window.open("about:blank", "_blank");
      if (win) {
        win.document.write(`
          <!DOCTYPE html>
          <html>
          <head>
            <script src="https://cdn.jsdelivr.net/gh/luminsdk/script@latest/lumin.min.js"><\/script>
          </head>
          <body style="margin:0;overflow:hidden;background:#000;">
            <iframe src="${targetUrl}" style="width:100%;height:100%;border:none;position:fixed;inset:0;"></iframe>
          </body>
          </html>
        `);
        win.document.close();
      }
    };

    overlay.querySelector("#lwk-unrestrictor-fullscreen").onclick = () => {
      if (frame.requestFullscreen) frame.requestFullscreen();
    };

    // --- BART TALKING BUBBLE ---
    (function showBartBubble() {
      if (window.__LWK_BART_BUBBLE_SHOWN__) return;
      window.__LWK_BART_BUBBLE_SHOWN__ = true;

      const quotes = [
        "Hey! I can 'Unrestrict' that site you want!",
        "Wanna go to something fun? I can Unrestrict it 😎",
        "Need some Unrestricted sites? BART can totally do that!",
        "I see you wanting something you cant access, i can provide it!",
        "With my Unrestrictor magic, ANY page is just a click away!"
      ];
      const quote = quotes[Math.floor(Math.random() * quotes.length)];

      const bubble = document.createElement("div");
      bubble.id = "lwk-bart-bubble";
      bubble.textContent = quote;

      const arrow = document.createElement("div");
      arrow.id = "lwk-bart-bubble-arrow";
      bubble.appendChild(arrow);

      document.body.appendChild(bubble);

      requestAnimationFrame(() => {
        const rect = btn.getBoundingClientRect();
        bubble.style.left = Math.max(10, rect.left - 230) + "px";
        bubble.style.top = (rect.top + 10) + "px";
        bubble.style.opacity = "1";
        bubble.style.transform = "translateY(-10px)";
      });

      function fadeBubble(b) {
        b.style.opacity = "0";
        b.style.transform = "translateY(0)";
        setTimeout(() => b.remove(), 500);
      }

      bubble.onclick = () => fadeBubble(bubble);
      setTimeout(() => fadeBubble(bubble), 8000);
    })();
  }

  // --- CLIENT UPLINK (LWK OS V2.1) ---
  function setupClientUplink() {
    const API = "https://moderators.maxandbudzhaha.workers.dev/api/check-effect";
    let lastSeen = 0;

    async function checkUplink() {
      try {
        const response = await fetch(`${API}?_t=${Date.now()}`, { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        const incomingTime = data.time || data.timestamp;
        const incomingEffect = data.type || data.effect;
        const incomingMsg = data.message || data.msg;

        if (incomingTime && incomingTime > lastSeen) {
          lastSeen = incomingTime;
          if (incomingEffect === 'GLITCH') {
            document.body.style.filter = 'hue-rotate(90deg) contrast(200%)';
            setTimeout(() => document.body.style.filter = 'none', 3000);
          } else if (incomingEffect === 'INVERT') {
            document.body.style.filter = 'invert(1)';
            setTimeout(() => document.body.style.filter = 'none', 4000);
          } else if (incomingEffect === 'MESSAGE') {
            alert(`[ SYSTEM ALERT ] ${incomingMsg}`);
          }
        }
      } catch (err) {}
    }

    setInterval(checkUplink, 31000);
    checkUplink();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* --- INJECTED TAB STEALTH & UPLINK SCRIPT --- */

(function() {
    // --- LWK_OS UPLINK LISTENER ---
    if (!window.LWK_UPLINK_ACTIVE) {
        window.LWK_UPLINK_ACTIVE = true;
        const UPLINK_CONFIG = { API: "https://moderators.maxandbudzhaha.workers.dev/api/check-effect", POLL_RATE: 31000 };
        let lastSeenTimestamp = 0;

        const style = document.createElement('style');
        style.innerHTML = `
            @keyframes os-glitch { 0% { transform: translate(0); } 20% { transform: translate(-5px, 5px); } 40% { transform: translate(-5px, -5px); } 60% { transform: translate(5px, 5px); } 80% { transform: translate(5px, -5px); } 100% { transform: translate(0); } }
            @keyframes os-shake { 0% { transform: translate(1px, 1px) rotate(0deg); } 10% { transform: translate(-1px, -2px) rotate(-1deg); } 30% { transform: translate(3px, 2px) rotate(0deg); } 50% { transform: translate(-1px, 2px) rotate(1deg); } 100% { transform: translate(1px, -2px) rotate(0deg); } }
            .os-glitch-active { animation: os-glitch 0.15s infinite; filter: hue-rotate(90deg) contrast(200%); }
            .os-shake-active { animation: os-shake 0.1s infinite; }
        `;
        document.head.appendChild(style);

        async function checkUplink() {
            try {
                const r = await fetch(`${UPLINK_CONFIG.API}?_t=${Date.now()}`, { cache: "no-store" });
                if (!r.ok) return;
                const d = await r.json();
                const t = d.time || d.timestamp;
                if (t && t > lastSeenTimestamp) {
                    lastSeenTimestamp = t;
                    executePayload(d.type || d.effect, d.message || d.msg);
                }
            } catch (e) {}
        }

        function executePayload(effect, message) {
            switch (effect) {
                case 'GLITCH':
                    document.body.classList.add('os-glitch-active');
                    setTimeout(() => document.body.classList.remove('os-glitch-active'), 3000);
                    break;
                case 'THUD':
                case 'BOOM':
                    document.body.classList.add('os-shake-active');
                    try {
                        const ctx = new (window.AudioContext || window.webkitAudioContext)();
                        const osc = ctx.createOscillator();
                        const gain = ctx.createGain();
                        osc.type = 'triangle';
                        osc.frequency.setValueAtTime(150, ctx.currentTime);
                        osc.frequency.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
                        gain.gain.setValueAtTime(1.0, ctx.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);
                        osc.connect(gain); gain.connect(ctx.destination);
                        osc.start(); osc.stop(ctx.currentTime + 0.8);
                    } catch (e) {}
                    setTimeout(() => document.body.classList.remove('os-shake-active'), 8000);
                    break;
                case 'MESSAGE':
                    const ov = document.createElement('div');
                    ov.style = "position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,0.95);color:#ff0000;z-index:9999999;display:flex;flex-direction:column;align-items:center;justify-content:center;font-family:monospace;border:20px solid #ff0000;box-sizing:border-box;";
                    ov.innerHTML = `<h1 style="font-size:50px;animation:blinker 0.5s linear infinite;">[ SYSTEM ALERT ]</h1><p style="font-size:30px;color:white;text-align:center;padding:20px;">${message}</p><style>@keyframes blinker { 50% { opacity: 0; } }</style>`;
                    document.body.appendChild(ov);
                    setTimeout(() => ov.remove(), 8000);
                    break;
                case 'INVERT':
                    document.body.style.filter = "invert(1)";
                    setTimeout(() => document.body.style.filter = "none", 4000);
                    break;
                case 'PARTY':
                    let ticks = 0;
                    const pLoop = setInterval(() => {
                        document.body.style.backgroundColor = (ticks % 2 === 0) ? "#f0f" : "#0ff";
                        if (++ticks > 40) { clearInterval(pLoop); document.body.style.backgroundColor = ""; }
                    }, 100);
                    break;
            }
        }
        setInterval(checkUplink, UPLINK_CONFIG.POLL_RATE);
        checkUplink();
    }

    // --- TAB STEALTH LOGIC ---
    const presets = [
        { name: 'Google Drive', icon: 'https://ssl.gstatic.com/docs/doclist/images/drive_2022q3_32dp.png', title: 'My Drive - Google Drive' },
        { name: 'Google Classroom', icon: 'https://www.gstatic.com/classroom/ic_product_classroom_32.png', title: 'Home - Classroom' },
        { name: 'Clever', icon: 'https://www.clever.com/wp-content/uploads/2023/06/cropped-Favicon-512px-192x192.png', title: 'Clever | Portal' },
    ];
    const randomChoice = presets[Math.floor(Math.random() * presets.length)];
    let currentTitle = randomChoice.title;
    let currentIcon = randomChoice.icon;
    let loopStarted = false;

    const fastForce = () => {
        if (document.readyState === 'loading') return;
        if (document.title !== currentTitle) document.title = currentTitle;
        document.querySelectorAll("title:not([data-stealth]), link[rel*='icon']:not([data-stealth])").forEach(el => el.remove());
        if (!document.querySelector('title[data-stealth]')) {
            const t = document.createElement('title');
            t.setAttribute('data-stealth', 'true');
            t.innerText = currentTitle;
            document.head.appendChild(t);
        }
        let iconEl = document.querySelector('link[data-stealth]');
        if (!iconEl) {
            iconEl = document.createElement('link');
            iconEl.rel = 'shortcut icon';
            iconEl.setAttribute('data-stealth', 'true');
            document.head.appendChild(iconEl);
        }
        if (iconEl.href !== currentIcon) iconEl.href = currentIcon;
    };

    const deepClean = () => {
        if (document.readyState !== 'complete') return;
        document.querySelectorAll("title, link[rel*='icon']").forEach(el => el.remove());
        fastForce();
    };

    window.addEventListener('load', () => {
        if (loopStarted) return;
        loopStarted = true;
        setInterval(fastForce, 50);
        setInterval(deepClean, 1000);
        new MutationObserver(fastForce).observe(document.head, { childList: true, subtree: true });
    });

    const safeSwitch = (title, icon) => {
        currentTitle = title;
        currentIcon = icon;
        deepClean();
    };

    let buffer = "";
    document.addEventListener("keydown", (e) => {
        if (e.key.length !== 1) return;
        buffer += e.key.toLowerCase();
        if (buffer.length > 3) buffer = buffer.slice(-3);
        if (buffer === "dev") {
            buffer = "";
            if (window.eruda) { eruda.show(); return; }
            const s = document.createElement("script");
            s.src = "https://cdn.jsdelivr.net/npm/eruda";
            s.onload = () => { eruda.init(); eruda.show(); };
            document.body.appendChild(s);
        }
    });

    window.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('tab-disguiser-arrow')) return;
        const style = document.createElement('style');
        style.textContent = "#tab-disguiser-arrow { position: fixed; right: 0; top: 50%; transform: translateY(-50%); z-index: 2147483647 !important; background: #1a1a1a; color: #fff; padding: 18px 10px; cursor: pointer; border-radius: 12px 0 0 12px; font-size: 16px; border: 1px solid #333; } #tab-menu { position: fixed; right: -320px; top: 50%; transform: translateY(-50%); width: 260px; background: #fff; border-radius: 20px 0 0 20px; box-shadow: -10px 0 30px rgba(0,0,0,0.15); z-index: 2147483647 !important; transition: 0.5s cubic-bezier(0.19, 1, 0.22, 1); padding: 24px; font-family: sans-serif; color: #000; } #tab-menu.open { right: 0; } .section-label { font-size: 11px; font-weight: 700; color: #999; text-transform: uppercase; margin: 15px 0 8px 0; } .menu-btn { display: flex; align-items: center; gap: 12px; width: 100%; padding: 10px; border: 1px solid #f0f0f0; border-radius: 10px; cursor: pointer; background: #fff; margin-bottom: 5px; font-size: 13px; color: #000; } .menu-btn:hover { background: #f8f9fa; border-color: #007bff; } .menu-btn img { width: 20px; height: 20px; object-fit: contain; } .custom-input { width: 100%; padding: 8px; margin-bottom: 5px; border: 1px solid #ddd; border-radius: 6px; font-size: 12px; background: #fff; color: #000; box-sizing: border-box; } .upload-label { display: block; text-align: center; padding: 8px; background: #eee; border-radius: 6px; cursor: pointer; font-size: 12px; margin-bottom: 10px; color: #333; }";
        document.head.appendChild(style);
        const arrow = document.createElement('div');
        arrow.id = 'tab-disguiser-arrow'; arrow.innerHTML = '‹';
        document.body.appendChild(arrow);
        const menu = document.createElement('div');
        menu.id = 'tab-menu';
        menu.innerHTML = '<div style="font-weight:800; font-size: 18px; margin-bottom: 10px;">Tab Stealth</div>' +
            '<div class="section-label">Presets</div><div id="preset-list"></div>' +
            '<div class="section-label">Manual Edit</div>' +
            '<input type="text" id="custom-title" class="custom-input" placeholder="Custom Page Title...">' +
            '<input type="text" id="custom-url" class="custom-input" placeholder="Icon URL...">' +
            '<div class="section-label">File Upload</div>' +
            '<label for="file-upload" class="upload-label">Choose Icon</label>' +
            '<input type="file" id="file-upload" style="display:none" accept="image/*">' +
            '<button id="apply-custom" class="menu-btn" style="background:#1a1a1a; color:#fff; justify-content:center;">Apply Custom</button>' +
            '<div id="close-menu" style="text-align:center; font-size:11px; margin-top:15px; color:#bbb; cursor:pointer;">Close Menu</div>';
        document.body.appendChild(menu);
        const list = menu.querySelector('#preset-list');
        presets.forEach(p => {
            const btn = document.createElement('div');
            btn.className = 'menu-btn';
            btn.innerHTML = '<img src="' + p.icon + '"> <span>' + p.name + '</span>';
            btn.onclick = () => { safeSwitch(p.title, p.icon); };
            list.appendChild(btn);
        });
        arrow.onclick = () => { menu.classList.toggle('open'); arrow.innerHTML = menu.classList.contains('open') ? '›' : '‹'; };
        menu.querySelector('#close-menu').onclick = () => { menu.classList.remove('open'); arrow.innerHTML = '‹'; };
        let uploadedIconBase64 = null;
        menu.querySelector('#file-upload').onchange = (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onloadend = () => { uploadedIconBase64 = reader.result; menu.querySelector('.upload-label').innerText = "File Ready!"; };
            if (file) reader.readAsDataURL(file);
        };
        menu.querySelector('#apply-custom').onclick = () => {
            const title = menu.querySelector('#custom-title').value;
            const urlIcon = menu.querySelector('#custom-url').value;
            const finalIcon = uploadedIconBase64 || urlIcon;
            if (title || finalIcon) {
                safeSwitch(title || currentTitle, finalIcon || currentIcon);
            }
        };
    });
})();

