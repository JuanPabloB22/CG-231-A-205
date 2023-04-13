function esParalelo(vector){
    if (vector [0] == 1 & vector [1] == 0){
        return true;

    }

    if (vector [0] == 1 & vector [2] == 0){
        return true;

    }

    if (vector [1] == 1 & vector [2] == 0){
        return true;

    }    
        return false;

    
     
}