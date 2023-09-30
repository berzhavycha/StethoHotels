import { screen, waitFor } from '@testing-library/react'
import { renderWithWrapper } from '../../utils'
import { store } from '../../app/store'
import { server } from '../../mock/api/server'
import { rest } from 'msw'
import userEvent from '@testing-library/user-event'

const apiData = [
    {
        id: "7",
        amenties: "[   {     \"icon\": \"fa-wifi\",     \"text\": \"Free Wi-Fi\"   },   {     \"icon\": \"fa-bed\",     \"text\": \"2 Singal Beads\"   },   {     \"icon\": \"fa-shower\",     \"text\": \"Shower and Bathtub\"   },   {     \"icon\": \"fa-wheelchair\",     \"text\": \"Wheelchair Friendly\"   },   {     \"icon\": \"fa-dumbbell\",     \"text\": \"Fitness Center\"   },   {     \"icon\": \"fa-person-swimming\",     \"text\": \"Swimming Pool\"   },   {     \"icon\": \"fa-camera\",     \"text\": \"Security Cameras\"   } ]",
        images: [
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular3.jpg",
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-21.jpg"
        ],
        name: "Hotel Valle",
        overview: "Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        price: "300",
        reviews: [
            {
                id: 1,
                fullName: "John Doe",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "04.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",
                parentId: null
            },
            {
                id: 4,
                fullName: "Donald Trump",
                text: "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "05.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: 1
            },
            {
                id: 2,
                fullName: "Joe Biden",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",
                parentId: null
            },
            {
                id: 3,
                fullName: "Dork Geek",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: null
            }
        ],
        rooms: "[   {     \"title\": \"Standard Single Room\",     \"price\": 240,     \"capacity\": 2,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Deluxe Room\",     \"price\": 340,     \"capacity\": 5,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Signature Room\",     \"price\": 440,     \"capacity\": 3,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   } ]",
        stars: "3",
        location: "Italy",
        area: "west"
    },
    {
        id: "8",
        amenties: "[   {     \"icon\": \"fa-wifi\",     \"text\": \"Free Wi-Fi\"   },   {     \"icon\": \"fa-bed\",     \"text\": \"2 Singal Beads\"   },   {     \"icon\": \"fa-shower\",     \"text\": \"Shower and Bathtub\"   },   {     \"icon\": \"fa-wheelchair\",     \"text\": \"Wheelchair Friendly\"   },   {     \"icon\": \"fa-dumbbell\",     \"text\": \"Fitness Center\"   },   {     \"icon\": \"fa-person-swimming\",     \"text\": \"Swimming Pool\"   },   {     \"icon\": \"fa-camera\",     \"text\": \"Security Cameras\"   } ]",
        images: [
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular4.jpg",
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-22.jpg"
        ],
        name: "Hotel Las Trojes",
        overview: "Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        price: "400",
        reviews: [
            {
                id: 1,
                fullName: "John Doe",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "04.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",
                parentId: null
            },
            {
                id: 4,
                fullName: "Donald Trump",
                text: "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "05.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: 1
            },
            {
                id: 2,
                fullName: "Joe Biden",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",
                parentId: null
            },
            {
                id: 3,
                fullName: "Dork Geek",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: null
            }
        ],
        rooms: "[   {     \"title\": \"Standard Single Room\",     \"price\": 240,     \"capacity\": 2,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Deluxe Room\",     \"price\": 340,     \"capacity\": 5,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Signature Room\",     \"price\": 440,     \"capacity\": 3,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   } ]",
        stars: "4",
        location: "Mexico",
        area: "downtown"
    },
    {
        id: "9",
        amenties: "[   {     \"icon\": \"fa-wifi\",     \"text\": \"Free Wi-Fi\"   },   {     \"icon\": \"fa-bed\",     \"text\": \"2 Singal Beads\"   },   {     \"icon\": \"fa-shower\",     \"text\": \"Shower and Bathtub\"   },   {     \"icon\": \"fa-wheelchair\",     \"text\": \"Wheelchair Friendly\"   },   {     \"icon\": \"fa-dumbbell\",     \"text\": \"Fitness Center\"   },   {     \"icon\": \"fa-person-swimming\",     \"text\": \"Swimming Pool\"   },   {     \"icon\": \"fa-camera\",     \"text\": \"Security Cameras\"   } ]",
        images: [
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/popular5.jpg",
            "https://raw.githubusercontent.com/berzhavycha/StethoHotels/main/my-react-app/public/Images/room-21.jpg"
        ],
        name: "Rosen Shingle Creek",
        overview: "Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur adipiscing dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        price: "500",
        reviews: [
            {
                id: 1,
                fullName: "John Doe",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "04.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile1.jpg",
                parentId: null
            },
            {
                id: 4,
                fullName: "Donald Trump",
                text: "Lorem adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "05.07.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: 1
            },
            {
                id: 2,
                fullName: "Joe Biden",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile2.jpg",
                parentId: null
            },
            {
                id: 3,
                fullName: "Dork Geek",
                text: "Lorem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
                date: "01.06.2023",
                imageUrl: "https://raw.githubusercontent.com/berzhavycha/StethoProject/main/profile3.jpg",
                parentId: null
            }
        ],
        rooms: "[   {     \"title\": \"Standard Single Room\",     \"price\": 240,     \"capacity\": 2,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Deluxe Room\",     \"price\": 340,     \"capacity\": 5,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   },   {     \"title\": \"Signature Room\",     \"price\": 440,     \"capacity\": 3,     \"amenties\": [       {         \"icon\": \"fa-wifi\",         \"text\": \"Free Wi-Fi\"       },       {         \"icon\": \"fa-bed\",         \"text\": \"2 Singal Beads\"       },       {         \"icon\": \"fa-shower\",         \"text\": \"Shower and Bathtub\"       },       {         \"icon\": \"fa-wheelchair\",         \"text\": \"Wheelchair Friendly\"       }     ],     \"imageUrl\": \"https://raw.githubusercontent.com/berzhavycha/StethoProject/main/blog-1.jpg\"   } ]",
        stars: "4",
        location: "United States",
        area: "south"
    }
]



describe('HotelDetail', () => {
    beforeEach(() => {
        server.use(
            rest.get(`*`, (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            ),
        );

        renderWithWrapper(['/hotels/7'], store)
    })

    test('should render HotelDetail component and overview tab as a initial tab', async () => {
        await waitFor(() => {
            expect(screen.getByRole('heading', { level: 1, name: 'Hotel Valle' })).toBeInTheDocument()
            expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument()
        })
    })

    test('should change tabs from initial to another', async () => {
        await waitFor(async () => {
            expect(screen.getByRole('heading', { level: 2, name: 'Overview' })).toBeInTheDocument()
            await userEvent.click(screen.getByRole('button', { name: 'Reviews' }))
            expect(screen.getByRole('heading', { level: 2, name: 'Reviews' })).toBeInTheDocument()
        })
    })

})