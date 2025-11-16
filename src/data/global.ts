// Global Site Data
const currentYear = new Date().getFullYear();
export const siteData = {
    name: "altKod",
    lang: "hr-HR",
    ogLang: "hr_HR",
    langSchema: "hr",
    copyright: `altKod - ${currentYear} | Sva Prava Pridržana`,
    ver: "0.0.1",
    url: "https://altkod.com",
    cmsURL: "https://altkod.apollo.filipsteficar.com",
    graphQL: "https://altkod.apollo.filipsteficar.com/graphql"
}
// Define the MenuItem Interface
interface MenuItem {
    label: string
    href: string
    isExternal?: boolean
}
// Main Menu
export const mainMenu: MenuItem[] = [
    {
        label: "Početna",
        href: "/"
    },
    {
        label: "Centar Znanja",
        href: "/centar-znanja"
    }
]
// Contact Info
export const contactInfo = {
    email: "info@altkod.com",
    address: "Gornja Reka 103, 10450 Jastrebarsko, Croatia"
}
// Social Media
export const socialMedia = {
    instagram: "https://instagram.com",
    youtube: "https://youtube.com"
}