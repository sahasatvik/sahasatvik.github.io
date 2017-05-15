function showQuote() {
	var quotes = [
		{
			text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
			author: "Linus Torvalds"
		},
		{
			text: "Talk is cheap. Show me the code.",
			author: "Linus Torvalds"
		},
		{
			text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
			author: "Antoine de Saint-Exupéry"
		},
		{
			text: "Computers are good at following instructions, but not at reading your mind.",
			author: "Donald Knuth"
		}
	]

	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("qtext").innerHTML = '&quot;' + quote.text + '&quot;';
	document.getElementById("qauthor").innerHTML = '<i>' + quote.author + '</i>';
}
