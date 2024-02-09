import { defineStore, type Store } from 'pinia';
import type { PiniaStoreGetters } from '@/types/pinia';

import elLeasingImage from "@/assets/images/websites/El_leasing/eleasa_small.png";
import postbankImage from "@/assets/images/websites/Postbank/postbank_small.jpg";
import type { Software } from '@/types/software';

export interface SoftwareState {
  softwareList: Software[]
}

interface SoftwareStoreGetters extends PiniaStoreGetters<SoftwareState>{
}

interface SoftwareStoreActions {}

export type SoftwareStore = Store<string, SoftwareState, SoftwareStoreGetters, SoftwareStoreActions>;

export const useSoftwareStore = defineStore<'SoftwareStore', SoftwareState, SoftwareStoreGetters, SoftwareStoreActions> ('SoftwareStore', {
  state: (): SoftwareState => ({
    softwareList: [
      
      {
        id: "el_leasing",
        title: "el-Leasing",
        description: "el-Leasing leases work bikes for companies and employees.",
        points: ["Leading a team to create an automated contract conclusion process, in order to simplify the customer acquisition process.",
                 "Working in a team to develop a new Leasing Software."],
        role: "Lead Developer, Software Developer",
        time: "2021",
        techStack: ["Java", "Spring", "FreeMarker", "JavaScript", "CSS", "SQL"],
        image: elLeasingImage,
        color: "#ffd300",
      },
      {
        id: "postbank",
        title: "Postbank",
        description: "The Postbank is a branch of Deutsche Bank, Germany's largest bank.",
        points: ["Maintenance of their leasing document management system.", 
                "Consulting on the migration to a new document management system."],
        role: "Software Developer, Consultant",
        time: "2020 - 2021",
        techStack: ["Java", "Gupta", "SQL", "Oracle DB", "Varial"],
        image: postbankImage,
        color: "#ffcd00",
      }
  ]}),

  getters: {
  },

  actions: {}
});
