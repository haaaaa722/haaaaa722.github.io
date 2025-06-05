const photos = [
    {
        id:1,
        src:"/images/2022_0403_1714.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/04/03",
        place:"広島県尾道市 千光寺公園",
        categories:["Landscape","Flowers"],
        subcategories:["Cherry Blossom"]
    },
    {
        id:2,
        src:"/images/2022_0902_1003.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 京都御所",
        categories:["Landscape","Architecture"],
        subcategories:["Historical Buildings"]
    },
    {
        id:3,
        src:"/images/2022_0902_1312.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 伏見稲荷大社",
        categories:["Landscape","Architecture"],
        subcategories:["Historical Buildings"]
    },
    {
        id:4,
        src:"/images/2022_0902_1541.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/02",
        place:"京都府京都市 清水寺",
        categories:["Landscape","Architecture"],
        subcategories:["Historical Buildings","Shrines&Temples"]
    },
    {
        id:5,
        src:"/images/2022_0903_1312.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/03",
        place:"滋賀県大津市 近江神宮",
        categories:["Landscape","Architecture"],
        subcategories:["Historical Buildings","Shrines&Temples"]
    },
    {
        id:6,
        src:"/images/2022_0903_2227.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/09/03",
        place:"京都府京都市 鴨川",
        categories:["Landscape"],
        subcategories:["Night view","Rivers"]
    },
    {
        id:7,
        src:"/images/2022_1030_2033.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2022/10/30",
        place:"広島県広島市 広島市立大学",
        categories:["Events"],
        subcategories:["Fireworks","Festivals"]
    },
    {
        id:8,
        src:"/images/2023_0101_1025.jpg",
        camera:"Apple iPhone 11",
        lens:"広角カメラ",
        date:"2023/01/01",
        place:"静岡県静岡市 三保松原",
        categories:["Landscape"],
        subcategories:["Mountains"]
    },
    {
        id:9,
        src:"/images/2023_0602_1915.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2023/06/02",
        place:"広島県広島市",
        categories:["Events"],
        subcategories:["Festivals"]
    },
    {
        id:10,
        src:"/images/2023_1125_1417.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"超広角カメラ",
        date:"2023/11/25",
        place:"広島県呉市 魔女のランプ",
        categories:["Interiors"],
        subcategories:["Cafes"]
    },
    {
        id:11,
        src:"/images/2023_1125_1601.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2023/11/25",
        place:"広島県呉市 魔女のランプ",
        categories:["Interiors"],
        subcategories:["Cafes"]
    },
    {
        id:12,
        src:"/images/2024_0214_1351.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/02/14",
        place:"広島県広島市 Cat Café MOFF",
        categories:["Animals"],
        subcategories:["Cats"]
    },
    {
        id:13,
        src:"/images/2024_0404_1351.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/04",
        place:"広島県廿日市市 厳島神社",
        categories:["Landscape","Architecture"],
        subcategories:["Sea","Historical Buildings"]
    },
    {
        id:14,
        src:"/images/2024_0404_1438.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/04",
        place:"広島県廿日市市 宮島",
        categories:["Landscape","Flowers"],
        subcategories:["Cherry Blossom"]
    },
    {
        id:15,
        src:"/images/2024_0405_1316.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:["Landscape","Arichitecture"],
        subcategories:["Historical Building","Bridges"]
    },
    {
        id:16,
        src:"/images/2024_0405_1339.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:["Landscape","Arichitecture","Flower"],
        subcategories:["Historical Building","Bridges","Cherry Blossom"]
    },
    {
        id:17,
        src:"/images/2024_0405_1449.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/04/05",
        place:"山口県岩国市 錦帯橋",
        categories:["Landscape","Arichitecture","Flower"],
        subcategories:["Historical Building","Bridges","Cherry Blossom"]
    },
    {
        id:18,
        src:"/images/2024_0919_1736.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 átoa",
        categories:["Animals","Attractions"],
        subcategories:["Marine Life","Fish","Aquariums"]
    },
    {
        id:19,
        src:"/images/2024_0919_1809.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 神戸ポートミュージアム",
        categories:["Landscape"],
        subcategories:["Sunset"]
    },
    {
        id:20,
        src:"/images/2024_0919_1902.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/09/19",
        place:"兵庫県神戸市 神戸ポートタワー",
        categories:["Architecture","Landscape"],
        subcategories:["Modern Architecture","Night view"]
    },
    {
        id:21,
        src:"/images/2024_0920_1107.jpg",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2024/0920/1107",
        place:"兵庫県神戸市 スターバックスコーヒー 神戸北野異人館店",
        categories:["Architecture"],
        subcategories:["Historical Building"]
    },
    {
        id:22,
        src:"/images/2024_0920_1220.jpg",
        camera:"",
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:["Interiors"],
        subcategories:["Decor"]
    },
    {
        id:23,
        src:"/images/2024_0920_1300.jpg",
        camera:"",
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:["Interiors"],
        subcategories:["Decor"]
    },
    {
        id:24,
        src:"/images/2024_0920_1405.jpg",
        camera:"",
        lens:"Canon EF-S18-55mm F3.5-5.6 IS STM",
        date:"2024/09/20",
        place:"兵庫県神戸市 北野異人館街",
        categories:["interiors"],
        subcategories:["Architectural Details"]
    },
    {
        id:25,
        src:"/images/2025_0331_1330.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/03/31",
        place:"長崎県佐世保市 ハウステンボス",
        categories:["Landscape","Flowers"],
        subcategories:["Flower Fields","Tulip"]
    },
    {
        id:26,
        src:"/images/2025_0331_1348.jpg",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/03/31",
        place:"長崎県佐世保市 ハウステンボス",
        categories:["Events"],
        subcategories:["Installations"]
    },
    {
        id:27,
        src:"/images/2025_0408_1056.JPG",
        camera:"Apple iPhone 14 Pro",
        lens:"メインカメラ",
        date:"2025/04/08",
        place:"広島県広島市 広島市立大学",
        categories:["Landscape","Flowers"],
        subcategories:["Cherry Blossom"]
    },
    {
        id:28,
        src:"/images/2025_0408_1714.JPG",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/04/08",
        place:"広島県廿日市市 宮島",
        categories:["Landscape","Flower"],
        subcategories:["Street Scenes","Cherry Blossom"]
    },
    {
        id:29,
        src:"/images/2025_0408_1901.JPG",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/04/08",
        place:"広島県廿日市市 宮島",
        categories:["Landscape","Architecture"],
        subcategories:["Sunset","Sea","Historical Buildings"]
    },
    {
        id:30,
        src:"/images/2025_0507_1204.JPG",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/05/07",
        place:"広島県広島市 広島市植物公園",
        categories:["Animals"],
        subcategories:["Fish"]
    },
    {
        id:31,
        src:"/images/2025_0507_1232.JPG",
        camera:"Nikon Z50II",
        lens:"NIKKOR Z DX 16-50mm f/3.5-6.3 VR",
        date:"2025/05/07",
        place:"広島県広島市 広島市植物公園",
        categories:["Landscape","Flower"],
        subcategories:["Flower Fields","Nemophila"]
    }
];

export default photos;