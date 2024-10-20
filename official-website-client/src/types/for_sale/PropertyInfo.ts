// export type propertyDisplayType = {
//     id: string,
//     name: string,
//     name_es: string,
//     desc: string,
//     desc_es: string,
//     type: string,
//     price: string,
//     currency: string,
//     atts: Array<att>
//     images: Array<string>
// }

// type att = {
//     es: string,
//     en: string
// }

export type propertyDisplayType = {
  id: string;
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
