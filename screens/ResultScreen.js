import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'

const ResultScreen = ({result}) => {
  return (
    <View style={styles.generalContainer}>
      <Card style={styles.container}>
        {
          result==="win" ? 
          <Text style={styles.resultado}>Has ganado! :)</Text>
          :
          <Text style={styles.resultado}>Has perdido! :(</Text>
        }
      </Card>
      {
        result === "win" ? 
        <Image
        style={styles.imageContainer}
        source={{
          uri: "https://us.123rf.com/450wm/vasilyrosca/vasilyrosca2004/vasilyrosca200400260/145426048-fondo-de-puntuaci%C3%B3n-de-victoria-de-falla-de-juego-retro-videojuego-ganas-texto-con-efecto-de-falla-.jpg?ver=6"
        }}/>
      :
        <Image 
        style={styles.imageContainer}
        source={{
        uri: "https://play-lh.googleusercontent.com/shAAX3m_CJQyahe1eIochbdEqH7FDiLEQ9i5WdI8DwNj2N9auke35k8CRmyL0mh7ULs"
        }}/>
      }
    </View>
  )
}

export default ResultScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        height: 300,
        width: 300,
        marginTop: 30,
        margin: "auto"
    },
    generalContainer: {
      marginTop: 20,
      alignItems: "center",
      justifyContent: "center"
    },
    resultado: {
      width: 300,
      textAlign: "center",
      color: colors.primary
    }
})