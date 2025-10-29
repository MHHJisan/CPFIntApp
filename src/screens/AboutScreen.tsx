import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg-mobile.png')}
        style={styles.heroBg}
        imageStyle={styles.heroImage}
        resizeMode="cover"
      >
        <Text style={styles.heading}>Who We Are ?</Text>
      </ImageBackground>
      <View style={styles.contentWrap}>
        <Text style={styles.bodyText}>
          We are change-makers from Companigonj, Noakhali, driven by gratitude
          and the spirit of giving. We support rural livelihoods, single
          mothers, and students with practical, sustainable assistance that
          creates lasting impact.
        </Text>
      </View>

      <ImageBackground
        source={require('../assets/bg-mobile.png')}
        style={styles.heroBg}
        imageStyle={styles.heroImage}
        resizeMode="cover"
      >
        <Text style={styles.heading}>
          ROOTED IN COMMUNITY, DRIVEN BY IMPACT ?
        </Text>
      </ImageBackground>
      <View style={styles.sectionWrap}>
        <Text style={styles.sectionTitle}>Our Vision</Text>
        <Text style={styles.bodyText}>
          We envision a world where empowered communities are the driving force
          of their own prosperity, equity, and resilience. This vision of
          empowered, prosperous, equitable, and resilient communities is not
          merely a distant aspiration; it is a roadmap for a brighter future. We
          want to bring this vision to life by supporting community-led
          development efforts.
        </Text>
      </View>
      <View style={styles.sectionWrap}>
        <Text style={styles.sectionTitle}>Our Mission</Text>
        <Text style={styles.bodyText}>
          Our mission is to create lasting change that empowers communities with
          skills, resources, and opportunities to thrive for generations to
          come. We want to identify the unique needs and aspirations of the
          communities we serve. We want to partner with them, building
          relationships and using their knowledge to deliver sustainable
          solutions that make a difference.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    backgroundColor: '#ffffff',
  },
  heroBg: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    marginBottom: 16,
  },
  heroImage: {
    opacity: 1,
  },
  heading: {
    fontSize: 22,
    fontWeight: '800',
    color: '#fff201ff',
    textTransform: 'none',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    paddingHorizontal: 16,
    color: '#000000ff',
    backgroundColor: '#000000ff',
  },
  contentWrap: {
    paddingHorizontal: 16,
  },
  sectionWrap: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    lineHeight: 24,
    fontWeight: '800',
    color: '#000000ff',
    marginBottom: 6,
    textAlign: 'center',

    backgroundColor: '#f6f327ff',
  },
  col: {
    flex: 1,
  },
  boldText: {
    fontSize: 16,
    lineHeight: 22,
    fontWeight: '700',
    color: '#111827',
  },
  bodyText: {
    fontSize: 15,
    lineHeight: 22,
    color: '#374151',
    fontWeight: '700',
    fontStyle: 'italic',
  },
});
