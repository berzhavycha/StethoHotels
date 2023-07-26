import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    doc,
    getDocs,
    getDoc,
    query,
    where
} from "firebase/firestore/lite"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBlJbVX9XjOFurgCwC24Uvg485CUPbJDr8",
    authDomain: "stetho-74c61.firebaseapp.com",
    databaseURL: "https://stetho-74c61-default-rtdb.firebaseio.com",
    projectId: "stetho-74c61",
    storageBucket: "stetho-74c61.appspot.com",
    messagingSenderId: "491292677753",
    appId: "1:491292677753:web:9feeb55e67bdd4be5266a8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app);



// Utils funcitons

// get all items from firestore by its collection name
export const getItems = async (collectionName, id) => {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return id ? dataArr.find(item => item.id == id) : dataArr
}

// search for items that i typed into input
export const getSearchItems = async (collectionName, title) => {
    const querySnapshot = await getDocs(collection(db, collectionName))
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))
    return dataArr.filter(item => item.title.toLowerCase().startsWith(title.toLowerCase()))
}


// delay function to show react spinner
export function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

// get item from firestore by its id and collection name
export const getSingleCity = async (id, collectionName) => {
    const docRef = doc(db, collectionName, id)
    const citySnapshot = await getDoc(docRef)
    return {
        ...citySnapshot.data(),
        id: citySnapshot.id
    }
}

// get item from firestore by its id and collection name
export const getReducedData = (arr, prop) => {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item[prop])) {
            acc.push(item[prop])
        }

        return acc
    }, [])
}

// Other data

export const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December']

export const dropdown = [
    {
        link: 'pages',
        dropdownLinks: [
            {
                title: 'hotel listing',
                to: null
            },
            {
                title: 'hotel detail',
                to: null
            },
            {
                title: 'login',
                to: 'login'
            },
            {
                title: 'register',
                to: 'register'
            },
            {
                title: 'team',
                to: null
            },
            {
                title: 'testimonial',
                to: null
            },
            {
                title: 'travel information',
                to: null
            },
            {
                title: 'payment information',
                to: null
            },
            {
                title: 'faq',
                to: null
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
        id: 1,
        src: '../public/Images/popular1.jpg',
        alt: "Image 1",
        title: "Ansan Hotel",
        price: 100.00,
        stars: 3,
        location: 'Thailand'
    },
    {
        id: 2,
        src: '../public/Images/popular2.jpg',
        alt: "Image 2",
        title: "Fawlty Towers",
        price: 200.00,
        stars: 3,
        location: 'Vietnam'
    },
    {
        id: 3,
        src: '../public/Images/popular3.jpg',
        alt: "Image 3",
        title: "Hotel Valle",
        price: 300.00,
        stars: 4,
        location: 'Italy'
    },
    {
        id: 4,
        src: '../public/Images/popular4.jpg',
        alt: "Image 4",
        title: "Hotel Las Trojes",
        price: 400.00,
        stars: 4,
        location: 'Mexico'
    },
    {
        id: 5,
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
        id: '1',
        imageUrl: '../public/Images/singlepage/blog-1.jpg',
        date: '15.04.2023',
        type: 'business',
        title: 'The Most Advance Business Plan',
        text: 'Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.',
        to: 'blog/1'
    },
    {
        id: '2',
        imageUrl: '../public/Images/singlepage/blog-2.jpg',
        date: '25.05.2023',
        type: 'business',
        title: 'Beautiful Home Page',
        text: 'Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.',
        to: 'blog/2'
    },
    {
        id: '3',
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
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.'
    },
    {
        id: 2,
        text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet. Lorem ipsum dolor sit amet consectetur. '
    },
    {
        id: 3,
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