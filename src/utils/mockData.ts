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
                backgroundImage: '../../src/assets/images/main/logo-big.svg',
                fill: '#7B73E1',
                image: '../../src/assets/images/main/purple-phone.jpg',
            },
            {
                id: crypto.randomUUID(),
                name: 'Tiny Phone 4G',
                descriptions: 'Small Size, Huge Impact',
                price: { oldPrice: '£ 59.00', newPrice: '£ 3.00' },
                backgroundColor: '#36363E',
                backgroundImage: '../../src/assets/images/main/logo-big.svg',
                fill: '#313138',
                image: '../../src/assets/images/main/darkgrey-phone.jpg',
            },
            {
                id: crypto.randomUUID(),
                name: 'Tiny Phone 4G',
                descriptions: 'Small Size, Huge Impact',
                price: { oldPrice: '£ 59.00', newPrice: '£ 3.00' },
                backgroundColor: '#F49894',
                backgroundImage: '../../src/assets/images/main/logo-big.svg',
                fill: '#F58D88',
                image: '../../src/assets/images/main/pink-phone.jpg',
            },
        ],
        description: {
            text: 'Introducing the New Tiny Phone 4G',
            image: '../../src/assets/images/descriptions/descriptions-image.jpg',
        },
        infoBlock: {
            blocks: [
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '../src/assets/icons/main/delivery.svg',
                        titleText: 'Free delivery in United Kingdom',
                    },
                    description:
                        'All purchases are shipped from our warehouse in United Kingdom and are ' +
                        'fully insured with a tracking number. Tracked delivery between 2-4 days in ' +
                        'United Kingdom + Free Delivery.',
                    icons: [
                        { id: crypto.randomUUID(), icon: '../src/assets/icons/main/dhl.svg' },
                        { id: crypto.randomUUID(), icon: '../src/assets/icons/main/dpd.svg' },
                        { id: crypto.randomUUID(), icon: '../src/assets/icons/main/fedex.svg' },
                        { id: crypto.randomUUID(), icon: '../src/assets/icons/main/ups.svg' },
                    ],
                },
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '../src/assets/icons/main/warranty.svg',
                        titleText: '3 years warranty',
                    },
                    description:
                        'Our product is guaranteed for 3 years from the date of your purchase.\n' +
                        'For more information, please contact our team.',
                },
                {
                    id: crypto.randomUUID(),
                    title: {
                        icon: '../src/assets/icons/main/moneyback.svg',
                        titleText: '100% money-back guarantee',
                    },
                    description:
                        "If you're not satisfied with your purchase, we offer a 100% Money Back Guarantee.\n" +
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
        information:
            '*Information is not a public offer\n' +
            'This site is not part of the Facebook or Facebook Inc. ' +
            'website. Also, this site is not endorsed by Facebook ' +
            'in any way FACEBOOK is a trademark of FACEBOOK, Inc. Facebook' +
            ' provides a platform for serving advertising, but the opinions ' +
            'and/or views expressed on this website are not representative of ' +
            "Facebook, Inc. Opinions and/or views expressed on our website's social " +
            'media platforms, including but not limited to our blogs and Facebook pages, ' +
            'represent the thoughts of individual bloggers and online communities, and not ' +
            'necessarily those of our website or any of its business partners, affiliates or ' +
            'any of their respective officers, employees, staff or board members. The views ' +
            'and opinions expressed on these pages do not in any way reflect the opinions of ' +
            'the site on which they are published, other sites affiliated with the site, the ' +
            'personnel involved in the maintenance of the site or any member of the site. Any ' +
            "opinions or views expressed on this website's social media platforms are not representative " +
            'of Facebook, Inc. Although our website makes reasonable efforts to monitor and/or moderate ' +
            'content posted on its social media platforms, we do not moderate all comments and cannot ' +
            'always respond to online inquiries in a timely manner. All new customers are entered into the ' +
            'raffle for the displayed campaign product. If you are the lucky winner, you will be contacted ' +
            'directly by email. This special offer includes a three-day trial to an affiliated service, after ' +
            'which the subscription fee will be thirty-three euros every fourteen days - automatically deducted ' +
            'from your credit card. If for any reason you are not satisfied with the service, you can cancel your ' +
            'account within three days. The service will renew every thirty days until cancelled. This campaign ' +
            'will expire on December 31 of this year. If you would like to participate without signing up ' +
            'for a three-day trial at Toolsandtoys, please email.',
        buttonText: 'Read less',
        copyright: '© 2023 WhaleCo Inc.',
    },
};
