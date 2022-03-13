export interface listDTO {
  header: string;
  package: packageDTO[];
  price?: string;
}

export interface packageDTO {
  content: string;
  price?: string;
  class?: string;
}

export const offer: listDTO[] = [
  {
    header: 'REPORTAZ FILMOWY 20′′',
    package: [
      {
        content: '1 dyskretny operator (praca w godz. 13:00 – 20:00)',
      },
      { content: 'możliwa sesja plenerowa w dniu ślubu' },
      { content: 'wzruszający FILM 20 min.' },
      { content: '1 x pendrive' },
    ],
    price: '3500zł',
  },
  {
    header: 'REPORTAŻ FILMOWY 30′′',
    package: [
      {
        content: 'konsultacje i wsparcie podczas planowania wesela',
      },
      {
        content: '1 dyskretny operator (praca w godz. 13:00 – 01:00)',
      },
      { content: 'możliwa sesje plenerowa w dniu ślubu' },
      {
        content: 'wzruszający FILM 30 min. + emocjonujący klip 3 – 4 min.',
      },
      { content: '1 x pendrive' },
    ],
    price: '4500zł',
  },
  {
    header: 'REPORTAŻ FILMOWY 40′′',
    package: [
      {
        content: 'konsultacje i wsparcie podczas planowania wesela',
      },
      {
        content: '2 dyskretnych operatorów (praca w godz. 13:00 – 01:00)',
      },
      { content: 'ujęcia plenerowe w dniu ślubu' },
      {
        content: 'wzruszający FILM 40 min. + emocjonujący klip 3 – 4 min.',
      },
      { content: '1 x pendrive' },
    ],
    price: '6500zł',
  },
];

export const additionalOptions: listDTO = {
  header: 'Opcje dodatkowe',
  package: [
    {
      content: 'ujęcia lotnicze (dron) w dniu ślubu: ',
      price: '500 zl',
    },
    {
      content: 'surowe pliki video – na nośniku klienta: ',
      price: '500 zl',
    },
    {
      content: 'dodatkowy pendrive w pudełku: ',
      price: '200 zl',
    },
    {
      content: 'film z podziękowaniami dla rodziców: ',
      price: '1000 zl',
    },
    {
      content: 'dodatkowy operator: ',
      price: '1000 zl',
    },
    {
      content: 'montaż w trybie express (14 dni): ',
      price: '1000 zl',
    },
    {
      content: 'podziękowania dla rodziców (profesjonalna prezentacja): ',
      price: 'od 500 zl',
    },
  ],
};

export const additionalInformations: listDTO = {
  header: 'Informacje dodatkowe',
  package: [
    {
      content: 'dojazd do 50 km od Bydgoszczy – bezpłatny',
    },
    {
      content: 'dojazd powyżej 50 km od Bydgoszczy – 1 zł/km',
    },
    {
      content:
        'gwarancją rezerwacji terminu jest podpisanie umowy i wpłata zadatku ( 1000 zł )',
    },
  ],
};
