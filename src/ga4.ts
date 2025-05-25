export const trackPageview = (url: string) => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: url,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
};

export const trackEvent = (
  eventName: string,
  category: string,
  label: string,
) => {
  if (window.gtag) {
    window.gtag("event", eventName, {
      event_category: category,
      event_label: label,
    });
  }
};
