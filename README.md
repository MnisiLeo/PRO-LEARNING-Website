# KA-SHALI PRO-LEARNING CHRISTIAN ACADEMY — Web V25

This project is the browser-based website edition of the V25 school application for **KA-SHALI PRO-LEARNING CHRISTIAN ACADEMY**.

The objective is to allow a person to open the school website in Chrome on a phone, tablet or computer and use the web interface normally, without installing the Android application.

## What this package contains

### Public school website
- Professional school home page
- About the School / prospectus information
- Courses & Classes
- Subjects and programme information
- School information and published fees where supplied
- Contact information and contact actions
- School application entry point
- Login
- Responsive layouts for phones, tablets and desktop browsers
- School photographs supplied for the website design

### School portal
The portal retains the V25 role structure and workflows for:
- System Admin
- Principal
- Deputy Principal
- Teacher
- Secretary
- Accountant
- Parent
- Student

Existing V25 areas include the applicable workflows for users, approvals, students, parents, teachers, attendance, marks, exam results, assignments, classroom communication, learning materials, fees, calendar, profiles and notifications.

## Important role rules

- System Admin has the highest administrative authority.
- System Admin can approve the Principal and other permitted users.
- Authorized Principal/Deputy Principal users can approve permitted operational school users according to their role permissions.
- Principal/Deputy users cannot create or approve a System Admin.
- Parents only access their approved/linked children.
- Students only access their own learner information.
- Teachers can work with the classes/subjects assigned to them.

## Learner identity

The intended workflow is one official school learner record per learner. A child who was already admitted through an approved parent application should not become a second learner simply because the child later creates a student login. The student account should link to the existing learner record.

## Marks and results

The teacher gradebook supports:
- Term 1, Term 2 and Term 3
- Test 1
- Test 2
- Exam
- Large classes using a compact/paginated gradebook
- Direct editing of marks where the teacher is authorized for the subject/class

The final student/parent results report shows **exam marks only**, together with the subject, symbol and aggregate/overall result information supported by the school's grading configuration. Test 1 and Test 2 are not displayed in the final results report.

## Parent feedback

When a parent submits feedback, the feedback workflow creates a notification for the Principal/Head Teacher and Deputy Principal so that the appropriate school leadership can review it.

## Website administration

The public website does **not** display a Website Admin button. The website CMS is a separate administration area at:

```text
/website-admin
```

Example on a custom domain:
`https://your-domain.example/website-admin`

Example on GitHub Pages:
`https://your-account.github.io/your-repository/website-admin`

The Website Admin controls the public website content (home hero slides, About School, Courses, Gallery, Contact and Admissions). It is separate from the EduLink **System Admin** used for school-management functions.

## Running the website locally

Requirements:
- Node.js 20 or newer
- npm

From the project directory:

```bash
npm install
npm run dev
```

Open the Vite address shown in the terminal in Chrome.

## Production build

Run:

```bash
npm install
npm run build
```

The production files are generated in:

```text
dist/
```

Upload the contents of `dist/` to a static web host if you are using the frontend/local-data version.

## Hosting on a domain

A normal website deployment can use a domain such as:

```text
https://your-school-domain.example
```

The host must serve the built `index.html` and static assets over HTTPS.

For a single-page React/Vite application, configure the host so that unknown application routes fall back to `index.html` when history-based navigation is used.

## Browser capabilities

The web version uses browser equivalents rather than Android-only APIs:

- PDFs → browser PDF viewer
- Videos → browser video player/full-screen support
- Pictures → browser image viewer
- Downloads → browser download mechanism
- Voice recording → browser microphone permission
- Browser notifications → Web Notifications API
- Back navigation → browser history/navigation

Microphone and notification features generally require the website to be served from a secure context such as HTTPS and require the user to grant permission.

## Critical production limitation

This package is a **complete web frontend**, but the current V25 data layer is not yet a shared cloud backend.

Browser `localStorage`/IndexedDB data belongs to the individual browser/device. Therefore, if this exact frontend is hosted without a backend:

- A parent using one phone does not automatically share newly entered data with a Principal using another device.
- Uploaded local files are not automatically available to other users/devices.
- Login/account data is not suitable for a real multi-user production deployment.

### Required architecture for the final online school system

```text
User's Chrome browser
        ↓ HTTPS
Ka-Shali website frontend
        ↓ secure API/authentication
Online backend
        ↓
Database + secure file/object storage
        ↓
Other authorized users/devices
```

This is required for genuine school-wide online operation of applications, approvals, students, attendance, marks, results, assignments, classroom files, receipts, notifications and other shared records.

## Project source

The V25 web package was created from the latest V25 project rather than starting a separate school application.

The exact application source remains in the project's React/Vite source tree. The Android-specific parts are not required to open the public website in Chrome.

## Documentation

See `WORKFLOW.md` for the detailed school and user workflows.
See `WEB-DEPLOYMENT.md` for web hosting/deployment notes.

## Separate administration systems

This V25 test website now has two separate administration areas:

1. **EduLink System Admin** — manages the school-management/learning platform: users, school records, approvals, notifications, learners and platform functions.
2. **Website Admin** — manages what visitors see on the public Ka-Shali website: Home/hero slides, About School, Courses, Gallery, Contact and Admissions content.

### Website Admin access

Open the public website and select **Website Admin** in the footer.

Initial credentials for this frontend test build:

- Username: `websiteadmin`
- Password: `KaShali@2026!`

After signing in, use **Security** to change the website-admin password.

> This V25 build is a frontend/local-storage test implementation. Website-admin content changes are stored in the browser's local storage, so they are not yet a shared server-side CMS for different visitors/devices. A real production CMS requires a backend/database and authenticated server-side administration API.
