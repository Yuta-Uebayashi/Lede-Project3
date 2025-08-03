var config = {
    style: 'mapbox://styles/yuta1219/cmdht4yu801es01sa3auy0v3h',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoieXV0YTEyMTkiLCJhIjoiY21iemxjbmJhMTJwdjJrcHN0NjlhdzczaiJ9.39zQw0gWyyNYPI_Fydwl6w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'light',
    use3dTerrain: false, 
    auto: false,
    title: 'Analysis of the Number of Students per Elementary School',
    subtitle: 'One in Five Municipalities Has Fewer Than 100 Students per School',
    byline: 'By Yuta Uebayashi',
    footer: 'All the code and data for this project is available on <a href="https://github.com/Yuta-Uebayashi"> GitHub </a>. <br> Photographs in this article were obtained from Nikkei. Satellite images were sourced from the Copernicus Open Access Hub.',
    chapters: [
        {
            id: 'intro1',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: '<i>"Instruments of a Beating Heart"</i>, a documentary that follows a year in the life of a Japanese public elementary school, was nominated for Best Documentary Short at the 2025 Academy Awards. Although it did not win, the film garnered global attention.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro2',
            alignment: 'center',
            hidden: false,
            title: '',
            image: '',
            description: 'The documentary shows how six-year-olds adapt to school life—learning to clean, walk quietly in hallways, and raise their hands in class. The director said in an interview that Japan’s image of being hardworking yet vulnerable to peer pressure may be rooted in early school routines. <br> <br>  <iframe width="830" height="500" src="https://www.youtube.com/embed/P9O5TcFr-zQ" frameborder="0" allowfullscreen></iframe><br> Credit: Film’s official website(https://shogakko-film.com/)',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'intro3',
            alignment: 'center',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/Japan’s Elementary Schools and Students.png',
            description: 'Japan is one of the countries experiencing the fastest decline in birthrate. <br> <br> The number of elementary school students, aged 6 to 12, has declined to around 5 million—half the peak level. As more schools close, communal school life is no longer a given in some parts of the country.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.6,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step1',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The Ministry of Education regularly publishes data on <span class="highlight-red">the location of all elementary schools</span> and the number of students. <br><br> Using 2023 data, I calculated the average number of students per school in each municipality. Very small schools mean higher maintenance costs per student, creating a burden for local governments.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.6,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'elementary-schools-2023',
                    opacity: 0.7,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementary-schools-2023',
                    opacity: 0.0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'The results are shown on a map. Red indicates municipalities with fewer than 100 students per school. My analysis found that around 20% of the roughly 1,900 municipalities fall into this category. <br><br> <img src="./Graphs_and_Maps/Legend.png">',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step3',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Several municipalities within 50 kilometers of central Tokyo have more than 600 students per school.',
            location: {
                center: [139.90920, 35.60372],
                zoom: 9.50,
                pitch: 50,
                bearing: -20.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'urben_area_50km',
                    opacity: 0.7,
                    duration: 300
                },
                {
                    layer: 'chiyoda-ku-office',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'urben_area_50km',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'chiyoda-ku-office',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step4',
            alignment: 'right',
            hidden: false,
            title: '',
            image: './Graphs_and_Maps/tokyo.bay.area.jpg',
            description: 'In Tokyo’s waterfront areas, a recent surge in high-rise apartment construction has led to rapid population growth. Some schools have been forced to add new facilities on limited land to address classroom shortages.',
            location: {
                center: [139.90920, 35.60372],
                zoom: 9.50,
                pitch: 50,
                bearing: -20.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'urben_area_50km',
                    opacity: 0.7,
                    duration: 300
                },
                {
                    layer: 'chiyoda-ku-office',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'urben_area_50km',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'chiyoda-ku-office',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step6',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'The Tohoku region, north of Tokyo, is one of the fastest-aging areas in Japan. The Pacific coast was heavily damaged by the March 2011 earthquake and tsunami, accelerating both population decline and economic downturn.',
            location: {
                center: [140.45570, 39.14821],
                zoom: 6.7,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'tohoku-map',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementarystudents-per-school_2023',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'tohoku-map',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step7',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'To cut costs, shrinking towns are closing or merging schools. <span class="highlight-red"> Red dots </span> indicate school locations as of 2023. Tohoku had 1,667 schools—down 388 from 2013',
            location: {
                center: [140.45570, 39.14821],
                zoom: 6.7,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'tohoku-map',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'elementary-schools-tohoku-2023',
                    opacity: 0.9,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'tohoku-map',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'elementary-schools-tohoku-2023',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step8',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'I defined areas located more than 4 km from the nearest school as <span class="highlight-brown"> “hard-to-access zones” </span> and measured their share in Tohoku. In 2013, 48% of the region had no school within 4 km.',
            location: {
                center: [140.45570, 39.14821],
                zoom: 6.7,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'tohoku-map',
                    opacity: 0.9,
                    duration: 300
                },
                {
                    layer: 'school-access-difficulty-area-2013',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'tohoku-map',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'school-access-difficulty-area-2013',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step9',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: 'By 2023, the share rose to 56%. In quite a few municipalities, <span class="highlight-brown"> hard-to-access zones </span> cover over 90% of the area.',
            location: {
                center: [140.45570, 39.14821],
                zoom: 6.7,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'tohoku-map',
                    opacity: 0.9,
                    duration: 300
                },
                {
                    layer: 'school-access-difficulty-area-2023',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'tohoku-map',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'school-access-difficulty-area-2023',
                    opacity: 0,
                    duration: 300
                } 
            ]
        },
        {
            id: 'step10',
            alignment: 'full',
            hidden: false,
            title: '',
            image: '',
            description: '<img src="./Graphs_and_Maps/Kitaakita_city_satellite.png"> <br><br> Kita-Akita City in Akita Prefecture, on the Sea of Japan side, had 13 elementary schools in 2013, but only 7 remained by 2023. The southernmost school closed that year, forcing nearby children to attend a distant school — as far as a five-hour walk away.',
            location: {
                center: [140.55177, 39.83581],
                zoom: 10.0,
                pitch:0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'step11',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'I scraped the website of Japan’s largest cram school chain and collected the address data of approximately 1,000 <span class="highlight-blue"> classrooms. </span> After adding latitude and longitude information, I mapped them as blue dots. <br><br> The company is closing locations in regional cities where  <span class="highlight-red"> schools </span> are disappearing and accelerating its expansion into major urban areas like Tokyo and Osaka. <br><br> This shift raises concerns that the “education gap” — differences in the quantity and quality of education depending on where people live — will continue to widen in the future.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'cram-schools',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'elementary-schools-2023',
                    opacity: 0.7,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'cram-schools',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'elementary-schools-2023',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step12',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'School closures also raise disaster concerns, as school buildings often serve as shelters during <span class="highlight-yellow"> earthquakes.</span> Since 2000, Japan has experienced over 160 earthquakes with strong shaking.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'earthquake-data',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'earthquake-data',
                    opacity: 0,
                    duration: 300
                }
            ]
        },
        {
            id: 'step13',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'Preserving schools as hubs for education and disaster response poses a serious challenge for local governments across Japan.',
            location: {
                center: [136.09650, 36.63415],
                zoom: 4.60,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
                {
                    layer: 'earthquake-data',
                    opacity: 1,
                    duration: 300
                },
                {
                    layer: 'elementary-schools-2023',
                    opacity: 1,
                    duration: 300
                }
            ],
            onChapterExit: [
                {
                    layer: 'elementary-schools-2023',
                    opacity: 0,
                    duration: 300
                },
                {
                    layer: 'earthquake-data',
                    opacity: 0,
                    duration: 300
                }
            ]
        }
    ]
};