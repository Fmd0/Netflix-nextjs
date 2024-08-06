# Netflix clone with NextJS

![screenshot](https://github.com/Fmd0/assets/blob/main/Netflix-NextJs-screenshot.jpg?raw=true)

A comprehensive and responsive clone of Netflix build with Nextjs, including landing page, auth page, app page, Movies page, TV Series page and My List Page.

Now you can find the live version at the [deployment URL](https://netflix-nextjs-mu.vercel.app/landing).


Features:

- Typescript, NextJS Setup
- MongoDB & Prisma connect, Database creation
- NextAuth authentication including credentials, Google/GitHub OAuth and Resend 
- SWR, data fetching and mutation
- Zustand state management 
- Tailwind CSS for customization of UI
- Full responsiveness on all pages


### Clone the repository

```shell
git clone https://github.com/Fmd0/Netflix-nextjs.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```env
AUTH_SECRET=
DATABASE_URL=
AUTH_RESEND_KEY=
AUTH_TRUST_HOST=true
AUTH_GOOGLE_ID=
AUTH_GOOGLE_SECRET=
AUTH_GITHUB_ID=
AUTH_GITHUB_SECRET=
```

### Setup prisma

```shell
npx prisma db push
```

### Start the app

```shell
npm run dev
```
