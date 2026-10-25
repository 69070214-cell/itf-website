"use strict";

/**
 * ข้อมูลเมนูอาหารทั้งหมด
 * เพิ่ม/แก้ไขเมนูได้จากอาร์เรย์นี้ และเปลี่ยนรูปได้ที่โฟลเดอร์ assets/images
 */
const FOODS = [
  {
    name: "ผัดไทยกุ้งสด",
    category: "อาหารไทย",
    description:
      "เส้นผัดไทยเหนียวนุ่มคลุกซอสมะขามเปรี้ยวหวาน หอมกลิ่นกระเทียมเจียว พร้อมกุ้งสดตัวโต ถั่วงอกกรุบกรอบ และใบกุยช่ายสด",
    price: 89,
    time: "20 นาที",
    serving: "จานหลัก",
    image: "assets/images/pad-thai.jpg",
    alt: "ผัดไทยกุ้งสด เส้นผัดไทยกับกุ้งสดและถั่วงอก",
  },
  {
    name: "ราเมนกุ้งน้ำใส",
    category: "อาหารญี่ปุ่น",
    description:
      "ราเมนเส้นนุ่มในน้ำซุปโชยุใสรสกลมกล่อม เสิร์ฟพร้อมกุ้งสด ไข่ต้มยางมะตูม และถั่วลันเตากรุบกรอบ",
    price: 159,
    time: "18 นาที",
    serving: "จานหลัก",
    image: "assets/images/ramen.jpg",
    alt: "ราเมนกุ้งน้ำใส พร้อมไข่ต้มและถั่วลันเตา",
  },
  {
    name: "พิซซ่าไก่บาร์บีคิว",
    category: "อาหารอิตาลี",
    description:
      "พิซซ่าแป้งบางกรอบ โปะด้วยไก่ฉีกชิ้นโต ซอสบาร์บีคิว หอมแดง และชีสมอสซาเรลล่าที่ละลายเยิ้ม",
    price: 249,
    time: "25 นาที",
    serving: "จานหลัก",
    image: "assets/images/pizza.jpg",
    alt: "พิซซ่าไก่บาร์บีคิวหน้าไก่ฉีกและชีส",
  },
  {
    name: "ชีสเบอร์เกอร์ดับเบิล",
    category: "อาหารอเมริกัน",
    description:
      "เบอร์เกอร์เนื้อสองชั้นย่างฉ่ำ สอดไส้ชีสเชดดาร์ ผักกาดหอม มะเขือเทศ และซอสสูตรพิเศษ ในขนมปังเนยนุ่ม",
    price: 219,
    time: "15 นาที",
    serving: "จานหลัก",
    image: "assets/images/burger.jpg",
    alt: "ชีสเบอร์เกอร์เนื้อดับเบิลพร้อมผักและชีสเยิ้ม",
  },
  {
    name: "สลัดเต้าหู้ย่าง",
    category: "Healthy bowl",
    description:
      "สลัดผักสดหลากสี เสริมโปรตีนด้วยเต้าหู้ย่างหอมกรุ่น ไข่ต้ม ถั่วแระญี่ปุ่น ข้าวโพดหวาน และน้ำสลัดงาใส",
    price: 129,
    time: "12 นาที",
    serving: "จานหลัก",
    image: "assets/images/salad.jpg",
    alt: "สลัดโบลผักสด เต้าหู้ย่าง ไข่ต้ม และข้าวโพด",
  },
  {
    name: "พาสต้าเนื้อซอสครีม",
    category: "อาหารอิตาลี",
    description:
      "เฟตตูชินีเส้นสดคลุกซอสครีมเข้มข้น หอมกลิ่นชีสพาร์เมซาน กับเนื้อวัวชิ้นพอดีคำและมะเขือเทศอบ",
    price: 189,
    time: "22 นาที",
    serving: "จานหลัก",
    image: "assets/images/pasta.jpg",
    alt: "พาสต้าเส้นเฟตตูชินีกับเนื้อวัวและซอสครีม",
  },
  {
    name: "แพนเค้กกล้วยน้ำผึ้ง",
    category: "ของหวาน",
    description:
      "แพนเค้กฟูหนานุ่มเรียงซ้อนกัน เสิร์ฟพร้อมกล้วยหอม อัลมอนด์สไลด์ และน้ำผึ้งหวานหอมราดเยิ้ม",
    price: 149,
    time: "15 นาที",
    serving: "ของหวาน",
    image: "assets/images/pancake.jpg",
    alt: "แพนเค้กซ้อนชั้น ราดน้ำผึ้ง พร้อมกล้วยหอมและอัลมอนด์",
  },
  {
    name: "แกงกะหรี่ไก่",
    category: "อาหารอินเดีย",
    description:
      "แกงกะหรี่ไก่สไตล์อินเดีย รสเข้มข้นมันหอม หอมเครื่องเทศและกะทิ เสิร์ฟร้อน ๆ พร้อมข้าวสวยหรือนาน",
    price: 139,
    time: "20 นาที",
    serving: "จานหลัก",
    image: "assets/images/curry.jpg",
    alt: "แกงกะหรี่ไก่สีส้มเข้มข้นในกระทะ",
  },
];

const elements = {
  card: document.querySelector("#foodCard"),
  image: document.querySelector("#foodImage"),
  category: document.querySelector("#foodCategory"),
  number: document.querySelector("#foodNumber"),
  typeCaption: document.querySelector("#foodTypeCaption"),
  name: document.querySelector("#foodName"),
  description: document.querySelector("#foodDescription"),
  time: document.querySelector("#foodTime"),
  serving: document.querySelector("#foodServing"),
  price: document.querySelector("#foodPrice"),
  priceWrap: document.querySelector(".price"),
  button: document.querySelector("#randomButton"),
  buttonLabel: document.querySelector("#buttonLabel"),
  status: document.querySelector("#resultStatus"),
  menuGrid: document.querySelector("#menuGrid"),
};

const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const currencyFormatter = new Intl.NumberFormat("th-TH");

let currentIndex = 0;
let isShuffling = false;
let hasRandomized = false;

function padNumber(value) {
  return String(value).padStart(2, "0");
}

function applyFood(index) {
  const food = FOODS[index];

  currentIndex = index;

  elements.image.src = food.image;
  elements.image.alt = food.alt;
  elements.category.textContent = food.category;
  elements.number.innerHTML = `${padNumber(index + 1)} <i>/ ${padNumber(FOODS.length)}</i>`;
  elements.typeCaption.textContent = food.serving;
  elements.name.textContent = food.name;
  elements.description.textContent = food.description;
  elements.time.textContent = food.time;
  elements.serving.textContent = food.serving;
  elements.price.textContent = currencyFormatter.format(food.price);
  elements.priceWrap.setAttribute("aria-label", `ราคา ${food.price} บาท`);
  elements.button.setAttribute("aria-label", `สุ่มเมนูอาหารใหม่ จากเมนูปัจจุบัน ${food.name}`);

  document.querySelectorAll(".menu-item").forEach((item, itemIndex) => {
    item.classList.toggle("is-current", itemIndex === index);
  });

  return { food };
}

function chooseNextIndex() {
  if (FOODS.length < 2) {
    return 0;
  }

  let nextIndex = currentIndex;
  while (nextIndex === currentIndex) {
    nextIndex = Math.floor(Math.random() * FOODS.length);
  }
  return nextIndex;
}

function randomizeFood() {
  if (isShuffling) {
    return;
  }

  isShuffling = true;
  elements.button.disabled = true;
  elements.button.classList.add("is-rolling");
  elements.card.classList.add("is-switching");
  elements.card.setAttribute("aria-busy", "true");

  const nextIndex = chooseNextIndex();
  const switchDelay = reducedMotionQuery.matches ? 0 : 190;
  const revealDelay = reducedMotionQuery.matches ? 20 : 320;

  window.setTimeout(() => {
    const { food } = applyFood(nextIndex);

    elements.card.classList.remove("is-switching");
    elements.status.textContent = `สุ่มได้เมนู ${food.name} ราคา ${food.price} บาท`;
    elements.buttonLabel.textContent = "สุ่มเมนูอีกครั้ง";
    hasRandomized = true;

    window.setTimeout(() => {
      elements.button.disabled = false;
      elements.button.classList.remove("is-rolling");
      elements.card.removeAttribute("aria-busy");
      isShuffling = false;
    }, revealDelay);
  }, switchDelay);
}

function buildMenuGrid() {
  const fragment = document.createDocumentFragment();

  FOODS.forEach((food, index) => {
    const item = document.createElement("li");
    item.className = "menu-item";

    const imageContainer = document.createElement("div");
    imageContainer.className = "menu-item-image";

    const image = document.createElement("img");
    image.src = food.image;
    image.alt = food.alt;
    image.loading = "eager";
    image.decoding = "async";
    image.width = 1200;
    image.height = 800;

    const number = document.createElement("span");
    number.className = "menu-item-index";
    number.textContent = padNumber(index + 1);
    number.setAttribute("aria-hidden", "true");

    imageContainer.append(image, number);

    const body = document.createElement("div");
    body.className = "menu-item-body";

    const text = document.createElement("div");
    text.className = "menu-item-text";

    const category = document.createElement("span");
    category.className = "menu-item-category";
    category.textContent = food.category;

    const name = document.createElement("h3");
    name.textContent = food.name;
    name.title = food.name;

    text.append(category, name);

    const price = document.createElement("span");
    price.className = "menu-item-price";
    price.innerHTML = `<span>฿</span>${currencyFormatter.format(food.price)}`;

    body.append(text, price);
    item.append(imageContainer, body);
    fragment.append(item);
  });

  elements.menuGrid.append(fragment);
}

function preloadFoodImages() {
  FOODS.forEach((food) => {
    const image = new Image();
    image.src = food.image;
  });
}

function scheduleImagePreload() {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preloadFoodImages, { timeout: 2000 });
  } else {
    window.setTimeout(preloadFoodImages, 800);
  }
}

elements.button.addEventListener("click", randomizeFood);

document.addEventListener("keydown", (event) => {
  if (event.code !== "Space" || event.repeat) {
    return;
  }

  const target = event.target;
  if (target instanceof Element && target.closest("button, a, input, textarea, select")) {
    return;
  }

  event.preventDefault();
  randomizeFood();
});

// เตรียมข้อมูลการ์ดเริ่มต้นและรายการเมนูทั้งหมด
buildMenuGrid();
applyFood(currentIndex);
scheduleImagePreload();

// ใช้เพื่อให้ปุ่มบอกสถานะได้ถูกต้องเมื่อผู้ใช้กลับมายังแท็บเดิม
window.addEventListener("pageshow", () => {
  if (hasRandomized) {
    elements.buttonLabel.textContent = "สุ่มเมนูอีกครั้ง";
  }
});
