export const mockData = {
    header: {
        ticker: 'GB Special offer + Free Delivery 2-4 days in UK',
        menu: [
            { id: crypto.randomUUID(), name: 'Go to product page' },
            { id: crypto.randomUUID(), name: 'Track your order' },
            { id: crypto.randomUUID(), name: 'Contact us' },
            { id: crypto.randomUUID(), name: 'FAQs' },
        ],
    },
    main: {
        phones: [
            {
                id: crypto.randomUUID(),
                name: 'Tiny Phone 4G',
                descriptions: 'Small Size, Huge Impact',
                price: { oldPrice: '£ 59.00', newPrice: '£ 3.00' },
                backgroundColor: '#918BE4',
                backgroundImage: '/prophone-app/assets/images/main/logo-big.svg',
                fill: '#7B73E1',
                image: '/prophone-app/images/main/purple-phone.png',
            },
            {
                id: crypto.randomUUID(),
                name: 'Tiny Phone 4G',
                descriptions: 'Small Size, Huge Impact',
                price: { oldPrice: '£ 59.00', newPrice: '£ 3.00' },
                backgroundColor: '#36363E',
                backgroundImage: '/prophone-app/assets/images/main/logo-big.svg',
                fill: '#313138',
                image: '/prophone-app/images/main/darkgrey-phone.png',
            },
            {
                id: crypto.randomUUID(),
                name: 'Tiny Phone 4G',
                descriptions: 'Small Size, Huge Impact',
                price: { oldPrice: '£ 59.00', newPrice: '£ 3.00' },
                backgroundColor: '#F49894',
                backgroundImage: '/prophone-app/images/main/logo-big.svg',
                fill: '#F58D88',
                image: '/prophone-app/images/main/pink-phone.png',
            },
        ],
        description: {
            text: 'Introducing the New <span>Tiny Phone 4G</span>',
            image: '/prophone-app/images/descriptions/descriptions-image.jpg',
        },
        infoBlock: {
            blocks: [
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '/prophone-app/icons/main/delivery.svg',
                        titleText: 'Free delivery in United Kingdom',
                    },
                    description:
                        'All purchases are shipped from our warehouse in <span>United Kingdom</span> and are ' +
                        'fully insured with a tracking number. Tracked delivery between 2-4 days in ' +
                        '<span>United Kingdom</span> + Free Delivery.',
                    icons: [
                        { id: crypto.randomUUID(), icon: '/prophone-app/icons/main/dhl.svg' },
                        { id: crypto.randomUUID(), icon: '/prophone-app/icons/main/dpd.svg' },
                        { id: crypto.randomUUID(), icon: '/prophone-app/icons/main/fedex.svg' },
                        { id: crypto.randomUUID(), icon: '/prophone-app/icons/main/ups.svg' },
                    ],
                },
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '/prophone-app/icons/main/warranty.svg',
                        titleText: '3 years warranty',
                    },
                    description:
                        'Our product is guaranteed for 3 years from the date of your purchase.<br><br>' +
                        'For more information, please contact our team.',
                },
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '/prophone-app/icons/main/moneyback.svg',
                        titleText: '100% money-back guarantee',
                    },
                    description:
                        "If you're not satisfied with your purchase, we offer a 100% Money Back Guarantee.<br><br>" +
                        'No Questions Asked.',
                },
            ],
            title: 'Shipping & Returns',
        },
    },
    footer: {
        policies: [
            { id: crypto.randomUUID(), name: 'Privacy Notice' },
            { id: crypto.randomUUID(), name: 'Terms and conditions' },
            { id: crypto.randomUUID(), name: 'Cookies' },
        ],
    },
};
