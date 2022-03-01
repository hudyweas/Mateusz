export interface routerDTO {
  urlName: string;
  url: string;
  class?: string;
}

export const fistViewTextRouter: routerDTO[] = [
  {
    urlName: 'filmy',
    url: '#',
    class: 'mainTextLinks mainTextLinksResponsive',
  },
  {
    urlName: 'kontakt',
    url: '#',
    class: 'mainTextLinks mainTextLinksResponsive',
  },
];
