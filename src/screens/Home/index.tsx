import { FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
  const participants = ['Pietra', 'Valentina', 'Elisete', 'Pedro', 'Sueli', 'Guilherme', 'Roseli', 'Roseneide', 'Eder', 'Zilda', 'Kauã', 'Kaio'];

  function handleParticipantAdd() {
    console.log('Adicionou participante');
  }

  function handleParticipantRemove(name: string) {
    console.log(`Remove participante ${name}`);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do Evento</Text>

      <Text style={styles.date}>Sexta, 5 de Novembro de 2023.</Text>

      <View style={styles.form}>
        <TextInput 
          style={styles.input} 
          placeholder='Nome do participante'
          placeholderTextColor="#6b6b6b"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleParticipantAdd}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={participants}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <Participant 
              key={item} 
              name={item} 
              onRemove={() => handleParticipantRemove(item)} 
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.</Text>
        )}
      />
    </View>
  );
}
