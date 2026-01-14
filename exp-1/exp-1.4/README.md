# Experiment 4: Simple Form SPA

## Aim
To build a basic form SPA using React with validation and data display.

## Procedure
1. Create form fields.
2. Store input using state.
3. Display submitted data.

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

## Features
- ✨ Multiple form fields (Name, Email, Phone, Subject, Message)
- ✨ Real-time form validation
- ✨ Error message display
- ✨ State management using React hooks
- ✨ Display submitted data in cards below form
- ✨ Delete individual submissions
- ✨ Clear all submissions at once
- ✨ Beautiful purple gradient design
- ✨ Responsive layout (centered form)
- ✨ Smooth animations and transitions

## Form Fields
- **Name** - Required text field
- **Email** - Required, must be valid email format
- **Phone** - Required, must be 10-digit number
- **Subject** - Required text field
- **Message** - Required, minimum 10 characters

## Technology Stack
- React 19.2.0
- Vite 7.2.4
- CSS3 with gradients and animations

## How It Works
1. Fill in all form fields (marked with *)
2. Click "Submit Form" button
3. Form validates all inputs
4. On success, data displays below and form clears
5. View all submissions in cards
6. Delete individual submissions or clear all
7. Timestamp shows when each submission was made
