export type weather = 'sunny'; 'rainy' ; 'cloudy' ; 'windy'; 'stormy'
export type visibility = 'great' ; 'good' ; 'ok' ; 'poor'



export interface DiaryEntry {
    id: number,
    date: string,
    weather: Weather,
    visibility: Visibility,
    comment: string,
}

interface SpecialDiaryEntry extends DiaryEntry{
    flightNumber: number
}


type SpecialDiaryEntry2 = DiaryEntry & {

}

//export type NonSensitiveinfoDiaryEntry = Pick <DiaryEntry, 'id', 'date','weather','visibility'>


export type NonSensitiveinfoDiaryEntry = Omit<DiaryEntry,'comment'>