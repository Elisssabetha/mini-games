const guessNumber = () => {
  const number = Math.floor(Math.random() * 100) + 1;
  let useranswer;

  while (number !== useranswer) {
    useranswer = prompt("Попробуйте угадать число от 1 до 100");

    // Действие принажатии отмены
    if (useranswer === null) {
      alert("Игра завершена.");
      break;
    }

    useranswer = Number(useranswer);

    if (isNaN(useranswer)) {
      alert("Введено не число");
    } else {
      if (number === useranswer) {
        alert(`Верно! Загаданное число - ${number}`);
      } else {
        useranswer < number
          ? alert("Загаданное число больше")
          : alert("Загаданное число меньше");
      }
    }
  }
};

const getTask = () => {
  const operations = ["+", "-", "*", "/"];

  const operation = operations[Math.floor(Math.random() * operations.length)];
  let num1, num2, result;

  // разные рандомные числа для операций, чтобы задачи оставались простыми

  switch (operation) {
    case "+":
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      result = num1 + num2;
      break;

    case "-":
      num1 = Math.floor(Math.random() * 100) + 1;
      num2 = Math.floor(Math.random() * 100) + 1;
      result = num1 - num2;
      break;

    case "*":
      num1 = Math.floor(Math.random() * 20) + 1;
      num2 = Math.floor(Math.random() * 10) + 1;
      result = num1 * num2;
      break;

    case "/":
      num2 = Math.floor(Math.random() * 10) + 1;
      num1 = num2 * (Math.floor(Math.random() * 10) + 1);
      result = num1 / num2;
      break;
  }

  let task = `${num1} ${operation} ${num2}`;

  return [task, result];
};

const arithmeticTasks = () => {
  let correctAnswers = 0;
  let totalTasks = 0;

  while (true) {
    const [task, result] = getTask();

    while (true) {
      let useranswer = prompt(task);

      if (useranswer === null) {
        alert(
          `Игра завершена. Правильных ответов: ${correctAnswers} (из ${totalTasks}).`
        );
        return;
      }

      useranswer = Number(useranswer);

      if (isNaN(useranswer)) {
        alert("Введено не число. Попробуйте еще раз.");
        continue;
      }

      useranswer === result
        ? (alert("Верно"), correctAnswers++)
        : alert(`Неверено. ${task} = ${result}`);

      totalTasks++;
      break;
    }
  }
};

const reverseText = () => {
  while (true) {
    let text = prompt("Введите любой текст");

    if (text === null) {
      alert("Игра завершена.");
      break;
    }

    let reversedText = text.split("").reverse().join("");
    alert(reversedText);
  }
};

// Массив вопросов для викторины
const quiz = [
  {
    question: "Какого цвета небо?",
    options: ["1. Красного", "2. Синего", "3. Зеленого"],
    correctAnswer: 2,
  },
  {
    question: "Сколько дней в неделе?",
    options: ["1. Шесть", "2. Семь", "3. Восемь"],
    correctAnswer: 2,
  },
  {
    question: "Сколько у человека пальцев на одной руке?",
    options: ["1. Четыре", "2. Пять", "3. Шесть"],
    correctAnswer: 2,
  },
];

const quizGame = (quiz) => {
  let correctAnswers = 0;

  for (let task of quiz) {
    let userAnswer;

    while (true) {
      let option = task.options.join("\n");
      userAnswer = prompt(
        `${task.question}\n\n${option}\n\nВведите номер верного варианта ответа.`
      );

      if (userAnswer === null) {
        alert(`Игра завершена. Верных ответов: ${correctAnswers}`);
        return;
      }

      userAnswer = Number(userAnswer);

      if (!isNaN(userAnswer)) {
        break;
      } else {
        alert("Вы ввели не номер ответа. Попробуйте еще раз.");
      }
    }

    if (userAnswer === task.correctAnswer) {
      correctAnswers++;
    }
  }

  alert(`Верных ответов: ${correctAnswers} (из ${quiz.length})`);
};

const rockPaperScissors = () => {
  const variants = ["камень", "ножницы", "бумага"];
  let userChoice, computerChoice;
  let computerWins = 0;
  let userWins = 0;
  let draw = 0;
  let totalGames = 0;

  while (true) {
    userChoice = prompt("Введите свой вариант: камень, ножницы или бумага");

    //нажатие отмены
    if (userChoice === null) {
      alert(
        `Игра завершена. Всего было сыграно ${totalGames} игр.\nВаши победы: ${userWins}\nПобеды компьютера: ${computerWins}\nНичьи: ${draw}`
      );
      return;
    }

    userChoice = userChoice.toLowerCase();

    //некорректный ввод
    if (!variants.includes(userChoice)) {
      alert(
        "Пожалуйста, введите корректный вариант: камень, ножницы или бумага"
      );
      continue;
    }

    computerChoice = variants[Math.floor(Math.random() * 3)];
    totalGames++;

    switch (userChoice) {
      case computerChoice:
        draw++;
        alert(`Ничья - и вы выбрали, и компьютер выбрали ${userChoice}.`);
        break;

      case "камень":
        if (computerChoice === "ножницы") {
          userWins++;
          alert(
            `Вы выиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        } else {
          computerWins++;
          alert(
            `Вы проиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        }
        break;

      case "ножницы":
        if (computerChoice === "бумага") {
          userWins++;
          alert(
            `Вы выиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        } else {
          computerWins++;
          alert(
            `Вы проиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        }
        break;

      case "бумага":
        if (computerChoice === "камень") {
          userWins++;
          alert(
            `Вы выиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        } else {
          computerWins++;
          alert(
            `Вы проиграли! Вы выбрали ${userChoice}, компьютер выбрал ${computerChoice}.`
          );
        }
        break;
    }
  }
};

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

const changeColorBtnEl = document.querySelector("#random-color-btn");
const forChangeBgEls = document.querySelectorAll(".games, .mini-games");


changeColorBtnEl.addEventListener("click", function (e) {
  let color = getRandomColor()
  forChangeBgEls.forEach((el) => {
    el.style.backgroundColor = color;
  });
});

const mainPageBtn = document.querySelector('.main-page__btn');

function updateLink() {
  if (window.innerWidth < 768) { 
      mainPageBtn.href = '#mini_games'; 
  } else {
      mainPageBtn.href = '#about_games';
  }
}

window.addEventListener('load', updateLink);
window.addEventListener('resize', updateLink);


