import type { StateTree, _GettersTree } from "pinia";

export type PiniaStoreGetters<S extends StateTree> = _GettersTree<S>;