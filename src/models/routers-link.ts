export interface routerDTO {
  urlName: string;
  url: string;
  class?: string;
}

export const fistViewTextRouter: routerDTO[] = [
  {
    urlName: 'filmy',
    url: 'movies',
  },
  {
    urlName: 'kontakt',
    url: '#contact',
  },
];
