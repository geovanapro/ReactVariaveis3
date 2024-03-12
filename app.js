import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

export default function App() {
  const [comprimentoLado, setComprimentoLado] = useState('');
  const [baseTriangulo, setBaseTriangulo] = useState('');
  const [alturaTriangulo, setAlturaTriangulo] = useState('');
  const [areaQuadrado, setAreaQuadrado] = useState(null);
  const [areaTriangulo, setAreaTriangulo] = useState(null);

  const calcularAreaQuadrado = () => {
    const area = parseFloat(comprimentoLado) * parseFloat(comprimentoLado);
    setAreaQuadrado(area);
  };

  const calcularAreaTriangulo = () => {
    const area = (parseFloat(baseTriangulo) * parseFloat(alturaTriangulo)) / 2;
    setAreaTriangulo(area);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Área em React Native</Text>
      
      <Text style={styles.subtitle}>Quadrado:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite o comprimento do lado"
        onChangeText={(text) => setComprimentoLado(text)}
        keyboardType="numeric"
        value={comprimentoLado}
      />
      <Button title="Calcular Área do Quadrado" onPress={calcularAreaQuadrado} />

      {areaQuadrado !== null && (
        <Text style={styles.result}>Área do Quadrado: {areaQuadrado}</Text>
      )}

      <Text style={styles.subtitle}>Triângulo Equilátero:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite a base do triângulo"
        onChangeText={(text) => setBaseTriangulo(text)}
        keyboardType="numeric"
        value={baseTriangulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite a altura do triângulo"
        onChangeText={(text) => setAlturaTriangulo(text)}
        keyboardType="numeric"
        value={alturaTriangulo}
      />
      <Button title="Calcular Área do Triângulo" onPress={calcularAreaTriangulo} />

      {areaTriangulo !== null && (
        <Text style={styles.result}>Área do Triângulo: {areaTriangulo}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 10,
    fontSize: 18,
  },
});
