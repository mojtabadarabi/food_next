
export default function useGetMainHeaderItems() {
    const getItems = () => {
        return [
            {
                title: 'خانه',
                href:"/"
            },
            {
                title: 'رستوران ها',
                href:'/restaurants'
            },
            {
                title: 'غذا ها',
                href:'/foods'
            },
            {
                title: 'تماس با ما',
                href:'/contact-us'
            },
            {
                title: 'درباره ما',
                href:'/about-us'
            },
        ]
    }
    return getItems
}
