import { rest } from 'msw'

export const handlers = [
  rest.get('http://localhost:3000/hotels', (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json(
      [
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
      ]), ctx.delay(30))
  }),
  rest.patch('http://localhost:3000/hotels/:hotelId', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(null), ctx.delay(30))
  }),
  rest.get('http://localhost:3000/users', (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
      {
        "fullName": "andrew",
        "email": "a@gmail.com",
        "imageUrl": "../../../public/Images/profile/profile1.jpg",
        "password": "bombamoscow1!",
        "id": 1
      },
      {
        "fullName": "andrew",
        "email": "andrew@gmail.com",
        "imageUrl": "../../../public/Images/profile/profile1.jpg",
        "password": "bombamoscow1!",
        "id": 2
      },
    ]), ctx.delay(30))
  }),

  rest.get('http://localhost:3000/blogs', (req, res, ctx) => {

    // successful response
    return res(ctx.status(200), ctx.json([
      {
        id: "1",
        column1: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        column2: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        date: "15.07.2023",
        description: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/blog-1.jpg",
        tag: "Business",
        text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.",
        title: "The Most Advanced Business Plan",
        "Two Column": "Two Column Text Sample",
        type: "Business",
        comments: [
          {
            id: 1,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile6.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null,
            reactions: {
              thumbsUp: 5,
              dislike: 5,
              angry: 3,
              fire: 1,
              coffee: 4
            }
          },
          {
            id: 2,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile4.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: 1,
            reactions: {
              thumbsUp: 0,
              dislike: 4,
              angry: 0,
              fire: 0,
              coffee: 2
            }
          },
          {
            id: 3,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile5.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null,
            reactions: {
              thumbsUp: 1,
              dislike: 1,
              angry: 1,
              fire: 0,
              coffee: 0
            }
          },
          {
            text: "new",
            date: "15.8.2023",
            stars: 4,
            parentId: 2,
            id: "ofQst4IqvpCzSR4WVw0XQ",
            reactions: {
              thumbsUp: 0,
              dislike: 0,
              angry: 0,
              fire: 0,
              coffee: 0
            }
          }
        ],
        postDate: 1689379200000
      },
      {
        id: "2",
        column1: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        column2: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        date: "20.07.2023",
        description: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/blog-2.jpg",
        tag: "Travelling",
        text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.",
        title: "Beautiful Home Page",
        "Two Column": "Two Column Text Sample",
        type: "Travelling",
        comments: [
          {
            id: 1,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile6.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null,
            reactions: {
              thumbsUp: 1,
              dislike: 2,
              angry: 1,
              fire: 1,
              coffee: 1
            }
          },
          {
            id: 2,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile4.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: 1,
            reactions: {
              thumbsUp: 1,
              dislike: 2,
              angry: 0,
              fire: 0,
              coffee: 0
            }
          },
          {
            id: 3,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile5.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null,
            reactions: {
              thumbsUp: 0,
              dislike: 0,
              angry: 1,
              fire: 1,
              coffee: 0
            }
          },
          {
            text: "some comment",
            date: "14.8.2023",
            stars: 4,
            parentId: 2,
            id: "SNR9GAZkepHzAlg_6NUwn",
            reactions: {
              thumbsUp: 2,
              dislike: 1,
              angry: 1,
              fire: 0,
              coffee: 0
            }
          },
          {
            imageUrl: null,
            text: "the comment",
            date: "14.8.2023",
            stars: 4,
            parentId: 1,
            id: "11wAw09PUHlKqZ96zuJ1z",
            reactions: {
              thumbsUp: 2,
              dislike: 2,
              angry: 4,
              fire: 3,
              coffee: 2
            }
          }
        ],
        postDate: 1689811200000
      },
      {
        id: "3",
        column1: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        column2: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet conse amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum varius dolor fermum sit amet.",
        date: "19.06.2023",
        description: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.  Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consectetur adipiscing elit amet consectetur piscing elit amet consectetur adipiscing elit sed et eletum nulla eu placerat felis etiam tincidunt orci lacus id varius dolor fermum sit amet.",
        imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/blog-3.jpg",
        tag: "Development",
        text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elit consectetur adipiscing elit sed et eletum.",
        title: "Modern Design Concept",
        "Two Column": "Two Column Text Sample",
        type: "Development",
        comments: [
          {
            id: 1,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile6.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null
          },
          {
            id: 2,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile4.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: 1
          },
          {
            id: 3,
            imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile5.jpg",
            text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
            author: "Kevin Marthin",
            date: "01.02.2023",
            stars: 5,
            parentId: null
          }
        ]
      }
    ]), ctx.delay(30))
  })
]
