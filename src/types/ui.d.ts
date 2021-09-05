export interface UILayer {
  elevation: number;
  readonly style: {zIndex: number};
}

export interface UITile {
  readonly x: number;
  readonly y: number;
  bgX: number;
  bgY: number;
  readonly position: {top: string; left: string};
  readonly bg: {backgroundPosition: string}
}
