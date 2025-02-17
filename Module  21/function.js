const number = 10;

// function syntex
function nam(){
   console.log("morshed rifat") // statements
}
nam();

function num(x,y){
   return x+y;

}
let sum = num(5,6);
console.log(sum);


// function structure

function macherTorkari(mach, shobji, mosla) {
   // রান্নার নির্দেশাবলী (কনসোল লগ)
   console.log("তেল গরম করুন");
   console.log("মসলা ফোঁড়ান");
   console.log("শাকসবজি দিন");
   console.log(mach + " দিন");

   // রান্নার শেষ (রিটার্ন ভ্যালু)
   return "সুস্বাদু মাছের তরকারি প্রস্তুত!";
   }
   // ফাংশন কল
   const result = macherTorkari ("ইলিশ", "আলু", "হলুদ");
   console.log(result); // ফলাফল প্রিন্ট করুন