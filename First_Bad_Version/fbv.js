let solution = function (api) {
    return funciton(n) {
        let start = 1;
        let end = n;

        while (start <= end) {
            let mid = Math.floor((start + end) / 2);
            // if mid is bad version then 
            // end equals mid -1;
            if(api(mid)) {
                end = mid -1;
            } else {
                // mid is not bad version 
                start = mid + 1; 
            }
        }
        return start;
    };
}