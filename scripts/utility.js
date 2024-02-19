function showSection(sectionId){
    const section = document.getElementById(sectionId);
    section.scrollIntoView()
 }



 function hideElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('hidden');
 }
 function showElementById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('hidden');
 }

 function setBackgroundColorById(elementId){
    // const element = document.getElementsByClassName(elementClass);
    // const element = document.getElementsByClassName(elementClass);
    const element = document.getElementById(elementId)
    // console.log(element)
    element.style.backgroundColor = "#1DD100";
 }