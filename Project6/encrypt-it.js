/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
    
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log("Window loaded!");

    const encryptButton = document.getElementById("encrypt-it");
    encryptButton.addEventListener("click", handleEncrypt);

    const resetButton = document.getElementById("reset")
    resetButton.addEventListener("click", handleReset);
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncrypt() {
    console.log("Encrypt Clicked!");

    let inputText = document.getElementById("input-text").value;
    
    let encryptedText = shiftCipher(inputText);
    
    document.getElementById("result").textContent = encryptedText;
  }

  function handleReset() {
    console.log("Reset Clicked!");

    document.getElementById("input-text").value = "";
  }

  function shiftCipher(text) {
    text = text.toLowerCase();
    let result = "";

    for (let i = 0; i < text.length; i++) {
      let charCode = text.charCodeAt(i);

      if (charCode >= 97 && charCode <= 122) {
        if (charCode === 122) {
          result += 'a';
        } else {
          result += String.fromCharCode(charCode + 1);
        }
      } else {
        result += text[i];
      }
    }
    return result;
  }

})();