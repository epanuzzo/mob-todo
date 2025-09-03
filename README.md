# Todo App - Expo + React Native + TypeScript + Redux Toolkit

## 🛠 Tech Stack

- **Framework**: Expo (Managed) + React Native
- **Language**: TypeScript (strict mode)
- **State Management**: Redux Toolkit + React Redux
- **Persistence**: redux-persist with AsyncStorage
- **Styling**: styled-components/native with central theme system
- **Forms & Validation**: React Hook Form + Yup
- **Navigation**: Expo Router (file-based routing)
- **Testing**: Jest + @testing-library/react-native
- **Code Quality**: ESLint + Prettier

## 📁 Project Structure

```
├── app/                    # Expo Router routes (screens)
│   ├── index.tsx          # Home screen (task list)
│   └── _layout.tsx        # Root layout with providers
├── components/            # Atomic UI components
│   ├── atoms/             # Basic building blocks
│   │   └── Button/        # Example atomic component
│   ├── molecules/         # Component combinations
│   └── organisms/         # Complex components
├── redux/                 # Redux Toolkit setup
│   ├── store.ts           # Store configuration
│   ├── rootReducer.ts     # Root reducer
│   ├── slices/
│   │   └── tasksSlice.ts  # Tasks state management
│   └── selectors/         # Memoized selectors
├── constants/
│   ├── theme.ts           # Design system (colors, spacing, typography)
│   └── index.ts           # Exports
├── utils/                 # Helper functions
│   ├── validation.ts      # Yup validation utilities
│   └── dates.ts           # Date formatting utilities
├── dictionaries/          # i18n strings
│   └── en.ts              # English translations
└── services/              # API calls and external services
```

## 🎨 Component Architecture

Each atomic component follows this structure:

```
components/atoms/ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.types.ts # TypeScript interfaces
├── ComponentName.styled.ts # styled-components
├── ComponentName.test.tsx # Unit tests
└── index.ts               # Re-exports
```

## 🔧 Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio/Emulator (for Android development)

### Installation

1. **Clone and install dependencies:**

   ```bash
   cd todo
   npm install
   ```

2. **Start the development server:**

   ```bash
   npm start
   ```

3. **Run on different platforms:**
   ```bash
   npm run ios       # Run on iOS simulator
   npm run android   # Run on Android emulator
   npm run web       # Run on web browser
   ```

### Testing

Run the test suite:

```bash
npm test           # Run tests in watch mode
```

## 🏗 Development Guidelines

### Adding New Components

1. Create component folder in appropriate atomic level
2. Follow the component structure template
3. Reference theme constants for styling
4. Write comprehensive unit tests
5. Export from index.ts

### State Management

- Use Redux Toolkit's `createSlice` for state management
- Keep selectors in `redux/selectors/` with memoization
- Use typed hooks: `useAppDispatch`, `useAppSelector`
- Only persist necessary state (tasks data, not UI state)

### Styling

- Use styled-components with theme system
- Reference `constants/theme.ts` for all design tokens
- Follow mobile-first responsive design
- Implement proper shadows and accessibility

### Testing

- All components must have unit tests
- Test files placed alongside source files with `*.test.ts` suffix
- Use React Native Testing Library
- Mock external dependencies appropriately

## 📱 App Screenshots

_(Add screenshots of your app here once built)_

## 🚦 Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android
- `npm run ios` - Run on iOS
- `npm run web` - Run on web
- `npm test` - Run tests

## 🤝 Contributing

1. Follow the established folder structure and naming conventions
2. Write tests for new features
3. Use TypeScript strictly (no `any` types)
4. Reference theme constants for all styling
5. Follow atomic design principles

## 📄 License

This project is for educational purposes.
