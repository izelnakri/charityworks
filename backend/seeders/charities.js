const slug = require('slug');
const moment = require('moment');
const db = require('./../models');

var charities = [
  {
    title: 'Bill & Melinda Gates Foundation',
    description: 'We work with partner organizations worldwide to tackle critical problems in four program areas. Our Global Development Division works to help the world’s poorest people lift themselves out of hunger and poverty. Our Global Health Division aims to harness advances in science and technology to save lives in developing countries. Our United States Division works to improve U.S. high school and postsecondary education and support vulnerable children and families in Washington State. And our Global Policy & Advocacy Division seeks to build strategic relationships and promote policies that will help advance our work. Our approach to grantmaking in all four areas emphasizes collaboration, innovation, risk-taking, and, most importantly, results.',
    employeeCount: 1382,
    logoURL: 'http://www.gatesfoundation.org/~/media/GFO/Site/Logo-Images/icon_small_bill_melinda_gates_foundation_logo.png',
    areasServed: 'Worldwide',
    endowment: 3679000,
    slug: slug('Bill & Melinda Gates Foundation'),
    foundedAt: moment('01-01-1997').toDate()
  },
  {
    title: 'Greenpeace',
    description: 'Greenpeace is a non-governmental environmental organization with offices in over 40 countries and with an international coordinating body in Amsterdam, the Netherlands',
    employeeCount: 2400,
    logoURL: 'https://lh3.googleusercontent.com/-Q1Fb4sFBX1g/AAAAAAAAAAI/AAAAAAAAu-o/FO6np4OsF-M/s0-c-k-no-ns/photo.jpg',
    areasServed: 'Worldwide',
    endowment: 236900000,
    slug: slug('Greenpeace'),
    foundedAt: moment('01-01-1971').toDate()
  },
  {
    title: 'Habitat for Humanity',
    description: 'Habitat has been devoted to building "simple, decent, and affordable" housing, a self-described "Christian housing ministry," and has addressed the issues of poverty housing all over the world.[1] The international operational headquarters are located in Americus, Georgia, United States, with the administrative headquarters located in Atlanta.[2] There are five area offices located around the world: United States and Canada; Africa and the Middle East (located in Pretoria, South Africa); Asia-Pacific (Bangkok, Thailand); Europe and Central Asia (Bratislava, Slovakia); and Latin America and the Caribbean (San Jose, Costa Rica).',
    employeeCount: 1000, // fake
    logoURL: 'https://lh6.googleusercontent.com/-a9FeWAShrmo/AAAAAAAAAAI/AAAAAAAACw8/oPJSzr3FqU0/s0-c-k-no-ns/photo.jpg',
    areasServed: 'Worldwide',
    endowment: 10000000, // fake
    slug: slug('Habitat for Humanity'),
    foundedAt: moment('01-01-1965').toDate()
  },
];


db.sequelize.sync().then(() => {
  db.Charity.bulkCreate(charities).then((charities) => {
    console.log('Charities are created');
    console.log(charities);
  }).catch((error) => console.log(error));
});
