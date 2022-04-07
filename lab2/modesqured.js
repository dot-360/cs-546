 a=[1,22,22,3]
 maxValue=-1, 
 maxCount=0;
    for (let i = 0; i < a.length; i++) {
        count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[j] == a[i])
                count++;
            }
        
        if (count > maxCount) {
            maxCount = count;
            maxValue = a[i];
        }
    }

    //loop again and print only the highest modes
    for (let i = 0; i < a.length; i++) {
        let count = 0;
        for (let j = 0; j < a.length; j++) {
            if (a[j] == a[i])
                count++;
            }
    
        if (count == maxCount) {
            console.log(a);
        }
    }