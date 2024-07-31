import {MovieType} from "@/utils/type";


export const NavData = [
    {
        id: '1',
        name: 'Home',
        href: '/'
    },
    {
        id: '2',
        name: 'TV Series',
        href: '/tv-series'
    },
    {
        id: '3',
        name: 'Movies',
        href: '/movies'
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


export const popularTVSeries= [
    {
        title: "House of the Dragon",
        description: "An internal succession war within House Targaryen at the height of its power, 172 years before the birth of Daenerys Targaryen.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNjk3NjFhNmQtMzUzOS00ZmRjLWFjZjktNTEwN2Q1Zjg1NWUzXkEyXkFqcGc@._V1_FMjpg_UY5000_.jpg",
        genre: "Action",
        duration: "2h 8m",
    },
    {
        title: "Presumed Innocent",
        description: "A horrific murder upends the Chicago Prosecuting Attorney's' office when one of its own is suspected of the crime.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY5334_.jpg",
        genre: "Suspense Mystery",
        duration: "1h 41m",
    },

]


export const trendingTVSeries = [

]

export const moviesMainContent: MovieType = {
    id: "0",
    title: "Deadpool & Wolverine",
    description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
    videoUrl: "",
    thumbnailUrl: "https://image.tmdb.org/t/p/original/9l1eZiJHmhr5jIlthMdJN5WYoff.jpg",
    genre: "Buddy Comedy",
    duration: "2h 8m",
};

export const popularMovies: MovieType[] = [
    {
        id: "0",
        title: "Deadpool & Wolverine",
        description: "Deadpool is offered a place in the Marvel Cinematic Universe by the Time Variance Authority, but instead recruits a variant of Wolverine to save his universe from extinction.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BNjk3NjFhNmQtMzUzOS00ZmRjLWFjZjktNTEwN2Q1Zjg1NWUzXkEyXkFqcGc@._V1_FMjpg_UY5000_.jpg",
        genre: "Buddy Comedy",
        duration: "2h 8m",
    },
    {
        id: "1",
        title: "Twisters",
        description: "A retired tornado-chaser and meteorologist is persuaded to return to Oklahoma to work with a new team and new technologies.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BZTQ0YjZhNzMtMzMwYi00YTQwLTlhYTgtNDBlZjRhYjJmMzJmXkEyXkFqcGc@._V1_FMjpg_UY12000_.jpg",
        genre: "Disaster",
        duration: "2h 2m",
    },
    {
        id: "2",
        title: "LongLegs",
        description: "In pursuit of a serial killer, an FBI agent uncovers a series of occult clues that she must solve to end his terrifying killing spree.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BMmVkZWY2ODEtYTMyYy00MDg2LWFkMGUtMjYwOTBhOGViODQzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UY5334_.jpg",
        genre: "Psychological Horror",
        duration: "1h 41m",
    },
    {
        id: "3",
        title: "Maharaja",
        description: "A barber seeks vengeance after his home is burglarized, cryptically telling police his \"lakshmi\" has been taken, leaving them uncertain if it's a person or object. His quest to recover the elusive \"lakshmi\" unfolds.",
        videoUrl: "",
        thumbnailUrl: "https://m.media-amazon.com/images/M/MV5BOTFlMTIxOGItZTk0Zi00MTk2LWJiM2UtMzlhZWYzNjQ4N2Y3XkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
        genre: "Action",
        duration: "2h 30m",
    },

]


export const trendingMovies = [

]