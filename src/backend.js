// Lapisan data: membungkus Firebase Auth + Firestore dengan API sederhana
// (db.doc(path).set/update/delete/get/onSnapshot, db.collection(path).orderBy().limit()...)
import { initializeApp } from 'firebase/app';
import {
  getAuth, onAuthStateChanged, GoogleAuthProvider, signInWithPopup,
  signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signOut
} from 'firebase/auth';
import {
  getFirestore, doc, collection, query, orderBy, limit, setDoc, updateDoc, deleteDoc, getDoc, getDocs, onSnapshot, writeBatch
} from 'firebase/firestore';

async function loadConfig() {
  const c = window.PAPAN_FIREBASE_CONFIG;
  if (c && c.apiKey) return c;
  const r = await fetch('/__/firebase/init.json');
  if (!r.ok) throw new Error('no-config');
  const j = await r.json();
  // Di Firebase Hosting, pakai domain aplikasi sendiri untuk login (lebih andal di Safari/iPhone).
  j.authDomain = location.host;
  return j;
}

export async function createBackend() {
  const app = initializeApp(await loadConfig());
  const fs = getFirestore(app);
  const auth = getAuth(app);
  auth.languageCode = 'id';

  const wrapDoc = s => ({ id: s.id, exists: s.exists(), data: () => s.data() });
  const wrapQuery = s => ({ docs: s.docs.map(d => ({ id: d.id, data: () => d.data() })), metadata: { fromCache: s.metadata.fromCache } });
  const D = p => ({
    set: v => setDoc(doc(fs, p), v),
    update: v => updateDoc(doc(fs, p), v),
    delete: () => deleteDoc(doc(fs, p)),
    get: () => getDoc(doc(fs, p)).then(wrapDoc),
    onSnapshot: (cb, err) => onSnapshot(doc(fs, p), s => cb(wrapDoc(s)), err),
  });
  const C = (p, cons = []) => ({
    doc: id => D(p + '/' + id),
    orderBy: (f, dir) => C(p, [...cons, orderBy(f, dir)]),
    limit: n => C(p, [...cons, limit(n)]),
    get: () => getDocs(query(collection(fs, p), ...cons)).then(wrapQuery),
    onSnapshot: (cb, err) => onSnapshot(query(collection(fs, p), ...cons), s => cb(wrapQuery(s)), err),
  });
  // Tulis banyak dokumen sekaligus (dipakai untuk impor data)
  async function setMany(list) {
    for (let i = 0; i < list.length; i += 400) {
      const b = writeBatch(fs);
      list.slice(i, i + 400).forEach(([p, v]) => b.set(doc(fs, p), v));
      await b.commit();
    }
  }
  const db = { doc: D, collection: C, setMany };

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  const A = {
    onChange: cb => onAuthStateChanged(auth, u => cb(u && { email: u.email, emailVerified: u.emailVerified, name: u.displayName || '', providerId: u.providerData[0]?.providerId || '' })),
    google: async () => {
      // Hanya pop-up: login lewat redirect tidak andal bila aplikasi tidak di-host di domain Firebase.
      await signInWithPopup(auth, provider);
    },
    signIn: (e, p) => signInWithEmailAndPassword(auth, e, p),
    signUp: async (e, p) => { const r = await createUserWithEmailAndPassword(auth, e, p); await sendEmailVerification(r.user); },
    sendVerify: () => sendEmailVerification(auth.currentUser),
    reset: e => sendPasswordResetEmail(auth, e),
    // Muat ulang status verifikasi email dan perbarui token (supaya aturan keamanan melihatnya)
    refresh: async () => { const u = auth.currentUser; if (!u) return null; await u.reload(); await u.getIdToken(true); return { email: u.email, emailVerified: u.emailVerified, name: u.displayName || '' }; },
    signOut: () => signOut(auth),
  };
  return { db, auth: A };
}
