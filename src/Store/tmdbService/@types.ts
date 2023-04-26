export interface IConfiguration {
    images: {
        base_url: string,
        secure_base_url: string,
        backdrop_sizes: string[],
        logo_sizes: string[],
        poster_sizes: string[],
        profile_sizes: string[],
        still_sizes: string[],
    },
    change_keys: string[]
}

export interface IKnowFor {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    original_title: string,
    genre_ids: number[],
    id: number,
    media_type: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
    //-----------
    first_air_date: string,
    origin_country: string[]
    name: string,
    original_name: string,
}

export interface IResultsPopularPerson {
    profile_path: string,
    adult: boolean,
    id: number,
    known_for: IKnowFor[]
    name: string,
    popularity: number,
}

export interface IPopularPerson {

    page: number,
    results: IResultsPopularPerson[],
    total_results: number,
    total_pages: number,
}

export type IResultsMovies = {
    poster_path: string | null,
    adult: boolean,
    overview: string,
    release_date: string,
    genre_ids: number[],
    id: number,
    original_title: string,
    original_language: string,
    title: string,
    backdrop_path: string | null,
    popularity: number,
    vote_count: number,
    video: boolean,
    vote_average: number,
}

export interface INewMovies {
    page: number,
    results: IResultsMovies[],
    dates: {
        maximum: string,
        minimum: string,
    }
    total_pages: number,
    total_results: number,
}

export type Genres = {
    id: number,
    name: string,
}

export interface IGenres {
    genres: Genres[],
}

export interface IMovies {

    page: number,
    results: IResultsMovies[],
    total_results: number,
    total_pages: number,
}

export type IResultVideos = {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string,
}

export interface IVideos {
    id: number,
    results: IResultVideos[],
}

export type QueryArgs = {
    type: string,
    searchValue: string,
    pageNumber: number,
    genre: number | null,
}

export type ISpokenLanguages = {
    iso_639_1: string,
    name: string,
}

export type IProductionCountries = {
    iso_3166_1: string,
    name: string,
}

export type IProductionCompanies = {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string,
}

export interface IDetailsMovie {
    adult: boolean,
    backdrop_path: string | null,
    belongs_to_collection: null | Object,
    budget: number,
    genres: IGenres[],
    name: string,
    homepage: string | null,
    id: number,
    imdb_id: string | null,
    original_language: string,
    original_title: string,
    overview: string | null,
    popularity: number,
    poster_path: string | null,
    production_companies: IProductionCompanies[],
    production_countries: IProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number | null,
    spoken_languages: ISpokenLanguages[],
    status: string,
    tagline: string | null,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}