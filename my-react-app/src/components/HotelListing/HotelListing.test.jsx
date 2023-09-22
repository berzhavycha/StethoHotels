import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HotelListing from './HotelListing'
import { store } from '../../app/store'
import { renderWithProviders } from '../../utils'
import { server } from '../../mock/api/server'
import { rest } from 'msw'


const apiData = [
    {
        id: '7',
        amenties: '[   {     "icon": "fa-wifi",     "text": "Free Wi-Fi"   },   {     "icon": "fa-bed",     "text": "2 Singal Beads"   },   {     "icon": "fa-shower",     "text": "Shower and Bathtub"   },   {     "icon": "fa-wheelchair",     "text": "Wheelchair Friendly"   },   {     "icon": "fa-dumbbell",     "text": "Fitness Center"   },   {     "icon": "fa-person-swimming",     "text": "Swimming Pool"   },   {     "icon": "fa-camera",     "text": "Security Cameras"   } ]',
        images: [
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular3.jpg',
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-21.jpg',
        ],
        name: 'Hotel Valle',
        overview: 'Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.',
        price: '300',
        reviews: '[   {     "id": 1,     "fullName": "John Doe",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "04.07.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",     "nestedReviews": [       {         "id": 4,         "fullName": "Donald Trump",         "text": "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",         "date": "05.07.2023",         "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",         "reactions": {           "thumbsUp": 0,           "wow": 0,           "heart": 0,           "rocket": 0,           "coffee": 0         },         "nestedReviews": []       }     ]   },   {     "id": 2,     "fullName": "Joe Biden",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",     "nestedReviews": []   },   {     "id": 3,     "fullName": "Dork Geek",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",     "nestedReviews": []   } ]',
        rooms: '[   {     "title": "Standard Single Room",     "price": 240,     "capacity": 2,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Deluxe Room",     "price": 340,     "capacity": 5,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Signature Room",     "price": 440,     "capacity": 3,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   } ]',
        stars: '3',
        location: 'Italy',
        area: 'west'
    },
    {
        id: '8',
        amenties: '[   {     "icon": "fa-wifi",     "text": "Free Wi-Fi"   },   {     "icon": "fa-bed",     "text": "2 Singal Beads"   },   {     "icon": "fa-shower",     "text": "Shower and Bathtub"   },   {     "icon": "fa-wheelchair",     "text": "Wheelchair Friendly"   },   {     "icon": "fa-dumbbell",     "text": "Fitness Center"   },   {     "icon": "fa-person-swimming",     "text": "Swimming Pool"   },   {     "icon": "fa-camera",     "text": "Security Cameras"   } ]',
        images: [
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular4.jpg',
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-22.jpg',
        ],
        name: 'Hotel Las Trojes',
        overview: 'Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.',
        price: '400',
        reviews: '[   {     "id": 1,     "fullName": "John Doe",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "04.07.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",     "nestedReviews": [       {         "id": 4,         "fullName": "Donald Trump",         "text": "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",         "date": "05.07.2023",         "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",         "reactions": {           "thumbsUp": 0,           "wow": 0,           "heart": 0,           "rocket": 0,           "coffee": 0         },         "nestedReviews": []       }     ]   },   {     "id": 2,     "fullName": "Joe Biden",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",     "nestedReviews": []   },   {     "id": 3,     "fullName": "Dork Geek",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",     "nestedReviews": []   } ]',
        rooms: '[   {     "title": "Standard Single Room",     "price": 240,     "capacity": 2,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Deluxe Room",     "price": 340,     "capacity": 5,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Signature Room",     "price": 440,     "capacity": 3,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   } ]',
        stars: '4',
        location: 'Mexico',
        area: 'downtown'
    },
    {
        id: '9',
        amenties: '[   {     "icon": "fa-wifi",     "text": "Free Wi-Fi"   },   {     "icon": "fa-bed",     "text": "2 Singal Beads"   },   {     "icon": "fa-shower",     "text": "Shower and Bathtub"   },   {     "icon": "fa-wheelchair",     "text": "Wheelchair Friendly"   },   {     "icon": "fa-dumbbell",     "text": "Fitness Center"   },   {     "icon": "fa-person-swimming",     "text": "Swimming Pool"   },   {     "icon": "fa-camera",     "text": "Security Cameras"   } ]',
        images: [
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular5.jpg',
            'https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-21.jpg',
        ],
        name: 'Rosen Shingle Creek',
        overview: 'Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.',
        price: '500',
        reviews: '[   {     "id": 1,     "fullName": "John Doe",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "04.07.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",     "nestedReviews": [       {         "id": 4,         "fullName": "Donald Trump",         "text": "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",         "date": "05.07.2023",         "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",         "reactions": {           "thumbsUp": 0,           "wow": 0,           "heart": 0,           "rocket": 0,           "coffee": 0         },         "nestedReviews": []       }     ]   },   {     "id": 2,     "fullName": "Joe Biden",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",     "nestedReviews": []   },   {     "id": 3,     "fullName": "Dork Geek",     "text": "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",     "date": "01.06.2023",     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",     "nestedReviews": []   } ]',
        rooms: '[   {     "title": "Standard Single Room",     "price": 240,     "capacity": 2,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Deluxe Room",     "price": 340,     "capacity": 5,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   },   {     "title": "Signature Room",     "price": 440,     "capacity": 3,     "amenties": [       {         "icon": "fa-wifi",         "text": "Free Wi-Fi"       },       {         "icon": "fa-bed",         "text": "2 Singal Beads"       },       {         "icon": "fa-shower",         "text": "Shower and Bathtub"       },       {         "icon": "fa-wheelchair",         "text": "Wheelchair Friendly"       }     ],     "imageUrl": "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg"   } ]',
        stars: '4',
        location: 'United States',
        area: 'south'
    },
]

const renderHotelsAndRunServer = async () => {
    server.use(
        rest.get(`*`, (req, res, ctx) => {
            return res(ctx.json(apiData))
        }
        )
    );

    renderWithProviders(<HotelListing />, store)

    await userEvent.selectOptions(
        screen.getByTestId('select-price'),
        screen.getByRole('option', { name: /any/i }),
    )
}

describe('Hotel Listing', () => {
    test('should render hotels', async () => {
        await renderHotelsAndRunServer()
        expect(screen.getAllByTestId('hotel-item')).toHaveLength(3)
    })


    test('should filter hotels by price', async () => {
        await renderHotelsAndRunServer()

        expect(screen.getAllByTestId('hotel-item')).toHaveLength(3)

        await userEvent.selectOptions(
            screen.getByTestId('select-price'),
            screen.getByRole('option', { name: '$200 - $300' }),
        )

        expect(screen.getAllByTestId('hotel-item')).toHaveLength(1)
    })

    test('should filter hotels by stars', async () => {
        await renderHotelsAndRunServer()

        await userEvent.click(screen.getByTestId('star-4'))
        expect(screen.getAllByTestId('hotel-item')).toHaveLength(2)
    })

    test('should filter hotels by area', async () => {
        await renderHotelsAndRunServer()

        await userEvent.click(screen.getByTestId('downtown'))
        expect(screen.getAllByTestId('hotel-item')).toHaveLength(1)
    })

    test('should display Not-Found component', async () => {
        await renderHotelsAndRunServer()

        await userEvent.click(screen.getByTestId('star-1'))
        expect(screen.getByText('Unfortunaly, we did not find anything for your search')).toBeInTheDocument()
    })

    test('should display Not-Found component', async () => {
        await renderHotelsAndRunServer()

        screen.getByRole('option', { name: '$400 - $500' }),
        await userEvent.click(screen.getByTestId('star-4'))
        await userEvent.click(screen.getByTestId('south'))

        expect(screen.getAllByTestId('hotel-item')).toHaveLength(1)
    })

})