import { readable } from 'svelte/store'
import loadData from './loadData'

export const rawData = readable([], async function start(set) {
  const data = await loadData()
  set(data)
})