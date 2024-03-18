mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpcm8tcmFyZSIsImEiOiJjbHNqNG9wdTYyaDI2MmxvMGh2d3RvcjRxIn0.a5--rPxvpO_kTz5w0TehHw';

const images = [
    { location_id: '100', landmark_name: `Times Square`, filename: `imageData/landmarks/100_Times Square.jpg` },
    { location_id: '101', landmark_name: `Queens County Farm Museum`, filename: `imageData/landmarks/101_Queens County Farm Museum.jpg` },
    { location_id: '102', landmark_name: `Dry Harbor Playground`, filename: `imageData/landmarks/102_Dry Harbor Playground.jpg` },
    { location_id: '103', landmark_name: `Statue of Liberty`, filename: `imageData/landmarks/103_Statue of Liberty.jpg` },
    { location_id: '104', landmark_name: `Ellis Island Hospital`, filename: `imageData/landmarks/104_Ellis Island Hospital.jpg` },
    { location_id: '105', landmark_name: `Hammock Grove`, filename: `imageData/landmarks/105_Hammock Grove.jpg` },
    { location_id: '106', landmark_name: `Old Stone House of Brooklyn`, filename: `imageData/landmarks/106_Old Stone House of Brooklyn.jpg` },
    { location_id: '107', landmark_name: `Flatiron Building`, filename: `imageData/landmarks/107_Flatiron Building.jpg` },
    { location_id: '108', landmark_name: `Marlboro Playground`, filename: `imageData/landmarks/108_Marlboro Playground.jpg` },
    { location_id: '109', landmark_name: `Siedenburg Park`, filename: `imageData/landmarks/109_Siedenburg Park.jpg` },
    { location_id: '10', landmark_name: `Baisley Pond Park`, filename: `imageData/landmarks/10_Baisley Pond Park.jpg` },
    { location_id: '110', landmark_name: `Great Kills Park`, filename: `imageData/landmarks/110_Great Kills Park.jpg` },
    { location_id: '111', landmark_name: `The Green-Wood Cemetery`, filename: `imageData/landmarks/111_The Green-Wood Cemetery.jpg` },
    { location_id: '112', landmark_name: `Beacon's Closet`, filename: `imageData/landmarks/112_Beacon's Closet.jpg` },
    { location_id: '113', landmark_name: `Washington Square Park`, filename: `imageData/landmarks/113_Washington Square Park.jpg` },
    { location_id: '114', landmark_name: `Washington Square Park`, filename: `imageData/landmarks/114_Washington Square Park.jpg` },
    { location_id: '115', landmark_name: `Sobel Court Park`, filename: `imageData/landmarks/115_Sobel Court Park.jpg` },
    { location_id: '116', landmark_name: `Riverbank State Park`, filename: `imageData/landmarks/116_Riverbank State Park.jpg` },
    { location_id: '117', landmark_name: `Thursby Basin Park`, filename: `imageData/landmarks/117_Thursby Basin Park.jpg` },
    { location_id: '118', landmark_name: `Greenbelt Nature Center`, filename: `imageData/landmarks/118_Greenbelt Nature Center.jpg` },
    { location_id: '119', landmark_name: `Yankee Stadium`, filename: `imageData/landmarks/119_Yankee Stadium.jpg` },
    { location_id: '11', landmark_name: `Benson Playground`, filename: `imageData/landmarks/11_Benson Playground.jpg` },
    { location_id: '120', landmark_name: `Highbridge Park`, filename: `imageData/landmarks/120_Highbridge Park.jpg` },
    { location_id: '121', landmark_name: `Emerald Playground`, filename: `imageData/landmarks/121_Emerald Playground.jpg` },
    { location_id: '122', landmark_name: `Haggerty Park`, filename: `imageData/landmarks/122_Haggerty Park.jpg` },
    { location_id: '123', landmark_name: `Kelly Park Playground`, filename: `imageData/landmarks/123_Kelly Park Playground.jpg` },
    { location_id: '124', landmark_name: `Spring Creek Park`, filename: `imageData/landmarks/124_Spring Creek Park.jpg` },
    { location_id: '125', landmark_name: `Comedy Cellar`, filename: `imageData/landmarks/125_Comedy Cellar.jpg` },
    { location_id: '126', landmark_name: `Barretto Point Park`, filename: `imageData/landmarks/126_Barretto Point Park.jpg` },
    { location_id: '127', landmark_name: `Dyckman Farmhouse Museum`, filename: `imageData/landmarks/127_Dyckman Farmhouse Museum.jpg` },
    { location_id: '128', landmark_name: `Henry Hudson Bridge`, filename: `imageData/landmarks/128_Henry Hudson Bridge.jpg` },
    { location_id: '129', landmark_name: `Travers Park`, filename: `imageData/landmarks/129_Travers Park.jpg` },
    { location_id: '12', landmark_name: `The Battery`, filename: `imageData/landmarks/12_The Battery.jpg` },
    { location_id: '130', landmark_name: `Detective Keith L. Williams Park`, filename: `imageData/landmarks/130_Detective Keith L. Williams Park.jpg` },
    { location_id: '131', landmark_name: `Cunningham Park`, filename: `imageData/landmarks/131_Cunningham Park.jpg` },
    { location_id: '133', landmark_name: `Dome Playground`, filename: `imageData/landmarks/133_Dome Playground.jpg` },
    { location_id: '134', landmark_name: `Wallenberg Square`, filename: `imageData/landmarks/134_Wallenberg Square.jpg` },
    { location_id: '135', landmark_name: `Queens Valley Playground`, filename: `imageData/landmarks/135_Queens Valley Playground.jpg` },
    { location_id: '136', landmark_name: `Edgar Allan Poe Cottage`, filename: `imageData/landmarks/136_Edgar Allan Poe Cottage.jpg` },
    { location_id: '137', landmark_name: `Museum of Sex`, filename: `imageData/landmarks/137_Museum of Sex.jpg` },
    { location_id: '138', landmark_name: `Overlook Park`, filename: `imageData/landmarks/138_Overlook Park.jpg` },
    { location_id: '139', landmark_name: `Ohel Chabad Lubavitch`, filename: `imageData/landmarks/139_Ohel Chabad Lubavitch.jpg` },
    { location_id: '13', landmark_name: `New York Stock Exchange`, filename: `imageData/landmarks/13_New York Stock Exchange.jpg` },
    { location_id: '140', landmark_name: `Ed Koch Queensboro Bridge`, filename: `imageData/landmarks/140_Ed Koch Queensboro Bridge.jpg` },
    { location_id: '141', landmark_name: `Park Avenue Armory`, filename: `imageData/landmarks/141_Park Avenue Armory.jpg` },
    { location_id: '142', landmark_name: `Lincoln Center for the Performing Arts`, filename: `imageData/landmarks/142_Lincoln Center for the Performing Arts.jpg` },
    { location_id: '143', landmark_name: `Lincoln Center for the Performing Arts`, filename: `imageData/landmarks/143_Lincoln Center for the Performing Arts.jpg` },
    { location_id: '144', landmark_name: `New Museum`, filename: `imageData/landmarks/144_New Museum.jpg` },
    { location_id: '145', landmark_name: `LIC Flea & Food`, filename: `imageData/landmarks/145_LIC Flea & Food.jpg` },
    { location_id: '146', landmark_name: `Museum of the Moving Image`, filename: `imageData/landmarks/146_Museum of the Moving Image.jpg` },
    { location_id: '147', landmark_name: `Printer's Park`, filename: `imageData/landmarks/147_Printer's Park.jpg` },
    { location_id: '148', landmark_name: `New Museum`, filename: `imageData/landmarks/148_New Museum.jpg` },
    { location_id: '149', landmark_name: `Kelly Park Playground`, filename: `imageData/landmarks/149_Kelly Park Playground.jpg` },
    { location_id: '14', landmark_name: `Sisters of the Visitation of Holy Mary`, filename: `imageData/landmarks/14_Sisters of the Visitation of Holy Mary.jpg` },
    { location_id: '150', landmark_name: `Sixteen Lindens Triangle`, filename: `imageData/landmarks/150_Sixteen Lindens Triangle.jpg` },
    { location_id: '151', landmark_name: `The Cathedral Church of St. John the Divine`, filename: `imageData/landmarks/151_The Cathedral Church of St. John the Divine.jpg` },     
    { location_id: '152', landmark_name: `Apollo Theater`, filename: `imageData/landmarks/152_Apollo Theater.jpg` },
    { location_id: '153', landmark_name: `Paul's Playground`, filename: `imageData/landmarks/153_Paul's Playground.jpg` },
    { location_id: '154', landmark_name: `Ryan Visitor Center - Floyd Bennett Field`, filename: `imageData/landmarks/154_Ryan Visitor Center - Floyd Bennett Field.jpg` },
    { location_id: '155', landmark_name: `Lindower Park`, filename: `imageData/landmarks/155_Lindower Park.jpg` },
    { location_id: '156', landmark_name: `The Big Park`, filename: `imageData/landmarks/156_The Big Park.jpg` },
    { location_id: '157', landmark_name: `Reiff Playground`, filename: `imageData/landmarks/157_Reiff Playground.jpg` },
    { location_id: '158', landmark_name: `Whitney Museum of American Art`, filename: `imageData/landmarks/158_Whitney Museum of American Art.jpg` },
    { location_id: '159', landmark_name: `St. Mary's Park`, filename: `imageData/landmarks/159_St. Mary's Park.jpg` },
    { location_id: '15', landmark_name: `Little Bay Park`, filename: `imageData/landmarks/15_Little Bay Park.jpg` },
    { location_id: '160', landmark_name: `Juniper Valley Park`, filename: `imageData/landmarks/160_Juniper Valley Park.jpg` },
    { location_id: '161', landmark_name: `Times Square`, filename: `imageData/landmarks/161_Times Square.jpg` },
    { location_id: '162', landmark_name: `Rockefeller Center`, filename: `imageData/landmarks/162_Rockefeller Center.jpg` },
    { location_id: '163', landmark_name: `Radio City Music Hall`, filename: `imageData/landmarks/163_Radio City Music Hall.jpg` },
    { location_id: '164', landmark_name: `Empire State Building`, filename: `imageData/landmarks/164_Empire State Building.jpg` },
    { location_id: '165', landmark_name: `Kolbert Playground`, filename: `imageData/landmarks/165_Kolbert Playground.jpg` },
    { location_id: '166', landmark_name: `The Riverside Church`, filename: `imageData/landmarks/166_The Riverside Church.jpg` },
    { location_id: '167', landmark_name: `McKinley Square`, filename: `imageData/landmarks/167_McKinley Square.jpg` },
    { location_id: '168', landmark_name: `Bertine Block Historic District`, filename: `imageData/landmarks/168_Bertine Block Historic District.jpg` },
    { location_id: '169', landmark_name: `Peace Park`, filename: `imageData/landmarks/169_Peace Park.jpg` },
    { location_id: '16', landmark_name: `Marie Curie Playground`, filename: `imageData/landmarks/16_Marie Curie Playground.jpg` },
    { location_id: '170', landmark_name: `Empire State Building`, filename: `imageData/landmarks/170_Empire State Building.jpg` },
    { location_id: '171', landmark_name: `Bowne Park`, filename: `imageData/landmarks/171_Bowne Park.jpg` },
    { location_id: '173', landmark_name: `Louis Armstrong House Museum`, filename: `imageData/landmarks/173_Louis Armstrong House Museum.jpg` },
    { location_id: '174', landmark_name: `The Museum of Bronx History (MBH) at the Valentine-Varian House`, filename: `imageData/landmarks/174_The Museum of Bronx History (MBH) at the Valentine-Varian House.jpg` },
    { location_id: '175', landmark_name: `Alley Pond Park`, filename: `imageData/landmarks/175_Alley Pond Park.jpg` },
    { location_id: '176', landmark_name: `New Dorp Park`, filename: `imageData/landmarks/176_New Dorp Park.jpg` },
    { location_id: '177', landmark_name: `Callahan-Kelly Playground`, filename: `imageData/landmarks/177_Callahan-Kelly Playground.jpg` },
    { location_id: '178', landmark_name: `St. Athanasius' Roman Catholic Church`, filename: `imageData/landmarks/178_St. Athanasius' Roman Catholic Church.jpg` },
    { location_id: '179', landmark_name: `Chappetto Square`, filename: `imageData/landmarks/179_Chappetto Square.jpg` },
    { location_id: '17', landmark_name: `Herbert Von King Park`, filename: `imageData/landmarks/17_Herbert Von King Park.jpg` },
    { location_id: '180', landmark_name: `Vito Locascio Field`, filename: `imageData/landmarks/180_Vito Locascio Field.jpg` },
    { location_id: '181', landmark_name: `Old Stone House of Brooklyn`, filename: `imageData/landmarks/181_Old Stone House of Brooklyn.jpg` },
    { location_id: '182', landmark_name: `Wood Park`, filename: `imageData/landmarks/182_Wood Park.jpg` },
    { location_id: '183', landmark_name: `Bronx Victory Memorial`, filename: `imageData/landmarks/183_Bronx Victory Memorial.jpg` },
    { location_id: '184', landmark_name: `Bartow-Pell Mansion Museum`, filename: `imageData/landmarks/184_Bartow-Pell Mansion Museum.jpg` },
    { location_id: '186', landmark_name: `Empire State Building`, filename: `imageData/landmarks/186_Empire State Building.jpg` },
    { location_id: '187', landmark_name: `Northerleigh Park`, filename: `imageData/landmarks/187_Northerleigh Park.jpg` },
    { location_id: '188', landmark_name: `Hamilton Metz Field`, filename: `imageData/landmarks/188_Hamilton Metz Field.jpg` },
    { location_id: '189', landmark_name: `Brooklyn Museum`, filename: `imageData/landmarks/189_Brooklyn Museum.jpg` },
    { location_id: '18', landmark_name: `Edgar Allan Poe Cottage`, filename: `imageData/landmarks/18_Edgar Allan Poe Cottage.jpg` },
    { location_id: '190', landmark_name: `Prospect Park`, filename: `imageData/landmarks/190_Prospect Park.jpg` },
    { location_id: '191', landmark_name: `Wayanda Park`, filename: `imageData/landmarks/191_Wayanda Park.jpg` },
    { location_id: '192', landmark_name: `Kissena Park`, filename: `imageData/landmarks/192_Kissena Park.jpg` },
    { location_id: '193', landmark_name: `Sixteen Oaks Grove`, filename: `imageData/landmarks/193_Sixteen Oaks Grove.jpg` },
    { location_id: '194', landmark_name: `Randall's Island Park`, filename: `imageData/landmarks/194_Randall's Island Park.jpg` },
    { location_id: '195', landmark_name: `Coffey Park`, filename: `imageData/landmarks/195_Coffey Park.jpg` },
    { location_id: '196', landmark_name: `The Painter's Playground`, filename: `imageData/landmarks/196_The Painter's Playground.jpg` },
    { location_id: '197', landmark_name: `Phil Scooter Rizzuto Park`, filename: `imageData/landmarks/197_Phil Scooter Rizzuto Park.jpg` },
    { location_id: '198', landmark_name: `Joseph F. Mafera Park`, filename: `imageData/landmarks/198_Joseph F. Mafera Park.jpg` },
    { location_id: '199', landmark_name: `Barretto Point Park`, filename: `imageData/landmarks/199_Barretto Point Park.jpg` },
    { location_id: '19', landmark_name: `Queens County Farm Museum`, filename: `imageData/landmarks/19_Queens County Farm Museum.jpg` },
    { location_id: '1', landmark_name: `Newark Liberty International Airport`, filename: `imageData/landmarks/1_Newark Liberty International Airport.jpg` },
    { location_id: '200', landmark_name: `Wave Hill Public Garden & Cultural Center`, filename: `imageData/landmarks/200_Wave Hill Public Garden & Cultural Center.jpg` },
    { location_id: '201', landmark_name: `Tribute Park`, filename: `imageData/landmarks/201_Tribute Park.jpg` },
    { location_id: '202', landmark_name: `Ed Koch Queensboro Bridge`, filename: `imageData/landmarks/202_Ed Koch Queensboro Bridge.jpg` },
    { location_id: '203', landmark_name: `Brookville Park`, filename: `imageData/landmarks/203_Brookville Park.jpg` },
    { location_id: '204', landmark_name: `Bloomingdale Park`, filename: `imageData/landmarks/204_Bloomingdale Park.jpg` },
    { location_id: '205', landmark_name: `Montauk Memorial Triangle`, filename: `imageData/landmarks/205_Montauk Memorial Triangle.jpg` },
    { location_id: '206', landmark_name: `Snug Harbor Cultural Center & Botanical Garden`, filename: `imageData/landmarks/206_Snug Harbor Cultural Center & Botanical Garden.jpg` },
    { location_id: '207', landmark_name: `Carlos R. Lillo Park`, filename: `imageData/landmarks/207_Carlos R. Lillo Park.jpg` },
    { location_id: '208', landmark_name: `Derosa O'Boyle Triangle`, filename: `imageData/landmarks/208_Derosa O'Boyle Triangle.jpg` },
    { location_id: '209', landmark_name: `Brooklyn Bridge`, filename: `imageData/landmarks/209_Brooklyn Bridge.jpg` },
    { location_id: '20', landmark_name: `New York Botanical Garden`, filename: `imageData/landmarks/20_New York Botanical Garden.jpg` },
    { location_id: '210', landmark_name: `Bill Brown Playground`, filename: `imageData/landmarks/210_Bill Brown Playground.jpg` },
    { location_id: '211', landmark_name: `Comedy Cellar`, filename: `imageData/landmarks/211_Comedy Cellar.jpg` },
    { location_id: '212', landmark_name: `St. Lawrence Triangle`, filename: `imageData/landmarks/212_St. Lawrence Triangle.jpg` },
    { location_id: '213', landmark_name: `Pugsley Creek Park`, filename: `imageData/landmarks/213_Pugsley Creek Park.jpg` },
    { location_id: '214', landmark_name: `Ocean Breeze Park`, filename: `imageData/landmarks/214_Ocean Breeze Park.jpg` },
    { location_id: '215', landmark_name: `Marconi Park`, filename: `imageData/landmarks/215_Marconi Park.jpg` },
    { location_id: '216', landmark_name: `Frederick B. Judge Playground`, filename: `imageData/landmarks/216_Frederick B. Judge Playground.jpg` },
    { location_id: '217', landmark_name: `Williamsburg Art & Historical Center`, filename: `imageData/landmarks/217_Williamsburg Art & Historical Center.jpg` },
    { location_id: '218', landmark_name: `North Rochdale Playground`, filename: `imageData/landmarks/218_North Rochdale Playground.jpg` },
    { location_id: '219', landmark_name: `Springfield Park`, filename: `imageData/landmarks/219_Springfield Park.jpg` },
    { location_id: '21', landmark_name: `Seth Low Playground`, filename: `imageData/landmarks/21_Seth Low Playground.jpg` },
    { location_id: '220', landmark_name: `Seton Park`, filename: `imageData/landmarks/220_Seton Park.jpg` },
    { location_id: '221', landmark_name: `Alice Austen House`, filename: `imageData/landmarks/221_Alice Austen House.jpg` },
    { location_id: '222', landmark_name: `Fresh Creek Nature Preserve`, filename: `imageData/landmarks/222_Fresh Creek Nature Preserve.jpg` },
    { location_id: '223', landmark_name: `Paul Raimonda Playground`, filename: `imageData/landmarks/223_Paul Raimonda Playground.jpg` },
    { location_id: '224', landmark_name: `Steven Kasher Gallery`, filename: `imageData/landmarks/224_Steven Kasher Gallery.jpg` },
    { location_id: '225', landmark_name: `Jesse Owens Playground`, filename: `imageData/landmarks/225_Jesse Owens Playground.jpg` },
    { location_id: '227', landmark_name: `Sunset Park`, filename: `imageData/landmarks/227_Sunset Park.jpg` },
    { location_id: '228', landmark_name: `Sunset Park`, filename: `imageData/landmarks/228_Sunset Park.jpg` },
    { location_id: '229', landmark_name: `United Nations Headquarters`, filename: `imageData/landmarks/229_United Nations Headquarters.jpg` },
    { location_id: '22', landmark_name: `Seth Low Playground`, filename: `imageData/landmarks/22_Seth Low Playground.jpg` },
    { location_id: '230', landmark_name: `Times Square`, filename: `imageData/landmarks/230_Times Square.jpg` },
    { location_id: '231', landmark_name: `New York City Hall`, filename: `imageData/landmarks/231_New York City Hall.jpg` },
    { location_id: '232', landmark_name: `Tenement Museum`, filename: `imageData/landmarks/232_Tenement Museum.jpg` },
    { location_id: '233', landmark_name: `Chrysler Building`, filename: `imageData/landmarks/233_Chrysler Building.jpg` },
    { location_id: '234', landmark_name: `Museum of Sex`, filename: `imageData/landmarks/234_Museum of Sex.jpg` },
    { location_id: '235', landmark_name: `Highbridge Park`, filename: `imageData/landmarks/235_Highbridge Park.jpg` },
    { location_id: '236', landmark_name: `Solomon R. Guggenheim Museum`, filename: `imageData/landmarks/236_Solomon R. Guggenheim Museum.jpg` },
    { location_id: '237', landmark_name: `Central Park Zoo`, filename: `imageData/landmarks/237_Central Park Zoo.jpg` },
    { location_id: '238', landmark_name: `Zabar's`, filename: `imageData/landmarks/238_Zabar's.jpg` },
    { location_id: '239', landmark_name: `Beacon Theatre`, filename: `imageData/landmarks/239_Beacon Theatre.jpg` },
    { location_id: '23', landmark_name: `Staten Island Industrial Park`, filename: `imageData/landmarks/23_Staten Island Industrial Park.jpg` },
    { location_id: '240', landmark_name: `Van Cortlandt Park`, filename: `imageData/landmarks/240_Van Cortlandt Park.jpg` },
    { location_id: '241', landmark_name: `Lehman College Art Gallery`, filename: `imageData/landmarks/241_Lehman College Art Gallery.jpg` },
    { location_id: '242', landmark_name: `Owen F. Dolen Park`, filename: `imageData/landmarks/242_Owen F. Dolen Park.jpg` },
    { location_id: '243', landmark_name: `The Met Cloisters`, filename: `imageData/landmarks/243_The Met Cloisters.jpg` },
    { location_id: '244', landmark_name: `Morris-Jumel Mansion`, filename: `imageData/landmarks/244_Morris-Jumel Mansion.jpg` },
    { location_id: '245', landmark_name: `Silver Lake Park`, filename: `imageData/landmarks/245_Silver Lake Park.jpg` },
    { location_id: '246', landmark_name: `David Zwirner`, filename: `imageData/landmarks/246_David Zwirner.jpg` },
    { location_id: '247', landmark_name: `Yankee Stadium`, filename: `imageData/landmarks/247_Yankee Stadium.jpg` },
    { location_id: '248', landmark_name: `Wood Park`, filename: `imageData/landmarks/248_Wood Park.jpg` },
    { location_id: '249', landmark_name: `Washington Square Park`, filename: `imageData/landmarks/249_Washington Square Park.jpg` },
    { location_id: '24', landmark_name: `The Cathedral Church of St. John the Divine`, filename: `imageData/landmarks/24_The Cathedral Church of St. John the Divine.jpg` },       
    { location_id: '250', landmark_name: `Chief Dennis L. Devlin Park`, filename: `imageData/landmarks/250_Chief Dennis L. Devlin Park.jpg` },
    { location_id: '251', landmark_name: `Westerleigh Park`, filename: `imageData/landmarks/251_Westerleigh Park.jpg` },
    { location_id: '252', landmark_name: `Whitestone Playground`, filename: `imageData/landmarks/252_Whitestone Playground.jpg` },
    { location_id: '253', landmark_name: `Flushing Meadows Corona Park KayakCanoe Launch`, filename: `imageData/landmarks/253_Flushing Meadows Corona Park KayakCanoe Launch.jpg` },
    { location_id: '254', landmark_name: `Agnes Haywood Playground`, filename: `imageData/landmarks/254_Agnes Haywood Playground.jpg` },
    { location_id: '255', landmark_name: `Beacon's Closet`, filename: `imageData/landmarks/255_Beacon's Closet.jpg` },
    { location_id: '256', landmark_name: `Shrine Church of Our Lady of Mount Carmel`, filename: `imageData/landmarks/256_Shrine Church of Our Lady of Mount Carmel.jpg` },
    { location_id: '257', landmark_name: `Parade Ground`, filename: `imageData/landmarks/257_Parade Ground.jpg` },
    { location_id: '258', landmark_name: `Forest Park`, filename: `imageData/landmarks/258_Forest Park.jpg` },
    { location_id: '259', landmark_name: `Muskrat Cove`, filename: `imageData/landmarks/259_Muskrat Cove.jpg` },
    { location_id: '25', landmark_name: `The Invisible Dog Art Center`, filename: `imageData/landmarks/25_The Invisible Dog Art Center.jpg` },
    { location_id: '260', landmark_name: `Woodside Memorial Plaza`, filename: `imageData/landmarks/260_Woodside Memorial Plaza.jpg` },
    { location_id: '261', landmark_name: `The Battery`, filename: `imageData/landmarks/261_The Battery.jpg` },
    { location_id: '262', landmark_name: `Gracie Mansion Conservancy`, filename: `imageData/landmarks/262_Gracie Mansion Conservancy.jpg` },
    { location_id: '263', landmark_name: `Solomon R. Guggenheim Museum`, filename: `imageData/landmarks/263_Solomon R. Guggenheim Museum.jpg` },
    { location_id: '26', landmark_name: `Torah Animal World`, filename: `imageData/landmarks/26_Torah Animal World.jpg` },
    { location_id: '27', landmark_name: `Battery Harris East`, filename: `imageData/landmarks/27_Battery Harris East.jpg` },
    { location_id: '28', landmark_name: `Rufus King Park`, filename: `imageData/landmarks/28_Rufus King Park.jpg` },
    { location_id: '29', landmark_name: `Beyti Turkish Kebab`, filename: `imageData/landmarks/29_Beyti Turkish Kebab.jpg` },
    { location_id: '2', landmark_name: `Jamaica Bay Wildlife Refuge`, filename: `imageData/landmarks/2_Jamaica Bay Wildlife Refuge.jpg` },
    { location_id: '30', landmark_name: `Broad Channel American Park`, filename: `imageData/landmarks/30_Broad Channel American Park.jpg` },
    { location_id: '31', landmark_name: `New York Botanical Garden`, filename: `imageData/landmarks/31_New York Botanical Garden.jpg` },
    { location_id: '32', landmark_name: `St. Lucy Roman Catholic Church`, filename: `imageData/landmarks/32_St. Lucy Roman Catholic Church.jpg` },
    { location_id: '33', landmark_name: `Brooklyn Bridge Park`, filename: `imageData/landmarks/33_Brooklyn Bridge Park.jpg` },
    { location_id: '34', landmark_name: `Building 92`, filename: `imageData/landmarks/34_Building 92.jpg` },
    { location_id: '35', landmark_name: `Betsy Head Park`, filename: `imageData/landmarks/35_Betsy Head Park.jpg` },
    { location_id: '36', landmark_name: `Maria Hernandez Park`, filename: `imageData/landmarks/36_Maria Hernandez Park.jpg` },
    { location_id: '37', landmark_name: `Maria Hernandez Park`, filename: `imageData/landmarks/37_Maria Hernandez Park.jpg` },
    { location_id: '38', landmark_name: `Ohel Chabad Lubavitch`, filename: `imageData/landmarks/38_Ohel Chabad Lubavitch.jpg` },
    { location_id: '39', landmark_name: `Wilson Playground`, filename: `imageData/landmarks/39_Wilson Playground.jpg` },
    { location_id: '3', landmark_name: `Givan Square`, filename: `imageData/landmarks/3_Givan Square.jpg` },
    { location_id: '40', landmark_name: `The Invisible Dog Art Center`, filename: `imageData/landmarks/40_The Invisible Dog Art Center.jpg` },
    { location_id: '41', landmark_name: `Apollo Theater`, filename: `imageData/landmarks/41_Apollo Theater.jpg` },
    { location_id: '42', landmark_name: `Harlem YMCA`, filename: `imageData/landmarks/42_Harlem YMCA.jpg` },
    { location_id: '43', landmark_name: `Solomon R. Guggenheim Museum`, filename: `imageData/landmarks/43_Solomon R. Guggenheim Museum.jpg` },
    { location_id: '44', landmark_name: `Fairview Park`, filename: `imageData/landmarks/44_Fairview Park.jpg` },
    { location_id: '45', landmark_name: `Brooklyn Bridge`, filename: `imageData/landmarks/45_Brooklyn Bridge.jpg` },
    { location_id: '46', landmark_name: `Ambrosini Field`, filename: `imageData/landmarks/46_Ambrosini Field.jpg` },
    { location_id: '47', landmark_name: `Little Claremont Playground`, filename: `imageData/landmarks/47_Little Claremont Playground.jpg` },
    { location_id: '48', landmark_name: `Times Square`, filename: `imageData/landmarks/48_Times Square.jpg` },
    { location_id: '49', landmark_name: `Underwood Park`, filename: `imageData/landmarks/49_Underwood Park.jpg` },
    { location_id: '4', landmark_name: `The Mercury Lounge`, filename: `imageData/landmarks/4_The Mercury Lounge.jpg` },
    { location_id: '50', landmark_name: `Intrepid Museum`, filename: `imageData/landmarks/50_Intrepid Museum.jpg` },
    { location_id: '51', landmark_name: `Givans Creek Woods`, filename: `imageData/landmarks/51_Givans Creek Woods.jpg` },
    { location_id: '52', landmark_name: `The Invisible Dog Art Center`, filename: `imageData/landmarks/52_The Invisible Dog Art Center.jpg` },
    { location_id: '53', landmark_name: `Frank Golden Park`, filename: `imageData/landmarks/53_Frank Golden Park.jpg` },
    { location_id: '54', landmark_name: `Brooklyn Bridge Park Pier 5`, filename: `imageData/landmarks/54_Brooklyn Bridge Park Pier 5.jpg` },
    { location_id: '55', landmark_name: `Coney Island History Project`, filename: `imageData/landmarks/55_Coney Island History Project.jpg` },
    { location_id: '56', landmark_name: `New York Hall of Science`, filename: `imageData/landmarks/56_New York Hall of Science.jpg` },
    { location_id: '57', landmark_name: `New York Hall of Science`, filename: `imageData/landmarks/57_New York Hall of Science.jpg` },
    { location_id: '58', landmark_name: `Schneider Sampson Square`, filename: `imageData/landmarks/58_Schneider Sampson Square.jpg` },
    { location_id: '59', landmark_name: `Seabury Playground`, filename: `imageData/landmarks/59_Seabury Playground.jpg` },
    { location_id: '5', landmark_name: `Carlton Park`, filename: `imageData/landmarks/5_Carlton Park.jpg` },
    { location_id: '60', landmark_name: `Seabury Playground`, filename: `imageData/landmarks/60_Seabury Playground.jpg` },
    { location_id: '61', landmark_name: `Brooklyn Children's Museum`, filename: `imageData/landmarks/61_Brooklyn Children's Museum.jpg` },
    { location_id: '62', landmark_name: `Brooklyn Children's Museum`, filename: `imageData/landmarks/62_Brooklyn Children's Museum.jpg` },
    { location_id: '63', landmark_name: `Highland Park`, filename: `imageData/landmarks/63_Highland Park.jpg` },
    { location_id: '64', landmark_name: `Alley Pond Environmental Center`, filename: `imageData/landmarks/64_Alley Pond Environmental Center.jpg` },
    { location_id: '65', landmark_name: `Plymouth Church`, filename: `imageData/landmarks/65_Plymouth Church.jpg` },
    { location_id: '66', landmark_name: `Brooklyn Bridge Park`, filename: `imageData/landmarks/66_Brooklyn Bridge Park.jpg` },
    { location_id: '67', landmark_name: `Patrick O'Rourke Playground`, filename: `imageData/landmarks/67_Patrick O'Rourke Playground.jpg` },
    { location_id: '68', landmark_name: `Madison Square Garden`, filename: `imageData/landmarks/68_Madison Square Garden.jpg` },
    { location_id: '69', landmark_name: `The Bronx Museum of the Arts`, filename: `imageData/landmarks/69_The Bronx Museum of the Arts.jpg` },
    { location_id: '6', landmark_name: `Staats Circle`, filename: `imageData/landmarks/6_Staats Circle.jpg` },
    { location_id: '70', landmark_name: `Small Bus Tours NYC`, filename: `imageData/landmarks/70_Small Bus Tours NYC.jpg` },
    { location_id: '71', landmark_name: `Paerdegat Park`, filename: `imageData/landmarks/71_Paerdegat Park.jpg` },
    { location_id: '72', landmark_name: `The Wyckoff House Museum`, filename: `imageData/landmarks/72_The Wyckoff House Museum.jpg` },
    { location_id: '73', landmark_name: `Kissena Park`, filename: `imageData/landmarks/73_Kissena Park.jpg` },
    { location_id: '74', landmark_name: `Marcus Garvey Park`, filename: `imageData/landmarks/74_Marcus Garvey Park.jpg` },
    { location_id: '75', landmark_name: `Museum of the City of New York`, filename: `imageData/landmarks/75_Museum of the City of New York.jpg` },
    { location_id: '76', landmark_name: `Linden Park`, filename: `imageData/landmarks/76_Linden Park.jpg` },
    { location_id: '77', landmark_name: `Betsy Head Park`, filename: `imageData/landmarks/77_Betsy Head Park.jpg` },
    { location_id: '78', landmark_name: `Bronx Zoo`, filename: `imageData/landmarks/78_Bronx Zoo.jpg` },
    { location_id: '79', landmark_name: `The Mercury Lounge`, filename: `imageData/landmarks/79_The Mercury Lounge.jpg` },
    { location_id: '7', landmark_name: `Museum of the Moving Image`, filename: `imageData/landmarks/7_Museum of the Moving Image.jpg` },
    { location_id: '80', landmark_name: `Twinkle Playspace`, filename: `imageData/landmarks/80_Twinkle Playspace.jpg` },
    { location_id: '81', landmark_name: `Givans Creek Woods`, filename: `imageData/landmarks/81_Givans Creek Woods.jpg` },
    { location_id: '82', landmark_name: `Veterans Grove`, filename: `imageData/landmarks/82_Veterans Grove.jpg` },
    { location_id: '83', landmark_name: `Crosson Green`, filename: `imageData/landmarks/83_Crosson Green.jpg` },
    { location_id: '84', landmark_name: `Huguenot Ponds Park`, filename: `imageData/landmarks/84_Huguenot Ponds Park.jpg` },
    { location_id: '85', landmark_name: `Flatbush Reformed Church`, filename: `imageData/landmarks/85_Flatbush Reformed Church.jpg` },
    { location_id: '86', landmark_name: `Grassmere Playground`, filename: `imageData/landmarks/86_Grassmere Playground.jpg` },
    { location_id: '87', landmark_name: `New York Stock Exchange`, filename: `imageData/landmarks/87_New York Stock Exchange.jpg` },
    { location_id: '88', landmark_name: `The Battery`, filename: `imageData/landmarks/88_The Battery.jpg` },
    { location_id: '89', landmark_name: `John Shirts Spellman`, filename: `imageData/landmarks/89_John Shirts Spellman.jpg` },
    { location_id: '8', landmark_name: `Hell Gate Bridge`, filename: `imageData/landmarks/8_Hell Gate Bridge.jpg` },
    { location_id: '90', landmark_name: `Flatiron Building`, filename: `imageData/landmarks/90_Flatiron Building.jpg` },
    { location_id: '91', landmark_name: `Amersfort Park`, filename: `imageData/landmarks/91_Amersfort Park.jpg` },
    { location_id: '92', landmark_name: `Queens Historical Society`, filename: `imageData/landmarks/92_Queens Historical Society.jpg` },
    { location_id: '93', landmark_name: `Flushing Meadows Corona Park`, filename: `imageData/landmarks/93_Flushing Meadows Corona Park.jpg` },
    { location_id: '94', landmark_name: `Edgar Allan Poe Cottage`, filename: `imageData/landmarks/94_Edgar Allan Poe Cottage.jpg` },
    { location_id: '95', landmark_name: `MacDonald Park`, filename: `imageData/landmarks/95_MacDonald Park.jpg` },
    { location_id: '96', landmark_name: `Jackie Robinson Gravesite`, filename: `imageData/landmarks/96_Jackie Robinson Gravesite.jpg` },
    { location_id: '97', landmark_name: `Fort Greene Park`, filename: `imageData/landmarks/97_Fort Greene Park.jpg` },
    { location_id: '98', landmark_name: `Cunningham Park`, filename: `imageData/landmarks/98_Cunningham Park.jpg` },
    { location_id: '99', landmark_name: `Freshkills Park`, filename: `imageData/landmarks/99_Freshkills Park.jpg` },
    { location_id: '9', landmark_name: `Erewhon Mall`, filename: `imageData/landmarks/9_Erewhon Mall.jpg` },
  ];


const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/shiro-rare/clshr0m2o03ju01p5hfrk8qqb', // style URL
    projection: 'globe', // Display the map as a globe
    zoom: 11, // starting zoom
    center: [-73.975, 40.75] // starting center in [lng, lat]
});

let data_visual = "pu_average_fee"; // 初始化数据可视化属性，默认为Pick-up Average Fee
let preloadedData = {}; // 用于存储预加载的数据
let zone_selected=null;

let playInterval = null; // 用于存储setInterval的引用

function togglePlay() {
    const slider = document.getElementById('timeSlider');
    const max = parseInt(slider.max); // 获取slider的最大值
    const playButton = document.getElementById('playButton');

    if (playInterval) {
        // 如果已经在播放中，则停止
        clearInterval(playInterval);
        playInterval = null;
        playButton.textContent = 'Play'; // 更新按钮文本为"Play"
    } else {
        // 开始播放
        playButton.textContent = 'Pause'; // 更新按钮文本为"Pause"

        playInterval = setInterval(() => {
            let value = parseInt(slider.value);
            value = value >= max ? 0 : value + 1; // 如果到达最大值，回到开始
            slider.value = value; // 更新slider的值

            // 触发时间轴改变事件，更新地图显示
            slider.dispatchEvent(new Event('input'));

            if (value === max) {
                clearInterval(playInterval); // 到达最大值时停止播放
                playInterval = null;
                playButton.textContent = 'Play'; // 更新按钮文本为"Play"
            }
        }, 1000); // 每2秒更新一次
    }
}

document.getElementById('playButton').addEventListener('click', togglePlay);

map.on('load', () => {
    map.setFog({}); // Set the default atmosphere style
    initEventListeners();
    updateSelection(true); // 立即触发一次以加载初始数据
});

map.on('click', 'taxi_zones_layer', function(e) {
    const features = map.queryRenderedFeatures(e.point, { layers: ['taxi_zones_layer'] });
    if (features.length > 0) {
        const clickedFeature = features[0];
        
        // 检查是否点击了同一个区域
        if (zone_selected == clickedFeature.properties.objectid) {
            zone_selected = null; // 并清除当前点击的区域ID
        } else {
            zone_selected = clickedFeature.properties.objectid; // 更新当前点击的区域ID
        }
    }

    updateMapVisualization(document.getElementById('timeSlider').value); // 数据可视化选项变更时更新地图

});


map.on('mousemove', 'taxi_zones_layer', (e) => {
    if (zone_selected === null) {
        const infoBox = document.getElementById('info-box');
        const properties = e.features[0].properties;

        // 使用images数组查找匹配的地标信息
        const imageInfo = images.find(img => img.location_id == properties.location_id);
        const imagePath = imageInfo ? imageInfo.filename : '';
        const landmarkName = imageInfo ? imageInfo.landmark_name : '';

        // 构造图片和地点名称的HTML字符串
        let imageHtml = '';
        if (imageInfo) {
            imageHtml = `
                <div style="margin-top:10px; text-align:center;">
                    <img src="${imagePath}" alt="Landmark Image" style="width:100%;max-width:200px;">
                    <div style="margin-top:5px;"><strong>Landmark:</strong> ${landmarkName}</div>
                </div>
            `;
        }

        // 更新信息框内容
        infoBox.innerHTML = `
            <strong>Region Name:</strong> ${properties.zone}<br>
            <strong>Location ID:</strong> ${properties.location_id}<br>
            <strong>PickUp Fee:</strong> ${properties.pu_average_fee.toString().slice(0, 5)}<br>
            <strong>DropOff Fee:</strong> ${properties.do_average_fee.toString().slice(0, 5)}<br>
            <strong>PickUp Distance:</strong> ${properties.pu_average_dis.toString().slice(0, 5)} mi<br>
            <strong>DropOff Distance:</strong> ${properties.do_average_dis.toString().slice(0, 5)} mi
            ${imageHtml} <!-- 添加图片HTML -->
        `;
        infoBox.style.display = 'block';
    } else {
        document.getElementById('info-box').style.display = 'none';
    }
}).on('mouseleave', 'taxi_zones_layer', () => {
    document.getElementById('info-box').style.display = 'none';
});

function initEventListeners() {
    document.querySelectorAll('#seasonSelection input, #dayTypeSelection input').forEach(input => {
        input.addEventListener('change', () => {
            if (playInterval) {
                clearInterval(playInterval);
                playInterval = null;
                const playButton = document.getElementById('playButton');
                if (playButton) playButton.textContent = 'Play'; // 更新按钮文本为"Play"
            }
            
            console.log(`Selection Changed`);
            updateSelection(true); // 季节或工作日/周末选择变更时更新选择
        });
    });

    document.getElementById('timeSlider').addEventListener('input', function() {
        const timeValue = parseInt(this.value);
        const endTime = (timeValue + 1) % 24; // Ensure it wraps around at 23:00 to 0:00
        document.getElementById('timePeriod').innerText = `Time Period: ${timeValue}:00~${endTime}:00`;
        updateMapVisualization(timeValue); // 根据时间滑块的位置更新地图
    });

    document.querySelectorAll('input[name="dataVisual"]').forEach(radio => {
        radio.addEventListener('change', () => {
            if (playInterval) {
                clearInterval(playInterval);
                playInterval = null;
                const playButton = document.getElementById('playButton');
                if (playButton) playButton.textContent = 'Play'; // 更新按钮文本为"Play"
            }
            
            data_visual = radio.value;
            updateMapVisualization(document.getElementById('timeSlider').value); // 数据可视化选项变更时更新地图
        });
    });
}

function updateSelection(initialize) {
    const season = document.querySelector('input[name="season"]:checked').value;
    const dayType = document.getElementById('dayType').checked ? 'weekends' : 'weekdays';

    if (initialize) {
        preloadGeoJSON(season, dayType); // 初次加载时预加载数据

        // 根据是否是周末来设置地图样式
        if (dayType == 'weekends') {
            // 假设这是暗色主题的样式URL
            map.setStyle('mapbox://styles/shiro-rare/clsqkpeta00eq01o45mp0d6uv');
        } else {
            // 假设这是亮色主题的样式URL
            map.setStyle('mapbox://styles/shiro-rare/clshr0m2o03ju01p5hfrk8qqb');
        }
    } else {
        updateMapVisualization(document.getElementById('timeSlider').value); // 非初次加载时直接更新地图
    }
}

function preloadGeoJSON(season, dayType) {
    preloadedData = {}; // 重置预加载数据
    let loadedCount = 0;

    for (let hour = 0; hour < 24; hour++) {
        const fileName = `data/taxi_${season}_${dayType}_${hour.toString().padStart(2, '0')}.geojson`;
        console.log(`Loading data from: ${fileName}`)
        fetch(fileName).then(response => response.json()).then(data => {
            preloadedData[hour] = data;
            loadedCount++;
            if (loadedCount === 24) {
                // 所有文件加载完成后更新地图显示
                updateMapVisualization(document.getElementById('timeSlider').value);
            }
        }).catch(error => console.error('Error loading the GeoJSON file:', error));
    }
}

function updateMapVisualization(hour) {
    let data = preloadedData[hour];
    if (data) {
         // 转换字符串属性为数字
         data.features.forEach(feature => {
            feature.properties[data_visual] = Number(feature.properties[data_visual]);
        });
    
        // 计算最小和最大值
        let values = data.features.map(feature => feature.properties[data_visual]);
        let minValue = Math.min(...values);
        let maxValue = Math.max(...values);
    
        // 如果地图已有该源，则先移除
        if (map.getSource('taxi_zones')) {
            if (map.getLayer('taxi_zones_outline')) {
                map.removeLayer('taxi_zones_outline');
            }
            map.removeLayer('taxi_zones_layer');
            map.removeSource('taxi_zones');
        }

        const currentSeason = document.querySelector('input[name="season"]:checked').value;

        let fillColor;
        switch (currentSeason) {
            case 'spring':
                fillColor = "#27AE60"; // 翡翠绿
                break;
            case 'summer':
                fillColor = "#C0392B"; 
                break;
            case 'autumn':
                fillColor = "#D35400"; // 南瓜橙
                break;
            case 'winter':
                fillColor = "#2980B9"; 
                break;
            default:
                fillColor = "#00ffff"; // 默认颜色
        }

        
        if (zone_selected == null){
            map.addSource('taxi_zones', {
                type: 'geojson',
                data: data
            });
            
            map.addLayer({
                'id': 'taxi_zones_layer',
                'type': 'fill',
                'source': 'taxi_zones',
                'paint': {
                    "fill-color": fillColor,
                    "fill-outline-color": "#000000",
                    "fill-opacity": [
                        "interpolate",
                        ["linear"],
                        ["get", data_visual],
                        0,0,
                        0.001*maxValue, 0.2,
                        0.25*maxValue, 0.4,
                        0.5*maxValue, 0.8,
                        maxValue, 1.0
                    ]
                }
            });

            document.getElementById('mapLegend').style.display = 'none';
        }else{
               
            let selectedFeature = data.features.find(feature => feature.properties.objectid == zone_selected);
            let exchangeArray=selectedFeature.properties.passenger_exchange;

            // 遍历GeoJSON的每个Feature
            data.features.forEach((feature) => {
                // 直接使用objectid作为索引来获取对应的exchange值
                const objectId = parseInt(feature.properties.objectid); // objectid转换为整数
                if (!Array.isArray(exchangeArray)){
                    exchangeArray=JSON.parse(exchangeArray);
                }
                const exchangeValue = exchangeArray[objectId];
                
                // 为每个feature设置current_exchange属性
                feature.properties['current_exchange'] = exchangeValue;
            });

            const aver = document.getElementById('dayType').checked ? 4 : 10;
            
            map.addSource('taxi_zones', {
                type: 'geojson',
                data: data
            });

            map.addLayer({
                'id': 'taxi_zones_layer',
                'type': 'fill',
                'source': 'taxi_zones',
                'paint': {
                    "fill-color": [
                        'case',
                        ['==', ['get', 'objectid'], zone_selected], // 检查当前Feature是否为选中区域
                        fillColor, 
                        // 对于其他区域，使用渐变颜色
                        ['interpolate',
                            ['linear'],
                            ['coalesce', // 确保获取的值不为null
                                ['/',['get', 'current_exchange'],aver], // 假设这里你已经根据zone_selected计算并赋值
                                0 // 默认值为0
                            ],
                            -10, 'blue',
                            0, 'white', // 中性色，可以根据需要调整
                            10, 'red'
                        ],
                    ],
                    "fill-outline-color": "#000000",
                    "fill-opacity": 1
                }
            });

            if (map.getLayer('taxi_zones_outline')) {
                map.removeLayer('taxi_zones_outline');
            }
            
            map.addLayer({
                'id': 'taxi_zones_outline',
                'type': 'line',
                'source': 'taxi_zones',
                'layout': {},
                'paint': {
                    'line-color': '#000000', // 使用与填充相同的颜色，或者选择一个更突出的颜色
                    'line-width': [
                        'case',
                        ['==', ['get', 'objectid'], zone_selected], 5, // 当Feature被选中时，边线加粗到5单位
                        0 // 非选中Feature不显示边线或保持原有的细线
                    ]
                },
                'filter': ['==', ['get', 'objectid'], zone_selected] // 只为选中的Feature绘制边线
            });

            document.getElementById('mapLegend').style.display = 'block';
        }
    }
}
