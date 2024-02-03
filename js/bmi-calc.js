function bmiCalc(){

    var bmiCalcCount
    const weight = parseInt(document.getElementById('inputWeight').value)
    const height = parseInt(document.getElementById('inputHeight').value)

    bmiCalcCount = (weight / Math.pow((height/100),2)).toFixed(2)
    document.getElementById('resultBmi').textContent = bmiCalcCount

    if(bmiCalcCount <18.5){
        indicator = "Underweight"
    }else if(bmiCalcCount >= 18.5 && bmiCalcCount <= 24.9){
        indicator = "Nomral Weight"
    }else if(bmiCalcCount >= 25.0 && bmiCalcCount <= 29.9){
        indicator = "Overweight"
    }else if(bmiCalcCount >=30.0 && bmiCalcCount <= 34.9){
        indicator = "Obese"
    }else{
        indicator = "Extremelyobese"
    }

    console.log('test', indicator)
    document.getElementById('resultIndicator').textContent = indicator
    
    
}