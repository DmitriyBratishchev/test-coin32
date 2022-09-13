import { sortParamLabels } from './constants/sortParamLabels';

export type GameType = {
  id: number,
  name: string,
  slug: string,
  rating: number,
  released: string,
  background_image: string,
  description_raw: string,
  website: string
};

export type PlatformType = {
  id: number,
  name: string
};

export type GamesParamsType = {
  page: number,
  page_size: number,
  parent_platforms: number[],
  search: string,
  order: '' | '-',
  ordering: sortParamLabelType | ''
};

export type sortParamLabelType = keyof typeof sortParamLabels

export enum Params {
  page = 'page',
  page_size = 'page_size',
  parent_platforms = 'parent_platforms',
  search = 'search',
  ordering = 'ordering'
}

// type ValueQueryParamsType = (Type: QueryParamType) => typeof GamesParamsType[Params[Type]]

export type ChangeParamsType = <T extends keyof GamesParamsType>(queryParam: T, valueParam: GamesParamsType[T]) => void;
