import { Button, StyleSheet, Text, View } from 'react-native'
import Card from "../components/Card"
import React, { useEffect, useState } from 'react'

const GameScreen = ({handleResult}) => {
  const [currentGuess,setCurrentGuess] = useState();

  const generateRandom = (min, max) =>{
    const rNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    return rNumber;
  }
  useEffect(()=>{
    const rNumber = generateRandom(1,99);
    setCurrentGuess(rNumber);
  },[])
  return (
    <View style={styles.container}>
      <Text>La suposición del oponente</Text>
      <Text>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
        <Button title="Menor" onPress={()=>{handleResult("lower",currentGuess)}}/>
        <Button title="Mayor" onPress={()=>{handleResult("greater",currentGuess)}}/>
      </Card>
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: "90%"
  }
})