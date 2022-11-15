import Header from "./components/Header";
import StartGameScreen from './screens/StartGameScreen';
import { StyleSheet, Text, View } from 'react-native';
import GameScreen from './screens/GameScreen';
import { useState } from 'react';
import {useFonts} from "expo-font";
import ResultScreen from "./screens/ResultScreen";

export default function App() {
  const [loaded] = useFonts({
    Roboto: require("./assets/fonts/Roboto-Regular.ttf")
  })
  const [winOrLose,setWinOrLose] = useState(false);
  const [result,setResult] = useState("");
  const [userNumber, setUserNumber] = useState();
  const handleStartGame = (selectedNumber)=> {
    setUserNumber(selectedNumber)
  }
  let content = <StartGameScreen onStartGame={handleStartGame}/>
  const handleFinishGame = (seleccion, number) => {
    if((seleccion === "lower" && userNumber < number) || (seleccion === "greater" && userNumber > number)){
      setResult("win");
    }else{
      setResult("lose");
    }
    setWinOrLose(true);
  }
  if(userNumber && winOrLose === true){
    content = <ResultScreen result={result}/>;
  }else if(userNumber){
    content = <GameScreen handleResult={handleFinishGame}/>;
  }
  if(!loaded){
    return null;
  }
  
  return (
    <View style={styles.container}>
      <Header title={"Adivina el numero"} newStyles={{fontFamily: "Roboto"}}/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
