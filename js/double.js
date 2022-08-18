// <!-- একটা ওয়েবসাইট এ একটা input ফিল্ড থাকবে। তার সাথে একটা বাটন থাকবে double নামে। তুমি ইনপুট ফিল্ড এ যদি কোন সংখ্যা লিখো তাহলে নিচে সেই সংখ্যা ডাবল করে দেখাবে। আরেকটা বাটন থাকবে triple নামে। সেটাতে ক্লিক করলে ইনপুট ফিল্ড এ যে সংখ্যা আছে সেটা তিনগুণ হয়ে যাবে। সেই সংখ্যা নিচে দেখাবে। আর যদি ইনপুট ফিল্ড এ সংখ্যা ছাড়া কোন কথা লিখে তাহলে একটা এলার্ট (alert) দিয়ে বলবে Please enter a number। এলার্ট ক্যামনে দেয় সেটা নিয়ে বিস্তারিত অনেকদিন পরে আমরা ই দেখায় দিবো। আপাতত দেখো গুগলে সার্চ দিয়ে কিছু বের করতে পারো কিনা। -->
document.getElementById('make-double').addEventListener('click', function () {
    const newInputValue = getInputValueById('input-field');
    if (isNaN(newInputValue)) {
        alert('please provide a valid number');
        return;
    }
    const makeDouble = newInputValue * 2;
    setElementValueById('double-value', makeDouble);
})