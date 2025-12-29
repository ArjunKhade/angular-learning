# Angular Learning Project

A modern Angular application demonstrating best practices and industry standards for Angular development.

## 🚀 Features

- **Component Architecture**: Well-organized component structure with shared and feature components
- **Routing**: Nested routing with lazy loading support
- **Forms**: Template-driven, reactive, and signal-based forms
- **UI Components**: Responsive sidebar navigation and header
- **Styling**: Tailwind CSS for modern, utility-first styling
- **Code Quality**: ESLint configuration with Angular-specific rules
- **Testing**: Unit tests with Vitest and Playwright for E2E testing

## 📁 Project Structure

```
src/
├── app/
│   ├── core/                    # Core services, guards, interceptors
│   ├── shared/
│   │   ├── components/          # Shared/reusable components
│   │   │   ├── header/
│   │   │   ├── sidenav/
│   │   │   ├── footer/
│   │   │   └── not-found/
│   │   └── index.ts            # Shared exports
│   ├── features/                # Feature modules
│   │   ├── dashboard/
│   │   ├── forms/
│   │   └── index.ts            # Feature exports
│   ├── app.config.ts           # Application configuration
│   ├── app.routes.ts           # Route definitions
│   ├── app.html               # Main app template
│   └── app.ts                 # Root component
├── styles.css                 # Global styles
└── main.ts                    # Application bootstrap
```

## 🛠️ Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The app will automatically reload on file changes.

### Building

Build the project for production:

```bash
npm run build
```

### Code Quality

Run linting:

```bash
npm run lint
```

Auto-fix linting issues:

```bash
npm run lint:fix
```

Format code:

```bash
npm run format
```

### Testing

Run unit tests:

```bash
npm test
```

Run E2E tests:

```bash
npm run e2e
```

## 🏗️ Architecture Decisions

### Component Organization

- **Shared Components**: Reusable UI components (header, sidenav, footer)
- **Feature Components**: Business logic specific components organized by feature
- **Index Files**: Barrel exports for cleaner imports

### State Management

- Component-level state management using Angular signals
- Local storage for sidebar state persistence

### Styling

- Tailwind CSS for utility-first styling
- Component-scoped styles for isolation

### Code Quality

- ESLint with Angular-specific rules
- Prettier for consistent code formatting
- TypeScript strict mode enabled

## 📋 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run unit tests
- `npm run e2e` - Run E2E tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Auto-fix linting issues
- `npm run format` - Format code with Prettier

## 🤝 Contributing

1. Follow the established project structure
2. Run `npm run lint` and `npm run format` before committing
3. Write tests for new features
4. Update documentation as needed

## 📄 License

This project is licensed under the MIT License.

````

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
````

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
