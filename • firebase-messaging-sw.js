importScripts('https://gstatic.com');
importScripts('https://gstatic.com');

firebase.initializeApp({
  apiKey: "LA_TUA_API_KEY",
  authDomain: "://firebaseapp.com",
  projectId: "notificheclienti-c8072",
  storageBucket: "notificheclienti-c8072.firebasestorage.app",
  messagingSenderId: "IL_TUO_SENDER_ID",
  appId: "IL_TUO_APP_ID"
});

const messaging = firebase.messaging();

// Gestisce l'arrivo delle notifiche quando l'app è chiusa o in background
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title || 'Avviso Scadenza F24';
  const notificationOptions = {
    body: payload.notification.body || 'Hai una scadenza F24 da confermare.',
    icon: 'https://flaticon.com'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
