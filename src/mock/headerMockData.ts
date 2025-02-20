export const headerContent: HeaderContentTypes = {
  title: 'Sexy Life | زندگی خوب',
  duration: '43 دقیقه',
  releaseYears: '2013 - 2015',
  status: 'پایان انتشار',
  country: 'آمریکا',
  imdbRating: 8.2,
  userRating: '56%',
  seasons: 3,
  episodes: 39,
  language: 'دوبله فارسی',
  ageRating: 'مناسب برای بالای 18 سال',
  genres: ['خانوادگی', 'وحشت', 'کمدی', 'علمی تخیلی', 'درام ']
};
export interface HeaderContentTypes {
  title: string;
  duration: string;
  releaseYears: string;
  status: string;
  country: string;
  imdbRating: number;
  userRating: string;
  seasons: number;
  episodes: number;
  language: string;
  ageRating: string;
  genres: string[];
}
