# KA-SHALI PRO-LEARNING CHRISTIAN ACADEMY — Website Workflow

## 1. Public website

A visitor opens the website in Chrome and can browse the public school information without installing the app.

### Public navigation
- Home
- About the School
- Courses & Classes
- Subjects / programme information
- Fees where published
- Contact
- School application / registration entry point
- Login

The public pages present KA-SHALI PRO-LEARNING CHRISTIAN ACADEMY using the supplied school information and photographs.

## 2. Login and role access

A registered user signs in through the website. The application identifies the user's role and displays the functions permitted for that role.

The V25 role model is retained:
- System Admin
- Principal
- Deputy Principal
- Teacher
- Secretary
- Accountant
- Parent
- Student

Role-based access is enforced by the application workflow; users should only see and operate functions assigned to their role.

## 3. Student / parent admission workflow

1. A parent opens the admission/application area.
2. The parent enters the learner's required information and selects the appropriate programme/class.
3. The parent submits the application and supporting learner information/documents.
4. The application enters the school's approval workflow.
5. An authorized school administrator reviews the application.
6. Once approved, the learner becomes part of the school's learner records.
7. If the learner later registers for a student account, the registration should link to the existing approved learner rather than create a second learner record.
8. The parent and student accounts then access information belonging to that learner according to their permissions.

## 4. Principal / Deputy approval workflow

- System Admin has the highest approval authority and can approve the school's registered users, including the Principal.
- Once authorized, the Principal can approve permitted school users.
- Once authorized, the Deputy Principal can approve permitted operational school users.
- System Admin remains the highest authority and Principal/Deputy access must not be used to create or approve a System Admin.

## 5. Teacher workflow

A teacher signs in and accesses the functions assigned to the teacher, including:
- Assigned classes
- Assigned subjects
- Learners belonging to those classes
- Attendance
- Marks
- Assignments
- Classroom chats
- Learning materials

### Marks
The teacher chooses:
1. Class
2. Subject
3. Term

Each subject has:
- Test 1
- Test 2
- Exam

The teacher can edit a mark directly where the teacher is authorized to teach that subject/class.

## 6. Large-class gradebook workflow

For classes containing many learners, the gradebook uses a compact table rather than separate large learner cards.

The teacher can:
- Search for a learner.
- Select the class.
- Select the subject.
- Select Term 1, Term 2 or Term 3.
- Enter Test 1, Test 2 and Exam marks.
- Navigate through groups/pages of learners.
- Edit an existing mark when authorized.

## 7. Final exam results workflow

Teachers enter Test 1, Test 2 and Exam marks during the term.

The final learner-facing result report shows **exam marks only**.

For each subject the learner can see:
- Subject
- Exam mark
- Symbol

The report also shows the aggregate/overall result information supported by the school's grading configuration.

### Student
The student can view their own results.

### Parent
The parent can view results belonging only to the approved/linked child or children.

## 8. Attendance workflow

Authorized teachers record attendance for learners in their assigned classes. Authorized school leadership can access attendance according to their role. Parents and students see only the attendance information permitted for their linked learner records.

## 9. Assignments workflow

### Teacher
1. Teacher creates/posts an assignment for the relevant class/subject.
2. Students in that class can view the assignment.
3. The teacher can receive student submissions and manage them according to the teacher's permissions.

### Student
1. Student opens the assignment.
2. Student selects the submission action.
3. Student selects the relevant grade/class, subject and teacher where required by the workflow.
4. Student attaches the supported file, such as a PDF or picture.
5. Student submits the assignment.
6. The selected teacher receives the submission.

### Teacher return workflow
1. Teacher opens the submitted assignment.
2. Teacher views/downloads the submitted file.
3. Teacher records the mark/feedback.
4. Teacher can resend the marked file where the workflow supports a returned document.
5. The student receives the returned submission.

## 10. Classroom chat and learning materials

Classroom communication is restricted to the appropriate class/role access.

Supported material workflows include:
- Text messages
- Voice notes/audio recording where browser/device permission is available
- PDFs
- Pictures
- Videos

Users with the required permissions can upload permitted materials. Other authorized users can view/play supported media and download supported files through the browser.

## 11. Parent workflow

A parent can access information belonging to the parent and approved/linked children, subject to role-based access control.

Parent functions include the V25-supported workflows for:
- Child information
- Applications
- Attendance
- Marks/results
- Assignments where available
- Fees/payment information
- Payment proof submission where available
- Feedback
- Notifications

A parent must not see unrelated learners' marks, attendance or private school information.

## 12. Parent feedback workflow

1. Parent submits feedback.
2. The feedback is saved.
3. A notification is created for the Principal/Head Teacher and Deputy Principal.
4. The recipient can open the notification and review the feedback.
5. Notification controls allow the user to manage/clear notifications according to the available notification workflow.

## 13. Secretary workflow

The Secretary's functions cover permitted administrative school work, including school notices, school calendar entries and other secretary functions provided by the application.

## 14. Accountant workflow

The Accountant can access permitted finance functions, including receipt/payment-proof workflows. Where a receipt or payment proof is submitted, the accountant can review it and use the available approval/download functions.

## 15. Notifications

Serious/relevant events generate notifications for the users who need to act on them. Notification controls include opening notifications and clearing/deleting notifications where supported.

The notification system should not treat routine student registration/approval events as phone alerts when the configured notification policy excludes them.

## 16. Web media workflow

The website uses browser-native web behavior:
- PDFs open in the browser PDF viewer.
- Videos use web video playback and can use full-screen controls supported by the browser.
- Pictures open in the web viewer.
- Downloads use the browser download mechanism.
- Voice recording uses microphone permission and requires an appropriate secure web context, normally HTTPS.
- Browser notifications require user permission.

## 17. Browser navigation

The website is designed for normal browser use. The browser/phone Back action should return the user to the previous website view rather than unexpectedly closing the application portal.

## 18. Production architecture

The current package is a frontend/local-data build. A real school-wide deployment requires a secure online backend so that data is shared between devices.

Production flow:

Browser → HTTPS website → authenticated backend/API → database + secure file/object storage → authorized user/browser

This is required for true multi-device operation such as:

Parent phone → submits application → server → Principal's device receives application.

The same architecture is required for shared attendance, marks, assignments, classroom files, receipts, notifications and results.
