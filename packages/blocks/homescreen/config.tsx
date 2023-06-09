export const entries = [
  {
    illustration: require('./assets/Carosal1.png'),
  },
  {
    illustration: require('./assets/carosal3.png'),
  },
  {
    illustration: require('./assets/carosal3.png'),
  },
  {
    illustration: require('./assets/carosal3.png'),
  },
];

const flatlistData: {
  id: string;
  type: string;
  title: string;
  quantity: number;
  actualPrice: string;
  offPrice: string;
  img: string;
}[] = [
  {
    id: '1',
    type: 'egg',
    title: 'Country Eggs Pack',
    quantity: 0,
    actualPrice: '₹200.00',
    offPrice: '173.00',
    img: 'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '2',
    type: 'chicken-tandoori',
    title: 'Tandoori Chicken',
    quantity: 0,
    actualPrice: '₹198.00',
    offPrice: '149.00',
    img: 'https://images.unsplash.com/photo-1618312368656-33f718157750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1419&q=80',
  },
  {
    id: '3',
    type: 'egg',
    title: 'Natural Eggs Pack',
    quantity: 0,
    actualPrice: '₹120.00',
    offPrice: '103.00',
    img: 'https://images.unsplash.com/photo-1627737662882-da8a46ac582e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '4',
    type: 'fish',
    title: 'Indian Mackeral',
    quantity: 0,
    actualPrice: '₹226.00',
    offPrice: '181.00',
    img: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
  {
    id: '5',
    type: 'chicken',
    title: 'Chicken Drumsticks',
    quantity: 0,
    actualPrice: '₹122.00',
    offPrice: '112.00',
    img: 'https://images.unsplash.com/photo-1609016580259-e04ddc09a850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  },
];

const flatListData2 = [
  {
    id: '1',
    type: 'mutton',
    quantity: 0,
    title: 'Mutton Biryani',
    actualPrice: '₹122.00',
    offPrice: '112.00',
    img: 'https://i.postimg.cc/vT8DKTg7/mutton-transformed.jpg',
  },
  {
    id: '2',
    type: 'prawn',
    quantity: 0,
    title: 'Prawn Thokku',
    actualPrice: '₹150.00',
    offPrice: '180.00',
    img: 'https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1045&q=80',
  },
];

const individualItemdata = [
  {
    id: 1,
    type: 'Chicken',
    data: [
      {
        id: 1,
        title: 'Chicken Breast Boneless Skinless',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Chicken Curry Cut - Skinless',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Chicken Boneless - Cube Cut',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Chicken Curry Cut - Skin On',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Chicken Biryani Cut - Skinless',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Chicken Drumstick Skinless',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹173.00',
        offPrice: '200.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 2,
    type: 'Lamb & Goat',
    data: [
      {
        id: 1,
        title: 'Mutton Breast Boneless Skinless',
        img: 'https://foodsguy.com/wp-content/uploads/2021/02/Goat-Vs-Lamb-Meat.jpg',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Mutton Curry Cut - Skinless',
        img: 'https://images.squarespace-cdn.com/content/v1/5cfec706a454e40001865d55/1582656317096-SCYKEL08F34CMTOGHXX3/Is+Lamb+Gamey?format=1000w',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Mutton Boneless - Cube Cut',
        img: 'https://www.shutterstock.com/image-photo/raw-fresh-lamb-ribs-on-260nw-219108874.jpg',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Mutton Curry Cut - Skin On',
        img: 'https://www.ulocal.co/app/uploads/2020/01/agneaux-de-laval-b.jpg',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Mutton Biryani Cut - Skinless',
        img: 'https://lh5.googleusercontent.com/UddO5e652LOTPx3P3C-51zdQ8mmYAOUsySgUo7B2CWMgml3XP-q_RaiYO-473-Ht3TGOjjc4YIv_95IVcY5PgZ3B6NPhL2b_6S0VLJgeABIoY4XFJeFLTdvQq8NV7ICXemmaOV0rhC4-VKxupA',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Mutton Drumstick Skinless',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIVEOrRRK3ZZOKttX9BAuV0Dgi0mmylWgkGw&usqp=CAU',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 3,
    type: 'Sea Food',
    data: [
      {
        id: 1,
        title: 'Fish Breast Boneless Skinless',
        img: 'https://www.licious.in/blog/wp-content/uploads/2022/02/shutterstock_1773695441-min.jpg',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Fish Curry Cut - Skinless',
        img: 'https://media-cdn.tripadvisor.com/media/photo-s/15/9e/05/d1/grilled-prawn.jpg',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Fish Boneless - Cube Cut',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSU2aUAoOUx8DsU0vvA-W0kDaLqpgq3XQE7Lw&usqp=CAU',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Fish Curry Cut - Skin On',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOkoEjnMMiZWL1MVUAPuzU_pgbPbRJjor0JQ&usqp=CAU',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Fish Biryani Cut - Skinless',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnsekZhjMoTWYcjIaiTKEslwTE821nC80bmgA9shYlZIwlGjlNiyX5eesDHnzXw-NLM_8&usqp=CAU',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Fish Drumstick Skinless',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPfv_m-Oru7x29ZQ4lJ9UGKzmsJ4nI96JNVw&usqp=CAU',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 4,
    type: 'Marinades',
    data: [
      {
        id: 1,
        title: 'Marinades Breast Boneless Skinless',
        img: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Chicken_marination.jpg',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Marinades Curry Cut - Skinless',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs5t_V0V2T_ihb7TIApIR1Wx3WBenky5YghKkaD9vS1cMx0nHEjmtmzJcdIt0H5LKmHuc&usqp=CAU',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Marinades Boneless - Cube Cut',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReUPJ2NI09YsQ3fGjewbl7FgrAdw5ZdazQZJeaKqBNGT4Oew8Nm3NCoyAK_TdqAQlHupo&usqp=CAU',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Marinades Curry Cut - Skin On',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVlzHgh1fBcUDy4pr-6fYM8_KPFArpFc1Mo2mxh8kpFrtV5B0hZFmFSFJVE2ccyF4M-Y&usqp=CAU',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Marinades Biryani Cut - Skinless',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi2P8vOuepJsnJt_H1lvOTuqxN6YWc-XZmbATFSo6I16T0f3JfTT4E2YGJclYXEcxw9Pc&usqp=CAU',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Marinades Drumstick Skinless',
        img: 'https://www.allthingsmamma.com/wp-content/uploads/2020/06/grilled-bbq-chicken-7-500x500.jpg',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 5,
    type: 'Cold Cuts',
    data: [
      {
        id: 1,
        title: 'Cold Cuts Breast Boneless Skinless',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Cold Cuts Curry Cut - Skinless',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Cold Cuts Boneless - Cube Cut',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Cold Cuts Curry Cut - Skin On',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Cold Cuts Biryani Cut - Skinless',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Cold Cuts Drumstick Skinless',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 6,
    type: 'Ready to Fry',
    data: [
      {
        id: 1,
        title: 'Chicken Breast Boneless Skinless',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Chicken Curry Cut - Skinless',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'Chicken Boneless - Cube Cut',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Chicken Curry Cut - Skin On',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'Chicken Biryani Cut - Skinless',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Chicken Drumstick Skinless',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 7,
    type: 'Relishes',
    data: [
      {
        id: 1,
        title: 'fish boneless relish',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Chicken Curry relish',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'fish Boned - Cube Cut relish',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Chicken Curry relish',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'fish fry relish',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Chicken Drumstick relish',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 8,
    type: 'Eggs',
    data: [
      {
        id: 1,
        title: 'Country Eggs Pack',
        quantity: 0,
        actualPrice: '200.00',
        offPrice: '173.00',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
      },
      {
        id: 2,
        title: 'Natural Eggs Pack',
        quantity: 0,
        actualPrice: '120.00',
        offPrice: '103.00',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
      },
    ],
  },
  {
    id: 9,
    type: 'Combos',
    data: [
      {
        id: 1,
        title: 'fish boneless & chicken Biryani',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'Chicken fry piece & Prawn Curry',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'fish Boned curry & Chicken Dum biryani',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'Chicken drumstick & fish Fry biryani',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'fish fry relish & Mutton Dum biryani',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'Chicken fry & Prawn Pot Biryani',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 10,
    type: 'BBQ Corner',
    data: [
      {
        id: 1,
        title: 'chicken 65',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'chicken Starter pack',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'fruit starter',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'mushroom starter',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'watermelon starter',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'apola fish starter',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 11,
    type: 'Imported',
    data: [
      {
        id: 1,
        title: 'foreign imported chicken',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'imported beef',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 12,
    type: 'Dry Fish',
    data: [
      {
        id: 1,
        title: 'dry fish fry',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'dry fish curry',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'apola dry fish fry',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'dry star fish curry',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 13,
    type: 'Grill House',
    data: [
      {
        id: 1,
        title: 'chicken grill',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'mutton grill',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 3,
        title: 'fish grill',
        img: 'https://i.postimg.cc/4488W775/chickenthreee.png',
        actualPrice: '₹177.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 4,
        title: 'star fish grill',
        img: 'https://i.postimg.cc/pdDGCszh/chickenfourr.png',
        actualPrice: '₹184.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 5,
        title: 'octopus grill',
        img: 'https://i.postimg.cc/gc471t53/chicken5.png',
        actualPrice: '₹197.00',
        offPrice: '200.00',
        quantity: 0,
      },
      {
        id: 6,
        title: 'rabit grill',
        img: 'https://i.postimg.cc/WzfXzCLK/chickensix.png',
        actualPrice: '₹274.00',
        offPrice: '300.00',
        quantity: 0,
      },
    ],
  },
  {
    id: 14,
    type: 'Vegan',
    data: [
      {
        id: 1,
        title: 'fresh Burger',
        img: 'https://i.postimg.cc/W3T9H0w9/chickenone.png',
        actualPrice: '₹177.00',
        offPrice: '198.00',
        quantity: 0,
      },
      {
        id: 2,
        title: 'yummy donut',
        img: 'https://i.postimg.cc/SN3gpBGY/chickentwo.png',
        actualPrice: '₹176.00',
        offPrice: '200.00',
        quantity: 0,
      },
    ],
  },
];

export {individualItemdata, flatListData2, flatlistData};
