import house1 from "./asset/house-1.avif";
import house2 from "./asset/house-2.avif";
import house3 from "./asset/house-3.jpg";
import house4 from "./asset/house-4.jpg";
import house5 from "./asset/house-5.jpg";
import interior1 from "./asset/house-interior-1.jpg";
import interior2 from "./asset/house-interior-2.avif";
import interior3 from "./asset/house-interior-3.avif";
import interior4 from "./asset/house-interior-4.jpg";
import interior5 from "./asset/house-interior-5.jpg";

export const cards = {
  addis_abeba: [
    {
      id: 0,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Ayat Condominium",
      description:
        "Bole Atlas, One Bedroom fully Furnished House or Apartment for Rent, Addis Ababa. The apartment is located in a safe residential compound and has an area of 60 square meters. It has a living and dining room with an open kitchen and a bedroom with shower room. The rate is 950 USD or 55,000 Birr per month and fixed and including all utility bills, WIFI internet, generator and cleaning service. Note: The minimum lease period is 6 months.",
      price: "4500 birr/month",
      location: "Addis Ababa",
      subcity: "Bole",
      bed: 2,
      room: 6,
      area: "60 msq",
      exact_location: "9.145, 40.489673",
      is_liked: true,
      posted_at: "2 months ago",
      owner: ["Natnael Necho", "+25122332213", "someone@gmail.com"],
    },
    {
      id: 1,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "The Apartment",
      description:
        "Bole Atlas, One Bedroom fully Furnished House or Apartment for Rent, Addis Ababa. The apartment is located in a safe residential compound and has an area of 60 square meters. It has a living and dining room with an open kitchen and a bedroom with shower room. The rate is 950 USD or 55,000 Birr per month and fixed and including all utility bills, WIFI internet, generator and cleaning service. Note: The minimum lease period is 6 months.",
      price: "4500 birr/month",
      location: "Addis Ababa",
      subcity: "Bole",
      bed: 2,
      room: 6,
      area: "60 msq",
      exact_location: "9.032, 38.746",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Natnael Necho", "+25122332213", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Noah Real Estate",
      description:
        "Bole Atlas, One Bedroom fully Furnished House or Apartment for Rent, Addis Ababa. The apartment is located in a safe residential compound and has an area of 60 square meters. It has a living and dining room with an open kitchen and a bedroom with shower room. The rate is 950 USD or 55,000 Birr per month and fixed and including all utility bills, WIFI internet, generator and cleaning service. Note: The minimum lease period is 6 months.",
      price: "4500 birr/month",
      location: "Addis Ababa",
      subcity: "Bole",
      bed: 2,
      room: 6,
      area: "60 msq",
      exact_location: "8.979, 38.761",
      is_liked: true,
      posted_at: "3 days ago",
      owner: ["Natnael Necho", "+25122332213", "someone@gmail.com"],
    },
    {
      id:3 ,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Ayat Real Estate",
      description:
        "Bole Atlas, One Bedroom fully Furnished House or Apartment for Rent, Addis Ababa. The apartment is located in a safe residential compound and has an area of 60 square meters. It has a living and dining room with an open kitchen and a bedroom with shower room. The rate is 950 USD or 55,000 Birr per month and fixed and including all utility bills, WIFI internet, generator and cleaning service. Note: The minimum lease period is 6 months.",
      price: "4500 birr/month",
      location: "Addis Ababa",
      subcity: "Bole",
      bed: 2,
      room: 6,
      area: "60 msq",
      exact_location: "9.023, 38.746",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Natnael Necho", "+25122332213", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house5, interior1, interior2, interior3, interior4, interior5],
      title: "Lidata Condominium",
      description:
        "Bole Atlas, One Bedroom fully Furnished House or Apartment for Rent, Addis Ababa. The apartment is located in a safe residential compound and has an area of 60 square meters. It has a living and dining room with an open kitchen and a bedroom with shower room. The rate is 950 USD or 55,000 Birr per month and fixed and including all utility bills, WIFI internet, generator and cleaning service. Note: The minimum lease period is 6 months.",
      price: "4500 birr/month",
      location: "Addis Ababa",
      subcity: "Bole",
      bed: 2,
      room: 6,
      area: "60 msq",
      exact_location: "9.013, 38.736",
      is_liked: true,
      posted_at: "5 months ago",
      owner: ["Natnael Necho", "+25122332213", "someone@gmail.com"],
    },
  ],

  bahirdar: [
    {
      id: 1,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Bahirdar Apartment",
      description:
        "Luxury furnished apartment with stunning views of Lake Tana. Close to restaurants and cafes.",
      price: "5000 birr/month",
      location: "Bahirdar",
      subcity: "City Center",
      bed: 2,
      room: 4,
      area: "80 msq",
      exact_location: "11.597, 37.383",
      is_liked: false,
      posted_at: "1 month ago",
      owner: ["Marta Tesfaye", "+25123332213", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Bahirdar Lakeside Villa",
      description:
        "Stunning villa located right by the lake, perfect for relaxation.",
      price: "7000 birr/month",
      location: "Bahirdar",
      subcity: "Lakeside",
      bed: 3,
      room: 5,
      area: "120 msq",
      exact_location: "11.634, 37.384",
      is_liked: true,
      posted_at: "2 weeks ago",
      owner: ["Amanuel Dibaba", "+25123332214", "someone@gmail.com"],
    },
    {
      id: 3,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Modern Family House",
      description:
        "A spacious family home with a beautiful garden in Bahirdar.",
      price: "6000 birr/month",
      location: "Bahirdar",
      subcity: "Residential Area",
      bed: 4,
      room: 6,
      area: "150 msq",
      exact_location: "11.580, 37.390",
      is_liked: true,
      posted_at: "3 days ago",
      owner: ["Selamawit Bekele", "+25123332215", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Cozy Studio Apartment",
      description:
        "A cozy studio apartment in the heart of Bahirdar.",
      price: "4000 birr/month",
      location: "Bahirdar",
      subcity: "City Center",
      bed: 1,
      room: 2,
      area: "30 msq",
      exact_location: "11.600, 37.388",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Tewodros Haile", "+25123332216", "someone@gmail.com"],
    },
    {
      id: 5,
      images: [house5, interior1, interior2, interior3, interior4, interior5],
      title: "Luxury Penthouse",
      description:
        "A luxurious penthouse with breathtaking views of Lake Tana.",
      price: "10000 birr/month",
      location: "Bahirdar",
      subcity: "Penthouse Area",
      bed: 5,
      room: 7,
      area: "250 msq",
      exact_location: "11.610, 37.391",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Zewdu Abate", "+25123332217", "someone@gmail.com"],
    },
  ],

  mekele: [
    {
      id: 1,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Mekele Villa",
      description:
        "A spacious villa located in the heart of Mekelle with modern amenities.",
      price: "7000 birr/month",
      location: "Mekele",
      subcity: "Downtown",
      bed: 3,
      room: 5,
      area: "120 msq",
      exact_location: "13.482, 39.471",
      is_liked: true,
      posted_at: "2 weeks ago",
      owner: ["Hagos Tesfamariam", "+25124442213", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Mekele Modern Apartment",
      description:
        "A modern apartment with great city views and easy access to public transport.",
      price: "5000 birr/month",
      location: "Mekele",
      subcity: "City Center",
      bed: 2,
      room: 3,
      area: "75 msq",
      exact_location: "13.490, 39.473",
      is_liked: false,
      posted_at: "1 month ago",
      owner: ["Amanuel Gebremedhin", "+25124442214", "someone@gmail.com"],
    },
    {
      id: 3,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Luxury Mekelle Residence",
      description:
        "Luxury residence located in a quiet neighborhood, perfect for families.",
      price: "9000 birr/month",
      location: "Mekele",
      subcity: "Quiet Area",
      bed: 4,
      room: 6,
      area: "150 msq",
      exact_location: "13.485, 39.470",
      is_liked: true,
      posted_at: "3 days ago",
      owner: ["Meklit Yared", "+25124442215", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Spacious Family Home",
      description:
        "A spacious family home with a backyard for kids to play in.",
      price: "6500 birr/month",
      location: "Mekele",
      subcity: "Residential Area",
      bed: 3,
      room: 5,
      area: "110 msq",
      exact_location: "13.478, 39.467",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Abdi Farah", "+25124442216", "someone@gmail.com"],
    },
    {
      id: 5,
      images: [house5, interior1, interior2, interior3, interior4, interior5],
      title: "Charming Studio",
      description:
        "A charming studio apartment close to all amenities and the city center.",
      price: "4000 birr/month",
      location: "Mekele",
      subcity: "City Center",
      bed: 1,
      room: 2,
      area: "40 msq",
      exact_location: "13.487, 39.469",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Eleni Hailu", "+25124442217", "someone@gmail.com"],
    },
  ],

  hawassa: [
    {
      id: 1,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Lakeside House",
      description:
        "Beautiful house with direct access to Lake Hawassa. Perfect for relaxation and vacations.",
      price: "6000 birr/month",
      location: "Hawassa",
      subcity: "Lake View",
      bed: 3,
      room: 4,
      area: "100 msq",
      exact_location: "7.067, 38.272",
      is_liked: true,
      posted_at: "4 days ago",
      owner: ["Samuel Abebe", "+25125553322", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Beachfront Villa",
      description:
        "A luxurious villa right on the beach, ideal for holiday getaways.",
      price: "12000 birr/month",
      location: "Hawassa",
      subcity: "Beachfront",
      bed: 4,
      room: 5,
      area: "200 msq",
      exact_location: "7.067, 38.273",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Abebe Tadesse", "+25125553323", "someone@gmail.com"],
    },
    {
      id: 3,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Family Home",
      description:
        "A lovely family home in a quiet neighborhood with a garden.",
      price: "5500 birr/month",
      location: "Hawassa",
      subcity: "Residential Area",
      bed: 3,
      room: 4,
      area: "110 msq",
      exact_location: "7.067, 38.274",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Tadesse Muluneh", "+25125553324", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Cozy Hawassa Apartment",
      description:
        "A cozy apartment with all modern amenities close to the lake.",
      price: "5000 birr/month",
      location: "Hawassa",
      subcity: "City Center",
      bed: 2,
      room: 3,
      area: "80 msq",
      exact_location: "7.067, 38.275",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Yared Kebede", "+25125553325", "someone@gmail.com"],
    },
    {
      id: 5,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Studio Apartment",
      description:
        "A well-furnished studio apartment perfect for singles or couples.",
      price: "3500 birr/month",
      location: "Hawassa",
      subcity: "Downtown",
      bed: 1,
      room: 1,
      area: "30 msq",
      exact_location: "7.067, 38.276",
      is_liked: true,
      posted_at: "2 months ago",
      owner: ["Genet Biruk", "+25125553326", "someone@gmail.com"],
    },
  ],
  adama: [
    {
      id: 1,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Lakeside House",
      description:
        "Beautiful house with direct access to Lake Hawassa. Perfect for relaxation and vacations.",
      price: "6000 birr/month",
      location: "Hawassa",
      subcity: "Lake View",
      bed: 3,
      room: 4,
      area: "100 msq",
      exact_location: "7.067, 38.272",
      is_liked: true,
      posted_at: "4 days ago",
      owner: ["Samuel Abebe", "+25125553322", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Beachfront Villa",
      description:
        "A luxurious villa right on the beach, ideal for holiday getaways.",
      price: "12000 birr/month",
      location: "Hawassa",
      subcity: "Beachfront",
      bed: 4,
      room: 5,
      area: "200 msq",
      exact_location: "7.067, 38.273",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Abebe Tadesse", "+25125553323", "someone@gmail.com"],
    },
    {
      id: 3,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Family Home",
      description:
        "A lovely family home in a quiet neighborhood with a garden.",
      price: "5500 birr/month",
      location: "Hawassa",
      subcity: "Residential Area",
      bed: 3,
      room: 4,
      area: "110 msq",
      exact_location: "7.067, 38.274",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Tadesse Muluneh", "+25125553324", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Cozy Hawassa Apartment",
      description:
        "A cozy apartment with all modern amenities close to the lake.",
      price: "5000 birr/month",
      location: "Hawassa",
      subcity: "City Center",
      bed: 2,
      room: 3,
      area: "80 msq",
      exact_location: "7.067, 38.275",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Yared Kebede", "+25125553325", "someone@gmail.com"],
    },
    {
      id: 5,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Studio Apartment",
      description:
        "A well-furnished studio apartment perfect for singles or couples.",
      price: "3500 birr/month",
      location: "Hawassa",
      subcity: "Downtown",
      bed: 1,
      room: 1,
      area: "30 msq",
      exact_location: "7.067, 38.276",
      is_liked: true,
      posted_at: "2 months ago",
      owner: ["Genet Biruk", "+25125553326", "someone@gmail.com"],
    },
  ],
  all: [
    {
      id: 0,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Lakeside House",
      description: "Beautiful house with direct access to Lake Hawassa. Perfect for relaxation and vacations.",
      price: "6000 birr/month",
      location: "Hawassa",
      subcity: "Lake View",
      bed: 3,
      room: 4,
      area: "100 msq",
      exact_location: "7.067, 38.272",
      is_liked: true,
      posted_at: "4 days ago",
      owner: ["Samuel Abebe", "+25125553322", "someone@gmail.com"],
    },
    {
      id: 1,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Beachfront Villa",
      description: "A luxurious villa right on the beach, ideal for holiday getaways.",
      price: "12000 birr/month",
      location: "Hawassa",
      subcity: "Beachfront",
      bed: 4,
      room: 5,
      area: "200 msq",
      exact_location: "7.067, 38.273",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Abebe Tadesse", "+25125553323", "someone@gmail.com"],
    },
    {
      id: 2,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Family Home",
      description: "A lovely family home in a quiet neighborhood with a garden.",
      price: "5500 birr/month",
      location: "Hawassa",
      subcity: "Residential Area",
      bed: 3,
      room: 4,
      area: "110 msq",
      exact_location: "7.067, 38.274",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Tadesse Muluneh", "+25125553324", "someone@gmail.com"],
    },
    {
      id: 3,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Cozy Hawassa Apartment",
      description: "A cozy apartment with all modern amenities close to the lake.",
      price: "5000 birr/month",
      location: "Hawassa",
      subcity: "City Center",
      bed: 2,
      room: 3,
      area: "80 msq",
      exact_location: "7.067, 38.275",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Yared Kebede", "+25125553325", "someone@gmail.com"],
    },
    {
      id: 4,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Hawassa Studio Apartment",
      description: "A well-furnished studio apartment perfect for singles or couples.",
      price: "3500 birr/month",
      location: "Hawassa",
      subcity: "Downtown",
      bed: 1,
      room: 1,
      area: "30 msq",
      exact_location: "7.067, 38.276",
      is_liked: true,
      posted_at: "2 months ago",
      owner: ["Genet Biruk", "+25125553326", "someone@gmail.com"],
    },
    {
      id: 5,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Bahirdar Apartment",
      description: "Luxury furnished apartment with stunning views of Lake Tana. Close to restaurants and cafes.",
      price: "5000 birr/month",
      location: "Bahirdar",
      subcity: "City Center",
      bed: 2,
      room: 4,
      area: "80 msq",
      exact_location: "11.597, 37.383",
      is_liked: false,
      posted_at: "1 month ago",
      owner: ["Marta Tesfaye", "+25123332213", "someone@gmail.com"],
    },
    {
      id: 6,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Bahirdar Lakeside Villa",
      description: "Stunning villa located right by the lake, perfect for relaxation.",
      price: "7000 birr/month",
      location: "Bahirdar",
      subcity: "Lakeside",
      bed: 3,
      room: 5,
      area: "120 msq",
      exact_location: "11.634, 37.384",
      is_liked: true,
      posted_at: "2 weeks ago",
      owner: ["Amanuel Dibaba", "+25123332214", "someone@gmail.com"],
    },
    {
      id: 7,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Modern Family House",
      description: "A spacious family home with a beautiful garden in Bahirdar.",
      price: "6000 birr/month",
      location: "Bahirdar",
      subcity: "Residential Area",
      bed: 4,
      room: 6,
      area: "150 msq",
      exact_location: "11.580, 37.390",
      is_liked: true,
      posted_at: "3 days ago",
      owner: ["Selamawit Bekele", "+25123332215", "someone@gmail.com"],
    },
    {
      id: 8,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Cozy Studio Apartment",
      description: "A cozy studio apartment in the heart of Bahirdar.",
      price: "4000 birr/month",
      location: "Bahirdar",
      subcity: "City Center",
      bed: 1,
      room: 2,
      area: "30 msq",
      exact_location: "11.600, 37.388",
      is_liked: false,
      posted_at: "1 week ago",
      owner: ["Tewodros Haile", "+25123332216", "someone@gmail.com"],
    },
    {
      id: 9,
      images: [house5, interior1, interior2, interior3, interior4, interior5],
      title: "Luxury Penthouse",
      description: "A luxurious penthouse with breathtaking views of Lake Tana.",
      price: "10000 birr/month",
      location: "Bahirdar",
      subcity: "Penthouse Area",
      bed: 5,
      room: 7,
      area: "250 msq",
      exact_location: "11.610, 37.391",
      is_liked: true,
      posted_at: "1 month ago",
      owner: ["Zewdu Abate", "+25123332217", "someone@gmail.com"],
    },
    {
      id: 10,
      images: [house2, interior1, interior2, interior3, interior4, interior5],
      title: "Mekele Villa",
      description: "A spacious villa located in the heart of Mekelle with modern amenities.",
      price: "7000 birr/month",
      location: "Mekele",
      subcity: "Downtown",
      bed: 3,
      room: 5,
      area: "120 msq",
      exact_location: "13.482, 39.471",
      is_liked: true,
      posted_at: "2 weeks ago",
      owner: ["Hagos Tesfamariam", "+25124442213", "someone@gmail.com"],
    },
    {
      id: 11,
      images: [house1, interior1, interior2, interior3, interior4, interior5],
      title: "Mekele Modern Apartment",
      description: "A modern apartment with great city views and easy access to public transport.",
      price: "5000 birr/month",
      location: "Mekele",
      subcity: "City Center",
      bed: 2,
      room: 3,
      area: "75 msq",
      exact_location: "13.490, 39.473",
      is_liked: false,
      posted_at: "1 month ago",
      owner: ["Amanuel Gebremedhin", "+25124442214", "someone@gmail.com"],
    },
    {
      id: 12,
      images: [house3, interior1, interior2, interior3, interior4, interior5],
      title: "Luxury Mekelle Residence",
      description: "Luxury residence located in a quiet neighborhood, perfect for families.",
      price: "9000 birr/month",
      location: "Mekele",
      subcity: "Quiet Area",
      bed: 4,
      room: 6,
      area: "150 msq",
      exact_location: "13.485, 39.470",
      is_liked: true,
      posted_at: "3 days ago",
      owner: ["Meklit Yared", "+25124442215", "someone@gmail.com"],
    },
    {
      id: 13,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Affordable Mekelle Studio",
      description: "An affordable studio apartment in a convenient area.",
      price: "3000 birr/month",
      location: "Mekele",
      subcity: "Residential Area",
      bed: 1,
      room: 1,
      area: "25 msq",
      exact_location: "13.482, 39.474",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Liya Alemu", "+25124442216", "someone@gmail.com"],
    },
    {
      id: 14,
      images: [house4, interior1, interior2, interior3, interior4, interior5],
      title: "Affordable Mekelle Studio",
      description: "An affordable studio apartment in a convenient area.",
      price: "3000 birr/month",
      location: "Mekele",
      subcity: "Residential Area",
      bed: 1,
      room: 1,
      area: "25 msq",
      exact_location: "13.482, 39.474",
      is_liked: false,
      posted_at: "2 weeks ago",
      owner: ["Liya Alemu", "+25124442216", "someone@gmail.com"],
    },
  ]

};

export default cards;
