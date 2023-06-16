import { defineStore } from 'pinia'

export const useCountStore = defineStore('CountStore', {
  state: () => ({
    count: 3,
  }),
})