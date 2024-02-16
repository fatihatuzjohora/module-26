function calculationTruangleArea(){
    //trianglebase ke call kora holo
    const traingleBaseInput= document.getElementById('triangleBase');
    // base
    const traingleBaseValue=parseFloat(traingleBaseInput.value);
  
    // hight
    const traingleHightInput=document.getElementById('triangleleHight');
    const traingleHightValue=parseFloat(traingleHightInput.value);

    // area calculation
    const area=0.5*traingleBaseValue*traingleHightValue;

    // area calculation result
    const triangleAreaResultSpan= document.getElementById('triangleAreaResult');
    triangleAreaResultSpan.innerText=area;
}
//rectangle
function calculationRectangleArea(){
    // rectangleWidth ke call kora holo
    const rectangleWidthInput=document.getElementById('rectangleWidth');
    // width 
    const rectangleWidthValue=parseFloat(rectangleWidthInput.value);

    // length 
    const rectangleLengthInput=document.getElementById('rectangleLength');
    const rectangleLengthValue=parseFloat(rectangleLengthInput.value);
//calculation result
const area=rectangleWidthValue*rectangleWidthValue

    // result
    const rectangleAreaResultSpan=document.getElementById('rectangleAreaResult')
  rectangleAreaResultSpan.innerText=area;
}

// parallepgram

function calculationParallelogramArea () {
    const base=getInputValueById('parallelogramBase')
    const hight= getInputValueById('parallelogramHight')
    const area=base*hight;

    setInnerTextResult('parallelogramAreaResult', area);

}

function getInputValueById(inputField) {
    const inputFieldByid=document.getElementById(inputField);
    const inputFieldvalue=parseFloat(inputFieldByid.value)
    return inputFieldvalue;
}

function setInnerTextResult(elementId, area) {
    const element=document.getElementById(elementId);
    element.innerText=area;
}



    