import { defineStore, type Store } from 'pinia'
import type { PiniaStoreGetters } from '@/types/pinia';

import { sendEmailRequest } from '@/api/apiAdapter';

export interface AppState {
  mobileNavbarOpen: boolean,
  scrollDown: boolean,
  sectionReached: number
}

interface AppStoreGetters extends PiniaStoreGetters<AppState>{
}

interface AppStoreActions {
  toggleMobileNavbar (): void;
  openMobileNavbar (): void;
  closeMobileNavbar (): void;
  sendEmail (name: string, email: string, message: string): Promise<boolean>;
}

export type AppStore = Store<string, AppState, AppStoreGetters, AppStoreActions>;

export const useAppStore = defineStore<'AppStore', AppState, AppStoreGetters, AppStoreActions> ('AppStore', {
  state: (): AppState => ({
        mobileNavbarOpen: false,
        scrollDown: true,
        sectionReached: 0
    }),

  getters: {
  },

  actions: {
    toggleMobileNavbar () {
      this.mobileNavbarOpen = !this.mobileNavbarOpen;
    },
    openMobileNavbar () {
      this.mobileNavbarOpen = true;
    },
    closeMobileNavbar () {
      this.mobileNavbarOpen = false;
    },
    async sendEmail (name: string, email: string, message: string): Promise<boolean> {
      return sendEmailRequest(name, email, message);
    }
  }
});
