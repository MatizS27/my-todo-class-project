import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, Analytics } from "firebase/analytics";

let analytics: Analytics | null = null;

export const initAnalytics = () => {
  const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize Analytics
  if (firebaseConfig.measurementId) {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized");
  } else {
    console.warn("Firebase Measurement ID not found");
  }
};

export const trackEvent = (eventName: string, eventParams?: { [key: string]: any }) => {
  if (analytics) {
    logEvent(analytics, eventName, eventParams);
  }
};

export const trackPageView = (path: string) => {
    if (analytics) {
        logEvent(analytics, 'page_view', { page_path: path });
    }
}
