let transaksi = [];

function tambahTransaksi() {
    const kodeBarang = parseInt(document.getElementById('kode-barang').value);
    const jumlah = parseInt(document.getElementById('jumlah').value);

    let barang;
    if (kodeBarang === 1) {
        barang = { nama: 'Sabun', kode: kodeBarang, harga: 10000 };
    } else if (kodeBarang === 2) {
        barang = { nama: 'Sampo', kode: kodeBarang, harga: 20000 };
    } else {
        alert('Kode barang tidak valid!');
        return;
    }

    transaksi.push({ barang, jumlah });
    document.getElementById('kode-barang').value = '';
    document.getElementById('jumlah').value = '';

    // Tampilkan barang yang ditambahkan ke keranjang
    tampilkanKeranjang();
}

function tampilkanKeranjang() {
  const keranjangElemen = document.querySelector('#keranjang tbody');
  keranjangElemen.innerHTML = ''; // Kosongkan isi keranjang sebelum menambahkan ulang

  transaksi.forEach(item => {
      const subtotal = item.barang.harga * item.jumlah;
      const row = document.createElement('tr');
      row.innerHTML = `
          <td>${item.barang.nama}</td>
          <td>${item.barang.kode}</td>
          <td>Rp. ${item.barang.harga}</td>
          <td>${item.jumlah}</td>
          <td>Rp. ${subtotal}</td>
      `;
      keranjangElemen.appendChild(row);
  });
}

function checkout() {
    let totalHarga = 0;
    transaksi.forEach(item => {
        totalHarga += item.barang.harga * item.jumlah;
    });
    document.getElementById('total').innerHTML = `Total Harga: Rp. ${totalHarga}`;
    transaksi = [];
    tampilkanKeranjang(); // Kosongkan tampilan keranjang setelah checkout
}
