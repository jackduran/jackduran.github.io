var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1IjoiZHVyYWoxODMiLCJhIjoiY2tvY2t5M3c1MDZ5YTJ4cW9idHczZmpwayJ9.QW4k4sikwxvk0tcp0GE0xg',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'dark',
    use3dTerrain: true,
    title: 'The Title Text of this Story',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'newjersey',
            alignment: 'left',
            hidden: false,
            title: 'New Jersey',
            image: '',
            description: 'The Garden State',
            location: {
                center: [-74.72320, 40.11608],
                zoom: 7.25,
                pitch: 45.00,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'dr',
            alignment: 'right',
            hidden: false,
            title: 'Dominican Republic',
            image: '',
            description: 'Quisqueya La Beya',
            location: {
                center: [-70.11537, 18.70583],
                zoom: 7.48,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
