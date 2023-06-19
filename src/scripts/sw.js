import { precacheAndRoute } from 'workbox-precaching';
import { CacheFirst, StaleWhileRevalidate } from 'workbox-strategies';
import { ExpirationPlugin } from 'workbox-expiration';
import { registerRoute } from 'workbox-routing';

// Do precaching
precacheAndRoute(self.__WB_MANIFEST);

registerRoute(
  /^https:\/\/use.fontawesome.com\/b070c8f1df.js/,
  new CacheFirst({
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  }),
);

registerRoute(
  /^https:\/\/restaurant-api.dicoding.dev/,
  new StaleWhileRevalidate({
    cacheName: 'dicoding-restaurant-api',
    plugins: [
      new ExpirationPlugin({
        maxAgeSeconds: 24 * 60 * 60,
      }),
    ],
  }),
);

self.addEventListener('install', () => {
  console.log('Service Worker: Installed');
  self.skipWaiting();
});

self.addEventListener('push', (event) => {
  console.log('Service Worker: Pushed');

  const dataJson = event.data.json();
  const notification = {
    title: dataJson.title,
    options: {
      body: dataJson.options.body,
      icon: dataJson.options.icon,
      image: dataJson.options.image,
    },
  };

  event.waitUntil(
    self.ServiceWorkerRegistration.showNotificaion(notification.title, notification.options),
  );
});

self.addEventListener('notificationclick', (event) => {
  const clickedNotification = event.notification;
  clickedNotification.close();

  const chainPromise = async () => {
    console.log('Notification has been clicked');
    await self.clients.openWindow('https://www.dicoding.com');
  };

  event.waitUntil(chainPromise());
});
