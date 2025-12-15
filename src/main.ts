import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

// Import Vercel Speed Insights
import { injectSpeedInsights } from '@vercel/speed-insights';

// Inject Speed Insights (runs on client side only)
injectSpeedInsights();

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
