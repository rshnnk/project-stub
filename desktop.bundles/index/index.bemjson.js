({
    block: 'page',
    title: 'Test Task',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: 'index.min.css' },
        { elem : 'js', url : 'https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js' }
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    content: [
        {
            block: 'head',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'logo',
                        content:[
                            {
                                block: 'image',
                                attrs: { src: 'https://lh5.googleusercontent.com/xQZ6Eyh27Tnn0V6J0ERfu-GeWEzUrCTK4S_Z-WwVDIB7PqQ39GcvGqMbxxI81IcmHh3WftjVpN3Pqx8=w1277-h561' }
                            }
                        ]
                    },
                    {
                        block: 'right',
                        content: [
                            {
                            block: 'manager-name',
                            content: 'Вероника Ростова'
                            },
                            {
                                block: 'manager-job',
                                content: 'Менеджер по продажам',
                            },
                            {
                                block: 'slogan-wrapper',
                                content: 'Подберу для вас самые лучшие предложения. Мои услуги абсолютно бесплатны'
                            }
                        ]
                    }
                ]
            }
        },
        {
            block: 'main',
            content: [
                {
                    block: 'rating-wrapper',
                    content:[
                        {
                            block: 'rating-inner',
                            content: [
                                {
                                block:'rating-title',
                                content: 'Услуги'
                            },
                                {
                                    block: 'rating-content',
                                    content:[
                                        {
                                            block: 'bar',
                                            content: [{
                                                block: 'inner',
                                                elem: 'green',
                                                content: 'Ручное бронирование'
                                            },
                                                {
                                                    block: 'count',
                                                    content: '11'
                                                }]
                                        },
                                        {
                                            block: 'bar',
                                            content: [{
                                                block: 'inner',
                                                elem: 'blue',
                                                content: 'Пакетные туры'
                                            },
                                                {
                                                    block: 'count',
                                                    content: '3'
                                                }]
                                        },
                                        {
                                            block: 'bar',
                                            content: [{
                                                block: 'inner',
                                                elem: 'blue',
                                                content: 'Отели'
                                            },
                                                {
                                                    block: 'count',
                                                    content: '1'
                                                }]
                                        }
                                    ]
                                },
                                {
                                    block: 'bar-summ',
                                    content: [{
                                        block: 'inner',
                                        content: 'Всего'
                                    },
                                        {
                                            block: 'count',
                                            content: '15'
                                        }]
                                }
                            ]
                        },

                    ]
                },
                {
                    block:'reviews',
                    content: [
                        {
                            block: 'reviews-head',
                            content: [
                                {
                                    block: 'left',
                                    content:[
                                        {
                                            elem: 'last-reviews',
                                            content: 'Последние отзывы'
                                        },
                                        {
                                            elem: 'all-reviews',
                                            content: 'Все отзывы'
                                        }
                                    ]
                                },
                                {
                                    block: 'right',
                                    content: [
                                        {
                                            elem: 'likes',
                                            content: '131'
                                        },
                                        {
                                            elem: 'comments',
                                            content: '14'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            block: 'comment',
                            content: [
                                {
                                    block: 'name',
                                    content: 'Самуил'
                                },
                                {
                                    block: 'date',
                                    content: '13 октября 2011'
                                },
                                {
                                    block: 'comment-wrapper',
                                    content: 'Привет, Верунь! ниче себе ты такая крутая, фотка класс!!!'
                                }
                            ]
                        },
                        {
                            block: 'comment',
                            content: [
                                {
                                    block: 'name',
                                    content: 'Лилия Семеновна'
                                },
                                {
                                    block: 'date',
                                    content: '14 октября 2011'
                                },
                                {
                                    block: 'comment-wrapper',
                                    content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент, это и есть всемирно известный центр огранки алмазов и торговли бриллиантами?'
                                }
                            ]
                        },
                        {
                            block: 'comment',
                            content: [
                                {
                                    block: 'name',
                                    content: 'Лилия Семеновна'
                                },
                                {
                                    block: 'date',
                                    content: '13 октября 2011'
                                },
                                {
                                    block: 'comment-wrapper',
                                    content: 'Вероника, здравствуйте! Есть такой вопрос: Особый вид куниц жизненно стабилизирует кинетический момент?'
                                }
                            ]
                        }
                    ]
                },
                {
                    block: 'add-comment',
                    content: {
                        block: 'comment-inner',
                        content: [
                            {
                                block: 'input',
                                type: 'text',
                                name: 'text'
                            },
                            {
                                block: 'button',
                                type: 'submit',
                                content: 'Написать консультанту'
                            }
                        ]
                    }
                }
            ]
        }
    ]

})