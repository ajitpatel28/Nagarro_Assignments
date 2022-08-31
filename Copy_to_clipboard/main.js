btn.addEventListener("click", () => {
var copy = document.getElementById("copy");
  copy.select();
  copy.setSelectionRange(0, 1000);
  navigator.clipboard.writeText(copy.value);

    copied.style.top = "-55px"
        copied.style.opacity = "1"
        setTimeout(() => {
            copied.style.top = "-40px"
            copied.style.opacity = "0"
        }, 1000);
})

btn1.addEventListener("click", () => {
    var paste = document.getElementById("paste");
      paste.value= '';

      navigator.clipboard.readText().then((text)=> {paste.value= text;});
    });