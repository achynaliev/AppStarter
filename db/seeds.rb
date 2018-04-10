# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(username: 'atai', email: 'achynaliev@gmail.com', password: "password")
User.create(username: 'Alex', email: 'atai@alex.com', password: "password")
User.create(username: 'David', email: 'atai@david.com', password: "password")

Project.create(title: "Kira Mechanical Keyboard",
  short_description: "Kira - a compact, full-size mechanical keyboard built without compromise. Designed by Angelo Tobias and the team at Input Club.",
  full_description: "Kira is the ultimate full size mechanical keyboard. Designed by Input Club and legendary keyboard artist Angelo Tobias, its unique RGB underglow and custom mechanical switches give you an unmatched typing experience. Kira is fully hardware programmable, which turns any key into a multi-function macro without active software.",
funding_goal: 10000, funding_end_date: '20190202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/andres-urena-438712-unsplash.jpg",
video_url: "lViakh9YI6Y", user_id: 1)
Project.create(title: "Vion: Auto-Detection l Bluetooth l Smartphone App Multimeter",
  short_description: "The simplest multimeter for the everyday person equipped with automatic detection, Bluetooth connectivity, and a smartphone application",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20180502', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/dollar-gill-389601-unsplash.jpg",
video_url: "51JuFmvJiBM", user_id: 2)
Project.create(title: "Magus Modular Synthesizer Toolkit",
  short_description: "Algorithms are modern day magic spells. Add magic to your music with the Magus, a patchable, programmable synthesizer toolkit.",
  full_description: "Algorithms are the magic potions and spells of the modern day. In electronic music, they make the wooshes, booms, squeals, screams and bops that might have us contemplate the universe, reach personal insight, or dance like mad for days on end. Join us on a journey to create ever more powerful algorithms, and to make them open and available to everyone. We already have a community of hundreds of talented synthesists sharing their work. Let's make it bigger, let's make it better, let's do it together!",
funding_goal: 1002330, funding_end_date: '20190202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/apple-caffeine-coffee-597330.jpg",
video_url: "1qsI0Z4AMZU", user_id: 3)
Project.create(title: "The Future of Mobile Filmmaking: Anamorphic, Battery, Gimbal",
  short_description: "Shoot amazing cinematic video on your iPhone, Galaxy, or Pixel device. Now you can make your small camera as good as your big camera.",
  full_description: "Hi, we are Moment.

We started on Kickstarter by making lenses for phones… but now we do more than that. We make gear, develop apps, and guide trips that help people to get out and follow their lens.

We’re back with our fourth campaign. We love to shoot video and we’ve always wanted gear that makes our phones as good as our big cameras. Today we have that...introducing the Moment Filmmaker Collection.

It’s not just one but four new products. Available exclusively on Kickstarter, back the project and save 20%.

You in?",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/aaron-burden-205148-unsplash.jpg",
video_url: "8vIT2da6N_o", user_id: 1)
Project.create(title: "Nixie Clock Arduino Shield",
  short_description: "An Arduino Shield with a real-time clock for driving 2x IN-9 Nixie bargraph tubes.",
  full_description: "IN-9 Nixie bargraph tubes are a 1960s display technology. Before the advent of LEDs, indicators were made by neon gas discharge tubes. The bargraph tube is a special type of Nixie tube: instead of illuminating a number, letter or symbol, it glows to different heights depending on the current through the tube. This feature means it can be used to indicate any variable, such as temperature, time, internet speed, or atmospheric pressure. If it varies, you can display it!

Unfortunately, Nixie tubes can be difficult to control with today's electronics, requiring high voltage to drive them. That's where the Nixie Clock Shield comes in! The Shield incorporates everything you need to build your very own IN-9 Nixie bargraph display. The Shield generates the required high voltage and all you need to do is provide a 12v power supply and PWM signals from D9 and D10 to control the two tubes. What's more, a real-time clock (DS1307) is included on the board. This lets you keep track of time and build a Nixie clock with just an Arduino board. ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/oliver-pecker-364272-unsplash.jpg",
video_url: "f9MwaH6oGEY", user_id: 2)
Project.create(title: "Octobo: Interactive Plush Companion for Creative Learning.",
  short_description: "A magical, interactive smart companion for kids ages 0-7 that transforms storytelling and learning into a playful, immersive experience",
  full_description: "Octobo can actually respond to your child’s learning. Packed with multiple sensors and advanced technology, Octobo reacts to touch, sound, and interactive tokens, giving your child immediate feedback and positive reinforcement to their learning. Unlike a hard robotic toy, Octobo’s huggable plush is cleverly filled with various soft sensors that can detect your child’s movement and enhance storytime. Parents can feel safe giving Octobo to kids because of his soft padding and gentle, hypoallergenic fabrics.",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/alphacolor-13-182248-unsplash.jpg",
video_url: "mQO2PcEW9BY", user_id: 3)
Project.create(title: "Somewear: limitless communication built for adventure",
  short_description: "A global, satellite hotspot that brings your friends on every adventure - beautifully designed to fit in your pocket",
  full_description: "We've paid our dues shipping product at some of the best companies in Silicon Valley, gone through the premier hardware accelerator in the world and deeply understand the risks and challenges of manufacturing hardware.

We have already engaged a supportive manufacturing partner and early units coming off the line are testing very well. With that said, there is always a risk of delays from unforeseen challenges we may encounter during the tooling, manufacturing, testing, and certification processes.

We are committed to sharing our successes and struggles through this process as we work to ship Somewear Global Hotspots to you this summer. If faced with the decision to trade quality for a delivery date, we will choose quality to make sure we provide the best possible experience on every adventure.",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/eddie-kopp-264813-unsplash.jpg",
video_url: "8nt3edWLgIg", user_id: 1)
Project.create(title: "SMARTBUNCH – the world's first modular light bulb",
  short_description: "Adapt the shape, style, format & strength of your light to suit you. This level of flexibility has not been seen before. Until now.",
  full_description: "Lighting typically consists of two independent products: light bulb & light fitting performing one function. If you need more / less light, you buy a new bulb. If you get tired of the design, size or the way it directs light, you have to buy a new fitting. The result is always the same: wasted time, money and increased landfill.

We wanted to change this antiquated practice and come up with a new and innovative concept. The result is a product that combines the light bulb and the light fitting for a beautiful, and functional design. It is not fixed, or rigid, but fluid and able to evolve with the needs of the owner.",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/grovemade-239357-unsplash.jpg",
video_url: "aApTQ1VjhFA", user_id: 2)
Project.create(title: "Bucky | An EdTech robot to narrow technology-access gaps",
  short_description: "An accessible, fun, easy and inspiring way to learn robotics, programming and IoT; preparing kids for the challenges of the future.",
  full_description: "Bucky es un producto muy complejo. Tenemos un excelente equipo de trabajo pero en un proyecto de ésta naturaleza siempre puede haber inconvenientes como pueden ser retrasos en los procesos de certificación dado que pueden requerir modificaciones en la ingeniería de Bucky. Por otra parte, durante la transición a la producción en serie podrían ocurrir retrasos en las etapas de implementación de herramental con nuestros proveedores. Tenemos, también, que garantizar el buen funcionamiento del software en los dispositivos objetivos, lo cual a veces puede verse afectado por actualizaciones de software de las plataformas que estamos utilizando.

Bucky is a complex product. We have a great team but the nature of this project can bring problems such as delays due to the certification processes, they could require changes in the engineering of Bucky. On the other hand, during our transition to a product that is being produced in series there could also be delays due to the manufacturing processes of our suppliers. We also have to guarantee that the software is functioning correctly on the mobile devices, which can be affected due to software updates of the platforbs being used.",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/hector-martinez-110928-unsplash.jpg",
video_url: "dWc6Goy6cRk", user_id: 3)

Project.create(title: "RASPBERRY BOOM: Atmospheric Monitor - The Weather & Beyond",
  short_description: "Rocket Launches, Explosions, Eruptions, Avalanches, Tornadoes, Lightning, Animal Calls & more! Our Raspberry Pi Monitor shows all!",
  full_description: "At some point growing up, most of you will have heard of Superman and his superhero abilities- The X-Ray vision, super strength and super hearing. Now, although we aren’t quite there yet on the super strength or X-Ray vision, we have cracked open super hearing… well technically infrasonic hearing!

The Raspberry Boom home monitor detects “infra” sounds, or extremely low frequencies of sound, that are completely imperceivable to your ears. These sounds are less than ~20 Hz, or the lower limit of what is audible to humans, and Raspberry Boom can detect them from great distances all around your local region.",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jakob-owens-205642-unsplash.jpg",
video_url: "dWc6Goy6cRk", user_id: 1)

Project.create(title: "CASWELL MORPHING KARAMBIT Premium Utility Knife",
  short_description: "Award-Winning Design | Innovative Function | Improved Safety",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jason-blackeye-137278-unsplash.jpg",
video_url: "8vIT2da6N_o", user_id: 2)

Project.create(title: "Bucky The Dino Children's Picture Book",
  short_description: "A children's picture book based on Bucky, a big blue dinosaur who learns to accept and love himself for who he really is.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jason-blackeye-212990-unsplash.jpg",
video_url: "8nt3edWLgIg", user_id: 3)

Project.create(title: "Bring Back Gothamist",
  short_description: "Gothamist has joined New York institution WNYC, now they need you to step up and bring the site back to its former glory.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jason-blackeye-317564-unsplash.jpg",
video_url: "8nt3edWLgIg", user_id: 1)

Project.create(title: "Bucky The Dino Children's Picture Book",
  short_description: "A children's picture book based on Bucky, a big blue dinosaur who learns to accept and love himself for who he really is.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jaz-king-221367-unsplash.jpg",
video_url: "8nt3edWLgIg", user_id: 2)

Project.create(title: "Idolcam: 4K Camera with Gimbal and Interchangeable Lenses",
  short_description: "Shoot professional quality videos with a camera that fits in your pocket",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/jeff-sheldon-264920-unsplash.jpg",
video_url: "f9MwaH6oGEY", user_id: 3)

Project.create(title: "Knife block - Designed by IF and Red dot winner JLE Design",
  short_description: "Elegant and functional knife block that can storage up to 10 knives and new mill and salt pot made in premium teak wood",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/julian-o-hayon-265589-unsplash.jpg",
video_url: "aApTQ1VjhFA", user_id: 1)

Project.create(title: "The Yard - Ottawa's Indoor Bike and Skate Park",
  short_description: "Ottawa's indoor bike and skate park. For all skill levels- includes a pump track, jumps, resi-mat, foam pit and a street section.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/kevin-bhagat-461952-unsplash.jpg",
video_url: "lViakh9YI6Y", user_id: 2)

Project.create(title: "Bucky | An EdTech robot to narrow technology-access gaps",
  short_description: "An accessible, fun, easy and inspiring way to learn robotics, programming and IoT; preparing kids for the challenges of the future.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/lilly-rum-250927-unsplash.jpg",
video_url: "aApTQ1VjhFA", user_id: 3)

Project.create(title: "Bucky | An EdTech robot to narrow technology-access gaps",
  short_description: "An accessible, fun, easy and inspiring way to learn robotics, programming and IoT; preparing kids for the challenges of the future.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/nasa-45074-unsplash.jpg",
video_url: "1qsI0Z4AMZU", user_id: 1)

Project.create(title: "Nixie Clock Arduino Shield",
  short_description: "An Arduino Shield with a real-time clock for driving 2x IN-9 Nixie bargraph tubes.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/oliver-pecker-364272-unsplash.jpg",
video_url: "mQO2PcEW9BY", user_id: 2)

Project.create(title: "Somewear: limitless communication built for adventure",
  short_description: "A global, satellite hotspot that brings your friends on every adventure - beautifully designed to fit in your pocket",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/pavel-kosov-243169-unsplash.jpg",
video_url: "dWc6Goy6cRk", user_id: 3)

Project.create(title: "GNARBOX 2.0 SSD – Rugged backup device for your camera",
  short_description: "The most powerful portable workflow solution for photographers and videographers.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/sorry-imkirk-215248-unsplash.jpg",
video_url: "mQO2PcEW9BY", user_id: 1)

Project.create(title: "Somewear: limitless communication built for adventure",
  short_description: "A global, satellite hotspot that brings your friends on every adventure - beautifully designed to fit in your pocket",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/taner-ardali-807-unsplash.jpg",
video_url: "f9MwaH6oGEY", user_id: 2)

Project.create(title: "Program-O-Tron SD Card Based Standalone AVR Programmer",
  short_description: "An SD card based standalone AVR Programmer",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/thomas-griesbeck-392165-unsplash.jpg",
video_url: "8vIT2da6N_o", user_id: 3)

Project.create(title: "MOSSGROVE: A Design Pavilion Made of Moss in Times Square",
  short_description: "Scaffolding and moss create an eco-conscious pavilion for artistic programming in NYC's Times Square May 12-20.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/thomas-william-287556-unsplash.jpg",
video_url: "1qsI0Z4AMZU", user_id: 1)

Project.create(title: "Kelvin Home Coffee Roaster",
  short_description: "The most awarded coffee roaster. Kelvin lets you custom roast fresh beans, explore new flavors, save money, and reduce waste.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/vadim-sherbakov-30-unsplash.jpg",
video_url: "lViakh9YI6Y", user_id: 2)

Project.create(title: "The Future of Mobile Filmmaking: Anamorphic, Battery, Gimbal",
  short_description: "Shoot amazing cinematic video on your iPhone, Galaxy, or Pixel device. Now you can make your small camera as good as your big camera.",
  full_description: "Everywhere around you, whether at home or work, all energy consuming products utilize electricity. If something goes wrong, many of us know too little about electricity to fix the problem. This is why Vion was born, bringing to you the first smart multimeter that makes it easy to diagnose and fix electrical problems.

Most multimeters require you to have extensive electrical knowledge to understand the number displayed on the LCD in order to determine the fault. However, Vion is linked to the smartphone and automatically measures the product without having to select a measurement item and diagnoses the result as ‘Good/Bad’ through voice guidance.

Vion measures voltage and resistance has a pair of probes without a body and allows you to see the breakdown of electricity-powered products on your smartphone.  ",
funding_goal: 10000, funding_end_date: '20120202', image_url: "https://s3-us-west-1.amazonaws.com/appstarter-chyna/project/veit-hammer-512259-unsplash.jpg",
video_url: "dWc6Goy6cRk", user_id: 3)

Reward.create(pledge_amount: 19, description: "golden reward", title: "golden reward")
Reward.create(pledge_amount: 49, description: "platinum reward", title: "platinum reward")
Reward.create(pledge_amount: 99, description: "diamond reward", title: "diamond reward")

Category.create(name: 'tech')
Category.create(name: 'design')
Category.create(name: 'gadgets')

ProjectCategory.create(project_id: 1, category_id: 1)
ProjectCategory.create(project_id: 10, category_id: 1)
ProjectCategory.create(project_id: 20, category_id: 1)
ProjectCategory.create(project_id: 15, category_id: 1)
ProjectCategory.create(project_id: 22, category_id: 1)
ProjectCategory.create(project_id: 6, category_id: 1)
ProjectCategory.create(project_id: 7, category_id: 1)
ProjectCategory.create(project_id: 8, category_id: 1)
ProjectCategory.create(project_id: 9, category_id: 1)
ProjectCategory.create(project_id: 2, category_id: 2)
ProjectCategory.create(project_id: 11, category_id: 2)
ProjectCategory.create(project_id: 12, category_id: 2)
ProjectCategory.create(project_id: 13, category_id: 2)
ProjectCategory.create(project_id: 14, category_id: 2)
ProjectCategory.create(project_id: 4, category_id: 2)
ProjectCategory.create(project_id: 16, category_id: 2)
ProjectCategory.create(project_id: 17, category_id: 2)
ProjectCategory.create(project_id: 18, category_id: 2)
ProjectCategory.create(project_id: 19, category_id: 3)
ProjectCategory.create(project_id: 3, category_id: 3)
ProjectCategory.create(project_id: 21, category_id: 3)
ProjectCategory.create(project_id: 5, category_id: 3)
ProjectCategory.create(project_id: 23, category_id: 3)
ProjectCategory.create(project_id: 24, category_id: 3)
ProjectCategory.create(project_id: 25, category_id: 3)
ProjectCategory.create(project_id: 26, category_id: 3)
ProjectCategory.create(project_id: 27, category_id: 3)
