import diaryData from './diaries.json'
import { DiaryEntry, NonSensitiveinfoDiaryEntry } from './types'
const diaries: Array<DiaryEntry> = diaryData as Array <DiaryEntry>

export const getEntries = () => diaries

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveinfoDiaryEntry[] => diaries

export const aaddEntry = (): undefined => undefined


