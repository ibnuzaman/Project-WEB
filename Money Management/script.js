let dashboard = document.getElementById("dashboard");
let incomes = document.getElementById("incomes");
let spendings = document.getElementById("spendings");
let settings = document.getElementById("settings");

dashboard.addEventListener('click',function(){
    
    dashboard.style.background = 'white';
    dashboard.style.color = '#865cff';
    incomes.style.background = '#865cff';
    incomes.style.color = 'white';
    spendings.style.background = '#865cff';
    spendings.style.color = 'white';
    settings.style.background = '#865cff';
    settings.style.backgroundClip = 'white';

})
incomes.addEventListener('click',function(){
    dashboard.style.background = '#865cff';
    dashboard.style.color = 'white';
    incomes.style.background = 'white';
    incomes.style.color = '#865cff';
    spendings.style.background = '#865cff';
    spendings.style.color = 'white';
    settings.style.background = '#865cff';
    settings.style.color = 'white';
})

spendings.addEventListener('click',function(){
    dashboard.style.background = '#865cff';
    dashboard.style.color = 'white';
    incomes.style.background = '#865cff';
    incomes.style.color = 'white';
    spendings.style.background = 'white';
    spendings.style.color = '#865cff';
    settings.style.background = '#865cff';
    settings.style.color = 'white';
})

settings.addEventListener('click',function(){
    dashboard.style.background = '#854cff';
    dashboard.style.color = 'white';
    incomes.style.background = '#865cff';
    incomes.style.color = 'white';
    spendings.style.background = '#865cff';
    spendings.style.color = 'white';
    settings.style.background = 'white';
    settings.style.color = '#865cff';
})
