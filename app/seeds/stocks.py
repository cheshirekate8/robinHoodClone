from app.models import db, Stock

def seed_stocks():
    one = Stock(
        symbol="MMM",
        name="3M",
        about="3M Co. is a technology company, which manufactures industrial, safety and consumer products. It operates through the following segments: Safety and Industrial, Transportation and Electronics, Health Care, and Consumer. The Safety and Industrial segment consists of personal safety, industrial adhesives and tapes, abrasives, closure and masking systems, electrical markets, automotive aftermarket, and roofing granules. The Transportation and Electronics segment consists of electronics, automotive and aerospace, commercial solutions, advanced materials, and transportation safety. The Health Care segment includes medical and surgical supplies, skin health and infection prevention products, oral care solutions, separation and purification sciences, health information systems, inhalation and transdermal drug delivery systems, and food safety products. The Electronics & Energy segment involves in the optical films solutions for electronic displays, packaging and interconnection devices; insulating and splicing solutions; touch screens and touch monitors; renewable energy component solutions; and infrastructure protection products. The Consumer segment products includes office supply products, stationery products, home improvement products, home care products, protective material products, certain consumer retail personal safety products, and consumer health care products. The company was founded by Henry S. Bryan, Hermon W. Cable, John Dwan, William A. McGonagle and J. Danley Budd in 1902 and is headquartered in St. Paul, MN. The listed name for MMM is 3M Company.",
        ceo="Michael F. Roman",
        employees="94987",
        headquarters="St. Paul, Minnesota",
        founded="1902",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/1/15/3M_wordmark.svg"
    )
    two = Stock(
        symbol="AXP",
        name="American Express",
        about="Consumer Services Group, Global Commercial Services, Global Merchant and Network Services, and Corporate and Other. The Global Consumer Services Group segment issues a wide range of proprietary consumer cards globally. The Global Commercial Services segment provides proprietary corporate and small business cards, payment and expense management services, and commercial financing products. The Global Merchant and Network Services segment operates a global payments network that processes and settles card transactions, acquires merchants, and provides multi-channel marketing programs and capabilities, services, and data analytics. The Corporate and Other segment covers corporate functions and certain other businesses and operations. The company was founded by Henry Wells, William G. Fargo, and John Warren Butterfield on March 28, 1850 and is headquartered in New York, NY. The listed name for AXP is American Express Company.",
        ceo="Stephen J. Squeri",
        employees="63700",
        headquarters="New York, New York",
        founded="1850",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/American_Express_logo_%282018%29.svg/1200px-American_Express_logo_%282018%29.svg.png"
    )
    three = Stock(
        symbol="AMGN",
        name="Amgen",
        about="Amgen, Inc. is a biotechnology company, which engages in the discovery, development, manufacture and marketing of human therapeutics. Its products include the following brands: Aranesp, Aimovig, KANJINTI, EVENITY, AMGEVITA, AVSOLA, BLINCYTO, MVASI, Corlanor, Enbrel, EPOGEN, IMLYGIC, Kyprolis, Neulasta, NEUPOGEN, Nplate, Parsabiv, Prolia, Repatha, Sensipar, Vectibix, Otezla, RIABNI, and XGEVA. The company was founded by William K. Bowes, Jr., Franklin Pitcher Johnson, Jr., George B. Rathmann, and Joseph Rubinfeld on April 8, 1980 and is headquartered in Thousand Oaks, CA. The listed name for AMGN is Amgen Inc. Common Stock.",
        ceo="Robert A. Bradway",
        employees="24300",
        headquarters="Thousand Oaks, California",
        founded="1980",
        imgUrl="https://americanbonehealth.org/wp-content/uploads/2016/08/Amgen-logo.png"
    )
    four = Stock(
        symbol="AAPL",
        name="Apple",
        about="Apple, Inc. engages in the design, manufacture, and sale of smartphones, personal computers, tablets, wearables and accessories, and other variety of related services. It operates through the following geographical segments: Americas, Europe, Greater China, Japan, and Rest of Asia Pacific. The Americas segment includes North and South America. The Europe segment consists of European countries, as well as India, the Middle East, and Africa. The Greater China segment comprises of China, Hong Kong, and Taiwan. The Rest of Asia Pacific segment includes Australia and Asian countries. Its products and services include iPhone, Mac, iPad, AirPods, Apple TV, Apple Watch, Beats products, Apple Care, iCloud, digital content stores, streaming, and licensing services. The company was founded by Steven Paul Jobs, Ronald Gerald Wayne, and Stephen G. Wozniak in 1977 and is headquartered in Cupertino, CA. The listed name for AAPL is Apple Inc. Common Stock.",
        ceo="Timothy Donald Cook",
        employees="147000",
        headquarters="Cupertino, California",
        founded="1976",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/842px-Apple_logo_black.svg.png"
    )
    five = Stock(
        symbol="BA",
        name="Boeing",
        about="The Boeing Co. is an aerospace company, which engages in the manufacture of commercial jetliners and defense, space and security systems. It operates through the following segments: Commercial Airplanes; Defense, Space and Security; Global Services; and Boeing Capital. The Commercial Airplanes segment includes the development, production, and market of commercial jet aircraft and provides fleet support services, principally to the commercial airline industry worldwide. The Defense, Space and Security segment refers to the research, development, production and modification of manned and unmanned military aircraft and weapons systems for global strike, including fighter and combat rotorcraft aircraft and missile systems; global mobility, including tanker, rotorcraft and tilt-rotor aircraft; and airborne surveillance and reconnaissance, including command and control, battle management and airborne anti-submarine aircraft. The Global Services segment provides services to commercial and defense customers. The Boeing Capital segment seeks to ensure that Boeing customers have the financing they need to buy and take delivery of their Boeing product and manages overall financing exposure. The company was founded by William Edward Boeing on July 15, 1916 and is headquartered in Chicago, IL. The listed name for BA is Boeing Company.",
        ceo="David L. Calhoun",
        employees="141000",
        headquarters="Chicago, Illinois",
        founded="1916",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Boeing_full_logo.svg/2560px-Boeing_full_logo.svg.png"
    )
    six = Stock(
        symbol="CAT",
        name="Caterpillar",
        about="Caterpillar, Inc. engages in the manufacture of construction and mining equipment, diesel and natural gas engines, industrial gas turbines, and diesel-electric locomotives. It operates through the following segments: Construction Industries, Resource Industries, Energy and Transportation, Financial Products, and All Other. The Construction Industries segment supports customers using machinery in infrastructure and building construction applications. The Resource Industries segment is responsible for supporting customers using machinery in mining and quarrying applications and it includes business strategy, product design, product management and development, manufacturing, marketing and sales and product support. The Energy and Transportation segment supports customers in oil and gas, power generation, marine, rail, and industrial applications. The Financial Products segment offers a range of financing alternatives to customers and dealers for caterpillar machinery and engines, solar gas turbines, as well as other equipment and marine vessels. The All Other segment include activities such as the business strategy, product management and development, and manufacturing of filters and fluids, undercarriage, tires and rims, engaging tools, and fluid transfers. The company was founded on April 15, 1925 and is headquartered in Deerfield, IL. The listed name for CAT is Caterpillar Inc. ",
        ceo="Donald James Umpleby",
        employees="97300",
        headquarters="Deerfield, Illinois",
        founded="1925",
        imgUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ACaterpillar-shortened.svg&psig=AOvVaw2jh7QCM4VWuSNe4rDtsJPh&ust=1626885806902000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCODXn4eM8vECFQAAAAAdAAAAABAD"
    )
    seven = Stock(
        symbol="CVX",
        name="Chevron",
        about="Chevron Corp. engages in the provision of administrative, financial management, and technology support for energy and chemical operations. It operates through the Upstream and Downstream segments. The Upstream segment consists of exploration, development, and production of crude oil and natural gas; liquefaction, transportation, and regasification associated with liquefied natural gas; transporting crude oil by major international oil export pipelines; processing, transporting, storage, and marketing of natural gas; and a gas-to-liquids plant. The Downstream segment comprises refining of crude oil into petroleum products; marketing of crude oil and refined products; transporting of crude oil and refined products by pipeline, marine vessel, motor equipment, and rail car; and manufacturing and marketing of commodity petrochemicals, plastics for industrial uses, and fuel and lubricant additives. The company was founded in 1906 and is headquartered in San Ramon, CA. The listed name for CVX is Chevron Corporation.",
        ceo="Michael K. Wirth",
        employees="47736",
        headquarters="San Ramon, California",
        founded="1906",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Chevron_Logo.svg/1200px-Chevron_Logo.svg.png"
    )
    eight = Stock(
        symbol="CSCO",
        name="Cisco Systems",
        about="Cisco Systems, Inc. engages in the design, manufacture, and sale of Internet Protocol based networking products and services related to the communications and information technology industry. The firm operates through the following geographical segments: the Americas, EMEA, and APJC. Its product comprises of the following categories: Switches, Routers, Wireless, Network Management Interfaces and Modules, Optical Networking, Access Points, Outdoor and Industrial Access Points, Next-Generation Firewalls, Advanced Malware Protection, VPN Security Clients, Email, and Web Security. The company was founded by Sandra Lerner and Leonard Bosack on December 10, 1984 and is headquartered in San Jose, CA. The listed name for CSCO is Cisco Systems, Inc. Common Stock (DE).",
        ceo="Charles H. Robbins",
        employees="77500",
        headquarters="San Jose, California",
        founded="1984",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Cisco_logo_blue_2016.svg/1200px-Cisco_logo_blue_2016.svg.png"
    )
    nine = Stock(
        symbol="KO",
        name="Coca-Cola",
        about="The Coca-Cola Co. is the nonalcoholic beverage company, which engages in the manufacture, market, and sale of non-alcoholic beverages which include sparkling soft drinks, water, enhanced water and sports drinks, juice, dairy and plant-based beverages, tea and coffee and energy drinks. Its brands include Coca-Cola, Diet Coke, Coca-Cola Zero, Fanta, Sprite, Minute Maid, Georgia, Powerade, Del Valle, Schweppes, Aquarius, Minute Maid Pulpy, Dasani, Simply, Glaceau Vitaminwater, Bonaqua, Gold Peak, Fuze Tea, Glaceau Smartwater, and Ice Dew. It operates through the following segments: Europe, Middle East and Africa, Latin America, North America, Asia Pacific, Bottling Investments and Global Ventures. The company was founded by Asa Griggs Candler in 1886 and is headquartered in Atlanta, GA. The listed name for KO is Coca-Cola Company.",
        ceo="James Quincey",
        employees="80300",
        headquarters="Atlanta, Georgia",
        founded="1886",
        imgUrl="https://www.coca-cola.com/content/dam/brands/tw/coca-cola/image/coke-logo.png"
    )
    ten = Stock(
        symbol="DOW",
        name="Dow",
        about="Dow, Inc. materials science company, combining science and technology to develop innovative solutions. It operates through three business segments: Performance Materials & Coatings, Industrial Intermediates & Infrastructure, and Packaging & Specialty Plastics. The Performance Materials & Coatings segment includes industry-franchises that deliver a wide array of solutions into consumer and infrastructure end-markets. The segment consists of two global businesses: Coatings & Performance Monomers and Consumer Solutions. These businesses primarily utilize Dow’s acrylics, cellulosics- and silicone-based technology platforms to serve the needs of the architectural and industrial coatings, home care and personal care end-markets. The Industrial Intermediates & Infrastructure segment consists of two customer-centric global businesses Industrial Solutions and Polyurethanes & CAV that develop important intermediate chemicals that are essential to manufacturing processes, as well as downstream, customized materials and formulations that use advanced development technologies. The Packaging & Specialty Plastics segment consists of two global businesses: Hydrocarbons & Energy and Packaging and Specialty Plastics. The company was founded in 1897 and is headquartered in Midland, MI. The listed name for DOW is Dow Inc. ",
        ceo="James R. Fitterling",
        employees="35700",
        headquarters="Midland, Michigan",
        founded="1897",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Dow_Chemical_Company_logo.svg/1200px-Dow_Chemical_Company_logo.svg.png"
    )
    eleven = Stock(
        symbol="GS",
        name="Goldman Sachs",
        about="Goldman Sachs Group, Inc. engages in global investment banking, securities, and investment management, which provides financial services. It operates through the following business segments: Investment Banking, Global Markets, Asset Management, and Consumer & Wealth Management. The Investment Banking segment serves public and private sector clients around the world and provides financial advisory services, help companies raise capital to strengthen and grow their businesses and provide financing to corporate clients. The Global Markets segment serves its clients who buy and sell financial products, funding and manage risk. The Asset Management segment provides investment services to help clients preserve and grow their financial assets. The Consumer & Wealth Management segment helps clients to achieve their individual financial goals by providing a wealth advisory and banking services. The company was founded by Marcus Goldman in 1869 and is headquartered in New York, NY. The listed name for GS is Goldman Sachs Group Inc.",
        ceo="David Michael Solomon",
        employees="40500",
        headquarters="New York, New York",
        founded="1869",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/2048px-Goldman_Sachs.svg.png"
    )
    twelve = Stock(
        symbol="HD",
        name="Home Depot",
        about="The Home Depot, Inc. engages in the sale of building materials and home improvement products. Its products include building materials, home improvement products, lawn and garden products and decor products. The firm operates through the following geographical segments: U.S., Canada and Mexico. It offers home improvement installation services, and tool and equipment rental. The company was founded by Bernard Marcus, Arthur M. Blank, Kenneth Gerald Langone and Pat Farrah on June 29, 1978 and is headquartered at Atlanta, GA. The listed name for HD is Home Depot, Inc.",
        ceo="Craig A. Menear",
        employees="504800",
        headquarters="Atlanta, Georgia",
        founded="1978",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/TheHomeDepot.svg/1200px-TheHomeDepot.svg.png"
    )
    thirteen = Stock(
        symbol="HON",
        name="Honeywell International",
        about="Honeywell International, Inc. is a software industrial company, which offers industry specific solutions to aerospace and automotive products and services. It specializes in turbochargers control, sensing and security technologies for buildings and homes; specialty chemicals; electronic and advanced materials; process technology for refining and petrochemicals; and energy efficient products and solutions for homes, business and transportation. It operates through the following segments: Aerospace; Home and Building Technologies; Performance Materials and Technologies; and Safety and Productivity Solutions. The Aerospace segment provides aircraft engines, integrated avionics, systems and service solutions, and related products and services for aircraft manufacturers, turbochargers to improve the performance and efficiency of passenger cars and commercial vehicles as well as spare parts, repair, overhaul and maintenance services like, auxiliary power units, propulsion engines, environmental control systems, wireless connectivity services, electric power systems, engine controls, flight safety, communications, navigation hardware and software, radar and surveillance systems, aircraft lighting, management and technical services, advanced systems and instruments, satellite and space components, aircraft wheels and brakes, repair and overhaul services, turbochargers and thermal systems. The Home and Building Technologies segment provides products, software, solutions and technologies that help owners of homes stay connected and in control of their comfort, security and energy use such as controls and displays for heating, cooling, indoor air quality, ventilation, humidification combustion, lighting and home automation; advanced software applications for building control and optimization; sensors, switches, control systems and instruments for measuring pressure, air flow, temperature and electrical current; products, services and solutions for measurement, regulation, control and metering of gases and electricity; metering and communications systems for water utilities and industries; access control; video surveillance; fire products; remote patient monitoring systems; and installation, maintenance, and upgrades of systems. The Performance Materials and Technologies segment develops and manufactures materials, process technologies, and automation solutions. It provides process solutions in automation control, instrumentation, advanced software, and related services for the oil and gas, refining, pulp and paper, industrial power generation, chemicals and petrochemicals, biofuels, life sciences, and metals, minerals and mining industries. The Safety and Productivity Solutions segment provides products, software and connected solutions which include personal protection equipment and footwear designed for work, play and outdoor activities. It also offers gas detection technology, mobile devices and software for computing, data collection and thermal printing; supply chain and warehouse automation equipment, software and solutions; custom-engineered sensors, switches and controls for sensing and productivity solutions; and software-based data and asset management productivity solutions. The company was founded by Albert M. Butz in 1906 and is headquartered in Charlotte, NC. The listed name for HON is Honeywell International Inc. Common Stock.",
        ceo="Darius Adamczyk",
        employees="103000",
        headquarters="Charlotte, North Carolina",
        founded="1906",
        imgUrl="https://pbs.twimg.com/profile_images/746373313698603008/pxHBeDZv.jpg"
    )
    fourteen = Stock(
        symbol="IBM",
        name="IBM",
        about="International Business Machines Corp. is an information technology company, which provides integrated solutions that leverage information technology and knowledge of business processes. It operates through the following segments: Cloud and Cognitive Software, Global Business Services, Global Technology Services, Systems, and Global Financing. The Cloud and Cognitive Software segment provides integrated and secure cloud, data, and solutions to the clients. The Global Business Services segment provides clients with consulting, application management, and business process outsourcing services. The Global Technology Services segment provides comprehensive IT infrastructure and platform services that create business value for clients. The Systems segment provides clients with innovative infrastructure platforms to help meet the requirements of hybrid cloud and enterprise AI workload. The Global Financing segment provides client financing, commercial financing, and participates in the remanufacturing and remarketing of used equipment. The company was founded by Charles Ranlett Flint and Thomas J. Watson Sr. on June 16, 1911 and is headquartered in Armonk, NY. The listed name for IBM is International Business Machines Corporation.",
        ceo="Arvind Krishna",
        employees="375300",
        headquarters="Armonk, New York",
        founded="1911",
        imgUrl="https://www.graphis.com/media/uploads/cache/e4/08/e408c55f7cc2a638e44e2343460ff5ce.jpg"
    )
    fifteen = Stock(
        symbol="INTC",
        name="Intel",
        about="Intel Corp. engages in the design, manufacture, and sale of computer products and technologies. It delivers computer, networking, data storage, and communications platforms. The firm operates through the following segments: Client Computing Group (CCG), Data Center Group (DCG), Internet of Things Group (IOTG), Non-Volatile Memory Solutions Group (NSG), Programmable Solutions (PSG), and All Other. The CCG segment consists of platforms designed for notebooks, 2-in-1 systems, desktops, tablets, phones, wireless and wired connectivity products, and mobile communication components. The DCG segment includes workload-optimized platforms and related products designed for enterprise, cloud, and communication infrastructure market. The IOTG segment offers compute solutions for targeted verticals and embedded applications for the retail, manufacturing, health care, energy, automotive, and government market segments. The NSG segment constitutes of NAND flash memory products primarily used in solid-state drives. The PSG segment contains programmable semiconductors and related products for a broad range of markets, including communications, data center, industrial, military, and automotive. The All Other segment consists of results from other non-reportable segment and corporate-related charges. The company was founded by Robert Norton Noyce and Gordon Earle Moore on July 18, 1968 and is headquartered in Santa Clara, CA. The listed name for INTC is Intel Corporation Common Stock.",
        ceo="Patrick P. Gelsinger",
        employees="110600",
        headquarters="Santa Clara, California",
        founded="1968",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Intel_logo_%282006-2020%29.svg/1005px-Intel_logo_%282006-2020%29.svg.png"
    )
    sixteen = Stock(
        symbol="JNJ",
        name="Johnson & Johnson",
        about="Johnson & Johnson is a holding company, which engages in the research and development, manufacture and sale of products in the health care field. It operates through the following segments: Consumer Health, Pharmaceutical, and Medical Devices. The Consumer Health segment includes products used in the baby care, oral care, beauty, over-the-counter pharmaceutical, women's health, and wound care markets. The Pharmaceutical segment focuses on therapeutic areas, such as immunology, infectious diseases, neuroscience, oncology, pulmonary hypertension, and cardiovascular & metabolic diseases. The Medical Devices segment offers products used in the orthopedic, surgery, cardiovascular & neurovascular, and eye health fields. The company was founded by Robert Wood Johnson I, James Wood Johnson and Edward Mead Johnson Sr. in 1886 and is headquartered in New Brunswick, NJ.",
        ceo="Alex Gorsky",
        employees="134500",
        headquarters="New Brunswick, New Jersey",
        founded="1887",
        imgUrl="https://jnj-content-lab.brightspotcdn.com/dims4/default/d2f0c92/2147483647/strip/true/crop/1582x732+0+147/resize/1440x666!/quality/90/?url=http%3A%2F%2Fjnj-brightspot.s3.amazonaws.com%2F56%2F24%2F4ff7ecca4df6abb4559038a3ea89%2Flede-agletter-06.02.20.png"
    )
    seventeen = Stock(
        symbol="JPM",
        name="JPMorgan Chase",
        about="JPMorgan Chase & Co. is a financial holding company. It provides financial and investment banking services. The firm offers a range of investment banking products and services in all capital markets, including advising on corporate strategy and structure, capital raising in equity and debt markets, risk management, market making in cash securities and derivative instruments, and brokerage and research. It operates through the following segments: Consumer and Community Banking, Corporate and Investment Bank, Commercial Banking, and Asset and Wealth Management. The Consumer and Community Banking segment serves consumers and businesses through personal service at bank branches and through automated teller machine, online, mobile, and telephone banking. The Corporate and Investment Bank segment offers a suite of investment banking, market-making, prime brokerage, and treasury and securities products and services to a global client base of corporations, investors, financial institutions, government and municipal entities. The Commercial Banking segment delivers services to U.S. and its multinational clients, including corporations, municipalities, financial institutions, and non profit entities. It also provides financing to real estate investors and owners as well as financial solutions, including lending, treasury services, investment banking, and asset management. The Asset and Wealth Management segment provides asset and wealth management services. The company was founded in 1968 and is headquartered in New York, NY. The listed name for JPM is JPMorgan Chase & Co.",
        ceo="James Dimon",
        employees="255351",
        headquarters="New York, New York",
        founded="1968",
        imgUrl="https://static.jopwell.com/pro/Ydv4202e1b2c102f0df8b50f695b5a861/JPMC-C0_stacked_400x400.jpg"
    )
    eighteen = Stock(
        symbol="MCD",
        name="McDonald's",
        about="McDonald's Corp. engages in the operation and franchising of restaurants. It operates through the following segments: U.S.; International Operated Markets, and International Developmental Licensed Markets and Corporate. The U.S. segment focuses its operations in the United States. The International Operated Markets segment comprises operations and franchising of restaurant in Australia, Canada, France, Germany, Italy, the Netherlands, Russia, Spain, and the U.K. The International Developmental Licensed Markets and Corporate segment consists developmental licensee and affiliate markets in the McDonald’s system. The firm's products include Big Mac, Quarter Pounder with Cheese, Filet-O-Fish, several chicken sandwiches, Chicken McNuggets, wraps, McDonald's Fries, salads, oatmeal, shakes, McFlurry desserts, sundaes, soft serve cones, pies, soft drinks, coffee, McCafe beverages, and other beverages. The company was founded by Raymond Albert Kroc on April 15, 1955 and is headquartered in Oak Brook, IL. The listed name for MCD is McDonald's Corporation.",
        ceo="Christopher J. Kempczinski",
        employees="200000",
        headquarters="Chicago, Illinois",
        founded="1955",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png"
    )
    nineteen = Stock(
        symbol="MRK",
        name="Merck",
        about="Merck & Co., Inc. engages in the provision of health solutions through its prescription medicines, vaccines, biologic therapies, animal health, and consumer care products. It operates through the following segments: Pharmaceutical, Animal Health, and Other. The Pharmaceutical segment includes human health pharmaceutical and vaccine products. The Animal Health segment discovers, develops, manufactures, and markets animal health products, such as pharmaceutical and vaccine products, for the prevention, treatment and control of disease in livestock and companion animal species. The Other segment consists of sales for the non-reportable segments of healthcare services. The company was founded in 1891 and is headquartered in Kenilworth, NJ. The listed name for MRK is Merck & Co., Inc.",
        ceo="Robert M. Davis",
        employees="74000",
        headquarters="Kenilworth, New Jersey",
        founded="1891",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Merck_%26_Co.svg/1280px-Merck_%26_Co.svg.png"
    )
    twenty = Stock(
        symbol="MSFT",
        name="Microsoft",
        about="Microsoft Corp. engages in the development and support of software, services, devices, and solutions. It operates through the following business segments: Productivity and Business Processes; Intelligent Cloud; and More Personal Computing. The Productivity and Business Processes segment comprises products and services in the portfolio of productivity, communication, and information services of the company spanning a variety of devices and platform. The Intelligent Cloud segment refers to the public, private, and hybrid serve products and cloud services of the company which can power modern business. The More Personal Computing segment encompasses products and services geared towards the interests of end users, developers, and IT professionals across all devices. The firm also offers operating systems; cross-device productivity applications; server applications; business solution applications; desktop and server management tools; software development tools; video games; personal computers, tablets; gaming and entertainment consoles; other intelligent devices; and related accessories. The company was founded by Paul Gardner Allen and William Henry Gates III in 1975 and is headquartered in Redmond, WA. The listed name for MSFT is Microsoft Corporation Common Stock.",
        ceo="Satya Nadella",
        employees="163000",
        headquarters="Redmond, Washington",
        founded="1975",
        imgUrl="https://e7.pngegg.com/pngimages/757/1023/png-clipart-microsoft-corporation-microsoft-software-assurance-client-access-license-logo-product-windows-8-1-text-rectangle.png"
    )
    twentyone = Stock(
        symbol="NKE",
        name="Nike",
        about="NIKE, Inc. engages in the design, development, marketing, and sale of athletic footwear, apparel, accessories, equipment, and services. It operates through the following segments: North America; Europe, Middle East & Africa; Greater China; Asia Pacific & Latin America; Global Brand Divisions; Converse; and Corporate. The North America; Europe, Middle East & Africa; Greater China; and Asia Pacific & Latin America segments refers to the design, development, marketing, and selling of athletic footwear, apparel, and equipment. The Global Brand Divisions represents NIKE Brand licensing businesses. The Converse segment designs, markets, licenses, and sells casual sneakers, apparel, and accessories. The Corporate segment consists of unallocated general and administrative expenses. The company was founded by William Jay Bowerman and Philip H. Knight on January 25, 1964 and is headquartered in Beaverton, OR. The listed name for NKE is Nike, Inc.",
        ceo="John J. Donahoe",
        employees="75400",
        headquarters="Beaverton, Oregon",
        founded="1964",
        imgUrl="https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo-1978.jpg"
    )
    twentytwo = Stock(
        symbol="PG",
        name="Procter & Gamble",
        about="Procter & Gamble Co. engages in the provision of branded consumer packaged goods. It operates through the following segments: Beauty; Grooming; Health Care; Fabric & Home Care; and Baby, Feminine & Family Care. The Beauty segment offers hair, skin, and personal care. The Grooming segment comprises of shave care like female and male blades and razors, pre and post shave products, and appliances. The Health Care segment includes oral care products like toothbrushes, toothpaste, and personal health care such as gastrointestinal, rapid diagnostics, respiratory, and vitamins, minerals, and supplements. The Fabric and Home Care segment consist of fabric enhancers, laundry additives and detergents, and air, dish, and surface care. The Baby, Feminine and Family Care segment sells baby wipes, diapers, and pants, adult incontinence, feminine care, paper towels, tissues, and toilet paper. The company was founded by William Procter and James Gamble in 1837 and is headquartered in Cincinnati, OH. The listed name for PG is Procter & Gamble Company.",
        ceo="David S. Taylor",
        employees="99000",
        headquarters="Cincinnati, Ohio",
        founded="1837",
        imgUrl="https://images.ctfassets.net/oggad6svuzkv/4JSezOuLv9CCXfHEBpfGxp/528d1ca0496e3401cd60467235b6441f/P_G_Logo_RGB.png"
    )
    twentythree = Stock(
        symbol="CRM",
        name="Salesforce",
        about="salesforce.com, inc. engages in the design and development of cloud-based enterprise software for customer relationship management. Its solutions include sales force automation, customer service and support, marketing automation, digital commerce, community management, collaboration, industry-specific solutions, and salesforce platform. The firm also provides guidance, support, training, and advisory services. The company was founded by Marc Russell Benioff, Parker Harris, David Moellenhoff and Frank Dominguez in February 1999 and is headquartered in San Francisco, CA. The listed name for CRM is salesforce.com, inc.",
        ceo="Marc Russell Benioff",
        employees="56606",
        headquarters="San Francisco, California",
        founded="1999",
        imgUrl="data:image/png;base64,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"
    )
    twentyfour = Stock(
        symbol="TRV",
        name="Travelers",
        about="The Travelers Cos., Inc. is a holding company, which engages in the provision of commercial and personal property and casualty insurance products and services. It operates through the following business segments: Business Insurance, Bond and Specialty Insurance, and Personal Insurance. The Business Insurance segment offers a broad array of property and casualty insurance, and insurance related services to its customers. The Bond and Specialty Insurance segment includes surety, fidelity, management liability, professional liability, and other property and casualty coverage and related risk management services. The Personal Insurance segment consists of products of automobile and homeowners insurance are complemented by a broad suite of related coverages. The company was founded in 1853 and is headquartered in New York, NY. The listed name for TRV is The Travelers Companies, Inc.",
        ceo="Alan D. Schnitzer",
        employees="30600",
        headquarters="New York, New York",
        founded="1853",
        imgUrl="https://paperless-insurance.com/personal/wp-content/uploads/2020/04/travelers-logo.jpg"
    )
    twentyfive = Stock(
        symbol="UNH",
        name="UnitedHealth",
        about="UnitedHealth Group, Inc. engages in the provision of health care coverage, software, and data consultancy services. It operates through the following segments: UnitedHealthcare, OptumHealth, OptumInsight, and OptumRx. The UnitedHealthcare segment utilizes Optum's capabilities to help coordinate patient care, improve affordability of medical care, analyze cost trends, manage pharmacy benefits, work with care providers more effectively, and create a simpler consumer experience. The OptumHealth segment provides health services business serving the broad health care marketplace, including payers, care providers, employers, government, life sciences companies, and consumers. The OptumInsight segment focuses on data and analytics, technology, and information to help major participants in the health care industry. The OptumRx segment provides pharmacy care services. The company was founded by Richard T. Burke in January 1977 and is headquartered in Minnetonka, MN. The listed name for UNH is UNITEDHEALTH GROUP INCORPORATED (Delaware).",
        ceo="Sir Andrew Philip Witty",
        employees="330000",
        headquarters="Minnetonka, Minnesota",
        founded="1977",
        imgUrl="https://media-thumbs.golden.com/d1DUqmZT5w2lb_Z53RBAohcytLY=/200x200/smart/golden-storage-production.s3.amazonaws.com%2Ftopic_images%2F5a5e758e33d94329a174cca085d74c43.png"
    )
    twentysix = Stock(
        symbol="VZ",
        name="Verizon",
        about="Verizon Communications, Inc. is a holding company, which engages in the provision of communications, information, and entertainment products and services to consumers, businesses, and governmental agencies. It operates through the Verizon Consumer Group (Consumer) and Verizon Business Group (Business) segments. The Consumer segment provides consumer-focused wireless and wire line communications services and products. The Business segment offers wireless and wire line communications services and products; video and data services; corporate networking solutions; security and managed network services; local and long distance voice services; and network access to deliver various Internet of Things (IoT) services and products. The company was founded in 1983 and is headquartered in New York, NY. The listed name for VZ is Verizon Communications.",
        ceo="Hans Erik Vestberg",
        employees="132200",
        headquarters="New York, New York",
        founded="1983",
        imgUrl="data:image/png;base64,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"
    )
    twentyseven = Stock(
        symbol="V",
        name="Visa",
        about="Visa, Inc. engages in the provision of digital payment services. It also facilitates global commerce through the transfer of value and information among global network of consumers, merchants, financial institutions, businesses, strategic partners, and government entities. It offers debit card, credit card, prepaid products, commercial payment solutions, and global ATM. The company was founded by Dee Hock in 1958 and is headquartered in San Francisco, CA. The listed name for V is VISA Inc.",
        ceo="Alfred F. Kelly",
        employees="20500",
        headquarters="San Francisco, California",
        founded="1958",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"
    )
    twentyeight = Stock(
        symbol="WMT",
        name="Walmart",
        about="Walmart, Inc. engages in retail and wholesale business. The Company offers an assortment of merchandise and services at everyday low prices. It operates through the following business segments: Walmart U.S., Walmart International, and Sam's Club. The Walmart U.S. segment operates as a merchandiser of consumer products, operating under the Walmart, Wal-Mart, and Walmart Neighborhood Market brands, as well as walmart.com and other eCommerce brands. The Walmart International segment manages supercenters, supermarkets, hypermarkets, warehouse clubs, and cash and carry outside of the United States. The Sam's Club segment comprises membership-only warehouse clubs and samsclubs.com. The company was founded by Samuel Moore Walton and James Lawrence Walton in 1945 and is headquartered in Bentonville, AR. The listed name for WMT is Walmart Inc.",
        ceo="C. Douglas McMillon",
        employees="2300000",
        headquarters="Bentonville, Arkansas",
        founded="1945",
        imgUrl="data:image/jpeg;base64,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"
    )
    twentynine = Stock(
        symbol="WBA",
        name="Walgreens",
        about="Walgreens Boots Alliance, Inc. engages in the provision of drug store services. It operates through the following segments: Retail Pharmacy USA, Retail Pharmacy International, and Pharmaceutical Wholesale. The Retail Pharmacy USA segment consists of the Walgreens business, which includes the operation of retail drugstores, health and wellness services, and mail and central specialty pharmacy services. The Retail Pharmacy International segment consists of pharmacy-led health and beauty retail businesses and optical practices. The Pharmaceutical Wholesale segment consists of the Alliance Healthcare pharmaceutical wholesaling and distribution businesses and an equity method investment in AmerisourceBergen. The company was founded in 1901 and is headquartered in Deerfield, IL. The listed name for WBA is Walgreens Boots Alliance, Inc. Common Stock.",
        ceo="Rosalind Gates Brewer",
        employees="331000",
        headquarters="Deerfield, Illinois",
        founded="1901",
        imgUrl="https://media-exp1.licdn.com/dms/image/C4D0BAQFHfJyWYriokw/company-logo_200_200/0/1625137193933?e=2159024400&v=beta&t=tQ_eqgA-8PnMaHlFILwObEKBsOS8acSC_3awP47AtRs"
    )
    thirty = Stock(
        symbol="DIS",
        name="Disney",
        about="The Walt Disney Co. is a diversified international family entertainment and media enterprise. It operates through the following segments: Media Networks, Parks, Experiences and Products, Studio Entertainment and Direct-to-Consumer and International (DTCI). The Media Networks segment includes cable and broadcast television networks, television production and distribution operations, domestic television stations, radio networks and stations. The Parks, Experiences and Products segment owns and operates the Walt Disney World Resort in Florida; the Disneyland Resort in California; Aulani, a Disney Resort & Spa in Hawaii; the Disney Vacation Club; the Disney Cruise Line; and Adventures by Disney. The Studio Entertainment segment produces and acquires live-action and animated motion pictures, direct-to-video content, musical recordings and live stage plays. This segment distributes films primarily under the Walt Disney Pictures, Pixar, Marvel, Lucasfilm and Touchstone banners. The DTCI segment licenses the company's trade names, characters and visual and literary properties to various manufacturers, game developers, publishers and retailers throughout the world. It also develops and publishes games, primarily for mobile platforms, and books, magazines and comic books. This segment also distributes branded merchandise directly through retail, online and wholesale businesses. The company was founded by Walter Elias Disney on October 16, 1923 and is headquartered in Burbank, CA. The listed name for DIS is The Walt Disney Company.",
        ceo="Robert A. Chapek",
        employees="203000",
        headquarters="Burbank, California",
        founded="1923",
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/The_WaltDisney_Company-Logo.svg/1280px-The_WaltDisney_Company-Logo.svg.png"
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
    db.session.execute('TRUNCATE stocks RESTART IDENTITY CASCADE;')
    db.session.commit()
