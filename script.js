/* ---------- Utility to add query params for image size ---------- */
function buildImg(src, w = 1200, q = 80) {
  if (!src) return "";
  if (src.includes("?")) return src + "&w=" + w + "&q=" + q;
  return src + "?w=" + w + "&q=" + q;
}

/* ---------------------------------------------------------------------
   PRODUCTS DATA (kept as provided by you)
   --------------------------------------------------------------------- */
const productsData = [
  {
    "id": 1,
    "title": "Nykaa Lipstick",
    "brand": "Nykaa",
    "price": 499.00,
    "category": "makeup",
    "images": [
      "https://www.nykaa.com/beauty-blog/wp-content/uploads/2018/10/New-Launch-Nykaa-Cosmetics-Ultra-Matte-Lipsticks_1.jpg"
    ],
    "desc": "Smooth creamy lipstick with rich pigmentation by Nykaa."
  },
  {
    "id": 2,
    "title": "The Body Shop Liquid Lipstick",
    "brand": "The Body Shop",
    "price": 499.00,
    "category": "makeup",
    "images": [
      "https://1.bp.blogspot.com/-1-303JuTKj4/WOVedfe5xgI/AAAAAAAAAWg/7oK7TBmxBjAnWrUrbLqPQE54HJIiIF5aACLcB/s1600/IMG_2367.JPG"
    ],
    "desc": "Long-lasting liquid lipstick with satin finish."
  },
  {
    "id": 3,
    "title": "Lakme Lip Gloss",
    "brand": "Lakme",
    "price": 349.00,
    "category": "makeup",
    "images": [
      "https://i.pinimg.com/originals/e0/6e/68/e06e687d2cd524ced7c1364663c3df3c.jpg"
    ],
    "desc": "Sheer high-shine gloss to add a wet look to lips."
  },
  {
    "id": 4,
    "title": "L'Oreal Lip Balm",
    "brand": "L'Oreal",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://i5.walmartimages.com/asr/7880181d-b5c5-481e-a47b-7dd103d27ec6_1.7af1e9cfa8f81cec3d130d39e07f0269.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff"
    ],
    "desc": "Hydrating lip balm with nourishing oils."
  },
  {
    "id": 5,
    "title": "Lakme Mascara",
    "brand": "Lakme",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://cdn.tirabeauty.com/v2/billowing-snowflake-434234/tira-p/wrkr/products/pictures/item/free/original/1134267/vYUE9tGFkr-1134267_1.jpg"
    ],
    "desc": "Volumizing mascara for bold lashes."
  },
  {
    "id": 6,
    "title": "L'Oreal Waterproof Mascara",
    "brand": "L'Oreal",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://www.kroger.com/product/images/large/front/0007124900642"
    ],
    "desc": "Waterproof formula that stays put all day."
  },
  {
    "id": 7,
    "title": "Clinique Eyeliner",
    "brand": "Clinique",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://sdcdn.io/cl/cl_sku_V4R301_2400x2400_0.jpg"
    ],
    "desc": "Smooth gliding eyeliner for precise lines."
  },
  {
    "id": 8,
    "title": "Neutrogena Gel Eyeliner",
    "brand": "Neutrogena",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://images.ctfassets.net/bcjr30vxh6td/5ZiGE5OmuQGRqPcjPjpONN/92cfa5deb674289a7aaa76a867647fcd/6819564XX_Swipe_JetBlack.png"
    ],
    "desc": "Smudge-proof gel eyeliner for dramatic eyes."
  },
  {
    "id": 9,
    "title": "Estee Lauder Kajal",
    "brand": "Estee Lauder",
    "price": 149.00,
    "category": "makeup",
    "images": [
      "https://productimages.hepsiburada.net/s/498/550/110000549232583.jpg"
    ],
    "desc": "Creamy kajal that defines eyes beautifully."
  },
  {
    "id": 10,
    "title": "Nykaa Foundation",
    "brand": "Nykaa",
    "price": 499.00,
    "category": "makeup",
    "images": [
      "https://www.nykaa.com/beauty-blog/wp-content/uploads/images/issue340/Nykaa-Pore-Minimising-Foundation-Will-Elevate-Your-Beauty-Game,-x10!_OI.jpg"
    ],
    "desc": "Lightweight foundation with buildable coverage."
  },
  {
    "id": 11,
    "title": "Clinique Liquid Foundation",
    "brand": "Clinique",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://i.pinimg.com/originals/18/af/48/18af48f16ce3e9c3d5c65b6bd41f9b39.jpg"
    ],
    "desc": "Flawless finish foundation from Clinique."
  },
  {
    "id": 12,
    "title": "Nykaa Stick Foundation",
    "brand": "Nykaa",
    "price": 399.00,
    "category": "makeup",
    "images": [
      "https://i0.wp.com/makeupandsmiles.com/wp-content/uploads/2018/01/img_6616.jpg?w=1920"
    ],
    "desc": "Portable stick foundation for touch-ups."
  },
  {
    "id": 13,
    "title": "L'Oreal Concealer",
    "brand": "L'Oreal",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://m.media-amazon.com/images/I/41OHsMJAS2L._SL1060_.jpg"
    ],
    "desc": "Brightening concealer for under-eye coverage."
  },
  {
    "id": 14,
    "title": "Maybelline Compact Powder",
    "brand": "Maybelline",
    "price": 249.00,
    "category": "makeup",
    "images": [
      "https://cf.shopee.co.id/file/35c4f3a60db413ba3d7c3e8efe08329a"
    ],
    "desc": "Matte compact for smooth skin finish."
  },
  {
    "id": 15,
    "title": "Maybelline Loose Powder",
    "brand": "Maybelline",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://i1.wp.com/www.40andholding.com/wp-content/uploads/2018/06/D4F720FB-427C-4F39-AA22-339FBF642C28.jpeg?resize=1024%2C1024"
    ],
    "desc": "Lightweight loose powder for setting makeup."
  },
  {
    "id": 16,
    "title": "Neutrogena Blush",
    "brand": "Neutrogena",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://www.makeupandbeautyblog.com/wp-content/uploads/2015/09/neutrogena-healthy-skin-blush.jpg"
    ],
    "desc": "Soft blush for natural flush of color."
  },
  {
    "id": 17,
    "title": "The Body Shop Cream Blush",
    "brand": "The Body Shop",
    "price": 149.00,
    "category": "makeup",
    "images": [
      "https://staticg.sportskeeda.com/editor/2023/08/497db-16908693670837-1920.jpg"
    ],
    "desc": "Cream blush with smooth buildable pigment."
  },
  {
    "id": 18,
    "title": "Nykaa Bronzer",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://images-static.nykaa.com/media/catalog/product/6/2/6215c9aPACXX00000329_4.jpg"
    ],
    "desc": "Warm bronzer for sun-kissed glow."
  },
  {
    "id": 19,
    "title": "Huda Beauty Highlighter",
    "brand": "Huda Beauty",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://imgix.bustle.com/2017/5/29/40c6001d-f7a6-4ebb-9862-6e5522b4a265.jpg?w=614&fit=crop&crop=faces&auto=format%2Ccompress&q=50&dpr=2"
    ],
    "desc": "Intense highlighter for radiant glow."
  },
  {
    "id": 20,
    "title": "L'Oreal Eyeshadow Palette",
    "brand": "L'Oreal",
    "price": 399.00,
    "category": "makeup",
    "images": [
      "http://1.bp.blogspot.com/-C_UWX89UAoQ/VVGuHTEP6MI/AAAAAAAAPgY/CUuYuQ8cgRk/s1600/l'oreal-color-riche-la-palette-nude-2-review-swatches-2.jpg"
    ],
    "desc": "Versatile palette with matte & shimmer shades."
  },
  {
    "id": 21,
    "title": "The Body Shop Single Eyeshadow",
    "brand": "The Body Shop",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "http://www.lilykitten.com/wp-content/uploads/2016/10/IMG_1954.jpg"
    ],
    "desc": "Highly pigmented single shade."
  },
  {
    "id": 22,
    "title": "Maybelline Brow Pencil",
    "brand": "Maybelline",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://www.bigw.com.au/medias/sys_master/images/images/h5b/h7e/14100810989598.jpg"
    ],
    "desc": "Precise brow pencil for natural arches."
  },
  {
    "id": 23,
    "title": "Estee Lauder Brow Gel",
    "brand": "Estee Lauder",
    "price": 179.00,
    "category": "makeup",
    "images": [
      "https://i.notino.com/view/estee-lauder/887167188297_01__12.jpg"
    ],
    "desc": "Hold and shape brows all day."
  },
  {
    "id": 24,
    "title": "L'Oreal Setting Spray",
    "brand": "L'Oreal",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://www.loreal-paris.co.uk/-/media/project/loreal/brand-sites/oap/master/dmi/products/makeup/face-makeup/infaillible/infaillible-3-second-setting-mist/vignette-03.jpg?w=1440&rev=bba8244288014bb8897351d384ea6cee&hash=732AD3E2869AC17B0245737D3DF6EC46B14483E6"
    ],
    "desc": "Lightweight setting spray for lasting makeup."
  },
  {
    "id": 25,
    "title": "Neutrogena Makeup Remover",
    "brand": "Neutrogena",
    "price": 229.00,
    "category": "makeup",
    "images": [
      "https://m.media-amazon.com/images/I/71ntL2JfpsL._AC_.jpg"
    ],
    "desc": "Gentle makeup remover wipes."
  },
  {
    "id": 26,
    "title": "Maybelline Primer",
    "brand": "Maybelline",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://www.bellyrubzbeauty.com/wp-content/uploads/2019/06/img_3492-1.jpg"
    ],
    "desc": "Smooth primer to prep skin for makeup."
  },
  {
    "id": 27,
    "title": "Nykaa Setting Powder",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://d286adtp3hdk00.cloudfront.net/5f10ffff-b500-4795-aaed-de3efdfc3161/thumbnails/NYKAC00001684_1_thumb.0000004.jpg"
    ],
    "desc": "Translucent powder to set foundation."
  },
  {
    "id": 28,
    "title": "Clinique Contour Kit",
    "brand": "Clinique",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://www.makeupandbeautyblog.com/wp-content/uploads/2015/05/clinique-sculptionary-cheek-2.jpg"
    ],
    "desc": "Cream-to-powder contour kit for sculpted look."
  },
  {
    "id": 29,
    "title": "MAC BB Cream",
    "brand": "MAC",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "http://3.bp.blogspot.com/-epO9-BpgFpk/UhQETTdqO_I/AAAAAAAAQjM/mI7U7-_ignU/s400/mac_bb2.jpg"
    ],
    "desc": "Light coverage BB cream with skin benefits."
  },
  {
    "id": 30,
    "title": "Clinique CC Cream",
    "brand": "Clinique",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://www.mywomenstuff.com/wp-content/uploads/2013/05/clinique_cc_cream3.jpg"
    ],
    "desc": "Color-correcting cream for even tone."
  },
  {
    "id": 31,
    "title": "L'Oreal Cushion Foundation",
    "brand": "L'Oreal",
    "price": 249.00,
    "category": "makeup",
    "images": [
      "http://makeup-sessions.com/wp-content/uploads/2016/01/loreallumi4-1024x713.jpg"
    ],
    "desc": "Cushion compact foundation for dewy finish."
  },
  {
    "id": 32,
    "title": "The Body Shop Color Corrector",
    "brand": "The Body Shop",
    "price": 249.00,
    "category": "makeup",
    "images": [
      "https://www.medoget.com/cdn/shop/files/downloadcopy_bb3f3941-5b97-4097-b019-970cfda4edbf_1024x.png?v=1695631086"
    ],
    "desc": "Neutralizes redness and evens skin tone."
  },
  {
    "id": 33,
    "title": "Estee Lauder Makeup Brush Set",
    "brand": "Estee Lauder",
    "price": 249.00,
    "category": "makeup",
    "images": [
      "https://irecommend.ru/sites/default/files/product-images/100224/el_portablebrushset.jpg"
    ],
    "desc": "Premium brush set for face & eye application."
  },
  {
    "id": 34,
    "title": "Clinique Beauty Sponge",
    "brand": "Clinique",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://i.pinimg.com/736x/d0/2c/08/d02c086fac33b53cd2fd8279c56b55fd.jpg"
    ],
    "desc": "Soft blending sponge for seamless application."
  },
  {
    "id": 35,
    "title": "The Body Shop False Lashes",
    "brand": "The Body Shop",
    "price": 159.00,
    "category": "makeup",
    "images": [
      "http://youandeyecosmetics.com/cdn/shop/articles/peo-primary-false-lashes-jthompson-0802-e8753049131d42949576f3cbca3f4cdb.jpg?v=1683302193"
    ],
    "desc": "Lightweight false lashes for dramatic looks."
  },
  {
    "id": 36,
    "title": "L'Oreal Eyelash Curler",
    "brand": "L'Oreal",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "http://www.beautyjunkees.com/wp-content/uploads/2013/07/bigstock-closeup-of-an-eyelash-curler-o-35007680.jpg"
    ],
    "desc": "Precision curler to lift lashes effectively."
  },
  {
    "id": 37,
    "title": "Lakme Lip Liner",
    "brand": "Lakme",
    "price": 129.00,
    "category": "makeup",
    "images": [
      "https://images-static.nykaa.com/media/catalog/product/5/6/563f58b8901030823930_5.jpg"
    ],
    "desc": "Define lips with long-wear lip liner."
  },
  {
    "id": 38,
    "title": "Nykaa Makeup Fixing Spray",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://images-static.nykaa.com/media/catalog/product/9/6/96c9f3fNYKAC00002302_9N.jpg"
    ],
    "desc": "Keeps makeup intact in all conditions."
  },
  {
    "id": 39,
    "title": "MAC Compact Powder (Matte)",
    "brand": "MAC",
    "price": 199.00,
    "category": "makeup",
    "images": [
      "https://down-id.img.susercontent.com/file/id-11134207-7r98s-lt1w9ojyvvp0f4"
    ],
    "desc": "Matte finish compact for shine control."
  },
  {
    "id": 40,
    "title": "MAC Powder Puff",
    "brand": "MAC",
    "price": 149.00,
    "category": "makeup",
    "images": [
      "https://i5.walmartimages.com/seo/Boluotou-Powder-Puff-5-1Inch-Large-Loose-Powder-Puff-for-Body-Powder-Ultra-Soft-Washable-Velour-Fluffy-Body-Powder-Puffs-with-Ribbon-White_a7a760b0-ca4e-470e-831d-1cae1c9cda91.ec31daa2b12391deaa1a7678ac523a70.jpeg"
    ],
    "desc": "Soft powder puff for smooth application."
  },
  {
    "id": 41,
    "title": "Lakme Makeup Travel Kit",
    "brand": "Lakme",
    "price": 699.00,
    "category": "makeup",
    "images": [
      "https://i.pinimg.com/originals/25/cc/72/25cc72a8fbc83be6341c21ab7ade7d6e.png"
    ],
    "desc": "Compact travel kit for touch-ups on-the-go."
  },
  {
    "id": 42,
    "title": "Nykaa Makeup Palette",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "makeup",
    "images": [
      "https://images-static.nykaa.com/media/catalog/product/3/3/333efedNYKAC00000370_7.jpg"
    ],
    "desc": "All-in-one palette with eye, cheek & lip shades."
  },
  {
    "id": 43,
    "title": "L'Oreal Glow Serum",
    "brand": "L'Oreal",
    "price": 399.00,
    "category": "makeup",
    "images": [
      "https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/80895/original/review_LOreal_Glycolic_Bright_Instant_Glowing_Face_Serum.jpg"
    ],
    "desc": "Illuminating serum for subtle radiance."
  },
  {
    "id": 44,
    "title": "Huda Beauty Face Cleanser",
    "brand": "Huda Beauty",
    "price": 349.00,
    "category": "skincare",
    "images": [
      "http://brandzondemand.com/cdn/shop/files/wishful10.webp?v=1701488991"
    ],
    "desc": "Mild foaming cleanser for daily use."
  },
  {
    "id": 45,
    "title": "Estee Lauder Hydrating Toner",
    "brand": "Estee Lauder",
    "price": 249.00,
    "category": "skincare",
    "images": [
      "https://caostore.vn/wp-content/uploads/2023/07/toner-estee-lauder-soft-clean-silky-hydrating-lotion1.jpg"
    ],
    "desc": "Hydrating toner to prep skin."
  },
  {
    "id": 46,
    "title": "Nykaa Vitamin C Serum",
    "brand": "Nykaa",
    "price": 499.00,
    "category": "skincare",
    "images": [
      "https://www.thepinkvelvetblog.com/wp-content/uploads/2022/12/Nykaa-SKINRX-20-Vitamin-C-Serum-Review-1-768x960.jpg"
    ],
    "desc": "Brightening vitamin C serum."
  },
  {
    "id": 47,
    "title": "Huda Beauty Hyaluronic Serum",
    "brand": "Huda Beauty",
    "price": 259.00,
    "category": "skincare",
    "images": [
      "https://lzd-img-global.slatic.net/g/p/53484613f3e5bb3dd4a24d80a883846a.jpg_720x720q80.jpg"
    ],
    "desc": "Deeply hydrating hyaluronic serum."
  },
  {
    "id": 48,
    "title": "L'Oreal Niacinamide Serum",
    "brand": "L'Oreal",
    "price": 189.00,
    "category": "skincare",
    "images": [
      "https://www.dealsmagnet.com/images/loreal-paris-brightening-serum-1-glycolic-acid-o-18YJeiMA.jpg"
    ],
    "desc": "Niacinamide serum for clear pores & texture."
  },
  {
    "id": 49,
    "title": "L'Oreal Moisturizer (Day)",
    "brand": "L'Oreal",
    "price": 349.00,
    "category": "skincare",
    "images": [
      "https://m.media-amazon.com/images/I/71FeGJp4vYL._SL1500_.jpg"
    ],
    "desc": "Lightweight day moisturizer with SPF."
  },
  {
    "id": 50,
    "title": "Huda Beauty Moisturizer (Night)",
    "brand": "Huda Beauty",
    "price": 249.00,
    "category": "skincare",
    "images": [
      "https://i.pinimg.com/736x/07/7b/54/077b549eb39c25e4d7ccb0d66cf87561.jpg"
    ],
    "desc": "Rich night cream for overnight repair."
  },
  {
    "id": 51,
    "title": "Estee Lauder Eye Cream",
    "brand": "Estee Lauder",
    "price": 499.00,
    "category": "skincare",
    "images": [
      "https://s.cdnsbn.com/images/products/xl/28431080601.jpg"
    ],
    "desc": "Soothing eye cream for dark circles."
  },
  {
    "id": 52,
    "title": "Neutrogena Sheet Mask",
    "brand": "Neutrogena",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://ameena.pk/cdn/shop/files/1206563-1_1200x.webp?v=1721928722"
    ],
    "desc": "Hydrating sheet mask for instant glow."
  },
  {
    "id": 53,
    "title": "Clinique Clay Mask",
    "brand": "Clinique",
    "price": 249.00,
    "category": "skincare",
    "images": [
      "https://www.daisybeauty.com/wp-content/uploads/2016/10/PA150053-949x1024.jpg"
    ],
    "desc": "Purifying clay mask for deep cleansing."
  },
  {
    "id": 54,
    "title": "Huda Beauty Sleeping Mask",
    "brand": "Huda Beauty",
    "price": 299.00,
    "category": "skincare",
    "images": [
      "https://www.nuvoledibellezza.com/wp-content/uploads/2022/09/Sleeping-Mask-Pillowgasm-Cherry-Glow-Huda-Beauty-10-1024x1024.jpg"
    ],
    "desc": "Overnight mask to restore moisture."
  },
  {
    "id": 55,
    "title": "Neutrogena Sunscreen SPF50",
    "brand": "Neutrogena",
    "price": 299.00,
    "category": "skincare",
    "images": [
      "https://i.pinimg.com/originals/c8/bb/e1/c8bbe10ad993390a0ff4737d669b46ea.jpg"
    ],
    "desc": "Broad spectrum SPF50 sunscreen lotion."
  },
  {
    "id": 56,
    "title": "Huda Beauty Face Oil",
    "brand": "Huda Beauty",
    "price": 249.00,
    "category": "skincare",
    "images": [
      "https://i.pinimg.com/736x/61/46/b6/6146b670763e995bff70195e5c243e8b.jpg"
    ],
    "desc": "Nourishing face oil for dry skin."
  },
  {
    "id": 57,
    "title": "MAC Micellar Water",
    "brand": "MAC",
    "price": "159.00",
    "category": "skincare",
    "images": [
      "https://cdn2.jomashop.com/media/catalog/product/cache/fde19e4197824625333be074956e7640/m/a/mac-ladies-lightful-c3-hydrating-micellar-water-makeup-remover-67-oz-skin-care-773602585281_2.jpg?width=546&height=546"
    ],
    "desc": "Gentle micellar water for makeup removal."
  },
  {
    "id": 58,
    "title": "The Body Shop Makeup Remover Wipes",
    "brand": "The Body Shop",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://i.pinimg.com/originals/56/05/85/56058580cc22cc21a361b6e54d1dcaf8.jpg"
    ],
    "desc": "Convenient wipes to remove makeup easily."
  },
  {
    "id": 59,
    "title": "Clinique Exfoliating Scrub",
    "brand": "Clinique",
    "price": 399.00,
    "category": "skincare",
    "images": [
      "https://i.pinimg.com/originals/c7/5b/0e/c75b0e5ee561fe48095da40dba4204a5.jpg"
    ],
    "desc": "Gentle scrub to renew skin texture."
  },
  {
    "id": 60,
    "title": "L'Oreal Face Mist",
    "brand": "L'Oreal",
    "price": 399.00,
    "category": "skincare",
    "images": [
      "https://www.bangerhead.nl/bilder/artiklar/zoom/B090111_1.jpg?m=1706432923"
    ],
    "desc": "Refreshing face mist for instant hydration."
  },
  {
    "id": 61,
    "title": "Huda Beauty Face Essence",
    "brand": "Huda Beauty",
    "price": 299.00,
    "category": "skincare",
    "images": [
      "https://quickee.com/wp-content/uploads/2023/09/c956b7db3b2cb5ac86eb9ceecd568807.jpg"
    ],
    "desc": "Lightweight essence to boost skin radiance."
  },
  {
    "id": 62,
    "title": "The Body Shop Anti-Aging Serum",
    "brand": "The Body Shop",
    "price": 399.00,
    "category": "skincare",
    "images": [
      "https://down-th.img.susercontent.com/file/vn-11134207-7qukw-lfuy9kul2x6272"
    ],
    "desc": "Targets fine lines and signs of aging."
  },
  {
    "id": 63,
    "title": "Nykaa Retinol Serum",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "skincare",
    "images": [
      "https://images-static.naikaa.com/beauty-blog/wp-content/uploads/2024/05/handbook-6.jpg"
    ],
    "desc": "Retinol serum to support skin turnover."
  },
  {
    "id": 64,
    "title": "MAC Collagen Cream",
    "brand": "MAC",
    "price": 399.00,
    "category": "skincare",
    "images": [
      "https://www.amuseground.com/cdn/shop/files/7658769809-9_-0.webp?crop=center&height=1149&v=1746753151&width=1200"
    ],
    "desc": "Collagen-boosting cream for firmer skin."
  },
  {
    "id": 65,
    "title": "Maybelline Brightening Serum",
    "brand": "Maybelline",
    "price": 599.00,
    "category": "skincare",
    "images": [
      "https://i5.walmartimages.com/seo/Maybelline-Grippy-Serum-Makeup-Grip-Primer-2-Niacinamide-1-Kit_c80e743b-4db0-4107-9915-97af85dfd129.035f02f12e35155926ee435dea869839.jpeg"
    ],
    "desc": "Brightening formula to even skin tone."
  },
  {
    "id": 66,
    "title": "Clinique Pore Minimizer",
    "brand": "Clinique",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgahph80Z24v3XG6Y6H3koP9dk57G9T95yxmTbdsJ_kMo4kM8sUZ0qogEI7gZ7C3a_cuN3YnCFPW4NOImIdKAwOXQ0foAvw6rxkdIxd2pNamh7p6jqB7oujgzA4Ktbas6kpWYyS5TVPchw/s1600/CLINIQUEpmRM1.JPG"
    ],
    "desc": "Minimizes appearance of enlarged pores."
  },
  {
    "id": 67,
    "title": "Huda Beauty BB Cream (Skincare)",
    "brand": "Huda Beauty",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://down-th.img.susercontent.com/file/b483bccbb7a4617715d7d425fba92667"
    ],
    "desc": "BB cream with natural skincare benefits."
  },
  {
    "id": 68,
    "title": "Maybelline CC Cream (Skincare)",
    "brand": "Maybelline",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://ba.fimgs.net/system/pics/15115/original/Maybelline-Care-and-Correct.jpg"
    ],
    "desc": "Color correcting cream with SPF protection."
  },
  {
    "id": 69,
    "title": "Estee Lauder Acne Spot Gel",
    "brand": "Estee Lauder",
    "price": 299.00,
    "category": "skincare",
    "images": [
      "https://www.thefashionspot.com/wp-content/uploads/sites/11/gallery/moisturizers-for-acne-update/estee-lauder-clear-difference-aqua-gel.jpg"
    ],
    "desc": "Targeted spot treatment for breakouts."
  },
  {
    "id": 70,
    "title": "Huda Beauty SPF Moisturizer",
    "brand": "Huda Beauty",
    "price": 249.00,
    "category": "skincare",
    "images": [
      "https://img.drz.lazcdn.com/static/lk/p/f8f23e8feff2654d07f0536ff71803db.jpg_720x720q80.jpg"
    ],
    "desc": "Moisturizer with built-in sun protection."
  },
  {
    "id": 71,
    "title": "Neutrogena Hand Cream",
    "brand": "Neutrogena",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://i5.walmartimages.com/seo/Neutrogena-Norwegian-Formula-Moisturizing-Hand-Cream-Formulated-Glycerin-Dry-Rough-Hands-Fragrance-Free-Intensive-Lotion-2-Oz-Pack-6_56a26a82-eadb-42a8-ab4b-8b13be50f3c1.8bc625068cdd5ee974aea1f03a8a424f.jpeg"
    ],
    "desc": "Non-greasy hand cream to restore softness."
  },
  {
    "id": 72,
    "title": "Lakme Lip Balm (Treatment)",
    "brand": "Lakme",
    "price": 199.00,
    "category": "skincare",
    "images": [
      "https://www.indianbeautyhub.com/wp-content/uploads/2016/01/Lakme-Lip-Love-Lip-Care-Grape-Lip-Balm-Review_3.jpg"
    ],
    "desc": "Nourishing lip treatment balm."
  },
  {
    "id": 73,
    "title": "Huda Beauty Foot Cream",
    "brand": "Huda Beauty",
    "price": 399.00,
    "category": "skincare",
    "images": [
      "https://m.media-amazon.com/images/I/51dWHZaXW7L._SY879_.jpg"
    ],
    "desc": "Hydrating foot cream for soft heels."
  },
  {
    "id": 74,
    "title": "MAC Shampoo (Repair)",
    "brand": "MAC",
    "price": 399.00,
    "category": "haircare",
    "images": [
      "https://www.macadamiahair.com/cdn/shop/files/Ultra_Rich_Shoo_10.jpg?v=1719608422&width=1920"
    ],
    "desc": "Repairing shampoo for damaged hair."
  },
  {
    "id": 75,
    "title": "The Body Shop Shampoo (Moisture)",
    "brand": "The Body Shop",
    "price": 299.00,
    "category": "haircare",
    "images": [
      "https://i.pinimg.com/736x/11/db/e6/11dbe622e2cda9ecf9f084455ab2985a.jpg"
    ],
    "desc": "Moisturizing shampoo for dry hair."
  },
  {
    "id": 76,
    "title": "L'Oreal Conditioner (Repair)",
    "brand": "L'Oreal",
    "price": 599.00,
    "category": "haircare",
    "images": [
      "https://i5.walmartimages.com/asr/e413431b-c75a-4945-a9fc-e0624fab27e3.cc37a499070e1c9a92ffcf8f45ecefbc.jpeg"
    ],
    "desc": "Restorative conditioner to smooth hair."
  },
  {
    "id": 77,
    "title": "Nykaa Hair Mask",
    "brand": "Nykaa",
    "price": 399.00,
    "category": "haircare",
    "images": [
      "https://www.kroger.com/product/images/large/front/0890424571557"
    ],
    "desc": "Deep conditioning mask for shine."
  },
  {
    "id": 78,
    "title": "Neutrogena Hair Oil (Nourish)",
    "brand": "Neutrogena",
    "price": 299.00,
    "category": "haircare",
    "images": [
      "https://m.media-amazon.com/images/I/71M4sBRxkcL._SX522_.jpg"
    ],
    "desc": "Nourishing hair oil for scalp health."
  },
  {
    "id": 79,
    "title": "Huda Beauty Hair Serum",
    "brand": "Huda Beauty",
    "price": 199.00,
    "category": "haircare",
    "images": [
      "http://alfatah.pk/cdn/shop/files/6291106036572.jpg?v=1703245865"
    ],
    "desc": "Lightweight serum for frizz control."
  },
  {
    "id": 80,
    "title": "The Body Shop Dry Shampoo",
    "brand": "The Body Shop",
    "price": 499.00,
    "category": "haircare",
    "images": [
      "https://sinin.com.bd/wp-content/uploads/2023/09/The-Body-Shop-Banana-Truly-Nourishing-Shampoo.jpg"
    ],
    "desc": "Freshen hair between washes."
  },
  {
    "id": 81,
    "title": "L'Oreal Leave-in Conditioner",
    "brand": "L'Oreal",
    "price": 499.00,
    "category": "haircare",
    "images": [
      "https://m.media-amazon.com/images/I/61uP+3UFD6S._SL1080_.jpg"
    ],
    "desc": "Detangling leave-in for smooth hair."
  },
  {
    "id": 82,
    "title": "Huda Beauty Heat Protectant Spray",
    "brand": "Huda Beauty",
    "price": 299.00,
    "category": "haircare",
    "images": [
      "https://images.asos-media.com/products/huda-beauty-resting-boss-face-setting-spray/24367445-1-nocolour?$n_750w$&wid=750&hei=750&fit=crop"
    ],
    "desc": "Protects hair from heat styling damage."
  },
  {
    "id": 83,
    "title": "The Body Shop Hair Perfume",
    "brand": "The Body Shop",
    "price": 299.00,
    "category": "haircare",
    "images": [
      "https://www.beautyheaven.com.au/wp-content/uploads/2022/08/1018667_BDY_MST_CHOICE_GLOWING_CBLSM_100ML_A0X_Bronze_INABUPS079-copy.jpg"
    ],
    "desc": "Light fragrance specially for hair."
  },
  {
    "id": 84,
    "title": "Maybelline Scalp Treatment",
    "brand": "Maybelline",
    "price": 249.00,
    "category": "haircare",
    "images": [
      "https://bng.com.pk/cdn/shop/products/Maybelline-Maybelline-SuperStay-24H-Setting-Spray_1800x1800_8832e36b-d0ce-47dc-8ab3-09fc2c56bf17_800x.webp?v=1686142040"
    ],
    "desc": "Soothing scalp treatment for irritation."
  },
  {
    "id": 85,
    "title": "L'Oreal Anti Frizz Serum",
    "brand": "L'Oreal",
    "price": 399.00,
    "category": "haircare",
    "images": [
      "https://media1.popsugar-assets.com/files/thumbor/8pv4mWOl5kE63A8g7dI4L8JE7x0/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2020/01/13/697/n/29590734/4c41a3b7f70935bb_FRIZZ_KILLER_SERUM/i/LOr%C3%A9al-Paris-Dream-Lengths-Anti-Frizz-Serum.png"
    ],
    "desc": "Silicone-free anti-frizz serum for sleek hair."
  },
  {
    "id": 86,
    "title": "Neutrogena Color Protect Shampoo",
    "brand": "Neutrogena",
    "price": 499.00,
    "category": "haircare",
    "images": [
      "https://i5.walmartimages.com/seo/Neutrogena-Healthy-Scalp-Rapid-Renewal-Shampoo-with-Pea-Protein-UV-Damage-Protecting-12-fl-oz_23a521df-642f-48e3-b9bf-844728b69e66.9013e12a2c23ce00c1a9aa45a6c07c0a.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
    ],
    "desc": "Protects color-treated hair from fading."
  },
  {
    "id": 87,
    "title": "Clinique Keratin Treatment",
    "brand": "Clinique",
    "price": 499.00,
    "category": "haircare",
    "images": [
      "https://s.cdnsbn.com/images/products/l/27949280401-1.jpg"
    ],
    "desc": "In-salon quality keratin treatment kit."
  },
  {
    "id": 88,
    "title": "L'Oreal Hair Growth Serum",
    "brand": "L'Oreal",
    "price": 299.00,
    "category": "haircare",
    "images": [
      "https://www.loreal-paris.co.uk/-/media/project/loreal/brand-sites/oap/emea/uk/products/hair/hair-care/elvive/growth-booster-serum/growth-booster-serum-secondary-image-2.jpg?w=1440&hash=837C1ED631DA3035CB4F7A67C2DC1CB1"
    ],
    "desc": "Supports stronger-looking hair."
  },
  {
    "id": 89,
    "title": "Estee Lauder Eau de Parfum",
    "brand": "Estee Lauder",
    "price": 299.00,
    "category": "fragrance",
    "images": [
      "https://www.perfumedirect.com/cdn/shop/files/estee-lauder-women-s-perfume-estee-lauder-beautiful-eau-de-parfum-women-s-perfume-spray-15ml-30ml-75ml-39852770984095.png?v=1718266066"
    ],
    "desc": "Elegant signature fragrance."
  },
  {
    "id": 90,
    "title": "Maybelline Eau de Toilette",
    "brand": "Maybelline",
    "price": 290.00,
    "category": "fragrance",
    "images": [
      "https://m.media-amazon.com/images/I/61cEP6BOcQL._AC_SL1500_.jpg"
    ],
    "desc": "Fresh everyday scent."
  },
  {
    "id": 91,
    "title": "Maybelline Perfume Spray",
    "brand": "Maybelline",
    "price": 299.00,
    "category": "fragrance",
    "images": [
      "https://bng.com.pk/cdn/shop/products/Maybelline-Maybelline-SuperStay-24H-Setting-Spray_1800x1800_8832e36b-d0ce-47dc-8ab3-09fc2c56bf17_800x.webp?v=1686142040"
    ],
    "desc": "Light spray perfume for daily wear."
  },
  {
    "id": 92,
    "title": "Nykaa Body Mist",
    "brand": "Nykaa",
    "price": 299.00,
    "category": "fragrance",
    "images": [
      "https://i5.walmartimages.com/seo/Nykaa-Naturals-Nykaa-Wanderlust-Body-Milk-Country-Rose-6-08-oz-Body-Milk_a40341f3-5499-4212-86f9-7167129d2f56.a606ec1908284b62204e7207af04f477.jpeg"
    ],
    "desc": "Delicate body mist for quick refresh."
  },
  {
    "id": 93,
    "title": "MAC Roll-on Perfume",
    "brand": "MAC",
    "price": 370.00,
    "category": "fragrance",
    "images": [
      "https://m.media-amazon.com/images/I/51Ocg4k+-wL._SL1200_.jpg"
    ],
    "desc": "Convenient roll-on travel perfume."
  },
  {
    "id": 94,
    "title": "Huda Beauty Travel Perfume",
    "brand": "Huda Beauty",
    "price": 399.00,
    "category": "fragrance",
    "images": [
      "https://media.karousell.com/media/photos/products/2023/2/2/huda_beauty_kayali_travel_perf_1675335690_cc3636b3_progressive.jpg"
    ],
    "desc": "Compact travel-sized fragrance."
  },
  {
    "id": 95,
    "title": "Estee Lauder Luxury Perfume",
    "brand": "Estee Lauder",
    "price": 399.00,
    "category": "fragrance",
    "images": [
      "https://sokilondon.com/wp-content/uploads/2021/12/estee-lauder-dream-dusk-perfume-1.png"
    ],
    "desc": "Luxury scent in decorative bottle."
  },
  {
    "id": 96,
    "title": "Huda Beauty Fragrance Gift Set",
    "brand": "Huda Beauty",
    "price": 599.00,
    "category": "fragrance",
    "images": [
      "https://glamit.pk/wp-content/uploads/2024/10/Kayali-miniature-perfume-set-in-pakistan.jpg"
    ],
    "desc": "Gift set with curated fragrances."
  },
  {
    "id": 97,
    "title": "Clinique Makeup Brush Set",
    "brand": "Clinique",
    "price": 249.00,
    "category": "tools",
    "images": [
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/makeup-gift-set-zoeva-1539706495.jpg"
    ],
    "desc": "Essential brush set for makeup application."
  },
  {
    "id": 98,
    "title": "Clinique Beauty Blender",
    "brand": "Clinique",
    "price": 199.00,
    "category": "tools",
    "images": [
      "https://i.pinimg.com/originals/18/00/cd/1800cdb75f37248268737b9f87910dc1.jpg"
    ],
    "desc": "Blending sponge for flawless finish."
  },
  {
    "id": 99,
    "title": "Lakme Eyelash Curler",
    "brand": "Lakme",
    "price": 199.00,
    "category": "tools",
    "images": [
      "https://i5.walmartimages.com/seo/NYX-Eyelash-Curler-Eyelash-Curler_a140178a-12c9-4fb3-ba56-71685807cbf7.0984f2691c55e457ed66b18054ca79fa.jpeg"
    ],
    "desc": "Stainless steel curler for lasting lift."
  },
  {
    "id": 100,
    "title": "Estee Lauder Face Roller (Jade)",
    "brand": "Estee Lauder",
    "price": 199.00,
    "category": "tools",
    "images": [
      "https://i.makeup.ie/s/sc/scqyovzw4anx.jpg"
    ],
    "desc": "Relaxing jade roller for depuffing skin."
  },
  {
    "id": 101,
    "title": "L'Oreal Jade Roller",
    "brand": "L'Oreal",
    "price": 199.00,
    "category": "tools",
    "images": [
      "https://epocacosmeticos.vteximg.com.br/arquivos/ids/546838-120-120/brinde-l-oreal-paris-jade-roller.jpg?v=638181950615400000"
    ],
    "desc": "Facial roller for cooling massage."
  },
  {
    "id": 102,
    "title": "Nykaa Manicure Kit",
    "brand": "Nykaa",
    "price": 599.00,
    "category": "tools",
    "images": [
      "https://i5.walmartimages.com/seo/Abaima-16pcs-Manicure-Sets-Mini-Pedicure-Kit-Nail-Clippers-Professional-Grooming-PU-Leather-Case-Stainless-Steel-Trave-Care-Tools-Pink_14a15744-3776-48b7-af30-beb56cb39e1b.fbbb593f00441d2efa8051aedc03badd.jpeg?odnHeight=424&odnWidth=424&odnBg=FFFFFF"
    ],
    "desc": "Compact manicure set for nails care."
  }
];

/* ---------------------------------------------------------------------
   App logic (runs after DOM ready)
   --------------------------------------------------------------------- */
// ✅ Product Data (You can expand this list)

// ✅ DOM Elements
const productGrid = document.getElementById("productGrid");
const cartSidebar = document.getElementById("cartSidebar");
const wishSidebar = document.getElementById("wishSidebar");
const cartBtn = document.getElementById("cartBtn");
const wishBtn = document.getElementById("wishBtn");
const closeCart = document.getElementById("closeCart");
const closeWish = document.getElementById("closeWish");
const cartItemsEl = document.getElementById("cartItems");
const wishItemsEl = document.getElementById("wishItems");
const cartCountEl = document.getElementById("cartCount");
const wishCountEl = document.getElementById("wishCount");
const cartTotalEl = document.getElementById("cartTotal");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const filterBtns = document.querySelectorAll(".filter-btn");

// ✅ Modal Elements
const modalBackdrop = document.getElementById("modalBackdrop");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalMainImg = document.getElementById("modalMainImg");
const modalTitle = document.getElementById("modalTitle");
const modalBrand = document.getElementById("modalBrand");
const modalDesc = document.getElementById("modalDesc");
const modalPrice = document.getElementById("modalPrice");
const modalAddCart = document.getElementById("modalAddCart");
const modalWish = document.getElementById("modalWish");

let selectedProduct = null;
let filteredProducts = [...productsData];

// ✅ LocalStorage
let cart = JSON.parse(localStorage.getItem("blush_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("blush_wishlist") || "[]");

// ✅ Initial Render
renderProducts(filteredProducts);
renderCart();
renderWishlist();

// ✅ 1. Render Products
function renderProducts(products) {
  productGrid.innerHTML = "";
  products.forEach(product => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img class="thumb" src="${product.images[0]}" alt="${product.title}">
      <h3 class="title">${product.title}</h3>
      <p class="brand-label">${product.brand}</p>
      <p class="price">$${product.price}</p>
      <div class="card-actions">
        <button class="btn primary" onclick="addToCart(${product.id})">Add</button>
        <button class="btn heart ${wishlist.some(w => w.id === product.id) ? 'wished' : ''}"
                onclick="toggleWishlist(${product.id})">❤</button>
        <button class="btn secondary" onclick="viewProduct(${product.id})">View</button>
      </div>
    `;
    productGrid.appendChild(card);
  });
}

// ✅ 2. Add to Cart
function addToCart(id) {
  const item = cart.find(c => c.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ id, qty: 1 });
  }
  saveCart();
  renderCart();
  openCart();
}

// ✅ 3. Render Cart
function renderCart() {
  cartItemsEl.innerHTML = "";
  let total = 0;

  if (!cart.length) {
    cartItemsEl.innerHTML = `<p style="text-align:center;margin-top:20px;">Your cart is empty.</p>`;
    cartTotalEl.textContent = "0.00";
    cartCountEl.textContent = 0;
    return;
  }

  cart.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return;
    const itemTotal = product.price * item.qty;
    total += itemTotal;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <div style="flex:1;">
        <strong>${product.title}</strong>
        <p>Qty: ${item.qty}</p>
        <p>$${itemTotal}</p>
      </div>
      <button class="btn" onclick="removeFromCart(${product.id})">🗑</button>
    `;
    cartItemsEl.appendChild(div);
  });

  cartTotalEl.textContent = total;
  cartCountEl.textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}

// ✅ 4. Remove from Cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
}

// ✅ 5. Wishlist Toggle
function toggleWishlist(id) {
  const exists = wishlist.find(w => w.id === id);
  if (exists) {
    wishlist = wishlist.filter(w => w.id !== id);
  } else {
    wishlist.push({ id });
  }
  saveWishlist();
  renderWishlist();
  renderProducts(filteredProducts); // to update heart icon
}

// ✅ 6. Render Wishlist
function renderWishlist() {
  wishItemsEl.innerHTML = "";
  if (!wishlist.length) {
    wishItemsEl.innerHTML = `<p style="text-align:center;margin-top:20px;">Your wishlist is empty.</p>`;
    wishCountEl.textContent = 0;
    return;
  }

  wishlist.forEach(item => {
    const product = productsData.find(p => p.id === item.id);
    if (!product) return;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img src="${product.images[0]}" alt="${product.title}">
      <div style="flex:1;">
        <strong>${product.title}</strong>
        <p>$${product.price}</p>
      </div>
      <button class="btn" onclick="removeFromWishlist(${product.id})">🗑</button>
    `;
    wishItemsEl.appendChild(div);
  });

  wishCountEl.textContent = wishlist.length;
}

// ✅ 7. Remove Wishlist Item
function removeFromWishlist(id) {
  wishlist = wishlist.filter(w => w.id !== id);
  saveWishlist();
  renderWishlist();
  renderProducts(filteredProducts);
}

// ✅ 8. Product Modal
function viewProduct(id) {
  selectedProduct = productsData.find(p => p.id === id);
  if (!selectedProduct) return;
  modalMainImg.src = selectedProduct.images[0];
  modalTitle.textContent = selectedProduct.title;
  modalBrand.textContent = selectedProduct.brand;
  modalDesc.textContent = selectedProduct.desc;
  modalPrice.textContent = `$${selectedProduct.price}`;
  modalBackdrop.style.display = "flex";
}

closeModalBtn.addEventListener("click", () => {
  modalBackdrop.style.display = "none";
});

modalAddCart.addEventListener("click", () => {
  if (selectedProduct) {
    addToCart(selectedProduct.id);
    modalBackdrop.style.display = "none";
  }
});

modalWish.addEventListener("click", () => {
  if (selectedProduct) {
    toggleWishlist(selectedProduct.id);
    modalBackdrop.style.display = "none";
  }
});

// ✅ 9. Sidebar Controls
cartBtn.addEventListener("click", openCart);
wishBtn.addEventListener("click", openWish);
closeCart.addEventListener("click", () => cartSidebar.classList.remove("show"));
closeWish.addEventListener("click", () => wishSidebar.classList.remove("show"));

function openCart() {
  wishSidebar.classList.remove("show");
  cartSidebar.classList.add("show");
}

function openWish() {
  cartSidebar.classList.remove("show");
  wishSidebar.classList.add("show");
}

// ✅ 10. Live Search
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toLowerCase();
  filteredProducts = productsData.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.brand.toLowerCase().includes(query)
  );
  renderProducts(filteredProducts);
});

// ✅ 11. Sort
sortSelect.addEventListener("change", () => {
  const value = sortSelect.value;
  let sorted = [...productsData];
  if (value === "low") sorted.sort((a, b) => a.price - b.price);
  if (value === "high") sorted.sort((a, b) => b.price - a.price);
  filteredProducts = sorted;
  renderProducts(filteredProducts);
});

// ✅ 12. Category Filters
filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const cat = btn.getAttribute("data-cat");
    if (cat === "all") filteredProducts = [...productsData];
    else filteredProducts = productsData.filter(p => p.category === cat);
    renderProducts(filteredProducts);
  });
});

// ✅ Save Functions
function saveCart() {
  localStorage.setItem("blush_cart", JSON.stringify(cart));
}
function saveWishlist() {
  localStorage.setItem("blush_wishlist", JSON.stringify(wishlist));
}
