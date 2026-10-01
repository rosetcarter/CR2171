import { StyleSheet, Text, View } from 'react-native';

export default function StatePreviewCard({ name, statusText }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Child component receiving props</Text>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.status}>{statusText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 18,
    borderWidth: 1,
    borderColor: '#d7cec4',
    borderRadius: 18,
    backgroundColor: '#fff8f2',
    gap: 8,
  },
  label: {
    fontSize: 13,
    fontWeight: '700',
    color: '#8c5d35',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  name: {
    fontSize: 20,
    fontWeight: '800',
    lineHeight: 26,
    color: '#2d2620',
  },
  status: {
    fontSize: 15,
    lineHeight: 22,
    color: '#5d554d',
  },
});
