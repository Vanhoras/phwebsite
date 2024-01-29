import { defineStore, type Store } from 'pinia'
import type { PiniaStoreGetters } from '@/types/pinia';
import type { SocialLinkI } from '@/types/socialLink';
import type { PersonalInfo } from '@/types/personalInfoI';

import { sendEmailRequest } from '@/api/apiAdapter';

import linkedinIcon from "@/assets/icons/linkedin.svg";
import xingIcon from "@/assets/icons/xing.svg";
import itchIoIcon from "@/assets/icons/itch.io.svg";
import githubIcon from "@/assets/icons/github2.svg";

export interface AppState {
  mobileNavbarOpen: boolean,
  scrollDown: boolean,
  sectionReached: number,
  socialLinks: SocialLinkI[],
  personalInfo: PersonalInfo
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
        sectionReached: 0,
        socialLinks: [
          {
            name: "linkedin",
            link: "https://www.linkedin.com/in/paul-joel-hielscher/",
            icon: linkedinIcon
          },
          {
            name: "xing",
            link: "https://www.xing.com/profile/Paul_Hielscher2",
            icon: xingIcon
          },
          {
            name: "itch.io",
            link: "https://vanhoras.itch.io/",
            icon: itchIoIcon
          },
          {
            name: "github",
            link: "https://github.com/vanhoras",
            icon: githubIcon
          },
        ],
        personalInfo: {
          email: import.meta.env.VITE_EMAIL || "",
          name: "Paul Hielscher",
          addressLine1: import.meta.env.VITE_ADDRESS_LINE_1 || "",
          addressLine2: import.meta.env.VITE_ADDRESS_LINE_2 || "",
          addressLine3: import.meta.env.VITE_ADDRESS_LINE_3 || "",
          addressLine4: import.meta.env.VITE_ADDRESS_LINE_4 || "",
        }
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
