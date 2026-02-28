---
sidebar_position: 1
---

# Getting Started

Welcome to **PhotoSpectra** - your private photo library manager! This guide will help you get started with the app.

## What is PhotoSpectra?

PhotoSpectra is a mobile application that helps you manage and sync your photos with your own PhotoPrism server. It gives you complete control over your photo library with features like:

- 🔒 **Private & Secure**: Your photos stay on your device until you choose to sync
- 🔄 **Smart Sync**: SHA1-based deduplication prevents duplicate uploads
- 🌐 **Multi-Server**: Connect to multiple PhotoPrism servers
- ⚡ **Background Sync**: Automatic synchronization in the background
- 📱 **Full Media Support**: Photos, videos, and live photos

## Prerequisites

Before using PhotoSpectra, you'll need:

### 1. A PhotoPrism Server

PhotoSpectra requires a PhotoPrism server to sync your photos to. You can:

- **Self-host PhotoPrism** on your own hardware (Raspberry Pi, NAS, server, etc.)
- **Use a cloud-hosted PhotoPrism** instance
- **Set up PhotoPrism locally** for testing

For PhotoPrism installation instructions, visit: [PhotoPrism Documentation](https://docs.photoprism.app/getting-started/)

### 2. Mobile Device

PhotoSpectra supports:

- **iOS**: iPhone running iOS 13.0 or later
- **Android**: Android device running Android 6.0 or later

## Installation

### Download the App


---

## First-Time Setup

### Step 1: Launch PhotoSpectra

Open the PhotoSpectra app on your device.

### Step 2: Connect to Your PhotoPrism Server

On the login screen, enter:

1. **Server URL**: Your PhotoPrism server address (e.g., `https://photos.example.com`)
2. **Username**: Your PhotoPrism username
3. **Password**: Your PhotoPrism password

Tap **"Connect and Save"** to authenticate.

### Step 3: Grant Photo Library Access

PhotoSpectra will request permission to access your photo library. Grant this permission to:

- View your local photos
- Sync photos to your PhotoPrism server
- Access photo metadata

### Step 4: Explore Your Photos

Once connected, you can:

- Browse your local photos organized by albums
- View sync status for each photo
- Manually sync individual photos or entire albums
- Browse remote albums on your PhotoPrism server

## Basic Usage

### Syncing Photos

#### Manual Sync

1. Go to the **Photos** tab
2. Select photos you want to sync
3. Tap the **Sync** button
4. Wait for upload to complete

#### Automatic Background Sync

1. Go to **Settings** tab
2. Enable **"Auto Sync Background (24h)"**
3. PhotoSpectra will automatically sync new photos every 24 hours

### Managing Multiple Servers

1. Go to **Settings** tab
2. Tap **"Add Server"**
3. Enter new server credentials
4. Switch between servers as needed

### Viewing Remote Albums

1. Go to **Albums** tab
2. Browse **"Server Albums"** section
3. Tap an album to view photos
4. View photo details and metadata

## Understanding Sync Status

PhotoSpectra uses color-coded indicators to show sync status:

- 🔴 **Pending**: Photo not yet synced to server
- 🟢 **Synchronized**: Photo already exists on server
- **Verifying**: Checking if photo exists on server

## Tips for Best Experience

### Performance

- **WiFi Recommended**: Sync large photo libraries over WiFi to save mobile data
- **Selective Sync**: Only sync photos you want to keep long-term

### Privacy

- **Local First**: Photos stay on your device until you sync them
- **Secure Storage**: Credentials stored using platform-native secure storage
- **No Third Parties**: Direct connection between your device and your server

### Organization

- **Use Albums**: Organize photos into albums before syncing
- **Check Metadata**: Review photo information before upload
- **Filter Views**: Use filters to see only unsynced photos

## Troubleshooting

### Sync Problems

If photos aren't syncing:

1. Check internet connection
2. Verify sufficient storage on server
3. Check photo format is supported
4. Review error messages in app
5. Restart the app and try again.

### Performance Issues

If the app is slow:

1. Use filters to narrow down photo list
2. Restart the app and try again.

## Next Steps

Now that you're set up, explore more features:

- [View all Features](/features)
- [Check the Roadmap](/roadmap)
- [Read Privacy Policy](/privacy)
- Browse the mobile app source code in the `mobile/` folder

## Getting Help

Need assistance?

- **GitHub Issues**: [Report bugs or request features](https://github.com/fdbhub/photo-spectra/issues)
- **Documentation**: Browse other docs in this section

---

Ready to take control of your photo library? Start syncing with PhotoSpectra today!
