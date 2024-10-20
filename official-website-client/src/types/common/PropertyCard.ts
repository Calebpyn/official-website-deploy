// export type propertyCardType = {
//   title: titleType;
//   img: string;
//   description: descriptionTtile;
//   price: string;
//   currency: string;
//   atts: Array<attType>;
//   width: string;
//   for_sale: boolean;
//   pets: boolean;
//   id: string;
//   airbnb: boolean;
// };

// type titleType = {
//   es: string;
//   en: string;
// };

// type descriptionTtile = {
//   es: string;
//   en: string;
// };

// type attType = {
//   es: string;
//   en: string;
// };

export type propertyCardType = {
  id: string;
  width: string;
  name: string;
  name_es: string;
  desc: string;
  desc_es: string;
  type: string;
  price: string;
  currency: string;
  atts_es: Array<string>;
  atts_en: Array<string>;
  images: Array<string>;
  lat: number | null;
  lng: number | null;
  address: string;
};
