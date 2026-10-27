// DATA CONTOH: ganti dengan data asli (nama, jam, kontak, menu, harga) dari peta lokasi.
const P = [
  {
    id: 1,
    n: "Laksa Benteng Pak Masitar",
    img: "toko/laksa.jpg",
    c: "Khas",
    a: "Pasar Lama",
    x: 300,
    y: 170,
    tp: "Gurih",
    su: "Santai",
    j: "07.00–14.00",
    k: "0811-9445-597",
    u: 1,
    d: "Laksa kuah santan dengan bihun, tauco, dan ayam suwir khas Tangerang.",
    m: [
      ["Laksa polos", 10000],
      ["Laksa Telur", 15000],
      ["Laksa Ayam Bakar", 18000],
    ],
  },
  {
    id: 2,
    n: "Rumah Ratu Sabanban (Sate Bandeng Banten)",
    img: "toko/bandeng.png",
    c: "Lauk (Olahan Ikan)",
    a: "Kelurahan Sukasih",
    g: "#c5f6fa",
    x: 250,
    y: 120,
    tp: "Gurih",
    su: "Lauk",
    j: "09.00–17.00",
    k: "0815-1340-2527",
    u: 1,
    d: "Ikan bandeng tanpa duri dibumbu bumbu kelapa lalu dipanggang.",
    m: [
      ["Sate Bandeng Original", 40000],
      ["Sate Bandeng Bumbu Rempah", 40000],
      ["Sate Bandeng Pedas", 40000],
    ],
  },
  {
    id: 3,
    n: "Galeri Bintang Sawi",
    img: "toko/bintang sawi.png",
    c: "Jajanan dan oleh-oleh",
    a: "Cibodasari",
    g: "#ffe3e3",
    x: 330,
    y: 200,
    tp: "Manis",
    su: "Jajanan tradisional",
    j: "08.00–17.00",
    k: "0812-8247-6475",
    u: 1,
    d: "Aneka kue kering dan kuliner Instant (UMKN).",
    m: [
      ["Nasi Kebuli Instan (250 gram)", 35000],
      ["kukies Mocaf", 35000],
      ["Paket Hampers", 150000],
    ],
  },
  {
    id: 4,
    n: "Mie Ayam Bakso Tijani888",
    img: "toko/tijani888.png",
    c: "Berat",
    a: "Sukasari",
    g: "#fff3bf",
    x: 130,
    y: 130,
    tp: "Gurih",
    su: "Keluarga",
    j: "06.30–23.00",
    k: "-",
    u: 0,
    d: "Mie bertekstur kenyal khas buatan sendiri, dipadukan dengan kuah bening yang manis gurih.",
    m: [
      ["Mie Ayam Polos", 19000],
      ["Mie ayam Bakso", 27000],
      ["Bakso Kuah", 18000],
      ["Mie yamin", 19000],
      ["Mie ayam Pangsit Bakso", 30000],
    ],
  },
  {
    id: 5,
    n: "Seafood Serasa di Bali",
    img: "toko/seafood.png",
    c: "Seafood",
    a: "Sukasari",
    g: "#d0ebff",
    x: 220,
    y: 250,
    tp: "Pedas",
    su: "Keluarga",
    j: "11.30–21.30",
    k: "0895-3214-65068",
    u: 0,
    d: "Restoran Seafood di kawasan Pasar Lama yang mengusung pengalaman bersantap bernuansa Bali.",
    m: [
      ["Special Seafood Platter", 199900],
      ["Lobster Kipas", 75000],
      ["Kerang Simping Bakar", 40000],
      ["Kerang Tiram", 39000],
    ],
  },
  {
    id: 6,
    n: "Kedai Kopi Nagi",
    img: "toko/nagi.jpg",
    c: "Coffe Shop",
    a: "Pasar lama",
    g: "#e9d8c4",
    x: 160,
    y: 320,
    tp: "Kopi",
    su: "Santai",
    j: "07.00–22.00",
    k: "0813-2103-398",
    u: 0,
    d: "Kedai kopi modern dengan pilihan minuman kopi susu.",
    m: [
      ["Nagi Aren", 25000],
      ["Butterscotch Macchiato", 32000],
      ["Black Mixed Berry", 26000],
      ["Dirty Matcha", 36000],
      ["Bolu Choco Crispy", 15000],
    ],
  },
  {
    id: 7,
    n: "Es Cendol Durian Primadona",
    img: "toko/cendol primadona.jpe",
    c: "Jajanan",
    a: "Babakan",
    g: "#d3f9d8",
    x: 360,
    y: 150,
    tp: "Segar",
    su: "Jajan cepat",
    j: "09.00–18.30",
    k: "-",
    u: 1,
    d: "Cendol santan dengan gula merah,nangka dan durian.",
    m: [
      ["Es Cendol Durian", 20000],
      ["Es Cendor Original", 10000],
      ["Es Durian Gula", 20000],
    ],
  },
  {
    id: 8,
    n: "Nasi Uduk Ibu Rohani",
    img: "toko/uduk ibu rohani.jpg",
    c: "Berat",
    a: "Kecamatan Batuceper",
    g: "#ffec99",
    x: 420,
    y: 290,
    tp: "Gurih",
    su: "Santai",
    j: "05.00–13.00",
    k: "0896-3611-3596",
    u: 1,
    d: "Nasi uduk pagi hari dengan semur jengkol, telur balado, dan bihun.",
    m: [
      ["Nasi Uduk Spesial Tempe Orek", 18000],
      ["Nasi Uduk Spesial Telur dadar", 17000],
      ["Nasi Uduk Spesial Ayam Goreng", 24000],
      ["Nasi kuning Spesial Kentang Balado", 17000],
    ],
  },
  {
    id: 9,
    n: "Ayam Geprek Cabe Ijo Mbak Dewi",
    img: "toko/geprek ijo.jpg",
    c: "Berat",
    a: "sukaasih",
    g: "#ffc9c9",
    x: 90,
    y: 240,
    tp: "Pedas",
    su: "Jajan cepat",
    j: "15.00–23.00",
    k: "0858-8570-7071",
    u: 1,
    d: "Ayam geprek dengan sambal caai hijaunya yang melimpah, pedas mantap, namun tetap ramah di kantong.",
    m: [
      ["Paket Hemat Cabe Ijo", 17000],
      ["Ayam Geprek Cabe Ijo Ala Carte", 17000],
      ["Menu Pendamping: Tahu Tempe,Telur (Dadar/ceplok), Kol Goreng", 4000],
    ],
  },
  {
    id: 10,
    n: "Dimsum Mentai EGB",
    img: "toko/dimsum egb.jpg",
    c: "Jajanan",
    a: "Cipondoh",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "06.00–20.00",
    k: "0812-8444-5691",
    u: 1,
    d: "Dimsum rumahan dengan cita rasa yang lezat,tekstur dimsum yang juicy, serta harga yg bersahabat",
    m: [
      ["Dimsum Mentai (4)", 18000],
      ["Dimsum Ayam Original (4)", 17000],
      ["Dimsum Mix Topping (4-5)", 20000],
    ],
  },
  {
    id: 11,
    n: "Bubur Ayam Ko Iyo",
    img: "toko/bubur.png",
    c: "Berat",
    a: "Sukasari",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "06.30–12.00,16-30-23.00",
    k: "0878-0847-1888",
    u: 1,
    d: "Dimsum rumahan dengan cita rasa yang lezat,tekstur dimsum yang juicy, serta harga yg bersahabat",
    m: [
      ["Bubur Ayam Porsi Kecil", 24000],
      ["Bubur Ayam Porsi Besar/Jumbo", 29000],
      ["Aneka Toping", 6500],
    ],
  },
  {
    id: 12,
    n: "Warung Asinan Mpo Manis Neroktog",
    img: "toko/neroktok.png",
    c: "Ringan",
    a: "Neroktog",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "09.00–21.30",
    k: "0889-7535-4255",
    u: 1,
    d: "Asinan dan Jajanan Tradisional",
    m: [
      ["Asinan Betawi Kuah Kacang", 18600],
      ["Asinan Betawi Kuah Bening", 18600],
      ["Asinan Buah", 18600],
      ["Jamu Cinta", 13000],
    ],
  },
  {
    id: 13,
    n: "Bakmi OJEB",
    img: "toko/bakmi ojeb.jpg",
    c: "Berat",
    a: "Karawaci",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "09.00-18.00",
    k: "0895-6105-48325",
    u: 1,
    d: "Bakmi gurih dengan aneka topping menggugah selera, dari ayam kampung hingga pangsit, cocok untuk pencinta mi di Karawaci",
    m: [
      ["Bakmi Ayam Kampung", 24000],
      ["Kwetiaw Ayam Kampung", 24000],
      ["Bakmi Ayam Charsiu", 32000],
      ["Bihun Ayam Kampung", 24000],
      ["Bakmi ayam spesial jumbo", 47000],
    ],
  },
  {
    id: 14,
    n: "Es Kode",
    img: "toko/es kode.jpeg",
    c: "Minuman",
    a: "Sukasari",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis",
    su: "Keluarga",
    j: "07.00-16.00",
    k: "0812-9526-809",
    u: 1,
    d: "kedai jus legendaris Kota Tangerang yang telah hadir sejak 1960.",
    m: [
      ["JUS Buah", 15000],
      ["Es Campur", 18000],
      ["Es Teler", 18000],
      ["Es Buah", 18000],
    ],
  },
  {
    id: 15,
    n: "Toge Goreng Modernland",
    img: "toko/toge goreng.jpg",
    c: "Berat",
    a: "Kelapa Indah",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "14.00-17.00",
    k: "0856-1667-277",
    u: 1,
    d: "Toge Goreng Modernland merupakan kuliner legendaris Kota Tangerang yang telah hadir sejak 1992, Resep Turun-Temurun dan perpaduan rada gurih",
    m: [
      ["Toge Goreng Original", 15000],
      ["Toge Goreng + Lontong", 20000],
    ],
  },
  {
    id: 16,
    n: "Sate Manis Cisadane 38",
    img: "toko/sate 38.png",
    c: "Berat",
    a: "Cisadane",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "10.00-21.00",
    k: "0812-9526-809",
    u: 1,
    d: "kuliner tradisional legendaris dan ikonik khas Kota Tangerang yang sudah ada sejak tahun 1960-an.",
    m: [
      ["Sate Manis Sapi (5 tusuk)", 25000],
      ["Sate Manis + Nasi Putih", 30000],
      ["Sate Manis + Ketan", 27000],
    ],
  },
  {
    id: 17,
    n: "KEDAI BESAN Mpok EVA",
    img: "toko/kedai besan.jpg",
    c: "Berat",
    a: "Ciputat",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis",
    su: "Keluarga",
    j: "07.00-16.00",
    k: "-",
    u: 1,
    d: "hidangan tradisional khas Tangerang yang identik dengan tradisi pernikahan masyarakat Betawi. Hidangan ini memiliki kuah santan gurih dengan bahan utama terubuk atau bunga tebu, yang dipadukan dengan kentang, petai, dan soun",
    m: [["Sayur Besan", 10000]],
  },
  {
    id: 18,
    n: "Serabi Hijau 11 Bersaudara",
    img: "toko/serabi 11.jpg",
    c: "Ringan",
    a: "Sukasari",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis",
    su: "Keluarga",
    j: "11.00-23.00",
    k: "-",
    u: 1,
    d: "kedai jus legendaris Kota Tangerang yang telah hadir sejak 1960.",
    m: [
      ["Serabi isi 5 + Kinca (Pandan/Durian)", 21250],
      ["Serabi isi 10 + Kinca (Pandan/Durian", 35000],
      ["Serabi Bandung Oncom Mayo", 10000],
      ["Serabi Bandung Telur Mayo", 10000],
      ["Serabi Bandung Sosis Keju Mayo", 10000],
    ],
  },
  {
    id: 19,
    n: "Bolu Tape Benteng-Mama Bolu",
    img: "toko/mama bolu.jpg",
    c: "Ringan",
    a: "Sukajadi",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis",
    su: "Keluarga",
    j: "07.00-21.00",
    k: "0822-1321-9545",
    u: 1,
    d: "oleh-oleh khas Kota Tangerang yang memiliki tekstur lembut dengan perpaduan rasa manis dan sedikit asam dari tape singkong.",
    m: [
      ["Bolu Tape Benteng Original", 50000],
      ["Bolu Tape Benteng Cokelat", 55000],
      ["Bolu Tape Benteng Keju", 55000],
      ["Bolu Tape Benteng Strawberry", 55000],
    ],
  },
  {
    id: 20,
    n: "The Uncle Dee Ice Cream",
    img: "toko/uncle dee.jpg",
    c: "Ringan",
    a: "Karang Tengah",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis",
    su: "Keluarga",
    j: "11.00-21.00",
    k: "0812-9526-809",
    u: 1,
    d: "Menawaran Soft ice cream berbahan susu sapi asli dengan harga terjangkau. Cocok untuk pencinta dessert yang mencari camilan manis dan menyegarkan.",
    m: [
      ["Dizzy Ice", 13000],
      ["Soft Ice cream", 20000],
      ["Uncle Latte Float Chocolate", 22000],
      ["Uncle Latte Float Matcha", 22000],
      ["Uncle Soda Float", 22000],
      ["Topping", 5000],
    ],
  },
  {
    id: 21,
    n: "Soto Benteng Bang Udin",
    img: "toko/soto benteng.jpg",
    c: "Berat",
    a: "Sukasari",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "06.30-14.00",
    k: "0895-3317-85236",
    u: 1,
    d: "Keunikan kuliner ini terletak pada proses pengolahan daging sapi dan jeroannya yang dibakar terlebih dahulu, bukan sekadar direbus atau digoreng. Proses ini menghasilkan aroma smoky yang menjadi ciri khasnya.",
    m: [
      ["Soto Daging Sapi Kuah Santan", 20000],
      ["Soto Daging Sapi Kuah Bening", 20000],
      ["Soto Campur daging dan jeroan", 25000],
    ],
  },
  {
    id: 22,
    n: "Nasi Jagal Ibu Zahra",
    img: "toko/nasi jagal.jpg",
    c: "Berat",
    a: "Karawaci",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Manis Asin",
    su: "Keluarga",
    j: "24 jam",
    k: "0877-2238-8333",
    u: 1,
    d: "Olahan Nasi Putih Hangat dengan potongan daging daging sapi yang dimasak hingga empuk dengan bumbu kecap kental.",
    m: [
      ["Nasi Jagal", 14000],
      ["Nasi Goreng jagal", 15000],
    ],
  },
  {
    id: 23,
    n: "Nasi Timbel Khas Cianjur",
    img: "toko/nasi timbel.jpg",
    c: "Berat",
    a: "Babakan",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "09.00-18.00",
    k: "0856-7722-133",
    u: 1,
    d: "Nasi Timbel Khas Cianjur menyajikan aneka hidangan khas Sunda dengan cita rasa autentik dan suasana tempat makan bernuansa tradisional.",
    m: [
      ["Nasi Liwet", 8000],
      ["Pepes Ayam", 18000],
      ["Bebek Goreng", 27000],
      ["Sayur Asem", 10000],
      ["Es Jeruk", 10000],
      ["Es Teh", 6000],
    ],
  },
  {
    id: 24,
    n: "Depot Sami Asih 1 Surabaya",
    img: "toko/depot asih.jpg",
    c: "Berat",
    a: "Karawaci",
    g: "#ffe8cc",
    x: 480,
    y: 200,
    tp: "Gurih",
    su: "Keluarga",
    j: "07.00-22.00",
    k: "0822-1148-3221",
    u: 1,
    d: "Tempat makan ini cocok bagi pencinta kuliner Nusantara yang ingin menikmati hidangan rumahan dengan harga terjangkau.",
    m: [
      ["Nasi Goreng Kambing", 22000],
      ["Nasi Goreng", 17000],
      ["Sate Kambing", 35000],
      ["Soto Madura", 18000],
      ["Es Campur", 13000],
      ["Es Teh Manis", 4000],
    ],
  },
];


const K = [
  [
    "toko/laksa.jpg",
    "Laksa Tangerang",
    "Hidangan paling ikonik: bihun kuah santan gurih berpadu tauco, dipengaruhi budaya Betawi dan Tionghoa Benteng."
  ],
  [
    "toko/bandeng.png",
    "Sate Bandeng",
    "Bandeng dihaluskan, dibumbu kelapa, lalu dipanggang. Warisan kuliner pesisir Banten."
  ],
  [
    "toko/mama bolu.jpg",
    "Bolu Tape Benteng-Mama Bolu",
    "Oleh-oleh khas Kota Tangerang yang memiliki tekstur lembut dengan perpaduan rasa manis dan sedikit asam dari tape singkong."
  ],
  [
    "toko/neroktok.png",
    "Warung Asinan Mpo Manis Neroktog",
    "Aneka asinan segar dengan cita rasa khas yang memadukan rasa asam, manis, dan pedas."
  ]
];

// UBAH 1: mn & mx hanya menghitung menu yang punya harga (angka)
const $ = (s) => document.querySelector(s),
  rp = (n) => "Rp" + n.toLocaleString("id-ID"),
  mn = (p) =>
    Math.min(...p.m.filter((i) => typeof i[1] === "number").map((i) => i[1])),
  mx = (p) =>
    Math.max(...p.m.filter((i) => typeof i[1] === "number").map((i) => i[1]));
let cat = "Semua",
  F = [],
  R = [];
try {
  F = JSON.parse(localStorage.getItem("ct_fav") || "[]");
} catch (e) {}
function sv() {
  try {
    localStorage.setItem("ct_fav", JSON.stringify(F));
  } catch (e) {}
}
const A = [...new Set(P.map((p) => p.a))];
A.forEach((a) =>
  $("#area").insertAdjacentHTML("beforeend", `<option>${a}</option>`),
);
["Semua", ...new Set(P.map((p) => p.c))].forEach((c) => {
  const b = document.createElement("button");
  b.className = "chip" + (c == cat ? " on" : "");
  b.textContent = c;
  b.onclick = () => {
    cat = c;
    document
      .querySelectorAll("#cats .chip")
      .forEach((x) => x.classList.toggle("on", x.textContent == c));
    draw();
  };
  $("#cats").append(b);
});

const card = (p) => `
  <div class="card" onclick="det(${p.id})">

    <div class="ph food-photo" style="background:${p.g || "#fff2b2"}">

      ${
        p.img
          ? `<img
               src="${p.img}"
               alt="${p.n}"
               loading="lazy"
               onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
             >`
          : ""
      }

      <span class="photo-fallback" style="display:${p.img ? "none" : "flex"}">
        🍜
      </span>

      <button
        class="fav"
        onclick="event.stopPropagation();tf(${p.id})"
      >
        ${F.includes(p.id) ? "❤️" : "🤍"}
      </button>

    </div>

    <div class="cb">
      <h3>${p.n}</h3>

      <div class="meta">
        📍 ${p.a} · 🕒 ${p.j}
      </div>

      <div style="margin:6px 0">
        <span class="tag">${p.c}</span>
        ${p.u ? '<span class="tag">UMKM</span>' : ""}
      </div>

      <div class="price">
        ${rp(mn(p))} – ${rp(mx(p))}
      </div>
    </div>

  </div>
`;

function draw() {
  const q = $("#q").value.toLowerCase(),
    a = $("#area").value,
    h = +$("#hrg").value;
  const r = P.filter(
    (p) =>
      (cat == "Semua" || p.c == cat) &&
      (!a || p.a == a) &&
      mn(p) <= h &&
      (p.n + p.a + p.c + p.m.map((i) => i[0]).join(" "))
        .toLowerCase()
        .includes(q),
  );

  pins(r); // peta digambar duluan, jadi nggak ikut mati kalau bagian lain error

  const list = $("#list");
  if (list)
    list.innerHTML = r.length
      ? r.map(card).join("")
      : '<p class="sub">Tidak ada hasil. Coba ubah filter 🙏</p>';

  const fav = $("#favout");
  if (fav)
    fav.innerHTML = F.length
      ? P.filter((p) => F.includes(p.id))
          .map(card)
          .join("")
      : '<p class="sub">Belum ada favorit. Ketuk 🤍 pada kartu.</p>';
}
function pins(r) {
  const ids = r.map((p) => p.id);
  $("#svg").innerHTML =
    /* me */
    `<rect width="600" height="420" fill="#fff" opacity=".5"/><path d="M180 0 C230 90 180 180 260 260 S300 380 280 420" stroke="#74c0fc" stroke-width="22" fill="none" opacity=".7"/><text x="205" y="60" fill="#1c7ed6" font-size="11">Sungai Cisadane</text>` +
    P.map(
      (p) =>
        `<g class="pin" onclick="det(${p.id})" opacity="${ids.includes(p.id) ? 1 : 0.25}"><circle cx="${p.x}" cy="${p.y}" r="17" fill="#d9480f"/><text x="${p.x}" y="${p.y + 5}" text-anchor="middle">${p.e}</text><text x="${p.x}" y="${p.y + 32}" text-anchor="middle" font-size="10" fill="#7a6454">${p.n.split(" ").slice(0, 2).join(" ")}</text></g>`,
    ).join("");
}
function tf(i) {
  F = F.includes(i) ? F.filter((x) => x != i) : [...F, i];
  sv();
  draw();
}
function ta(i) {
  if (!R.includes(i)) R.push(i);
  rt();
  $("#md").classList.remove("on");
}
function rt() {
  $("#rtout").innerHTML = R.length
    ? `<ol class="rt">${R.map((i, n) => {
        const p = P.find((x) => x.id == i);
        return `<li>${p.e} <b>${p.n}</b> <span class="meta">(${p.a}, est. ${rp(mn(p))})</span> <button class="chip" onclick="R.splice(${n},1);rt()">✕</button></li>`;
      }).join(
        "",
      )}</ol><p class="price">Estimasi budget minimum: ${rp(R.reduce((s, i) => s + mn(P.find((x) => x.id == i)), 0))}</p><a class="btn s" target="_blank" rel="noopener" href="https://www.google.com/maps/dir/${R.map((i) => encodeURIComponent(P.find((x) => x.id == i).n + " Tangerang")).join("/")}">Buka rute di Google Maps</a> <button class="chip" onclick="R=[];rt()">Kosongkan</button>`
    : '<p class="sub">Rute masih kosong. Buka detail tempat lalu pilih “Tambah ke Rute”.</p>';
}

function det(i) {
  const p = P.find((x) => x.id == i);

  const mapsUrl =
    p.maps ||
    `https://www.google.com/maps/search/${encodeURIComponent(p.n + " Tangerang")}`;

  $("#mb").innerHTML =
    `<div class="ph food-photo" style="background:${p.g || "#fff2b2"}">
        ${
          p.img
            ? `<img src="${p.img}" alt="${p.n}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ""
        }
        <span class="photo-fallback" style="display:${p.img ? "none" : "flex"}">🍜</span>
     </div>

    <div class="in">
      <h2 style="font-size:22px">${p.n}</h2>

      <p class="meta">
        ${p.c} · 📍 ${p.a} · 🕒 ${p.j}<br>
        📞 ${p.k}
      </p>

      <p>${p.d}</p>

      <table>
        ${p.m
          .map((m) => `<tr><td>${m[0]}</td><td>${rp(m[1])}</td></tr>`)
          .join("")}
      </table>

      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:14px">
      
        <button class="chip" onclick="tf(${p.id});det(${p.id})">
          ${F.includes(p.id) ? "❤️ Favorit" : "🤍 Simpan"}
        </button>

        <a class="chip"
           style="text-decoration:none;color:inherit"
           target="_blank"
           rel="noopener noreferrer"
           href="${mapsUrl}">
          📍 Buka di Google Maps
        </a>

        <button class="chip" onclick="$('#md').classList.remove('on')">
          Tutup
        </button>
      </div>
    </div>`;

  $("#md").classList.add("on");
}

function rekom() {
  const a = $("#r1").value,
    b = +$("#r2").value,
    c = $("#r3").value;
  const r = P.filter(
    (p) => (!a || p.tp == a) && mn(p) <= b && (!c || p.su == c),
  );
  $("#recout").innerHTML = r.length
    ? r.map(card).join("")
    : '<p class="sub">Belum ada yang cocok, coba longgarkan pilihan 😊</p>';
}

$("#khasg").innerHTML = K.map(
  (k) => `
    <div class="box">
      <div class="e">
        <img src="${k[0]}" alt="${k[1]}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">

        <div class="foto-fallback" style="display:none">
          Foto belum tersedia
        </div>
      </div>

      <h3>${k[1]}</h3>

      <p class="sub" style="margin-top:6px">
        ${k[2]}
      </p>
    </div>
  `
).join("");

["q", "area", "hrg"].forEach((i) => $("#" + i).addEventListener("input", draw));

/* ===== UBAH 4: PETA LEAFLET ===== */

// Koordinat asli per tempat: [lat, lng]. Isi dari Google Maps
// (klik kanan di lokasi > klik angka koordinat untuk menyalin).
const COORD = {
  // 1: [-6.1781, 106.6330],
  // 2: [-6.1700, 106.6350],
};

// Pusat perkiraan per area (kasar, bukan lokasi presisi)
const AREA_CENTER = {
  "pasar lama": [-6.1783, 106.6319],
  sukasari: [-6.1783, 106.6319],
  batuceper: [-6.1668, 106.6711],
  cipondoh: [-6.1888, 106.6841],
  karawaci: [-6.22, 106.61],
  "karang tengah": [-6.2, 106.71],
};
const DEF_CENTER = [-6.1783, 106.6319];

function emo(p) {
  return p.c === "Khas"
    ? "🍜"
    : p.c === "Seafood"
      ? "🐟"
      : p.c === "Mie & Bakmi"
        ? "🍝"
        : p.c === "Coffe Shop"
          ? "☕"
          : p.c === "Jajanan" || p.c === "Jajanan dan oleh-oleh"
            ? "🍡"
            : p.c === "Berat"
              ? "🍽️"
              : "📍";
}

// Perbaiki "undefined": isi emoji & warna default untuk semua tempat
P.forEach((p) => {
  p.e = p.e || emo(p);
  p.g = p.g || "#ffe8cc";
});

function posisi(p) {
  if (COORD[p.id]) return COORD[p.id];
  if (p.lat != null && p.lng != null) return [p.lat, p.lng];
  const c = AREA_CENTER[(p.a || "").toLowerCase()] || DEF_CENTER;
  // geser sedikit supaya tempat di area sama tidak persis menumpuk
  const ang = p.id * 2.4,
    r = 0.0007 * (1 + (p.id % 3));
  return [c[0] + Math.sin(ang) * r, c[1] + Math.cos(ang) * r];
}

let LM, LC;

function pins(r = []) {
  const el = $("#lmap");
  if (!el) {
    console.error("Elemen #lmap tidak ada di HTML");
    return;
  }
  if (!window.L || !L.markerClusterGroup) {
    el.innerHTML =
      '<p style="padding:20px">Leaflet belum termuat. Cek link CDN di &lt;head&gt;.</p>';
    return;
  }
  if (!LM) {
    LM = L.map(el, { scrollWheelZoom: false }).setView(DEF_CENTER, 15);
    // UBAH 5: tile Esri World Street Map (tanpa API key)
    L.tileLayer(
      "https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}",
      {
        maxZoom: 19,
        attribution:
          "Tiles &copy; Esri &mdash; Esri, HERE, Garmin, OpenStreetMap contributors",
      },
    ).addTo(LM);
    LC = L.markerClusterGroup({
      showCoverageOnHover: false,
      maxClusterRadius: 30,
      disableClusteringAtZoom: 17,
    });
    LM.addLayer(LC);
    LM.on("click", () => LM.scrollWheelZoom.enable());
    LM.on("mouseout", () => LM.scrollWheelZoom.disable());
    new ResizeObserver(() => LM.invalidateSize()).observe(el);
  }

  const ids = r.map((p) => (typeof p === "object" ? p.id : p));
  LC.clearLayers();
  const pts = [];

  P.filter((p) => ids.includes(p.id)).forEach((p) => {
    const ll = posisi(p);
    const icon = L.divIcon({
      className: "",
      html: `<div class="pin2" style="--c:${p.g}"><span>${p.e}</span></div>`,
      iconSize: [38, 38],
      iconAnchor: [19, 38],
    });
    const m = L.marker(ll, { icon, title: p.n, keyboard: true });
    m.bindTooltip(p.n, { direction: "top", offset: [0, -34] });
    m.on("click", () => det(p.id));
    LC.addLayer(m);
    pts.push(ll);
  });

  if (pts.length) LM.fitBounds(pts, { padding: [40, 40], maxZoom: 16 });
}

// Klik di mana saja untuk menutup detail kuliner
document.getElementById("md").addEventListener("click", function () {
    this.classList.remove("on");
});

// Klik isi detail tidak akan menutup modal
document.getElementById("mb").addEventListener("click", function (event) {
    event.stopPropagation();
});

draw();

// NAVBAR TITIK TIGA UNTUK TAMPILAN HP
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  if (!menuToggle || !navMenu) return;

  menuToggle.addEventListener("click", function (event) {
    event.stopPropagation();
    navMenu.classList.toggle("show");
  });

  navMenu.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navMenu.classList.remove("show");
    });
  });

  document.addEventListener("click", function (event) {
    if (
      !menuToggle.contains(event.target) &&
      !navMenu.contains(event.target)
    ) {
      navMenu.classList.remove("show");
    }
  });
});