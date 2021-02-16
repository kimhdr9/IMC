
var submit = document.querySelector("#Submit");
var reset = document.querySelector("#Reset");

function type_bmi(val)
{
    var monstyle="success";
    if ( val > 25 && val <30){
        monstyle="warning";
    }
    if ( val > 30)
    {
        monstyle="danger";
    }
    return(monstyle);
}


class Indice{
    constructor(element){
        this.element=element;
        this.imc = this.element.querySelector("#IMC");  
    }
    
    calculIMC(){
        var taille = this.element.querySelector("#Taille");
        var poids = this.element.querySelector("#Poids");   
        var taille_metre = taille.value/100;
        var poids_kg=poids.value;
        var bmi;

        if ( taille_metre <= 0)
            {
                this.imc.textContent ="la taille doit être positive ";
            }
        else
            {
                var style_bmi="content is-large has-text-";
                bmi=poids_kg/(taille_metre*taille_metre);
                this.imc.style.display = "inline";
                this.imc.className = style_bmi+ type_bmi(bmi);
                this.imc.textContent = ' Votre IMC est de ' + bmi.toPrecision(2).toString();
            }
    }
    videIMC()
        {
            this.imc.style.display = "none";
        }

}
var formulaire = document.querySelector("#formulaire");
var BMI = new Indice(formulaire) ;

submit.addEventListener("click",()=>{
    BMI.calculIMC();
})

reset.addEventListener("click",()=>{
    BMI.videIMC();
})