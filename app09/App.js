import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Vagas
      </Text>
      <ScrollView> 
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Desenvolvedor </Text>
          <Text style={styles.conteudo}> Salário: R$ 5000,00 </Text>
          <Text style={styles.conteudo}> Descrição: Atuar criando e analisando sistemas WEB em linguegem JAVA. </Text>
          <Text style={styles.conteudo}> Contato: curriculo@americanas.com </Text>
         
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Programador C# </Text>
          <Text style={styles.conteudo}> Salário: R$ 3000,00 </Text>
          <Text style={styles.conteudo}> Descrição: Atuar programando em sistemas existentes e desenvolvendo novas funcionalidades em C#. </Text>
          <Text style={styles.conteudo}> Contato: curriculo@microsoft.com </Text>
          
        </Card>
        <Card style={styles.cards}>
          <Text style={styles.titulo2}> Analista JR </Text>
          <Text style={styles.conteudo}> Salário: R$ 4000,00 </Text>
          <Text style={styles.conteudo}> Descrição: Atuar com analise de negocio do cliente, analise de requisitos, realizar diagramas da UML e outros. </Text>
          <Text style={styles.conteudo}> Contato: curriculo@google.com </Text>
          
        </Card>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  conteudo: {
    margin: 5,
    fontSize: 15
  },
  titulo:{
    margin: 24,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
  titulo2:{
    margin: 15,
    fontSize: 25,
    fontWeight: 'bold',
    color: 'orange',
    textAlign: 'center',
  },
  cards:{
    margin: 15
  }
});
