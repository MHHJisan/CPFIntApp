import React, { useState, useCallback } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

export default function ContactScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = useCallback(() => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      Alert.alert('Missing info', 'Please fill out name, email, and message.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      Alert.alert('Invalid email', 'Please enter a valid email address.');
      return;
    }
    Alert.alert('Thank you!', 'Your message has been submitted.');
    setName('');
    setEmail('');
    setMessage('');
  }, [name, email, message]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: 'padding', android: undefined })}
      keyboardVerticalOffset={80}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Get in touch</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Address</Text>
          <Text style={styles.value}>19029 Gallop Drive, Germantown, MD 20874</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.value}>support@cpfint.org</Text>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.value}>+1 (718) 316-2585</Text>
        </View>

        <View style={styles.form}>
          <Text style={styles.formTitle}>Send us a message</Text>
          <TextInput
            placeholder="Name"
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="#9ca3af"
            autoCapitalize="words"
            returnKeyType="next"
          />
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="#9ca3af"
            keyboardType="email-address"
            autoCapitalize="none"
            returnKeyType="next"
          />
          <TextInput
            placeholder="Your message"
            value={message}
            onChangeText={setMessage}
            style={[styles.input, styles.textarea]}
            placeholderTextColor="#9ca3af"
            multiline
            numberOfLines={6}
            textAlignVertical="top"
          />
          <Pressable style={styles.submitBtn} onPress={onSubmit} accessibilityRole="button">
            <Text style={styles.submitText}>Submit</Text>
          </Pressable>
        </View>
        <View style={styles.legalWrap}>
          <Text style={styles.legalNote}>
            CPF Foundation is a 501(C)(3) charity organization, with Tax ID:87-1029937
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    textAlign: 'center',
    marginTop: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#0a2c63',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  label: {
    fontSize: 12,
    color: '#6b7280',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },
  form: {
    borderWidth: 1,
    borderColor: '#0a2c63',
    borderRadius: 12,
    padding: 16,
    backgroundColor: '#ffffff',
  },
  formTitle: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 8,
    color: '#0f172a',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 12,
    color: '#111827',
    backgroundColor: '#ffffff',
  },
  textarea: {
    height: 140,
  },
  submitBtn: {
    backgroundColor: '#092b62',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  submitText: {
    color: '#ffffff',
    fontWeight: '700',
  },
  legalWrap: {
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 24,
  },
  legalNote: {
    textAlign: 'center',
    color: '#6b7280',
    fontSize: 12,
    fontWeight: '600',
  },
});