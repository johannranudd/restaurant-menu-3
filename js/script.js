const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "dinner",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 11,
    title: "kebab",
    category: "kebab",
    price: 22.99,
    img: "https://vanilla-js-basic-project-8-menu.netlify.app/images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const menuSection = document.querySelector(".menu-section");
const btnContainer = document.querySelector(".buttons");

window.addEventListener("DOMContentLoaded", createItem(menu));

function createBtn(menu) {
  const menuCategories = menu.reduce(
    function (total, index) {
      if (!total.includes(index.category)) {
        total.push(index.category);
      }
      return total;
    },
    ["all"]
  );
  menuCategories.map(function (item) {
    const btn = document.createElement("button");
    btn.classList.add("btn");
    const attr = document.createAttribute("data-id");
    attr.value = item;
    btn.setAttributeNode(attr);
    btn.textContent = item;
    btnContainer.appendChild(btn);
  });
}

createBtn(menu);

function createItem(menu) {
  menuSection.innerHTML = "";
  menu.map(function (menuItem) {
    const article = document.createElement("article");
    article.classList.add("menu-item");
    article.innerHTML = `
        <img
          src="${menuItem.img}"
          alt="${menuItem.title}"
        />
        <div class="menu-item-text">
          <div class="menu-item-title-and-price">
            <h3 class="title">${menuItem.title}</h3>
            <p class="price">${menuItem.price}</p>
          </div>
          <p class="description">
          ${menuItem.desc}
          </p>
        </div>`;
    menuSection.appendChild(article);
  });
}

function searchFn() {
  btnContainer.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    const filterMenu = menu.filter(function (mapItem) {
      if (mapItem.category === id) {
        return mapItem;
      } else if (id === "all") {
        return mapItem;
      }
    });
    createItem(filterMenu);
  });
}

searchFn();
