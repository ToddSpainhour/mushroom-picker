const mushrooms = [
  {
    id: 'mushroom1',
    name: 'Bisporus',
    description: 'Huge',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT5XBkobtsUe5azJLBxxIsZQj_ihCGccSPjhP0WSaApyGqGUOcP&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: true,
  },
  {
    id: 'mushroom2',
    name: 'Cystidia',
    description: 'Immense',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRykzMpua2iU0AiVv2ADiy3bvpmJhLUCKQv5tNH20DycRn_vGlY&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom3',
    name: 'Gleba',
    description: 'Miniature',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYUJWA73StlHlAIp1qZIK8fdH3d8_kzWPhPwHh29Kp9KQEtjYx&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom4',
    name: 'Omphalotus',
    description: 'Flabby',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Hypomyces_lactifluorum_169126.jpg/330px-Hypomyces_lactifluorum_169126.jpg',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom5',
    name: 'Pleurotus',
    description: 'Big',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Amanita_stirps_Hemibapha_45069.jpg/330px-Amanita_stirps_Hemibapha_45069.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom6',
    name: 'Hyphae',
    description: 'Short',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Lactarius_indigo_48568.jpg/330px-Lactarius_indigo_48568.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom7',
    name: 'Mycelium',
    description: 'Plain',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Yellowmushrooms.jpg/330px-Yellowmushrooms.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom8',
    name: 'Primordium',
    description: 'Drab',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/ChampignonMushroom.jpg/330px-ChampignonMushroom.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom9',
    name: 'Psilocybe',
    description: 'Plump',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Psilocybe.zapotecorum.1.jpg/330px-Psilocybe.zapotecorum.1.jpg',
    isMagic: true,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom10',
    name: 'Russula',
    description: 'Dazzling',
    // eslint-disable-next-line max-len
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/2014-02-26_Ganoderma_lingzhi_Sheng_H._Wu%2C_Y._Cao_%26_Y.C._Dai_574882.jpg/330px-2014-02-26_Ganoderma_lingzhi_Sheng_H._Wu%2C_Y._Cao_%26_Y.C._Dai_574882.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom11',
    name: 'Lactarius',
    description: 'Scruffy',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Amanita_phalloides_young.jpg/330px-Amanita_phalloides_young.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom12',
    name: 'Cubensis',
    description: 'Clean',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Fomes_fomentarius.jpg/330px-Fomes_fomentarius.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom13',
    name: 'Psilocybin',
    description: 'Skinny',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRclj1rZ_yyHrSPiW8MOHi-2hUB5tBNX7ep1CX4JIolQ6yjk5ZF&usqp=CAU',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom14',
    name: 'Rickenella',
    description: 'Chubby',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhaArWuGqbWsTRIgq5eoq-QzvNGH20tXlVAjN-bQX2nvk_m_t1&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom15',
    name: 'Neolentinus',
    description: 'Stocky',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Amanita_muscaria_%28fly_agaric%29.JPG/330px-Amanita_muscaria_%28fly_agaric%29.JPG',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom16',
    name: 'Panus',
    description: 'Beautiful',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIERxxjKeWlSKM0Hs16EHobf0GG3a4CvXf4jcZay4hsyc9IfxH&usqp=CAU',
    isMagic: false,
    isPoisonous: true,
    isDeadly: false,
  },
  {
    id: 'mushroom17',
    name: 'Lentinellus',
    description: 'Unkempt',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-ZGGPwJEmCJTe0Gu43YpSF6Dtq7vG3sDV0MoXehTlRkWxW_un&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom18',
    name: 'Gomphus',
    description: 'Bald',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRxF1yOuwvmzNKKFNGosG2woKw38_Usu9KieandkCx1t7O7UEMg&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom19',
    name: 'Chanterelles',
    description: 'Unsightly',
    imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Zwerg_Postkarte_001.jpg/330px-Zwerg_Postkarte_001.jpg',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
  {
    id: 'mushroom20',
    name: 'Agaricales',
    description: 'Attractive',
    imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQq1gqMmyUFSrum7Mzz-67T36D7j9MYsNIoQHTAf3eRtt9STIGm&usqp=CAU',
    isMagic: false,
    isPoisonous: false,
    isDeadly: false,
  },
];

const basket = [];


const getBasket = () => basket;


const getMushrooms = () => mushrooms;


const youPickedAMagicMushroom = () => {
  alert('You just picked a magic mushroom and won the game! One of each regular type mushroom has been added to your basket. Want to press your luck and keep going?.');
  getMushrooms().forEach((mushroom) => {
    if (mushroom.isDeadly === false && mushroom.isPoisonous === false && mushroom.isMagic === false) {
      basket.push(mushroom);
    }
  });
};


const pickAMushroom = () => {
  const randomMushroom = mushrooms[Math.floor(Math.random() * mushrooms.length)];
  if (randomMushroom.isPoisonous === true) {
    alert('That was a poisonous mushroom. Two mushrooms have been removed from your basket.');
    basket.splice(0, 2);
  } else if (randomMushroom.isDeadly === true) {
    alert('Game over. You just picked a deadly mushroom. All other mushrooms have been removed from your basket. Want to try again?');
    basket.splice(0, basket.length);
  } else if (randomMushroom.isMagic === true) {
    youPickedAMagicMushroom();
  } else {
    alert('You just picked a regular mushroom.');
    basket.push(randomMushroom);
  }
};


export default {
  getMushrooms,
  getBasket,
  pickAMushroom,
};
