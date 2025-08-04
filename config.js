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
            description: '<i>"Instruments of a Beating Heart"</i>, a documentary that follows a year in the life of a Japanese public elementary school, was nominated for Best Documentary Short at the 2025 Academy Awards. Although it did not receive the award, the film attracted international attention.',
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
            description: 'The documentary depicts how six-year-old children adapt to school life—learning to clean, walk quietly through hallways, and raise their hands in class. In an interview, the director suggested that Japan’s reputation for being both diligent and susceptible to peer pressure may have its roots in early school routines.',
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
            description: 'The orderly school life portrayed in the documentary is gradually disappearing from everyday life in Japan. The country is among those experiencing the most rapid decline in birthrate. The number of elementary school students, aged 6 to 12, has fallen to around six million—half its peak. It is not uncommon for elementary schools to have fewer than ten students.',
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
            description: 'Japan’s Ministry of Education regularly publishes data on the location of all <span class="highlight-red"> elementary schools </span> and their enrollment figures. <br><br> Using the 2023 dataset, I calculated the average number of students per school in each municipality. Extremely small schools result in higher per-student maintenance costs, placing a financial burden on local governments.',
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
            description: 'The results are visualized on a map, with red highlighting municipalities where the average number of students per school is below 100. The analysis found that approximately 20 percent of Japan’s roughly 1,900 municipalities fall into this category. <br><br> <img src="./Graphs_and_Maps/Legend.png">',
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
            description: 'Several municipalities within 50 kilometers of central Tokyo have an average of more than 600 students per elementary school.',
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
            description: 'In Tokyo’s waterfront districts, a recent surge in high-rise apartment construction has driven rapid population growth. To address classroom shortages, some schools have been forced to build additional facilities on limited plots of land.',
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
            description: 'The Tohoku region, located north of Tokyo, is one of the fastest-aging areas in Japan. Its Pacific coast was severely damaged by the March 2011 earthquake and tsunami, accelerating both population decline and economic deterioration.',
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
            description: 'To reduce costs, many shrinking towns have closed or consolidated <span class="highlight-red"> elementary schools. </span> Red dots on the map represent school locations as of 2023. In the Tohoku region, the number of schools fell to 1,667—a decrease of 388 from 2013.',
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
            description: 'For this analysis, areas located more than four kilometers from the nearest elementary school were defined as <span class="highlight-brown"> “hard-to-access zones.” </span> Their share within the Tohoku region was then calculated. In 2013, 48 percent of the region had no school within four kilometers.',
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
            description: 'By 2023, that figure had risen to 56 percent. In a number of municipalities, <span class="highlight-brown"> hard-to-access zones </span> cover more than 90 percent of the total area.',
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
            description: '<img src="./Graphs_and_Maps/Kitaakita_city_satellite.png"> <br><br> Kita-Akita City in Akita Prefecture, located on the Sea of Japan coast, had 13 elementary schools in 2013, but only seven remained by 2023. That year, the city’s southernmost school was closed, forcing nearby children to attend a more distant school—up to a five-hour walk away.',
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
            description: 'Address data for approximately 1,000 <span class="highlight-blue"> classrooms </span> operated by Japan’s largest cram school chain were collected by scraping the company’s website. After geocoding the data, the locations were visualized as blue dots on the map. <br><br> The company has been closing locations in regional cities where <span class="highlight-red"> public schools </span> are disappearing, while accelerating its expansion into major urban centers such as Tokyo and Osaka. <br><br> This shift has raised concerns that the education gap — disparities in access to educational opportunities based on where people live — may continue to widen.',
            location: {
                center: [138.59869, 36.07701],
                zoom: 5.70,
                pitch: 50,
                bearing: -10
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
            description: 'The closure of schools also raises concerns about disaster preparedness, as school buildings often serve as evacuation shelters during earthquakes. Since 2000, Japan has experienced more than 160 <span class="highlight-yellow"> earthquakes </span> with strong seismic shaking.',
            location: {
                center: [138.59869, 36.07701],
                zoom: 5.70,
                pitch: 50,
                bearing: -10
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
            description: 'Preserving schools as centers for both education and disaster response presents a significant challenge for local governments across Japan.',
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