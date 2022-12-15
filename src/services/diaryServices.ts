import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveinfoDiaryEntry, NewDiaryEntry} from './types'
const diaries: Array<DiaryEntry> = diaryData as Array <DiaryEntry>

export const getEntries = () => diaries

export const findById= (id:Number): NonSensitiveinfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id ==  id)
    if(entry != null){
        const {comment, ...restOfDiary}= entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveinfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return{
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
  id: diaries.length + 1,
  ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary

}

