/*
  ══ CANONICAL PRODUCT DATA ══
  Migrated from the live Anwar Optical WooCommerce store (anwaroptical.pk)
  via its public Store API on 2026-09-05.
  Source-of-truth field is sourceUrl on every product.

  Field notes:
  - "kind" / "image" are flat legacy aliases kept for the existing V2
    homepage, search, cart and Quick View code — they mirror the first
    entry of "images" and a human label built from verified type+gender.
  - "images" is the full migrated gallery (all genuine photos found on the
    source product page — no fabricated angles). Each entry has a 1000px
    working size and a 480px thumbnail, both locally hosted WebP.
  - "description" is null for every product: the source WooCommerce copy
    was full of unverifiable durability/UV/guarantee/percentage claims
    (see OWNER_VERIFICATION_REQUIRED.md) and was not migrated. PDPs show
    only structured, verified facts.
  - Designer brand names (Ray-Ban, Hugo Boss, DITA, Cartier, Mont Blanc)
    appearing on 8 source listings were removed from "name" as a precaution:
    genuine designer eyewear does not sell at these prices, and there is no
    verification that the site is an authorized reseller. This is an
    unconfirmed editorial decision pending owner sign-off, not something the
    owner has actually reviewed or approved — see ownerReviewFields +
    OWNER_VERIFICATION_REQUIRED.md, where the owner must confirm authorization
    before any brand name is restored.
  - 4 source products had neither a usable name nor a price ("Prod-001"…)
    and were not migrated — see PRODUCT_MIGRATION_REPORT.md.
  - colour/colours/attributes are populated only where WooCommerce actually
    recorded a product attribute; most products have none, so these are
    null rather than guessed from the photo.
*/
window.PRODUCTS = [
  {
    "id": 32196,
    "slug": "product-196",
    "sourceUrl": "https://anwaroptical.pk/product/32196/",
    "name": "Product 196",
    "sourceName": null,
    "type": "eyeglasses",
    "category": "Mens",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 3550,
    "compareAtPrice": 6000,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/product-196-1.webp",
        "thumb": "/migrated/w480/product-196-1.webp",
        "w": 1000,
        "h": 919
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "name"
    ],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/product-196-1.webp"
  },
  {
    "id": 32172,
    "slug": "men-s-sheet",
    "sourceUrl": "https://anwaroptical.pk/product/boss-mens-branded-sheet-unbreakable/",
    "name": "Men's Sheet",
    "sourceName": "Boss | Men's Branded | Sheet | Unbreakable",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 2950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/men-s-sheet-1.webp",
        "thumb": "/migrated/w480/men-s-sheet-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/men-s-sheet-2.webp",
        "thumb": "/migrated/w480/men-s-sheet-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/men-s-sheet-3.webp",
        "thumb": "/migrated/w480/men-s-sheet-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/men-s-sheet-4.webp",
        "thumb": "/migrated/w480/men-s-sheet-4.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/men-s-sheet-5.webp",
        "thumb": "/migrated/w480/men-s-sheet-5.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/men-s-sheet-1.webp"
  },
  {
    "id": 32166,
    "slug": "ringmaster",
    "sourceUrl": "https://anwaroptical.pk/product/rayban-ringmaster-unisex-unbreakable/",
    "name": "Ringmaster",
    "sourceName": "RAYBAN | Ringmaster | Unisex | unbreakable",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 2950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ringmaster-1.webp",
        "thumb": "/migrated/w480/ringmaster-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/ringmaster-2.webp",
        "thumb": "/migrated/w480/ringmaster-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/ringmaster-3.webp",
        "thumb": "/migrated/w480/ringmaster-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/ringmaster-4.webp",
        "thumb": "/migrated/w480/ringmaster-4.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/ringmaster-1.webp"
  },
  {
    "id": 32163,
    "slug": "sheet-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/boss-unisex-unbreakable-sheet-eyewear/",
    "name": "Sheet Eyewear",
    "sourceName": "Boss | Unisex | unbreakable | Sheet eyewear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 2950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-4.webp",
        "thumb": "/migrated/w480/sheet-eyewear-4.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-5.webp",
        "thumb": "/migrated/w480/sheet-eyewear-5.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/sheet-eyewear-1.webp"
  },
  {
    "id": 32151,
    "slug": "sheet-eyewear-mens",
    "sourceUrl": "https://anwaroptical.pk/product/dita-sheet-eyewear-mens/",
    "name": "Sheet Eyewear Mens",
    "sourceName": "DITA | Sheet eyewear | Mens",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 2950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-mens-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-mens-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-mens-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-mens-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-mens-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-mens-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-mens-4.webp",
        "thumb": "/migrated/w480/sheet-eyewear-mens-4.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/sheet-eyewear-mens-1.webp"
  },
  {
    "id": 32143,
    "slug": "metal-ladies-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/metal-ladies-eyewear-daily-wear/",
    "name": "Metal Ladies Eyewear",
    "sourceName": "Metal | Ladies eyewear | Daily wear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1650,
    "compareAtPrice": 2500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-1.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-2.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-3.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-4.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/metal-ladies-eyewear-1.webp"
  },
  {
    "id": 32131,
    "slug": "metal-cat-eye-ladies",
    "sourceUrl": "https://anwaroptical.pk/product/metal-cat-eye-ladies-fashion-trend2025/",
    "name": "Metal Cat Eye Ladies",
    "sourceName": "Metal Cat Eye | Ladies Fashion | Trend2025 |",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1650,
    "compareAtPrice": 2450,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-cat-eye-ladies-1.webp",
        "thumb": "/migrated/w480/metal-cat-eye-ladies-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-cat-eye-ladies-2.webp",
        "thumb": "/migrated/w480/metal-cat-eye-ladies-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-cat-eye-ladies-3.webp",
        "thumb": "/migrated/w480/metal-cat-eye-ladies-3.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/metal-cat-eye-ladies-1.webp"
  },
  {
    "id": 32118,
    "slug": "metal-ladies-eyewear-32118",
    "sourceUrl": "https://anwaroptical.pk/product/metal-ladies-eyewear-causal-and-daily-wear/",
    "name": "Metal Ladies Eyewear",
    "sourceName": "Metal | Ladies eyewear | Causal and daily wear |",
    "type": "eyeglasses",
    "category": "Women's",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": 2400,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-32118-1.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-32118-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-32118-2.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-32118-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-32118-3.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-32118-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-ladies-eyewear-32118-4.webp",
        "thumb": "/migrated/w480/metal-ladies-eyewear-32118-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/metal-ladies-eyewear-32118-1.webp"
  },
  {
    "id": 32109,
    "slug": "rounded-metal-ladies-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/32109/",
    "name": "Rounded Metal Ladies Eyewear",
    "sourceName": "Rounded metal | Ladies eyewear | Unbreakable",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 1150,
    "compareAtPrice": 2200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/rounded-metal-ladies-eyewear-1.webp",
        "thumb": "/migrated/w480/rounded-metal-ladies-eyewear-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/rounded-metal-ladies-eyewear-2.webp",
        "thumb": "/migrated/w480/rounded-metal-ladies-eyewear-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/rounded-metal-ladies-eyewear-3.webp",
        "thumb": "/migrated/w480/rounded-metal-ladies-eyewear-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/rounded-metal-ladies-eyewear-4.webp",
        "thumb": "/migrated/w480/rounded-metal-ladies-eyewear-4.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/rounded-metal-ladies-eyewear-5.webp",
        "thumb": "/migrated/w480/rounded-metal-ladies-eyewear-5.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/rounded-metal-ladies-eyewear-1.webp"
  },
  {
    "id": 32101,
    "slug": "metal-penta-shape-ladies",
    "sourceUrl": "https://anwaroptical.pk/product/metal-penta-shape-ladies-best-design-unbreakable/",
    "name": "Metal Penta Shape Ladies",
    "sourceName": "Metal | Penta Shape | ladies best Design | unbreakable",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": 2450,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-penta-shape-ladies-1.webp",
        "thumb": "/migrated/w480/metal-penta-shape-ladies-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-penta-shape-ladies-2.webp",
        "thumb": "/migrated/w480/metal-penta-shape-ladies-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-penta-shape-ladies-3.webp",
        "thumb": "/migrated/w480/metal-penta-shape-ladies-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-penta-shape-ladies-4.webp",
        "thumb": "/migrated/w480/metal-penta-shape-ladies-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/metal-penta-shape-ladies-1.webp"
  },
  {
    "id": 32099,
    "slug": "transparent-sheet",
    "sourceUrl": "https://anwaroptical.pk/product/transparent-sheet-daily-and-rough-use-unbreakable/",
    "name": "Transparent Sheet",
    "sourceName": "Transparent | Sheet | Daily and Rough Use | unbreakable",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 1150,
    "compareAtPrice": 2200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/transparent-sheet-1.webp",
        "thumb": "/migrated/w480/transparent-sheet-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/transparent-sheet-2.webp",
        "thumb": "/migrated/w480/transparent-sheet-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/transparent-sheet-3.webp",
        "thumb": "/migrated/w480/transparent-sheet-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/transparent-sheet-4.webp",
        "thumb": "/migrated/w480/transparent-sheet-4.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/transparent-sheet-5.webp",
        "thumb": "/migrated/w480/transparent-sheet-5.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/transparent-sheet-1.webp"
  },
  {
    "id": 32073,
    "slug": "sapphire-sheet-frame",
    "sourceUrl": "https://anwaroptical.pk/product/sapphire-sheet-frame-causal-and-daily-use/",
    "name": "Sapphire Sheet Frame",
    "sourceName": "Sapphire | Sheet frame | Causal and daily use |",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 950,
    "compareAtPrice": 2200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sapphire-sheet-frame-1.webp",
        "thumb": "/migrated/w480/sapphire-sheet-frame-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/sapphire-sheet-frame-2.webp",
        "thumb": "/migrated/w480/sapphire-sheet-frame-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/sapphire-sheet-frame-3.webp",
        "thumb": "/migrated/w480/sapphire-sheet-frame-3.webp",
        "w": 1000,
        "h": 992
      },
      {
        "src": "/migrated/w1000/sapphire-sheet-frame-4.webp",
        "thumb": "/migrated/w480/sapphire-sheet-frame-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/sapphire-sheet-frame-1.webp"
  },
  {
    "id": 32057,
    "slug": "ladies-glass-sunglass",
    "sourceUrl": "https://anwaroptical.pk/product/ladies-brand-glass-sunglass/",
    "name": "Ladies Glass Sunglass",
    "sourceName": "Ladies Brand | Glass Sunglass |",
    "type": "sunglasses",
    "category": "Sunglasses",
    "subcategory": [],
    "gender": "women",
    "price": 1650,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ladies-glass-sunglass-1.webp",
        "thumb": "/migrated/w480/ladies-glass-sunglass-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-glass-sunglass-2.webp",
        "thumb": "/migrated/w480/ladies-glass-sunglass-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-glass-sunglass-3.webp",
        "thumb": "/migrated/w480/ladies-glass-sunglass-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-glass-sunglass-4.webp",
        "thumb": "/migrated/w480/ladies-glass-sunglass-4.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Sunglasses · Women",
    "image": "/migrated/w1000/ladies-glass-sunglass-1.webp"
  },
  {
    "id": 31997,
    "slug": "ladies-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/ladies-eyewear-brand-trending-2025-party-and-casual-wear/",
    "name": "Ladies Eyewear",
    "sourceName": "Ladies eyewear | Brand | Trending 2025 | party and Casual wear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1450,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ladies-eyewear-1.webp",
        "thumb": "/migrated/w480/ladies-eyewear-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-eyewear-2.webp",
        "thumb": "/migrated/w480/ladies-eyewear-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-eyewear-3.webp",
        "thumb": "/migrated/w480/ladies-eyewear-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-eyewear-4.webp",
        "thumb": "/migrated/w480/ladies-eyewear-4.webp",
        "w": 1000,
        "h": 998
      },
      {
        "src": "/migrated/w1000/ladies-eyewear-5.webp",
        "thumb": "/migrated/w480/ladies-eyewear-5.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/ladies-eyewear-1.webp"
  },
  {
    "id": 31988,
    "slug": "ladies-fancy-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/ladies-fancy-eyewear-brand-casual-and-partywear/",
    "name": "Ladies Fancy Eyewear",
    "sourceName": "Ladies Fancy eyewear | Brand | Casual and Partywear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1650,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-1.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-2.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-3.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-3.webp",
        "w": 1000,
        "h": 995
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-4.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/ladies-fancy-eyewear-1.webp"
  },
  {
    "id": 31985,
    "slug": "ladies-fancy-eyewear-31985",
    "sourceUrl": "https://anwaroptical.pk/product/ladies-fancy-eyewear-brand-longlife/",
    "name": "Ladies Fancy Eyewear",
    "sourceName": "Ladies Fancy eyewear | Brand | longlife",
    "type": "eyeglasses",
    "category": "Women's",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1650,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-31985-1.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-31985-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-31985-2.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-31985-2.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-31985-3.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-31985-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/ladies-fancy-eyewear-31985-4.webp",
        "thumb": "/migrated/w480/ladies-fancy-eyewear-31985-4.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/ladies-fancy-eyewear-31985-1.webp"
  },
  {
    "id": 31945,
    "slug": "metal-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/cartier-metal-eyewear-unisex-branded/",
    "name": "Metal Eyewear",
    "sourceName": "Cartier | Metal eyewear | Unisex | Branded",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-eyewear-1.webp",
        "thumb": "/migrated/w480/metal-eyewear-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-eyewear-2.webp",
        "thumb": "/migrated/w480/metal-eyewear-2.webp",
        "w": 1000,
        "h": 998
      },
      {
        "src": "/migrated/w1000/metal-eyewear-3.webp",
        "thumb": "/migrated/w480/metal-eyewear-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-eyewear-4.webp",
        "thumb": "/migrated/w480/metal-eyewear-4.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-eyewear-5.webp",
        "thumb": "/migrated/w480/metal-eyewear-5.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/metal-eyewear-1.webp"
  },
  {
    "id": 31855,
    "slug": "kids-eyewear-sheet-age-10-to-15-years",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-unbreakable-sheet-age-10-to-15-years/",
    "name": "Kids Eyewear Sheet Age 10 To 15 Years",
    "sourceName": "Kids Eyewear | Unbreakable Sheet | age 10 to 15 years",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 950,
    "compareAtPrice": 1850,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-to-15-years-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-to-15-years-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-to-15-years-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-to-15-years-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-to-15-years-3.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-to-15-years-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-to-15-years-4.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-to-15-years-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-sheet-age-10-to-15-years-1.webp"
  },
  {
    "id": 31836,
    "slug": "kids-eyewear-sheet-age-10-15",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-unbreakable-sheet-grade-7-to-9-students/",
    "name": "Kids Eyewear Sheet Age 10-15",
    "sourceName": "Kids Eyewear | Unbreakable Sheet | Age 10-15",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 950,
    "compareAtPrice": 1850,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-15-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-15-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-15-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-15-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-15-3.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-15-3.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-age-10-15-4.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-age-10-15-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-sheet-age-10-15-1.webp"
  },
  {
    "id": 31811,
    "slug": "fancy-sheet",
    "sourceUrl": "https://anwaroptical.pk/product/fancy-sheet-party-wear-and-casual-trends/",
    "name": "Fancy Sheet",
    "sourceName": "Fancy Sheet | party wear and Casual | Trends",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": 3200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/fancy-sheet-1.webp",
        "thumb": "/migrated/w480/fancy-sheet-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/fancy-sheet-2.webp",
        "thumb": "/migrated/w480/fancy-sheet-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/fancy-sheet-3.webp",
        "thumb": "/migrated/w480/fancy-sheet-3.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/fancy-sheet-4.webp",
        "thumb": "/migrated/w480/fancy-sheet-4.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/fancy-sheet-1.webp"
  },
  {
    "id": 31807,
    "slug": "metal-men-s-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/luxury-metal-mens-eyewear-mont-blanc/",
    "name": "Metal Men's Eyewear",
    "sourceName": "Luxury Metal | Men's eyewear | Mont blanc",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 2250,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-men-s-eyewear-1.webp",
        "thumb": "/migrated/w480/metal-men-s-eyewear-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-men-s-eyewear-2.webp",
        "thumb": "/migrated/w480/metal-men-s-eyewear-2.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/metal-men-s-eyewear-1.webp"
  },
  {
    "id": 31800,
    "slug": "kids-eyewear-age-8-to-10-years-plastic",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-age-8-to-10-years-nonbreakable-plastic-trends2025/",
    "name": "Kids Eyewear Age 8 To 10 Years Plastic",
    "sourceName": "Kids Eyewear | age 8 to 10 years | nonbreakable plastic | Trends2025",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 750,
    "compareAtPrice": 1200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-age-8-to-10-years-plastic-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-age-8-to-10-years-plastic-1.webp",
        "w": 512,
        "h": 512
      },
      {
        "src": "/migrated/w1000/kids-eyewear-age-8-to-10-years-plastic-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-age-8-to-10-years-plastic-2.webp",
        "w": 512,
        "h": 512
      },
      {
        "src": "/migrated/w1000/kids-eyewear-age-8-to-10-years-plastic-3.webp",
        "thumb": "/migrated/w480/kids-eyewear-age-8-to-10-years-plastic-3.webp",
        "w": 512,
        "h": 512
      },
      {
        "src": "/migrated/w1000/kids-eyewear-age-8-to-10-years-plastic-4.webp",
        "thumb": "/migrated/w480/kids-eyewear-age-8-to-10-years-plastic-4.webp",
        "w": 512,
        "h": 512
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-age-8-to-10-years-plastic-1.webp"
  },
  {
    "id": 31767,
    "slug": "metal-eyewear-31767",
    "sourceUrl": "https://anwaroptical.pk/product/metal-eyewear-trends-hot-design-casual-and-party-wear/",
    "name": "Metal Eyewear",
    "sourceName": "Metal eyewear | Trends | Hot design |Casual and Party wear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-eyewear-31767-1.webp",
        "thumb": "/migrated/w480/metal-eyewear-31767-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-eyewear-31767-2.webp",
        "thumb": "/migrated/w480/metal-eyewear-31767-2.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": "Brown",
    "colours": [
      "Brown",
      "Golden",
      "Grey",
      "Silver"
    ],
    "attributes": {
      "color": [
        "Brown",
        "Golden",
        "Grey",
        "Silver"
      ],
      "size": [
        "52"
      ]
    },
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/metal-eyewear-31767-1.webp"
  },
  {
    "id": 31671,
    "slug": "fancy-metal-eyewear",
    "sourceUrl": "https://anwaroptical.pk/product/fancy-metal-new-trends-2025-casual-and-party-wear-eyewear/",
    "name": "Fancy Metal Eyewear",
    "sourceName": "Fancy Metal | New Trends 2025 | Casual and party wear | eyewear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/fancy-metal-eyewear-1.webp",
        "thumb": "/migrated/w480/fancy-metal-eyewear-1.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": "Black",
    "colours": [
      "Black",
      "Brown",
      "Golden",
      "Grey",
      "Silver"
    ],
    "attributes": {
      "color": [
        "Black",
        "Brown",
        "Golden",
        "Grey",
        "Silver"
      ],
      "size": [
        "52"
      ]
    },
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/fancy-metal-eyewear-1.webp"
  },
  {
    "id": 31660,
    "slug": "metal-eyewear-31660",
    "sourceUrl": "https://anwaroptical.pk/product/meta/",
    "name": "Metal Eyewear",
    "sourceName": "Metal eyewear | Trends | Hot design",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-eyewear-31660-1.webp",
        "thumb": "/migrated/w480/metal-eyewear-31660-1.webp",
        "w": 1000,
        "h": 1000
      },
      {
        "src": "/migrated/w1000/metal-eyewear-31660-2.webp",
        "thumb": "/migrated/w480/metal-eyewear-31660-2.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/metal-eyewear-31660-1.webp"
  },
  {
    "id": 31647,
    "slug": "sheet-plastic-waferer-square",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-plastic-waferer-square/",
    "name": "Sheet Plastic Waferer Square",
    "sourceName": "Sheet plastic | waferer | square",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-plastic-waferer-square-1.webp",
        "thumb": "/migrated/w480/sheet-plastic-waferer-square-1.webp",
        "w": 512,
        "h": 512
      },
      {
        "src": "/migrated/w1000/sheet-plastic-waferer-square-2.webp",
        "thumb": "/migrated/w480/sheet-plastic-waferer-square-2.webp",
        "w": 512,
        "h": 512
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/sheet-plastic-waferer-square-1.webp"
  },
  {
    "id": 31551,
    "slug": "metal-fancy",
    "sourceUrl": "https://anwaroptical.pk/product/31551/",
    "name": "Metal Fancy",
    "sourceName": "Metal Fancy | Branded | partywear &Casual",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 2500,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-fancy-1.webp",
        "thumb": "/migrated/w480/metal-fancy-1.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-fancy-2.webp",
        "thumb": "/migrated/w480/metal-fancy-2.webp",
        "w": 1000,
        "h": 999
      },
      {
        "src": "/migrated/w1000/metal-fancy-3.webp",
        "thumb": "/migrated/w480/metal-fancy-3.webp",
        "w": 1000,
        "h": 999
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/metal-fancy-1.webp"
  },
  {
    "id": 31533,
    "slug": "metal-fancy-halfrimless",
    "sourceUrl": "https://anwaroptical.pk/product/metal-fancy-branded-halfrimless-partywear-casual/",
    "name": "Metal Fancy Halfrimless",
    "sourceName": "Metal Fancy | Branded | Halfrimless | partywear &Casual",
    "type": "eyeglasses",
    "category": "Mens",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/metal-fancy-halfrimless-1.webp",
        "thumb": "/migrated/w480/metal-fancy-halfrimless-1.webp",
        "w": 1000,
        "h": 1000
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/metal-fancy-halfrimless-1.webp"
  },
  {
    "id": 31379,
    "slug": "sheet-plastic-dynamic",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-plastic-dynamic-design-unisex/",
    "name": "Sheet Plastic Dynamic",
    "sourceName": "sheet plastic | Dynamic Design | Unisex",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 1550,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-plastic-dynamic-1.webp",
        "thumb": "/migrated/w480/sheet-plastic-dynamic-1.webp",
        "w": 1000,
        "h": 759
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": {
      "lens": [
        "Simple white (Korean) 700/",
        "Multicoat (Korea) 1000/",
        "Blucut lense (Korea)\n1500/ (recommended)",
        "Blucut lens China 1000/-",
        "Transition photogrey Korean 2500/-",
        "Transition photogrey China 1800/-",
        "Cr HI-Q Hydrophobic Scratch less 2800/-",
        "Drive safe 2500/- Green coating",
        "Drive safe 3500/- Blue coating (Korea)",
        "Bifocal lens Readymade 1500/-",
        "Bifocal make to order multicoat 3500/-",
        "Progressive multicoat Readymade 2500/-",
        "Progressive make to order simple white 4000/-",
        "Progressive multicoat coating Cyl number 4500/-",
        "Drive safe Progressive 12500/- Singapore"
      ]
    },
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/sheet-plastic-dynamic-1.webp"
  },
  {
    "id": 31367,
    "slug": "kids-eyewear-sheet-rubber-plastic",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-sheet-non-breable-casual-rubber-plastic-3/",
    "name": "Kids Eyewear Sheet Rubber Plastic",
    "sourceName": "kids eyewear | sheet non breable | casual rubber plastic | 6 to 9 years",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 750,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-2.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-1.webp"
  },
  {
    "id": 31365,
    "slug": "kids-eyewear-sheet-rubber-plastic-31365",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-sheet-non-breable-casual-rubber-plastic-2/",
    "name": "Kids Eyewear Sheet Rubber Plastic",
    "sourceName": "kids eyewear | sheet non breable | casual rubber plastic",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 750,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31365-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31365-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31365-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31365-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31365-3.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31365-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31365-1.webp"
  },
  {
    "id": 31347,
    "slug": "kids-eyewear-sheet-rubber-plastic-31347",
    "sourceUrl": "https://anwaroptical.pk/product/kids-eyewear-sheet-non-breable-casual-rubber-plastic/",
    "name": "Kids Eyewear Sheet Rubber Plastic",
    "sourceName": "kids eyewear | sheet non breable | casual rubber plastic",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Kids"
    ],
    "gender": "kids",
    "price": 750,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31347-1.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31347-1.webp",
        "w": 1000,
        "h": 857
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31347-2.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31347-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31347-3.webp",
        "thumb": "/migrated/w480/kids-eyewear-sheet-rubber-plastic-31347-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Kids",
    "image": "/migrated/w1000/kids-eyewear-sheet-rubber-plastic-31347-1.webp"
  },
  {
    "id": 31344,
    "slug": "tranparent-shine-white-sheet-plastic",
    "sourceUrl": "https://anwaroptical.pk/product/tranparent-shine-white-sheet-plastic-ladies-design-3/",
    "name": "Tranparent Shine White Sheet Plastic",
    "sourceName": "Tranparent | shine white | sheet plastic | ladies design",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/tranparent-shine-white-sheet-plastic-1.webp",
        "thumb": "/migrated/w480/tranparent-shine-white-sheet-plastic-1.webp",
        "w": 1000,
        "h": 1008
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/tranparent-shine-white-sheet-plastic-1.webp"
  },
  {
    "id": 31342,
    "slug": "tranparent-shine-white-sheet-plastic-31342",
    "sourceUrl": "https://anwaroptical.pk/product/tranparent-shine-white-sheet-plastic-ladies-design-2/",
    "name": "Tranparent Shine White Sheet Plastic",
    "sourceName": "Tranparent | shine white | sheet plastic | ladies design",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/tranparent-shine-white-sheet-plastic-31342-1.webp",
        "thumb": "/migrated/w480/tranparent-shine-white-sheet-plastic-31342-1.webp",
        "w": 1000,
        "h": 818
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/tranparent-shine-white-sheet-plastic-31342-1.webp"
  },
  {
    "id": 31340,
    "slug": "tranparent-shine-white-sheet-plastic-31340",
    "sourceUrl": "https://anwaroptical.pk/product/tranparent-shine-white-sheet-plastic-ladies-design/",
    "name": "Tranparent Shine White Sheet Plastic",
    "sourceName": "Tranparent | shine white | sheet plastic | ladies design",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/tranparent-shine-white-sheet-plastic-31340-1.webp",
        "thumb": "/migrated/w480/tranparent-shine-white-sheet-plastic-31340-1.webp",
        "w": 1000,
        "h": 817
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/tranparent-shine-white-sheet-plastic-31340-1.webp"
  },
  {
    "id": 31332,
    "slug": "transparent-shine",
    "sourceUrl": "https://anwaroptical.pk/product/transparent-shine-unisex-casual-use/",
    "name": "Transparent Shine",
    "sourceName": "transparent | shine | unisex | casual use",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/transparent-shine-1.webp",
        "thumb": "/migrated/w480/transparent-shine-1.webp",
        "w": 1000,
        "h": 960
      },
      {
        "src": "/migrated/w1000/transparent-shine-2.webp",
        "thumb": "/migrated/w480/transparent-shine-2.webp",
        "w": 1000,
        "h": 919
      },
      {
        "src": "/migrated/w1000/transparent-shine-3.webp",
        "thumb": "/migrated/w480/transparent-shine-3.webp",
        "w": 1000,
        "h": 865
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/transparent-shine-1.webp"
  },
  {
    "id": 31330,
    "slug": "mate-sheet-transparent-light-weight",
    "sourceUrl": "https://anwaroptical.pk/product/mate-sheet-transparent-light-weight-casual-unisex/",
    "name": "Mate Sheet Transparent Light Weight",
    "sourceName": "Mate sheet | transparent | light weight | casual | unisex",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 750,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/mate-sheet-transparent-light-weight-1.webp",
        "thumb": "/migrated/w480/mate-sheet-transparent-light-weight-1.webp",
        "w": 1000,
        "h": 804
      },
      {
        "src": "/migrated/w1000/mate-sheet-transparent-light-weight-2.webp",
        "thumb": "/migrated/w480/mate-sheet-transparent-light-weight-2.webp",
        "w": 1000,
        "h": 904
      },
      {
        "src": "/migrated/w1000/mate-sheet-transparent-light-weight-3.webp",
        "thumb": "/migrated/w480/mate-sheet-transparent-light-weight-3.webp",
        "w": 1000,
        "h": 563
      },
      {
        "src": "/migrated/w1000/mate-sheet-transparent-light-weight-4.webp",
        "thumb": "/migrated/w480/mate-sheet-transparent-light-weight-4.webp",
        "w": 1000,
        "h": 1027
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/mate-sheet-transparent-light-weight-1.webp"
  },
  {
    "id": 31325,
    "slug": "mate-transparent-sheet-flexible-plastic-frame",
    "sourceUrl": "https://anwaroptical.pk/product/mate-transparent-sheet-unisex-artical-flexible-plastic-frame/",
    "name": "Mate Transparent Sheet Flexible Plastic Frame",
    "sourceName": "mate transparent sheet | unisex artical | flexible plastic frame",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 950,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/mate-transparent-sheet-flexible-plastic-frame-1.webp",
        "thumb": "/migrated/w480/mate-transparent-sheet-flexible-plastic-frame-1.webp",
        "w": 1000,
        "h": 831
      },
      {
        "src": "/migrated/w1000/mate-transparent-sheet-flexible-plastic-frame-2.webp",
        "thumb": "/migrated/w480/mate-transparent-sheet-flexible-plastic-frame-2.webp",
        "w": 1000,
        "h": 873
      },
      {
        "src": "/migrated/w1000/mate-transparent-sheet-flexible-plastic-frame-3.webp",
        "thumb": "/migrated/w480/mate-transparent-sheet-flexible-plastic-frame-3.webp",
        "w": 1000,
        "h": 832
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/mate-transparent-sheet-flexible-plastic-frame-1.webp"
  },
  {
    "id": 31293,
    "slug": "sheet-eyewear-ladies-plastic-dual-color-rounded",
    "sourceUrl": "https://anwaroptical.pk/product/31293/",
    "name": "Sheet Eyewear Ladies Plastic Dual Color Rounded",
    "sourceName": "Sheet eyewear | ladies casual use | plastic dual color rounded",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-ladies-plastic-dual-color-rounded-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-ladies-plastic-dual-color-rounded-1.webp",
        "w": 1000,
        "h": 929
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-ladies-plastic-dual-color-rounded-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-ladies-plastic-dual-color-rounded-2.webp",
        "w": 1000,
        "h": 563
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-ladies-plastic-dual-color-rounded-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-ladies-plastic-dual-color-rounded-3.webp",
        "w": 1000,
        "h": 818
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-ladies-plastic-dual-color-rounded-1.webp"
  },
  {
    "id": 31291,
    "slug": "sheet-eyewear-cat-eyes-plastic-fancy-frame",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-eyewear-cat-eyes-plastic-fancy-frame/",
    "name": "Sheet Eyewear Cat Eyes Plastic Fancy Frame",
    "sourceName": "Sheet eyewear | Cat eyes | Plastic Fancy frame",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eyes-plastic-fancy-frame-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eyes-plastic-fancy-frame-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eyes-plastic-fancy-frame-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eyes-plastic-fancy-frame-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eyes-plastic-fancy-frame-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eyes-plastic-fancy-frame-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-cat-eyes-plastic-fancy-frame-1.webp"
  },
  {
    "id": 31289,
    "slug": "sheet-eyewear-fancy-ladies-frame",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-eyewear-fancy-ladies-frame/",
    "name": "Sheet Eyewear Fancy Ladies Frame",
    "sourceName": "Sheet eyewear | Fancy Ladies frame",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-fancy-ladies-frame-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-fancy-ladies-frame-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-fancy-ladies-frame-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-fancy-ladies-frame-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-fancy-ladies-frame-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-fancy-ladies-frame-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-fancy-ladies-frame-1.webp"
  },
  {
    "id": 31275,
    "slug": "sheet-frame-ladies-malysia-color",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-frame-ladies-design-malysia-color/",
    "name": "Sheet Frame Ladies Malysia Color",
    "sourceName": "sheet frame | ladies design | malysia color",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1550,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-frame-ladies-malysia-color-1.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-malysia-color-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-frame-ladies-malysia-color-2.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-malysia-color-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-frame-ladies-malysia-color-3.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-malysia-color-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-frame-ladies-malysia-color-1.webp"
  },
  {
    "id": 31273,
    "slug": "sheet-frame-ladies-article",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-frame-ladies-article-casual-use/",
    "name": "Sheet Frame Ladies Article",
    "sourceName": "sheet frame | ladies article | casual use |",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1550,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-frame-ladies-article-1.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-article-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-frame-ladies-article-2.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-article-2.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-frame-ladies-article-1.webp"
  },
  {
    "id": 31268,
    "slug": "level-nine-metal-fancy",
    "sourceUrl": "https://anwaroptical.pk/product/level-nine-metal-fancy-unisex-design/",
    "name": "Level Nine Metal Fancy",
    "sourceName": "Level nine | metal fancy | Unisex design",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Uncategorized",
      "Women's"
    ],
    "gender": "women",
    "price": 1500,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/level-nine-metal-fancy-1.webp",
        "thumb": "/migrated/w480/level-nine-metal-fancy-1.webp",
        "w": 1000,
        "h": 676
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": {
      "frame": [
        "Plastic",
        "Glass"
      ]
    },
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/level-nine-metal-fancy-1.webp"
  },
  {
    "id": 31227,
    "slug": "sheet-frame-ladies-eyewear-made-in-taiwan",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-frame-ladies-eyewear-made-in-taiwan/",
    "name": "Sheet Frame Ladies Eyewear Made In Taiwan",
    "sourceName": "Sheet frame | ladies eyewear | made in Taiwan",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-frame-ladies-eyewear-made-in-taiwan-1.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-eyewear-made-in-taiwan-1.webp",
        "w": 1000,
        "h": 563
      },
      {
        "src": "/migrated/w1000/sheet-frame-ladies-eyewear-made-in-taiwan-2.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-eyewear-made-in-taiwan-2.webp",
        "w": 1000,
        "h": 563
      },
      {
        "src": "/migrated/w1000/sheet-frame-ladies-eyewear-made-in-taiwan-3.webp",
        "thumb": "/migrated/w480/sheet-frame-ladies-eyewear-made-in-taiwan-3.webp",
        "w": 1000,
        "h": 563
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-frame-ladies-eyewear-made-in-taiwan-1.webp"
  },
  {
    "id": 31222,
    "slug": "sheet-eyewear-original-plastic",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-eyewear-original-plastic/",
    "name": "Sheet Eyewear Original Plastic",
    "sourceName": "Sheet eyewear |original plastic",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-original-plastic-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-original-plastic-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-original-plastic-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-original-plastic-2.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-original-plastic-1.webp"
  },
  {
    "id": 31191,
    "slug": "ocher-made-in-korea",
    "sourceUrl": "https://anwaroptical.pk/product/ocher-made-in-korea/",
    "name": "Ocher (Made In Korea)",
    "sourceName": "OCHER (made in Korea)",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/ocher-made-in-korea-1.webp",
        "thumb": "/migrated/w480/ocher-made-in-korea-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/ocher-made-in-korea-1.webp"
  },
  {
    "id": 31188,
    "slug": "huskey-brown",
    "sourceUrl": "https://anwaroptical.pk/product/huskey-brown/",
    "name": "Huskey Brown",
    "sourceName": "Huskey Brown",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/huskey-brown-1.webp",
        "thumb": "/migrated/w480/huskey-brown-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/huskey-brown-1.webp"
  },
  {
    "id": 31170,
    "slug": "lumerier-grey",
    "sourceUrl": "https://anwaroptical.pk/product/lumerier-grey/",
    "name": "Lumerier Grey",
    "sourceName": "Lumerier Grey",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/lumerier-grey-1.webp",
        "thumb": "/migrated/w480/lumerier-grey-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/lumerier-grey-2.webp",
        "thumb": "/migrated/w480/lumerier-grey-2.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/lumerier-grey-1.webp"
  },
  {
    "id": 31165,
    "slug": "balle-sheet",
    "sourceUrl": "https://anwaroptical.pk/product/balle-sheet-unisex/",
    "name": "Balle Sheet",
    "sourceName": "BALLE sheet | Unisex",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1199,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/balle-sheet-1.webp",
        "thumb": "/migrated/w480/balle-sheet-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/balle-sheet-2.webp",
        "thumb": "/migrated/w480/balle-sheet-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/balle-sheet-3.webp",
        "thumb": "/migrated/w480/balle-sheet-3.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/balle-sheet-1.webp"
  },
  {
    "id": 31161,
    "slug": "discovery-sheet-hard-plastic",
    "sourceUrl": "https://anwaroptical.pk/product/discovery-sheet-hard-plastic/",
    "name": "Discovery Sheet Hard Plastic",
    "sourceName": "Discovery Sheet | Hard plastic",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens"
    ],
    "gender": "men",
    "price": 1550,
    "compareAtPrice": 3200,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/discovery-sheet-hard-plastic-1.webp",
        "thumb": "/migrated/w480/discovery-sheet-hard-plastic-1.webp",
        "w": 1000,
        "h": 956
      },
      {
        "src": "/migrated/w1000/discovery-sheet-hard-plastic-2.webp",
        "thumb": "/migrated/w480/discovery-sheet-hard-plastic-2.webp",
        "w": 1000,
        "h": 879
      },
      {
        "src": "/migrated/w1000/discovery-sheet-hard-plastic-3.webp",
        "thumb": "/migrated/w480/discovery-sheet-hard-plastic-3.webp",
        "w": 1000,
        "h": 563
      },
      {
        "src": "/migrated/w1000/discovery-sheet-hard-plastic-4.webp",
        "thumb": "/migrated/w480/discovery-sheet-hard-plastic-4.webp",
        "w": 1000,
        "h": 748
      },
      {
        "src": "/migrated/w1000/discovery-sheet-hard-plastic-5.webp",
        "thumb": "/migrated/w480/discovery-sheet-hard-plastic-5.webp",
        "w": 1000,
        "h": 643
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Men",
    "image": "/migrated/w1000/discovery-sheet-hard-plastic-1.webp"
  },
  {
    "id": 31147,
    "slug": "sheet-transparent",
    "sourceUrl": "https://anwaroptical.pk/product/sheet-transparent-unisex/",
    "name": "Sheet Transparent",
    "sourceName": "Sheet transparent Unisex",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Mens",
      "Women's"
    ],
    "gender": "unisex",
    "price": 1099,
    "compareAtPrice": 1999,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-transparent-1.webp",
        "thumb": "/migrated/w480/sheet-transparent-1.webp",
        "w": 1000,
        "h": 824
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Unisex",
    "image": "/migrated/w1000/sheet-transparent-1.webp"
  },
  {
    "id": 31141,
    "slug": "mate-transparent",
    "sourceUrl": "https://anwaroptical.pk/product/rayban-mate-transparent/",
    "name": "Mate Transparent",
    "sourceName": "Rayban mate Transparent",
    "type": "sunglasses",
    "category": "Sunglasses",
    "subcategory": [
      "Men's"
    ],
    "gender": "men",
    "price": 1850,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/mate-transparent-1.webp",
        "thumb": "/migrated/w480/mate-transparent-1.webp",
        "w": 1000,
        "h": 721
      },
      {
        "src": "/migrated/w1000/mate-transparent-2.webp",
        "thumb": "/migrated/w480/mate-transparent-2.webp",
        "w": 1000,
        "h": 563
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Sunglasses · Men",
    "image": "/migrated/w1000/mate-transparent-1.webp"
  },
  {
    "id": 31135,
    "slug": "aviator-goldengreen",
    "sourceUrl": "https://anwaroptical.pk/product/rayban-aviator-goldengreen/",
    "name": "Aviator Goldengreen",
    "sourceName": "RayBan Aviator GoldenGreen",
    "type": "sunglasses",
    "category": "Sunglasses",
    "subcategory": [
      "Men's"
    ],
    "gender": "men",
    "price": 2250,
    "compareAtPrice": 5500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/aviator-goldengreen-1.webp",
        "thumb": "/migrated/w480/aviator-goldengreen-1.webp",
        "w": 1000,
        "h": 829
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Sunglasses · Men",
    "image": "/migrated/w1000/aviator-goldengreen-1.webp"
  },
  {
    "id": 31128,
    "slug": "rb3689-bi-gradient",
    "sourceUrl": "https://anwaroptical.pk/product/ray-ban-rb3689-bi-gradient/",
    "name": "Rb3689 Bi-gradient",
    "sourceName": "RAY BAN RB3689 BI-GRADIENT",
    "type": "sunglasses",
    "category": "Sunglasses",
    "subcategory": [
      "Men's"
    ],
    "gender": "men",
    "price": 2250,
    "compareAtPrice": 3500,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/rb3689-bi-gradient-1.webp",
        "thumb": "/migrated/w480/rb3689-bi-gradient-1.webp",
        "w": 1000,
        "h": 743
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [
      "brand-claim-removed"
    ],
    "kind": "Sunglasses · Men",
    "image": "/migrated/w1000/rb3689-bi-gradient-1.webp"
  },
  {
    "id": 31045,
    "slug": "platinum-grey",
    "sourceUrl": "https://anwaroptical.pk/product/platinum-grey/",
    "name": "Platinum Grey",
    "sourceName": "Platinum Grey",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/platinum-grey-1.webp",
        "thumb": "/migrated/w480/platinum-grey-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/platinum-grey-1.webp"
  },
  {
    "id": 31039,
    "slug": "sabrin-grey-green",
    "sourceUrl": "https://anwaroptical.pk/product/sabrin-grey-green/",
    "name": "Sabrin Grey-green",
    "sourceName": "Sabrin grey-green",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sabrin-grey-green-1.webp",
        "thumb": "/migrated/w480/sabrin-grey-green-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/sabrin-grey-green-1.webp"
  },
  {
    "id": 31036,
    "slug": "topaz-color-contact-lense",
    "sourceUrl": "https://anwaroptical.pk/product/topaz-color-contact-lense/",
    "name": "Topaz Color Contact Lense",
    "sourceName": "Topaz color contact lense",
    "type": "contact-lens",
    "category": "Contact Lenses",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/topaz-color-contact-lense-1.webp",
        "thumb": "/migrated/w480/topaz-color-contact-lense-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/topaz-color-contact-lense-1.webp"
  },
  {
    "id": 31018,
    "slug": "amber-gold",
    "sourceUrl": "https://anwaroptical.pk/product/amber-gold/",
    "name": "Amber Gold",
    "sourceName": "Amber Gold",
    "type": "contact-lens",
    "category": "Magic Eye",
    "subcategory": [
      "Magic Eye"
    ],
    "gender": null,
    "price": 2250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/amber-gold-1.webp",
        "thumb": "/migrated/w480/amber-gold-1.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Contact Lenses",
    "image": "/migrated/w1000/amber-gold-1.webp"
  },
  {
    "id": 31008,
    "slug": "sheet-eyewear-daimond-cut-pink-transparent-ladies-frame",
    "sourceUrl": "https://anwaroptical.pk/product/prod-005/",
    "name": "Sheet Eyewear Daimond Cut Pink Transparent Ladies Frame",
    "sourceName": "sheet eyewear | Daimond cut pink Transparent | ladies frame",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 1250,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-3.webp",
        "w": 1000,
        "h": 721
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-daimond-cut-pink-transparent-ladies-frame-1.webp"
  },
  {
    "id": 31006,
    "slug": "sheet-eyewear-cat-eye",
    "sourceUrl": "https://anwaroptical.pk/product/prod-004/",
    "name": "Sheet Eyewear Cat Eye",
    "sourceName": "Sheet eyewear | Cat eye | Casual wear",
    "type": "eyeglasses",
    "category": "Eyewear",
    "subcategory": [
      "Women's"
    ],
    "gender": "women",
    "price": 750,
    "compareAtPrice": null,
    "currency": "PKR",
    "images": [
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eye-1.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eye-1.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eye-2.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eye-2.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eye-3.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eye-3.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eye-4.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eye-4.webp",
        "w": 1000,
        "h": 750
      },
      {
        "src": "/migrated/w1000/sheet-eyewear-cat-eye-5.webp",
        "thumb": "/migrated/w480/sheet-eyewear-cat-eye-5.webp",
        "w": 1000,
        "h": 750
      }
    ],
    "colour": null,
    "colours": null,
    "attributes": null,
    "description": null,
    "ownerReviewFields": [],
    "kind": "Eyeglasses · Women",
    "image": "/migrated/w1000/sheet-eyewear-cat-eye-1.webp"
  }
];

window.getProductBySlug = function(slug){
  return window.PRODUCTS.find(function(p){ return p.slug === slug; }) || null;
};
