const random_number = Math.floor(Math.random() * 100) + 1;



const btnGet = document.getElementById("myBtn")


btnGet.addEventListener("click", function(e) { 
let txtGet = document.getElementById("txtbox");
console.log("random number : ", random_number)

console.log("user input #  : ", txtGet.value)

    if (random_number == txtGet.value) {
        console.log("Equal========")
    }

    else if (random_number > txtGet.value) {
        console.log("Too low...")
    }

    else {
        console.log("Too high...")
    }


})


