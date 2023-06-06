window.addEventListener('DOMContentLoaded', () => {
    const exerciseInput = document.getElementById('exercise');
    const durationInput = document.getElementById('duration');
    const addExerciseBtn = document.getElementById('add-exercise-btn');
    const exerciseLog = document.getElementById('exercise-log');
  
    addExerciseBtn.addEventListener('click', () => {
      const exercise = exerciseInput.value;
      const duration = durationInput.value;
  
      if (exercise && duration) {
        const exerciseItem = document.createElement('li');
        exerciseItem.textContent = `${exercise}: ${duration} minutes`;
        exerciseLog.appendChild(exerciseItem);
  
        exerciseInput.value = '';
        durationInput.value = '';
      }
    });
  });
  