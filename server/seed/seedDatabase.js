import mongoose from "mongoose";
import dotenv from "dotenv";

import Product from "../models/Product.js";
import connectDB from "../libs/database.js";
dotenv.config();
console.log("DB_URI:", process.env.DB_URI);

if (!process.env.DB_URI) {
  console.error("DB_URI is undefined!");
}

const seedProducts = async () => {
  const sampleProducts = [
    {
      name: "Isfahan Naghsh on silk",
      description:
        "The Isfahan is the noble classic among Persian oriental carpets.",
      price: 16000,
      image_name:
        "https://cdn.kibek.de/media/mf_webp/jpg/thumbnail/03/07/a7/1690925542/Isfahan-blau_900166420-050_1920x1920.webp",
    },
    {
      name: "Kashan",
      description:
        "Kashan carpets are renowned for their high-quality sheep's wool.",
      price: 2120,
      image_name:
        "https://cdn.rugtales.com/media/8e/68/5a/1711529508/484111%281%29.png?width=280",
    },
    {
      name: "Nourison Prismatic Gray Gold",
      description:
        "Hand-tufted carpet featuring abstract patterns in gray and gold.",
      price: 845,
      image_name:
        "https://ik.imagekit.io/xkwthq1rxmd/liveonlinetapijten/catalog/product/cache/9a16e1a5e994ed25951c854c1c82627c/n/o/nourison_prismatic_carpet_prism_prs28_grygd_grey_gold_8x10_099446891921_flat.jpg",
    },
    // Sofas
    {
      name: "Tom Dixon Wingback Sofa",
      description:
        "Elegant sofa with a contemporary wingback design, crafted with luxurious velvet fabric.",
      price: 4800.0,
      image_name:
        "https://www.tomdixon.net/media/catalog/product/cache/ea27116b5033030c23c92c88bcf3f415/f/4/f424ff8cb74e4eb0a5ad01a7c2a2ee47.jpg",
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "Nuvola Living Area",
      price: "20080",
      description:
        "A modular sofa set by Rolf Benz featuring plush cushions and elegant design in fabric 17 color 17.356.",
      material: "Fabric 17, Marone Metallic",
      images: [
        "https://www.wohn-cultur.de/images/product_images/info_images/2739_0.jpg",
        "https://www.wohn-cultur.de/images/product_images/popup_images/2739_8.jpg",
      ],
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "Fendi Casa Canape Sofa",
      description:
        "High-end luxury sofa with a distinctive design from the iconic fashion house.",
      price: 9500.0,
      image_name:
        "https://www.fendicasa.com/media/catalog/product/3/2/32070cfc14f0d42898c93b440499d388.jpg",
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "Chesterfield Sofa",
      description:
        "Classic leather sofa with deep button tufting and rolled arms, an iconic design piece.",
      price: 2500.0,
      image_name:
        "https://www.chesterfieldshop.com/media/catalog/product/4/0/404038dcb438ff8d2b6ef014ff4e0c79.jpg",
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "B&B Italia Tufty-Time Sofa",
      description:
        "Modular sofa system offering a unique combination of comfort and design, perfect for modern living rooms.",
      price: 9800.0,
      image_name: "https://www.bebitalia.com/medias/creazioni/tufty-time.jpg",
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "Megasofa Estrea 500x250 cm Bouclé cream-white round sofa",
      price: "7499.90",
      description:
        "A luxurious and spacious round sofa with high-quality upholstery and a soft Bouclé cover in cream-white.",
      material: "Bouclé (95% polyester, 5% PC)",
      images: [
        "https://www.delife.de/media/89/64/fc/1689807154/33617-megasofa-estrea-500x250-cm-boucle-creme-weiss-rundsofa_5.jpg",
        "https://www.delife.de/thumbnail/9d/f4/b0/1689807155/33617-megasofa-estrea-500x250-cm-boucle-creme-weiss-rundsofa_1_240x200.jpg",
      ],
      category: "Sofas",
      createdAt: new Date(),
    },
    {
      name: "Stream Chandelier",
      description:
        "Crafted from brass metal and chains, the Stream Chandelier is available in small and large sizes with adjustable heights. Featuring dimmable LED options and compatible with all dimming systems, it combines elegance with modern functionality. Dimensions: Ø 80 x H 115 cm (small), Ø 110 x H 140 cm (large). Canopy size: Ø 19.8 x H 6.5 cm. Weight: 40 kg (small), 63 kg (large). Light source not included.",
      price: 31300,
      images: [
        "https://terzanishop.com/cdn/shop/products/stream-chandelier-terzani-lighting-shop-3_grande.jpg?v=1666447354",
        "https://terzanishop.com/cdn/shop/products/stream-chandelier-terzani-lighting-shop-5_grande.jpg?v=1666447355",
        "https://terzanishop.com/cdn/shop/products/stream-chandelier-terzani-lighting-shop-1_1024x1024@2x.jpg?v=1666447355",
      ],
      category: "Lights",
      createdAt: new Date(),
    },
    {
      name: "LOUIS POULSEN suspension lamp PH ARTICHOKE Ø 84 cm (Copper - Steel)",
      description:
        "The PH Artichoke by Louis Poulsen provides glare-free, diffused lighting. Featuring 72 precisely arranged foils in 12 exclusive rows, it creates a decorative light with a unique motif. Includes a 4-meter suspension cable and rosette. Bulb excluded (1x100W E27).",
      price: 12416.97,
      images: [
        "https://www.myareadesign.com/files/ifasano_Files/Foto/394288.JPG",
        "https://www.myareadesign.com/files/ifasano_Files/Foto/394200.JPG",
        "https://www.myareadesign.com/files/ifasano_Files/Foto/394212.JPG",
        "https://www.myareadesign.com/files/ifasano_Files/Foto/394220.JPG",
      ],
      category: "Lights",
      createdAt: new Date(),
    },
    {
      name: "Adele Three-Tier Waterfall Chandelier",
      description:
        "Dive into elegance with the Adele Three-Tier Waterfall Chandelier by Suzanne Kasler. Part of the Signature Collection, it features cascading tiers reminiscent of a waterfall, offering a refined touch to any space. Available in Hand-Rubbed Antique Brass with Clear Acrylic or Polished Nickel with Clear Acrylic, this chandelier blends continental charm with modern sophistication.",
      price: 7679,
      images: [
        "https://vcgallery.it/cdn/shop/files/SK5423HABCA_706x_crop_center.png?v=1715661271",
        "https://vcgallery.it/cdn/shop/files/SK5423PNCA-D1_706x_crop_center.jpg?v=1729711351",
      ],
      category: "Lights",
      createdAt: new Date(),
    },

    {
      name: "Argent 6 Linear Multi-Light Pendant",
      price: "€10,600.00",
      description:
        "Material: Stainless Steel\nBody Size: About 185 x 40 x H 40 cm (Hand Shaped)\nCanopy Size: 170 x 17 x H 6.5 cm\nOverall Height: 190 cm\nAdjustable On Site: 60 cm Minimum Overall Height\nLight Source (Not Included): 18x 2W G4 Dimmable LED or 18x 20W G4 Halogen\nDimming Options: IGBT | 0/1-10V | 10V PWM | 100kΩ | Push | DALI\nNet Weight: 22 kg",
      images: [
        "https://terzanishop.com/cdn/shop/products/argent-6-linear-multi-light-pendant-terzani-lighting-shop-2_1024x1024@2x.jpg?v=1666448151",
        "https://terzanishop.com/cdn/shop/products/argent-6-linear-multi-light-pendant-terzani-lighting-shop-7_1024x1024@2x.jpg?v=1666448151",
        "https://terzanishop.com/cdn/shop/products/argent-6-linear-multi-light-pendant-terzani-lighting-shop-9_1024x1024@2x.jpg?v=1666448151",
        "https://terzanishop.com/cdn/shop/products/argent-6-linear-multi-light-pendant-terzani-lighting-shop-4_1024x1024@2x.jpg?v=1667850347",
      ],
      category: "Lights",
      createdAt: new Date(),
    },
    {
      name: "Dragon | Large Suspended Sculpture",
      price: "€35,660.00",
      description:
        "Material: Brass\nDiffuser Size: 130 x 120 x H 110 cm\nOverall Height: 400 cm\nAdjustable on Site: 115 cm Minimum Adjustable Height\nNet Weight: 34 kg\nPackaging Size: 57 x 147 x 143 cm",
      images: [
        "https://terzanishop.com/cdn/shop/files/dragon-large-suspended-sculpture-terzani-lighting-shop-6_1024x1024@2x.jpg?v=1719999031",
        "https://terzanishop.com/cdn/shop/files/dragon-large-suspended-sculpture-terzani-lighting-shop-5_1024x1024@2x.jpg?v=1718801147",
      ],
      category: "Lights",
      createdAt: new Date(),
    },
    
      {
        name: "Casa Padrino Luxury Baroque Dining Table White / Gold",
        price: "5,299.90 $",
        description:
          "Handcrafted solid wood dining room table in baroque style. Very elegantly crafted in white/gold.",
        category: "diningroom",
        images: [
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118356/full/Casa-Padrino-Luxus-Barock-Esstisch-Braun---Gold-350-x-120-x-H--80-cm-Massivholz-Esszimmertisch-Esszimmer-Moebel-im-Barockstil-Edel-und-Prunkvoll-118356_6.JPG",
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118356/full/Casa-Padrino-Luxus-Barock-Esstisch-Braun---Gold-350-x-120-x-H--80-cm-Massivholz-Esszimmertisch-Esszimmer-Moebel-im-Barockstil-Edel-und-Prunkvoll-118356_7.JPG",
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118356/full/Casa-Padrino-Luxus-Barock-Esstisch-Braun---Gold-350-x-120-x-H--80-cm-Massivholz-Esszimmertisch-Esszimmer-Moebel-im-Barockstil-Edel-und-Prunkvoll-118356_8.JPG",
        ],
      },

      {
        name: "Casa Padrino Luxury Art Deco Dining Table Brown / Beige / Gold",
        price: "5,799.90$",
        description:
          "Handcrafted solid wood kitchen table with table top in marble look. Very elegantly crafted in brown / beige / gold.",
        category: "diningroom",
        images: [
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123149/full/Casa-Padrino-Luxus-Art-Deco-Esstisch-Lila---Beige---Gold-Handgefertigter-Massivholz-Kuechentisch-mit-Tischplatte-in-Marmoroptik-Art-Deco-Esszimmer-Moebel-123149_5.JPG",
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123149/full/Casa-Padrino-Luxus-Art-Deco-Esstisch-Lila---Beige---Gold-Handgefertigter-Massivholz-Kuechentisch-mit-Tischplatte-in-Marmoroptik-Art-Deco-Esszimmer-Moebel-123149_6.JPG",
          "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123149/full/Casa-Padrino-Luxus-Art-Deco-Esstisch-Lila---Beige---Gold-Handgefertigter-Massivholz-Kuechentisch-mit-Tischplatte-in-Marmoroptik-Art-Deco-Esszimmer-Moebel-123149_2.jpg",
        ],
      },
      
        {
          name: "Modenese Luxury Interiors / Dining Tables / Louis XIV Marble",
          price: "104,190.00$",
          description:
            "An extravagant dining table featuring a luxurious inlaid marble top and a solid wooden base. This masterpiece, designed in-house and made from high-quality Italian marble, is hand-carved with a classic walnut finish, patinated gold leaf details, and a multi-colored marble top. Its grandeur makes it a perfect focal point for any dining room. Dimensions: 80 cm (H) x 400 cm (W) x 140 cm (D).",
          category: "diningroom",
          images: [
            "https://www.select-interiorworld.com/media/catalog/product/cache/47e3b1aeb299739a9e853d82191e554d/l/o/louis_xiv_marble.png",
            "https://www.select-interiorworld.com/media/catalog/product/cache/47e3b1aeb299739a9e853d82191e554d/l/o/louis_xiv_marble4.png",
            "https://www.select-interiorworld.com/media/catalog/product/cache/47e3b1aeb299739a9e853d82191e554d/l/o/louis_xiv_marble3.png",
          ],
        },
        
          {
            "name": "Casa Padrino Luxury Dining Room Set Gray / Dark Gray / Copper",
            "price": "17,500.00$",
            "category": "diningroom",
            "description": "This luxury dining set includes a beautifully designed dining table and 8 exquisite dining chairs. Crafted from high-quality solid wood, metal, glass, polyester foam, and fabric, it is elegantly processed with a durable, easy-care finish. The dining table dimensions are 245 x 117 x H. 76 cm, while the dining chairs measure 55 x 54.5 x H. 82 cm. The set's colors are a sophisticated gray/dark gray/copper for the table and light gray/copper for the chairs, offering a refined aesthetic.",
            "images": [
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123572/full/Casa-Padrino-Luxus-Esszimmer-Set-Grau---Silber-1-Luxus-Esstisch-und-6-Luxus-Esszimmerstuehle-Esszimmer-Moebel-Luxus-Moebel-Luxus-Einrichtung-123572_6.JPG",
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123572/full/Casa-Padrino-Luxus-Esszimmer-Set-Grau---Silber-1-Luxus-Esstisch-und-6-Luxus-Esszimmerstuehle-Esszimmer-Moebel-Luxus-Moebel-Luxus-Einrichtung-123572_7.JPG",
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123572/full/Casa-Padrino-Luxus-Esszimmer-Set-Grau---Silber-1-Luxus-Esstisch-und-6-Luxus-Esszimmerstuehle-Esszimmer-Moebel-Luxus-Moebel-Luxus-Einrichtung-123572_8.JPG",
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/123572/full/Casa-Padrino-Luxus-Esszimmer-Set-Grau---Silber-1-Luxus-Esstisch-und-6-Luxus-Esszimmerstuehle-Esszimmer-Moebel-Luxus-Moebel-Luxus-Einrichtung-123572_9.JPG"
            ]
          },
        
        
        
          {
            "name": "Casa Padrino Luxury Designer Dining Room Set Ivory / Gold",
            "price": "44,079.00$",
            "category": "diningroom",
            "description": "This luxurious dining room set includes a dining table and six chairs made from high-quality materials. The dining table is crafted from gold-plated brass, velvet fabric, and glass, with dimensions of 220 x 120 x H. 77 cm and a color combination of ivory, gold, and bronzed glass. The chairs are made from gold-plated brass, wood, polyester foam, and velvet fabric, measuring 52 x 52 x H. 78 cm in an elegant ivory and gold finish. First-class workmanship and luxury quality made in Italy.",
            "images": [
              "https://media.cdn.kaufland.de/product-images/1024x1024/40abe33ad5ae5938f80abe932ae6de96.webp",
              "https://media.cdn.kaufland.de/product-images/1024x1024/df53bc2129190f176a9edd1e994967c2.webp"
            ]
          },
          {
            "name": "Casa Padrino luxury Art Deco double bed gray / gold - Noble solid wood bed with headboard - Art Deco bedroom & hotel furniture - Luxury collection",
            "price": "$5300.00",
            "category": "bedroom",
            "description": "Material: solid wood, metal, polyester foam, fabric\n\nWidth approx.: 205 cm\nDepth approx.: 214 cm\nHeight approx.: 148 cm\n\nSuitable for mattress size: 180 x 200 cm\n\nColor: gray / gold\n\nVery elegantly crafted\n\nEasy-care & durable material",
            "images": [
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_2.JPG",
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_3.JPG",
              "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_4.JPG"
            ]
          },

          
  {
    "name": "Royal Atlantis Box Spring Bed",
    "price": "$5480.00",
    "category": "bedroom",
    "description": "The Royal Atlantis box spring bed offers luxurious comfort and premium design for your bedroom. Its high-quality craftsmanship ensures a perfect night's sleep. Featuring an elegant aesthetic and durable materials, it is a premium choice for modern bedroom decor.",
    "images": [
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/bltfcdd782b7947c5ad/65d2534a9a3739040ae251bd/escalade_3kwart_basis-web_1.jpg?auto=webp&width=1080&quality=80",
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/bltaa920838179897ce/65d2534c7be96a040a5100e7/escalade_3kwart_kaal_voetenbankje_basis-web_1.jpg?auto=webp&width=1080&quality=80",
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/bltb76849112412e62e/65d2534d8ad206040a88f27d/escalade_detail_hoofdbord-web_1.jpg?auto=webp&width=1080&quality=80"
    ]
  },
  {
    "name": "Casa Padrino luxury Art Deco double bed gray / gold - Noble solid wood bed with headboard - Art Deco bedroom & hotel furniture - Luxury collection",
    "price": "$5300.00",
    "category": "bedroom",
    "description": "Material: solid wood, metal, polyester foam, fabric\n\nWidth approx.: 205 cm\nDepth approx.: 214 cm\nHeight approx.: 148 cm\n\nSuitable for mattress size: 180 x 200 cm\n\nColor: gray / gold\n\nVery elegantly crafted\n\nEasy-care & durable material",
    "images": [
      "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_2.JPG",
      "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_3.JPG",
      "https://cdn02.plentymarkets.com/vji7b8phcm0f/item/images/118031/full/Casa-Padrino-Luxus-Art-Deco-Doppelbett-Lila---Gold-Edles-Massivholz-Bett-mit-Kopfteil-Art-Deco-Schlafzimmer-und-Hotel-Moebel-Luxus-Kollektion-118031_4.JPG"
    ]
  },
  {
    "name": "Box Spring Bed AMSTERDAM",
    "price": "5599.00",
    "category": "bedroom",
    "description": "This box spring bed combines everything you've probably always wanted from a bed: extreme coziness, a modern look, great comfort, and high functionality. The Amsterdam box spring bed allows you to have a long, restful sleep, so that you'll feel great and well-rested the next morning.\n\nIf you decide to read in bed in the evening, you can lean against the comfortable, padded headboard and experience optimal relaxation. The absolute highlight of this bed: You get two stylish bedside tables with it, so that your bedroom is perfectly equipped. All of our products are handmade in Germany and consist of raw materials that have been tested for harmful substances and that we source exclusively from Germany. What are you waiting for? Get your ultimate sleeping experience today with the Di-Lara Amsterdam box spring bed.",
    "images": [
      "https://di-lara.de/cdn/shop/files/BS-AMSTERDAM_550x.jpg?v=1698239600",
      "https://di-lara.de/cdn/shop/products/BS-Amsterdam-Detail.jpg?v=1698239599",
      "https://di-lara.de/cdn/shop/products/BS-Amsterdam-Detail.jpg?v=1698239599&_gl=1*phw37t*_up*MQ..*_gs*MQ..&gclid=CjwKCAiA6t-6BhA3EiwAltRFGMRoZm1qnS2smzkv9z8ejWrLZHSJ3NRPU7u7lUm9cH7-cBaz5AVdPxoCdAwQAvD_BwE"
    ]
  },
  {
    "name": "Royal Metropolis box spring bed",
    "price": "$5380",
    "description": "At the Royal Atelier, our experienced sleep experts will take care of your sleep. Here, you can put together your individual box spring bed down to the last detail. From high-quality lying comfort to the color and legs, to quilting, piping, and seams. Our experienced sleep experts will be happy to advise you on putting together your individual Royal box spring bed. Kiss your Royal box spring bed awake in a Royal Atelier near you.",
    "images": [
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/blt793fea4c46d9835a/65d2535ca5eee6040a29ac1d/royal_metropolis_side_w.jpg?auto=webp&width=1080&quality=80",
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/blt74b2562a73fa0fcc/65d2535d235c65040a486de2/royal_metropolis_front_w.jpg?auto=webp&width=1080&quality=80",
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/bltc9b8b62b56af1eab/65d2535d36f764040a7f63b9/royal_metropolis_head_02_1.jpg?auto=webp&width=1080&quality=80",
      "https://www.swisssense.de/remote-image/v3/assets/blt670a670838016ca3/bltfdf4adca980c90df/65d2535fb37909040a9d7f9a/royal_metropolis_foot.jpg?auto=webp&width=1080&quality=80"
    ],
    "category": "bedroom"
  }, 
  {
    "name": "Floating tree trunk bed with illuminated designer headboard made of solid wood - Saeculum",
    "price": "$20,470",
    "description": "Immerse yourself in luxury and exclusivity with our floating tree trunk bed, which impresses with an illuminated designer headboard. This special bed combines the natural beauty of solid wood with modern elegance and brings an extraordinary aesthetic to your bedroom. Each bed is a unique designer piece, handmade in Germany by Bosco Boschivo.",
    "images": [
      "https://i.etsystatic.com/17641117/r/il/4c21d0/6170328147/il_1140xN.6170328147_ntea.jpg"
    ],
    "category": "bedroom"
  },
       
  ];

  try {
    await connectDB();
    console.log("Connected to the database");

    await Product.deleteMany();
    console.log("Existing products deleted");
    await Product.insertMany(sampleProducts);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding the database:", error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log("Database connection closed");
    process.exit(0);
  }
};

seedProducts();
