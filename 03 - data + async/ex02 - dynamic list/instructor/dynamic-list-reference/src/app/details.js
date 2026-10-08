import { useState } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function DetailsScreen() {
  const router = useRouter();
  const [draftStep, setDraftStep] = useState('');
  const [studySteps, setStudySteps] = useState([
    { id: '1', label: 'Charge laptop' },
    { id: '2', label: 'Pack notebook' },
    { id: '3', label: 'Review key terms' },
  ]);

  function handleAddStep() {
    const trimmedStep = draftStep.trim();

    if (trimmedStep.length === 0) {
      return;
    }

    setStudySteps((currentSteps) => [
      ...currentSteps,
      { id: String(Date.now()), label: trimmedStep },
    ]);
    setDraftStep('');
  }

  function handleClearSteps() {
    setStudySteps([]);
  }

  function renderStep({ item, index }) {
    return (
      <View style={styles.stepRow}>
        <Text style={styles.stepIndex}>{index + 1}.</Text>
        <Text style={styles.stepLabel}>{item.label}</Text>
      </View>
    );
  }

  return (
    <View style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.eyebrow}>Array-driven route</Text>
        <Text style={styles.title}>Dynamic List Screen</Text>
        <Text style={styles.body}>
          This detail screen stores repeated items in an array and renders them with `FlatList`. If the array becomes
          empty, the screen switches to a clear empty-state message.
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Study steps</Text>
          <Text style={styles.cardBody}>Add one short study-prep step, then clear the list to test the empty state.</Text>
          <TextInput
            value={draftStep}
            onChangeText={setDraftStep}
            placeholder="Type one study step"
            placeholderTextColor="#7d7368"
            style={styles.input}
          />
          <View style={styles.buttonRow}>
            <Pressable style={styles.button} onPress={handleAddStep}>
              <Text style={styles.buttonLabel}>Add step</Text>
            </Pressable>
            <Pressable style={styles.secondaryAction} onPress={handleClearSteps}>
              <Text style={styles.secondaryActionLabel}>Clear list</Text>
            </Pressable>
          </View>
        </View>

        {studySteps.length === 0 ? (
          <View style={styles.emptyStateCard}>
            <Text style={styles.emptyStateTitle}>No study steps yet.</Text>
            <Text style={styles.emptyStateBody}>Add one short step to build the list again.</Text>
          </View>
        ) : (
          <View style={styles.listCard}>
            <Text style={styles.listLabel}>Current study list</Text>
            <FlatList
              data={studySteps}
              keyExtractor={(item) => item.id}
              renderItem={renderStep}
              ItemSeparatorComponent={() => <View style={styles.separator} />}
              style={styles.list}
              contentContainerStyle={styles.listContent}
            />
          </View>
        )}

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
    flex: 1,
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
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
    flexWrap: 'wrap',
  },
  button: {
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
  secondaryAction: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 999,
    backgroundColor: '#ece2d1',
  },
  secondaryActionLabel: {
    fontSize: 14,
    fontWeight: '700',
    color: '#4d3214',
  },
  listCard: {
    flex: 1,
    minHeight: 220,
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7cec4',
    borderRadius: 18,
    backgroundColor: '#fff8f2',
    gap: 10,
  },
  list: {
    flex: 1,
  },
  listContent: {
    paddingBottom: 12,
  },
  listLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8c5d35',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  stepRow: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'flex-start',
  },
  stepIndex: {
    fontSize: 14,
    fontWeight: '700',
    color: '#8c5d35',
    width: 20,
  },
  stepLabel: {
    flex: 1,
    fontSize: 15,
    lineHeight: 22,
    color: '#2d2620',
  },
  separator: {
    height: 10,
  },
  emptyStateCard: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7cec4',
    borderRadius: 18,
    backgroundColor: '#fff8f2',
    gap: 8,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '800',
    lineHeight: 24,
    color: '#2d2620',
  },
  emptyStateBody: {
    fontSize: 15,
    lineHeight: 22,
    color: '#5d554d',
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
