import { mapTile } from '@/types/config.d';

export interface UILayer {
  elevation: number;
  readonly style: {zIndex: number};
}

export interface UITile {
  readonly x: number;
  readonly y: number;
  readonly position: {top: string; left: string};
}

export interface UISprite {
  sprite: {x: number; y: number};
  readonly background: {backgroundPosition: string};
}

export interface UIMultiSprite extends UISprite {
  readonly current: mapTile;
  readonly top?: mapTile;
  readonly bottom?: mapTile;
  readonly left?: mapTile;
  readonly right?: mapTile;
  sprites: Array<{x: number; y: number}>;
  readonly spriteIndex: number;
  readonly sprite: {x: number; y: number};
}

export interface UIAnimation extends UIMultiSprite {
  sequence: [{index: number; duration: number}];
  animate(): void;
}
