

export type countryInfo = {
    borders: Array<string>,
    capital: Array<string>,
    currencies: {
        [index: string]: {
            name: string,
            symbol: string
        }
    },
    flags: {
        png: string,
        svg: string
    },
    languages: {
        [index: string]: string
    },
    name: countryNames['name'],
    population: number,
    region: string,
    subregion: string,
    tld: Array<string>,
    cca3: string
}

export type countryNames = {
    name: {
        common: string,
        official: string,
        nativeName: {
            [index: string]: {
                common: string,
                official: string
            }
        }
    }
}