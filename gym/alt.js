var id = -1
var count = 0
var del = 0
const fnames = []
const ages = []
const heights = []
const dates = []
var remove = document.getElementsByClassName("remove");
var tr = document.getElementsByTagName("TR");
var sn = document.getElementsByClassName('id');

function createUser(fname,age,height,date) {
    
        count = count + 1
        para = document.createElement("tr")
        document.getElementById("data_tbody").appendChild(para)
        para.classList = "newRow"
            var sn = document.createElement("tr")
			document.querySelectorAll(".tbody")[0].appendChild(sn)
            sn.classList = "snBody"
            snn = document.createElement('td')
            sn.appendChild(snn)
            snn.classList = "number"


			var Fullname = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(Fullname)
			
			var Age = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(Age)
			
			var Height = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(Height)
			
			var date_ = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(date_)

            var removee = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(removee)
            removee.classList = "remove"  
            
            snn.innerText = count
			Fullname.innerText = fname
			Age.innerText = age
			Height.innerText = height
            date_.innerText = date
            removee.innerText = "Delete"
			
                for (i = 0; i < (id + 1); i++) {
                    remove[i].onclick = function() {

                        var div = this.parentElement;
                        div.style.display = "none";
                        document.getElementById("data_tbody").removeChild(div)
                        
                        id = id - 1
                        count = count - 1

                        var divv = document.getElementById("sn_tbody").lastElementChild
                        divv.style.display = "none";
                        document.getElementById("sn_tbody").removeChild(divv)
                    
                    }
                }

}



function removeUser(){
    var number = document.createElement("td")
			document.querySelectorAll(".newRow")[id].appendChild(number)
}


function register(){
id = id + 1;
const user = {
    fname : document.getElementById('fname').value,
    age : document.getElementById('age').value,
    feet : document.getElementById("feet"),
    inch : document.getElementById("inch"),
    height : feet.value + '" ' + inch.value + "'",
    date : document.getElementById('startDate').value

}
    fnames.push(user.fname)
    ages.push(user.age)
    heights.push(user.height)
    dates.push(user.date)
    createUser(user.fname,user.age,user.height,user.date)
}

function validate(){
    const user = {
        fname : document.getElementById('fname').value,
        age : document.getElementById('age').value,
        feet : document.getElementById("feet"),
        inch : document.getElementById("inch"),
        height : feet.value + '" ' + inch.value + "'",
        date : document.getElementById('startDate').value
    }
    var d = new Date( user.date );

    if ( !!d.valueOf() ) {
        var year = d.getFullYear();
    } 

    if(user.fname.length < "15" && user.fname.length > "1" && user.age>="18" && user.age <="70" && user.feet.value !== "Feet" && user.inch.value !== "Inch" && year == 2023){
        register()
    } else{
        alert("Fill all provided fields and make sure the year is 2023")
    }
}