const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Bisporus',
    description: 'huge',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5XBkobtsUe5azJLBxxIsZQj_ihCGccSPjhP0WSaApyGqGUOcP&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom2',
    name: 'Cystidia',
    description: 'immense',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG/330px-Amanita_muscaria_%28fly_agaric%29.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Gleba',
    description: 'miniature',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Zwerg_Postkarte_001.jpg/330px-Zwerg_Postkarte_001.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Omphalotus',
    description: 'flabby',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Hypomyces_lactifluorum_169126.jpg/330px-Hypomyces_lactifluorum_169126.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Pleurotus',
    description: 'immense',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Amanita_stirps_Hemibapha_45069.jpg/330px-Amanita_stirps_Hemibapha_45069.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Hyphae',
    description: 'short',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lactarius_indigo_48568.jpg/330px-Lactarius_indigo_48568.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Mycelium',
    description: 'plain',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yellowmushrooms.jpg/330px-Yellowmushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Primordium',
    description: 'drab',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ChampignonMushroom.jpg/330px-ChampignonMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Psilocybe',
    description: 'plump',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Psilocybe.zapotecorum.1.jpg/330px-Psilocybe.zapotecorum.1.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Russula',
    description: 'dazzling',
    // eslint-disable-next-line max-len
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2014-02-26_Ganoderma_lingzhi_Sheng_H._Wu%2C_Y._Cao_%26_Y.C._Dai_574882.jpg/330px-2014-02-26_Ganoderma_lingzhi_Sheng_H._Wu%2C_Y._Cao_%26_Y.C._Dai_574882.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Lactarius',
    description: 'scruffy',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Amanita_phalloides_young.jpg/330px-Amanita_phalloides_young.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Cubensis',
    description: 'clean',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fomes_fomentarius.jpg/330px-Fomes_fomentarius.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Psilocybin',
    description: 'skinny',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRclj1rZ_yyHrSPiW8MOHi-2hUB5tBNX7ep1CX4JIolQ6yjk5ZF&usqp=CAU',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Rickenella',
    description: 'chubby',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhaArWuGqbWsTRIgq5eoq-QzvNGH20tXlVAjN-bQX2nvk_m_t1&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Neolentinus',
    description: 'stocky',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRykzMpua2iU0AiVv2ADiy3bvpmJhLUCKQv5tNH20DycRn_vGlY&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Panus',
    description: 'beautiful',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIERxxjKeWlSKM0Hs16EHobf0GG3a4CvXf4jcZay4hsyc9IfxH&usqp=CAU',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Lentinellus',
    description: 'unkempt',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-ZGGPwJEmCJTe0Gu43YpSF6Dtq7vG3sDV0MoXehTlRkWxW_un&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Gomphus',
    description: 'bald',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxF1yOuwvmzNKKFNGosG2woKw38_Usu9KieandkCx1t7O7UEMg&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Chanterelles',
    description: 'unsightly',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUJWA73StlHlAIp1qZIK8fdH3d8_kzWPhPwHh29Kp9KQEtjYx&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Agaricales',
    description: 'attractive',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq1gqMmyUFSrum7Mzz-67T36D7j9MYsNIoQHTAf3eRtt9STIGm&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];

const getBasket = () => basket;

const getMushrooms = () => mushrooms;

const pickAMushroom = () => {
  const randomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  console.error('the randomMushroom you selected is ', randomMushroom);
  if (randomMushroom.isPoisonous === true) {
    console.error('that was a poisonous mushroom. Seek help!');
  } if (randomMushroom.isDeadly === true) {
    console.error('You just ate a deadly mushroom.');
  } if (randomMushroom.isMagic === true) {
    console.error('Buckle up. You just ate a magic mushroom.');
  } else {
    console.error('you just pick a regular old mushroom.');
  }
  basket.push(randomMushroom);
};

export default { getMushrooms, getBasket, pickAMushroom };
