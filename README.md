# 🧠 Quiz Game

A fun, interactive browser-based quiz game built with vanilla HTML, CSS, and JavaScript. Test your knowledge with tricky riddle-style questions, instant feedback on your answers, and a score summary at the end.

---

## 🚀 Live Demo

> [Click here to play](https://dennis0474.github.io/Quiz-Game/)


## ✨ Features

- 5 riddle-style trivia questions
- Animated progress bar showing quiz completion
- Instant visual feedback — correct answers highlight green, wrong ones red
- Final score screen with a restart option
- Smooth fade-in animation on load
- Clean, responsive card layout centered on a gradient background

---

## 🛠️ Built With

- **HTML5** — semantic structure
- **CSS3** — animations, transitions, flexbox layout
- **Vanilla JavaScript** — game logic, DOM manipulation

---

## 📁 Project Structure

```
quiz-game/
├── index.html        # Main HTML file
├── quiz-game.css     # Styles and animations
└── quiz-game.js      # Quiz logic and question data
```

## 🎮 How to Play

1. Read the question displayed on the card
2. Click one of the answer options
3. Green = correct ✅ | Red = wrong ❌
4. Hit **Next** to move to the next question
5. See your final score at the end and restart if you'd like

---

## 🧩 Adding More Questions

Open `quiz-game.js` and add objects to the `questions` array:

```js
{
  question: "Your question here?",
  answers: ["Option A", "Option B", "Option C"],
  correct: 0  // index of the correct answer (0-based)
}
```
## 📄 License  
This project is open source and available under the [MIT License](LICENSE).
---

## 📫 Contact
- Email: dennisegheosaomoyibo@gmail.com

## 🙌 Author

Made by **[Dennis](https://github.com/Dennis0474)**
