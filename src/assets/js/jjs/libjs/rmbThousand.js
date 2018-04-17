// 金额千字符转换
function RmbTrafer(rmb){
    rmb=rmb+"";
    var numLength=rmb.length;
    if(numLength>5){
        var rmb1=rmb.substring(0,numLength-2);
        var rmb2=rmb.substring(numLength-2);
        rmb1=rmb1.split("").reverse();
        for(i=1;i<(numLength-2);i++){
            if(i%3==0){
                rmb1[i]=rmb1[i]+","
            }
        }
        rmb1.reverse();
        rmb1=rmb1.join("");
        return rmb1+"."+rmb2;
    }else if(numLength>3){
        var rmb1=rmb.substring(0,numLength-2);
        var rmb2=rmb.substring(numLength-2);
        return rmb1+"."+rmb2
    }else if(numLength==3){
        var rmb1=rmb.substring(0,1);
        var rmb2=rmb.substring(1);
        return rmb1+"."+rmb2
    }else if(numLength==2){
        return "0."+rmb;
    }else if(numLength==1){
        return "0.0"+rmb;
    }

}