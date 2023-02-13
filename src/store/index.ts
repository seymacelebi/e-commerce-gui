import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => {
    return {
      stateData: {} as any,
    };
  },
  getters: {
    getData(state) {
      return state.stateData;
    },
  },
  actions: {
    getAndSetLookup(key: string, id: number) {
      if (this.stateData[key]) {
        const findIndex = this.stateData[key].findIndex(
          (item: any) => item.id == id
        );
        if (findIndex > -1) {
          return this.stateData[key][findIndex];
        }
      }
    },
  },
});
