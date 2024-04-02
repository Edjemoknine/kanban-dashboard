import { create } from "zustand";

import { INITIAL_EVENTS } from "../data";

export const useStore = create((set) => ({
  currentEvents: INITIAL_EVENTS,
  setCurrentEvents: (events) => set({ currentEvents: events }),
}));

export default useStore