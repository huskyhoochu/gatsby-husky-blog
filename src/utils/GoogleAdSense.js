import config from '../data/SiteConfig';

if (typeof window !== 'undefined') {
  (window.adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: config.googleAdSenseClientId,
    enable_page_level_ads: true,
  });
}
