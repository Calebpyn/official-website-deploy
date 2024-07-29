export type propertyCardType = {
    title: titleType,
    img: string,
    description: descriptionTtile,
    price: priceType,
    atts: Array<attType>
    width: string
    for_sale: boolean
    pets: boolean
}

type priceType = {
    mx: string,
    us: string
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