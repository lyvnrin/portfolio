# portfolio

Personal portfolio site — [lavanyakamble.vercel.app](https://lavanyakamble.vercel.app)

## Stack

- React + Vite
- Vanilla CSS (no UI library)
- Deployed on Vercel

## Structure
```
src/
├── components/
│   ├── Nav.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Cursor.jsx
├── App.jsx
└── index.css
```

## Running locally
```bash
npm install
npm run dev
```

Runs at `http://localhost:5173`

## Features

- Dictionary-style hero with animated typewriter
- Interactive particle network with mouse repulsion
- Offset navy box-shadow card hover effect
- Custom crosshair cursor
- Smooth scroll navigation

## Deployment

Deployed via Vercel. Any push to `main` triggers a redeploy automatically.