import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24
  },
  eventName: {
    color: '#fdfcfe',
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 48
  },
  date: {
    color: "#6b6b6b",
    fontSize: 16
  },
  input: {
    backgroundColor: '#1F1E25',
    height: 56,
    borderRadius: 5,
    color: '#FDFCFE',
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 7
  },
  buttonText: {
    color: '#FDFCFE',
    fontSize: 24
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#fff',
    textAlign: 'center'
  }
});
