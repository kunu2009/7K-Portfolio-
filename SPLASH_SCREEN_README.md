# PWA Splash Screen Setup

## Adding the Splash Screen Image

1. **Save the splash screen image**:
   - Take the attached "7K Welcome" image with the robot and cat
   - Save it as `splash-screen.png` in the `public` folder
   - Path: `public/splash-screen.png`

2. **Image specifications**:
   - The image should be at least 1200x1600px for best quality
   - Format: PNG with transparency support
   - The current background color (#D4C4B0) will show behind the image

3. **Testing the PWA**:
   - Build the app: `npm run build`
   - Serve it: `npm start`
   - Open in Chrome/Edge
   - Click the install icon in the address bar
   - Install the PWA
   - Close and reopen to see the splash screen

## iOS Devices

The splash screen will automatically display on iOS devices when:
- The app is added to the home screen
- User taps the app icon
- During the initial load

Multiple sizes are configured in `layout.tsx` for different iOS devices.

## Android Devices

Android will use the `splash-screen.png` from the manifest.json automatically.

## Current Status

✅ Manifest.json updated with enhanced PWA features
✅ Splash screen meta tags added to layout.tsx
✅ iOS splash screen support for all device sizes
✅ PWA shortcuts configured (Apps, Services, Portfolio)
✅ Enhanced description with SEO keywords

## Next Steps

Just add the `splash-screen.png` image to the `public` folder and rebuild!
