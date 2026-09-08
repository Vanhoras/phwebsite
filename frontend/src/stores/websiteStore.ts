import { defineStore, type Store } from 'pinia'
import type { Website } from '@/types/website'
import type { PiniaStoreGetters } from '@/types/pinia';

import dbImage from "@/assets/images/websites/DB/db.png";
import obiImage from "@/assets/images/websites/OBI/obi_new_small.png";
import elLeasingImage from "@/assets/images/websites/El_leasing/eleasa_small.png";
import postbankImage from "@/assets/images/websites/Postbank/postbank_small.jpg";
import dwsSteuerberaterImage from "@/assets/images/websites/DWS_Steuerberater/azubi-portal-5_small.png";
import ideenExpoImage from "@/assets/images/websites/IdeenExpo/Ideenexpo.jpg";
import hsbcImage from "@/assets/images/websites/HSBC/transactionservices_small.png";

export interface WebsiteState {
  websites: Website[]
}

interface WebsiteStoreGetters extends PiniaStoreGetters<WebsiteState>{
}

interface WebsiteStoreActions {}

export type WebsiteStore = Store<string, WebsiteState, WebsiteStoreGetters, WebsiteStoreActions>;

export const useWebsiteStore = defineStore<'WebsiteStore', WebsiteState, WebsiteStoreGetters, WebsiteStoreActions> ('WebsiteStore', {
  state: (): WebsiteState => ({
    websites: [
      {
        id: "db",
        title: "Deutsche Bahn",
        description: "Deutsche Bahn is the german railway company and the largest railway company in Europe.",
        points: [
                  'Development and Maintenance of www.bahn.de and other websites for the Deutsche Bahn, ensuring optimal performance and user experience.',
                  'Implementation of accessibility features, ensuring compliance with BFSG guidelines and improving usability for users with disabilities.'
                ],
        role: "Frontend Developer",
        time: "2024 - 2026",
        techStack: ["Vue", "TypeScript", "Magnolia", "Freemarker", "Java", "Spring", "AWS"],
        links: [{displayName: "Bahn.de", link: "https://bahn.de/"}, 
                {displayName: "Bahn International page", link: "https://int.bahn.de/en"}, 
                {displayName: "DB Regio", link: "https://db-regio.de/"}, 
                {displayName: "Suewex", link: "https://www.suewex.de/"}, 
                {displayName: "DB Buscharter", link: "https://www.db-buscharter.de/de"}, 
                {displayName: "Westfrankenbahn", link: "https://www.westfrankenbahn.de/"}, 
                {displayName: "Erzgebirgsbahn", link: "https://www.erzgebirgsbahn.de/"},
                {displayName: "Regional Bahn", link: "https://regional.bahn.de/"},
                {displayName: "DB Regio Südwesten", link: "https://www.dbregio-suedwesten.de/"},
                {displayName: "DB Fernverkehr", link: "https://www.db-fernverkehr.com/"},
                {displayName: "DB Regionetz", link: "https://www.db-regionetz.de/"},
                {displayName: "DB RegioBus Baden-Württemberg", link: "https://www.dbregiobus-bawue.de/"},
                {displayName: "DB RegioBus Mitte", link: "https://www.dbregiobus-mitte.de/"},
                {displayName: "DB RegioBus Nord", link: "https://www.dbregiobus-nord.de/"},
                {displayName: "DB RegioBus NRW", link: "https://www.dbregiobus-nrw.de/"},
                {displayName: "DB RegioBus Ost", link: "https://www.dbregiobus-ost.de/"},
                {displayName: "Fahrtziel Natur", link: "https://www.fahrtziel-natur.de/"},
                {displayName: "Kurhessenbahn", link: "https://www.kurhessenbahn.de/"},
                {displayName: "Lahn-Eifel-Bahn", link: "https://www.lahn-eifel-bahn.de/"},
                {displayName: "S-Bahn Hamburg", link: "https://www.s-bahn-hamburg.de/"},
                {displayName: "S-Bahn München", link: "https://www.s-bahn-muenchen.de/de"}, 
                {displayName: "S-Bahn Nürnberg", link: "https://www.s-bahn-nuernberg.de/"},
                {displayName: "S-Bahn Rheinneckar", link: "https://www.s-bahn-rheinneckar.de/"},
                {displayName: "Südostbayernbahn", link: "https://www.suedostbayernbahn.de/"}
              ],
        image: dbImage,
        color: "#ec0016",
      },
      {
        id: "obi",
        title: "OBI",
        description: "OBI is Europe's third largest DIY retail chain.",
        points: [
                  'Development of a new microservice based online shop with marketplace functionality in the team "Cart & Checkout".',
                  'Maintenance and implementation of new features for the existing online shop.'
                ],
        role: "Fullstack Developer",
        time: "2021 - 2023",
        techStack: ["Java", "Spring", "NodeJS", "TypeScript", "Vue", "AWS", "SQL"],
        links: [{displayName: "OBI Germany", link: "https://www.obi.de/"}, 
                {displayName: "OBI Switzerland", link: "https://www.obi.ch/"}, 
                {displayName: "OBI Austria", link: "https://www.obi.at/"}, 
                {displayName: "OBI Italia", link: "https://www.obi-italia.it/"}, 
                {displayName: "OBI Slovakia", link: "https://www.obi.sk/"}, 
                {displayName: "OBI Poland", link: "https://www.obi.pl/"}, 
                {displayName: "OBI Ungarn", link: "https://www.obi.hu/"}, 
                {displayName: "OBI Czechia", link: "https://www.obi.cz/"}],
        image: obiImage,
        color: "#ff7e21",
      },
      {
        id: "el_leasing",
        title: "el-Leasing",
        description: "el-Leasing leases work bikes for companies and employees.",
        points: [
                  "Technical Lead of a team in the development of an automated contract closing process, in order to simplify the customer acquisition process.",
                  "Collaboration in a team to develop a new leasing software."
                ],
        role: "Lead Developer",
        time: "2021",
        techStack: ["Java", "Spring", "JavaScript", "FreeMarker", "SQL"],
        image: elLeasingImage,
        color: "#ffd300",
      },
      {
        id: "postbank",
        title: "Postbank",
        description: "The Postbank is a branch of Deutsche Bank, Germany's largest bank.",
        points: [
                  "Maintenance of their leasing document management system.", 
                  "Consultion on the migration to a new document management system.",
                  "Generation of serial letters for all leasing customers in response to a VAT change."
                ],
        role: "Software Developer, Consultant",
        time: "2020 - 2021",
        techStack: ["Java", "Gupta", "SQL", "Oracle DB", "Varial"],
        image: postbankImage,
        color: "#ffcd00",
      },
      {
        id: "dws_steuerberater",
        title: "DWS Steuerberater",
        description: "DWS Steuerberater is a tax consulting knowledge portal.",
        points: [
                  "Creation of a web portal for their trainee online seminar using drupal 8.", 
                  "Development of a web portal for the scientific institute of the DWS using drupal 8."
                ],
        role: "Fullstack Developer",
        time: "2020",
        techStack: ["Drupal 8", "PHP", "JavaScript", "Twig"],
        links: [{displayName: "DWS Institut", link: "https://dws-institut.de"}],
        image: dwsSteuerberaterImage,
        color: "#a72338",
      },
      {
        id: "ideen_expo",
        title: "IdeenExpo",
        description: "The IdeenExpo is Europe's largest youth event for technology and natural sciences.",
        points: [
                  "Development of a web app enabling schools to book their educational trips.",
                  "Creation of a web app for companies to register and configure their exhibitions.", 
                  "Development of a web app for VIPs to register themselves."
                ],
        role: "Fullstack Developer",
        time: "2019 - 2020",
        techStack: ["Java", "React", "JavaScript", "Docker"],
        image: ideenExpoImage,
        color: "#ed4119",
      },
      {
        id: "hsbc",
        title: "HSBC",
        description: "HSBC is the world's 7th largest bank.",
        points: [
                  "Migration and relaunch of various websites onto a unified CMS platform for their german branch.",
                  "Ongoing Support from 01.2020 till 05.2021."
                ],
        role: "Fullstack Developer",
        time: "2019",
        techStack: ["Magnolia", "Java", "JavaScript", "FreeMarker", "SQL", "Oracle DB"],
        links: [{displayName: "HSBC-Zertifikate", link: "https://www.hsbc-zertifikate.de/"}, 
                {displayName: "HSBC-Transactionservices", link: "https://www.hsbc-transactionservices.de/"}, 
                {displayName: "Inka-Kag", link: "https://www.inka-kag.de/"}, 
                {displayName: "HSBC-alternatives", link: "https://www.hsbc-alternatives.de/"}, 
                {displayName: "HSBC-Karriere", link: "https://karriere.hsbc.de/"}],
        image: hsbcImage,
        color: "#db0011",
      },
  ]}),

  getters: {
  },

  actions: {}
});
