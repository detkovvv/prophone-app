export type Data = {
    header: {
        ticker: string;
        menu: { id: string; name: string }[];
    };
    logo: string;
    main: {
        phones: {
            id: string;
            name: string;
            descriptions: string;
            price: { oldPrice: string; newPrice: string };
            backgroundColor: string;
            backgroundImage: string;
            fill: string;
            image: string;
        }[];
        description: {
            text: string;
            image: string;
        };
    };
    footer: {
        policies: { id: string; name: string }[];
        information: string;
        button: string;
        copyright: string;
    };
};
