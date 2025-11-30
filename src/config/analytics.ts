import ReactGA from "react-ga4";

export const initAnalytics = () => {
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
  
  if (measurementId) {
    ReactGA.initialize(measurementId);
    // Enviar un evento de "pageview" inicial
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  } else {
    console.warn("Google Analytics Measurement ID not found (VITE_GA_MEASUREMENT_ID)");
  }
};

export const trackEvent = (category: string, action: string, label?: string) => {
  if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
    ReactGA.event({
      category,
      action,
      label,
    });
  }
};

export const trackPageView = (path: string) => {
    if (import.meta.env.VITE_GA_MEASUREMENT_ID) {
        ReactGA.send({ hitType: "pageview", page: path });
    }
}
