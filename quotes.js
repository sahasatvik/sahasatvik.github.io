function showQuote() {
	var quotes = [
		{
			text: "Intelligence is the ability to avoid doing work, yet getting the work done.",
			author: "Linus Torvalds"
		},
		{
			text: "Talk is cheap. Show me the code!",
			author: "Linus Torvalds"
		},
		{
			text: "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.",
			author: "Antoine de Saint-Exupéry"
		},
		{
			text: "Computers are good at following instructions, but not at reading your mind.",
			author: "Donald Knuth"
		},
		{
			text: "In order to understand recursion, one must first understand recursion.",
			author: "Anonymous"
		},
		{
			text: "Perl – The only language that looks the same before and after RSA encryption.",
			author: "Keith Bostic"
		},
		{
			text: "Pro·gram·mer - An organism capable of converting caffeine in to code.",
			author: "Anonymous"
		},
		{
			text: "For every complex problem there is an answer that is clear, simple, and wrong.",
			author: "H L Mencken"
		},
		{
			text: "Never attribute to malice that which is adequately explained by stupidity.",
			author: "Hanlon's Razor'"
		},
		{
			text: "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
			author: "Martin Golding"
		},
		{
			text: "Any fool can use a computer. Many do.",
			author: "Ted Nelson"
		},
		{
			text: "There is no place like 127.0.0.1",
			author: "Anonymous"
		},
		{
			text: "Simplicity is prerequisite for reliability.",
			author: "Edsger W. Dijkstra"
		}
	]

	var quote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("qtext").innerHTML = '&quot;' + quote.text + '&quot;';
	document.getElementById("qauthor").innerHTML = '<i>' + quote.author + '</i>';
}
