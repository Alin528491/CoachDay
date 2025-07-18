document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    let growthFactor = 1; // To track the growth of the "Yes" button
    let phraseIndex = 0;

    // Array of convincing phrases for the "Yes" button
    const convincingPhrases = [
        "Absolutely!",
        "Of course!",
        "I'd love to!",
        "You're amazing!",
        "Let's make it official!",
        "Yes, forever!"
    ];

    noButton.addEventListener('click', () => {
        // Increase the size of the "Yes" button
        growthFactor += 0.1; // Increment the growth factor
        yesButton.style.transform = `scale(${growthFactor})`;
        yesButton.style.fontSize = `${16 + (growthFactor - 1) * 10}px`; // Increase font size

        // Change the text of the "Yes" button to a new phrase
        if (phraseIndex < convincingPhrases.length) {
            yesButton.textContent = convincingPhrases[phraseIndex];
            phraseIndex++;
        } else {
            yesButton.textContent = "Yes";
            phraseIndex = 0;
        }
    });

    yesButton.addEventListener('click', () => {
        // Replace the content with the "Yes" response
        const rootDiv = document.getElementById('root');
        rootDiv.innerHTML = `
            <div class="flex flex-col items-center justify-center h-screen">
                <img class="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif " alt="Cute Love Bear with Roses">
                <h1 class="my-4 text-4xl">WOOOOOO!!! I love you pookie!! ;))</h1>
            </div>
        `;
    });
});