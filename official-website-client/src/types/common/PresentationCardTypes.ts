export type PresentationCardType = {
  title: string;
  image: string;
  content: string;
  phone: phoneNumbers
  mail: string;
  external_links: socialMedia;
};

type socialMedia = {
  whatsapp: string;
  facebook: string;
  instagram: string;
  tiktok: string;
};

type phoneNumbers = {
  mx: string;
  usa: string;
};
