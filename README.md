# Papan Proyek Kontraktor

Aplikasi web untuk RAB, progres (Kurva S/opname), keuangan per proyek, dan laporan harian kontraktor,
dengan login dan peran (Admin, Tim internal, Vendor).

- Aplikasi online: https://zuhalr.github.io/papan-proyek/
- Data & login: Firebase (proyek `papan-proyek-kontraktor`), aturan akses di `firestore.rules`
- Situs yang di-hosting: folder `docs/` (GitHub Pages)

Data bisnis tidak disimpan di repo ini. Konfigurasi web Firebase di `docs/config.js` memang publik;
keamanan data dijaga oleh `firestore.rules`.

## Mengubah aplikasi

```
npm install
node build.mjs        # hasil build ke docs/
git commit -am "..." && git push
```

Mengubah aturan keamanan: edit `firestore.rules`, lalu salin ke Firebase console → Firestore → Rules → Publish
(atau `npx firebase-tools deploy --only firestore --project papan-proyek-kontraktor`).
