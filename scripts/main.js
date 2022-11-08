function read_display_Quote(){
    //console.log("inside the function")

    //get into the right collection
    db.collection("quotes").doc("tuesday")
    .onSnapshot(function(tuesdayDoc) {
        //console.log(tuesdayDoc.data());
        document.getElementById("quote-goes-here").innerHTML=tuesdayDoc.data().quote;
    })
}
read_display_Quote();

function readQuote() {
    db.collection("quotes").doc("Tuesday")
        .onSnapshot(tuesdayDoc => {
            console.log("current document data: " + tuesdayDoc.data());
            document.getElementById("quote-goes-here").innerHTML = tuesdayDoc.data().quote;

            //Here are other ways to access key:value data fields
            //$('#quote-goes-here').text(tuesdayDoc.data().quote);                                       //using jquery object dot notation
            //$("#quote-goes-here").text(tuesdayDoc.data()["quote"]);                                    //using json object indexing
        })
}
readQuote()

function insertName(){
// to check if the user is logged in:
 firebase.auth().onAuthStateChanged(user =>{
     if (user){
         console.log(user.uid); // let me to know who is the user that logged in to get the UID
        currentUser = db.collection("users").doc(user.uid); // will to to the firestore and go to the document of the user
        currentUser.get().then(userDoc=>{
            //get the user name
            var user_Name= userDoc.data().name;
            console.log(user_Name);
            $("#name-goes-here").text(user_Name); //jquery
            // document.getElementByID("name-goes-here").innetText=user_Name;
        })    
    }

 })
}
insertName();

