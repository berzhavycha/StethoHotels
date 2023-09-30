export const getReducedData = (arr, prop) => {
    if (!Array.isArray(arr)) {
        throw new Error('The first argument must be an array.');
    }

    if (!prop && typeof prop !== 'string') {
        throw new Error('The second argument must be a string representing a property name.');
    }

    return arr?.reduce((acc, item) => {
        if (prop in item) {
            if (!acc.includes(item[prop])) {
                acc.push(item[prop])
            }
        } else {
            console.error(`Item is missing property "${prop}" or is not an object:`)
        }

        return acc
    }, [])
}

export const changeDateForm = (string) => {
    const splitDate = string.split('.')

    if (splitDate.length !== 3) {
        throw new Error('Invalid input format. Expected "dd.mm.yyyy"')
    }

    const day = splitDate[0]
    const month = splitDate[1]
    const year = splitDate[2]

    const isNanDate = [day, month, year].some(isNaN)

    if (isNanDate) {
        throw new Error('Invalid date components. Day, month, and year must be numeric.')
    }

    const isPositive = [day, month, year].every(num => num > 0)

    if (!isPositive) {
        throw new Error('Invalid date components. Day, month, and year must be positive.')
    }

    return `${year}-${month}-${day}`
}

const checkDate = (number) => number > 10 ? number : `0${number}`

export const formatDate = (date) => {
    return `${checkDate(date.getDate())}.${checkDate(date.getMonth())}.${checkDate(date.getFullYear())}`
}

export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}


// Other data

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']

export const areas = ['Resort (2)', 'West (3)', 'Downtown (2)', 'South (4)']

export const availableCities = ['Paris', 'Gauravaddo', 'Miami', 'LA', 'Mexico']

export const dropdown = [
    {
        link: 'pages',
        dropdownLinks: [
            {
                title: 'hotel listing',
                to: 'hotels',
            },
            {
                title: 'login',
                to: 'login',
            },
            {
                title: 'register',
                to: 'register',
            },
            {
                title: 'faq',
                to: 'faq',
            },
        ]
    }
]

export const slides = [
    {
        id: 0,
        imageUrl: '../public/Images/slider-1.jpg'
    },
    {
        id: 1,
        imageUrl: '../public/Images/slider-2.jpg'
    },
    {
        id: 2,
        imageUrl: '../public/Images/slider-3.jpg'
    }
]

export const hotels = [
    {
        id: 10,
        src: '../public/Images/popular1.jpg',
        alt: "Image 1",
        title: "Ansan Hotel",
        price: 100.00,
        stars: 3,
        location: 'Thailand'
    },
    {
        id: 6,
        src: '../public/Images/popular2.jpg',
        alt: "Image 2",
        title: "Fawlty Towers",
        price: 200.00,
        stars: 3,
        location: 'Vietnam'
    },
    {
        id: 7,
        src: '../public/Images/popular3.jpg',
        alt: "Image 3",
        title: "Hotel Valle",
        price: 300.00,
        stars: 4,
        location: 'Italy'
    },
    {
        id: 8,
        src: '../public/Images/popular4.jpg',
        alt: "Image 4",
        title: "Hotel Las Trojes",
        price: 400.00,
        stars: 4,
        location: 'Mexico'
    },
    {
        id: 9,
        src: '../public/Images/popular5.jpg',
        alt: "Image 5",
        title: "Rosen Shingle Creek",
        price: 500.00,
        stars: 5,
        location: 'United States'
    }
]

export const cities = [
    {
        id: 1,
        name: 'Orlando',
        imageUrl: '../public/Images/dest-1.jpg'
    },
    {
        id: 2,
        name: 'Miami',
        imageUrl: '../public/Images/dest-2.jpg'
    },
    {
        id: 3,
        name: 'Los Angeles',
        imageUrl: '../public/Images/dest-3.jpg'
    },
    {
        id: 4,
        name: 'San Diego',
        imageUrl: '../public/Images/dest-4.jpg'
    },
    {
        id: 5,
        name: 'Houston',
        imageUrl: '../public/Images/dest-5.jpg'
    },
    {
        id: 6,
        name: 'New York',
        imageUrl: '../public/Images/dest-6.jpg'
    }
]

export const reviews = [
    {
        id: 1,
        fullName: 'Joe Gabriel',
        proffesion: 'Designer',
        text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam odio voluptatum reprehenderit, repellendus harum quibusdam quasi necessitatibus maiores iusto sapiente facilis quaerat cupiditate, cumque recusandae voluptatem facere ducimus. Est?"',
        imageUrl: '../public/Images/profile/profile1.jpg'
    },
    {
        id: 2,
        fullName: 'Kevin Marthin',
        proffesion: 'Developer',
        text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam odio voluptatum reprehenderit, repellendus harum quibusdam quasi necessitatibus maiores iusto sapiente facilis quaerat cupiditate, cumque recusandae voluptatem facere ducimus. Est?"',
        imageUrl: '../public/Images/profile/profile2.jpg'
    },
    {
        id: 3,
        fullName: 'Join Mansoor',
        proffesion: 'Support-Marketing',
        text: '" Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsam odio voluptatum reprehenderit, repellendus harum quibusdam quasi necessitatibus maiores iusto sapiente facilis quaerat cupiditate, cumque recusandae voluptatem facere ducimus. Est?"',
        imageUrl: '../public/Images/profile/profile3.jpg'
    }
]

export const news = [
    {
        id: 1,
        imageUrl: '../public/Images/singlepage/blog-1.jpg',
        date: '15.04.2023',
        type: 'business',
        title: 'The Most Advance Business Plan',
        text: 'Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.',
        to: 'blog/1'
    },
    {
        id: 2,
        imageUrl: '../public/Images/singlepage/blog-2.jpg',
        date: '25.05.2023',
        type: 'business',
        title: 'Beautiful Home Page',
        text: 'Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.',
        to: 'blog/2'
    },
    {
        id: 3,
        imageUrl: '../public/Images/singlepage/blog-3.jpg',
        date: '20.06.2023',
        type: 'business',
        title: 'Modern Design Concept',
        text: 'Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.',
        to: 'blog/3'
    }
]

export const checks = [
    'Find nearby hotel in your network with templete',
    'Get paperless confirmation',
    'Make changes whenever, wherever',
    '24 / 7 customer service in more than 40 languages',
    'No booking or credit card fees',
    'No booking or credit card fees',
    'Add your own reviews and photos',
]

export const howItWorks = [
    {
        id: 1,
        imageUrl: '../public/Images/works/work-1.png',
        title: 'Search Multiple Destinations',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.'
    },
    {
        id: 2,
        imageUrl: '../public/Images/works/work-2.png',
        title: 'Find the Lowest Hotel Prices',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.'
    },
    {
        id: 3,
        imageUrl: '../public/Images/works/work-3.png',
        title: 'Find the Right Hotel for You',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum.'
    }
]

export const companies = [
    {
        id: 1,
        replaceUrl: '../public/Images/gallery/gallery-1.png',
        imageUrl: '../public/Images/gallery/imageedit_2_6355301028.png'
    },
    {
        id: 2,
        replaceUrl: '../public/Images/gallery/gallery-2.png',
        imageUrl: '../public/Images/gallery/imageedit_3_9694784683.png'
    },
    {
        id: 3,
        replaceUrl: '../public/Images/gallery/gallery-3.png',
        imageUrl: '../public/Images/gallery/imageedit_4_5769276629.png'
    },
    {
        id: 4,
        replaceUrl: '../public/Images/gallery/gallery-4.png',
        imageUrl: '../public/Images/gallery/imageedit_5_7678607921.png'
    },
    {
        id: 5,
        replaceUrl: '../public/Images/gallery/gallery-5.png',
        imageUrl: '../public/Images/gallery/imageedit_6_8162959851.png'
    },
    {
        id: 6,
        replaceUrl: '../public/Images/gallery/gallery-1.png',
        imageUrl: '../public/Images/gallery/imageedit_2_6355301028.png'
    },
]

export const tabs = [
    {
        id: 1,
        title: 'Awesome Design',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.'
    },
    {
        id: 2,
        title: 'Full Devices',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur. '
    },
    {
        id: 3,
        title: 'User Experience',
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.'
    }
]

export const gallery = [
    {
        id: 1,
        imageUrl: '../public/Images/gallery-1.jpg',
        title: 'Gallery Title'
    },
    {
        id: 2,
        imageUrl: '../public/Images/gallery-2.jpg',
        title: 'Gallery Title'
    },
    {
        id: 3,
        imageUrl: '../public/Images/gallery-3.jpg',
        title: 'Gallery Title'
    },
    {
        id: 4,
        imageUrl: '../public/Images/gallery-4.jpg',
        title: 'Gallery Title'
    },
    {
        id: 5,
        imageUrl: '../public/Images/gallery-5.jpg',
        title: 'Gallery Title'
    },
    {
        id: 6,
        imageUrl: '../public/Images/gallery-6.jpg',
        title: 'Gallery Title'
    }
]

export const accordion = [
    {
        id: 1,
        title: 'Booking',
        questions: [
            {
                question: 'Which material types can you work with?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How long does it takes to receive the answer?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How to get start with us?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            }
        ]
    },
    {
        id: 2,
        title: 'Payment',
        questions: [
            {
                question: 'Are you ISO certified?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How long does it takes to receive the answer?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How to get start with us?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            }
        ]
    },
    {
        id: 3,
        title: 'Terms & Conditions',
        questions: [
            {
                question: 'Are you ISO certified?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'Which material types can you work with?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How long does it takes to receive the answer?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How to get start with us?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            }
        ]
    },
    {
        id: 4,
        title: 'Accounts',
        questions: [
            {
                question: 'Are you ISO certified?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'Which material types can you work with?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How long does it takes to receive the answer?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
        ]
    },
    {
        id: 5,
        title: 'General Help',
        questions: [
            {
                question: 'Are you ISO certified?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How long does it takes to receive the answer?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            },
            {
                question: 'How to get start with us?',
                answer: 'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur orem ipsum dolor sitametcoctr adipisg elit amet consectur aiscing elit adipig elit amet consectur aiscing elit amet adipisg elit adipisg elit amet consectur.',
                clauses: [
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                    'Lorem ipsum dolor sitametcoctr elit amet consectur aiscing elit amet adipisg elit.',
                    'Ipsum dolor sitametcoctr elit consectur aiscing elit amet adipisg elit.',
                    'Dolor sitametcoctr aiscing elit amet adipisg elit.',
                ]
            }
        ]
    }
]