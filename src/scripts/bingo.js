// Create UI elements
const bingoStamp = `
  <span class="bingo__stamp">
    <svg class="bingo__stampSvg" aria-hidden="true"  width="64" height="64" viewBox="0 0 1022 1073" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="511" cy="511" r="490.5" fill="#4EFFBB" stroke="#4EFFBB" stroke-width="41"/>
      <path d="M231.868 622.259C217.372 622.259 206.348 635.541 207.915 650.622C211.858 688.527 222.04 724.418 237.303 757.103C241.377 765.84 249.812 771.437 259.102 771.437H259.321C277.083 771.437 288.888 751.952 281.006 735.299C267.89 707.623 259.151 677.151 255.787 644.963C254.445 632.089 244.242 622.259 231.868 622.259Z" fill="white"/>
      <path d="M770.964 407.516H683.675V315.957C683.672 208.986 602.938 122 503.678 122C404.516 122 323.778 208.986 323.778 315.957V407.516H230.127C216.83 407.516 206 419.048 206 433.465V581.623C206 595.539 216.782 606.824 230.078 606.824C243.374 606.824 254.156 595.539 254.156 581.623V459.41H323.778V610.816C323.778 717.686 404.516 804.773 503.678 804.773C602.935 804.773 683.672 717.686 683.672 610.816V459.41H746.837V615.19C746.837 761.526 636.373 880.623 500.547 880.623C429.357 880.623 365.13 847.898 320.127 795.685C315.396 790.197 308.804 786.875 301.74 786.875C280.852 786.875 269.474 812.784 283.353 829.118C332.147 886.558 400.25 924.656 476.521 931.327V1020.5H405.095C405.095 1020.5 381.066 1032.03 381.066 1046.45C381.066 1060.76 405.095 1072.4 405.095 1072.4H592.78C606.077 1072.4 616.907 1060.77 616.907 1046.45C616.907 1032.03 606.08 1020.5 592.78 1020.5H524.583V931.327C675.796 918.104 795 781.413 795 615.19V433.462C794.993 419.048 784.26 407.516 770.964 407.516ZM635.516 485.755H609.489C596.193 485.755 585.46 497.384 585.46 511.7C585.46 526.016 596.193 537.649 609.489 537.649H635.516V610.816C635.516 689.153 576.436 752.88 503.678 752.88C431.018 752.88 371.938 689.156 371.938 610.816V537.649H396.824C410.026 537.649 420.853 526.019 420.853 511.7C420.853 497.384 410.026 485.755 396.824 485.755H371.938V352.243H396.824C410.026 352.243 420.853 340.614 420.853 326.294C420.853 311.975 410.026 300.346 396.824 300.346H372.794C380.015 229.363 435.96 173.89 503.682 173.89C571.501 173.89 627.446 229.363 634.663 300.346H609.492C596.196 300.346 585.463 311.979 585.463 326.294C585.463 340.61 596.196 352.243 609.492 352.243H635.519L635.516 485.755Z" fill="white"/>
    </svg>
  </span>
  `;

const bingoHighlight = `
    <svg class="bingo__highlight" aria-hidden="true" viewBox="0 0 1363 149" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M494 25.9999L59.9999 5.99994L51.9999 14C31.3332 37.3333 -7.60012 89.6 1.99988 112C13.9999 140 166 142 186 148C206 154 720 102 746 124C772 146 1340 126 1358 124C1372.4 122.4 1352 58 1340 25.9999C1219.33 25.9999 977.6 21.9999 976 5.99994C974.4 -10.0001 654 12.6666 494 25.9999Z" fill="#4EFFBB"/>
    </svg>
  `;

// List Item Component
const bingoItem = (item, itemIndex) =>
  document.createRange().createContextualFragment(`
    <li class="bingo__item">
      <label class="bingo__label">
        <input type="checkbox" name="id="bingo-${itemIndex}" id="bingo-${itemIndex}" class="bingo__checkbox visually-hidden" value="${item}" required >
        <span class="bingo__itemText">
          ${item}
          ${bingoHighlight}
        </span>
        ${bingoStamp}
      </label>
    </li>`);

// An array of strings
const items = [
  "Somebody says “I love you”",
  "“I haven’t practiced this”",
  "A song from the 90s",
  "An original song",
  "Autoscroll issues",
  "Internet issues",
  "Audio issues",
  "Somebody is talking whilst muted",
  "Somebody has forgotten to mute",
  "A song with a colour in it",
  "Somebody cries",
  "Two people have prepared the same song",
  "A song from a musical/movie/tv show",
  "Glass of wine on screen",
  "A beer on screen",
  "Somebody drinks a strong spirit",
  "A song restarted in a different key",
  "Children on screen",
  "Wagon wheel",
  "Bob Dylan",
  "A hat",
  "A cat",
  "Somebody has a hot beverage",
  "Food on screen",
  "Somebody changes location",
  "Somebody says “tunes”in the chat",
  "Somebody dancing",
  "Multiple people singing along",
  "Somebody is playing along with someone else’s song",
  "A song from the 80s",
  "A song from the 70s",
  "A song from the 60s",
  "Three different instruments have been played by any musicians tonight",
  "A song with a rude word",
];

// Utility function for shuffling a passed array
const shuffleArray = (arr) =>
  arr
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);

// Creates a new array of objects containing the strings and their index
const indexedItems = items.map((item, index) => {
  return {
    id: index,
    label: item,
  };
});

// The number of items we want to display
const selectedItemsMax = 6;

function bingo() {
  // Creates array of selected items
  let selectedItems = [];
  if (localStorage.bingoItems) {
    // Checks if there's localstorage
    const selectedIds = JSON.parse(localStorage.bingoItems);
    console.log(selectedIds);
    // Sets selectedItems to the appropriate inxed items from the array
    selectedItems = selectedIds.map((item) => indexedItems[item]);
  } else {
    // Sets selected items to a random selection in a shuffled array
    selectedItems = shuffleArray(indexedItems).slice(0, selectedItemsMax);
    const selectedIds = selectedItems.map((item) => item.id);
    localStorage.bingoItems = JSON.stringify(selectedIds);
  }

  const bingoWrapper = document.getElementById("bingoCard");

  const resetButton = document.querySelector(".js-bingo-reset");
  resetButton.addEventListener("click", () => {
    // Remove localstorage
    localStorage.removeItem("bingoItems");
    // Empty container
    document.querySelector(".bingo__card").remove();
    // Build a new list
    bingo();
  });

  const buildBingoCard = (items) => {
    let itemsWrapper = document.createElement("ul");
    itemsWrapper.classList.add("bingo__card");
    items.map((item, index) => {
      itemsWrapper.appendChild(bingoItem(item.label, index));
    });
    return itemsWrapper;
  };

  if (bingoWrapper) {
    bingoWrapper.appendChild(buildBingoCard(selectedItems));
  }
}

const init = () => {
  bingo();
};

window.addEventListener("load", init);
