function partyanimal(){
    this.x=0;
    this.party=function(){
        this.x=this.x+1;
        console.log("hello");
    }
}
    an=new partyanimal();
    an.party();


    
// break 
// Another method




class partyanimal{
   party(){
       console.log("helllo");
   }
}
an=new partyanimal();
an.party();
