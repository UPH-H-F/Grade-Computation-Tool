// Wait for the DOM to fully load before executing the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the HTML elements
    const prelimGradeInput = document.getElementById('prelimGrade');
    const welcomeMessage = document.getElementById('welcome-message');
    const errorMessage = document.getElementById('error-message');
    const midtermSlider1 = document.getElementById('midtermSlider-1');
    const finalSlider1 = document.getElementById('finalSlider-1');
    const midtermSlider2 = document.getElementById('midtermSlider-2');
    const finalSlider2 = document.getElementById('finalSlider-2');
    const sliderContainer1 = document.getElementById('slider-container-1');
    const sliderContainer2 = document.getElementById('slider-container-2');
    const submitButton = document.getElementById('submitButton');

    // Function to calculate grades based on the prelim grade input
    function calculateGrades() {
        const prelimGrade = parseFloat(prelimGradeInput.value);
        if (!isNaN(prelimGrade) && prelimGrade >= 0 && prelimGrade <= 100) {
            // Hide welcome message and clear any error messages
            welcomeMessage.style.display = 'none';
            errorMessage.textContent = '';
            // Enable sliders and show the slider container
            midtermSlider1.disabled = false;
            finalSlider1.disabled = false;
            sliderContainer1.style.display = 'block';

            // Calculate the required points to achieve a 75% final grade
            const requiredPoints = 75 - (prelimGrade * 0.2);

            // Check if achieving 75% is possible with the given prelim grade
            if (requiredPoints < 0 || requiredPoints > 80) {
                errorMessage.textContent = 'Achieving 75% is not possible with the given Prelim grade.';
                midtermSlider1.disabled = true;
                finalSlider1.disabled = true;
                sliderContainer1.style.display = 'none';
            } else {
                // Calculate the minimum midterm and final grades needed
                const minMidtermFinal = requiredPoints / 0.8;
                updateSliders(minMidtermFinal, minMidtermFinal);
            }

            // Change the submit button to a reset button
            submitButton.textContent = "Reset";
            submitButton.style.backgroundColor = '#00d4ff';
            submitButton.removeEventListener('click', calculateGrades);
            submitButton.addEventListener('click', resetValues);
        } else {
            // Display error message if the prelim grade input is invalid
            welcomeMessage.style.display = 'none';
            errorMessage.textContent = isNaN(prelimGrade) ? 
                'Please enter a number between 0 and 100 for your Prelim grade.' : 
                'Please enter a valid Prelim grade (0-100).';
            midtermSlider1.disabled = true;
            finalSlider1.disabled = true;
            sliderContainer1.style.display = 'none';
        }
    }

    // Function to reset all values to their initial state
    function resetValues() {
        prelimGradeInput.value = '';
        midtermSlider1.value = 0;
        finalSlider1.value = 0;
        midtermSlider1.disabled = true;
        finalSlider1.disabled = true;
        sliderContainer1.style.display = 'none';
        errorMessage.textContent = '';
        welcomeMessage.style.display = 'block';
        submitButton.textContent = "Calculate";
        submitButton.removeEventListener('click', resetValues);
        submitButton.addEventListener('click', calculateGrades);
    }

    // Function to update the slider values and display recommended grades
    function updateSliders(midtermValue, finalValue) {
        midtermSlider1.value = midtermValue;
        finalSlider1.value = finalValue;
        errorMessage.textContent = `Recommended Midterm Grade: ${midtermValue.toFixed(2)}`;
        errorMessage.textContent += `\nRecommended Final Grade: ${finalValue.toFixed(2)}`;
    }

    // Function to handle slider input and calculate the required grade for the other slider
    function handleSliderInput(slider, otherSlider, weight, otherWeight) {
        const grade = parseFloat(slider.value);
        const prelimGrade = parseFloat(prelimGradeInput.value);
        let requiredOther = (75 - (prelimGrade * 0.2) - (grade * weight)) / otherWeight;

        // Ensure the required grade is within valid range (0-100)
        requiredOther = Math.max(0, Math.min(100, requiredOther));
        errorMessage.textContent = `Recommended Midterm Grade: ${midtermSlider1.value}`;
        errorMessage.textContent += `\nRecommended Final Grade: ${finalSlider1.value}`;

        otherSlider.value = requiredOther;
        checkAndDisableSliders();
    }

    // Function to disable sliders if they reach the maximum value
    function checkAndDisableSliders() {
        midtermSlider1.disabled = midtermSlider1.value == 100;
        finalSlider1.disabled = finalSlider1.value == 100;
    }

    // Add event listeners to the sliders and submit button
    midtermSlider1.addEventListener('input', () => handleSliderInput(midtermSlider1, finalSlider1, 0.3, 0.5));
    finalSlider1.addEventListener('input', () => handleSliderInput(finalSlider1, midtermSlider1, 0.5, 0.3));

    submitButton.addEventListener('click', calculateGrades);
});