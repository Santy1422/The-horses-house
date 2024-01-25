import { ScrollView, Text, View } from "react-native"
import { useFederation } from "../../CustomHooks.jsx/useFederation"
import { FirstFederationView } from "../../Components/FederationComponents/FirstFederationView"
import { JineteOneStep } from "../../Components/FederationComponents/JineteFederation/JineteOneStep"
import { JineteTwoStep } from "../../Components/FederationComponents/JineteFederation/JineteTwoStep"
import { CaballoOneStep } from "../../Components/FederationComponents/CaballoFederation/CaballoOneStep"
import { CaballoTwoStep } from "../../Components/FederationComponents/CaballoFederation/CaballoTwoStep"
import { BinomioOneStep } from "../../Components/FederationComponents/BinomioFederacion/BinomioOneStep"
import { BinomioTwoStep } from "../../Components/FederationComponents/BinomioFederacion/BinomioTwoStep"
import { BinomioThreeStep } from "../../Components/FederationComponents/BinomioFederacion/BinomioThreeStep"
import { FeiOneStep } from "../../Components/FederationComponents/FeiFederacion/FeiOneStep"
import PasaporteChip from "../../Components/FederationComponents/PasaporteChip/PasaporteChip"
import Club from "../../Components/FederationComponents/ClubFederacion/ClubOneStep"

export const Federacion  = () => {

const {
    steps, setSteps, tipoRegistro, setTipoRegistro, club, setClub, numeroCelular, setNumeroCelular,jinete, setJinete, caballo, setCaballo, receptorCredencial, setReceptorCredencial,entrenador, setEntrenador,costoFederacion, setCostoFederacion, comision, setComision, totalPagar, setTotalPagar
} = useFederation()



// enum: ['fei', 'caballo', 'binomio', 'jinete', 'federarClub', "pasaporteChip"],    

    return (
        <>
      {steps === 0 && <FirstFederationView setTipoRegistro={setTipoRegistro} setSteps={setSteps}/>}
      {/* Federacion del jinete */}
      {steps === 1 && tipoRegistro === "jinete" && <JineteOneStep setSteps={setSteps} jinete={jinete} setJinete={setJinete} numeroCelular={numeroCelular} club={club} setClub={setClub} setNumeroCelular={setNumeroCelular} />}
      {steps === 2 && tipoRegistro === "jinete" && <JineteTwoStep setSteps={setSteps} steps={steps} jinete={jinete} setJinete={setJinete}/>}
      {steps === 1 && tipoRegistro === "caballo" && <CaballoOneStep setSteps={setSteps} steps={steps} caballo={caballo} setCaballo={setCaballo} jinete={jinete} setJinete={setJinete} numeroCelular={numeroCelular} setNumeroCelular={setNumeroCelular} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} />}
      {steps === 2 && tipoRegistro === "caballo" && <CaballoTwoStep setSteps={setSteps} steps={steps}/>}  
      {steps === 1 && tipoRegistro === "binomio" && <BinomioOneStep setSteps={setSteps} steps={steps} jinete={jinete} setJinete={setJinete} numeroCelular={numeroCelular} setNumeroCelular={setNumeroCelular} club={club} setClub={setClub}/>}  
      {steps === 2 && tipoRegistro === "binomio" && <BinomioTwoStep setSteps={setSteps} caballo={caballo} setCaballo={setCaballo} jinete={jinete} numeroCelular={numeroCelular} setNumeroCelular={setNumeroCelular} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} />}  
      {steps === 3 && tipoRegistro === "binomio" && <BinomioThreeStep setSteps={setSteps} caballo={caballo} setCaballo={setCaballo} jinete={jinete} numeroCelular={numeroCelular} setNumeroCelular={setNumeroCelular} receptorCredencial={receptorCredencial} setReceptorCredencial={setReceptorCredencial} setJinete={setJinete}/>}  
      {steps === 1 && tipoRegistro === "fei" && <FeiOneStep setSteps={setSteps} steps={steps} jinete={jinete} setJinete={setJinete} numeroCelular={numeroCelular} setNumeroCelular={setNumeroCelular} club={club} setClub={setClub} caballo={caballo} setCaballo={setCaballo}/>}  
      {steps === 1 && tipoRegistro === "pasaporteChip" && <PasaporteChip setSteps={setSteps} steps={steps} />}  
      {steps === 1 && tipoRegistro === "federarClub" && <Club setSteps={setSteps} steps={steps} />}  
       
       </>
    )
}