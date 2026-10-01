# nodejs_aplikasi_b

REST API sederhana untuk data pasien (tabel `patient`) menggunakan Node.js, Express, dan PostgreSQL.

## Tech Stack
- Node.js + Express
- PostgreSQL (`pg`)

## Endpoint
| Method | Path | Keterangan |
|---|---|---|
| GET | `/` | Info API |
| POST | `/patient` | Tambah pasien (`patient_name`, `gender`, `address`, `telp`) |
| GET | `/patientUpload` | Daftar semua pasien |
| PUT | `/patient/:id` | Ubah data pasien |

## Struktur
- `index.js` — server Express dan routing
- `queries.js` — koneksi database dan query pasien
- `aplikasi_b.sql` — data contoh (INSERT) untuk tabel `client`, `migrations`, `patient`

## Menjalankan
```bash
npm install
node index.js
```
Server berjalan di `127.0.0.1:3000` (dapat diubah lewat env `PORT`).

Koneksi PostgreSQL (host, database `hospital`, user, password) masih ditulis langsung di `queries.js`; sesuaikan dengan database lokal Anda.
