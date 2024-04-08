//The user clicks on the button and gets a random number generated between 0 and 9. If the number is 5, they win and are given a randomized set of digits as a voucher.
//If the number is not 5, they get an alert that says "Sorry, you have not won a free drink. You are welcome to try again. Good luck!"

//This function is used when the user clicks on the button.
function playGame() {
	
	const rando = Math.floor(Math.random() * 9);
	
	if (rando === 5) {
        const voucher = generateVoucher(10);
        alert("Congratulations! You have won a free drink. Your voucher is: " + voucher);
	
    } else {
        alert("Sorry, you have not won a free drink. You are welcome to try again. Good luck!");
    }
}
//This function is used when the user wins the game by getting a 5. The voucher is randomly generated and displayed on an alert.
function generateVoucher(length) {

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXY0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}
	