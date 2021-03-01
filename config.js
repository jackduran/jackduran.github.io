var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v11',
    accessToken: 'pk.eyJ1IjoiamFja2R1cmFuIiwiYSI6ImNrbG93OXVobTA3c3Mydm1tZWI3Y3hnajUifQ.DKkhIm2r4wePWQcA09RrKw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'mexicoseesaw',
            alignment: 'left',
            hidden: false,
            title: 'Artists Briefly Bridge US-Mexico Border',
            image: './path/to/image/source.png',
            description: 'In a rare moment of celebration at the US-Mexico border: children from both countries played together on pink seesaws straddling the steel border fence separating El Paso, Texas, and Juárez, Mexico. The almost surreally joyous scene was a temporary art piece titled Teeter-Totter Wall, meant to foster a sense of unity between the two nations. The art project, which has been a media sensation, is the work of architecture studio Rael San Fratello, a partnership between San Jose State interior design faculty member Virginia San Fratello and UC Berkeley architecture professor Ronald Rael, author of the 2017 book Borderwall as Architecture: A Manifesto for the U.S.-Mexico Boundary. Read More: www.jack-duran.com',
            location: {
                center: [-104.70429, 30.20707],
                zoom: 19.04,
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
            id: 'calhouncounty',
            alignment: 'right',
            hidden: false,
            title: 'Organizer Infiltrates ICE Facility',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-85.00456, 42.24652],
                zoom: 11.13,
                pitch: 45.00,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
