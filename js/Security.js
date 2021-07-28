class Security {

    constructor(){

        // Add code to create the input and button elements
this.access1 = createInput("Code1")
this.access1.position(100,90);

this.access2 = createInput("Code2")
this.access2.position(100,290);

this.access3 = createInput("Code3")
this.access3.position(700,190);

this.botton1 = createButton('Check');
this.botton1.position(100,120);

this.botton2 = createButton('Check');
this.botton2.position(100,320);

this.botton3 = createButton('Check');
this.botton3.position(700,220);
    
    }
    display(){

        // Add code to make the buttons function as expected

this.botton1.mousePressed(() => {
    if(system.authenticate(accessCode1,this.access1.value())){
           this.botton1.hide();
           this.access1.hide();
score++
    }
})
this.botton3.mousePressed(() => {
    if(system.authenticate(accessCode2,this.access3.value())){
           this.botton3.hide();
           this.access3.hide();
score++
    }
})
this.botton2.mousePressed(() => {
    if(system.authenticate(accessCode3,this.access2.value())){
           this.botton2.hide();
           this.access2.hide();
score++
    }
})


    }
    
}