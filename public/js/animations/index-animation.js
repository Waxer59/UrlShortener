// References

const copy = document.querySelector("#copy");
const urlArea = document.querySelector("#url");

// Listeners

copy.addEventListener("click", () => {
  var copyText = document.querySelector("#url");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  urlArea.classList.add("green-border");
  setTimeout(() => {
    urlArea.classList.remove("green-border");
  }, 5000);
});
