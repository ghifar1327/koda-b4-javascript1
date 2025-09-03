// no.1
const obj = {
  str: [
    0,
    1,
    2,
    [
      0,
      [
        0,
        1,
        {
          man: [
            {
              the: {
                name: {
                  of: {
                    us: "koda",
                  },
                },
              },
            },
          ],
        },
      ],
    ],
  ],
};
console.log(obj.str[3][1][2].man[0].the.name.of.us);
// 'koda'

// no. 2
const hello = { word: "Hello Word" };
console.log(hello.word);
// 'Hallo Word

// no.3
const my = [
  {
    favourite: [
      0,
      1,
      2,
      {
        fruit: {
          is: "apple",
        },
      },
    ],
  },
];
console.log(my[0].favourite[3].fruit.is);
// 'apple'
