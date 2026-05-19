const sampleListings = [
  {
    title: "Cozy Beachfront Cottage",
    description: "Escape to this charming beachfront cottage for a relaxing getaway.",
    image: "https://plus.unsplash.com/premium_photo-1682285210821-5d1b5a406b97?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y296eSUyMGJlYWNoZnJvbnQlMjBjb3R0YWdlfGVufDB8fDB8fHww",
    price: 1500,
    location: "Malibu",
    country: "United States"
  },
  {
    title: "Modern Loft in Downtown",
    description: "Stay in the heart of the city in this stylish loft apartment.",
    image: "https://images.unsplash.com/photo-1558362380-0d84fba529f3?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    price: 1200,
    location: "New York City",
    country: "United States"
  },
  {
    title: "Mountain Retreat",
    description: "Unplug and unwind in this peaceful mountain cabin.",
    image: "https://plus.unsplash.com/premium_photo-1673240367277-e1d394465b56?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW58ZW58MHx8MHx8fDA%3D",
    price: 1000,
    location: "Aspen",
    country: "United States"
  },
  {
    title: "Historic Villa in Tuscany",
    description: "Experience the charm of Tuscany in this beautifully restored villa.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmlsbGF8ZW58MHx8MHx8fDA%3D",
    price: 2500,
    location: "Florence",
    country: "Italy"
  },
  {
    title: "Secluded Treehouse Getaway",
    description: "Live among the treetops in this unique treehouse retreat.",
    image: "https://images.unsplash.com/photo-1704586349935-631d30f8e0de?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZSUyMGhvdXNlJTIwZ2V0YXdheXxlbnwwfHwwfHx8MA%3D%3D",
    price: 800,
    location: "Portland",
    country: "United States"
  },
  {
    title: "Island Bungalow",
    description: "Relax on your private deck in this island paradise.",
    image: "https://plus.unsplash.com/premium_photo-1661963019189-d9dbb233822b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aXNsYW5kJTIwYnVuZ2Fsb3d8ZW58MHx8MHx8fDA%3D",
    price: 3200,
    location: "Bora Bora",
    country: "French Polynesia"
  },
  {
    title: "Treetop Bubble Tent",
    description: "Stargaze from your transparent bubble tent.",
    image: "https://plus.unsplash.com/premium_photo-1718204438600-e8481c2e5b0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHJlZSUyMHRvcCUyMGJ1YmJsZSUyMHRlbnR8ZW58MHx8MHx8fDA%3D",
    price: 1700,
    location: "Quebec",
    country: "Canada"
  },
  {
    title: "Bohemian Bungalow",
    description: "A colorful escape with artsy decor.",
    image: "https://plus.unsplash.com/premium_photo-1698430568270-d217ceff35d1?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9oZW1pYW4lMjBidW5nYWxvd3xlbnwwfHwwfHx8MA%3D%3D",
    price: 1100,
    location: "Santa Fe",
    country: "United States"
  },
  {
    title: "Tropical Hideaway",
    description: "Your private hideout in a lush jungle.",
    image: "https://media.istockphoto.com/id/1311306720/photo/private-overwater-villa-in-the-maldives.webp?a=1&b=1&s=612x612&w=0&k=20&c=tV5_cd5OPczHaEzWt4sOlOrfQP9S77QmLtOMcgUf0lA=",
    price: 2200,
    location: "Bali",
    country: "Indonesia"
  },
  {
    title: "Desert Dome Retreat",
    description: "Stay in a futuristic dome in the middle of the desert.",
    image: "https://media.istockphoto.com/id/2202425956/photo/man-and-woman-at-gadisar-lake-in-jaisalmer-india.webp?a=1&b=1&s=612x612&w=0&k=20&c=ziwIZs9cQ3HeiGf9KjCcaqPWFTMBPvnF6394bgwnPOA=",
    price: 1800,
    location: "Joshua Tree",
    country: "United States"
  },
  {
    title: "Floating Cabin",
    description: "A unique floating cabin experience over calm waters.",
    image: "https://media.istockphoto.com/id/182456108/photo/airplane.webp?a=1&b=1&s=612x612&w=0&k=20&c=zFh72lgBTpsx3PhtocPgh8oIYFuYWMjzYBtLBNOv_CM=",
    price: 2400,
    location: "Seattle",
    country: "United States"
  },
  {
    title: "Luxury Penthouse with City Views",
    description: "Indulge in luxury living with panoramic city views.",
    image: "https://plus.unsplash.com/premium_photo-1661872779873-5ce7b9235a0e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bHV4dXJ5JTIwcGVudGhvdXNlJTIwd2l0aCUyMGNpdHklMjB2aWV3c3xlbnwwfHwwfHx8MA%3D%3D",
    price: 3500,
    location: "Los Angeles",
    country: "United States"
  },
  {
    title: "Countryside Farmhouse",
    description: "Get cozy in this classic countryside farmhouse.",
    image: "https://plus.unsplash.com/premium_photo-1680260413569-7e28013a3d8a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y291bnRyeXNpZGUlMjBmYXJtaG91c2V8ZW58MHx8MHx8fDA%3D",
    price: 1300,
    location: "Kent",
    country: "United Kingdom"
  },
  {
    title: "Alpine Chalet",
    description: "Experience alpine luxury with snow-capped views.",
    image: "https://plus.unsplash.com/premium_photo-1669839774770-df5a3d2da257?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxwaW5hJTIwY2hhbGV0fGVufDB8fDB8fHww",
    price: 2800,
    location: "Zermatt",
    country: "Switzerland"
  },
  {
    title: "Safari Lodge in the Serengeti",
    description: "Witness the Great Migration up close.",
    image: "https://media.istockphoto.com/id/1134561303/photo/tent-camps-in-the-serengeti-national-park-tanzania-africa.webp?a=1&b=1&s=612x612&w=0&k=20&c=LdYOXulHTk-VIuca1iU_RH0Cw5Igg_ticnbGeBx0KOk=",
    price: 4000,
    location: "Serengeti",
    country: "Tanzania"
  },
  {
    title: "Forest A-Frame Cabin",
    description: "A modern A-frame cabin deep in the forest.",
    image: "https://plus.unsplash.com/premium_photo-1686090450574-214118216bdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fHw%3D",
    price: 1600,
    location: "Yosemite",
    country: "United States"
  },  
];

module.exports = {data:sampleListings};
