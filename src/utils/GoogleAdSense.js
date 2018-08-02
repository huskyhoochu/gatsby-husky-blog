import config from '../data/SiteConfig';

if (typeof window !== 'undefined') {
  (window.adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: config.google.adSense.clientId,
    enable_page_level_ads: true,
  });
}
