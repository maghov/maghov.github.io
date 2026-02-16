# Counter App

A competitive web-based clicking game with Firebase integration. Each user gets their own personal counter while contributing to a global total. Compete with others to become the top clicker on the leaderboard!

## Features

- **Personal Counters**: Each user has their own individual click counter
- **Global Statistics**: Track total clicks across all users
- **Competitive Leaderboard**: See where you rank against other users
- **Persistent Storage**: All data is stored in Firebase Realtime Database
- **User Identification**: Enter your name and track your progress across sessions (stored in localStorage)
- **Real-time Updates**: Leaderboard updates automatically after each click
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Modern styling with flexbox, transitions, and responsive design
- **JavaScript (ES6+)**: Modular code with async/await patterns
- **Firebase**:
  - Firebase Realtime Database for data persistence
  - Firebase Analytics for usage tracking
  - Firebase JS SDK v9.19.1
- **localStorage**: For remembering user identity

## Project Structure

```
maghov.github.io/
├── index.html      # Main HTML file with embedded Firebase logic
├── style.css       # Stylesheet with organized styles and leaderboard design
├── script.js       # Additional utilities (minimal/future extensibility)
├── CNAME           # Custom domain configuration
└── README.md       # This file
```

## How It Works

### User System

1. **First Visit**: When you first open the app, you're prompted to enter your name
2. **Identity Storage**: Your username is saved in browser localStorage
3. **Returning Users**: Your username is automatically loaded on subsequent visits
4. **Change User**: Click the "Change User" button to switch to a different username

### Clicking Mechanism

1. Click the red circular button to increment your counter
2. Each click:
   - Increments your personal click count by 1
   - Increments the global total by 1
   - Updates your last click timestamp
   - Refreshes the leaderboard display

### Display

- **Your Clicks**: Shows your personal click count (pink box)
- **Global Total**: Shows total clicks across all users (green box)
- **Leaderboard**: Displays all users ranked by their click count
  - Your row is highlighted in green
  - Top 3 users get special background colors

### Firebase Database Structure

```
users/
  └── [userName]/
      ├── userName: (string)
      ├── clicks: (number)
      └── lastClick: (ISO 8601 timestamp)

globalStats/
  ├── totalClicks: (number)
  └── lastUpdated: (ISO 8601 timestamp)
```

Example:
```json
{
  "users": {
    "Alice": {
      "userName": "Alice",
      "clicks": 150,
      "lastClick": "2026-02-16T12:34:56.789Z"
    },
    "Bob": {
      "userName": "Bob",
      "clicks": 120,
      "lastClick": "2026-02-16T13:45:12.123Z"
    }
  },
  "globalStats": {
    "totalClicks": 456,
    "lastUpdated": "2026-02-16T13:45:12.123Z"
  }
}
```

## Setup Instructions

### Prerequisites

- A modern web browser with JavaScript enabled
- Internet connection (for Firebase CDN)

### Firebase Configuration

The app is pre-configured with Firebase credentials. To use your own Firebase project:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Realtime Database
3. Update the `firebaseConfig` object in [index.html](index.html) with your credentials:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
```

4. Update Firebase Database Rules for testing (make more restrictive for production):

```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### Running Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/maghov/maghov.github.io.git
   cd maghov.github.io
   ```

2. Open `index.html` in a web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000

   # Using Node.js (http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## User Interface

### Stats Display
Two stat boxes show:
- **Your Clicks** (pink border): Your personal click count
- **Global Total** (green border): Combined clicks from all users

### Leaderboard
The leaderboard table displays:
- **Rank**: Your position (1st, 2nd, 3rd, etc.)
- **User**: Username (with "(You)" indicator for your entry)
- **Clicks**: Number of clicks
- **Last Click**: Timestamp of the most recent click

### Rankings
- 🥇 **1st Place**: Gold background
- 🥈 **2nd Place**: Silver background
- 🥉 **3rd Place**: Bronze background
- **Your Entry**: Green highlight (regardless of rank)

## Security Considerations

**Important**: The Firebase API key is currently exposed in the client-side code. While Firebase API keys can be safely used in client applications with proper security rules, consider:

1. Setting up Firebase Security Rules to restrict database access
2. Using Firebase App Check to prevent abuse
3. Implementing rate limiting to prevent spam clicking
4. Adding authentication for verified users

### Recommended Security Rules

```json
{
  "rules": {
    "users": {
      "$userId": {
        ".read": true,
        ".write": "auth != null || $userId == newData.child('userName').val()"
      }
    },
    "globalStats": {
      ".read": true,
      ".write": true
    }
  }
}
```

## Future Enhancements

Potential features to add:

- **Authentication**: Firebase Authentication for verified users
- **Rate Limiting**: Prevent spam clicking (e.g., max 10 clicks/second)
- **Time-based Leaderboards**: Daily, weekly, monthly rankings
- **Achievements System**: Badges for milestones (100 clicks, 1000 clicks, etc.)
- **Click Animations**: Visual feedback with particle effects
- **Sound Effects**: Optional click sounds
- **Dark Mode**: Theme toggle
- **User Profiles**: Avatar images, join date, statistics
- **Auto-refresh**: Real-time leaderboard updates without manual refresh
- **Export Data**: Download your click history
- **Reset Function**: Admin ability to reset counters
- **Teams/Groups**: Collaborative clicking teams

## Browser Compatibility

- Chrome/Edge (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Requires:
  - ES6+ support (async/await, modules, arrow functions)
  - localStorage support
  - Promise support

## Privacy

- Usernames are stored locally in your browser's localStorage
- Only usernames, click counts, and timestamps are stored in Firebase
- No personal information, IP addresses, or tracking data is collected
- You can clear your username by clicking "Change User"

## License

This project is available as open source. Feel free to use and modify as needed.

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## Contact

For questions or feedback, please open an issue on the GitHub repository.

---

*Built with ❤️ using Firebase and vanilla JavaScript*

**Ready to click? See if you can become the #1 clicker!** 🏆
