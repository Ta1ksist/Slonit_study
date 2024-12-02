function Random() {
	return Math.floor(Math.random() * 100) + 1
}

function GuessNumber(secretNumber) {
	var low = 1
	var high = 100
	var attempt = 0

	while (true) {
		attempt++
		var guess = Math.floor((low + high) / 2)
		console.log(
			`Попытка ${attempt}: Проверка числа ${guess}, Диапазон: ${low}-${high}`
		)

        // switch (guess) 
        // {
        //     case guess < secretNumber:
        //         console.log("Больше")
        //         low = guess + 1
        //     case guess > secretNumber:
        //         console.log("Меньше")
        //         high = guess - 1
        //     case guess == secretNumber:
        //         console.log(`Поздравляем! Число угадано за ${attempt} попыток.`)
		//  	    break
        // }
		if (guess < secretNumber) {
			console.log('Больше')
			low = guess + 1
		} else if (guess > secretNumber) {
			console.log('Меньше')
			high = guess - 1
		} else {
			console.log(`Угадал! Ты угадал за ${attempt} попыток.`)
			break
		}
	}
}


function StartPlay() {
	const secretNumber = Random()

	GuessNumber(secretNumber)
}

StartPlay()