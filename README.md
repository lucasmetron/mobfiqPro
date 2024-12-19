# E-commerce React Native App

This project is an e-commerce mobile application built with React Native using Expo. The app integrates **AppsFlyer** for click event tracking and deep linking with links created in the AppsFlyer dashboard. The project has been ejected from Expo Managed Workflow to enable the AppsFlyer integration.

## Prerequisites

Before starting, make sure you have the following installed:

- **Node.js** (>= 16.x)
- **Expo CLI**
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS required)
- **CocoaPods** (for iOS dependencies)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/lucasmetron/mobfiqPro.git
   cd mobfiqPro
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. For iOS, install CocoaPods dependencies:
   ```bash
   cd ios
   pod install
   cd ..
   ```

## Configuration

1. Configure **AppsFlyer SDK** in the app:
   - Add your `devKey` and `appId` in the AppsFlyer initialization settings.
   - Ensure deep linking is properly configured in the AppsFlyer dashboard and matches the app’s setup.

2. Update the `android/app/src/main/AndroidManifest.xml` and iOS `AppDelegate.m` or `AppDelegate.swift` for deep linking as per AppsFlyer documentation.

## Running the App

### For iOS

1. Start the Metro bundler:
   ```bash
   npm start
   ```

2. Open the iOS project in Xcode:
   ```bash
   open ios/Tasks.xcworkspace
   ```

3. Select a simulator or a connected device and build the app:
   - Press `Cmd + R` to run the app.

4. Alternatively, run the app directly from the terminal:
   ```bash
   npx react-native run-ios
   ```

### For Android

1. Start the Metro bundler:
   ```bash
   npm start
   ```

2. Open the Android project in Android Studio:
   - Open the `android` folder in Android Studio.
   - Select an emulator or a connected device.

3. Build and run the app:
   - Click on the green play button in Android Studio.

4. Alternatively, run the app directly from the terminal:
   ```bash
   npx react-native run-android
   ```

## Features

- **E-commerce functionality**: Product browsing, cart management, and checkout.
- **AppsFlyer Integration**: Tracks user interactions and events.
- **Deep Linking**: Seamless navigation to specific app pages via AppsFlyer links.

## Troubleshooting

- If you encounter issues with dependencies, try running:
  ```bash
  npm install && cd ios && pod install && cd ..
  ```

- For iOS build issues, ensure that Xcode and CocoaPods are up to date.
- For Android build issues, confirm that Android Studio is configured with the correct SDK versions.



