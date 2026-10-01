import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();
  const [note, setNote] = useState('');
  const [responseText, setResponseText] = useState('No preview yet.');

  function handlePreview() {
    const trimmedNote = note.trim();

    if (trimmedNote.length === 0) {
      setResponseText('Type a short note first, then preview the response.');
      return;
    }

    setResponseText(`Preview: ${trimmedNote}`);
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <TextInput
          placeholder="Tell me what you had for breakfast"
          style={{ borderWidth: 1, padding: 12 }}
          onChangeText={(text) => { noteVar = text; }}
        />

        <Pressable onPress={() => console.log('pressed!')}>
          <Text>Preview Response</Text>
        </Pressable>

        <Text>{noteVar}</Text>
        {/* <Text style={styles.eyebrow}>Interactive detail route</Text>
        <Text style={styles.title}>Input Handling Screen</Text>
        <Text style={styles.body}>
          This screen captures a short note and shows visible feedback after the user presses the action button.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Try one short input</Text>
          <TextInput
            value={note}
            onChangeText={setNote}
            placeholder="Type a short note"
            placeholderTextColor="#7d7368"
            style={styles.input}
          />
          <Pressable style={styles.button} onPress={handlePreview}>
            <Text style={styles.buttonLabel}>Preview response</Text>
          </Pressable>
        </View>

        <View style={styles.responseCard}>
          <Text style={styles.responseLabel}>Visible response</Text>
          <Text style={styles.responseText}>{responseText}</Text>
        </View>

        <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
          <Text style={styles.secondaryButtonLabel}>Go back</Text>
        </Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5efe7',
    padding: 24,
    paddingTop: 42,
  },
  container: {
    gap: 18,
  },
  eyebrow: {
    fontSize: 12,
    fontWeight: '700',
    letterSpacing: 1,
    textTransform: 'uppercase',
    color: '#8c5d35',
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 36,
    color: '#1f1b18',
  },
  body: {
    fontSize: 15,
    lineHeight: 23,
    color: '#5d554d',
  },
  card: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7cec4',
    borderRadius: 18,
    backgroundColor: '#fffdfb',
    gap: 12,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
    color: '#2d2620',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d2c4b5',
    borderRadius: 14,
    padding: 12,
    fontSize: 14,
    lineHeight: 20,
    color: '#2d2620',
    backgroundColor: '#fffdfb',
  },
  button: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#8c5d35',
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#fffdfb',
  },
  responseCard: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7cec4',
    borderRadius: 18,
    backgroundColor: '#fff8f2',
    gap: 8,
  },
  responseLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8c5d35',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  responseText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#2d2620',
  },
  secondaryButton: {
    alignSelf: 'flex-start',
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#ece2d1',
  },
  secondaryButtonLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4d3214',
  },
});
