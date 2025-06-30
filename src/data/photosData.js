const photos = [
    {
        id:1,
        src:"/images/fullsize/2022_0403_1714.jpg",
        thumb:"/images/thumbnail/2022_0403_1714.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/04/03",
        place:"広島県尾道市 千光寺公園",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Flowers", subcategory: "Chrry Blossom" }
        ]
    },
    {
        id:2,
        src:"/images/fullsize/2022_0902_1003.jpg",
        thumb:"/images/thumbnail/2022_0902_1003.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 京都御所",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Historical Buildings" }
        ]
    },
    {
        id:3,
        src:"/images/fullsize/2022_0902_1312.jpg",
        thumb:"/images/thumbnail/2022_0902_1312.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 伏見稲荷大社",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Historical Buildings" }
        ],
    },
    {
        id:4,
        src:"/images/fullsize/2022_0902_1541.jpg",
        thumb:"/images/thumbnail/2022_0902_1541.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 清水寺",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Historical Buildings" },
            { category: "Architecture", subcategory: "Shrines&Temples" }
        ]
    },
    {
        id:5,
        src:"/images/fullsize/2022_0903_1312.jpg",
        thumb:"/images/thumbnail/2022_0903_1312.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/03",
        place:"滋賀県大津市 近江神宮",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Historical Buildings" },
            { category: "Architecture", subcategory: "Shrines&Temples" }
        ]
    },
    {
        id:6,
        src:"/images/fullsize/2022_0903_2227.jpg",
        thumb:"/images/thumbnail/2022_0903_2227.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/03",
        place:"京都府京都市 鴨川",
        categories:[
            { category: "Landscape", subcategory: "Night View" },
            { category: "Landscape", subcategory: "Rivers" }
        ]
    },
    {
        id:7,
        src:"/images/fullsize/2022_1030_2033.jpg",
        thumb:"/images/thumbnail/2022_1030_2033.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/10/30",
        place:"広島県広島市 広島市立大学",
        categories:[
            { category: "Events", subcategory: "Fireworks" },
            { category: "Events", subcategory: "Festivals" }
        ]
    },
    {
        id:8,
        src:"/images/fullsize/2023_0101_1025.jpg",
        thumb:"/images/thumbnail/2023_0101_1025.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2023/01/01",
        place:"静岡県静岡市 三保松原",
        categories:[
            { category: "Landscape", subcategory: "Mountains" }
        ]
    },
    {
        id:9,
        src:"/images/fullsize/2023_0602_1915.jpg",
        thumb:"/images/thumbnail/2023_0602_1915.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2023/06/02",
        place:"広島県広島市",
        categories:[
            { category: "Events", subcategory: "Festivals" }
        ]
    },
    {
        id:10,
        src:"/images/fullsize/2023_1125_1417.jpg",
        thumb:"/images/thumbnail/2023_1125_1417.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"超広角カメラ",
        date:"2023/11/25",
        place:"広島県呉市 魔女のランプ",
        categories:[
            { category: "Interiors", subcategory: "Cafes" }
        ]
    },
    {
        id:11,
        src:"/images/fullsize/2023_1125_1601.jpg",
        thumb:"/images/thumbnail/2023_1125_1601.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2023/11/25",
        place:"広島県呉市 魔女のランプ",
        categories:[
            { category: "Interiors", subcategory: "Cafes" }
        ]
    },
    {
        id:12,
        src:"/images/fullsize/2024_0214_1351.jpg",
        thumb:"/images/thumbnail/2024_0214_1351.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/02/14",
        place:"広島県広島市 Cat Café MOFF",
        categories:[
            { category: "Animals", subcategory: "Cats" }
        ]
    },
    {
        id:13,
        src:"/images/fullsize/2024_0404_1351.jpg",
        thumb:"/images/thumbnail/2024_0404_1351.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/04",
        place:"広島県廿日市市 厳島神社",
        categories:[
            { category: "Landscape", subcategory: "Sea" },
            { category: "Architecture", subcategory: "Historical Buildings" }]
    },
    {
        id:14,
        src:"/images/fullsize/2024_0404_1438.jpg",
        thumb:"/images/thumbnail/2024_0404_1438.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/04",
        place:"広島県廿日市市 宮島",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Flowers", subcategory: "Cherry Blossom" }
        ]
    },
    {
        id:15,
        src:"/images/fullsize/2024_0405_1316.jpg",
        thumb:"/images/thumbnail/2024_0405_1316.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Historical Buildings" },
            { category: "Architecture", subcategory: "Bridges" }
        ]
    },
    {
        id:16,
        src:"/images/fullsize/2024_0405_1339.jpg",
        thumb:"/images/thumbnail/2024_0405_1339.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Bridges" },
            { category: "Architecture", subcategory: "Historical Buildings" },
            { category: "Flowers", subcategory: "Cherry Blossom" }
        ]
    },
    {
        id:17,
        src:"/images/fullsize/2024_0405_1449.jpg",
        thumb:"/images/thumbnail/2024_0405_1449.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Architecture", subcategory: "Bridges" },
            { category: "Architecture", subcategory: "Historical Buildings" },
            { category: "Flowers", subcategory: "Cherry Blossom" }
        ]
    },
    {
        id:18,
        src:"/images/fullsize/2024_0919_1736.jpg",
        thumb:"/images/thumbnail/2024_0919_1736.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 átoa",
        categories:[
            { category: "Animals", subcategory: "Fish" },
            { category: "Animals", subcategory: "Marine Life" },
            { category: "Attractions", subcategory: "Aquariums" }
        ]
    },
    {
        id:19,
        src:"/images/fullsize/2024_0919_1809.jpg",
        thumb:"/images/thumbnail/2024_0919_1809.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 神戸ポートミュージアム",
        categories:[
            { category: "Landscape", subcategory: "Sunset" }
        ]
    },
    {
        id:20,
        src:"/images/fullsize/2024_0919_1902.jpg",
        thumb:"/images/thumbnail/2024_0919_1902.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 神戸ポートタワー",
        categories:[
            { category: "Architecture", subcategory: "Modern Architecture" },
            { category: "Landscape", subcategory: "Night View" }
        ]
    },
    {
        id:21,
        src:"/images/fullsize/2024_0920_1107.jpg",
        thumb:"/images/thumbnail/2024_0920_1107.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/20",
        place:"兵庫県神戸市 スターバックスコーヒー 神戸北野異人館店",
        categories:[
            { category: "Architecture", subcategory: "Historical Buildings" }
        ]
    },
    {
        id:22,
        src:"/images/fullsize/2024_0920_1220.jpg",
        thumb:"/images/thumbnail/2024_0920_1220.jpg",
        camera:null,
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:[
            { category: "Interiors", subcategory: "Decor" }
        ]
    },
    {
        id:23,
        src:"/images/fullsize/2024_0920_1300.jpg",
        thumb:"/images/thumbnail/2024_0920_1300.jpg",
        camera:null,
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:[
            { category: "Interiors", subcategory: "Decor" }
        ]
    },
    {
        id:24,
        src:"/images/fullsize/2024_0920_1405.jpg",
        thumb:"/images/thumbnail/2024_0920_1405.jpg",
        camera:null,
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:[
            { category: "Interiors", subcategory: "Architectural Details" }
        ]
    },
    {
        id:25,
        src:"/images/fullsize/2025_0331_1330.JPG",
        thumb:"/images/thumbnail/2025_0331_1330.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/03/31",
        place:"長崎県佐世保市 ハウステンボス",
        categories:[
            { category: "Landscape", subcategory: "Flower Fields" },
            { category: "Flowers", subcategory: "Tulip" }
        ]
    },
    {
        id:26,
        src:"/images/fullsize/2025_0331_1348.JPG",
        thumb:"/images/thumbnail/2025_0331_1348.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/03/31",
        place:"長崎県佐世保市 ハウステンボス",
        categories:[
            { category: "Events", subcategory: "Installations" }
        ]
    },
    {
        id:27,
        src:"/images/fullsize/2025_0408_1056.JPG",
        thumb:"/images/thumbnail/2025_0408_1056.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2025/04/08",
        place:"広島県広島市 広島市立大学",
        categories:[
            { category: "Landscape", subcategory: null },
            { category: "Flowers", subcategory: "Cherry Blossom" }
        ]
    },
    {
        id:28,
        src:"/images/fullsize/2025_0408_1714.JPG",
        thumb:"/images/thumbnail/2025_0408_1714.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/04/08",
        place:"広島県廿日市市 宮島",
        categories:[
            { category: "Landscape", subcategory: "Street Scenes" },
            { category: "Flowers", subcategory: "Cherry Blossom" }
        ]
    },
    {
        id:29,
        src:"/images/fullsize/2025_0408_1901.JPG",
        thumb:"/images/thumbnail/2025_0408_1901.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/04/08",
        place:"広島県廿日市市 宮島",
        categories:[
            { category: "Landscape", subcategory: "Sea" },
            { category: "Landscape", subcategory: "Sunset" },
            { category: "Architecture", subcategory: "Historical Buildings" }
        ]
    },
    {
        id:30,
        src:"/images/fullsize/2025_0507_1204.JPG",
        thumb:"/images/thumbnail/2025_0507_1204.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/05/07",
        place:"広島県広島市 広島市植物公園",
        categories:[
            { category: "Animals", subcategory: "Fish" }
        ]
    },
    {
        id:31,
        src:"/images/fullsize/2025_0507_1232.JPG",
        thumb:"/images/thumbnail/2025_0507_1232.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/05/07",
        place:"広島県広島市 広島市植物公園",
        categories:[
            { category: "Landscape", subcategory: "Flower Fields" },
            { category: "Flowers", subcategory: "Nemophila" }
        ]
    }
];

export default photos;