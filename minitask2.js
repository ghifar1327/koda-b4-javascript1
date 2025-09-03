// buat segitiga siku-siku tidak mengunakan fungsi
for (i = 1; i <= 5; i++) {
  let s = "";
  for (k = 1; k <= i; k++) {
    s += "*";
  }
  console.log(s);
}

let x = 1;
let btg = "";
do {
  let y = x;
  do {
    btg += "*";
    console.log(btg);
    y++;
  } while (y <= x);
  x++;
} while (x <= 5);
