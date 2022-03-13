interface videoDTO {
  header: string;
  content: string;
}

export interface sliderDTO {
  header: string;
  content: string;
  bonus: string;
}

export interface verticalSliderDTO {
  header: string;
  content: string;
  before: videoDTO;
  after: videoDTO;
  video: string;
}

export const textSlider: sliderDTO[] = [
  {
    header: 'Wasze wspomnienia',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
    bonus: 'Kasia i Marcin',
  },
  {
    header: 'Wasze wspomnienia',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
    bonus: 'Kasia i Marcin',
  },
  {
    header: 'Wasze wspomnienia',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
    bonus: 'Kasia i Marcin',
  },
  {
    header: 'Wasze wspomnienia',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et',
    bonus: 'Kasia i Marcin',
  },
];

export const verticalMovieSlider: verticalSliderDTO[] = [
  {
    header: 'Bogumiła & Alek',
    content: '12.01.2021',
    before: {
      header: '',
      content: '',
    },
    after: {
      header: 'Kamila & Darek',
      content: '13.08.2021',
    },
    video: 'test-movie.mp4',
  },
  {
    header: 'Kamila & Darek',
    content: '13.08.2021',
    before: {
      header: 'Bogumiła & Alek',
      content: '12.01.2021',
    },
    after: {
      header: 'Marta & Zbyszek',
      content: '14.07.2021',
    },
    video: 'test-movie2.mp4',
  },
  {
    header: 'Marta & Zbyszek',
    content: '14.07.2021',
    before: {
      header: 'Kamila & Darek',
      content: '13.08.2021',
    },
    after: {
      header: 'Bogumiła & Alek',
      content: '14.11.2021',
    },
    video: 'test-movie.mp4',
  },
  {
    header: 'Bogumiła & Alek',
    content: '14.11.2021',
    before: {
      header: 'Marta & Zbyszek',
      content: '14.07.2021',
    },
    after: {
      header: '',
      content: '',
    },
    video: 'test-movie2.mp4',
  },
];
