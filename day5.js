const person = {
    fistname: "shanzay",
    lastname: "eman",
    class: {
        one: "middle",
        second: "upper",
        third: "lower"
    }
}
delete person.class.second;
let x = "second";

    document.getElementById("demo7").innerHTML =
    (`I'm ${person.class.second} class. `);
document.getElementById("demo5").innerHTML =
    (`I'm ${person.class.one} class. `);

document.getElementById("demo6").innerHTML =
    ("I'm" + person["fistname"]);
document.getElementById("demo").innerHTML =
    "Fullname is :" + " " + person.fistname + " " + person.lastname;

const bhn = new Object();
bhn.fistname = "Atif";
bhn.lastname = "Aslam";
bhn.age = "22";
document.getElementById("demo2").innerHTML =
    "My name is " + bhn.lastname + "or " + bhn.fistname + " " + " and my age is " + bhn.age;

let broder = new Object();
broder.name = "Habib bhae";
broder.age = "32";
broder.character = "Men";

document.getElementById("demo3").innerHTML =
    "I love my broder " + broder.name + " loves me tooo but you know he is : The " + broder.character;

function myTadow(a) {
    return "The value of a is:" + " " + a;
}
let s = myTadow(15);
document.getElementById("demo4").innerHTML = s;