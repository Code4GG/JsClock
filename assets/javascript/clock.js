	const secondHand = document.querySelector('.second-hand');
	const minuteHand = document.querySelector('.min-hand');
	const hourHand = document.querySelector('.hour-hand');

	function setDate(){

		const now = new Date();

		const seconds = now.getSeconds();
		const secondsDegrees = ((seconds/60) * 360) + 90;
		secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
		console.log(seconds);

		if (seconds === 60){
			secondHand.style.transition = `all 0.00s`;
		}

		const minutes = now.getMinutes();
		const minuteDegrees = ((minutes/60) * 360) - 95;
		minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
		

		const hours = now.getMinutes();
		const hourDegrees = ((minutes/12) * 360) - 95;
		hourHand.style.transform = `rotate(${hourDegrees}deg)`;
		

	}

	setInterval(setDate, 1000);
