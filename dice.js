function rollingDice() {
    var ran1 = Math.floor(Math.random()*6)+1;
    var ran2 = Math.floor(Math.random()*6)+1;

    document.getElementsByClassName("dice-1")[0].setAttribute("src","images/dice"+ran1+".png");
    document.getElementsByClassName("dice-2")[0].setAttribute("src","images/dice"+ran2+".png");
    // var playerOneDice = document.getElementsByClassName(dice-1);
    
    // let imgPath1 = document.getElementsByClassName("dice-1")[0].getAttribute("src");
    // let imgPath2 = document.getElementsByClassName("dice-2")[0].getAttribute("src");
    let diceNum1= ran1;//imgPath1.substring(11,12);
    let diceNum2= ran2;//imgPath2.substring(11,12);

    if(diceNum1 > diceNum2) {
        document.getElementsByClassName("refresh-heading")[0].innerText="🎉 Player 1 Won";
    }else if (diceNum1 < diceNum2) {
        document.getElementsByClassName("refresh-heading")[0].innerText="🎉 Player 2 Won";
    }else {
        document.getElementsByClassName("refresh-heading")[0].innerText="Draw";
    }

}
