import { screen, waitFor } from '@testing-library/react'
import { renderWithProviders, renderWithWrapper } from '../../utils'
import { store } from '../../app/store'
import userEvent from '@testing-library/user-event'
import { server } from '../../mock/api/server'
import { rest } from 'msw'


const filterBlogs = async (filterName, preFilteredLength, postFilteredLength, isCategory) => {
    expect(screen.getAllByTestId('blog')).toHaveLength(preFilteredLength)
    await userEvent.click(screen.getAllByRole('link', { name: filterName })[isCategory ? 0 : 1])
    expect(screen.getAllByTestId('blog')).toHaveLength(postFilteredLength)
}


describe('BlogSingal', () => {
    beforeEach(async () => {
        const apiData = [
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
                        author: 1,
                        date: "01.02.2023",
                        stars: 5,
                        parentId: null,
                        reactions: {
                            thumbsUp: 5,
                            dislike: 7,
                            angry: 3,
                            fire: 1,
                            coffee: 4
                        }
                    },
                    {
                        id: 2,
                        imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile4.jpg",
                        text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
                        author: 5,
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
                        author: 5,
                        date: "01.02.2023",
                        stars: 2,
                        parentId: null,
                        reactions: {
                            thumbsUp: 1,
                            dislike: 1,
                            angry: 1,
                            fire: 0,
                            coffee: 0
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
                        author: 5,
                        date: "01.02.2023",
                        stars: 5,
                        parentId: null,
                        reactions: {
                            thumbsUp: 5,
                            dislike: 7,
                            angry: 3,
                            fire: 1,
                            coffee: 4
                        }
                    },
                    {
                        id: 2,
                        imageUrl: "https://raw.githubusercontent.com/aberzhavych/StethoProject/main/profile4.jpg",
                        text: "Lorem ipsum dolor sit amet consectetur ipiscing elit amet consectetur piscing elitsada consectetur adipiscing elit sed et eletum. orem ipsum dolor sit amet consecteturdfhdg adipiscing elit amet consectetur piscing elit amet consectetur.",
                        author: 5,
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
                        author: 5,
                        date: "01.02.2023",
                        stars: 2,
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
                        imageUrl: "../../../public/Images/profile/profile1.jpg",
                        text: "new",
                        author: "3DhafcLv2B_AAOTvddzZE",
                        date: "25.09.2023",
                        stars: 4,
                        parentId: null,
                        id: "7CISCjrbxltMLnoEytQKE",
                        reactions: {
                            thumbsUp: 0,
                            dislike: 0,
                            angry: 0,
                            fire: 0,
                            coffee: 0
                        }
                    }
                ],
                postDate: 1689811200000
            }

        ]

        server.use(
            rest.get(`*`, (req, res, ctx) => {
                return res(ctx.json(apiData))
            }
            )
        );

        renderWithWrapper(['/blog'], store)
    })

    test('should filter blogs by category', async () => {
        await waitFor(async () => {
            await filterBlogs('Travelling', 3, 1, true)
        });
    })

    test('should filter blogs by tag', async () => {
        await waitFor(async () => {
            await filterBlogs('Development', 3, 1, false)
        });
    })

    test('should filter blogs by category and tag', async () => {
        await waitFor(async () => {
            await filterBlogs('Travelling', 3, 1, true)
            await filterBlogs('Travelling', 1, 1, false)
        });
    })

    test('should filter blogs by search', async () => {
        await waitFor(async () => {
            expect(screen.getAllByTestId('blog')).toHaveLength(3)
            await userEvent.type(screen.getByPlaceholderText('Search...'), 'the')
            expect(screen.getAllByTestId('blog')).toHaveLength(1)
        });
    })

})