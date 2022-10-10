let arr = [
    {
      producer: "Lilies",
      model: 'white and blue',
      size: 45,
      description: 'The perfect gift for that special someone.',
      imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/1084/2895/BQ1-web-size-tiger__69390.1643012502.jpg?c=2"
    },
    {
      producer: "Roses",
      model: 'Pink Spray',
      size: 44,
      description: 'The perfect gift for that special someone.',
      imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/879/2182/one_last_kiss__49979.1640010425.jpg?c=2"
    },
    {
      producer: "Hydrangeas",
      model: 'white and blue',
      size: 44,
      description: 'The perfect gift for that special someone.',
      imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/970/3149/top_res__89860.1664372973.jpg?c=2"
    },
    {
        producer: "Lilies",
        model: 'greenery to brighten',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/1087/3165/BQ4-web-size__69964_1__06139.1665132622.png?c=2"
    },
    {
        producer: "Red",
        model: 'roses',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/222/3116/sweet-scent-summer-main__74086.1663615658.jpg?c=2"
    },
    {
        producer: "Chrysanthemum ",
        model: 'mixed color',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/372/2446/sherbet-fizz__16335.1658144871.jpg?c=2"
    },
    {
        producer: "White",
        model: 'roses',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/801/2104/park_avenue_bouquet_-_flower_station__54133.1502877137.jpg?c=2"
    },
    {
        producer: "Sunflowers",
        model: 'yellow',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/944/2377/bouquet_of_the_week__84439.1655453373.jpg?c=2"
    },
    {
        producer: "Hydrangea",
        model: 'Blue',
        size: 44,
        description: 'The perfect gift for that special someone.',
        imgSrc: "https://cdn11.bigcommerce.com/s-tf2vn6/images/stencil/640w/products/966/2844/CUTIEhhhh-2-2020-web_2__58113.1633434942.jpg?c=2"
    },    
  ]




let wrapper = document.querySelector('.wrapper');

function createCard(parent, cardObject) {
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="picture">
      <img src='${cardObject.imgSrc}' alt="picture">
    </div>
    <div class="heading">
      <h3>${cardObject.producer} ${cardObject.model}</h3>
    </div>

    <div class="desc-block">
      ${cardObject.description}
    </div>

    <div class="action-block">
      <div class="cart">
        Add To Cart
      </div>

    </div>
  `;

  parent.append(card)
}

arr.forEach(function(card) {
    createCard(wrapper, card)
});