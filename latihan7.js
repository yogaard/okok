function getArea(panjang, lebar) {
  const getArea = panjang * lebar;
  return getArea;
}
console.log(getArea(5, 4));

function kelilingPersegiPanjang(panjang, lebar) {
  const kelilingPersegiPanjang = panjang * 2 + lebar * 2;
  return kelilingPersegiPanjang;
}
console.log(kelilingPersegiPanjang(2, 5));

function bilanganBulat(n) {
  const bilanganBulat = n % 2 === 0 ? `bulat` : `ganjil`;
  return bilanganBulat;
}
console.log("angka tersebut termasuk bilangan " + bilanganBulat(4));

function kelilingLingkaran(r) {
  const kelilingLingkaran = 2 * Math.PI * r;
  return kelilingLingkaran;
}
console.log(kelilingLingkaran(5));

function luasLingkaran(r) {
  const luasLingkaran = Math.PI * (r * r);
  return luasLingkaran;
}
console.log(luasLingkaran(10));

function getScore(score) {
  if (score > 30) {
    result = "nilai anda tidak sesuai";
  } else if (score >= 25) {
    result = `nilai anda ${score} Grade A`;
  } else if (score >= 20) {
    result = `nilai anda ${score} Grade B`;
  } else if (score >= 15) {
    result = `nilai anda ${score} Grade C`;
  } else if (score >= 10) {
    result = `nilai anda ${score} Grade D`;
  } else if (score >= 5) {
    result = `nilai anda ${score} Grade E`;
  } else if (score >= 0) {
    result = `nilai anda ${score}  Grade F`;
  }
  return result;
}
console.log(getScore(40));
