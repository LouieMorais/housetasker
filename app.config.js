// app.config.js

import { config } from 'dotenv'
config({ path: '.env.test' })

export default {
  expo: {
    name: 'housetasker',
    slug: 'housetasker',
    version: '0.1.0',
    orientation: 'portrait',
    icon: './src/assets/icon.png',
    userInterfaceStyle: 'light',
    newArchEnabled: true,
    splash: {
      image: './src/assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './src/assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      edgeToEdgeEnabled: true,
      package: 'com.anonymous.housetasker',
    },
    web: {
      favicon: './src/assets/favicon.png',
    },
    extra: {
      EXPO_PUBLIC_SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      EXPO_PUBLIC_SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
    },
  },
}
