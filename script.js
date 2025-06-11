const quotes = [
    { content: "Be fearless in the pursuit of what sets your soul on fire.", author: "Unknown" },
    { content: "Dream big, code harder.", author: "Pixie" },
    { content: "Building calm code with wild ambition.", author: "Soumya" },
    { content: "Every bug is a puzzle waiting to be solved.", author: "Nyx" }
];

function getQuote() {
    const random = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = `"${random.content}"`;
    document.getElementById("author").textContent = `— ${random.author}`;
}

document.getElementById("generate").addEventListener("click", getQuote);
window.onload = getQuote;
