export interface listDTO {
  header: string;
  package: packageDTO[];
  price?: string;
}

export interface packageDTO {
  content: string;
  class: string;
}

export const offer: listDTO[] = [
  {
    header: 'REPORTAZ FILMOWY 20′′',
    package: [
      {
        content: '1 dyskretny operator (praca w godz. 13:00 – 20:00)',
        class: '',
      },
      { content: 'możliwa sesja plenerowa w dniu ślubu', class: '' },
      { content: 'wzruszający FILM 20 min.', class: '' },
      { content: '1 x pendrive', class: '' },
    ],
    price: '3500zł',
  },
  {
    header: 'REPORTAŻ FILMOWY 30′′',
    package: [
      {
        content: 'konsultacje i wsparcie podczas planowania wesela',
        class: '',
      },
      {
        content: '1 dyskretny operator (praca w godz. 13:00 – 01:00)',
        class: '',
      },
      { content: 'możliwa sesje plenerowa w dniu ślubu', class: '' },
      {
        content: 'wzruszający FILM 30 min. + emocjonujący klip 3 – 4 min.',
        class: '',
      },
      { content: '1 x pendrive', class: '' },
    ],
    price: '4500zł',
  },
  {
    header: 'REPORTAŻ FILMOWY 40′′',
    package: [
      {
        content: 'konsultacje i wsparcie podczas planowania wesela',
        class: '',
      },
      {
        content: '2 dyskretnych operatorów (praca w godz. 13:00 – 01:00)',
        class: '',
      },
      { content: 'ujęcia plenerowe w dniu ślubu', class: '' },
      {
        content: 'wzruszający FILM 40 min. + emocjonujący klip 3 – 4 min.',
        class: '',
      },
      { content: '1 x pendrive', class: '' },
    ],
    price: '6500zł',
  },
];

export const additionalOptions = {
  header: 'Opcje dodatkowe',
  package: [
    {
      content: 'ujęcia lotnicze (dron) w dniu ślubu: ',
      price: '500 zl',
      class: 'informacje',
    },
    {
      content: 'surowe pliki video – na nośniku klienta: ',
      price: '500 zl',
      class: 'informacje',
    },
    {
      content: 'dodatkowy pendrive w pudełku: ',
      price: '200 zl',
      class: 'informacje',
    },
    {
      content: 'film z podziękowaniami dla rodziców: ',
      price: '1000 zl',
      class: 'informacje',
    },
    {
      content: 'dodatkowy operator: ',
      price: '1000 zl',
      class: 'informacje',
    },
    {
      content: 'montaż w trybie express (14 dni): ',
      price: '1000 zl',
      class: 'informacje',
    },
    {
      content: 'podziękowania dla rodziców (profesjonalna prezentacja: )',
      price: 'od 500 zl',
      class: 'informacje',
    },
  ],
};

export const additionalInformations = {
  header: 'Informacje dodatkowe',
  package: [
    {
      content: 'dojazd do 50 km od Bydgoszczy – bezpłatny',
      class: 'informacje',
    },
    {
      content: 'dojazd powyżej 50 km od Bydgoszczy – 1 zł/km',
      class: 'informacje',
    },
    {
      content:
        'gwarancją rezerwacji terminu jest podpisanie umowy i wpłata zadatku ( 1000 zł )',
      class: 'informacje',
    },
  ],
};
