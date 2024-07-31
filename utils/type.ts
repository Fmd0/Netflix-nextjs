
export interface MovieType {
    id: string,
    title: string,
    description: string,
    videoUrl: string,
    thumbnailUrl: string,
    genre: string,
    duration: string,
}


export interface UserType {
    id: String,
    name?: String,
    email?: String,
    password?: String,
    emailVerified?: Date,
    image?: String,
    movies: MovieType[],
    movieIds: String[],
}