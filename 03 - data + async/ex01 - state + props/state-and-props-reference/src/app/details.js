import { useState } from 'react';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

import StatePreviewCard from '../components/StatePreviewCard';

export default function DetailsScreen() {
  const router = useRouter();
  const [draftName, setDraftName] = useState('');
  const [profileName, setProfileName] = useState('Student');
  const [statusText, setStatusText] = useState('Build one preview to send fresh props into the child card.');

  function handleUpdateCard() {
    const trimmedName = draftName.trim();

    if (trimmedName.length === 0) {
      setProfileName('Student');
      setStatusText('Type a short name first so the parent can send a new prop value.');
      return;
    }

    setProfileName(trimmedName);
    setStatusText(`${trimmedName} is now arriving in the child card through props.`);
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>Parent route</Text>
        <Text style={styles.title}>State And Props Screen</Text>
        <Text style={styles.body}>
          This detail screen owns local state. The preview card below is a child component that receives the latest
          display values through props.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Parent-owned state</Text>
          <Text style={styles.cardBody}>Type one short display name, then update the child preview card.</Text>
          <TextInput
            value={draftName}
            onChangeText={setDraftName}
            placeholder="Type a short display name"
            placeholderTextColor="#7d7368"
            style={styles.input}
          />
          <Pressable style={styles.button} onPress={handleUpdateCard}>
            <Text style={styles.buttonLabel}>Update preview card</Text>
          </Pressable>
        </View>

        <StatePreviewCard name={profileName} statusText={statusText} />

        <Pressable style={styles.secondaryButton} onPress={() => router.back()}>
          <Text style={styles.secondaryButtonLabel}>Go back</Text>
        </Pressable>
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
  cardBody: {
    fontSize: 14,
    lineHeight: 21,
    color: '#5d554d',
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
