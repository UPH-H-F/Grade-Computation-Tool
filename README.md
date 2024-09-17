# Passing Grade Calculator

This is a simple web-based tool to calculate the minimum required Midterm and Final grades to pass a subject. The grade composition is as follows: Prelim (20%), Midterm (30%), Final (50%). You need a total of at least 75% to pass.

## Setup Instructions

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge)
- A text editor (e.g., VS Code, Sublime Text) for any modifications
- Python (if setting up a web server with Flask)
- VS Code Live Server extension (preferred)

### Files

Ensure you have the following files in the same directory:

1. `app.py` (Flask application)
2. `index.html` (HTML file)
3. `style.css` (CSS file for styling)
4. `kelly-sikkema-2q_frVRXWfQ-unsplash.jpg` (background image)
5. `script.js` (JavaScript file for functionality)

### Steps to Run

**Preferred Method: Using VS Code Live Server Extension**

- Install the Live Server extension in VS Code.
- Open the project directory in VS Code.
- Right-click on `index.html` and select "Open with Live Server".
- Your default web browser will open the application, typically at `http://127.0.0.1:5500`.

**Quick Method: Drag and Drop**

- Simply drag the index.html file into your web browser.
- The application will open directly in your browser.

**Alternative Method: Using Flask**

1. **Install Flask**:
   If you haven't already, install Flask using pip:
   ```bash
   pip install flask
   ```

2. **Run the Flask Application**:
   Open your terminal, navigate to the project directory, and run:
   ```bash
   python app.py
   ```

3. **Open in Browser**:
   Open your web browser and go to `http://localhost:5000`.

### Usage

1. Enter the Prelim grade in the input field.
2. Click the "Calculate" button to see the minimum required Midterm and Final grades.
3. Adjust the sliders to see how different Midterm and Final grades affect the overall grade.
4. Click the "Reset" button to clear the input and start over.

### Example Workflow

1. **User Interaction:**
   - The student accesses the web interface via their browser (e.g., `http://127.0.0.1:5500` or `http://localhost:5000`).
   - The student is presented with a form to enter their Prelim grade.

2. **Input Submission:**
   - The student enters a numerical value for the Prelim grade and submits the form.

3. **Processing:**
   - The program validates the input.
   - It calculates the required Midterm and Final grades to achieve an overall grade of 75.
   - Determines if passing is possible based on the Prelim grade.

4. **Output Display:**
   - If passing is possible, the required grades are displayed.
   - If passing is not possible, an appropriate message is shown.
   - If the input is invalid, an error message prompts the user to enter a valid number.

### Notes

- Ensure the background image (`kelly-sikkema-2q_frVRXWfQ-unsplash.jpg`) is in the same directory as the HTML file.
- The tool dynamically updates the required grades based on the input and slider adjustments.
