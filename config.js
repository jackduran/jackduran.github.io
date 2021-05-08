var config = {
    style: 'mapbox://styles/duraj183/ckoddjc8m0xcz17o5txk83dwx',
    accessToken: 'pk.eyJ1IjoiZHVyYWoxODMiLCJhIjoiY2tvY2t5M3c1MDZ5YTJ4cW9idHczZmpwayJ9.QW4k4sikwxvk0tcp0GE0xg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: true,
    title: 'How Race TRavels: THE MIGRATORY RACIAL AFFECTS OF DOMINICAN MIGRATION to New York City',
    subtitle: 'by Jack Duran',
    byline: 'From early forced movements of slave trade in the 18th and 19th century, to voluntarily and economically driven movements in the past century, Dominicans have in been constant migration since before the founding of the Dominican Republic. Today, Dominicans comprise the largest immigrant group in New York City, with New York City being dubbed “Little Dominican Republic.” And, though these migrations are often spurred by desire for economic mobility and opportunity, less studied is how the racial affects of Dominicans also migrate with them. These migratory racial affects which migrate with Dominicans from a country with a complex racial history to a country where race is delineated alongside a clear oppositional binary between white and Black complicate not only American’s own understanding of race, but also Dominicans’. This piece explores the ways in which complex Dominican conceptions of race and identity are forcibly simplified and slotted into the American racial binary once they migrate to the U.S. — how, in their migration to the U.S, their racial identity transforms, inducing a state of identity crisis.',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Santo Domingo: The Birth of the Transatlantic Slave Trade',
            image: 'images/Columbus_Taking_Possession.jpg',
            description: 'Often overlooked in studies about the origins and migration patterns of transatlantic slavery is that present-day Dominican Republic, formerly the Spanish colony of La Española and Santo Domingo and where Christopher Columbus landed on his voyage of 1492, is where the first Black Africans arrived and were enslaved in the Americas. These were the first Black people in the Western Hemisphere. This is where transatlantic slavery began. It ushered in, as Silvio Torres-Saillant (2010) argues, “a social and demographic history that would lead in the course of five centuries to the overwhelming presence of people of African descent in the Dominican Republic today.” What is more, this social and demographic history would come to travel with Dominicans wherever they migrate, especially New York City, where a dotted line can be drawn between 20th and 21st century Dominican migration to the U.S. and the very first Middle Passage that inaugurated the transatlantic slave trade.',
            location: {
               center: [-71.15149, 18.93451],
               zoom: 7.40,
               pitch: 0,
               bearing: 0.00
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
            id: 'Sevilla',
            alignment: 'left',
            hidden: false,
            title: 'The First African Slave Sent to the "New World"',
            image: '',
            description: 'As early as 1502, a decade after Christopher Columbus’ arrival on Ayiti or Kiskeya — the indigenous Taino names for what Columbus called La Española or Hispaniola — a Sevillian merchant, Juan de Cordoba, sent his African slave the island of Hispaniola. Historical records show that this enslaved person is the first recorded African enslaved person in the Americas.',
            location: {
                center: [-6.03473, 37.37724],
                zoom: 12.26,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: 'Senegal',
            alignment: 'right',
            hidden: false,
            title: 'The Systematic Transportation of African Slaves Begins',
            image: '',
            description: 'While in the early 1500’s only to three African enslaved people were permitted to be transported to Santo Domingo by the Spanish authorities, after 1510, Spain authorized the systematic transportation of African slaves to Santo Domingo, five years after the first recorded sugar cane was grown in what would become the seat of the Spanish empire in the “New World.” The first captive Africans in the “New World” were brought from Senegal and The Gambia as slaves to Santo Domingo, the capital of the Dominican Republic, what Silvio Torres-Saillant (2010) calls “the cradle of blackness in the Americas” (2).',
            location: {
                center: [-14.02899, 14.41771],
                zoom: 7.33,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
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
            id: 'santodomingo',
            alignment: 'right',
            hidden: false,
            title: 'The Cradle of Slavery, The Cradle of Blackness in the "New World"',
            image: 'images/03087002.jpg',
            description: 'The Black ancestors of today’s Dominicans were the first to be forcibly migrated to the Western Hemisphere as part of the transatlantic slave trade, and subsequently were the first to revolt against slavery as soon as they landed in Santo Domingo. It is here where, as Torres-Saillant notes, both the colonial plantation and New World African slavery were inaugurated. But, it also here where Black resistance in the “New World” was born. Indeed, Torres-Saillant says, “the hemisphere’s first black slave insurrection took place on December 27, 1522.”',
            location: {
                center: [-69.89079, 18.47097],
                zoom: 12.22,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'hispaniolaborderout',
            alignment: 'left',
            hidden: false,
            title: 'One Island. Two Worlds.',
            image: '',
            description: 'Beginning in 1660, when the French assumed control of the western third of Hispañola with Saint Dominique (modern-day Haiti), with Spain in control of the eastern two-thirds with Sant Domingo (modern-day Dominican Republic), the constructed border that spliced this island in two ushered enabled the bifurcation of the social and demographic history of this island.',
            location: {
                center: [-72.31387, 18.67458],
                zoom: 8.32,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'hispaniolaborderin',
            alignment: 'left',
            hidden: false,
            title: 'A Border Installed to Prevent Racial Migration and the Construction of Race Along Spatial Lines',
            image: 'images/haiti_dominicanrepublic_border.jpg',
            description: 'Beginning in 1660, when the French assumed control of the western third of Hispañola with Saint Dominique (modern-day Haiti), with Spain in control of the eastern two-thirds with Sant Domingo (modern-day Dominican Republic), the constructed border that spliced this island in two ushered enabled the bifurcation of the social and demographic history of this island. Not only did this border work to prevent the migration, especially of African slaves, between the colonies, but it also worked to ensure that slavery could be more efficiently managed and sustained in a divided and parceled island. Unification of the island, between the French Saint Dominique and the Spanish Santo Domingo, in other words, was desired by Black slaves on the island to be able to completely expel colonial forces from the island. Spanish colonists on the eastern end of the island, in Santo Domingo, particularly the white and the increasingly mulatto population, as a result viewed Haiti and Haitian migration across this border as a profound threat not only to the political and social organization of what is now Dominican Republic, but also to its racial makeup.',
            location: {
                center: [-71.96036, 18.94555],
                zoom: 9.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'borderout',
            alignment: 'right',
            hidden: false,
            title: 'The Promise and the Threat of Island Unification',
            image: '',
            description: 'Beginning in 1660, when the French assumed control of the western third of Hispañola with Saint Dominique (modern-day Haiti), with Spain in control of the eastern two-thirds with Sant Domingo (modern-day Dominican Republic), the constructed border that spliced this island in two ushered enabled the bifurcation of the social and demographic history of this island. Not only did this border work to prevent the migration, especially of African slaves, between the colonies, but it also worked to ensure that slavery could be more efficiently managed and sustained in a divided and parceled island. Unification of the island, between the French Saint Dominique and the Spanish Santo Domingo, in other words, was desired by Black slaves on the island to be able to completely expel colonial forces from the island. Spanish colonists on the eastern end of the island, in Santo Domingo, particularly the white and the increasingly mulatto population, as a result viewed Haiti and Haitian migration across this border as a profound threat not only to the political and social organization of what is now Dominican Republic, but also to its racial makeup.',
            location: {
                center: [-71.10588, 18.67458],
                zoom: 8.32,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'borderout',
            alignment: 'center',
            hidden: false,
            title: 'Dominican National Identity is Formed in Rejection of Haitian Invasion & the Threat of Blackness it Represents',
            image: '',
            description: 'Edward Paulino (2006) argues, “The 1791 slave revolt in Saint Domingue (present-day Haiti) terrified slave-owning societies throughout the Americas. No society felt the repercussions of this tumultuous political upheaval more than the Spanish colony of Santo Domingo, on the eastern end of the island of Hispaniola.” By 1801, amid the Haitian revolutionary war for independence from France, Toussaint L’Ouverture captured Santo Domingo to expand his sphere of control and unify the island. However, with the threat of a French invasion looming, he returned to Saint Dominique where independence would subsequently be achieved in 1804. Santo Domingo returned to Spanish control in 1809, but with fears of a French incursion being planned from the eastern side of the island in Santo Domingo, Haitian president Jean-Pierre Boyer invaded Santo Domingo again in 1822 with the intent of unifying the island to oppose a future European invasion and the restoration of slavery on the island. However, these Haitian efforts to unify the island were seen by the white and mulatto populations of Santo Domingo as an existential threat and marked the beginning of future Dominican antipathy toward Haiti, which sparked a war for Dominican independence in February 1844. Indeed, the Dominican Republic is the only country in the Americas to have gained its independence from another former colony: Haiti.',
            location: {
                center: [-71.10588, 18.67458],
                zoom: 8.32,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'borderout',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'images/independencia-republica-dominicana-660x330.jpg',
            description: 'The image above displays one of the Dominican Republic’s foremost founding fathers, akin to George Washington, planning war against Haitian occupation. We can see how the composition of the painting, and the white Dominicans leading this campaign in it, portrays Dominican independence in the same light as American independence — giving this independence war racial overtones that signified an almost cosmic battle between the Europeanness that the Dominicans sought to preserve and the Africanness of Haiti that they sought to repel and banish. This island, like this war, was and still is battleground between two worlds: one which seeks to repel European colonialism and the other which is nostalgic for it. In fact, in the decades following the war, the new Dominican government, under threat of Haitian invasion, requested to be annexed by the U.S. to protect itself from Haiti. United States President Ulysses S. Grant proposed annexing Santo Domingo to the U.S. as a protectorate in 1869, with the promise of eventual statehood, but the effort failed in Congress because legislators opposed granting statehood to a people of mixed-race. However, the effort to find protection from Haitians, former slaves, with the U.S. points to the formation of a collective deracialized identity and mentality among the mixed population of the Dominican Republic that enabled them, and still do, to identify themselves in contrast to Haitians and the threat of a unified Black sovereignty on this island. Dominican Independence Day today, which is celebrated annually with much fervor and pomp and circumstance from the Dominican Republic to the massive parades in New York City, marks the day that the Dominican Republic declared its independence from Haiti. Paulino argues, “What Haitians called ‘unification’ was designed to protect their country from re-enslavement. But the Spanish colonists (particularly the white and mulatto slave owners) on the eastern end of the island saw it as an invasion.” And, it was this expulsion of the Haitians in 1844 that, Paulino argues, became the seed of Dominican nationhood and identity and which would be manipulated by the country’s elite for centuries to cast Haitians as invaders and Haitian migration as an invasion. Indeed, as Paulino notes, “From its inception, then, the Dominican nation (particularly as constructed by its elites) has literally been based on the rejection of Haiti.”',
            location: {
                center: [-71.10588, 18.67458],
                zoom: 8.32,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },


        {
            id: 'parsleymassacre',
            alignment: 'left',
            hidden: false,
            title: 'Rio Dabajon: The Massacre River',
            image: 'images/img_4368.jpg',
            description: 'No where in modern Dominican-Haitian identity and race relations is this violent anti-Haitianism more egregious than in the 1937 massacre of Haitians by the white supremacist dictatorial regime of Rafael Trujillo, who, spreading propaganda on the invasion of Haitian migration, modeled his racial policies and shaped Dominicans’ racial imaginaries and identities after American and Nazi Germany racial and eugenic policies. 1937 massacre, also called the “Parsley Massacre,” was the result of a systematic violent expulsion of Haitians from the country. In this case, people suspected of being Haitians because of their Black skin were lined up on the border. Dominican soldiers held parsley stems up and demanded they pronounce the Spanish word for parsley: “perejil.” Because “Rs” in Spanish are rolled, if Haitians, because of their French Creole, could not properly pronounce the word, they would be executed on the spot. This not only occurred along the border, but throughout the country as well.',
            location: {
               center: [-71.70289, 19.50899],
               zoom: 14.20,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'parsleymassacre2',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: 'With estimates of civilian deaths from 4,000 to 35,000, it was a racial purge — what Paulino says is “arguably one of the most egregious genocidal massacres in the Western hemisphere in the twentieth century.” Paulino further notes the implications this massacre has had not only on current state of affairs, but also in the mindsets and identities of Dominicans where such a massacre is often justified. He argues, “Dominicans believe that they should not be held accountable for this brutal act. Moreover, during the recent wave of deportations, many Dominicans, in numerous conversations, eerily and nostalgically recalled the 1937 massacre as a valid response to the overwhelming and unwanted Haitian presence in their country. The failure to apologize and publicly assume responsibility for the massacre has left an anti-Haitian legacy whereby the political exclusion and physical removal of Haitians from the Dominican nation is generally justified and condoned.”',
            location: {
               center: [-71.65844, 19.47973],
                zoom: 12.00,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'border',
            alignment: 'center',
            hidden: false,
            title: '',
            image: 'images/7d6d76c3-ddea-4484-b8cb-a71d3002dc8b.jpg',
            description: '',
            location: {
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'trujillo',
            alignment: 'right',
            hidden: false,
            title: 'The Boss, the Colonial Zone, & Dominican Colonial Nostalgia',
            image: 'images/rafael-trujillo.jpg',
            description: 'The Dominican-Haitian border, because of its significance in maintaining racial imaginaries of the colonial era, has since its construction been the source of Dominican identity construction. Indeed, Paulino has argued, “Because of its remoteness and the state’s inability to control the region the border became a laboratory for the application of national identity policies and a political and economic catalyst in the development of Hispaniola.” The border was used by Trujillo — who was called “El Jefe” or “The Boss” — as a necro-political eugenic laboratory whose technological function was and is to filter the racial makeup of Dominican society, much in the same way Nazi death camps were laboratories, as Nadège Veldwachter (2020) points out. And these laboratorial experiments were planned from the Presidential Palace in the nation`s capital, the former seat of Spanish imperial power and the birthplace of transatlantic slavery, in what is today called "La Zona Colonial" or the "Colonial Zone" of the capital, Santo Domingo. Furthermore, Veldwachter argues, “[T]he rhetorical similarities between Dominican and Nazi propaganda used during World War II to construct Haitians and Jews as Others to be excluded from the process of national formation in Europe and the Caribbean.” Furthermore, she points out parallels between Dominicans’ rationalization of the 1937 massacre of Haitians and the genocide of European Jewry during the Holocaust, and that “both discourses resonated with German and Dominican nation-state ideals embedded in comparable theories about race, economic growth, and culture.” These ideals were and are embedded in colonial mentalities that work to reproduce the colonial laboratories of the past in the present.',
            location: {
             center: [-69.88497, 18.46937],
                zoom: 14.77,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'lighthouse',
            alignment: 'right',
            hidden: false,
            title: 'The Lighthouse to Columbus',
            image: 'images/Santo_Domingo.El_Faro_a_Colón.20170402.jpg',
            description: 'No monument to Dominicans’ colonial nostalgia, and their consideration of Spain, rather than Africa, as the motherland, is more evident than the massive Faro a Colon, Spanish for Lighthouse to Columbus. Inaugurated in 1992, in celebration of Columbus’ 1492 voyage to Santo Domingo, in this very “colonial zone,” the Lighthouse is a massive building shaped like cross. Like an upright cross whose verticality signals towards the sky, the heavens, the verticality of the cross that this building represents points eastward toward the motherland, Spain, where beams of light from the building, reproducing the semiotics of a colonial lighthouse, are projected toward Europe. The sanctification of Columbus, and thus whiteness, in Dominican imaginaries, which is also reflected in the center emblem of the country’s flag, is further reflected in the fact that the lighthouse, which is functions like a cathedral, is said by Dominican authorities to house the Columbus’ remains. Although Spanish authorities have refuted this, Dominican authorities have refused to allow any DNA tests on the remains — indicating how much Dominican identity hinges on and yearns for the racial imaginaries embodied in Columbus and whiteness vis a vis the Blackness that Haitianness and Africanness represents.',
            location: {
                center: [-69.86568, 18.47659],
                zoom: 16.00,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'montecristi2',
            alignment: 'left',
            hidden: false,
            title: 'Undoing Blackness & Reversing Middle Passage',
            image: 'images/Monte_Cristi,_Coastline.JPG',
            description: 'Michele Wucker (1999), says, “Trujillo`s men searched the houses and estates of the region one by one, rounding up Haitians and initiating deportation proceedings against them; once the paperwork was done, the Dominican government had `proof` that the Haitians had been sent back to Haiti. The Haitians then were transported like cattle to isolated killing grounds. The soldiers slaughtered them at night, then carried the corpses to the Atlantic Ocean, at the customs port in Montecristi, and threw the bodies to the sharks. For days, the waves carried uneaten body parts until they washed up on the beaches.” We can see how the colonial laboratories of the transatlantic slave trade are reproduced within Dominican society in the mid-twentieth century. The corpses and body parts of Haitians thrown into The Atlantic, to the sharks, washing up on the beach, evokes the semiotics of the slave ship and of Middle Passage where Black people would be thrown off the slave ship into the Atlantic, to be swallowed by the waves and the sharks. The semiotics of discarding Haitians off of the Montecristi port, a historical colonial port, as if to undo or reverse the entry of African Blackness onto this island centuries ago, is significant. Wucker further illustrates the colonial nostalgia for white sovereignty over Hispaniola, saying, “Often, the soldiers did not even bother with the charade of covering up their crimes. Entire families were mutilated in their homes. For Haitians away from their homes, in the streets or in the fields, the soldiers applied a simple test. Since Haitians are considerably darker than most Dominicans, soldiers would accost a man or woman with dark skin.”',
            location: {
                center: [-71.71477, 19.86381],
                zoom: 11.66,
                pitch: 45.00,
                bearing: -0.08
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'restrictedimmigration',
            alignment: 'center',
            hidden: false,
            title: 'Discriminatory Immigration Policies, the Jewish Open Door, & the Lightening of the National "Complexion"',
            image: 'images/705255.jpg',
            description: 'While Trujillo’s oppressive and violent immigration policies and discourses against Haitians were modeled after Nazi policies and discourses, his immigration policies were also characterized by an open-door policy that favored white immigrants. One of the foremost examples of this is the Dominican government’s acceptance of European Jews fleeing the Holocaust (as shown in the image above), when other countries were not willing to open their doors to them (Veldwachter 2020). The Trujillo government used this open-door policy to signal that the Dominican government was committed to humanitarianism and protecting political refugees and migration, but this is starkly contrasted against the brutal treatment of Haitians by Dominicans on the basis of race. In other words, the Dominican government had a closed door policy toward Black migration — which it associates with Haitian invasion — and an open door policy toward white migration. In the 1930s and 1940’s, this was reflected in Dominicans’ openness to Jewish migration, today this is reflected in white American and European tourism and vacationing. The irony is that the same tactics that Nazis used to exterminate Jews and which Jews were fleeing from, were actively being used by Dominicans on Haitians, while accepting 100,000 Jews to the country (Margolis 2018). At the same time, the Trujillo government imposed strict restrictions on outward immigration by Dominicans. With its borders as a laboratory, these immigration policies where designed to incubate the Dominican Republic as a eugenics experiment. Although Trujillo signaled that his government’s acceptance of Jews to the Dominican Republic was humanitarian in nature, his immigration policies were designed to prevent Dominicans from leaving, while absorbing Jewish European refugees, in order to facilitate the further lightening of the “complexion” of the mixed Dominican population, in the same way Spanish colonists mixed with African slaves centuries before, while at the same time purging Haitians, and thus Blackness, from the country.',
            location: {
                center: [-71.01088, 18.51331],
                zoom: 7.74,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'legacy',
            alignment: 'left',
            hidden: false,
            title: 'An Enduring Legacy',
            image: '',
            description: 'Stories across Dominican communities illustrate how darker-skinned Dominicans had to take active steps to not be perceived as Haitian, and thus Black, to avoid government targeting and execution — hair straightening, skin whitening, lighter-skinned spouses preferred, for instance. These practices undertaken by darker-skinned Dominican populations potentially subject to state terrorism, though many might ascribe them as a blanket rejection of Blackness, are actually more complex than this. These whitening practices were undertaken as survival in a society where to be perceived as Black was to be perceived Haitian and therefore executed. It partly sheds light on why Dominicans, for the most part, do not identify as African-descended or Black. The legacy of racial targeting in this era has shaped Dominican racial imaginaries and racial affects for decades that still are ingrained in the mindsets of Dominicans, still haunt them, still shape their behavior, These racial affects and identities developed partly out of collective trauma from this white supremacist racial terror, which continues today, migrate with Dominicans wherever they go, including, and most especially, in New York City.',
            location: {
                center: [-72.46230, 18.83588],
                zoom: 7.10,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'earlyimmigration',
            alignment: 'right',
            hidden: false,
            title: 'Early Arrivals',
            image: '',
            description: 'CUNY’s Dominican Studies Institute has identified more than 5,000 Dominicans who have migrated to New York City through Ellis Island between 1892 and 1924, during a period of mostly European immigration. This period of open migration also coincides with the U.S. occupation of the Dominican Republic, which ended in 1924, as well. With the rise of Rafael Trujillo in 1930, outward Dominican migration was restricted for nearly thirty years until his assassination by CIA-backed rebels on the grounds.',
            location: {
                center: [-74.03851, 40.70031],
                zoom: 16.00,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'firstimmigration',
            alignment: 'center',
            hidden: false,
            title: 'The First Wave (1960s – 1970s): Political Migration',
            image: 'images/C-Nf-w6XoAAZjX1.jpeg',
            description: 'Though migration slowly trickled into as Trujillo’s rule weakened in the 1950’s, following his assassination in 1961 and the end of his iron fisted rule, the political situation deteriorated so much that it prompted a wave of migration to the U.S. From Trujillo’s cronies looking for revenge on the assassination of their leader to a coup d`etat that overthrew the acting president and sparked a civil war, the political instability of this climate prompted many Dominicans — particularly those fleeing political repression — to migrate to the U.S. en masse (Haggerty 1989). With the U.S. intervention into the civil war in 1965, and the passage of the U.S. Immigration and Nationality Act of 1965, which opened entry to the U.S. to immigrants other than European groups, Dominican migration exponentially accelerated in the following decade. The first wave of Dominican migration to mostly the New York City area, the Migration Policy Institute says, was composed of well-off individuals, as well as people from urban and small-town middle and lower-middle classes. In 1960, the Dominican population in the U.S. was at 12,000, according to the Migration Policy Institute. By 1980, there were 169,000 Dominicans in the U.S., primarily in the New York City area. This first mass wave created community networks in the U.S. that assisted the future arrivals of more Dominican immigrants.',
            location: {
                center: [-74.10269, 40.72447],
                zoom: 10.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'secondimmigration',
            alignment: 'left',
            hidden: false,
            title: 'The Second Wave (1980s – 1990s): Economic Migration',
            image: '',
            description: 'As economic and political instability continued during this transition period, faced with high unemployment and inflation, Dominicans, mostly from the lower-class. Arriving during the Latin American debt crisis of the 1980s, the Migration Policy Institute says, that these migrants in this wave consisted of the very poor and members of the professional class, half of whom, the Institute notes, have been women. By 1990, the number of Dominicans in the U.S. doubled to 348,000. By 2000, the number of Dominicans in the U.S. stood at 688,000.',
            location: {
                center: [-73.92124, 40.75368],
                zoom: 11.31,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'thirdimmigration',
            alignment: 'right',
            hidden: false,
            title: 'The Third Wave (2000 – 2016): New York City Becomes "Little Santo Domingo"',
            image: 'images/image-14.jpeg',
            description: '',
            location: {
                center: [-73.91228, 40.84080],
                zoom: 13.30,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        
        {
            id: 'migratoryaffects',
            alignment: 'center',
            hidden: false,
            title: 'Dominican Migratory Racial Affects: How Race Travels, Is Disoriented, and Tranformed Upon Migration to the U.S.',
            image: '',
            description: '',
            location: {
                center: [-74.23580, 40.73411],
                zoom: 9.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'holdingon',
            alignment: 'left',
            hidden: false,
            title: 'On the One Hand, Dominicans Hold Onto Deracialized Identities as Possibilities of Being in a Society Racist Against Them',
            image: '',
            description: '',
            location: {
                center: [-74.23580, 40.73411],
                zoom: 9.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'solidarity',
            alignment: 'right',
            hidden: false,
            title: 'On the Other Hand, Their Descendants Assume Racialized Identities in the U.S. as Possibilities for Black Solidarity in a Racist Society',
            image: '',
            description: '',
            location: {
                center: [-74.23580, 40.73411],
                zoom: 9.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'conclusion',
            alignment: 'center',
            hidden: false,
            title: 'CODA',
            image: '',
            description: '',
            location: {
                center: [-74.23580, 40.73411],
                zoom: 9.84,
                pitch: 45.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },

       
    ]
};
