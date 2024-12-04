const Products = [
  {
    id: 1,
    name: "Чикен Сладкий Чили",
    description:
      "Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соус, Соус...",
    price: 499,
    category: "pizza",
  },
  {
    id: 2,
    name: "EASY PEASY огуречный расколбас",
    description: "Огурцы маринованные, Пепперони...",
    price: 549,
    category: "pizza",
  },
  {
    id: 3,
    name: "EASY PEASY чикен а-ля хрен",
    description:
      "Курица, Лук, Соус Карбонара, Сыр Моцарелла, Чипсы EASY PEASY...",
    price: 249,
    category: "pizza",
  },
  {
    id: 4,
    name: "4 сезона",
    description:
      "Бекон, Ветчина, Грибы, Курица, Лук, Маслины, Огурцы маринов...",
    price: 630,
    category: "pizza",
  },
  {
    id: 5,
    name: "Сырная с ветчиной",
    description: "Ветчина, Сыр Моцарелла, Томатный соус",
    price: 399,
    category: "pizza",
  },
  {
    id: 6,
    name: "Пепперони по-деревенски",
    description: "Огурцы маринованные, Пепперони, Сыр Моцарелла, Томатный соус",
    price: 499,
    category: "pizza",
  },
  {
    id: 7,
    name: "Филадельфия кранч",
    description:
      "Семга, рис, сыр креметто, соус унаги, креветка, авокадо, чипсы...",
    price: 475,
    category: "sushi",
  },
  {
    id: 8,
    name: "Филадельфия крем-брюле",
    description:
      "Сливочный сыр, семга татак с тростниковым сахаром, соус унаги",
    price: 395,
    category: "sushi",
  },
  {
    id: 9,
    name: "Супер Филадельфия",
    description: "Действительно много семги, сливочный сыр, огурец, рис, нори",
    price: 425,
    category: "sushi",
  },
  {
    id: 10,
    name: "Тигр мама",
    description: "Тигровая креветка, огурец, авокадо, соус Айоли, рис, икра...",
    price: 525,
    category: "sushi",
  },
  {
    id: 11,
    name: "Дракон",
    description: "Угорь, рис, огурец, сыр креметто, кунжут, соус унаги",
    price: 465,
    category: "sushi",
  },
  {
    id: 12,
    name: "Филадельфия с лососем",
    description:
      "Семга, королевский авокадо, сыр, обжаренный кунжут и всего 8...",
    price: 485,
    category: "sushi",
  },
  {
    id: 13,
    name: "Картофель из печи",
    description: "Ароматный запеченный картофель с итальянскими травами.",
    price: 199,
    category: "zakuski",
  },
  {
    id: 14,
    name: "Куриные крылья",
    description: "Куриные крылышки со специями и ароматом копчения.",
    price: 499,
    category: "zakuski",
  },
  {
    id: 15,
    name: "Куриные кусочки",
    description: "Сочные куриное филе в хрустящей панировке.",
    price: 499,
    category: "zakuski",
  },
  {
    id: 16,
    name: "Додстер",
    description:
      "Легендарная горячая закуска с цыпленком, томатами, моцареллой.",
    price: 199,
    category: "zakuski",
  },
  {
    id: 17,
    name: "Салат Цезарь",
    description:
      "Сочный цыпленок, хрустящие листья салата айсберг, томаты черри.",
    price: 249,
    category: "zakuski",
  },
  {
    id: 18,
    name: "Картофельные оладьи, 8 шт",
    description:
      "Хрустящие снаружи и нежные внутри оладьи из картофеля в панировке.",
    price: 199,
    category: "zakuski",
  },
  {
    id: 19,
    name: "Узелки сладкие",
    description: "Мягкие булочки с корицей и сахарной пудрой.",
    price: 149,
    category: "deserty",
  },
  {
    id: 20,
    name: "Рогалики с клубникой",
    description:
      "Сладкие рогалики с клубникой, сыром 'кремчиз' и сахарной пудрой.",
    price: 199,
    category: "deserty",
  },
  {
    id: 21,
    name: "Сырники",
    description: "Нежные сырники из печи с соусом на выбор.",
    price: 159,
    category: "deserty",
  },
  {
    id: 22,
    name: "Макнаг Шоколадный трюфель",
    description: "Шоколадное мороженое с кусочками.",
    price: 139,
    category: "deserty",
  },
  {
    id: 23,
    name: "Макнаг Манго и красные ягоды",
    description:
      "Мороженое экзотично сливочное с кусочками манго и красных ягод.",
    price: 139,
    category: "deserty",
  },
  {
    id: 24,
    name: "Макнаг Мини",
    description:
      "Набор из 2 видов мороженого: Макнаг Шоколадный трюфель и Макнаг Манго и красные ягоды.",
    price: 499,
    category: "deserty",
  },
  {
    id: 25,
    name: "Adrenaline Gamefuel",
    description: "",
    price: 199,
    category: "drinks",
  },
  { id: 26, name: "Pepsi MAX", description: "", price: 99, category: "drinks" },
  { id: 27, name: "Pepsi", description: "", price: 99, category: "drinks" },
  {
    id: 28,
    name: "Pepsi Дикая вишня",
    description: "",
    price: 99,
    category: "drinks",
  },
  {
    id: 29,
    name: "Pepsi Light",
    description: "",
    price: 99,
    category: "drinks",
  },
  { id: 30, name: "Mirinda", description: "", price: 99, category: "drinks" },
];
