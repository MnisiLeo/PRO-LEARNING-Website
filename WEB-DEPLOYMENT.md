# KA-SHALI PRO-LEARNING CHRISTIAN ACADEMY — Web Deployment

This folder is the browser website edition based on the supplied V25 project.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local Vite address in Chrome.
5. For production, run `npm run build`.
6. Upload the contents of `dist/` to a static web host or hosting service.

## Production website behavior

- Public school pages work in Chrome without installing the Android app.
- Login, registration and role-based portal screens run in the browser.
- Browser back navigation is handled inside the portal.
- PDFs are opened with the browser's native PDF viewer.
- Images and videos open in the web viewer.
- Downloads use the browser's normal download mechanism.
- Voice notes use the browser microphone permission when the site is served over HTTPS.
- Browser notifications use the Web Notifications API when the user grants permission.
- Uploaded local materials and the demo/local data store use browser storage. This is suitable for a frontend/demo deployment.

## Important production architecture note

This package is a complete web frontend, but it is not yet a multi-device cloud backend. Browser localStorage/IndexedDB is isolated to each browser/device. For real school-wide use where a parent on one phone can submit an application and the principal on another device immediately sees it, the website must be connected to a secure backend/database and object storage. The frontend is structured so that those data/file services can replace the local storage layer without redesigning the public site.

## Website Admin URL

The public navigation does not expose the Website Admin. Open the CMS directly at:

```text
/website-admin
```

The Vite build also creates a `404.html` SPA fallback so the route can be opened directly on GitHub Pages/static hosting.

## Separate administration routes (V26)

- Public website: the normal GitHub Pages URL.
- Website CMS: append `/website-admin/` to the same site URL.
- System Admin login: use the **System Admin Login** button inside the Website Admin login/control panel. It opens the protected System Admin login route without adding a System Admin button to the public navigation.

The **View public website** button in Website Admin opens the actual public root URL rather than reopening the `/website-admin/` route.
