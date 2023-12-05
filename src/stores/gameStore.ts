import { defineStore, type Store } from 'pinia'
import type { Game } from '@/types/game'
import type { PiniaStoreGetters } from '@/types/pinia';

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
        title: "Rhythm Invoker",
        genre: "Gaelic Rock Rhythm Game",
        image: "src/assets/images/games/RhythmInvoker/rhythm_invoker_title_3.png",
        role: "Game Design & Programming",
        short_description: "Entry in the 1 week long 1-Button Game Jam 2023."
      },
      {
        id: "sands-of-magic",
        title: "Sands of Magic",
        genre: "Point & Click Adventure Game",
        image: "src/assets/images/games/SandsOfMagic/Sands_of_Magic_small.png",
        role: "Game Design & Programming",
        short_description: "Entry in the 2 week long Adventure Game Jam 2023."
      },
      {
        id: "dungeon-swapper",
        title: "Dungeon Swapper",
        genre: "Puzzle Game",
        image: "src/assets/images/games/DungeonSwapper/DungeonSwapper.png",
        role: "Game Design & Programming",
        short_description: "Made in 1 week in September 2023."
      },
      {
        id: "baby-turtle-protector",
        title: "Baby Turtle Protector",
        genre: "VR Game",
        image: "src/assets/images/games/BabyTurtleProtector/BabyTurtleProtector.png",
        role: "Programming",
        short_description: "8th Place in the VR Game Jam 2023."
      },
      {
        id: "gardenia-global-greenhouse",
        title: "Gardenia's Global Greenhouse",
        genre: "Simulation",
        image: "src/assets/images/games/GardeniaGlobalGreenhouse/ggg.png",
        role: "Programming",
        short_description: "Entry in the 48 hour Cozy Spring Game Jam 2023."
      },
      {
        id: "lucky-journey",
        title: "Lucky's Journey",
        genre: "Platformer",
        image: "src/assets/images/games/LuckyJourney/LuckyJourney.png",
        role: "Game Developer",
        short_description: "Created in high school."
      }
  ]}),

  getters: {
  },

  actions: {}
});
