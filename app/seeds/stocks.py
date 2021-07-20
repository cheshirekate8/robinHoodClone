from app.models import db, Stock

def seed_stocks():
    one = Stock(
        symbol="MMM",
        name="3M",
        about="3M Co. is a technology company, which manufactures industrial, safety and consumer products. It operates through the following segments: Safety and Industrial, Transportation and Electronics, Health Care, and Consumer. The Safety and Industrial segment consists of personal safety, industrial adhesives and tapes, abrasives, closure and masking systems, electrical markets, automotive aftermarket, and roofing granules. The Transportation and Electronics segment consists of electronics, automotive and aerospace, commercial solutions, advanced materials, and transportation safety. The Health Care segment includes medical and surgical supplies, skin health and infection prevention products, oral care solutions, separation and purification sciences, health information systems, inhalation and transdermal drug delivery systems, and food safety products. The Electronics & Energy segment involves in the optical films solutions for electronic displays, packaging and interconnection devices; insulating and splicing solutions; touch screens and touch monitors; renewable energy component solutions; and infrastructure protection products. The Consumer segment products includes office supply products, stationery products, home improvement products, home care products, protective material products, certain consumer retail personal safety products, and consumer health care products. The company was founded by Henry S. Bryan, Hermon W. Cable, John Dwan, William A. McGonagle and J. Danley Budd in 1902 and is headquartered in St. Paul, MN. The listed name for MMM is 3M Company.",
        ceo="Michael F. Roman",
        employees="94987",
        headquarters="St. Paul, Minnesota",
        founded="1902"
    )
    two = Stock(
        symbol="AXP",
        name="American Express",
        about="Consumer Services Group, Global Commercial Services, Global Merchant and Network Services, and Corporate and Other. The Global Consumer Services Group segment issues a wide range of proprietary consumer cards globally. The Global Commercial Services segment provides proprietary corporate and small business cards, payment and expense management services, and commercial financing products. The Global Merchant and Network Services segment operates a global payments network that processes and settles card transactions, acquires merchants, and provides multi-channel marketing programs and capabilities, services, and data analytics. The Corporate and Other segment covers corporate functions and certain other businesses and operations. The company was founded by Henry Wells, William G. Fargo, and John Warren Butterfield on March 28, 1850 and is headquartered in New York, NY. The listed name for AXP is American Express Company.",
        ceo="Stephen J. Squeri",
        employees="63700",
        headquarters="New York, New York",
        founded="1850"
    )
    three = Stock(
        symbol="AMGN",
        name="Amgen",
        about="Amgen, Inc. is a biotechnology company, which engages in the discovery, development, manufacture and marketing of human therapeutics. Its products include the following brands: Aranesp, Aimovig, KANJINTI, EVENITY, AMGEVITA, AVSOLA, BLINCYTO, MVASI, Corlanor, Enbrel, EPOGEN, IMLYGIC, Kyprolis, Neulasta, NEUPOGEN, Nplate, Parsabiv, Prolia, Repatha, Sensipar, Vectibix, Otezla, RIABNI, and XGEVA. The company was founded by William K. Bowes, Jr., Franklin Pitcher Johnson, Jr., George B. Rathmann, and Joseph Rubinfeld on April 8, 1980 and is headquartered in Thousand Oaks, CA. The listed name for AMGN is Amgen Inc. Common Stock.",
        ceo="Robert A. Bradway",
        employees="24300",
        headquarters="Thousand Oaks, California",
        founded="1980"
    )
    four = Stock(
        symbol="AAPL",
        name="Apple",
        about="Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in 1977 and is headquartered in Cupertino, CA. The listed name for AAPL is Apple Inc. Common Stock.",
        ceo="Timothy Donald Cook",
        employees="147000",
        headquarters="Cupertino, California",
        founded="1976"
    )
    five = Stock(
        symbol="BA",
        name="Boeing",
        about="The Boeing Co. is an aerospace company, which engages in the manufacture of commercial jetliners and defense, space and security systems. It operates through the following segments: Commercial Airplanes; Defense, Space and Security; Global Services; and Boeing Capital. The Commercial Airplanes segment includes the development, production, and market of commercial jet aircraft and provides fleet support services, principally to the commercial airline industry worldwide. The Defense, Space and Security segment refers to the research, development, production and modification of manned and unmanned military aircraft and weapons systems for global strike, including fighter and combat rotorcraft aircraft and missile systems; global mobility, including tanker, rotorcraft and tilt-rotor aircraft; and airborne surveillance and reconnaissance, including command and control, battle management and airborne anti-submarine aircraft. The Global Services segment provides services to commercial and defense customers. The Boeing Capital segment seeks to ensure that Boeing customers have the financing they need to buy and take delivery of their Boeing product and manages overall financing exposure. The company was founded by William Edward Boeing on July 15, 1916 and is headquartered in Chicago, IL. The listed name for BA is Boeing Company.",
        ceo="David L. Calhoun",
        employees="141000",
        headquarters="Chicago, Illinois",
        founded="1916"
    )
    six = Stock(
        symbol="CAT",
        name="Caterpillar",
        about="Caterpillar, Inc. engages in the manufacture of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. It operates through the following segments: Construction Industries, Resource Industries, Energy and Transportation, Financial Products, and All Other. The Construction Industries segment supports customers using machinery in infrastructure and building construction applications. The Resource Industries segment is responsible for supporting customers using machinery in mining and quarrying applications and it includes business strategy, product design, product management and development, manufacturing, marketing and sales and product support. The Energy and Transportation segment supports customers in oil and gas, power generation, marine, rail, and industrial applications. The Financial Products segment offers a range of financing alternatives to customers and dealers for caterpillar machinery and engines, solar gas turbines, as well as other equipment and marine vessels. The All Other segment include activities such as the business strategy, product management and development, and manufacturing of filters and fluids, undercarriage, tires and rims, engaging tools, and fluid transfers. The company was founded on April 15, 1925 and is headquartered in Deerfield, IL. The listed name for CAT is Caterpillar Inc. ",
        ceo="Donald James Umpleby",
        employees="97300",
        headquarters="Deerfield, Illinois",
        founded="1925"
    )
    seven = Stock(
        symbol="CVX",
        name="Chevron",
        about="Chevron Corp. engages in the provision of administrative, financial management, and technology support for energy and chemical operations. It operates through the Upstream and Downstream segments. The Upstream segment consists of exploration, development, and production of crude oil and natural gas; liquefaction, transportation, and regasification associated with liquefied natural gas; transporting crude oil by major international oil export pipelines; processing, transporting, storage, and marketing of natural gas; and a gas-to-liquids plant. The Downstream segment comprises refining of crude oil into petroleum products; marketing of crude oil and refined products; transporting of crude oil and refined products by pipeline, marine vessel, motor equipment, and rail car; and manufacturing and marketing of commodity petrochemicals, plastics for industrial uses, and fuel and lubricant additives. The company was founded in 1906 and is headquartered in San Ramon, CA. The listed name for CVX is Chevron Corporation.",
        ceo="Michael K. Wirth",
        employees="47736",
        headquarters="San Ramon, California",
        founded="1906"
    )
    eight = Stock(
        symbol="CSCO",
        name="Cisco Systems",
        about="Cisco Systems, Inc. engages in the design, manufacture, and sale of Internet Protocol based networking products and services related to the communications and information technology industry. The firm operates through the following geographical segments: the Americas, EMEA, and APJC. Its product comprises of the following categories: Switches, Routers, Wireless, Network Management Interfaces and Modules, Optical Networking, Access Points, Outdoor and Industrial Access Points, Next-Generation Firewalls, Advanced Malware Protection, VPN Security Clients, Email, and Web Security. The company was founded by Sandra Lerner and Leonard Bosack on December 10, 1984 and is headquartered in San Jose, CA. The listed name for CSCO is Cisco Systems, Inc. Common Stock (DE).",
        ceo="Charles H. Robbins",
        employees="77500",
        headquarters="San Jose, California",
        founded="1984"
    )
    nine = Stock(
        symbol="KO",
        name="Coca-Cola",
        about="The Coca-Cola Co. is the nonalcoholic beverage company, which engages in the manufacture, market, and sale of non-alcoholic beverages which include sparkling soft drinks, water, enhanced water and sports drinks, juice, dairy and plant-based beverages, tea and coffee and energy drinks. Its brands include Coca-Cola, Diet Coke, Coca-Cola Zero, Fanta, Sprite, Minute Maid, Georgia, Powerade, Del Valle, Schweppes, Aquarius, Minute Maid Pulpy, Dasani, Simply, Glaceau Vitaminwater, Bonaqua, Gold Peak, Fuze Tea, Glaceau Smartwater, and Ice Dew. It operates through the following segments: Europe, Middle East and Africa, Latin America, North America, Asia Pacific, Bottling Investments and Global Ventures. The company was founded by Asa Griggs Candler in 1886 and is headquartered in Atlanta, GA. The listed name for KO is Coca-Cola Company.",
        ceo="James Quincey",
        employees="80300",
        headquarters="Atlanta, Georgia",
        founded="1886"
    )
    ten = Stock(
        symbol="DOW",
        name="Dow",
        about="Dow, Inc. materials science company, combining science and technology to develop innovative solutions. It operates through three business segments: Performance Materials & Coatings, Industrial Intermediates & Infrastructure, and Packaging & Specialty Plastics. The Performance Materials & Coatings segment includes industry-franchises that deliver a wide array of solutions into consumer and infrastructure end-markets. The segment consists of two global businesses: Coatings & Performance Monomers and Consumer Solutions. These businesses primarily utilize Dow’s acrylics, cellulosics- and silicone-based technology platforms to serve the needs of the architectural and industrial coatings, home care and personal care end-markets. The Industrial Intermediates & Infrastructure segment consists of two customer-centric global businesses Industrial Solutions and Polyurethanes & CAV that develop important intermediate chemicals that are essential to manufacturing processes, as well as downstream, customized materials and formulations that use advanced development technologies. The Packaging & Specialty Plastics segment consists of two global businesses: Hydrocarbons & Energy and Packaging and Specialty Plastics. The company was founded in 1897 and is headquartered in Midland, MI. The listed name for DOW is Dow Inc. ",
        ceo="James R. Fitterling",
        employees="35700",
        headquarters="Midland, Michigan",
        founded="1897"
    )
    eleven = Stock(
        symbol="GS",
        name="Goldman Sachs",
        about="Goldman Sachs Group, Inc. engages in global investment banking, securities, and investment management, which provides financial services. It operates through the following business segments: Investment Banking, Global Markets, Asset Management, and Consumer & Wealth Management. The Investment Banking segment serves public and private sector clients around the world and provides financial advisory services, help companies raise capital to strengthen and grow their businesses and provide financing to corporate clients. The Global Markets segment serves its clients who buy and sell financial products, funding and manage risk. The Asset Management segment provides investment services to help clients preserve and grow their financial assets. The Consumer & Wealth Management segment helps clients to achieve their individual financial goals by providing a wealth advisory and banking services. The company was founded by Marcus Goldman in 1869 and is headquartered in New York, NY. The listed name for GS is Goldman Sachs Group Inc.",
        ceo="David Michael Solomon",
        employees="40500",
        headquarters="New York, New York",
        founded="1869"
    )
    twelve = Stock(
        symbol="HD",
        name="Home Depot",
        about="The Home Depot, Inc. engages in the sale of building materials and home improvement products. Its products include building materials, home improvement products, lawn and garden products and decor products. The firm operates through the following geographical segments: U.S., Canada and Mexico. It offers home improvement installation services, and tool and equipment rental. The company was founded by Bernard Marcus, Arthur M. Blank, Kenneth Gerald Langone and Pat Farrah on June 29, 1978 and is headquartered at Atlanta, GA. The listed name for HD is Home Depot, Inc.",
        ceo="Craig A. Menear",
        employees="504800",
        headquarters="Atlanta, Georgia",
        founded="1978"
    )
    thirteen = Stock(
        symbol="HON",
        name="Honeywell International",
        about="Honeywell International, Inc. is a software industrial company, which offers industry specific solutions to aerospace and automotive products and services. It specializes in turbochargers control, sensing and security technologies for buildings and homes; specialty chemicals; electronic and advanced materials; process technology for refining and petrochemicals; and energy efficient products and solutions for homes, business and transportation. It operates through the following segments: Aerospace; Home and Building Technologies; Performance Materials and Technologies; and Safety and Productivity Solutions. The Aerospace segment provides aircraft engines, integrated avionics, systems and service solutions, and related products and services for aircraft manufacturers, turbochargers to improve the performance and efficiency of passenger cars and commercial vehicles as well as spare parts, repair, overhaul and maintenance services like, auxiliary power units, propulsion engines, environmental control systems, wireless connectivity services, electric power systems, engine controls, flight safety, communications, navigation hardware and software, radar and surveillance systems, aircraft lighting, management and technical services, advanced systems and instruments, satellite and space components, aircraft wheels and brakes, repair and overhaul services, turbochargers and thermal systems. The Home and Building Technologies segment provides products, software, solutions and technologies that help owners of homes stay connected and in control of their comfort, security and energy use such as controls and displays for heating, cooling, indoor air quality, ventilation, humidification combustion, lighting and home automation; advanced software applications for building control and optimization; sensors, switches, control systems and instruments for measuring pressure, air flow, temperature and electrical current; products, services and solutions for measurement, regulation, control and metering of gases and electricity; metering and communications systems for water utilities and industries; access control; video surveillance; fire products; remote patient monitoring systems; and installation, maintenance, and upgrades of systems. The Performance Materials and Technologies segment develops and manufactures materials, process technologies, and automation solutions. It provides process solutions in automation control, instrumentation, advanced software, and related services for the oil and gas, refining, pulp and paper, industrial power generation, chemicals and petrochemicals, biofuels, life sciences, and metals, minerals and mining industries. The Safety and Productivity Solutions segment provides products, software and connected solutions which include personal protection equipment and footwear designed for work, play and outdoor activities. It also offers gas detection technology, mobile devices and software for computing, data collection and thermal printing; supply chain and warehouse automation equipment, software and solutions; custom-engineered sensors, switches and controls for sensing and productivity solutions; and software-based data and asset management productivity solutions. The company was founded by Albert M. Butz in 1906 and is headquartered in Charlotte, NC. The listed name for HON is Honeywell International Inc. Common Stock.",
        ceo="Darius Adamczyk",
        employees="103000",
        headquarters="Charlotte, North Carolina",
        founded="1906"
    )
    fourteen = Stock(
        symbol="IBM",
        name="IBM",
        about="International Business Machines Corp. is an information technology company, which provides integrated solutions that leverage information technology and knowledge of business processes. It operates through the following segments: Cloud and Cognitive Software, Global Business Services, Global Technology Services, Systems, and Global Financing. The Cloud and Cognitive Software segment provides integrated and secure cloud, data, and solutions to the clients. The Global Business Services segment provides clients with consulting, application management, and business process outsourcing services. The Global Technology Services segment provides comprehensive IT infrastructure and platform services that create business value for clients. The Systems segment provides clients with innovative infrastructure platforms to help meet the requirements of hybrid cloud and enterprise AI workload. The Global Financing segment provides client financing, commercial financing, and participates in the remanufacturing and remarketing of used equipment. The company was founded by Charles Ranlett Flint and Thomas J. Watson Sr. on June 16, 1911 and is headquartered in Armonk, NY. The listed name for IBM is International Business Machines Corporation.",
        ceo="Arvind Krishna",
        employees="375300",
        headquarters="Armonk, New York",
        founded="1911"
    )
    fifteen = Stock(
        symbol="INTC",
        name="Intel",
        about="Intel Corp. engages in the design, manufacture, and sale of computer products and technologies. It delivers computer, networking, data storage, and communications platforms. The firm operates through the following segments: Client Computing Group (CCG), Data Center Group (DCG), Internet of Things Group (IOTG), Non-Volatile Memory Solutions Group (NSG), Programmable Solutions (PSG), and All Other. The CCG segment consists of platforms designed for notebooks, 2-in-1 systems, desktops, tablets, phones, wireless and wired connectivity products, and mobile communication components. The DCG segment includes workload-optimized platforms and related products designed for enterprise, cloud, and communication infrastructure market. The IOTG segment offers compute solutions for targeted verticals and embedded applications for the retail, manufacturing, health care, energy, automotive, and government market segments. The NSG segment constitutes of NAND flash memory products primarily used in solid-state drives. The PSG segment contains programmable semiconductors and related products for a broad range of markets, including communications, data center, industrial, military, and automotive. The All Other segment consists of results from other non-reportable segment and corporate-related charges. The company was founded by Robert Norton Noyce and Gordon Earle Moore on July 18, 1968 and is headquartered in Santa Clara, CA. The listed name for INTC is Intel Corporation Common Stock.",
        ceo="Patrick P. Gelsinger",
        employees="110600",
        headquarters="Santa Clara, California",
        founded="1968"
    )
    sixteen = Stock(
        symbol="JNJ",
        name="Johnson & Johnson",
        about="Johnson & Johnson is a holding company, which engages in the research and development, manufacture and sale of products in the health care field. It operates through the following segments: Consumer Health, Pharmaceutical, and Medical Devices. The Consumer Health segment includes products used in the baby care, oral care, beauty, over-the-counter pharmaceutical, women's health, and wound care markets. The Pharmaceutical segment focuses on therapeutic areas, such as immunology, infectious diseases, neuroscience, oncology, pulmonary hypertension, and cardiovascular & metabolic diseases. The Medical Devices segment offers products used in the orthopedic, surgery, cardiovascular & neurovascular, and eye health fields. The company was founded by Robert Wood Johnson I, James Wood Johnson and Edward Mead Johnson Sr. in 1886 and is headquartered in New Brunswick, NJ.",
        ceo="Alex Gorsky",
        employees="134500",
        headquarters="New Brunswick, New Jersey",
        founded="1887"
    )
    seventeen = Stock(
        symbol="JPM",
        name="JPMorgan Chase",
        about="JPMorgan Chase & Co. is a financial holding company. It provides financial and investment banking services. The firm offers a range of investment banking products and services in all capital markets, including advising on corporate strategy and structure, capital raising in equity and debt markets, risk management, market making in cash securities and derivative instruments, and brokerage and research. It operates through the following segments: Consumer and Community Banking, Corporate and Investment Bank, Commercial Banking, and Asset and Wealth Management. The Consumer and Community Banking segment serves consumers and businesses through personal service at bank branches and through automated teller machine, online, mobile, and telephone banking. The Corporate and Investment Bank segment offers a suite of investment banking, market-making, prime brokerage, and treasury and securities products and services to a global client base of corporations, investors, financial institutions, government and municipal entities. The Commercial Banking segment delivers services to U.S. and its multinational clients, including corporations, municipalities, financial institutions, and non profit entities. It also provides financing to real estate investors and owners as well as financial solutions, including lending, treasury services, investment banking, and asset management. The Asset and Wealth Management segment provides asset and wealth management services. The company was founded in 1968 and is headquartered in New York, NY. The listed name for JPM is JPMorgan Chase & Co.",
        ceo="James Dimon",
        employees="255351",
        headquarters="New York, New York",
        founded="1968"
    )
    eighteen = Stock(
        symbol="MCD",
        name="McDonald's",
        about="McDonald's Corp. engages in the operation and franchising of restaurants. It operates through the following segments: U.S.; International Operated Markets, and International Developmental Licensed Markets and Corporate. The U.S. segment focuses its operations in the United States. The International Operated Markets segment comprises operations and franchising of restaurant in Australia, Canada, France, Germany, Italy, the Netherlands, Russia, Spain, and the U.K. The International Developmental Licensed Markets and Corporate segment consists developmental licensee and affiliate markets in the McDonald’s system. The firm's products include Big Mac, Quarter Pounder with Cheese, Filet-O-Fish, several chicken sandwiches, Chicken McNuggets, wraps, McDonald's Fries, salads, oatmeal, shakes, McFlurry desserts, sundaes, soft serve cones, pies, soft drinks, coffee, McCafe beverages, and other beverages. The company was founded by Raymond Albert Kroc on April 15, 1955 and is headquartered in Oak Brook, IL. The listed name for MCD is McDonald's Corporation.",
        ceo="Christopher J. Kempczinski",
        employees="200000",
        headquarters="Chicago, Illinois",
        founded="1955"
    )
    nineteen = Stock(
        symbol="MRK",
        name="Merck",
        about="Merck & Co., Inc. engages in the provision of health solutions through its prescription medicines, vaccines, biologic therapies, animal health, and consumer care products. It operates through the following segments: Pharmaceutical, Animal Health, and Other. The Pharmaceutical segment includes human health pharmaceutical and vaccine products. The Animal Health segment discovers, develops, manufactures, and markets animal health products, such as pharmaceutical and vaccine products, for the prevention, treatment and control of disease in livestock and companion animal species. The Other segment consists of sales for the non-reportable segments of healthcare services. The company was founded in 1891 and is headquartered in Kenilworth, NJ. The listed name for MRK is Merck & Co., Inc.",
        ceo="Robert M. Davis",
        employees="74000",
        headquarters="Kenilworth, New Jersey",
        founded="1891"
    )
    twenty = Stock(
        symbol="MSFT",
        name="Microsoft",
        about="Microsoft Corp. engages in the development and support of software, services, devices, and solutions. It operates through the following business segments: Productivity and Business Processes; Intelligent Cloud; and More Personal Computing. The Productivity and Business Processes segment comprises products and services in the portfolio of productivity, communication, and information services of the company spanning a variety of devices and platform. The Intelligent Cloud segment refers to the public, private, and hybrid serve products and cloud services of the company which can power modern business. The More Personal Computing segment encompasses products and services geared towards the interests of end users, developers, and IT professionals across all devices. The firm also offers operating systems; cross-device productivity applications; server applications; business solution applications; desktop and server management tools; software development tools; video games; personal computers, tablets; gaming and entertainment consoles; other intelligent devices; and related accessories. The company was founded by Paul Gardner Allen and William Henry Gates III in 1975 and is headquartered in Redmond, WA. The listed name for MSFT is Microsoft Corporation Common Stock.",
        ceo="Satya Nadella",
        employees="163000",
        headquarters="Redmond, Washington",
        founded="1975"
    )
    twentyone = Stock(
        symbol="NKE",
        name="Nike",
        about="NIKE, Inc. engages in the design, development, marketing, and sale of athletic footwear, apparel, accessories, equipment, and services. It operates through the following segments: North America; Europe, Middle East & Africa; Greater China; Asia Pacific & Latin America; Global Brand Divisions; Converse; and Corporate. The North America; Europe, Middle East & Africa; Greater China; and Asia Pacific & Latin America segments refers to the design, development, marketing, and selling of athletic footwear, apparel, and equipment. The Global Brand Divisions represents NIKE Brand licensing businesses. The Converse segment designs, markets, licenses, and sells casual sneakers, apparel, and accessories. The Corporate segment consists of unallocated general and administrative expenses. The company was founded by William Jay Bowerman and Philip H. Knight on January 25, 1964 and is headquartered in Beaverton, OR. The listed name for NKE is Nike, Inc.",
        ceo="John J. Donahoe",
        employees="75400",
        headquarters="Beaverton, Oregon",
        founded="1964"
    )
    twentytwo = Stock(
        symbol="PG",
        name="Procter & Gamble",
        about="Procter & Gamble Co. engages in the provision of branded consumer packaged goods. It operates through the following segments: Beauty; Grooming; Health Care; Fabric & Home Care; and Baby, Feminine & Family Care. The Beauty segment offers hair, skin, and personal care. The Grooming segment comprises of shave care like female and male blades and razors, pre and post shave products, and appliances. The Health Care segment includes oral care products like toothbrushes, toothpaste, and personal health care such as gastrointestinal, rapid diagnostics, respiratory, and vitamins, minerals, and supplements. The Fabric and Home Care segment consist of fabric enhancers, laundry additives and detergents, and air, dish, and surface care. The Baby, Feminine and Family Care segment sells baby wipes, diapers, and pants, adult incontinence, feminine care, paper towels, tissues, and toilet paper. The company was founded by William Procter and James Gamble in 1837 and is headquartered in Cincinnati, OH. The listed name for PG is Procter & Gamble Company.",
        ceo="David S. Taylor",
        employees="99000",
        headquarters="Cincinnati, Ohio",
        founded="1837"
    )
    twentythree = Stock(
        symbol="CRM",
        name="Salesforce",
        about="salesforce.com, inc. engages in the design and development of cloud-based enterprise software for customer relationship management. Its solutions include sales force automation, customer service and support, marketing automation, digital commerce, community management, collaboration, industry-specific solutions, and salesforce platform. The firm also provides guidance, support, training, and advisory services. The company was founded by Marc Russell Benioff, Parker Harris, David Moellenhoff and Frank Dominguez in February 1999 and is headquartered in San Francisco, CA. The listed name for CRM is salesforce.com, inc.",
        ceo="Marc Russell Benioff",
        employees="56606",
        headquarters="San Francisco, California",
        founded="1999"
    )
    twentyfour = Stock(
        symbol="TRV",
        name="Travelers",
        about="The Travelers Cos., Inc. is a holding company, which engages in the provision of commercial and personal property and casualty insurance products and services. It operates through the following business segments: Business Insurance, Bond and Specialty Insurance, and Personal Insurance. The Business Insurance segment offers a broad array of property and casualty insurance, and insurance related services to its customers. The Bond and Specialty Insurance segment includes surety, fidelity, management liability, professional liability, and other property and casualty coverage and related risk management services. The Personal Insurance segment consists of products of automobile and homeowners insurance are complemented by a broad suite of related coverages. The company was founded in 1853 and is headquartered in New York, NY. The listed name for TRV is The Travelers Companies, Inc.",
        ceo="Alan D. Schnitzer",
        employees="30600",
        headquarters="New York, New York",
        founded="1853"
    )
    twentyfive = Stock(
        symbol="UNH",
        name="UnitedHealth",
        about="UnitedHealth Group, Inc. engages in the provision of health care coverage, software, and data consultancy services. It operates through the following segments: UnitedHealthcare, OptumHealth, OptumInsight, and OptumRx. The UnitedHealthcare segment utilizes Optum's capabilities to help coordinate patient care, improve affordability of medical care, analyze cost trends, manage pharmacy benefits, work with care providers more effectively, and create a simpler consumer experience. The OptumHealth segment provides health services business serving the broad health care marketplace, including payers, care providers, employers, government, life sciences companies, and consumers. The OptumInsight segment focuses on data and analytics, technology, and information to help major participants in the health care industry. The OptumRx segment provides pharmacy care services. The company was founded by Richard T. Burke in January 1977 and is headquartered in Minnetonka, MN. The listed name for UNH is UNITEDHEALTH GROUP INCORPORATED (Delaware).",
        ceo="Sir Andrew Philip Witty",
        employees="330000",
        headquarters="Minnetonka, Minnesota",
        founded="1977"
    )
    twentysix = Stock(
        symbol="VZ",
        name="Verizon",
        about="Verizon Communications, Inc. is a holding company, which engages in the provision of communications, information, and entertainment products and services to consumers, businesses, and governmental agencies. It operates through the Verizon Consumer Group (Consumer) and Verizon Business Group (Business) segments. The Consumer segment provides consumer-focused wireless and wire line communications services and products. The Business segment offers wireless and wire line communications services and products; video and data services; corporate networking solutions; security and managed network services; local and long distance voice services; and network access to deliver various Internet of Things (IoT) services and products. The company was founded in 1983 and is headquartered in New York, NY. The listed name for VZ is Verizon Communications.",
        ceo="Hans Erik Vestberg",
        employees="132200",
        headquarters="New York, New York",
        founded="1983"
    )
    twentyseven = Stock(
        symbol="V",
        name="Visa",
        about="Visa, Inc. engages in the provision of digital payment services. It also facilitates global commerce through the transfer of value and information among global network of consumers, merchants, financial institutions, businesses, strategic partners, and government entities. It offers debit card, credit card, prepaid products, commercial payment solutions, and global ATM. The company was founded by Dee Hock in 1958 and is headquartered in San Francisco, CA. The listed name for V is VISA Inc.",
        ceo="Alfred F. Kelly",
        employees="20500",
        headquarters="San Francisco, California",
        founded="1958"
    )
    twentyeight = Stock(
        symbol="WMT",
        name="Walmart",
        about="Walmart, Inc. engages in retail and wholesale business. The Company offers an assortment of merchandise and services at everyday low prices. It operates through the following business segments: Walmart U.S., Walmart International, and Sam's Club. The Walmart U.S. segment operates as a merchandiser of consumer products, operating under the Walmart, Wal-Mart, and Walmart Neighborhood Market brands, as well as walmart.com and other eCommerce brands. The Walmart International segment manages supercenters, supermarkets, hypermarkets, warehouse clubs, and cash and carry outside of the United States. The Sam's Club segment comprises membership-only warehouse clubs and samsclubs.com. The company was founded by Samuel Moore Walton and James Lawrence Walton in 1945 and is headquartered in Bentonville, AR. The listed name for WMT is Walmart Inc.",
        ceo="C. Douglas McMillon",
        employees="2300000",
        headquarters="Bentonville, Arkansas",
        founded="1945"
    )
    twentynine = Stock(
        symbol="WBA",
        name="Walgreens",
        about="Walgreens Boots Alliance, Inc. engages in the provision of drug store services. It operates through the following segments: Retail Pharmacy USA, Retail Pharmacy International, and Pharmaceutical Wholesale. The Retail Pharmacy USA segment consists of the Walgreens business, which includes the operation of retail drugstores, health and wellness services, and mail and central specialty pharmacy services. The Retail Pharmacy International segment consists of pharmacy-led health and beauty retail businesses and optical practices. The Pharmaceutical Wholesale segment consists of the Alliance Healthcare pharmaceutical wholesaling and distribution businesses and an equity method investment in AmerisourceBergen. The company was founded in 1901 and is headquartered in Deerfield, IL. The listed name for WBA is Walgreens Boots Alliance, Inc. Common Stock.",
        ceo="Rosalind Gates Brewer",
        employees="331000",
        headquarters="Deerfield, Illinois",
        founded="1901"
    )
    thirty = Stock(
        symbol="DIS",
        name="Disney",
        about="The Walt Disney Co. is a diversified international family entertainment and media enterprise. It operates through the following segments: Media Networks, Parks, Experiences and Products, Studio Entertainment and Direct-to-Consumer and International (DTCI). The Media Networks segment includes cable and broadcast television networks, television production and distribution operations, domestic television stations, radio networks and stations. The Parks, Experiences and Products segment owns and operates the Walt Disney World Resort in Florida; the Disneyland Resort in California; Aulani, a Disney Resort & Spa in Hawaii; the Disney Vacation Club; the Disney Cruise Line; and Adventures by Disney. The Studio Entertainment segment produces and acquires live-action and animated motion pictures, direct-to-video content, musical recordings and live stage plays. This segment distributes films primarily under the Walt Disney Pictures, Pixar, Marvel, Lucasfilm and Touchstone banners. The DTCI segment licenses the company's trade names, characters and visual and literary properties to various manufacturers, game developers, publishers and retailers throughout the world. It also develops and publishes games, primarily for mobile platforms, and books, magazines and comic books. This segment also distributes branded merchandise directly through retail, online and wholesale businesses. The company was founded by Walter Elias Disney on October 16, 1923 and is headquartered in Burbank, CA. The listed name for DIS is The Walt Disney Company.",
        ceo="Robert A. Chapek",
        employees="203000",
        headquarters="Burbank, California",
        founded="1923"
    )

    db.session.add(one)
    db.session.add(two)
    db.session.add(three)
    db.session.add(four)
    db.session.add(five)
    db.session.add(six)
    db.session.add(seven)
    db.session.add(eight)
    db.session.add(nine)
    db.session.add(ten)
    db.session.add(eleven)
    db.session.add(twelve)
    db.session.add(thirteen)
    db.session.add(fourteen)
    db.session.add(fifteen)
    db.session.add(sixteen)
    db.session.add(seventeen)
    db.session.add(eighteen)
    db.session.add(nineteen)
    db.session.add(twenty)
    db.session.add(twentyone)
    db.session.add(twentytwo)
    db.session.add(twentythree)
    db.session.add(twentyfour)
    db.session.add(twentyfive)
    db.session.add(twentysix)
    db.session.add(twentyseven)
    db.session.add(twentyeight)
    db.session.add(twentynine)
    db.session.add(thirty)

    db.session.commit()

def undo_stocks():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
