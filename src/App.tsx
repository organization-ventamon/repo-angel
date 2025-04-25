import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { useBiblicalPhrase } from "./hooks/useBiblicalPhrase";

export default function App() {
  const { error, fetchPhrase, loading, phrase } = useBiblicalPhrase();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases Bíblicas</Text>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <View style={styles.phraseContainer}>
          <Text style={styles.phrase}>{phrase}</Text>
        </View>
      )}

      {error ? <Text style={styles.error}>{error}</Text> : null}

      <TouchableOpacity
        style={styles.button}
        onPress={fetchPhrase}
        disabled={loading}
      >
        <Text style={styles.buttonText}>
          {loading ? "Esperando" : "Obtener frase"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  phraseContainer: {
    backgroundColor: "#f0f0f0",
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  phrase: {
    fontSize: 18,
    textAlign: "center",
    lineHeight: 24,
  },
  button: {
    backgroundColor: "#007AFF",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
