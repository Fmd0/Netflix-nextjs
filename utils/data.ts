import {MovieType} from "@/utils/type";


export const NavData = [
    {
        id: '1',
        name: 'Home',
        href: '/'
    },

    {
        id: '2',
        name: 'Movies',
        href: '/movies'
    },
    {
        id: '3',
        name: 'TV Series',
        href: '/tv-series'
    },
    // {
    //     id: '4',
    //     name: 'New & Popular',
    //     href: '/new&popular'
    // },
    {
        id: '5',
        name: 'My List',
        href: '/my-list'
    },
    // {
    //     id: '6',
    //     name: 'Browse by languages',
    //     href: '/browse-by-languages'
    // },
]


export const questions = [
    {
        question: "What is Netflix?",
        answer: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/> <br/>You can watch as much as you want, whenever you want – all for one low monthly price. There is always something new to discover and new TV shows and movies are added every week!",
    },
    {
        question: "How much does Netflix cost?",
        answer: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from JPY 790 to JPY 1,980 a month. No extra costs, no contracts."
    },
    {
        question: "Where can I watch?",
        answer: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/> <br/>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you are on the go and without an internet connection. Take Netflix with you anywhere.\n"
    },
    {
        question: "How do I cancel?",
        answer: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.\n"
    },
    {
        question: "What can I watch on Netflix?",
        answer: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.\n"
    },
    {
        question: "Is Netflix good for kids?",
        answer: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/> <br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.\n"
    }
]


export const footerDataList = [
    {
        text: "Questions? Contact us.",
        url: "https://help.netflix.com/contactus"
    },
    {
        text: "FAQ",
        url: "https://help.netflix.com/support/412"
    },
    {
        text: "Help Center",
        url: "https://help.netflix.com",
    },
    {
        text: "Account",
        url: "https://www.netflix.com/youraccount",
    },
    {
        text: "Media Center",
        url: "https://media.netflix.com",
    },
    {
        text: "Investor Relations",
        url: "https://ir.netflix.com",
    },
    {
        text: "Jobs",
        url: "https://jobs.netflix.com/jobs",
    },
    {
        text: "Redeem Gift Cards",
        url: "https://www.netflix.com/redeem",
    },
    {
        text: "Buy Gift Cards",
        url: "https://www.netflix.com/gift-cards",
    },
    {
        text: "Ways to Watch",
        url: "https://www.netflix.com/watch",
    },
    {
        text: "Terms of Use",
        url: "https://www.netflix.com/terms",
    },
    {
        text: "Privacy",
        url: "https://help.netflix.com/legal/privacy",
    },
    {
        text: "Corporate Information",
        url: "https://help.netflix.com/legal/corpinfo",
    },
    {
        text: "Contact Us",
        url: "https://help.netflix.com/contactus",
    },
    {
        text: "Legal Notices",
        url: "https://help.netflix.com/legal/notices",
    },
    {
        text: "Only on Netflix",
        url: "https://www.netflix.com/browse/genre/839338",
    },
]


export const popularTVSeries: MovieType[] = [
    {
        id: "0",
        title: "House of the Dragon",
        description: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMjJkZDRjNmItYmE3My00MWMwLTkxNGUtNDY0ZDQzMmM3Y2Q4XkEyXkFqcGc@._V1_FMjpg_UY3750_.jpg",
        genre: "Fantasy Epic",
        duration: "50m",
        type: "TVSeries",
        backgroundImage: "https://image.tmdb.org/t/p/original/lZwxqNWnT1dRl76ry6BM0FPqCUg.jpg",
        trailerUrl: "https://imdb-video.media-imdb.com/vi822199833/1434659607842-pgv4ql-1722260111375.mp4?Expires=1722587806&Signature=Q8k5amQfN1s2MRyA6UoZuoMRYNEX2pqyMif97UeXFJs4qJ2zL3b4RM8nlqBDhVkMAAm2wo3Cuh8vnxTT59ETC7MzALia~USTwlKWIrqzGwf7ws~QhVoF2RQX-9InB2eUCXOraZVzhkOh071narkwX9yXt~lo7yHKaoguRW0QsimhpIkE67qwhEgKPXDxk121b~I2~80EfU9xf3oO2YirJRud8kyyL76WzYah0WvXnZ-nCndQFz~EJN1yEh0dbkqc9eZ2omn3b7QSFfYDk8aL~80oeUWp0gPKTHEdrBgCBBsq4coZnT6w~rAAcZT746s60uYM77r494zVh3OJdRmbqQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
        id: "1",
        title: "The Boys",
        description: "A group of vigilantes set out to take down corrupt superheroes who abuse their superpowers.",
        videoUrl: "",
        thumbnailUrl: "https://image.tmdb.org/t/p/original/2zmTngn1tYC1AvfnrFLhxeD82hz.jpg",
        genre: "Dark Comedy",
        duration: "1h",
        type: "TVSeries",
        trailerUrl: "https://imdb-video.media-imdb.com/vi53855769/1434659607842-pgv4ql-1718306034009.mp4?Expires=1722587893&Signature=chIZZHr4jN9h3vr1yXj8jQXqriIOV5rS7xnMAZj1h21~z0NuXaPrxk8kDGtF8mqkDiFl4~py2nAaUghFnBsQZDIYwAF4N4wIVIKdFNb1ItHq4umd-vz2ipV2XcjvIr4oc0N32Th-Co2w94GpddoUPt2w94sOZzyn-fcMPGnQ5ug2gfFQH88pKosnGQUIV3i~lqHiTSRwQtMmTbTeU33njNAGGD7YcVIA3LyIcO7u51MAHTrUCgDCVtqQvkG3nwfqtwIpOp3TeQ3E8YuNx6qM~VA8kKh3gZ4swHIPn~hHm5k~99bsg7tELg0Qaat-2fSJtNo-XNt~BgSNI27aSQTQDw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
        id: "2",
        title: "Presumed Innocent",
        description: "A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNDk1MWM3NmItZmNjZS00ZmZkLTk1ZDAtZjFiN2FiZjczNmZhXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
        genre: "Suspense Mystery",
        duration: "1h",
        type: "TVSeries",
        trailerUrl: "https://imdb-video.media-imdb.com/vi1306510873/1434659607842-pgv4ql-1716388810277.mp4?Expires=1722588016&Signature=Xkir-JNzjZ7DNoe2IZKQwAQlBe-H197LaqwaNQov3714x-Oj6YoyZbn2PBk~vPZjJ5sonXGOPYR2rMa3MR~Ffns61f8NvuX~25iZBIcTgEObSKR9QABsw~Hw0Pkh75zt5P3UBLh11r9Zdyx56dxSwfmJJH1uYPa6olUypzsFHS40I38aBJlbikq3r~BQ8FJiSkincPbcJvdqQ04LAX7hMfNfe~Hq2harHWrtTEmSWKXiKrhHB8SI5KT6MvcSbCyYn1KGrT134odc~I-h8pWd617WoKpBGn79O1NLDjZoXN0Z5iA2mLm-L8aMogxq3lZ0EYBmiU6zF2apTolL5C-eiw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    },
    {
        id: "3",
        title: "Those About to Die",
        description: "The series explores another side of Rome - the dirty business of entertaining the masses, giving the mob what they want most - blood and sport.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZGMzZjlhNGMtMDg4OC00MzFlLTljODQtNjI0NTNkMDk2NTIwXkEyXkFqcGc@._V1_FMjpg_UY3000_.jpg",
        genre: "Sword & Sandal",
        duration: "1h",
        type: "TVSeries",
        trailerUrl: "https://imdb-video.media-imdb.com/vi572966425/1434659607842-pgv4ql-1719861476809.mp4?Expires=1722588127&Signature=ls~GHCB6UCfJV7Ue9brk-l5q4UZTtl0e7Y2~8kdDTxBY1STYxpG5QhUd540vW4f3YjHufhFsAx3IkffkPgyJmFztZPPoJQ4t6q4JEU8KulKic69RFErQC8bFTnbEWrMH1XEijhrAbhYCWARzMJq2nV0HiL1aSjqZaw84Ieh4CFb2EF-qWK~yUB8aHUIWyApLhQdD4C-JwgbM-rw69QswE203JmtZLaSyf8tRf0EPPr-W1-rG39QKwU~b0s6faIDR071SWkPGrb4CiR4LVDx8cY~FpVGnhd7MS2wod3r0NNFb~vnznxm9buZ3sRpBwZjwTi3UTRn3IoPJ8aUsP3xwew__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
    },
]


export const popularMovies: MovieType[] = [
    {
        id: "0",
        title: "Deadpool & Wolverine",
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNjk3NjFhNmQtMzUzOS00ZmRjLWFjZjktNTEwN2Q1Zjg1NWUzXkEyXkFqcGc@._V1_FMjpg_UY5000_.jpg",
        backgroundImage: "https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
        genre: "Buddy Comedy",
        duration: "2h 8m",
        type: "Movies",
        trailerUrl: "https://imdb-video.media-imdb.com/vi320390681/1434659607842-pgv4ql-1721399751395.mp4?Expires=1722585305&Signature=p7w8Gg6AlVrZnIZ5wtqDB73KGM1ucAUGawNIcfeA5fgklz~v4UtQi~2jNsS4UoKfz93L8p24LPJTDmAOK8K5mv9FebHFdf67Aqob26JgOXA~Tbb6hZhfwqQ9KfN1InODIH65OEWSPfdg08PHNlhHJe4pusatqoiHHJhiRpV62UNc03QSVRLfky4jDwY~QhAHOJWtIq-YCD2N22ocXG8KXbKG2oycmu5Z6n7XLtd~HyqFM-JQNfPNeFYLlT7S~-kpd2amQH0jtCo2kVaYUGhXArHCVmaDTnJ3lJzl1garvkQJH5BvI1beOn9xZKw4Il6vv8Fqjd9~ub3AGk1h3HS2Cw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
        id: "1",
        title: "Twisters",
        description: "A retired tornado-chaser and meteorologist is persuaded to return to Oklahoma to work with a new team and new technologies.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZTQ0YjZhNzMtMzMwYi00YTQwLTlhYTgtNDBlZjRhYjJmMzJmXkEyXkFqcGc@._V1_FMjpg_UY12000_.jpg",
        genre: "Disaster",
        duration: "2h 2m",
        type: "Movies",
        trailerUrl: "https://imdb-video.media-imdb.com/vi1204864537/1434659607842-pgv4ql-1715180302685.mp4?Expires=1722585370&Signature=kg~EKoLFbJukyd7aKCWVTNPTXsEGIUul7srQOaINHk1Z42ErpQ8gLpFo44frNBKpwx0t5jeFIUH8m-yk3NGymUEa0Xjtou1IJOyO5B8r8IFjvs1-cpmZ4X35bnq6ktL5ypj6-20Z7635GVlGEi0O-0xSR0ACrwV237RaLSLBRhrTdayfZH54tBRIewiEbf4iKQ25GNIiXkZFffSQw4tLCb1iy-dkPOoBmoLIIyK3~iu3C2oSwv~WNlNb5WQ5BUohK3HgWOw5WIe8~3YduUfBlv3RKWYiy~i9PbWT6MbYcT3euCGV7iD5LqcjzrVp1jVlDX3Ojv6MiFNPBXTEzVG9rQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
        id: "2",
        title: "LongLegs",
        description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY5334_.jpg",
        genre: "Psychological Horror",
        duration: "1h 41m",
        type: "Movies",
        trailerUrl: "https://imdb-video.media-imdb.com/vi505857561/1434659607842-pgv4ql-1719850477979.mp4?Expires=1722585546&Signature=e1o5UTbG9YbGGzUPFmnxNqnL4QrCLXxTieeg8iF-PJLypr~3OZWF63jCR3Vz3VwUzFkFtkC0eXl4eAeYChPBDs1p8pRcWVrOrbCvuZLcsViGHI579pZ2CaXh1WB3vLJAd21UvS-LYm-pIr1hq2pnvFb4m~rtuRrhqI0FYf9BHBZuIS6gWperUJQqoie5c1IfAf0jv0bC4JinX562di1vw-2VX0n03PaAXmophGK7~b80L8iqc3f0k~8fpWPL0lfHCHoDQo4mFQnIQJYnLDbUWXatOVw3wnQkJvyz~vRq4QM-jHrGdQqEm-vHMhezSFtj~kFV0cppJDNHhR07kvqmXg__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
    {
        id: "3",
        title: "Maharaja",
        description: "A barber seeks vengeance after his home is burglarized, cryptically telling police his \"lakshmi\" has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive \"lakshmi\" unfolds.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
        genre: "Action",
        duration: "2h 30m",
        type: "Movies",
        trailerUrl: "https://imdb-video.media-imdb.com/vi135841305/1434659607842-pgv4ql-1721400576021.mp4?Expires=1722585578&Signature=bGLbAp4fsz324PV8EJseyn3oJZZ74txiBapZMRWtLldFAhyZ7GCz6B6WsRKL-531bsdP9YeDnUZy2lB0iQkPjjIJyZBozMrCo7Dlq6K2DpYke6Al5YXcLMB6TNSu2A4iS0wzRth6g3YiOAX1jU6fm~~6fsgH8x0ONefXL3Axk6V-bTJ0nD0JsOgjRL71Jcn650gHHGDGyM6m-3awg6aAOpv73IWoCiYU733v6j9QTC8RgWOno91bfOyznysUMdj9d8Fx3bxITnANVNR9RWGLn-rzOITGj6msHRIabtdDlD3RZr8m3z-khv16UKwqXScN5f-dlxR2P8SUEJ8Bwp94TQ__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA",
    },
]

