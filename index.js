// import express 
const express = require('express');
const app = express();

app.use((req, res, next) => {
    // Allow access from multiple origins
    const allowedOrigins = [
        "http://localhost:5173",
    ];
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader("Access-Control-Allow-Origin", origin);
    }
    // Allow specific requests
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");

    // Pass to next layer of middleware
    next();
});

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/articles', (req, res) => {
    // get 10 random articles
    const randomArticles = articles.sort(() => Math.random() - Math.random()).slice(0, 10);
    res.json(randomArticles);

    
})


// in the real world this would be a call to a database! 
const articles = [
    {
        imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_7033,h_3956,x_0,y_132/c_fill,w_1080,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hqxbvkpj6py3em8f47.jpg",
        title: "Chelsea keen to replace Marc Cucurella with £15m Englishman - report",
        gmtTime: "2024-03-01T18:18:00.000Z",
        source: "FotMob",
        lead: "Chelsea are ready to sell left-back Marc Cucurella as they prepare for a summer overhaul of the position, a report has claimed.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.fotmob.com/embed/news/01hqxb18wwzf/chelsea-keen-replace-marc-cucurella-15m-englishman"
    },
    {
        imageUrl: "https://theanalyst.com/wp-content/uploads/2024/03/longest-scoring-streaks-premier-league.jpg",
        title: "The Longest Premier League Scoring Streaks by Teams",
        gmtTime: "2024-03-01T18:24:00.000Z",
        source: "The Analyst",
        lead: "With Tottenham having scored in every one of their league games since March 2023, we chart the teams to have found the net at least once in the most consecutive Premier League games.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://theanalyst.com/na/2024/03/longest-premier-league-scoring-streaks-teams/"
    },
    {
        imageUrl: "https://images.performgroup.com/di/library/omnisport/32/42/bf6d140ca28448e28254473502bb9720.jpg?t=220078590&w=1200&h=630",
        title: "Thomas Tuchel plays down suggestions Lazio loss could hasten his Bayern exit",
        gmtTime: "2024-02-19T20:04:27.000Z",
        source: "FotMob",
        lead: "Simone Inzaghi and Diego Simeone, now boss of Atletico Madrid, helped Lazio win Serie A as players in 2000.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.fotmob.com/news/j90vt75vwsu917hnu7r6t7v44-thomas-tuchel-plays-down-suggestions-lazio-loss-could-hasten-his-bayern-exit"
    },
    {
        imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_6795,h_3822,x_2001,y_81/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FGettyImages%2Fmmsport%2F90min_en_international_web%2F01hr4g90hgxp7q5mp6jx.jpg",
        title: "Rafael Leao gives definitive response to Chelsea & PSG transfer rumours",
        gmtTime: "2024-02-19T20:04:27.000Z",
        source: "FotMob",
        lead: "AC Milan forward Rafael Leao has insisted he does not plan on leaving the club in the foreseeable future, despite reports of interest from both Chelsea and Paris Saint-Germain.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.fotmob.com/embed/news/01hr4g5xs6dm/rafael-leao-definitive-response-chelsea-psg-transfer"
    }, 
    {
        imageUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1566,h_880,x_0,y_36/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2F90min_en_international_web%2F01hqqjyccm1peyq227pt.png",
        title: "INEOS Man Utd didnt consider signing Tino Livramento",
        gmtTime: "2024-02-28T06:30:00.000Z",
        source: "FotMob",
        lead: "New Manchester United shareholders INEOS were surprised the club did not make a play to sign Tino Livramento before his move to Newcastle United last summer, 90min understands.",
        sourceIconUrl: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1566,h_880,x_0,y_36/c_fill,w_2160,ar_16:9,f_auto,q_auto,g_auto/images%2FvoltaxMediaLibrary%2Fmmsport%2F90min_en_international_web%2F01hqqjyccm1peyq227pt.png",
        pageURL: "https://www.fotmob.com/embed/news/01hqqjtz8s30/ineos-surprised-man-utd-didnt-consider-signing-tino"
    },
    {
        imageUrl: "https://images.performgroup.com/di/library/omnisport/5b/98/2_72303704.jpg?t=-193833667&w=1200&h=630",
        title: "Newcastle United co-owner challenges £36m bankruptcy petition in court",
        gmtTime: "2024-02-19T12:48:00.000Z",
        source: "FotMob",
        lead: "Amanda Staveley asked the Insolvency and Companies Court to set aside a demand served by Victor Restis in May last year.",
        sourceIconUrl: "https://images.performgroup.com/di/library/omnisport/5b/98/2_72303704.jpg?t=-193833667&w=1200&h=630",
        pageURL: "https://www.fotmob.com/news/xj9v4rc16un1va0zrsbcdh5z-newcastle-united-co-owner-challenges-36m-bankruptcy-petition-court"
     },
    {
        imageUrl: "https://images.performgroup.com/di/library/omnisport/8d/8/2_75440707.jpg?t=-220835411&w=1200&h=630",
        title: "Pep Guardiola hails 'unbelievable' Erling Haaland goalscoring record",
        gmtTime: "2024-02-19T12:47:00.000Z",
        source: "FotMob",
        lead: "Amanda Staveley asked the Insolvency and Companies Court to set aside a demand served by Victor Restis in May last year.",
        sourceIconUrl: "https://images.performgroup.com/di/library/omnisport/8d/8/2_75440707.jpg?t=-220835411&w=1200&h=630",
        pageURL: "https://www.fotmob.com/news/1iutcondqtpkv1py3odlsynnnf-pep-guardiola-hails-unbelievable-erling-haaland-goalscoring-record",
    },
    {
        imageUrl: "https://latest.fotmob.com/wp-content/uploads/2024/02/Covers_This-Is-Anfield-2802-1.png",
        title: "Liverpools kids show the future really is bright after Jurgen Klopp",
        gmtTime: "2024-02-19T03:34:00.000Z",
        source: "FotMob",
        lead: "When Jürgen Klopp first arrived at Liverpool he spoke of his intention to use the club’s under-23s side similarly to the way European sides in Germany and Spain have second teams.",
        sourceIconUrl: "https://latest.fotmob.com/wp-content/uploads/2024/02/Covers_This-Is-Anfield-2802-1.png",
        pageURL: "https://www.fotmob.com/topnews/10444-liverpools-kids-show-future-really-is-bright-after-jurgen-klopp?utm_source=fotmob"
    },
    {
        imageUrl: "https://static01.nyt.com/images/2024/02/27/multimedia/27meyer-01-vptw/27meyer-01-vptw-superJumbo.jpg?quality=75&auto=webp",
        title: "GM and Ford Are Going Electric. Why Are They Making Their Own Batteries?",
        gmtTime: "2024-03-09T20:04:27.000Z",
        source: "NewYorkTimes",
        lead: "Simone Inzaghi and Diego Simeone, now boss of Atletico Madrid, helped Lazio win Serie A as players in 2000.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.nytimes.com/2024/02/27/opinion/gm-ford-electric-vehicles.html"
    },
    {
        imageUrl: "https://static01.nyt.com/images/2024/02/26/multimedia/26safina1-zbvl/26safina1-zbvl-superJumbo.jpg?quality=75&auto=webp",
        title: "The Death of a Flaco Owl",
        gmtTime: "2024-03-09T20:04:27.000Z",
        source: "FotMob",
        lead: "Simone Inzaghi and Diego Simeone, now boss of Atletico Madrid, helped Lazio win Serie A as players in 2000.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.nytimes.com/2024/02/26/opinion/flaco-owl-death-birds.html"
    },
    {
        imageUrl: "https://paidpost-assets.nyt.com/static/100000009269110/images/img_5.jpg",
        title: "The Guardians of Japan’s Keyhole Tombs",
        gmtTime: "2024-03-09T20:04:27.000Z",
        source: "FotMob",
        lead: "Simone Inzaghi and Diego Simeone, now boss of Atletico Madrid, helped Lazio win Serie A as players in 2000.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.nytimes.com/paidpost/mozu-furuichi-kofun-group/the-guardians-of-japans-keyhole-tombs.html?cpv_ap_id=50582857&utm_campaign=morein&tbs_nyt=2024-jan-nytnative_morein"
    },
    {
        imageUrl: "https://images.performgroup.com/di/library/omnisport/79/d8/6c9b4b26f64a40ea89b7f69ccd088d40.jpg?t=-955230179&w=640",
        title: "Github Copilot: The AI tool that writes your code for you",
        gmtTime: "2024-03-09T20:04:27.000Z",
        source: "FotMob",
        lead: "Simone Inzaghi and Diego Simeone, now boss of Atletico Madrid, helped Lazio win Serie A as players in 2000.",
        sourceIconUrl: "https://images.fotmob.com/image_resources/news/fotmob.png",
        pageURL: "https://www.fotmob.com/news/138lzxhk8mmsi1nflku3xemdte-inter-boss-simone-inzaghi-reveals-admiration-diego-simeone-ahead-clash"
    },
]

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
