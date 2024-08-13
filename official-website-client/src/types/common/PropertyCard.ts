export type propertyCardType = {
    title: titleType,
    img: string,
    description: descriptionTtile,
    price: string,
    currency: string,
    atts: Array<attType>
    width: string
    for_sale: boolean
    pets: boolean
    id: string
}


type titleType = {
    es: string
    en: string
}

type descriptionTtile = {
    es: string
    en: string
}

type attType = {
    es: string
    en: string
}