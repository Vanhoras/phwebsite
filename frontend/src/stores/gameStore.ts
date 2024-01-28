import { defineStore, type Store } from 'pinia'
import type { Game } from '@/types/game'
import type { PiniaStoreGetters } from '@/types/pinia';

import rhythmInvokerImage from "@/assets/images/games/RhythmInvoker/rhythm_invoker_title_3.png";
import sandsOfMagicImage from "@/assets/images/games/SandsOfMagic/Sands_of_Magic_small.png";
import dungeonSwapperImage from "@/assets/images/games/DungeonSwapper/DungeonSwapper.png";
import babyTurtleProtectorImage from "@/assets/images/games/BabyTurtleProtector/BabyTurtleProtector.png";
import gardeniaGlobalGreenhouseImage from "@/assets/images/games/GardeniaGlobalGreenhouse/ggg.png";
import luckyJourneyImage from "@/assets/images/games/LuckyJourney/LuckyJourney.png";

export interface GameState {
  games: Game[]
}

interface GameStoreGetters extends PiniaStoreGetters<GameState>{
}

interface GameStoreActions {}

export type GameStore = Store<string, GameState, GameStoreGetters, GameStoreActions>;

export const useGameStore = defineStore<'GameStore', GameState, GameStoreGetters, GameStoreActions> ('GameStore', {
  state: (): GameState => ({
    games: [
      {
        id: "rhythm-invoker",
        itch_io_link: "https://vanhoras.itch.io/rhythm-invoker",
        title: "Rhythm Invoker",
        genre: "Gaelic Rock Rhythm Game",
        image: rhythmInvokerImage,
        role: "Game Design & Programming",
        short_description: "Invoke the God of Death to combat the corrupted Guardian Spirits. Hit precise notes, channel mystical energies and rack up your score."
      },
      {
        id: "sands-of-magic",
        itch_io_link: "https://vanhoras.itch.io/sands-of-magic",
        title: "Sands of Magic",
        genre: "Point & Click Adventure Game",
        image: sandsOfMagicImage,
        role: "Game Design & Programming",
        short_description: "A city in the desert is on the verge of disaster, as the orb which provided the magic lifeblood of the city becomes unstable. Uncover the ancient legends of the orb as the Archmage and prevent the destruction of the city."
      },
      {
        id: "dungeon-swapper",
        itch_io_link: "https://vanhoras.itch.io/dungeon-swapper",
        title: "Dungeon Swapper",
        genre: "Puzzle Game",
        image: dungeonSwapperImage,
        role: "Game Design & Programming",
        short_description: "Find your way through an undead infested dungeon using only the ability to swap position with enemies."
      },
      {
        id: "baby-turtle-protector",
        itch_io_link: "https://howell-xr.itch.io/baby-turtle-protector",
        title: "Baby Turtle Protector",
        genre: "VR Game",
        image: babyTurtleProtectorImage,
        role: "Programming",
        short_description: "Deliver your baby turtles to their mother in the sea! Use your bow to fend off enemies, and teleport from one to turtle to the next!"
      },
      {
        id: "gardenia-global-greenhouse",
        itch_io_link: "https://emstergrace.itch.io/gardeniasglobalgreenhouse",
        title: "Gardenia's Global Greenhouse",
        genre: "Simulation",
        image: gardeniaGlobalGreenhouseImage,
        role: "Programming",
        short_description: "Welcome to Gardenia’s Global Greenhouse! Home to some of the rarest plants from around the world, Gardenia’s Greenhouse is a place of learning and reflection. Find all the plants to fill up your booklet and receive a special sticker to commemorate your visit!"
      },
      {
        id: "lucky-journey",
        itch_io_link: "https://vanhoras.itch.io/luckys-journey",
        title: "Lucky's Journey",
        genre: "Platformer",
        image: luckyJourneyImage,
        role: "Game Developer",
        short_description: "The first game I created as a child, using only Java and sprites made in Microsoft Paint."
      }
  ]}),

  getters: {
  },

  actions: {}
});
