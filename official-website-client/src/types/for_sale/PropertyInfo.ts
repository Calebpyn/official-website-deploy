export type propertyDisplayType = {
    id: string,
    name: string,
    name_es: string,
    desc: string,
    desc_es: string,
    type: string,
    price: string,
    currency: string,
    atts: Array<att>
    images: Array<string>
}

type att = {
    es: string,
    en: string
}